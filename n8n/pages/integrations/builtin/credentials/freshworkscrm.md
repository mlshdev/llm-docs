> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/freshworkscrm.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/credentials/freshworkscrm.md)

# Freshworks CRM credentials <a id="freshworks-crm-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Freshworks CRM](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.freshworkscrm)

## Prerequisites <a id="prerequisites"></a>

Create a [Freshworks CRM](https://www.freshworks.com/freshsales-crm/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Freshworks CRM's API documentation](https://developers.freshworks.com/crm/api/) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**: Refer to the [Freshworks CRM API authenticaton documentation](https://developers.freshworks.com/crm/api/#authentication) for detailed instructions on getting your API key.
- Your Freshworks CRM **Domain**: Use the subdomain of your Freshworks CRM account. This is part of the URL, for example `https://<subdomain>.myfreshworks.com`. So if you access Freshworks CRM through `https://n8n.myfreshworks.com`, enter `n8n` as your **Domain**.
