> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/guides/integrate/identity-providers/linkedin_oauth.mdx](https://zitadel.com/docs/guides/integrate/identity-providers/linkedin_oauth)

This guides shows you how to connect LinkedIn as an identity provider in ZITADEL.

> **Note**
>
> In ZITADEL you can connect an Identity Provider (IdP) like LinkedIn to your instance and provide it as default to all organizations.
> Also, you can register the IdP to a specific organization only.
> If you allow so, your organizations members can do the same in self-service.

## LinkedIn Configuration

### Register a new client

1. Go to the LinkedIn Developer console and create a new App: <https://www.linkedin.com/developers/apps/new>
2. Add your App Name, your Company Page and a Logo
3. Add "Sign In with LinkedIn using OpenID Connect" by clicking "Request access"
4. Go to the Auth Settings of the App and add the following URL to the "Authorized redirect URLs"

- Login V1: `${CUSTOM_DOMAIN}/ui/login/login/externalidp/callback`
- Example redirect url for the domain `https://acme.zitadel.cloud` would look like this:  `https://acme.zitadel.cloud/ui/login/login/externalidp/callback`
- Login V2: `${CUSTOM_DOMAIN}/idps/callback`
- In this case the url would look like this:  `https://acme.zitadel.cloud/idps/callback`

5. Verify the app as your company
6. In the Auth - OAuth 2.0 scopes section you should see `openid`, `profile` and `email` listed
7. Save Client ID and Primary Client Secret from the Application credentials

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/linkedin_add_app.png)

## ZITADEL Setup

### Add custom login policy

1. Go to the Settings
   - To allow external IdP logins by default, go to your instance default settings at `${CUSTOM_DOMAIN}/ui/console/instance?id=general`
   - To allow external IdP logins on an organization, go to `${CUSTOM_DOMAIN}/ui/console/org-settings?id=login` and ensure you have the right org context.
2. Modify your login policy in the menu "Login Behavior and Security"
3. Enable the attribute "External Login allowed"

You can also change the settings through the API directly either in the default settings or on a specific organization:

- [Update Default Login Settings](https://zitadel.com/docs/reference/api/admin/zitadel.admin.v1.AdminService.UpdateLoginPolicy)
- [Update Organization Login Settings](https://zitadel.com/docs/reference/api/management/zitadel.management.v1.ManagementService.UpdateCustomLoginPolicy)

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_allow_external_idp.png)

### Go to the IdP Providers Overview

Go to the settings page of your instance or organization and choose "Identity Providers".

In the table you can see all the providers you have configured.
Also, you see all provider templates that are available.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_identity_provider_overview.png)

Select the Generic OAuth Provider template.

### Create a new Generic OAuth Provider

The Generic OAuth Provider allows you to configure any OAuth compliant identity providers.

The following information you need to fill out by yourself:

Name : e.g. LinkedIn
Authorization Endpoint <https://www.linkedin.com/oauth/v2/authorization>
Token Endpoint <https://www.linkedin.com/oauth/v2/accessToken>
User Endpoint <https://api.linkedin.com/v2/userinfo>
ID Attribute sub
Client-ID : Client id from the application previously created in your LinkedIn account
Client-Secret : Client id from the application previously created in your LinkedIn account
Scopes: (openid, profile, email is preconfigured)

Automatic creation: If this setting is enabled the user will be created automatically within ZITADEL, if it doesn't exist.
Automatic update: If this setting is enabled, the user will be updated within ZITADEL, if some user data is changed withing the provider. E.g if the lastname changes on the LinkedIn account, the information will be changed on the ZITADEL account on the next login.
Account creation allowed: This setting determines if account creation within ZITADEL is allowed or not.
Account linking allowed: This setting determines if account linking is allowed. When logging in with a LinkedIn account, a linkable ZITADEL account has to exist already.

> **Note**
>
> Either account creation or account linking have to be enabled. Otherwise, the provider can't be used.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_linkedin_create_provider.png)

### Activate IdP

Once you created the provider, it is listed in the providers overview.
Activate it by selecting the tick with the tooltip *set as available*.

If you deactivate a provider, your users with links to it will not be able to authenticate anymore.
You can reactivate it and the logins will work again.

The provider can also be activated via API. As the identity providers are sub-resources of the login settings, this is done by linking the provider to the settings:

- [Activate Default Identity Provider](https://zitadel.com/docs/reference/api/admin/zitadel.admin.v1.AdminService.AddIDPToLoginPolicy)
- [Activate Organization Identity Provider](https://zitadel.com/docs/reference/api/management/zitadel.management.v1.ManagementService.AddIDPToLoginPolicy)

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_activate_linkedin.png)

## Test the setup

To test the setup, use incognito mode and browse to your login page. You see a
new button which redirects you to your LinkedIn login screen.

By default, ZITADEL shows what you define in the default settings.
If you overwrite the default settings for an organization, you need to send the organization scope in your auth request.

The organization scope looks like this: `urn:zitadel:iam:org:id:{id}`.
You can [read more about the reserved scopes](https://zitadel.com/docs/apis/openidoauth/scopes#reserved-scopes)
or [use the ZITADEL OIDC Playground](https://zitadel.com/playgrounds/oidc) to see what happens with the login when you send different scopes.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_login_linkedin.png)

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/linkedin_login.png)

## Optional: Add ZITADEL action to autofill userdata

You can use a ZITADEL action if you want to prefill the fields firstname, lastname, username, email and email verified with LinkedIn data.

1. Go to the users target organizations settings page.
2. Add a new action with the body below. Make sure the action name equals the scripts function name. Also change the id in the script to match your provider settings id.
3. Add the action to the flow "External Authentication" and trigger it on "Post Authentication"

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/linkedin_identity_provider.js)
