> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/scaling/handle-binary-data.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/deploy/host-n8n/configure-n8n/scaling/handle-binary-data.md)

# Binary data <a id="binary-data"></a>

Binary data is any file-type data, such as image files or documents generated or processed during the execution of a workflow.

In queue mode, binary data storage also backs webhook responses too large to send through the queue. Refer to [Large webhook responses](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode#large-webhook-responses) for details.

## Enable filesystem mode <a id="enable-filesystem-mode"></a>

When handling binary data, n8n keeps the data in memory by default. This can cause crashes when working with large files.

To avoid this, change the `N8N_DEFAULT_BINARY_DATA_MODE` [environment variable](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/binary-data) to `filesystem`. This causes n8n to save data to disk, instead of using memory.

If you're using queue mode, switch this to `database`. n8n doesn't support `filesystem` mode with queue mode.

## Binary data pruning <a id="binary-data-pruning"></a>

n8n executes binary data pruning as part of execution data pruning. Refer to [Execution data | Enable executions pruning](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/manage-execution-data#enable-executions-pruning) for details.

If you configure multiple binary data modes, binary data pruning operates on the active binary data mode. For example, if your instance stored data in S3, and you later switched to filesystem mode, n8n only prunes binary data in the filesystem. Refer to [External storage](https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/use-external-storage#usage) for details.
