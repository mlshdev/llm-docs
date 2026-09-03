> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-workflow-timeouts.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-workflow-timeouts.md)

# Configure workflow timeout settings <a id="configure-workflow-timeout-settings"></a>

A workflow times out and gets canceled after this time (in seconds). If the workflow runs in the main process, a soft timeout happens (takes effect after the current node finishes). If a workflow runs in its own process, n8n attempts a soft timeout first, then kills the process after waiting for a fifth of the given timeout duration.

`EXECUTIONS_TIMEOUT` default is `-1`. For example, if you want to set the timeout to one hour:

```bash
export EXECUTIONS_TIMEOUT=3600
```

You can also set maximum execution time (in seconds) for each workflow individually. For example, if you want to set maximum execution time to two hours:

```bash
export EXECUTIONS_TIMEOUT_MAX=7200
```

Refer to [Environment variables reference](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/executions) for more information on these variables.
