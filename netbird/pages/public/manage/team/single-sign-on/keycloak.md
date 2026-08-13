> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/manage/team/single-sign-on/keycloak.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/manage/team/single-sign-on/keycloak.mdx)

# Keycloak on NetBird Cloud

You can use Keycloak as your Identity Provider with NetBird, but it will require some additional configuration steps. Keycloak is an open-source Identity and Access Management solution aimed at modern applications and services. It's one of the most popular self-hosted IDP solutions with extensive documentation and community support. Keycloak provides single sign-on, social login, user federation, fine-grained authorization, and supports OpenID Connect, OAuth 2.0, and SAML 2.0 protocols.

1. You need to create a new client

   - Browse to the clients Administration menu and then click in Create client:

![new-client](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/team/single-sign-on/keycloak-idp/1-new-client.png)

2. Create a client with the type OpenID Connect and add any client ID and name for the client:

![new-client](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/team/single-sign-on/keycloak-idp/2-new-client-type.png)

3. Click Next and enable the following options for Capability config:

![new-client](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/team/single-sign-on/keycloak-idp/3-new-client-capability.png)

4. Click Next and fill the following fields:

   Valid redirect URIs: `https://login.netbird.io/login/callback` \\

   Web origins: `+`

![new-client](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/team/single-sign-on/keycloak-idp/4-new-client-callback.png)

5. Click Save.

6. Next we need to retrieve the secret for the client, you can get that in the Credentials tab for the client:

![new-client](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/team/single-sign-on/keycloak-idp/5-new-client-credentials.png)

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
