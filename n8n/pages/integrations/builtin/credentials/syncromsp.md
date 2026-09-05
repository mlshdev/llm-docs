> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/syncromsp.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/credentials/syncromsp.md)

# SyncroMSP credentials <a id="syncromsp-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [SyncroMSP](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.syncromsp)

## Prerequisites <a id="prerequisites"></a>

Create a [SyncroMSP](https://syncromsp.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [SyncroMSP's API documentation](https://api-docs.syncromsp.com/) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**: Called an **API token** in SyncroMSP. To create an API token, go to your **user menu > Profile/Password > API Tokens** and select the option to **Create New Token**. Select **Custom Permissions** to enter a name for your token and adjust the permissions to match your requirements.
- Your **Subdomain**: Enter your SyncroMSP subdomain. This is visible in the URL of your SyncroMSP, located between `https://` and `.syncromsp.com`. If your full URL is `https://n8n-instance.syncromsp.com`, you'd enter `n8n-instance` as the subdomain.

Refer to [API Tokens](https://docs.syncromsp.com/imported/api-tokens) for more information on creating new tokens.
