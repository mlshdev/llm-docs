> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/trellixepo.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/credentials/trellixepo.md)

# Trellix ePO credentials <a id="trellix-epo-credentials"></a>

You can use these credentials to authenticate when using the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to make a [Custom API call](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes).

## Prerequisites <a id="prerequisites"></a>

Create a [Trellix ePolicy Orchestrator](https://www.trellix.com/products/epo/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- Basic auth

## Related resources <a id="related-resources"></a>

Refer to [Trellix ePO's documentation](https://docs.trellix.com/bundle/epolicy-orchestrator-web-api-reference-guide/page/GUID-D87A6839-AED2-47B0-BE93-5BF83F710278.html) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) to learn more. View [example workflows and related content](https://n8n.io/integrations/trellix-epo/) on n8n's website.

## Using basic auth <a id="using-basic-auth"></a>

To configure this credential, you'll need:

- A **Username** to connect as.
- A **Password** for that user account.

n8n uses These fields to build the `-u` parameter in the format of `-u username:pw`. Refer to [Web API basics](https://docs.trellix.com/bundle/epolicy-orchestrator-web-api-reference-guide/page/GUID-2503B69D-2BCE-4491-9969-041838B39C1F.html) for more information.
