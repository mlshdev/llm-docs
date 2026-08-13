> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/manage/team/single-sign-on/zitadel.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/manage/team/single-sign-on/zitadel.mdx)

# Zitadel on NetBird Cloud

You can use Zitadel as your Identity Provider with NetBird, but it will require some additional configuration steps. Zitadel is an open-source, API-first identity infrastructure platform built with multi-tenancy at its core. It provides single sign-on, passwordless authentication, role-based access control, and supports OpenID Connect, OAuth 2.0, and SAML.

> **Note**
>
> Support for OIDC-compliant IdPs is available on the Team plan and higher.
> The Free plan supports Google, Microsoft, and social logins.

## Step 1: Create a New Project (Optional)

> **Note**
>
> This step is optional. You can skip it and create the application directly in an existing project.

Log in to your Zitadel console at `https://<your-instance>.zitadel.cloud`. Navigate to **Projects** and click **+ Create New Project**. Enter `NetBird` as the project name and click **Continue**.

![zitadel-create-project](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/team/single-sign-on/zitadel-idp/create-project.png)

You should see the project dashboard once the project is created.

![zitadel-project-created](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/team/single-sign-on/zitadel-idp/project-created.png)

## Step 2: Create a New Application

Inside your project, click **+ New** to create a new application. Configure the following:

- **Name**: `NetBird`
- **Type**: `Web`

![zitadel-create-application](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/team/single-sign-on/zitadel-idp/create-application.png)

Click **Continue**.

## Step 3: Configure Authentication Method

Select **Code** as the authentication method. This enables the Authorization Code flow with a client secret.

![zitadel-authentication-method](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/team/single-sign-on/zitadel-idp/authentication-method.png)

Click **Continue**.

## Step 4: Configure Redirect URIs

Set the following redirect settings:

- **Redirect URIs**: `https://login.netbird.io/login/callback`
- **Post Logout URIs**: `https://app.netbird.io`

![zitadel-redirect-uris](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/team/single-sign-on/zitadel-idp/redirect-uris.png)

Click **Continue** to proceed to the review stage. Verify your application settings and click **Create**.

![zitadel-review-application](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/team/single-sign-on/zitadel-idp/review-application.png)

## Step 5: Copy the Client Credentials

After creation, Zitadel displays the **Client ID** and **Client Secret**. Copy and store these securely — the Client Secret is only shown once.

![zitadel-client-credentials](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/manage/team/single-sign-on/zitadel-idp/client-credentials.png)

## Step 6: Share Configuration with NetBird

Send the following information to the NetBird support team at <support@netbird.io>:

- **Client ID**
- **Client Secret**
- **Zitadel Instance URL** (`https://<your-instance>.zitadel.cloud`)
- **Email domains for your users**

> **Note**
>
> We recommend using a secure channel to share the Client Secret. You can send a separate email and use a secret sharing service like: \\
>
> - <https://onetimesecret.com/en/> \\
>
> - <https://password.link/en> \\
