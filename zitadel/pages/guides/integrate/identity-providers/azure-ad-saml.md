> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/guides/integrate/identity-providers/azure-ad-saml.mdx](https://zitadel.com/docs/guides/integrate/identity-providers/azure-ad-saml)

This guides shows you how to connect Entra ID (former Azure Active Directory) as an identity provider in ZITADEL.

> **Note**
>
> In ZITADEL you can connect an Identity Provider (IdP) like Entra ID (former Azure Active Directory) to your instance and provide it as default to all organizations.
> Also, you can register the IdP to a specific organization only.
> If you allow so, your organizations members can do the same in self-service.

## Entra ID SAML Configuration

You need to have access to an Entra ID Tenant. If you do not yet have one follow [this guide from Microsoft](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant) to create one for free.

### Register a new enterprise application in Entra

We start setting up the enterprise application.

1. Browse to the [Enterprise App registration menu](https://entra.microsoft.com/#view/Microsoft_AAD_IAM/AppGalleryBladeV2).
2. Search for "SAML Toolkit" and click on the "Microsoft Entra SAML Toolkit" card.
3. Change the name if wanted and click "Create"

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/azure_saml_app_create.png)

### Disable required assignment

To allow all users to sign in using ZITADEL we need to manually disable required assignment:

1. Go to Manage > Properties
2. Set "Assignment required?" to No
3. Hit Save

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/azure_disable_assignment_required.png)

### Setup SAML

Configure the sign-on method of the app.

1. Go to Manage > Single sign-on
2. Select SAML
3. You will be redirected to the Single Sign-On details page
4. Copy the URL of SAML Certificates > App Federation Metadata Url to your clipboard

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/azure_saml_overview.png)

## ZITADEL Setup

### Go to the IdP Providers Overview

Go to the settings page of your instance or organization and choose "Identity Providers".

In the table you can see all the providers you have configured.
Also, you see all provider templates that are available.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_identity_provider_overview.png)

Select the SAML Provider template.

### Create a new SAML Service Provider (SP)

Now we configure the identity provider on ZITADEL.

1. Set a name like "Microsoft Entra"
2. Paste the previously copied URL into the "Metadata URL"-field. The metadata will automatically be fetched from the provided URL after creation.
3. Select the "SAML\_POST\_BINDING" as binding
4. Ensure that the "Signed Request"-box is ticked
5. Change the options if needed. Microsoft Entra works out of the box using the pre configured options.
6. Click Create

Automatic creation: If this setting is enabled the user will be created automatically within ZITADEL, if it doesn't exist.
Automatic update: If this setting is enabled, the user will be updated within ZITADEL, if some user data is changed withing the provider. E.g if the lastname changes on the Microsoft account, the information will be changed on the ZITADEL account on the next login.
Account creation allowed: This setting determines if account creation within ZITADEL is allowed or not.
Account linking allowed: This setting determines if account linking is allowed. When logging in with a Microsoft account, a linkable ZITADEL account has to exist already.

> **Note**
>
> Either account creation or account linking have to be enabled. Otherwise, the provider can't be used.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_azure_saml_provider.png)

## Configure Basic SAML Configuration

After you created the SAML provider in ZITADEL, you can copy the URLs you need to configure in your Entra ID application.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_azure_saml_provider_urls.png)

1. Go to Microsoft Entra > Manage > Single sign-on
2. Edit the "Basic SAML Configuration"
3. **Identifier (Entity ID)**: Paste the *ZITADEL Metadata URL*.
4. **Reply URL (Assertion Consumer Service URL)**: Paste the *ZITADEL ACS Login Form URL*
5. **Sign on URL**: Paste the *ZITADEL ACS Login Form URL*
6. **Logout URL**: Paste the *ZITADEL Single Logout URL*
7. Optionally, you can enable the "Federated Logout", which will log out the user from Entra ID once they terminate their session in ZITADEL using the OIDC End Session Endpoint.
8. Click Save

> **Note**
>
> You can ignore the ZITADEL ACS Intent API URL for now.
> This is relevant if you want to [programmatically sign users in at ZITADEL via a SAML Service Provider](https://zitadel.com/docs/guides/integrate/login-ui/external-login).

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/azure_saml_overview2.png)

## Enable the Microsoft Entra Button in ZITADELs Login Page

Go back to ZITADEL and activate the IdP.

### Activate IdP

Once you created the provider, it is listed in the providers overview.
Activate it by selecting the tick with the tooltip *set as available*.

If you deactivate a provider, your users with links to it will not be able to authenticate anymore.
You can reactivate it and the logins will work again.

The provider can also be activated via API. As the identity providers are sub-resources of the login settings, this is done by linking the provider to the settings:

- [Activate Default Identity Provider](https://zitadel.com/docs/reference/api/admin/zitadel.admin.v1.AdminService.AddIDPToLoginPolicy)
- [Activate Organization Identity Provider](https://zitadel.com/docs/reference/api/management/zitadel.management.v1.ManagementService.AddIDPToLoginPolicy)

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_activate_azure_saml.png)

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

To test the setup, use incognito mode and browse to your login page.
You see a new button which redirects you to Microsoft Entra screen.

By default, ZITADEL shows what you define in the default settings.
If you overwrite the default settings for an organization, you need to send the organization scope in your auth request.

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/zitadel_login_azure_saml.png)

Click **Microsoft Entra**

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/guides/microsoft_login.png)

### Add Action to map user attributes

You can use a ZITADEL action if you want to prefill the fields username, firstname, lastname, displayname, email and email verified with Entra data.

1. Go to the users target organizations settings page.
2. Add a new action with the body below. Make sure the action name equals the scripts function name. Also change the id in the script to match your provider settings id.
3. Add the action to the flow "External Authentication" and trigger it on "Post Authentication"

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/entra_id_saml_prefil_register_form.js)
