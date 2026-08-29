> Release-pinned source for ZITADEL v4.17.1: [apps/docs/content/guides/integrate/identity-providers/gitlab.mdx](https://zitadel.com/docs/guides/integrate/identity-providers/gitlab)

This guides shows you how to connect GitLab as an identity provider in ZITADEL.

> **Note**
>
> In ZITADEL you can connect an Identity Provider (IdP) like GitLab to your instance and provide it as default to all organizations.
> Also, you can register the IdP to a specific organization only.
> If you allow so, your organizations members can do the same in self-service.

## Open the GitLab Identity Provider Template

Go to the settings page of your instance or organization and choose "Identity Providers".

In the table you can see all the providers you have configured.
Also, you see all provider templates that are available.

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/zitadel_identity_provider_overview.png)

Select the GitLab or GitLab Self Hosted Provider template.

Click on the ZITADEL Callback URL to copy it to your clipboard.
You will have to paste it to the GitLab Application later.

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/zitadel_gitlab_create_provider.png)

## GitLab Configuration

### Register a new application

1. Login to [gitlab.com](https://gitlab.com) or to your GitLab self-hosted instance
2. Select [Edit Profile](https://gitlab.com/-/profile)
3. Click on [Applications](https://gitlab.com/-/profile/applications) in the side navigation
4. Fill in the application name
5. [Paste the ZITADEL Callback URL you copied before](#open-the-gitlab-identity-provider-template) to the Redirect URI field.

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/gitlab_app_registration.png)

### Client ID and secret

After clicking "Save application", you will see the detail page of the application you have just created.
To be able to connect GitLab to ZITADEL you will need a client ID and a client secret.
Save the ID and the Secret, you will not be able to copy the secret again, if you lose it you have to generate a new one.

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/gitlab_app_id_secret.png)

## ZITADEL Setup

Go back [to the GitLab provider template you opened before in ZITADEL](#open-the-gitlab-identity-provider-template).
Add the [client ID and secret you created before when you registered your GitLab application](#client-id-and-secret).

You can optionally configure the following settings.
A useful default will be filled if you don't change anything.

**Scopes**: The scopes define which scopes will be sent to the provider, `openid`, `profile`, and `email` are prefilled.
This information will be taken to create/update the user within ZITADEL.
ZITADEL ensures that at least the `openid`-scope is always sent.

Automatic creation: If this setting is enabled the user will be created automatically within ZITADEL, if it doesn't exist.
Automatic update: If this setting is enabled, the user will be updated within ZITADEL, if some user data is changed withing the provider. E.g if the lastname changes on the GitLab account, the information will be changed on the ZITADEL account on the next login.
Account creation allowed: This setting determines if account creation within ZITADEL is allowed or not.
Account linking allowed: This setting determines if account linking is allowed. When logging in with a GitLab account, a linkable ZITADEL account has to exist already.

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

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/zitadel_activate_gitlab.png)

### Ensure your Login Policy allows External IDPs

1. Go to the Settings
   - To allow external IdP logins by default, go to your instance default settings at `${CUSTOM_DOMAIN}/ui/console/instance?id=general`
   - To allow external IdP logins on an organization, go to `${CUSTOM_DOMAIN}/ui/console/org-settings?id=login` and ensure you have the right org context.
2. Modify your login policy in the menu "Login Behavior and Security"
3. Enable the attribute "External Login allowed"

You can also change the settings through the API directly either in the default settings or on a specific organization:

- [Update Default Login Settings](https://zitadel.com/docs/reference/api/admin/zitadel.admin.v1.AdminService.UpdateLoginPolicy)
- [Update Organization Login Settings](https://zitadel.com/docs/reference/api/management/zitadel.management.v1.ManagementService.UpdateCustomLoginPolicy)

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/zitadel_allow_external_idp.png)

## Test the setup

To test the setup, use incognito mode and browse to your login page. You see a
new button which redirects you to your GitLab login screen.

By default, ZITADEL shows what you define in the default settings.
If you overwrite the default settings for an organization, you need to send the organization scope in your auth request.

The organization scope looks like this: `urn:zitadel:iam:org:id:{id}`.
You can [read more about the reserved scopes](https://zitadel.com/docs/apis/openidoauth/scopes#reserved-scopes)
or [use the ZITADEL OIDC Playground](https://zitadel.com/playgrounds/oidc) to see what happens with the login when you send different scopes.

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/zitadel_login_gitlab.png)

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/gitlab_login.png)

New unlinked users are presented with the screen below.
&#x20;GitLab is an OAuth provider and does not provide a standardized way to get the user data.
This means that ZITADEL has no way to prefill the first and lastname fields.

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/zitadel_login_external_not_found_registration.png)

## Optional: Add ZITADEL action to autofill userdata

You can use a ZITADEL action if you want to prefill the fields firstname and lastname with GitLab data.

1. Go to the users target organizations settings page.
2. Add a new action with the body below. Make sure the action name equals the scripts function name. Also change the id in the script to match your provider settings id.
3. Add the action to the flow "External Authentication" and trigger it on "Post Authentication"

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/gitlab_identity_provider.js)
