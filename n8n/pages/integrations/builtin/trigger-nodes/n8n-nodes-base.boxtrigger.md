> Commit-pinned source for n8n main: [docs/integrations/builtin/trigger-nodes/n8n-nodes-base.boxtrigger.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.boxtrigger.md)

# Box Trigger node <a id="box-trigger-node"></a>

[Box](https://www.box.com/) is a cloud computing company which provides file sharing, collaborating, and other tools for working with files uploaded to its servers.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/box).

> **Info**
> **Examples and templates**
>
> For usage examples and templates to help you get started, refer to n8n's [Box Trigger integrations](https://n8n.io/integrations/box-trigger/) page.

## Find your Box Target ID <a id="find-your-box-target-id"></a>

To get your Target ID in Box:

1. Open the file/folder that you would like to monitor.
2. Copy the string of characters after `folder/` in your URL. This is the target ID. For example, if the URL is `https://app.box.com/folder/12345`, then `12345` is the target ID.
3. Paste it in the **Target ID** field in n8n.
