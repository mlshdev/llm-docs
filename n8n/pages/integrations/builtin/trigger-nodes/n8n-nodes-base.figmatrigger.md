> Commit-pinned source for n8n main: [docs/integrations/builtin/trigger-nodes/n8n-nodes-base.figmatrigger.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.figmatrigger.md)

# Figma Trigger (Beta) node <a id="figma-trigger-beta-node"></a>

[Figma](https://www.figma.com/) is a prototyping tool which is primarily web-based, with more offline features enabled by desktop applications for macOS and Windows.

> **Warning**
> **Supported Figma Plans**
>
> Figma doesn't support webhooks on the free "Starter" plan. Your team needs to be on the "Professional" plan to use this node.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/figma).

> **Info**
> **Examples and templates**
>
> For usage examples and templates to help you get started, refer to n8n's [Figma Trigger integrations](https://n8n.io/integrations/figma-trigger-beta/) page.

## Events <a id="events"></a>

- **File Commented**: Triggers when someone comments on a file.
- **File Deleted**: Triggers when someone deletes an individual file, but not when someone deletes an entire folder with all files.
- **File Updated**: Triggers when someone saves or deletes a file. A save occurs when someone closes a file within 30 seconds after making changes.
- **File Version Updated**: Triggers when someone creates a named version in the version history of a file.
- **Library Publish**: Triggers when someone publishes a library file.
