> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/taiga.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/credentials/taiga.md)

# Taiga credentials <a id="taiga-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Taiga](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.taiga)
- [Taiga Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.taigatrigger)

## Prerequisites <a id="prerequisites"></a>

Create a [Taiga](https://taiga.io/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- Basic auth

## Related resources <a id="related-resources"></a>

Refer to [Taiga's API documentation](https://docs.taiga.io/api.html) for more information about the service.

## Using basic auth <a id="using-basic-auth"></a>

To configure this credential, you'll need:

- A **Username**: Enter your username or user email address. Refer to [Normal login](https://docs.taiga.io/api.html#auth-normal-login) for more information.
- A **Password**: Enter your password.
- The **Environment**: Choose between **Cloud** or **Self-Hosted**. For **Self-Hosted** instances, you'll also need to add:
  - The **URL**: Enter your Taiga URL.
