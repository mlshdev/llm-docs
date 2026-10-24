> Pinned source for NetBird v0.81.4: [netbirdio/docs@238224712cf7639036ed39fa8873d777b8822273:src/pages/manage/team/single-sign-on/authentik.mdx](https://github.com/netbirdio/docs/blob/238224712cf7639036ed39fa8873d777b8822273/src/pages/manage/team/single-sign-on/authentik.mdx)

# Authentik on NetBird Cloud

You can use Authentik as your Identity Provider with NetBird, but it will require some additional configuration steps. Authentik is an open-source identity provider focused on flexibility and security. It serves as a self-hosted alternative to commercial solutions like Okta and Auth0, providing single sign-on (SSO), multi-factor authentication (MFA), access policies, user management, and support for SAML and OIDC protocols.

> **Note**
>
> Support for OIDC-compliant IdPs is available on the Team plan and higher.
> The Free plan supports Google, Microsoft, and social logins.
> Self-hosted deployments support OIDC-compliant IdPs in both the open source Community Edition and the [Enterprise Commercial License](https://docs.netbird.io/selfhosted/enterprise). See [self-hosted identity providers](https://docs.netbird.io/selfhosted/identity-providers).

1. You need to create a new Application and Provider.
   - Browse to the Applications Administration menu, click on Application, and then click on Create with Provider.

   - Name the Application `NetBird` and select a suitable explicit user flow.

   - Click Next and select the OAuth2/OpenID Provider type.

   - Click Next and select an explicit user authorization flow, then take note of the Client ID and Client Secret:

![Authentik provider settings showing the authorization flow, Client ID, and Client Secret](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/team/single-sign-on/authentik-idp/4-new-application-client-id.png)

- Add the following redirect URL and select a signing key: \\

  URL: `https://login.netbird.io/login/callback`

![Authentik redirect URI field set to the NetBird callback URL and a signing key selected](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/team/single-sign-on/authentik-idp/5-new-application-sign.png)

- Click on Advanced protocol settings and ensure that the email, opened, and profile scopes are selected and that Based on the User’s Hash ID is selected for Subject mode:

![Authentik advanced protocol settings with openid, email, and profile scopes and Subject mode set to hash ID](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/team/single-sign-on/authentik-idp/6-new-application-scopes.png)

- Click Next on the following two screens and Submit to create the provider and application:

- The new application now appears in the Applications list.

2. We need to copy the OpenID Configuration URL for the new provider. You can do that by navigating to Providers in the left menu and then selecting the newly created provider. There you should see a windows similar to the following:

![Authentik provider detail page showing the OpenID Configuration URL](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/team/single-sign-on/authentik-idp/9-list-providers.png)

- Copy the OpenID Configuration URL.

3. Then, share the following information with the NetBird support team at <support@netbird.io>:

- Client ID
- Client Secret
- OpenID Configuration URL
- Email domains for your users

> **Note**
>
> We recommend using a secure channel to share the Client’s secret. You can send a separate email and use a secret sharing service like: \\
>
> <https://onetimesecret.com/en/> \\
>
> <https://password.link/en>
