> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/workable.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/credentials/workable.md)

# Workable credentials <a id="workable-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Workable Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.workabletrigger)

## Prerequisites <a id="prerequisites"></a>

Create a [Workable](https://www.workable.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Workable's API documentation](https://workable.readme.io/reference/generate-an-access-token) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- A **Subdomain**: Your Workable subdomain is the part of your Workable domain between `https://` and `.workable.com`. So if the full domain is `https://n8n.workable.com`, the subdomain is `n8n`. The subdomain is also displayed on your Workable **Company Profile** page.
- An **Access Token**: Go to your **profile >** [**Integrations**](https://workable.com/backend/settings/integrations) **> Apps** and select **Generate API token**. Refer to [Generate a new token](https://help.workable.com/hc/en-us/articles/115015785428-Generating-revoking-access-tokens-for-Workable-s-API#Generateanewtoken) for more information.<br>

  > **Info**
  > **Token scopes**
  >
  > If you're using this credential with the [Workable Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.workabletrigger) node, select the `r_candidates` and `r_jobs` scopes when you generate your token. If you're using this credential in other ways, select scopes that are relevant for your use case.
  >
  > Refer to [Supported API scopes](https://help.workable.com/hc/en-us/articles/115015785428-Generating-revoking-access-tokens-for-Workable-s-API#SupportedAPIscopes) for more information on scopes.
