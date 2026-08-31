> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/wufoo.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/credentials/wufoo.md)

# Wufoo credentials <a id="wufoo-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Wufoo Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.wufootrigger)

## Prerequisites <a id="prerequisites"></a>

Create a [Wufoo](https://wufoo.com) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Wufoo's API documentation](https://wufoo.github.io/docs/) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**: Get your API key from the [Wufoo Form Manager](https://app.wufoo.com/#/form-manager). To the right of a form, select **More > API Information**. Refer to [Using API Information and Webhooks](https://help.surveymonkey.com/en/wufoo/integrations/wufoo-api/) for more information.
- A **Subdomain**: Your subdomain is the part of your Wufoo URL that comes after `https://` and before `wufoo.com`. So if the full domain is `https://n8n.wufoo.com`, the subdomain is `n8n`. Admins can view the subdomain in the [**Account Manager**](https://help.surveymonkey.com/en/wufoo/account/account-manager/). Refer to [Your Subdomain](https://help.surveymonkey.com/en/wufoo/account/your-subdomain/) for more information.
