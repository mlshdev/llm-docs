> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/workflow-history.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/workflow-history.md)

# Workflow history environment variables <a id="workflow-history-environment-variables"></a>

| Variable                          | Type   | Default | Description                                                                                                                              |
| :-------------------------------- | :----- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_WORKFLOW_HISTORY_PRUNE_TIME` | Number | `-1`    | How long to keep workflow history versions before automatically deleting them (in hours). Set to `-1` to keep all versions indefinitely. |
