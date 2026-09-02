> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/philipshue.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/credentials/philipshue.md)

# Philips Hue credentials <a id="philips-hue-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Philips Hue](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.philipshue)

## Prerequisites <a id="prerequisites"></a>

Create a [Philips Hue](https://www.philips-hue.com/en-us) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Philips Hue's CLIP API documentation](https://developers.meethue.com/develop/hue-api-v2/api-reference/) for more information about the service.

## Using OAuth2 <a id="using-oauth2"></a>

> **Info**
> **Note for n8n Cloud users**
>
> Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you're using the built-in OAuth connection, you don't need to enter an **APP ID**.

If you need to configure OAuth2 from scratch, you'll need a [Philips Hue developer](https://developers.meethue.com/) account

Create a new remote app on the [Add new Hue Remote API app](https://developers.meethue.com/add-new-hue-remote-api-app/) page.

Use these settings for your app:

- Copy the **OAuth Callback URL** from n8n and add it as a **Callback URL**.
- Copy the **AppId**, **ClientId**, and **ClientSecret** and enter these in the corresponding fields in n8n.
