> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/miro.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/credentials/miro.md)

# Miro credentials <a id="miro-credentials"></a>

You can use these credentials to authenticate when using the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to make a [Custom API call](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes).

## Prerequisites <a id="prerequisites"></a>

Create a [Miro](https://miro.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Miro's API documentation](https://developers.miro.com/reference/overview) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) to learn more. View [example workflows and related content](https://n8n.io/integrations/miro/) on n8n's website.

## Using OAuth2 <a id="using-oauth2"></a>

To configure this credential, you'll need a [Miro](https://miro.com/login/) account and app, as well as:

- A **Client ID**: Generated when you create a new OAuth2 application.
- A **Client Secret**: Generated when you create a new OAuth2 application.

Refer to [Miro's API documentation](https://developers.miro.com/reference/overview) for more information about authenticating to the service.

> **Info**
> **Note for n8n Cloud users**
>
> Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you're [self-hosting](https://docs.n8n.io/deploy/host-n8n) n8n, you'll need to [create an app](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app) to configure OAuth2. Refer to [Miro's OAuth documentation](https://developers.miro.com/docs/getting-started-with-oauth) for more information about setting up OAuth2.
