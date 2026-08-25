> Release-pinned source for NetBird v0.77.1: [netbirdio/docs@d905fda2a3f04a2066746875d09e51a3fe62dfed:src/pages/manage/team/single-sign-on/iij-id.mdx](https://github.com/netbirdio/docs/blob/d905fda2a3f04a2066746875d09e51a3fe62dfed/src/pages/manage/team/single-sign-on/iij-id.mdx)

# IIJ ID on NetBird Cloud

You can use IIJ ID as your Identity Provider with NetBird, but it will require some additional configuration steps. [IIJ ID](https://www.iij.ad.jp/biz/iid/) is a cloud-based identity and access management service (IDaaS) from Internet Initiative Japan that provides single sign-on, multi-factor authentication, and user lifecycle management, with support for OpenID Connect, SAML, and SCIM.

NetBird integrates with IIJ ID as a custom OpenID Connect application.

> **Note**
>
> Support for OIDC-compliant IdPs is available on the Team plan and higher.
> The Free plan supports Google, Microsoft, and social logins.

## Step 1: Create a Custom OpenID Connect Application

Log in to the IIJ ID console and navigate to `Application` > `Application Management`. Click `Add Application`, then `Add Custom Application`.

Select `OpenID Connect Application` and click `Next`.

![iij-id-create-custom-app](https://raw.githubusercontent.com/netbirdio/docs/d905fda2a3f04a2066746875d09e51a3fe62dfed/public/docs-static/img/manage/team/single-sign-on/iij-id-idp/create-custom-app.png)

Fill out the application information:

- **Application name**: `NetBird`
- **Application description**: An optional description for your administrators
- **Application logo**: An optional logo image (GIF, JPEG, PNG, or BMP, up to 10 MB)

Click `Add Application`.

![iij-id-application-information](https://raw.githubusercontent.com/netbirdio/docs/d905fda2a3f04a2066746875d09e51a3fe62dfed/public/docs-static/img/manage/team/single-sign-on/iij-id-idp/application-information.png)

## Step 2: Configure the Federation Settings

Open the newly created application, click `Edit`, and select the `Federation` tab. Set the following:

- **Default scopes**: Select `openid`, `profile`, and `email`
- **Application top page URL**: `https://app.netbird.io`
- **Redirect URLs**: `https://login.netbird.io/login/callback`

Click `Update` to apply the configuration.

![iij-id-federation-settings](https://raw.githubusercontent.com/netbirdio/docs/d905fda2a3f04a2066746875d09e51a3fe62dfed/public/docs-static/img/manage/team/single-sign-on/iij-id-idp/federation-settings.png)

## Step 3: Retrieve the Client Credentials

The `Federation` tab also displays the OpenID Connect provider information NetBird needs. Copy and store the following securely:

- **Client ID**
- **Client Secret**
- **Discovery endpoint**

NetBird uses the Discovery endpoint to automatically resolve the Authorization, Token, and User Info endpoints of your IIJ ID tenant.

## Step 4: Assign Users

Assign access to the NetBird application so users can sign in to NetBird with IIJ ID. Open the application, select `Application User`, and click `Add Application User`. Select the users or groups that should have access, choose whether the application appears in **My Applications**, and click `Add Application User`.

![iij-id-assign-users](https://raw.githubusercontent.com/netbirdio/docs/d905fda2a3f04a2066746875d09e51a3fe62dfed/public/docs-static/img/manage/team/single-sign-on/iij-id-idp/assign-users.png)

## Step 5: Share Configuration with NetBird

Send the following information to the NetBird support team at <support@netbird.io>:

- **Client ID**
- **Client Secret**
- **Discovery endpoint** (the OpenID configuration URL you copied in Step 3)
- **Email domains for your users**

> **Note**
>
> We recommend using a secure channel to share the Client Secret. You can send a separate email and use a secret sharing service like: \\
>
> - <https://onetimesecret.com/en/> \\
>
> - <https://password.link/en> \\
