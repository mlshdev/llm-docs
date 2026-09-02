> Release-pinned source for ZITADEL v4.17.2: [apps/docs/content/guides/integrate/identity-providers/apple.mdx](https://zitadel.com/docs/guides/integrate/identity-providers/apple)

This guides shows you how to connect Apple as an identity provider in ZITADEL.

> **Note**
>
> In ZITADEL you can connect an Identity Provider (IdP) like Apple to your instance and provide it as default to all organizations.
> Also, you can register the IdP to a specific organization only.
> If you allow so, your organizations members can do the same in self-service.

## Open the Apple Identity Provider Template

Go to the settings page of your instance or organization and choose "Identity Providers".

In the table you can see all the providers you have configured.
Also, you see all provider templates that are available.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_identity_provider_overview.png)

Select the Apple Provider template.

Click on the ZITADEL Callback URL to copy it to your clipboard.
You will have to paste it in the Apple service later.

> **Note**
>
> For Apple with V1 hosted login, the callback URL ends with `/form` (e.g., `${CUSTOM_DOMAIN}/ui/login/login/externalidp/callback/form`) because Apple uses a Form Post to return the authorization response.
>
> For V2, use the standard callback URL `${CUSTOM_DOMAIN}/idps/callback`, which already accepts POST requests.

![Apple Provider](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_apple_create_provider.png)

## Apple Configuration

### Register a new App

1. Go to the Identifiers of your Apple Developer Account
2. Click the add button "+" on the top left
3. Choose App IDs and click "continue"
4. Add a description and a unique identifier
5. Enable "Sign in with Apple" and click "continue"

### Register a new service

1. Go to the Identifiers of your Apple Developer Account: <https://developer.apple.com/account/resources/identifiers/list>
2. Click the add button "+" on the top left
3. Choose Services IDs and click "continue"
4. Add a description and a unique identifier and click "register"
5. Select your registered service from the list and enable sign in with Apple, then click "configure"
6. Choose the previously created App in the Primary App ID List
7. Add your Custom Domain in the domains and subdomains field

- Example domain for `https://acme-gzoe4x.zitadel.cloud` would look like this:  `acme-gzoe4x.zitadel.cloud`

8. [Paste the ZITADEL Callback URL you copied before](#open-the-apple-identity-provider-template) to the Return URLs

![Apple Service](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/apple_service_create.png)

### Register a new key

1. Go to the keys list of your Apple Developer Account: <https://developer.apple.com/account/resources/authkeys/list>
2. Click the add button "+" on the top left
3. Give your key a name
4. Enable "Sign in with Apple" and click configure
5. Choose your app from the list
6. Register the key and download it

## ZITADEL Setup

Go back [to the Apple provider template you opened before in ZITADEL](#open-the-apple-identity-provider-template).

1. Add the Client ID, this is [the identifier of the service you created in your Apple Account](#register-a-new-service)
2. Fill the Team ID, you can find it when you log in to your Apple Developer account, in your membership
3. Enter the [Key ID and upload the Private Key you created before](#register-a-new-key)

You can optionally configure the following settings.
A useful default will be filled if you don't change anything.

**Scopes**: The scopes define which scopes will be sent to the provider, `name` and `email` are prefilled. This information will be taken to create/update the user within ZITADEL.

Automatic creation: If this setting is enabled the user will be created automatically within ZITADEL, if it doesn't exist.
Automatic update: If this setting is enabled, the user will be updated within ZITADEL, if some user data is changed withing the provider. E.g if the lastname changes on the Apple account, the information will be changed on the ZITADEL account on the next login.
Account creation allowed: This setting determines if account creation within ZITADEL is allowed or not.
Account linking allowed: This setting determines if account linking is allowed. When logging in with a Apple account, a linkable ZITADEL account has to exist already.

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

![Activate the Apple Provider](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_activate_apple.png)

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
new button which redirects you to your Apple login screen.

By default, ZITADEL shows what you define in the default settings.
If you overwrite the default settings for an organization, you need to send the organization scope in your auth request.

The organization scope looks like this: `urn:zitadel:iam:org:id:{id}`.
You can [read more about the reserved scopes](https://zitadel.com/docs/apis/openidoauth/scopes#reserved-scopes)
or [use the ZITADEL OIDC Playground](https://zitadel.com/playgrounds/oidc) to see what happens with the login when you send different scopes.

![Apple Button](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_login_apple.png)

![Apple Login](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/apple_login.png)
