import { test, expect } from '@playwright/test';
import { checkServices } from '../test-helpers/healthChecks';

test('Check API services', { tag: '@health' }, async () => {
  const apiKey = process.env.HEYGEN_API_KEY;
  expect(apiKey).toBeDefined();
  const heyGenCriticalThreshold: string = process.env.HEYGEN_CRITICAL_THRESHOLD || '9000';
  const heyGenWarningThreshold: string = process.env.HEYGEN_WARNING_THRESHOLD || '20000';


  const services = [
    {
      name: 'Heygen Service',
      config: {
        endpointUrl: 'https://api.heygen.com/v2/user/remaining_quota',
        apiKey: apiKey || '',
      },
    },
    // Add more services here...
  ];

  const results = await checkServices(services);
  console.log(`results: ${JSON.stringify(results)}`);
  expect(results).toEqual([
    {
      name: 'Heygen Service',
      healthy: true,
      payload: expect.anything(),
    },
    // Add more expected results here...
  ]);
  // the payload for Heygen Service should have a 'remaining_quota' property with a value no less than 30000
  expect(results[0].payload.remaining_quota).toBeGreaterThanOrEqual(Number(heyGenCriticalThreshold));

});
