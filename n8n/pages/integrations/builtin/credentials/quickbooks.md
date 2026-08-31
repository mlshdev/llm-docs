> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/quickbooks.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/credentials/quickbooks.md)

# QuickBooks credentials <a id="quickbooks-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [QuickBooks](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.quickbooks)

## Prerequisites <a id="prerequisites"></a>

Create an [Intuit developer](https://developer.intuit.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Intuit's API documentation](https://developer.intuit.com/app/developer/qbo/docs/develop) for more information about the service.

## Using OAuth2 <a id="using-oauth2"></a>

To configure this credential, you'll need:

- A **Client ID**: Generated when you create an app.
- A **Client Secret**: Generated when you create an app.
- An **Environment**: Select whether this credential should access your **Production** or **Sandbox** environment.

To generate your **Client ID** and **Client Secret**, [create an app](https://developer.intuit.com/app/developer/qbo/docs/get-started/start-developing-your-app#create-an-app).

Use these settings when creating your app:

- Select appropriate scopes for your app. Refer to [Learn about scopes](https://developer.intuit.com/app/developer/qbo/docs/learn/scopes) for more information.
- Enter the **OAuth Redirect URL** from n8n as a **Redirect URI** in the app's **Development > Keys & OAuth** section.
- Copy the **Client ID** and **Client Secret** from the app's **Development > Keys & OAuth** section to enter in n8n. Refer to [Get the Client ID and Client Secret for your app](https://developer.intuit.com/app/developer/qbo/docs/get-started/get-client-id-and-client-secret) for more information.

Refer to Intuit's [Set up OAuth 2.0 documentation](https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0) for more information on the entire process.

> **Info**
> **Environment selection**
>
> If you're creating a new app from scratch, start with the **Sandbox** environment. Production apps need to fulfill all Intuit's requirements. Refer to Intuit's [Publish your app documentation](https://developer.intuit.com/app/developer/qbo/docs/go-live/publish-app) for more information.
