> Release-pinned source for ZITADEL v4.17.2: [apps/docs/content/guides/integrate/identity-providers/azure-ad-oidc.mdx](https://zitadel.com/docs/guides/integrate/identity-providers/azure-ad-oidc)

This guides shows you how to connect Entra ID (former Azure Active Directory) as an identity provider in ZITADEL.

> **Note**
>
> In ZITADEL you can connect an Identity Provider (IdP) like Entra ID (former Azure Active Directory) to your instance and provide it as default to all organizations.
> Also, you can register the IdP to a specific organization only.
> If you allow so, your organizations members can do the same in self-service.

## Open the Microsoft Identity Provider Template

Go to the settings page of your instance or organization and choose "Identity Providers".

In the table you can see all the providers you have configured.
Also, you see all provider templates that are available.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_identity_provider_overview.png)

Select the Microsoft Provider template.

Click on the ZITADEL Callback URL to copy it to your clipboard.
You will have to paste it in the Entra ID Client later.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_azure_provider2.png)

## Entra ID Configuration

You need to have access to an Entra ID Tenant. If you do not yet have one follow [this guide from Microsoft](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant) to create one for free.

### Register a new application

1. Browse to the [App registration menus create dialog](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/CreateApplicationBlade/quickStartType~/null/isMSAApp~/false) to create a new app.
2. Give the application a name and choose who should be able to log in (Single-Tenant, Multi-Tenant, Personal Accounts, etc.) This setting will also have an impact on how to configure the provider later on in ZITADEL.
3. Choose "Web" in the redirect uri field and [paste the ZITADEL Callback URL you copied before](#open-the-microsoft-identity-provider-template).
4. Save the Application (client) ID and the Directory (tenant) ID from the detail page
5. Register the application

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/azure_app_registration.png)

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/azure_client_tenant_id.png)

### Add client secret

Generate a new client secret to authenticate your user.

1. Click on client credentials on the detail page of the application or use the menu "Certificates & secrets"
2. Click on "+ New client secret" and enter a description and an expiry date, add the secret afterward
3. Copy the value of the secret. You will not be able to see the value again after some time

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/azure_client_secret.png)

### Token settings

To allow ZITADEL to get the information from the authenticating user you have to configure what kind of optional claims should be returned in the token.

1. Click on Token settings in the side menu
2. Click on "+ Add optional claim"
3. Add email, family\_name (last name of the user), given\_name (first name of the user) and preferred\_username to the id token

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/azure_token_configuration.png)

### API permissions

To be able to get all the information that ZITADEL needs, you have to configure the correct permissions.

1. Go to "API permissions" in the side menu
2. Make sure the permissions include "Microsoft Graph": email, profile and User.Read
3. The "Other permissions granted" should include "Microsoft Graph: openid"

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/azure_api_permissions.png)

## ZITADEL Setup

Go back [to the Microsoft provider template you opened before in ZITADEL](#open-the-microsoft-identity-provider-template).
Add the [client ID and secret created before on your Entra ID application](#add-client-secret).

You can optionally configure the following settings.
A useful default will be filled if you don't change anything.

**Scopes**: The scopes define which scopes will be sent to the provider, `openid`, `profile`, and `email` are prefilled.
This information will be taken to create/update the user within ZITADEL. Make sure to also add `User.Read`. ZITADEL ensures that at least `openid` and `User.Read` scopes are always sent.

**Email Verified**: Entra ID doesn't send the email verified claim in the users token, if you don't enable this setting.
The user is then created with an unverified email, which results in an email verification message.
If you want to avoid that, make sure to enable "Email verified".
In that case, the user is created with a verified email address.

**Tenant Type**: Configure the tenant type according to what you have chosen in the settings of your Entra ID application previously.

- Common: Choose common if you want all Microsoft accounts being able to log in.
  In this case, configure "Accounts in any organizational directory and personal Microsoft accounts" in your Entra ID App.
- Organizations: Choose organization if you have Entra ID Tenants and no personal accounts. (You have configured either "Accounts in this organization" or "Accounts in any organizational directory" on your Azure APP)
- Consumers: Choose this if you want to allow public accounts. (In your Entra ID App you have configured "Personal Microsoft accounts only")

**Tenant ID**: If you have selected *Tenant ID* as *Tenant Type*, you have to enter the *Directory (Tenant) ID* into the *Tenant ID* field, copied previously from the Azure App settings.

Automatic creation: If this setting is enabled the user will be created automatically within ZITADEL, if it doesn't exist.
Automatic update: If this setting is enabled, the user will be updated within ZITADEL, if some user data is changed withing the provider. E.g if the lastname changes on the Microsoft account, the information will be changed on the ZITADEL account on the next login.
Account creation allowed: This setting determines if account creation within ZITADEL is allowed or not.
Account linking allowed: This setting determines if account linking is allowed. When logging in with a Microsoft account, a linkable ZITADEL account has to exist already.

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

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_activate_azure.png)

### Ensure your Login Policy allows External IDPs

1. Go to the Settings
   - To allow external IdP logins by default, go to your instance default settings at `${CUSTOM_DOMAIN}/ui/console/instance?id=general`
   - To allow external IdP logins on an organization, go to `${CUSTOM_DOMAIN}/ui/console/org-settings?id=login` and ensure you have the right org context.
2. Modify your login policy in the menu "Login Behavior and Security"
3. Enable the attribute "External Login allowed"

You can also change the settings through the API directly either in the default settings or on a specific organization:

- [Update Default Login Settings](https://zitadel.com/docs/reference/api/admin/zitadel.admin.v1.AdminService.UpdateLoginPolicy)
- [Update Organization Login Settings](https://zitadel.com/docs/reference/api/management/zitadel.management.v1.ManagementService.UpdateCustomLoginPolicy)

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_allow_external_idp.png)

## Test the setup

To test the setup, use incognito mode and browse to your login page. You see a
new button which redirects you to your Microsoft login screen.

By default, ZITADEL shows what you define in the default settings.
If you overwrite the default settings for an organization, you need to send the organization scope in your auth request.

The organization scope looks like this: `urn:zitadel:iam:org:id:{id}`.
You can [read more about the reserved scopes](https://zitadel.com/docs/apis/openidoauth/scopes#reserved-scopes)
or [use the ZITADEL OIDC Playground](https://zitadel.com/playgrounds/oidc) to see what happens with the login when you send different scopes.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_login_azure.png)

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/microsoft_login.png)
