> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/qualys.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/credentials/qualys.md)

# Qualys credentials <a id="qualys-credentials"></a>

You can use these credentials to authenticate when using the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to make a [Custom API call](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes).

## Prerequisites <a id="prerequisites"></a>

Create a [Qualys](https://www.qualys.com/) user account with any user role except Contact.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- Basic auth

## Related resources <a id="related-resources"></a>

Refer to [Qualys's documentation](https://qualysguard.qg2.apps.qualys.com/qwebhelp/fo_portal/api_doc/index.htm) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) to learn more. View [example workflows and related content](https://n8n.io/integrations/qualys/) on n8n's website.

## Using basic auth <a id="using-basic-auth"></a>

To configure this credential, you'll need:

- A **Username**
- A **Password**
- A **Requested With** string: Enter a user description, like a user agent, or keep the default `n8n application`. This sets the required `X-Requested-With` header.
