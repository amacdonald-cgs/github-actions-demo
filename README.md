# Overview
Simple Node.js application to demonstrate the use of GitHub Actions

# Look Ma, no Makefile!
All the tasks necessary for testing, building and deploying this code is already defined in `.github/workflows/` so why would you want to also create a `Makefile` for local development?  Now you can use [act](https://github.com/nektos/act) to run the actions locally!

Try these:

* `act -j test` - run the tests
* `act` - run the the entire pipeline
* `act -l` - view the execution graph

Some configurations were taken from 
https://medium.com/@merisstupar11/effortless-ci-integration-running-playwright-tests-with-github-actions-9df48837d68f

Other tagging recommendations can be found at
https://medium.com/@merisstupar11/strategic-tagging-optimizing-your-playwright-test-suit-4ab109343fed

repo for above blogs
https://github.com/MediumMeris/playwrightGithubActions/tree/main

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - ./e2e/example.spec.ts - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - ./playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨
