> Pinned source for n8n main: [docs/connect/create-nodes/build-your-node/set-up-your-development-environment.md](https://github.com/n8n-io/n8n-docs/blob/d6f969044f09a928e5d1459a080f6289b68d7be5/docs/connect/create-nodes/build-your-node/set-up-your-development-environment.md)

# Set up your development environment <a id="set-up-your-development-environment"></a>

This document lists the essential dependencies for developing a node, as well as guidance on setting up your editor.

## Requirements <a id="requirements"></a>

To build and test a node, you need:

- Node.js and npm. Minimum version Node 22.22.0. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL (Windows Subsystem for Linux) [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
- The [`n8n-node` tool](https://docs.n8n.io/connect/create-nodes/build-your-node/using-the-n8n-node-tool). Use it to create, build, and test your node. It includes n8n for local development, so you don't need a global n8n installation. Refer to [Run your node locally](https://docs.n8n.io/connect/create-nodes/test-your-node/run-your-node-locally) for the testing workflow. When [building verified community nodes](https://docs.n8n.io/integrations/community-nodes/building-community-nodes), you must use `n8n-node`.

You should also have [git](https://git-scm.com/) installed. This allows you to clone and use the [n8n-nodes-starter](https://github.com/n8n-io/n8n-nodes-starter).

## Editor setup <a id="editor-setup"></a>

n8n recommends using [VS Code](https://code.visualstudio.com/) as your editor.

Install these extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

By using VS Code and these extensions, you get access to the n8n node linter's warnings as you code.
