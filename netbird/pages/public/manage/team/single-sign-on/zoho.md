> Pinned source for NetBird v0.81.4: [netbirdio/docs@238224712cf7639036ed39fa8873d777b8822273:src/pages/manage/team/single-sign-on/zoho.mdx](https://github.com/netbirdio/docs/blob/238224712cf7639036ed39fa8873d777b8822273/src/pages/manage/team/single-sign-on/zoho.mdx)

# Zoho on NetBird Cloud

You can use Zoho as your Identity Provider with NetBird, but it will require some additional configuration steps. Zoho Directory is a cloud-based identity and access management platform that provides single sign-on, multi-factor authentication, and user lifecycle management, with support for OpenID Connect, OAuth 2.0, and SAML.

NetBird integrates with Zoho as a custom OIDC application.

> **Note**
>
> Support for OIDC-compliant IdPs is available on the Team plan and higher.
> The Free plan supports Google, Microsoft, and social logins.
> Self-hosted deployments support OIDC-compliant IdPs in both the open source Community Edition and the [Enterprise Commercial License](https://docs.netbird.io/selfhosted/enterprise). See [self-hosted identity providers](https://docs.netbird.io/selfhosted/identity-providers).

## Step 1: Create a Custom OIDC Application

Log in to [Zoho Directory](https://directory.zoho.com/) and open the **Admin Panel** from the left sidebar. Navigate to **Applications**, click **Add Application**, and then choose **Create Custom App**.

Enter `NetBird` as the application name and an optional description.

![The Zoho custom application form with NetBird entered as the application name](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/team/single-sign-on/zoho-idp/create-custom-app.png)

## Step 2: Configure the OIDC Application

Click **Select SSO mode** and choose **OIDC** as the Sign-In Type. On the same form, set the following:

- **Application Type**: `Regular Web Application`

Under **Relying Party Details**, enter the NetBird endpoints:

- **Sign-in URL**: `https://app.netbird.io`
- **Sign-out URL**: `https://app.netbird.io`
- **Redirect URL**: `https://login.netbird.io/login/callback`

![The Zoho OIDC application settings with the NetBird sign-out and redirect URLs](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/team/single-sign-on/zoho-idp/configure-oidc-app.png)

Click **Done**, then **Create**.

## Step 3: Retrieve the Client Credentials

Open the newly created application and select the **Single Sign-on** tab. Copy and store the following securely:

- **Client ID**
- **Client Secret**

Under **Optional Endpoints**, copy the **Discovery Endpoint** as well. NetBird uses this single URL to automatically discover the Authorization, Token, and User Info endpoints for your Zoho data center.

![The Zoho application page showing the Client ID, Client Secret, and Discovery Endpoint](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/team/single-sign-on/zoho-idp/client-credentials.png)

## Step 4: Assign Users

Assign access to the NetBird application so users can sign in to NetBird with Zoho. You can assign individual users with **Add User**, or assign entire groups with **Add Group**.

![The Zoho application access screen with the Add User and Add Group buttons](https://raw.githubusercontent.com/netbirdio/docs/238224712cf7639036ed39fa8873d777b8822273/public/docs-static/img/manage/team/single-sign-on/zoho-idp/assign-users.png)

## Step 5: Share Configuration with NetBird

Send the following information to the NetBird support team at <support@netbird.io>:

- **Client ID**
- **Client Secret**
- **Discovery Endpoint** (the OpenID configuration URL you copied in Step 3)
- **Email domains for your users**

> **Note**
>
> We recommend using a secure channel to share the Client Secret. You can send a separate email and use a secret sharing service like: \\
>
> - <https://onetimesecret.com/en/> \\
>
> - <https://password.link/en> \\
