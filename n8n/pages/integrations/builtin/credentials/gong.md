> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/gong.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/credentials/gong.md)

# Gong credentials <a id="gong-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Gong](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gong)

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API access token
- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Gong's API documentation](https://gong.app.gong.io/settings/api/documentation) for more information about the service.

## Using API access token <a id="using-api-access-token"></a>

To configure this credential, you'll need a [Gong](https://app.gong.io/welcome/sign-in) account and:

- An **Access Key**
- An **Access Key Secret**

You can create both of these items on the [Gong API Page](https://app.gong.io/company/api) (you must be a technical administrator in Gong to access this resource).

Refer to [Gong's API documentation](https://gong.app.gong.io/settings/api/documentation) for more information about authenticating to the service.

## Using OAuth2 <a id="using-oauth2"></a>

To configure this credential, you'll need a [Gong](https://app.gong.io/welcome/sign-in) account, a [Gong developer](https://gong.partnerfleet.app/application_forms/become-a-gong-technology-partner/partner_applications/new) account and:

- A **Client ID**: Generated when you create an Oauth app for Gong.
- A **Client Secret**: Generated when you create an Oauth app for Gong.

If you're [self-hosting](https://docs.n8n.io/deploy/host-n8n) n8n, you'll need to [create an app](https://help.gong.io/docs/create-an-app-for-gong) to configure OAuth2. Refer to [Gong's OAuth documentation](https://gong.app.gong.io/settings/api/documentation) for more information about setting up OAuth2.
