> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/guides/integrate/identity-providers/google.mdx](https://zitadel.com/docs/guides/integrate/identity-providers/google)

This guides shows you how to connect Google as an identity provider in ZITADEL.

> **Note**
>
> In ZITADEL you can connect an Identity Provider (IdP) like Google to your instance and provide it as default to all organizations.
> Also, you can register the IdP to a specific organization only.
> If you allow so, your organizations members can do the same in self-service.

[Open the embedded media](https://www.youtube.com/watch?v=wg-ee-EnHdE)

## Open the Google Identity Provider Template

Go to the settings page of your instance or organization and choose "Identity Providers".

In the table you can see all the providers you have configured.
Also, you see all provider templates that are available.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_identity_provider_overview.png)

Select the Google Provider template.

Click on the ZITADEL Callback URL to copy it to your clipboard.
You will have to paste it in the Google Cloud Platform later.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_google_create_provider.png)

## Google Configuration

### Register a new application

1. Go to the Google Cloud Platform and choose your project: <https://console.cloud.google.com/apis/credentials>
2. Click on "+ CREATE CREDENTIALS" and choose "OAuth client ID"
3. Choose "Web application" as application type and give a name
4. [Paste the ZITADEL Callback URL you copied before](#open-the-google-identity-provider-template) into the authorized redirect URIs

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/google_oauth_app_registration.png)

### Client ID and secret

You will need the Client ID and Client secret to configure the Google Identity Provider in ZITADEL.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/google_client_id_secret.png)

## ZITADEL Setup

Go back [to the Google provider template you opened before in ZITADEL](#open-the-google-identity-provider-template).
Add the client ID and secret created before on your Google App.

You can optionally configure the following settings.
A useful default will be filled if you don't change anything.

**Scopes**: The scopes define which scopes will be sent to the provider, `openid`, `profile`, and `email` are prefilled.
This information will be taken to create/update the user within ZITADEL.
ZITADEL ensures that at least the `openid`-scope is always sent.

Automatic creation: If this setting is enabled the user will be created automatically within ZITADEL, if it doesn't exist.
Automatic update: If this setting is enabled, the user will be updated within ZITADEL, if some user data is changed withing the provider. E.g if the lastname changes on the Google account, the information will be changed on the ZITADEL account on the next login.
Account creation allowed: This setting determines if account creation within ZITADEL is allowed or not.
Account linking allowed: This setting determines if account linking is allowed. When logging in with a Google account, a linkable ZITADEL account has to exist already.

> **Note**
>
> Either account creation or account linking have to be enabled. Otherwise, the provider can't be used.

### Activate IdP

Once you created the provider, it is listed in the providers overview.
Activate it by selecting the tick with the tooltip *set as available*.

If you deactivate a provider, your users with links to it will not be able to authenticate anymore.
You can reactivate it and the logins will work again.

The provider can also be activated via API. As the identity providers are sub-resources of the login settings, this is done by linking the provider to the settings:

- [Activate Default Identity Provider](https://zitadel.com/docs/reference/api/admin/zitadel.admin.v1.AdminService.AddIDPToLoginPolicy)
- [Activate Organization Identity Provider](https://zitadel.com/docs/reference/api/management/zitadel.management.v1.ManagementService.AddIDPToLoginPolicy)

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_activate_google.png)

### Ensure your Login Policy allows External IDPs

1. Go to the Settings
   - To allow external IdP logins by default, go to your instance default settings at `${CUSTOM_DOMAIN}/ui/console/instance?id=general`
   - To allow external IdP logins on an organization, go to `${CUSTOM_DOMAIN}/ui/console/org-settings?id=login` and ensure you have the right org context.
2. Modify your login policy in the menu "Login Behavior and Security"
3. Enable the attribute "External Login allowed"

You can also change the settings through the API directly either in the default settings or on a specific organization:

- [Update Default Login Settings](https://zitadel.com/docs/reference/api/admin/zitadel.admin.v1.AdminService.UpdateLoginPolicy)
- [Update Organization Login Settings](https://zitadel.com/docs/reference/api/management/zitadel.management.v1.ManagementService.UpdateCustomLoginPolicy)

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_allow_external_idp.png)

## Test the setup

To test the setup, use incognito mode and browse to your login page. You see a
new button which redirects you to your Google login screen.

By default, ZITADEL shows what you define in the default settings.
If you overwrite the default settings for an organization, you need to send the organization scope in your auth request.

The organization scope looks like this: `urn:zitadel:iam:org:id:{id}`.
You can [read more about the reserved scopes](https://zitadel.com/docs/apis/openidoauth/scopes#reserved-scopes)
or [use the ZITADEL OIDC Playground](https://zitadel.com/playgrounds/oidc) to see what happens with the login when you send different scopes.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_login_google.png)

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/google_login.png)
