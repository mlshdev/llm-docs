> Commit-pinned source for n8n main: [docs/connect/create-nodes/build-your-node/set-up-your-development-environment.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/connect/create-nodes/build-your-node/set-up-your-development-environment.md)

# Set up your development environment <a id="set-up-your-development-environment"></a>

This document lists the essential dependencies for developing a node, as well as guidance on setting up your editor.

## Requirements <a id="requirements"></a>

To build and test a node, you need:

- Node.js and npm. Minimum version Node 22.22.0. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL (Windows Subsystem for Linux) [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
- A local instance of n8n. You can install n8n with `npm install n8n -g`, then follow the steps in [Run your node locally](https://docs.n8n.io/connect/create-nodes/test-your-node/run-your-node-locally) to test your node.
- When [building verified community nodes](https://docs.n8n.io/integrations/community-nodes/building-community-nodes), you must use the [`n8n-node` tool](https://docs.n8n.io/connect/create-nodes/build-your-node/using-the-n8n-node-tool) to create and test your node.

You should also have [git](https://git-scm.com/) installed. This allows you to clone and use the [n8n-node-starter](https://github.com/n8n-io/n8n-nodes-starter).

## Editor setup <a id="editor-setup"></a>

n8n recommends using [VS Code](https://code.visualstudio.com/) as your editor.

Install these extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

By using VS Code and these extensions, you get access to the n8n node linter's warnings as you code.
