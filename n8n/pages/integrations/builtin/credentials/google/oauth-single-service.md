> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/google/oauth-single-service.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/credentials/google/oauth-single-service.md)

# Google OAuth2 single service

This document contains instructions for creating a Google credential for a single service. They're also available as a [video](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#video).

## Prerequisites <a id="prerequisites"></a>

- Create a [Google Cloud](https://cloud.google.com/) account.

## Managed OAuth2 <a id="managed-oauth2"></a>

n8n Cloud users can use **Managed OAuth2** for the following nodes:

- [Google Calendar](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar)
- [Google Calendar Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googlecalendartrigger)
- [Google Chat](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlechat)
- [Google Contacts](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecontacts)
- [Google Docs](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledocs)
- [Google Drive](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive)
- [Google Drive Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger)
- [Google Mail](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail)
- [Google Mail Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger)
- [Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets)
- [Google Sheets Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googlesheetstrigger)
- [Google Slides](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleslides)
- [Google Tasks](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googletasks)
- [YouTube](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.youtube)

To use **Managed OAuth2**, click **Sign in with Google** in the credentials screen. You don't need any more setup in the Google Cloud Console or elsewhere.

![n8n credential screen with a Sign in with Google button and a dropdown to switch to Custom OAuth2](https://raw.githubusercontent.com/n8n-io/n8n-docs/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/.gitbook/assets/managed-oauth.png)

If you prefer to use Custom OAuth2, use the dropdown to change the authentication type.

## Custom OAuth2 <a id="custom-oauth2"></a>

Managed OAuth2 isn't available for self-hosted n8n users, nor for Google nodes not listed [above](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#managed-oauth2). You must create a custom OAuth2 single service credential. This means creating an app in the Google Cloud Console and connecting it to n8n with a Client ID and Client Secret.

The rest of this document covers the full process.

## Set up Custom OAuth2 <a id="set-up-custom-oauth2"></a>

Follow five steps to connect your n8n credential to Google services:

1. [Create a Google Cloud Console project](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#create-a-google-cloud-console-project).
2. [Enable APIs](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#enable-apis).
3. [Configure your OAuth consent screen](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#configure-your-oauth-consent-screen).
4. [Create your Google OAuth client credentials](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#create-your-google-oauth-client-credentials).
5. [Finish your n8n credential](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#finish-your-n8n-credential).

### Create a Google Cloud Console project <a id="create-a-google-cloud-console-project"></a>

First, create a Google Cloud Console project. If you already have a project, jump to the [next section](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#enable-apis):

1. Log in to your [Google Cloud Console](https://console.cloud.google.com) using your Google credentials.
2. In the top menu, select the project dropdown in the top navigation and select **New project** or go directly to the [New Project](https://console.cloud.google.com/projectcreate) page.
3. Enter a **Project name** and select the location (**Organization** and/or **Parent resource**) for your project.
4. Select **Create**.
5. Check the top navigation and make sure the project dropdown has your project selected. If not, select the project you just created.

![](https://raw.githubusercontent.com/n8n-io/n8n-docs/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/reusable-content/.gitbook/assets/google-cloud-project-dropdown.png)
*Check the project dropdown in the Google Cloud top navigation*

### Enable APIs <a id="enable-apis"></a>

With your project created, enable the APIs you'll need access to:

1. Access your [Google Cloud Console - Library](https://console.cloud.google.com/apis/library). Make sure you're in the correct project.
   ![](https://raw.githubusercontent.com/n8n-io/n8n-docs/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/reusable-content/.gitbook/assets/google-cloud-project-dropdown.png)
   *Check the project dropdown in the Google Cloud top navigation*

2. Go to **APIs & Services > Library**.

3. Search for and select the API(s) you want to enable. For example, for the Gmail node, search for and enable the Gmail API.

4. Some integrations require other APIs or require you to request access:<br>

   - Google Perspective: [Request API Access](https://developers.perspectiveapi.com/s/docs-get-started).
   - Google Ads: Get a [Developer Token](https://developers.google.com/google-ads/api/docs/first-call/dev-token).

   > **Info**
   > **Google Drive API required**
   >
   > The following integrations require the Google Drive API, as well as their own API:
   >
   > - Google Docs
   > - Google Sheets
   > - Google Slides

   > **Info**
   > **Google Vertex AI API**
   >
   > In addition to the Vertex AI API you will also need to enable the [Cloud Resource Manager API](https://console.cloud.google.com/apis/api/cloudresourcemanager.googleapis.com/).

5. Select **ENABLE**.

### Configure your OAuth consent screen <a id="configure-your-oauth-consent-screen"></a>

If you haven't used OAuth in your Google Cloud project before, you'll need to [configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent):

1. Access your [Google Cloud Console - Library](https://console.cloud.google.com/apis/library). Make sure you're in the correct project.

   <figure>![](../../../.gitbook/assets/google-cloud-project-dropdown (1).png)<figcaption><p>Check the project dropdown in the Google Cloud top navigation</p></figcaption></figure>
2. Open the left navigation menu and go to **APIs & Services > OAuth consent screen**. Google will redirect you to the Google Auth Platform overview page.
3. Select **Get started** on the **Overview** tab to begin configuring OAuth consent.
4. Enter an **App name** and **User support email** to include on the Oauth screen. Select **Next** to continue.
5. For the **Audience**, select **Internal** for user access within your organization's Google workspace or **External** for any user with a Google account. Refer to Google's [User type documentation](https://support.google.com/cloud/answer/15549945?sjid=17061891731152303663-EU#user-type) for more information on user types. Select **Next** to continue.<br>

   > **Info**
   > **Testing mode and test users**
   >
   > If you select **External**, your app will default to Testing mode. In this mode, only Google accounts you manually add as test users can complete the OAuth flow. Everyone else sees an "access denied" screen. See [Google hasn't verified this app](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#google-hasnt-verified-this-app) to learn how to add them.
6. Select the **Email addresses** Google should use to contact you about changes to your project. Select **Next** to continue.
7. Read and accept the Google's User Data Policy. Select **Continue** and then select **Create**.
8. In the left-hand menu, select **Branding**.
9. In the **Authorized domains** section, select **Add domain**:
   - If you're using n8n's Cloud service, add `n8n.cloud`
   - If you're [self-hosting](https://docs.n8n.io/deploy/host-n8n), add the domain of your n8n instance.
10. Select **Save** at the bottom of the page.

### Create your Google OAuth client credentials <a id="create-your-google-oauth-client-credentials"></a>

Next, create the OAuth client credentials in Google:

1. Access your [Google Cloud Console](https://console.cloud.google.com/). Make sure you're in the correct project.
2. In the **APIs & Services** section, select [**Credentials**](https://console.cloud.google.com/apis/credentials).
3. Select **+ Create credentials** > **OAuth client ID**.
4. In the **Application type** dropdown, select **Web application**.
5. Google automatically generates a **Name**. Update the **Name** to something you'll recognize in your console.
6. From your n8n credential, copy the **OAuth Redirect URL**. Paste it into the **Authorized redirect URIs** in Google Console.<br>

   > **Info**
   > **OAuth redirect URL for self-hosting**
   >
   > If you're running n8n on your local machine, you don't need a public domain, SSL certificate, or port forwarding to use Google OAuth. Google allows localhost as a valid redirect URI for development purposes. Your n8n OAuth redirect URL will look something like this: `http://localhost:5678/rest/oauth2-credential/callback` For more details on acceptable redirect URIs, refer to [Google's redirect URI documentation](https://support.google.com/cloud/answer/15549257?hl=en#zippy=%2Cweb-applications).
7. Select **Create**.

### Finish your n8n credential <a id="finish-your-n8n-credential"></a>

With the Google project and credentials fully configured, finish the n8n credential:

1. From Google's **OAuth client created** modal, copy the **Client ID**. Enter this in your n8n credential.
2. From the same Google modal, copy the **Client Secret**. Enter this in your n8n credential.
3. In n8n, select **Sign in with Google** to complete your Google authentication.
4. **Save** your new credentials.

## Video <a id="video"></a>

[Embedded media](https://www.youtube.com/embed/FBGtpWMTppw)

## Troubleshooting <a id="troubleshooting"></a>

### Google hasn't verified this app <a id="google-hasnt-verified-this-app"></a>

If using the OAuth authentication method, you might see the warning **Google hasn't verified this app**. To avoid this:

- If your app **User Type** is **Internal**, create OAuth credentials from the same account you want to authenticate.
- If your app **User Type** is **External**, you can add your email to the list of testers for the app: go to the [**Audience** ](https://console.cloud.google.com/auth/audience) page and add the email you're signing in with to the list of **Test users**.

If you need to use credentials generated by another account (by a developer or another third party), follow the instructions in [Google Cloud documentation | Authorization errors: Google hasn't verified this app](https://developers.google.com/nest/device-access/reference/errors/authorization#google_hasnt_verified_this_app).

### Google Cloud app becoming unauthorized <a id="google-cloud-app-becoming-unauthorized"></a>

For Google Cloud apps with **Publishing status** set to **Testing** and **User type** set to **External**, consent and tokens expire after seven days. Refer to [Google Cloud Platform Console Help | Setting up your OAuth consent screen](https://support.google.com/cloud/answer/10311615?hl=en#zippy=%2Ctesting) for more information. To resolve this, reconnect the app in the n8n credentials modal.

### redirect\_uri\_mismatch <a id="redirecturimismatch"></a>

This error means the redirect URI n8n is sending doesn't match any of the URIs registered in your Google Cloud Console OAuth client.

**Fix:** Copy the **OAuth Redirect URL** from your n8n credential panel and paste it exactly — including the protocol (`http` or `https`) and port number — into the **Authorized redirect URIs** field of your Google OAuth client.

### Access denied / "app not verified" <a id="access-denied-app-not-verified"></a>

This usually happens when your app is still in Testing mode and you haven't added the Google account you're trying to authenticate with as a test user.

**Fix:** Go to **APIs & Services** > **OAuth consent screen** > **Test users** and add the account you're trying to use.

### invalid\_client <a id="invalidclient"></a>

This error typically means the Client ID or Client Secret in your n8n credential doesn't match what's in Google Cloud Console.

**Fix:** Go back to your OAuth client in Google Cloud Console, copy both values fresh, and re-enter them in n8n. Watch out for accidental spaces when copying.
