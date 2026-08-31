> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/bitwarden.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/credentials/bitwarden.md)

# Bitwarden credentials <a id="bitwarden-credentials"></a>

You can use these credentials to authenticate the following node:

- [Bitwarden](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.bitwarden)

## Prerequisites <a id="prerequisites"></a>

Create a [Bitwarden](https://vault.bitwarden.com/#/register?org=teams) Teams organization or Enterprise organization account. (Bitwarden only makes the Bitwarden Public API available for these [organization](https://bitwarden.com/help/about-organizations/) plans.)

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Bitwarden's Public API documentation](https://bitwarden.com/help/public-api/) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- A **Client ID**: Provided when you generate an API key
- A **Client Secret**: Provided when you generate an API key
- The **Environment**:
  - Choose **Cloud-hosted** if you don't self-host Bitwarden. No further configuration required.
  - Choose **Self-hosted** if you host Bitwarden on your own server. Enter your **Self-hosted domain** in the appropriate field.

The Client ID and Client Secret must be for an **Organization API Key**, not a Personal API Key. Refer to the [Bitwarden Public API Authentication documentation](https://bitwarden.com/help/public-api/#authentication) for instructions on generating an Organization API Key.
