> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/security/block-specific-nodes.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/deploy/host-n8n/configure-n8n/security/block-specific-nodes.md)

# Block access to nodes <a id="block-access-to-nodes"></a>

For security reasons, you may want to block your users from accessing or working with specific n8n nodes. This is helpful if your users might be untrustworthy.

Use the `NODES_EXCLUDE` environment variable to prevent your users from accessing specific nodes.

## Exclude nodes <a id="exclude-nodes"></a>

Update your `NODES_EXCLUDE` environment variable to include an array of strings containing any nodes you want to block your users from using.

For example, setting the variable this way:

```
NODES_EXCLUDE: "[\"n8n-nodes-base.executeCommand\", \"n8n-nodes-base.readWriteFile\"]"
```

Blocks the [Execute Command](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executecommand) and [Read/Write Files from Disk](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.readwritefile) nodes.

Your n8n users won't be able to search for or use these nodes.

## Suggested nodes to block <a id="suggested-nodes-to-block"></a>

The nodes that can pose security risks vary based on your use case and user profile. Here are some nodes you might want to start with:

- [Execute Command](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executecommand)
- [Read/Write Files from Disk](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.readwritefile)

## Enable nodes that are blocked by default <a id="enable-nodes-that-are-blocked-by-default"></a>

Some nodes, like Execute Command, are blocked by default. Remove them from the exclude list to enable them:

```
NODES_EXCLUDE: "[]"
```

## Related resources <a id="related-resources"></a>

Refer to [Nodes environment variables](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/nodes) for more information on this environment variable.

Refer to [Configuration](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration) for more information on setting environment variables.
