> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/workflow-history.md](https://github.com/n8n-io/n8n-docs/blob/add4135738cc79c86ba3bf33e3c9756c5e6f4571/docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/workflow-history.md)

# Workflow history environment variables <a id="workflow-history-environment-variables"></a>

| Variable                          | Type   | Default | Description                                                                                                                              |
| :-------------------------------- | :----- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_WORKFLOW_HISTORY_PRUNE_TIME` | Number | `-1`    | How long to keep workflow history versions before automatically deleting them (in hours). Set to `-1` to keep all versions indefinitely. |
