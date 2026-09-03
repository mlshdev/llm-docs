> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/seatable.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/credentials/seatable.md)

# SeaTable credentials <a id="seatable-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [SeaTable](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.seatable)
- [SeaTable Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.seatabletrigger)

## Prerequisites <a id="prerequisites"></a>

Create a [SeaTable](https://seatable.io/en/) account on either a cloud or self-hosted SeaTable server.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [SeaTable's API documentation](https://api.seatable.io) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **Environment**: Select the environment that matches your SeaTable instance:
  - **Cloud-Hosted**
  - **Self-Hosted**
- An **API Token (of a Base)**: Generate a **Base-Token** in SeaTable from the base options > **Advanced > API Token**.
  - Use **Read-Write** permission for your token.
  - Refer to [Creating an API token](https://seatable.io/en/docs/seatable-api/erzeugen-eines-api-tokens/) for more information.
- A **Timezone**: Select the timezone of your SeaTable server.
