> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/medium.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/credentials/medium.md)

# Medium credentials <a id="medium-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Medium](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.medium)

> **Warning**
> **Medium API no longer supported**
>
> Medium has stopped supporting the Medium API. These credentials still appear within n8n, but you can't configure new integrations using them.

## Prerequisites <a id="prerequisites"></a>

- Create an account on [Medium](https://www.medium.com/).
- For OAuth2, request access to credentials by emailing <yourfriends@medium.com>.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API access token
- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Medium's API documentation](https://github.com/Medium/medium-api-docs) for more information about the service.

## Using API access token <a id="using-api-access-token"></a>

To configure this credential, you'll need:

- An API **Access Token**: Generate a token in **Settings >** [**Security and apps**](https://medium.com/me/settings/security) **> Integration tokens**. Use the integration token this generates as your n8n **Access Token**.

Refer to the Medium API [Self-issued access tokens documentation](https://github.com/Medium/medium-api-docs?tab=readme-ov-file#21-self-issued-access-tokens) for more information.

## Using OAuth2 <a id="using-oauth2"></a>

To configure this credential, you'll need:

- A **Client ID**
- A **Client Secret**

To generate a **Client ID** and **Client Secret**, you'll need access to the **Developers** menu. From there, create a new application to generate the Client ID and Secret.

Use these settings for your new application:

- Select **OAuth 2** as the **Authorization Protocol**
- Copy the **OAuth Callback URL** from n8n and use this as the **Callback URL** in Medium.
