import axios from 'axios';

interface ServiceConfig {
  endpointUrl: string;
  apiKey: string;
}

interface Service {
  name: string;
  config: ServiceConfig;
}

interface ServiceCheckResult {
  name: string;
  healthy: boolean;
  payload?: any;
}

export async function checkServices(services: Service[]): Promise<ServiceCheckResult[]> {
  const results: ServiceCheckResult[] = [];

  for (const service of services) {
    try {
      const response = await axios.get(service.config.endpointUrl, {
        headers: {
          accept: 'application/json',
          'x-api-key': service.config.apiKey,
        },
      });

      if (response.data.error === null) {
        console.log(`no errors for ${service.name}`);
        results.push({
          name: service.name,
          healthy: true,
          payload: response.data.data,
        });
      } else {
        results.push({
          name: service.name,
          healthy: false,
          payload: response.data.error,
        });
      }
    } catch (error) {
      results.push({
        name: service.name,
        healthy: false,
        payload: error.message,
      });
    }
  }

  return results;
}
