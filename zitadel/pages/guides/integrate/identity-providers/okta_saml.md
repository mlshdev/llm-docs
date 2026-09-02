> Release-pinned source for ZITADEL v4.17.2: [apps/docs/content/guides/integrate/identity-providers/okta_saml.mdx](https://zitadel.com/docs/guides/integrate/identity-providers/okta_saml)

This guides shows you how to connect OKTA as an identity provider in ZITADEL.

> **Note**
>
> In ZITADEL you can connect an Identity Provider (IdP) like OKTA to your instance and provide it as default to all organizations.
> Also, you can register the IdP to a specific organization only.
> If you allow so, your organizations members can do the same in self-service.

## ZITADEL Setup

### Go to the IdP Providers Overview

Go to the settings page of your instance or organization and choose "Identity Providers".

In the table you can see all the providers you have configured.
Also, you see all provider templates that are available.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_identity_provider_overview.png)

Select the SAML Provider template.

### Create a new SAML Provider

To be able to create the application in OKTA we need the provider id from ZITADEL.

1. Create a new SAML Provider with a name and a random text in the Metadata Xml field.
   We will fill that as soon as we have done the settings in OKTA.
2. Save Configuration

As an alternative you can add the SAML identity provider through the API, either on the default settings or on a specific organization:

- [Add Default SAML Identity Provider](https://zitadel.com/docs/reference/api/admin/zitadel.admin.v1.AdminService.AddSAMLProvider)
- [Add SAML Identity Provider on Organization](https://zitadel.com/docs/reference/api/management/zitadel.management.v1.ManagementService.AddSAMLProvider)

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_okta_saml_provider_empty.png)

After you created the SAML Provider in ZITADEL, you can copy the URLs you need to configure in your OKTA application.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_okta_saml_provider_urls.png)

## OKTA Configuration

### Register a new client

1. Log in to your OKTA Account and go to the applications list: `OKTA-DOMAIN/admin/apps/active`
2. Click on "Create App Integration" and choose "SAML 2.0"
3. Give the application a name
4. Click on the ZITADEL URLs that your SAML IDP shows since you created it in ZITADEL and paste them accordingly:

- **Single sign-on URL**: Paste the *ZITADEL ACS Login Form URL*.
- **Audience URI (SP Entity ID)**: Paste the *ZITADEL Metadata URL*

5. Save the settings
6. Copy the metadata URL from the details

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/okta_add_saml_app.png)

### Add Attribute Statements

To send the user data from OKTA to ZITADEL you have to add some attribute mappings in your SAML Settings
You can define the name by yourself, just ensure you use the same later on in the ZITADEL Action we will add.

Add the following three mappings:

| Name         | Name format | Value          |
| ------------ | ----------- | -------------- |
| givenname    | Basic       | user.firstName |
| surname      | Basic       | user.lastName  |
| emailaddress | Basic       | user.email     |

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/okta_saml_attribute_mapping.png)

### Assign Users to Application

To allow users to authenticate with that app go to the "Assign" Tab.

1. Click the Assign Button
2. Choose Assign To People
3. Select the users you like to be able to authenticate

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/okta_assign_user_to_app.png)

## Finish ZITADEL Setup

You are now finished with the settings in OKTA and you can switch back to your identity provider settings in ZITADEL.

### Add Metadata Xml

Add [the metadata URL you have saved before from OKTA](#register-a-new-client) to the Metadata URL.
As soon as you have saved the provider, and you have a look at the detail you should now see the Metadata Xml field filled.

If you prefer changing the settings through the API you can update the SAML provider on the default settings or a specific organization:

- [Update Default SAML Identity Provider](https://zitadel.com/docs/reference/api/admin/zitadel.admin.v1.AdminService.UpdateSAMLProvider)
- [Update SAML Identity Provider on Organization](https://zitadel.com/docs/reference/api/management/zitadel.management.v1.ManagementService.UpdateSAMLProvider)

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_okta_saml_provider_filled.png)

You can also fill the optional fields if needed:

Automatic creation: If this setting is enabled the user will be created automatically within ZITADEL, if it doesn't exist.
Automatic update: If this setting is enabled, the user will be updated within ZITADEL, if some user data is changed withing the provider. E.g if the lastname changes on the OKTA account, the information will be changed on the ZITADEL account on the next login.
Account creation allowed: This setting determines if account creation within ZITADEL is allowed or not.
Account linking allowed: This setting determines if account linking is allowed. When logging in with a OKTA account, a linkable ZITADEL account has to exist already.

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

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_activate_okta_saml.png)

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
new button which redirects you to your OKTA login screen.

By default, ZITADEL shows what you define in the default settings.
If you overwrite the default settings for an organization, you need to send the organization scope in your auth request.

The organization scope looks like this: `urn:zitadel:iam:org:id:{id}`.
You can [read more about the reserved scopes](https://zitadel.com/docs/apis/openidoauth/scopes#reserved-scopes)
or [use the ZITADEL OIDC Playground](https://zitadel.com/playgrounds/oidc) to see what happens with the login when you send different scopes.

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/zitadel_login_okta.png)

![](https://raw.githubusercontent.com/zitadel/zitadel/35aa213863395a73ee18dbfeae9a9ef41d6fff77/apps/docs/public/img/guides/okta_login.png)

### Add Action to map user attributes

You can use a ZITADEL action if you want to prefill the fields username, firstname, lastname, email and email verified with OKTA data.

1. Go to the users target organizations settings page.
2. Add a new action with the body below. Make sure the action name equals the scripts function name. Also change the id in the script to match your provider settings id.
3. Add the action to the flow "External Authentication" and trigger it on "Post Authentication"

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/okta_saml_prefil_register_form.js)
