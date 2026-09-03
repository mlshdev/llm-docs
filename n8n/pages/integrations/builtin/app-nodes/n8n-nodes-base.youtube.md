> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.youtube.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/integrations/builtin/app-nodes/n8n-nodes-base.youtube.md)

# YouTube node <a id="youtube-node"></a>

Use the YouTube node to automate work in YouTube, and integrate YouTube with other applications. n8n has built-in support for a wide range of YouTube features, including retrieving and updating channels, as well as creating and deleting playlists.

On this page, you'll find a list of operations the YouTube node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [YouTube credentials](https://docs.n8n.io/integrations/builtin/credentials/google) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Channel
  - Retrieve a channel
  - Retrieve all channels
  - Update a channel
  - Upload a channel banner
- Playlist
  - Create a playlist
  - Delete a playlist
  - Get a playlist
  - Retrieve all playlists
  - Update a playlist
- Playlist Item
  - Add an item to a playlist
  - Delete a item from a playlist
  - Get a playlist's item
  - Retrieve all playlist items
- Video
  - Delete a video
  - Get a video
  - Retrieve all videos
  - Rate a video
  - Update a video
  - Upload a video
- Video Category
  - Retrieve all video categories

## Templates and examples <a id="templates-and-examples"></a>

[Browse YouTube node documentation integration templates](https://n8n.io/integrations/youtube) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
