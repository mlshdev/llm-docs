> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.telegram/file-operations.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/app-nodes/n8n-nodes-base.telegram/file-operations.md)

# Telegram node File operations <a id="telegram-node-file-operations"></a>

Use this operation to get a file from Telegram. Refer to [Telegram](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram) for more information on the Telegram node itself.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Get File <a id="get-file"></a>

Use this operation to get a file from Telegram using the Bot API [getFile](https://core.telegram.org/bots/api#getfile) method.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Telegram credential](https://docs.n8n.io/integrations/builtin/credentials/telegram).
- **Resource**: Select **File**.
- **Operation**: Select **Get**.
- **File ID**: Enter the ID of the file you want to get.
- **Download**: Choose whether you want the node to download the file (turned on) or not (turned off).

Refer to the Telegram Bot API [getFile](https://core.telegram.org/bots/api#getfile) documentation for more information.
