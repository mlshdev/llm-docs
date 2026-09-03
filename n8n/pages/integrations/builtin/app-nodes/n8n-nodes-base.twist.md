> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.twist.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/app-nodes/n8n-nodes-base.twist.md)

# Twist node <a id="twist-node"></a>

Use the Twist node to automate work in Twist, and integrate Twist with other applications. n8n has built-in support for a wide range of Twist features, including creating conversations in a channel, as well as creating and deleting comments on a thread.

On this page, you'll find a list of operations the Twist node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Twist credentials](https://docs.n8n.io/integrations/builtin/credentials/twist) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Channel
  - Archive a channel
  - Initiates a public or private channel-based conversation
  - Delete a channel
  - Get information about a channel
  - Get all channels
  - Unarchive a channel
  - Update a channel
- Comment
  - Create a new comment to a thread
  - Delete a comment
  - Get information about a comment
  - Get all comments
  - Update a comment
- Message Conversation
  - Create a message in a conversation
  - Delete a message in a conversation
  - Get a message in a conversation
  - Get all messages in a conversation
  - Update a message in a conversation
- Thread
  - Create a new thread in a channel
  - Delete a thread
  - Get information about a thread
  - Get all threads
  - Update a thread

## Templates and examples <a id="templates-and-examples"></a>

[Browse Twist node documentation integration templates](https://n8n.io/integrations/twist) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.

## Get the User ID <a id="get-the-user-id"></a>

To get the User ID for a user:

1. Open the **Team** tab.
2. Select a user's avatar.
3. Copy the string of characters located after `/u/` in your Twist URL. This string is the User ID. For example, if the URL is `https://twist.com/a/4qw45/people/u/475370` the User ID is `475370`.
