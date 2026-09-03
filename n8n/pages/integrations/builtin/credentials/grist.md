> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/grist.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/credentials/grist.md)

# Grist credentials <a id="grist-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Grist](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.grist)

## Prerequisites <a id="prerequisites"></a>

Create a [Grist](https://getgrist.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Grist's API documentation](https://support.getgrist.com/api/) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**: in Grist, open the account menu (top right), then go to **Account settings** > **Developer** to create or copy your API key. Refer to the [Grist API authentication documentation](https://support.getgrist.com/rest-api/#authentication) for more information.
- A **Grist URL**. This points n8n at your Grist server:
  - The default, `https://api.getgrist.com`, works for any account on hosted Grist (getgrist.com).
  - To restrict the connection to a single team, use `https://YOUR_TEAM.getgrist.com`.
  - For a self-managed instance, use its URL, without `/api` and without a trailing slash (for example `https://grist.example.com`).
