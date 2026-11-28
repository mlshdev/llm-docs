> Pinned source for NetBird v0.84.0: [netbirdio/docs@687df76a2ecb2c825e4726f53f78fb54a131f77c:src/pages/manage/team/single-sign-on/keycloak.mdx](https://github.com/netbirdio/docs/blob/687df76a2ecb2c825e4726f53f78fb54a131f77c/src/pages/manage/team/single-sign-on/keycloak.mdx)

# Keycloak on NetBird Cloud

You can use Keycloak as your Identity Provider with NetBird, but it will require some additional configuration steps. Keycloak is an open-source Identity and Access Management solution aimed at modern applications and services. It's one of the most popular self-hosted IDP solutions with extensive documentation and community support. Keycloak provides single sign-on, social login, user federation, fine-grained authorization, and supports OpenID Connect, OAuth 2.0, and SAML 2.0 protocols.

> **Note**
>
> Support for OIDC-compliant IdPs is available on the Team plan and higher. The Free plan supports Google, Microsoft, and social logins.

1. You need to create a new client

   - Browse to the Clients section of the Administration console and click Create client.

2. Set the client type to OpenID Connect and enter any client ID and name for the client.

3. Click Next. Under Capability config, turn on Client authentication, leave Authorization off, and select only Standard flow under Authentication flow:

![Keycloak Capability config with Client authentication on and only Standard flow selected](https://raw.githubusercontent.com/netbirdio/docs/687df76a2ecb2c825e4726f53f78fb54a131f77c/public/docs-static/img/manage/team/single-sign-on/keycloak-idp/3-new-client-capability.png)

4. Click Next and fill the following fields:

   Valid redirect URIs: `https://login.netbird.io/login/callback` \\

   Web origins: `+`

![Keycloak login settings with the NetBird callback as valid redirect URI and web origins set to plus](https://raw.githubusercontent.com/netbirdio/docs/687df76a2ecb2c825e4726f53f78fb54a131f77c/public/docs-static/img/manage/team/single-sign-on/keycloak-idp/4-new-client-callback.png)

5. Click Save.

6. Next we need to retrieve the secret for the client, you can get that in the Credentials tab for the client:

![Keycloak client Credentials tab showing the client secret](https://raw.githubusercontent.com/netbirdio/docs/687df76a2ecb2c825e4726f53f78fb54a131f77c/public/docs-static/img/manage/team/single-sign-on/keycloak-idp/5-new-client-credentials.png)

7. Then, share the following information with the NetBird support team at <support@netbird.io>:

- Client ID
- Keycloak URL
- Realm
- Client Secret
- Email domains for your users

> **Note**
>
> We recommend using a secure channel to share the Client’s secret. You can send a separate email and use a secret sharing service like: \\
>
> <https://onetimesecret.com/en/> \\
>
> <https://password.link/en>
