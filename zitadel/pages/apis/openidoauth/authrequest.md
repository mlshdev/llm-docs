> Release-pinned source for ZITADEL v4.17.2: [apps/docs/content/apis/openidoauth/authrequest.mdx](https://zitadel.com/docs/apis/openidoauth/authrequest)

The OIDC Playground is for testing OpenID Authentication Requests, giving you more insight how OpenID Connect works and how you can customize ZITADEL behavior with different parameters.

An OpenID Connect (OIDC) [authentication request](https://openid.net/specs/openid-connect-core-1_0.html) is an OAuth 2.0 Authorization Request using additional parameters and scopes to request that the end-user be authenticated by ZITADEL.

[Go to the OIDC Playground ](https://zitadel.com/playgrounds/oidc)

## Why this OIDC playground?

Currently, ZITADEL requires human users to authenticate through the hosted login page.
Your application should initiate a login by issuing an authentication request and redirecting the user to the login page. You can customize the behavior of ZITADEL by providing additional parameters and scopes in the request.

This playground should help you to initially craft an authentication request and to explore the behavior of ZITADEL in more depth.

## Request parameters explained

Not all request parameters are available in the playground. Please refer to the full documentation of the [authorization endpoint](https://zitadel.com/docs/apis/openidoauth/endpoints#authorization-endpoint).

### Your Domain

The Custom Domain to your ZITADEL instance. Use the base-path, the playground will add the required path to the request.

### Required Parameters

Client ID is the resource id of an
application. It's the application where you want your users to login. You can
find the Client ID in the Console. When using project grants, use the
Client ID from the origin organization.

Redirect URI be one of the
pre-configured redirect uris for your application. You must add the redirect
uri for your application, else you will receive an error.

Response Type defines whether a code,
id\_token token or just id\_token will be returned. Most use cases will need
code.

More in the [documentation](https://zitadel.com/docs/apis/openidoauth/endpoints#required-request-parameters) about required Parameters.

### Authentication methods

Depending on the authentication and authorization flow of your application you might need to append some information to the authentication request.

Authentication method "(none) PKCE" is recommended
for most application types. The playground appends automatically a code challenge
for PKCE flows.

You need to append a "Code Challenge" by providing a random Code Verifier that is being hashed and encoded in the request to the token endpoint, please see our [guide](https://zitadel.com/docs/guides/integrate/login/oidc/oauth-recommended-flows#our-recommended-authorization-flows) for more details.

More in the [documentation](https://zitadel.com/docs/apis/openidoauth/authn-methods) about authentication methods.

### Additional Parameters

Prompt defines if and how the user
should be prompted on login. For example:

select\_account: user is prompted to select one of the
existing sessions or create a new one

create: present the register form

login: requires the user to re-authenticate

none: user must be authenticated without interaction, an
error is returned otherwise; use for silent-refresh

Login hint must be a valid logon name
of a user. You can skip the account picker by providing the Login hint.

There are many more additional parameters. Please refer to the [documentation](https://zitadel.com/docs/apis/openidoauth/endpoints#additional-parameters) about additional parameters.

## Standard Scopes

Used to request additional information from ZITADEL.
These scopes are defined in the OpenID Connect specification.
The `openid` scope is mandatory.

Not all scopes are available in the playground. Please refer to the full [documentation](https://zitadel.com/docs/apis/openidoauth/scopes) for the exhaustive list of available standard and reserved scopes.

## Reserved Scopes

You can request additional information that is specific to ZITADEL or customize the behavior of ZITADEL by including reserved scopes.
Please refer to the [documentation](https://zitadel.com/docs/apis/openidoauth/scopes#reserved-scopes) for a full list of available reserved scopes.

### Organization policies and branding

Enforce an organization's policies and branding as well as membership of the user by passing the scope `urn:zitadel:iam:org:id:{id}` with the required Organization ID.

Please refer to the full [guide on branding](https://zitadel.com/docs/guides/manage/customize/branding).

### Get user metadata

Pass the scope `urn:zitadel:iam:user:metadata` to request a user's metadata.
Please refer to the full [guide on user-metadata](https://zitadel.com/docs/guides/manage/customize/user-metadata) for further details.

### Access core APIs

Calling the [core API](https://zitadel.com/docs/apis/introduction) with the authenticated user, requires that the projectID of ZITADEL is included in the audience claim.

This can be achieved by adding the scope `urn:zitadel:iam:org:project:id:zitadel:aud` to your applications authorization request.

## How to use ZITADEL in your project

Please refer to our [guide](https://zitadel.com/docs/guides/integrate/login/oidc/login-users) on how to login users.

OpenID Connect certified libraries should allow you to customize the parameters and define scopes for the authorization request. You can also continue by using one of our [example applications](https://zitadel.com/docs/sdk-examples/introduction).
