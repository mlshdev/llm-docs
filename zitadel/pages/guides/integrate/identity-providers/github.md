> Release-pinned source for ZITADEL v4.17.2: [apps/docs/content/guides/integrate/identity-providers/github.mdx](https://zitadel.com/docs/guides/integrate/identity-providers/github)

This guides shows you how to connect GitHub as an identity provider in ZITADEL.

> **Note**
>
> In ZITADEL you can connect an Identity Provider (IdP) like GitHub to your instance and provide it as default to all organizations.
> Also, you can register the IdP to a specific organization only.
> If you allow so, your organizations members can do the same in self-service.

## Open the GitHub Identity Provider Template

Go to the settings page of your instance or organization and choose "Identity Providers".

In the table you can see all the providers you have configured.
Also, you see all provider templates that are available.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_identity_provider_overview.png)

Select the GitHub or GitHub Enterprise Server Provider template.

Click on the ZITADEL Callback URL to copy it to your clipboard.
You will have to paste it to the GitHub OAuth application later.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_github_create_provider.png)

## GitHub Configuration

### Register a new application

1. Create a new OAuth application
   - For **GitHub** browse to the [Register a new OAuth application](https://github.com/settings/applications/new). You can find this link withing [Settings](https://github.com/settings/profile) - [Developer Settings](https://github.com/settings/apps) - - [OAuth Apps](https://github.com/settings/developers).
   - For **GitHub Enterprise** go to your GitHub Enterprise home page and then to Settings - Developer Settings - OAuth Apps - Register a new application/New OAuth App
2. Fill in the application name and homepage URL.
3. [Paste the ZITADEL Callback URL you copied before](#open-the-github-identity-provider-template) to the Authorization callback URL field.
4. Click "Register application".

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/github_oauth_app_registration.png)

### Client ID and secret

After clicking "Register application", you see the detail page of the application you have just created.
Copy the client ID directly from the detail page.
Generate a new secret by clicking "Generate new client secret".
Make sure to save the secret, as you will not be able to show it again.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/github_oauth_client_id_secret.png)

## ZITADEL Setup

Go back [to the GitHub provider template you opened before in ZITADEL](#open-the-github-identity-provider-template).
Add the [client ID and secret you created before when you registered your GitHub OAuth application](#client-id-and-secret).

You can optionally configure the following settings.
A useful default will be filled if you don't change anything.

**Scopes**: The scopes define which scopes will be sent to the provider, `openid`, `profile`, and `email` are prefilled.
This information is used to create and/or update the user within ZITADEL.
ZITADEL ensures that at least the `openid`-scope is always sent.

Automatic creation: If this setting is enabled the user will be created automatically within ZITADEL, if it doesn't exist.
Automatic update: If this setting is enabled, the user will be updated within ZITADEL, if some user data is changed withing the provider. E.g if the lastname changes on the GitHub account, the information will be changed on the ZITADEL account on the next login.
Account creation allowed: This setting determines if account creation within ZITADEL is allowed or not.
Account linking allowed: This setting determines if account linking is allowed. When logging in with a GitHub account, a linkable ZITADEL account has to exist already.

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

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_activate_github.png)

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
new button which redirects you to your GitHub login screen.

By default, ZITADEL shows what you define in the default settings.
If you overwrite the default settings for an organization, you need to send the organization scope in your auth request.

The organization scope looks like this: `urn:zitadel:iam:org:id:{id}`.
You can [read more about the reserved scopes](https://zitadel.com/docs/apis/openidoauth/scopes#reserved-scopes)
or [use the ZITADEL OIDC Playground](https://zitadel.com/playgrounds/oidc) to see what happens with the login when you send different scopes.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_login_github.png)

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/github_login.png)

New unlinked users are presented with the screen below.
&#x20;GitHub is an OAuth provider and does not provide a standardized way to get the user data.
This means that ZITADEL has no way to prefill the first and lastname fields.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_login_external_not_found_registration.png)

## Optional: Add ZITADEL action to autofill userdata

You can use a ZITADEL action if you want to prefill the fields firstname and lastname with GitHub data.

1. Go to the users target organizations settings page.
2. Add a new action with the body below. Make sure the action name equals the scripts function name. Also change the id in the script to match your provider settings id.
3. Add the action to the flow "External Authentication" and trigger it on "Post Authentication"

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/github_identity_provider.js)
