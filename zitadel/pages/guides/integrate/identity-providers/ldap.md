> Release-pinned source for ZITADEL v4.17.1: [apps/docs/content/guides/integrate/identity-providers/ldap.mdx](https://zitadel.com/docs/guides/integrate/identity-providers/ldap)

This guides shows you how to connect an LDAP server as an identity provider in ZITADEL.

> **Note**
>
> In ZITADEL you can connect an Identity Provider (IdP) like an LDAP server to your instance and provide it as default to all organizations.
> Also, you can register the IdP to a specific organization only.
> If you allow so, your organizations members can do the same in self-service.

## How it works

When you use an LDAP provider in ZITADEL, this is the login process:

1. ZITADEL tries to connect to the LDAP server with or without TLS depending on the settings
2. If the connection fails, the next server in the list will be used to try again.
3. ZITADEL tries a bind with the BindDN and BindPassword to check if it's possible to proceed
4. ZITADEL does a SearchQuery to find the UserDN with the provided settings of base, filters and objectClasses
5. ZITADEL tries a bind with the provided loginname and password
6. LDAP attributes get mapped to ZITADEL attributes as provided by the settings

## ZITADEL Setup

### Go to the IdP Providers Overview

Go to the settings page of your instance or organization and choose "Identity Providers".

In the table you can see all the providers you have configured.
Also, you see all provider templates that are available.

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/zitadel_identity_provider_overview.png)

Select the Active Directory / LDAP Provider template.

### Create a new LDAP Provider

Fill in the following fields in the LDAP template.

> **Warning**
>
> We highly recommend to use LDAPS or StartTLS enable servers.
> Otherwise, your users passwords are sent in clear text through the wire.

**Name**: Name of the identity provider

**Servers**: List of servers in a format of "schema://host:port", as example "ldap\://localhost:389". If possible, replace "ldap" with "ldaps" with the corresponding port.

**BaseDN**: BaseDN which will be used with each request to the LDAP server

**BindDn** and **BindPassword**: BindDN and password used to connect to the LDAP for the SearchQuery, should be an admin or user with enough permissions to search for the users to login.

**Userbase**: Base used for the user, normally "dn" but can also be configured.

**User filters**: Attributes of the user which are "or"-joined in the query for the user, used value is the input of the loginname, for example if you try to login with <user@example.com> and filters "uid" and "email" the resulting SearchQuery contains "(|(uid=<user@example.com>)(email=<user@example.com>))"

**User Object Classes**: ObjectClasses which are "and"-joined in the SearchQuery and the user has to have in the LDAP.

**LDAP Attributes**: Mapping of LDAP attributes to ZITADEL attributes, the ID attributes is required, the rest depends on usage of the identity provider

**StartTLS**: If this setting is enabled after the initial connection ZITADEL tries to build a TLS connection. If your LDAP server doesn't support LDAPS, at least it should support StartTLS.

**Timeout**: If this setting is set all connection run with a set timeout, if it is 0s the default timeout of 60s is used.

Automatic creation: If this setting is enabled the user will be created automatically within ZITADEL, if it doesn't exist.
Automatic update: If this setting is enabled, the user will be updated within ZITADEL, if some user data is changed withing the provider. E.g if the lastname changes on the LDAP user, the information will be changed on the ZITADEL account on the next login.
Account creation allowed: This setting determines if account creation within ZITADEL is allowed or not.
Account linking allowed: This setting determines if account linking is allowed. When logging in with a LDAP user, a linkable ZITADEL account has to exist already.

> **Note**
>
> Either account creation or account linking have to be enabled. Otherwise, the provider can't be used.

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/zitadel_ldap_create_provider.png)

### Activate IdP

Once you created the provider, it is listed in the providers overview.
Activate it by selecting the tick with the tooltip *set as available*.

If you deactivate a provider, your users with links to it will not be able to authenticate anymore.
You can reactivate it and the logins will work again.

The provider can also be activated via API. As the identity providers are sub-resources of the login settings, this is done by linking the provider to the settings:

- [Activate Default Identity Provider](https://zitadel.com/docs/reference/api/admin/zitadel.admin.v1.AdminService.AddIDPToLoginPolicy)
- [Activate Organization Identity Provider](https://zitadel.com/docs/reference/api/management/zitadel.management.v1.ManagementService.AddIDPToLoginPolicy)

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/zitadel_activate_ldap.png)

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
new button which redirects you to ZITADELs LDAP login screen.

By default, ZITADEL shows what you define in the default settings.
If you overwrite the default settings for an organization, you need to send the organization scope in your auth request.

The organization scope looks like this: `urn:zitadel:iam:org:id:{id}`.
You can [read more about the reserved scopes](https://zitadel.com/docs/apis/openidoauth/scopes#reserved-scopes)
or [use the ZITADEL OIDC Playground](https://zitadel.com/playgrounds/oidc) to see what happens with the login when you send different scopes.

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/zitadel_login_ldap.png)

![](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/zitadel_login_ldap_input.png)
