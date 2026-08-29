> Release-pinned source for ZITADEL v4.17.1: [apps/docs/content/guides/integrate/onboarding/end-users.mdx](https://zitadel.com/docs/guides/integrate/onboarding/end-users)

End Users have three different possibilities on how to login with ZITADEL.

1. Local Account with Username, Password, MFA, Passkey, etc
2. Social Login like Google, Apple, Github, etc
3. External Identity Provider hosted/managed by Organization like Entra ID, LDAP, Okta etc

You can either use the hosted login of ZITADEL to let users register themselves, or you can build your own UI and use the existing APIs.

## Manually add/invite users

To create a new user, go to Users and click on **New**. Enter the required contact details and save by clicking “Create”.

> **Note**
>
> If you started with Zitadel before version 3, you might have the "Human User \[deprecated]" UI.
> In this case please enable the Feature Flag "Use V2 Api in Management Console for User creation" in the Default Settings.

**Human User**

![Invite Human](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/console/invitehuman.png)

When creating a new user you have different options.
First add the email, and select if the email address should be added automatically as "verified".

In the last section you can choose the authentication options:

- **Setup authentication later for this user**: This flow might be useful if an employee starts at a later point but you already want to prepare the account. The user will not have an authentication method, before they will be able to login, they need to setup a method.
- **Send an invitation E-Mail for authentication setup and E-Mail verification**: The user will receive an email and be able to setup an authentication method (e.g Password, Passkey, External SSO).
  - When using the [Zitadel Login V1](https://zitadel.com/docs/guides/integrate/login/hosted-login) the user will be prompted to setup a password
  - When using the [Zitadel Login V2](https://zitadel.com/docs/guides/integrate/login/hosted-login#hosted-login-version-2) the user has the option to choose the authentication method (password, passkey, identity provider), based on the settings of the organization

    ![Invite Human - Setup authentication method](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/console/setupauthmethod.png)
- **Set an initial password for the user**: The user will receive an email and be able to setup an authentication method (e.g Password, Passkey, External SSO)

**Human User \[deprecated]**

![Add Human](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/console/addhuman.png)

After a user is created, by default, an initialization mail with a code is sent to the registered email. This code then has to be verified on first login.
If you want to omit this mail, you can check the **email verified** and **set initial password** toggle.
If no password is set initially, the initialization mail prompting the user to set his password is sent.

**Service Account**

![Add Service Account](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/console/addmachine.png)

You can prompt the user to add a second factor method too by checking the **Force MFA** toggle in [Login behaviour settings](https://zitadel.com/docs/guides/manage/console/default-settings#login-behavior-and-security).

When logged in, a user can then manage the profile in the management console, adding a profile picture, external IDPs and Passkeys.

![Profile Self Manage](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/console/myprofile.png)

## Automated / Self-registration possibilities

If you want to start automating the process of onboarding your users and let them do self-registration the following sections give you some guidance.

### Built-in register form

#### Prompt registration form

When users first access your application, they'll typically need to either log in or register.
By default, redirecting from your application displays the login page.

OpenID Connect (OIDC) allows you to control the initial screen by sending a [prompt](https://zitadel.com/docs/apis/openidoauth/endpoints#additional-parameters) parameter in the authorization request.
With the `prompt=create`, the registration form/options will directly be shown to the user.
You can test the impact of the different prompts on your login UI in our [OIDC Playground](https://zitadel.com/playgrounds/oidc).

Per default a user will be registered to the default organization.
By sending the scope below in your authorization request you can choose the organization to which the user will be added.

```
urn:zitadel:iam:org:id:{id}
```

Unfortunately, SAML doesn't offer the same level of control over the initial screen.
You won't be able to directly influence which page (login or registration) is shown through the SAML flow.

#### Choose Registration Option

If an organization allows local user registration as well as registration with a social or enterprise login, the user can choose an option to register.

As soon as users click the "register" button, they will be presented with a screen showing the different registration options.

![Register Options](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/solution-scenarios/register-options.png)

After that, the user can select either local user registration or an external provider.
By pressing the button of an external provider, the user will directly be redirected to the provider for consent.

> **Note**
>
> The options are dependent on the settings of the organization.
> If only one option is possible, the option will directly be selected and shown.

#### Local User Registration

To allow users to register themselves, you have to enable the "register allowed" in the login behavior settings.
You will now see the register button on the login screen.

![Register End User](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/solution-scenarios/register-end-user.png)

If nothing else is specified, a user will be registered to the default organization.

![Default Organization](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/solution-scenarios/default-organization.png)

You can specify another organization, by sending the organization scope in the authorization requests.
By sending the scope below the settings of the specified organization will be triggered and only users of the said organization will be able to authenticate.
The users will be registered to the given organization.

```
urn:zitadel:iam:org:id:{id}
```

If the user chooses to register a local account, the register form will be shown.
All the mandatory fields like first name, last name, e-mail and password have to be filled.
You can only setup authentication with the built-in form.

![Register local user](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/solution-scenarios/register-local-user.png)

#### Registration with Social Login

To allow your users to register with social logins you have to set up the external identity providers.
If you only need the social logins for your end users and you want to have them all in the organization, we recommend using the default organization for those users.
In that case you can set up the identity providers on the default organization.
If you want to have the social logins on different organizations you can configure the default on the instance, and enable it on the needed organizations.

Please follow the setup guides for the needed providers: [Let Users Login with Preferred Identity Provider in ZITADEL](https://zitadel.com/docs/guides/integrate/identity-providers/introduction)

The configured providers will be shown on the first login screen or when the users click on the registration button, they will be able to choose between local account or the social login.

![Register End User](https://raw.githubusercontent.com/zitadel/zitadel/a9311b8c702531832575351a663e98a2242778e5/apps/docs/public/img/guides/solution-scenarios/register-end-user.png)

#### Registration with Organization External Identity Provider

If your business customer already have an identity provider, and you want to allow SSO for them, you can set up their providers directly for their organization.
Set up the needed provider such as Entra ID or OKTA.

Please follow the setup guides for the needed providers: [Let Users Login with Preferred Identity Provider in ZITADEL](https://zitadel.com/docs/guides/integrate/identity-providers/introduction)

Per default the login ui of the default organization is shown.
To allow users of a specific organization to register with their IDP (e.g. Entra ID) you have two options.

1. Identify organization with organization scope

By sending the organization scope in the authorization request to ZITADEL the specified organization will directly be triggered.
The configured settings of that organization such as IDPs will directly be shown.
If only one IDP is configured and local accounts are disabled the user will directly be redirected to the external provider.

```
urn:zitadel:iam:org:id:{id}
```

2. Domain Discovery

When domain discovery is enabled, ZITADEL is able to identify the entered domain of a user and match it to a specific organization.
If you want to know more about domain discovery and how to set it up please read the following guide:
[Domain Discovery in ZITADEL](https://zitadel.com/docs/guides/solution-scenarios/domain-discovery)

### Build your own registration form

ZITADEL allows you to build your own registration form and login UI.
The registration process highly depends on your needs.

We do have a guide series on how to build your own login ui, which also includes the registration of different authentication methods, such as:

- Password authentication
- Multi-Factor
- Passkeys
- External Login Providers

You can find all the guides here: [Build your own login UI](https://zitadel.com/docs/guides/integrate/login-ui)

#### Custom fields

The [create user request](https://zitadel.com/docs/reference/api/user/zitadel.user.v2.UserService.AddHumanUser) also allows you to add [metadata](https://zitadel.com/docs/guides/manage/customize/user-metadata) (key, value) to the user.
This gives you the possibility to collect additional data from your users during the registration process and store it directly to the user in ZITADEL.
Those metadata can also directly be included in the [token](https://zitadel.com/docs/guides/manage/customize/user-metadata#use-tokens-to-get-user-metadata) of the user.
We recommend storing business relevant data in the database of your application, and only authentication and authorization relevant data in ZITADEL to follow the separation of concern pattern.

#### Registration with Organization External Identity Provider

If you want to know more about the multi-tenancy possibilities of ZITADEL, read the following blog post:
[Multi-Tenancy and Delegated Access Management with Organizations](https://zitadel.com/blog/multi-tenancy-with-organizations)
