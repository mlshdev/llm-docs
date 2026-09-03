> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.pushbullet.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/app-nodes/n8n-nodes-base.pushbullet.md)

# Pushbullet node <a id="pushbullet-node"></a>

Use the Pushbullet node to automate work in Pushbullet, and integrate Pushbullet with other applications. n8n has built-in support for a wide range of Pushbullet features, including creating, updating, deleting, and getting a push.

On this page, you'll find a list of operations the Pushbullet node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Pushbullet credentials](https://docs.n8n.io/integrations/builtin/credentials/pushbullet) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Push
  - Create a push
  - Delete a push
  - Get all pushes
  - Update a push

## Templates and examples <a id="templates-and-examples"></a>

[Browse Pushbullet node documentation integration templates](https://n8n.io/integrations/pushbullet) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
