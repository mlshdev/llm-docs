> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/apis/actions/code-examples.mdx](https://zitadel.com/docs/apis/actions/code-examples)

Actions are a powerful tool to extend ZITADEL, and you might wonder what use cases actions can be used for.

This page provides a non-exhaustive list of possibilities which is provided by [examples](https://github.com/zitadel/actions/tree/main/examples). If a use case is missing, feel free to contribute an issue or pull request to the repository, thanks in advance 🤗.

## Customize OIDC response

Append claims returned on OIDC requests.

### Triggers

- Complement token
  - [Pre Userinfo creation](https://zitadel.com/docs/apis/actions/complement-token#pre-userinfo-creation-id-token-userinfo-introspection-endpoint)
  - [Pre access token creation](https://zitadel.com/docs/apis/actions/complement-token#pre-access-token-creation)

### Set a hardcoded claim

Extend the claims by a hardcoded value.

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/add_claim.js)

### Set dynamic claim from user metadata

Extend the claims by dynamically reading metadata from a user and sets the picture-claim if idpPicture-metadata value is present.

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/add_picture_claim_from_idp_metadata.js)

### Set dynamic claim from organization metadata

Extend the claims by dynamically reading metadata from an organization and sets the present metadata.

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/org_metadata_claim.js)

### Custom role mapping in claims

Some products require specific role mapping from ZITADEL, no worries we got you covered 😉

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/custom_roles.js)

### Custom role mapping including org metadata in claims

There's even a possibility to use the metadata of organizations the user is granted to

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/custom_roles_org_metadata.js)

## Customize SAML response

Append attributes returned on SAML requests.

### Triggers

- Complement SAMLResponse
  - [Pre SAMLResponse creation](https://zitadel.com/docs/apis/actions/customize-samlresponse#pre-saml-response-creation)

### Custom role mapping in attributes

Some products require specific role mapping from ZITADEL, no worries we got you covered 😉

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/set_custom_attribute.js)

### Set dynamic attribute from organization metadata

Extend the attributes by dynamically reading metadata from an organization and sets the present metadata.

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/org_metadata_attribute.js)

## Manipulate user

You can automate manual tasks such as assigning default roles during user creation.

### Set email always verified

Useful if you trust the provided information or don't want the users to verify their e-mail addresses.

#### Triggers

- Internal Authentication
  - [Pre Creation](https://zitadel.com/docs/apis/actions/internal-authentication#pre-creation)
- External Authentication
  - [Pre Creation](https://zitadel.com/docs/apis/actions/external-authentication#pre-creation)

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/verify_email.js)

### Assign roles to users

Allows you to assign default roles to a user after the user was created or federated.

#### Triggers

- Internal Authentication
  - [Post Creation](https://zitadel.com/docs/apis/actions/internal-authentication#post-creation)
- External Authentication
  - [Post Creation](https://zitadel.com/docs/apis/actions/external-authentication#post-creation)

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/add_user_grant.js)

### Add metadata to users

Adding metadata to users allows you to set default metadata on users.

#### Triggers

- Internal Authentication
  - [Pre Creation](https://zitadel.com/docs/apis/actions/internal-authentication#pre-creation)
  - [Post Authentication](https://zitadel.com/docs/apis/actions/internal-authentication#post-authentication)
- External Authentication
  - [Pre Creation](https://zitadel.com/docs/apis/actions/internal-authentication#pre-creation)
  - [Post Authentication](https://zitadel.com/docs/apis/actions/internal-authentication#post-authentication)

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/add_metadata.js)

## Use provided fields of identity providers

If you want to ensure that the data of a user are always up to date, you can automatically update user fields during authentication and save time of your customers and your team.

### Trigger

- External Authentication
  - [Post Authentication](https://zitadel.com/docs/apis/actions/external-authentication#post-authentication)

### Fields provided by Okta as OIDC IdP

If you use [Okta as an identity provider](https://zitadel.com/docs/guides/integrate/identity-providers/okta-oidc), you can improve the onboarding experience of new users by prefilling some basic information during authentication.

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/okta_identity_provider.js)

### Fields provided by Gitlab

If you use [Gitlab as an identity provider](https://zitadel.com/docs/guides/integrate/identity-providers/gitlab), you can improve the onboarding experience of new users by prefilling some basic information during authentication.

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/gitlab_identity_provider.js)

### Fields provided by GitHub

If you use [GitHub as an identity provider](https://zitadel.com/docs/guides/integrate/identity-providers/github), you can improve the onboarding experience of new users by prefilling some basic information during authentication.

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/github_identity_provider.js)

### Claims provided by a generic OIDC identity provider

If you use a [generic OIDC identity provider](https://zitadel.com/docs/guides/integrate/identity-providers/migrate#migrate-generic-oidc-provider), you can improve the onboarding experience of new users by prefilling some basic information during authentication.

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/set_idp_picture_metadata.js)

### Attributes provided by Okta as SAML IDP

If you use [Okta as an identity provider](https://zitadel.com/docs/guides/integrate/identity-providers/okta_saml#add-attribute-statements), you can improve the onboarding experience of new users by prefilling some basic information during authentication.

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/okta_saml_prefil_register_form.js)

### Attributes provided by Microsoft Entra as SAML IDP

If you use [Microsoft Entra as SAML identity provider](https://zitadel.com/docs/guides/integrate/identity-providers/azure-ad-saml), you can improve the onboarding experience of new users by prefilling some basic information during authentication.

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/entra_id_saml_prefil_register_form.js)

### Attributes provided by a generic SAML identity provider

If you use a [SAML identity provider like mocksaml](https://zitadel.com/docs/guides/integrate/identity-providers/mocksaml), you can improve the onboarding experience of new users by prefilling some basic information during authentication.

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/post_auth_saml.js)

## Context-aware execution

Based on the context, the execution path of an action can change. ZITADEL allows complex execution paths, of course. 😎

### Based on auth request information

Execution paths might change based on the application initiating the authentication.

#### Triggers

- Internal Authentication
  - [Pre Creation](https://zitadel.com/docs/apis/actions/internal-authentication#pre-creation)
  - [Post Creation](https://zitadel.com/docs/apis/actions/internal-authentication#post-creation)
  - [Post Authentication](https://zitadel.com/docs/apis/actions/internal-authentication#post-authentication)
- External Authentication
  - [Pre Creation](https://zitadel.com/docs/apis/actions/external-authentication#pre-creation)
  - [Post Creation](https://zitadel.com/docs/apis/actions/external-authentication#post-creation)
  - [Post Authentication](https://zitadel.com/docs/apis/actions/external-authentication#post-authentication)

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/execute_action_on_specific_app.js)

This example uses [zitadel's log module](https://zitadel.com/docs/apis/actions/modules#log)

### Check authentication error

Your action can also check for errors during the login process.

#### Triggers

- Internal Authentication
  - [Post Authentication](https://zitadel.com/docs/apis/actions/internal-authentication#post-authentication)
- External Authentication
  - [Post Authentication](https://zitadel.com/docs/apis/actions/external-authentication#post-authentication)

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/post_auth_log.js)

This example uses [zitadel's log module](https://zitadel.com/docs/apis/actions/modules#log)

### Throw an error

Allows you to limit the user interaction. The error thrown will be shown to the user if the action is not [allowed to fail](https://zitadel.com/docs/concepts/features/actions#how-it-works).

**Code example**

[Code example on GitHub](https://github.com/zitadel/actions/blob/main/examples/throw_error.js)
