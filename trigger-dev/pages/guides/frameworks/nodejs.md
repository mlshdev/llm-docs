> Release-pinned source for Trigger.dev v4.5.16: [docs/guides/frameworks/nodejs.mdx](https://trigger.dev/docs/guides/frameworks/nodejs)

# Node.js setup guide

This guide will show you how to setup Trigger.dev in your existing Node.js project, test an example task, and view the run.

## Prerequisites

- Setup a project in Node.js
- Ensure TypeScript is installed
- [Create a Trigger.dev account](https://cloud.trigger.dev)
- Create a new Trigger.dev project

## Initial setup

1. The easiest way to get started is to use the CLI. It will add Trigger.dev to your existing project, create a `/trigger` folder and give you an example task.

   Run this command in the root of your project to get started:

   ```bash npm
   npx trigger.dev@latest init
   ```

   ```bash pnpm
   pnpm dlx trigger.dev@latest init
   ```

   ```bash yarn
   yarn dlx trigger.dev@latest init
   ```

   It will do a few things:

   > **Tip**
   >
   > Our [Trigger.dev MCP server](https://trigger.dev/docs/mcp-introduction) gives your AI assistant direct access to Trigger.dev tools; search docs, trigger tasks, deploy projects, and monitor runs. We recommend installing it for the best developer experience.

   1. Ask if you want to install the [Trigger.dev MCP server](https://trigger.dev/docs/mcp-introduction) for your AI assistant.
   2. Log you into the CLI if you're not already logged in.
   3. Ask you to select your project.
   4. Install the required SDK packages.
   5. Ask where you'd like to create the `/trigger` directory and create it with an example task.
   6. Create a `trigger.config.ts` file in the root of your project.

   Install the "Hello World" example task when prompted. We'll use this task to test the setup.

1) The CLI `dev` command runs a server for your tasks. It watches for changes in your `/trigger` directory and communicates with the Trigger.dev platform to register your tasks, perform runs, and send data back and forth.

   It can also update your `@trigger.dev/*` packages to prevent version mismatches and failed deploys. You will always be prompted first.

   ```bash npm
   npx trigger.dev@latest dev
   ```

   ```bash pnpm
   pnpm dlx trigger.dev@latest dev
   ```

   ```bash yarn
   yarn dlx trigger.dev@latest dev
   ```

1. The CLI `dev` command spits out various useful URLs, including a link to the dashboard. Open it, find your Example task on the Tasks page, and press the "Test" button to open its test page.

   Most tasks have a "payload" which you enter in the JSON editor, but our example task doesn't need any input. You can also configure run options, pre-populate the form from recent runs, and save run templates.

   Press the "Run test" button.

   ![Test page](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/images/test-dashboard.png)

1) Congratulations, you should see the run page which will live reload showing you the current state of the run.

   ![Run page](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/images/run-page.png)

   If you go back to your terminal you'll see that the dev command also shows the task status and links to the run log.

   ![Terminal showing completed run](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/images/terminal-completed-run.png)

## Useful next steps

- [Tasks overview](https://trigger.dev/docs/tasks/overview)

  Learn what tasks are and their options
- [Writing tasks](https://trigger.dev/docs/writing-tasks-introduction)

  Learn how to write your own tasks
- [Deploy using the CLI](https://trigger.dev/docs/cli-deploy-commands)

  Learn how to deploy your task manually using the CLI
- [Deploy using GitHub actions](https://trigger.dev/docs/github-actions)

  Learn how to deploy your task using GitHub actions
