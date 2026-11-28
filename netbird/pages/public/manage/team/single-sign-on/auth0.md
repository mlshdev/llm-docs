> Pinned source for NetBird v0.84.0: [netbirdio/docs@687df76a2ecb2c825e4726f53f78fb54a131f77c:src/pages/manage/team/single-sign-on/auth0.mdx](https://github.com/netbirdio/docs/blob/687df76a2ecb2c825e4726f53f78fb54a131f77c/src/pages/manage/team/single-sign-on/auth0.mdx)

# Auth0 on NetBird Cloud

You can use Auth0 as your Identity Provider with NetBird, but it will require some additional configuration steps. Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications. It's a managed service that offers extensive customization options, developer-friendly APIs, universal login, social identity providers, and advanced security features like anomaly detection and breached password detection.

> **Note**
>
> Support for OIDC-compliant IdPs is available on the Team plan and higher. The Free plan supports Google, Microsoft, and social logins.

1. Access the [Auth0 console](https://manage.auth0.com/) and navigate to Applications > Applications

2. Click **+ Create Application**

3. Enter **NetBird** as the name, select **Regular Web Applications** as the application type and click **Create**

> **Note**
>
> NetBird exchanges the authorization code server-side using a Client Secret. Select **Regular Web Applications** to configure a [confidential client](https://auth0.com/docs/get-started/applications/confidential-and-public-applications) that supports this authentication method.

4. On the New Application screen, go to the Settings tab and under Application URIs set the following values:

- **Application Login URI**: `https://app.netbird.io`
- **Allowed Callback URLs**: `https://login.netbird.io/login/callback`
- **Allowed Logout URLs**: `https://app.netbird.io`
- **Allowed Web Origins**: `https://app.netbird.io`

![The Auth0 Application URIs section filled in with the NetBird login, callback, logout, and web origin URLs](https://raw.githubusercontent.com/netbirdio/docs/687df76a2ecb2c825e4726f53f78fb54a131f77c/public/docs-static/img/manage/team/single-sign-on/auth0-idp/application-configure.png)

5. Record the **Client ID** and **Client Secret** that Auth0 generates for your application.

6. Retrieve Application's **Domain** from the **Basic Information** tab

![The Auth0 Basic Information tab showing the application Domain](https://raw.githubusercontent.com/netbirdio/docs/687df76a2ecb2c825e4726f53f78fb54a131f77c/public/docs-static/img/manage/team/single-sign-on/auth0-idp/application-domain.png)

7. Share the following with our team. Please use a secure method for sharing the sensitive parts of this information:
   1. Application's **Domain**,
   2. (sensitive) **Client ID** and **Client Secret**,
   3. list of email domains to be registered for this SSO configuration,

> **Note**
>
> We recommend using a secure channel to share the Client’s secret. You can send a separate email and use a secret sharing service like: \\
>
> - <https://onetimesecret.com/en/> \\
>
> - <https://password.link/en> \\
