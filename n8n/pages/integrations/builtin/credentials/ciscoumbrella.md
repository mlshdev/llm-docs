> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/ciscoumbrella.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/credentials/ciscoumbrella.md)

# Cisco Umbrella credentials <a id="cisco-umbrella-credentials"></a>

You can use these credentials to authenticate when using the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to make a [Custom API call](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes).

## Prerequisites <a id="prerequisites"></a>

- Create a [Cisco DevNet developer account](https://developer.cisco.com).
- A [Cisco Umbrella user account](https://umbrella.cisco.com/) with **Full Admin** role.

## Authentication methods <a id="authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Cisco Umbrella's API documentation](https://developer.cisco.com/docs/cloud-security/) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) to learn more. View [example workflows and related content](https://n8n.io/integrations/cisco-umbrella/) on n8n's website.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**
- A **Secret**: Provided when you generate an API key

Refer to the [Cisco Umbrella Manage API Keys documentation](https://developer.cisco.com/docs/cloud-security/authentication/#manage-api-keys) for instructions on creating an Umbrella API key.
