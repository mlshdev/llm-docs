> Pinned source for Trigger.dev v4.6.1: [docs/troubleshooting-debugging-in-vscode.mdx](https://github.com/triggerdotdev/trigger.dev/blob/4132259b9da38c0131570ab7561fca8e016162df/docs/troubleshooting-debugging-in-vscode.mdx)
> Canonical documentation: https://trigger.dev/docs/troubleshooting-debugging-in-vscode

# Debugging in VS Code

Attach the VS Code debugger to your Trigger.dev tasks to set breakpoints and step through your code.

Debugging your task code in `dev` is supported via VS Code, without having to pass in any additional flags. Create a launch configuration in `.vscode/launch.json`:

```json launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Trigger.dev: Dev",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "npx",
      "runtimeArgs": ["trigger.dev@latest", "dev"],
      "skipFiles": ["<node_internals>/**"],
      "sourceMaps": true
    }
  ]
}
```

Then you can start debugging your tasks code by selecting the `Trigger.dev: Dev` configuration in the debug panel, and set breakpoints in your tasks code.
