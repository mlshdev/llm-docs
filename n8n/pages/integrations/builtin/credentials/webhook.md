> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/webhook.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/integrations/builtin/credentials/webhook.md)

# Webhook credentials

You can use these credentials to authenticate the following nodes:

- [Webhook](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook)

## Prerequisites <a id="prerequisites"></a>

You must use the authentication method required by the app or service you want to query.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- Basic auth
- Header auth
- JWT auth
- None

## Using basic auth <a id="using-basic-auth"></a>

Use this generic authentication if your app or service supports basic authentication.

To configure this credential, enter:

- The **Username** you use to access the app or service your HTTP Request is targeting
- The **Password** that goes with that username

## Using header auth <a id="using-header-auth"></a>

Use this generic authentication if your app or service supports header authentication.

To configure this credential, enter:

- The header **Name** you need to pass to the app or service your HTTP request is targeting
- The **Value** for the header

Read more about [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#authentication)

## Using JWT auth <a id="using-jwt-auth"></a>

[**JWT Auth**](https://jwt.io/introduction/) is a method of authentication that uses JSON Web Tokens (JWT) to digitally sign data. This authentication method uses the **JWT credential** and can use either a **Passphrase** or **PEM Key** as key type. Refer to [JWT credential](https://docs.n8n.io/integrations/builtin/credentials/jwt) for more information.
