> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/ciscosecureendpoint.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/credentials/ciscosecureendpoint.md)

# Cisco Secure Endpoint credentials <a id="cisco-secure-endpoint-credentials"></a>

You can use these credentials to authenticate when using the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to make a [Custom API call](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes).

## Prerequisites <a id="prerequisites"></a>

- Create a [Cisco DevNet developer account](https://developer.cisco.com).
- Access to a [Cisco Secure Endpoint license](https://www.cisco.com/site/us/en/products/security/endpoint-security/secure-endpoint/index.html).

## Authentication methods <a id="authentication-methods"></a>

- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Cisco Secure Endpoint's documentation](https://developer.cisco.com/docs/secure-endpoint/introduction/) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) to learn more. View [example workflows and related content](https://n8n.io/integrations/cisco-secure-endpoint/) on n8n's website.

## Using OAuth2 <a id="using-oauth2"></a>

To configure this credential, you'll need:

- The **Region** for your Cisco Secure Endpoint. Options are:
  - Asia Pacific, Japan, and China
  - Europe
  - North America
- A **Client ID**: Provided when you register a SecureX API Client
- A **Client Secret**: Provided when you register a SecureX API Client

To get a Client ID and Client Secret, you'll need to Register a SecureX API Client. Refer to [Cisco Secure Endpoint's authentication documentation](https://developer.cisco.com/docs/secure-endpoint/authentication/#authentication) for detailed instructions. Use the SecureX **Client Password** as the **Client Secret** within the n8n credential.
