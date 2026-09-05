> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/apis/openidoauth/endpoints.mdx](https://zitadel.com/docs/apis/openidoauth/endpoints)

## OpenID Connect 1.0 Discovery

The OpenID Connect Discovery Endpoint is located within the issuer domain.
This would give us `${CUSTOM_DOMAIN}/.well-known/openid-configuration`.

**Link to spec.** [OpenID Connect Discovery 1.0 incorporating errata set 1](https://openid.net/specs/openid-connect-discovery-1_0.html)

ZITADEL also serves instance-scoped association files for native passkeys (not part of OIDC discovery):

- `${CUSTOM_DOMAIN}/.well-known/apple-app-site-association`
- `${CUSTOM_DOMAIN}/.well-known/assetlinks.json`

See [Native app links for passkeys](https://zitadel.com/docs/guides/integrate/login/oidc/native-app-links).

## authorization\_endpoint

`${CUSTOM_DOMAIN}/oauth/v2/authorize`

> **Note**
>
> The authorization\_endpoint is located with the login page, due to the need of accessing the same cookie domain

The authorization\_endpoint is the starting point for all initial user authentications. The user agent (browser) will be redirected to this endpoint to
authenticate the user in exchange for an authorization\_code (authorization code flow) or tokens (implicit flow).

**Links to specs**

[Section 3.1 of OAuth2.0 (RFC6749)](https://datatracker.ietf.org/doc/html/rfc6749#section-3.1)

[Section 3.1.2 of OpenID Connect Core 1.0 incorporating errata set 1](https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint)

### Required request parameters

| Parameter      | Description                                                                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| client\_id     | The id of your client as shown in Console.                                                                                                                             |
| redirect\_uri  | Callback uri of the authorization request where the code or tokens will be sent to. Must match exactly one of the preregistered in Console.                            |
| response\_type | Determines whether a `code`, `id_token token` or just `id_token` will be returned. Most use cases will need `code`. See flow guide for more info.                      |
| scope          | `openid` is required, see [Scopes](https://zitadel.com/docs/apis/openidoauth/scopes) for more possible values. Scopes are space delimited, e.g. `openid email profile` |

> **Note**
>
> Following the [OIDC Core 1.0 specs](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) whenever an access\_token is issued,
> the id\_token will not contain any claims of the scopes `profile`, `email`, `phone` and `address`.
>
> Send the access\_token to the [userinfo\_endpoint](#userinfoendpoint) or [introspection\_endpoint](#introspectionendpoint) the retrieve these claims
> or set the `id_token_userinfo_assertion` Option ("User Info inside ID Token" in Management Console) to true.

Depending on your authorization method you will have to provide additional parameters or headers:

**client\_secret\_basic**

no additional parameters required

**client\_secret\_post**

no additional parameters required

**none (PKCE)**

| Parameter               | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| code\_challenge         | The SHA-256 value of the generated `code_verifier`    |
| code\_challenge\_method | Method used to generate the challenge, must be `S256` |

see PKCE guide for more information

**private\_key\_jwt**

no additional parameters required

### Additional parameters

| Parameter       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id\_token\_hint | Valid `id_token` (of an existing session) used to identity the subject. **SHOULD** be provided when using prompt `none`.                                                                                                                                                                                                                                                                                                                                          |
| login\_hint     | A valid logon name of a user. Will be used for username inputs or preselecting a user on `select_account`. Be sure to encode the hint correctly using url encoding (especially when using `+` or alike in the loginname)                                                                                                                                                                                                                                          |
| max\_age        | Seconds since the last active successful authentication of the user                                                                                                                                                                                                                                                                                                                                                                                               |
| nonce           | Random string value to associate the client session with the ID Token and for replay attacks mitigation. **MUST** be provided when using **implicit flow**.                                                                                                                                                                                                                                                                                                       |
| prompt          | If the Auth Server prompts the user for (re)authentication. no prompt: the user will have to choose a session if more than one session exists `none`: user must be authenticated without interaction, an error is returned otherwise `login`: user must reauthenticate / provide a user name `select_account`: user is prompted to select one of the existing sessions or create a new one `create`: the registration form will be displayed to the user directly |
| state           | Opaque value used to maintain state between the request and the callback. Used for Cross-Site Request Forgery (CSRF) mitigation as well, therefore highly **recommended**.                                                                                                                                                                                                                                                                                        |
| ui\_locales     | Spaces delimited list of preferred locales for the login UI, e.g. `de-CH de en`. If none is provided or matches the possible locales provided by the login UI, the `accept-language` header of the browser will be taken into account.                                                                                                                                                                                                                            |
| response\_mode  | The mechanism to be used for returning parameters to the application. See [response modes](#response-modes) for valid values. Invalid values are ignored.                                                                                                                                                                                                                                                                                                         |

#### Response modes

ZITADEL supports the following `response_mode` values. When no response mode is requested, the response mode is chosen based on the configured Response Type of the application.
As per [OpenID Connect Core 1.0, Section 3.1.2.1](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest):

> The use of this parameter is NOT RECOMMENDED when the Response Mode that would be requested is the default mode specified for the Response Type.

| Response Mode  | Description                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| query          | Encode the returned parameters in the URL query string. This is the default when the Response type is `code`, for example [Web applications](https://zitadel.com/docs/guides/manage/console/applications-overview#web).                                                                                                                                     |
| fragment       | Encode the returned parameters in the URL fragment. This is the default when the Response Type is `id_token`, for example implicit [User Agent apps](https://zitadel.com/docs/guides/manage/console/applications-overview#user-agent). This mode will not work for server-side applications, because fragments are never sent by the browser to the server. |
| form\_post[^1] | ZITADEL serves a small JavaScript to the browser which will send the returned parameters to the `redirect_uri` using HTTP POST. This mode only works for server-side applications and user agents which support / allow JavaScript.                                                                                                                         |

[^1]: Implements [OAuth 2.0 Form Post Response Mode](https://openid.net/specs/oauth-v2-form-post-response-mode-1_0.html)

### Successful code response

When your `response_type` was `code` and no error occurred, the following response will be returned:

| Property | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| code     | Opaque string which will be necessary to request tokens on the token endpoint |
| state    | Unmodified `state` parameter from the request                                 |

### Successful implicit response

When your `response_type` was either `id_token` or `id_token token` and no error occurred, the following response will be returned:

| Property      | Description                                                                           |
| ------------- | ------------------------------------------------------------------------------------- |
| access\_token | Only returned if `response_type` included `token`                                     |
| expires\_in   | Number of second until the expiration of the `access_token`                           |
| id\_token     | An `id_token` of the authorized user                                                  |
| token\_type   | Type of the `access_token`. Value is always `Bearer`                                  |
| scope         | Scopes of the `access_token`. These might differ from the provided `scope` parameter. |
| state         | Unmodified `state` parameter from the request                                         |

### Error response

Regardless of the authorization flow chosen, if an error occurs the following response will be returned to the redirect\_uri.

> **Note**
>
> If the redirect\_uri is not provided, was not registered or anything other prevents the auth server form returning the response to the client,
> the error will be display directly to the user on the auth server

| Property           | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| error              | An OAuth / OIDC error\_type                                          |
| error\_description | Description of the error type or additional information of the error |
| state              | Unmodified `state` parameter from the request                        |

#### Possible errors

| error\_type                 | Possible reason                                                                                                                                                                                                                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| invalid\_request            | The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed.                                                                                                                                                  |
| invalid\_scope              | The requested scope is invalid. Typically the required `openid` value is missing.                                                                                                                                                                                                                  |
| unauthorized\_client        | The client is not authorized to request an access\_token using this method. Check in Management Console that the requested `response_type` is allowed in your application settings.                                                                                                                |
| unsupported\_response\_type | The authorization server does not support the requested response\_type.                                                                                                                                                                                                                            |
| server\_error               | The authorization server encountered an unexpected condition that prevented it from fulfilling the request.                                                                                                                                                                                        |
| interaction\_required       | The authorization server requires end-user interaction of some form to proceed. This error MAY be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for end-user interaction. |
| login\_required             | The authorization server requires end-user authentication. This error MAY be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for end-user authentication.                   |

## token\_endpoint

`${CUSTOM_DOMAIN}/oauth/v2/token`

The token\_endpoint will as the name suggests return various tokens (access, id and refresh) depending on the used `grant_type`.
When using [`authorization_code`](#authorization-code-grant-code-exchange) flow call this endpoint after receiving the code from the authorization\_endpoint.
When using [`refresh_token`](#authorization-code-grant-code-exchange) or [`urn:ietf:params:oauth:grant-type:jwt-bearer` (JWT Profile)](#jwt-profile-grant) you will call this endpoint directly.

### Authorization code grant (Code Exchange)

As mention above, when using `authorization_code` grant, this endpoint will be your second request for authorizing a user with its user agent (browser).

#### Required request parameters

| Parameter     | Description                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| code          | Code that was issued from the authorization request.                                                           |
| grant\_type   | Must be `authorization_code`                                                                                   |
| redirect\_uri | Callback uri where the code was be sent to. Must match exactly the redirect\_uri of the authorization request. |

Depending on your authorization method you will have to provide additional parameters or headers:

**client\_secret\_basic**

Send your `client_id` and `client_secret` as Basic Auth Header. Check [Client Secret Basic Auth Method](https://zitadel.com/docs/apis/openidoauth/authn-methods#client-secret-basic) on how to build it correctly.

**client\_secret\_post**

Send your `client_id` and `client_secret` as parameters in the body:

| Parameter      | Description                       |
| -------------- | --------------------------------- |
| client\_id     | client\_id of the application     |
| client\_secret | client\_secret of the application |

**none (PKCE)**

Send your `client_id` and `code_verifier` for us to recompute the `code_challenge` of the authorization request.

| Parameter      | Description                                                    |
| -------------- | -------------------------------------------------------------- |
| client\_id     | client\_id of the application                                  |
| code\_verifier | code\_verifier previously used to generate the code\_challenge |

**private\_key\_jwt**

Send a client assertion as JWT for us to validate the signature against the registered public key.

| Parameter               | Description                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| client\_assertion       | JWT built and signed according to [Using JWTs for Client Authentication](https://zitadel.com/docs/apis/openidoauth/authn-methods#jwt-with-private-key) |
| client\_assertion\_type | Must be `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`                                                                                       |

#### Successful code response

| Property       | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| access\_token  | An `access_token` as JWT or opaque token                                              |
| expires\_in    | Number of second until the expiration of the `access_token`                           |
| id\_token      | An `id_token` of the authorized user                                                  |
| scope          | Scopes of the `access_token`. These might differ from the provided `scope` parameter. |
| refresh\_token | An opaque token. Only returned if `offline_access` scope was requested                |
| token\_type    | Type of the `access_token`. Value is always `Bearer`                                  |

### JWT profile grant

#### Required request parameters

| Parameter   | Description                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| grant\_type | Must be `urn:ietf:params:oauth:grant-type:jwt-bearer`                                                                                                              |
| assertion   | JWT built and signed according to [Using JWTs for Authorization Grants](https://zitadel.com/docs/apis/openidoauth/grant-types#using-jw-ts-as-authorization-grants) |
| scope       | [Scopes](https://zitadel.com/docs/apis/openidoauth/scopes) you would like to request from ZITADEL. Scopes are space delimited, e.g. `openid email profile`         |

```bash
curl --request POST \
  --url ${CUSTOM_DOMAIN}/oauth/v2/token \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer \
  --data assertion=eyJhbGciOiJSUzI1Ni...
```

#### Successful JWT profile response

| Property      | Description                                                                           |
| ------------- | ------------------------------------------------------------------------------------- |
| access\_token | An `access_token` as JWT or opaque token                                              |
| expires\_in   | Number of second until the expiration of the `access_token`                           |
| id\_token     | An `id_token` of the authorized service account                                       |
| scope         | Scopes of the `access_token`. These might differ from the provided `scope` parameter. |
| token\_type   | Type of the `access_token`. Value is always `Bearer`                                  |

### Refresh token grant

To request a new `access_token` without user interaction, you can use the `refresh_token` grant.
See [offline\_access Scope](https://zitadel.com/docs/apis/openidoauth/scopes#standard-scopes) for how to request a `refresh_token` in the authorization request.

#### Required request parameters

| Parameter      | Description                                                                                                                                                                                                                                                                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| grant\_type    | Must be `refresh_token`                                                                                                                                                                                                                                                                                                                                    |
| refresh\_token | The refresh\_token previously issued in the last authorization\_code or refresh\_token request.                                                                                                                                                                                                                                                            |
| scope          | [Scopes](https://zitadel.com/docs/apis/openidoauth/scopes) you would like to request from ZITADEL for the new access\_token. Must be a subset of the scope originally requested by the corresponding auth request. When omitted, the scopes requested by the original auth request will be reused. Scopes are space delimited, e.g. `openid email profile` |

Depending on your authorization method you will have to provide additional parameters or headers:

**client\_secret\_basic**

Send your `client_id` and `client_secret` as Basic Auth Header. Check [Client Secret Basic Auth Method](https://zitadel.com/docs/apis/openidoauth/authn-methods#client-secret-basic) on how to build it correctly.

**client\_secret\_post**

Send your `client_id` and `client_secret` as parameters in the body:

| Parameter      | Description                       |
| -------------- | --------------------------------- |
| client\_id     | client\_id of the application     |
| client\_secret | client\_secret of the application |

**none (PKCE)**

Send your `client_id` as parameter in the body. No authentication is required.

**private\_key\_jwt**

Send a `client_assertion` as JWT for us to validate the signature against the registered public key.

| Parameter               | Description                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| client\_assertion       | JWT built and signed according to [Using JWTs for Client Authentication](https://zitadel.com/docs/apis/openidoauth/authn-methods#jwt-with-private-key) |
| client\_assertion\_type | Must be `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`                                                                                       |

#### Successful refresh token response

| Property       | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| access\_token  | An `access_token` as JWT or opaque token                                              |
| expires\_in    | Number of second until the expiration of the `access_token`                           |
| id\_token      | An `id_token` of the authorized user                                                  |
| scope          | Scopes of the `access_token`. These might differ from the provided `scope` parameter. |
| refresh\_token | An new opaque refresh\_token.                                                         |
| token\_type    | Type of the `access_token`. Value is always `Bearer`                                  |

### Client credentials grant

#### Required request parameters

| Parameter   | Description                                                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| grant\_type | Must be `client_credentials`                                                                                                                         |
| scope       | [Scopes](https://zitadel.com/docs/apis/openidoauth/scopes) you would like to request from ZITADEL. Scopes are space delimited, e.g. `openid profile` |

Additionally, you need to authenticate your client by either sending `client_id` and `client_secret` as Basic Auth Header.
Check [Client Secret Basic Auth Method](https://zitadel.com/docs/apis/openidoauth/authn-methods#client-secret-basic) on how to build it correctly.

```bash
curl --request POST \
  --url ${CUSTOM_DOMAIN}/oauth/v2/token \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Authorization: Basic ${BASIC_AUTH}' \
  --data grant_type=client_credentials \
  --data scope=openid profile
```

Or you can also send your `client_id` and `client_secret` as parameters in the body:

| Parameter      | Description                       |
| -------------- | --------------------------------- |
| client\_id     | client\_id of the application     |
| client\_secret | client\_secret of the application |

```bash
curl --request POST \
  --url ${CUSTOM_DOMAIN}/oauth/v2/token \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data grant_type=client_credentials \
  --data client_id=${CLIENT_ID} \
  --data client_secret=${CLIENT_SECRET} \
  --data scope=openid profile
```

#### Successful client credentials response

| Property      | Description                                                                           |
| ------------- | ------------------------------------------------------------------------------------- |
| access\_token | An `access_token` as JWT or opaque token                                              |
| expires\_in   | Number of second until the expiration of the `access_token`                           |
| scope         | Scopes of the `access_token`. These might differ from the provided `scope` parameter. |
| token\_type   | Type of the `access_token`. Value is always `Bearer`                                  |

### Token Exchange grant

The Token Exchange grant implements [RFC 8693, OAuth 2.0 Token Exchange](https://www.rfc-editor.org/rfc/rfc8693) and can be used to exchange tokens to a different scope, audience or subject. Changing the subject of an authenticated token is called impersonation or delegation. ZITADEL also provides a [token exchange guide](https://zitadel.com/docs/guides/integrate/token-exchange) with more details on using the Token Exchange Grant.

#### Request parameters

| Parameter              | Description                                                                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| grant\_type            | Must be `urn:ietf:params:oauth:grant-type:token-exchange`                                                                                                                           |
| subject\_token         | A token that represents the identity of the party on behalf of whom the request is being made.                                                                                      |
| subject\_token\_type   | An identifier that indicates the type of the token in the subject\_token parameter.                                                                                                 |
| actor\_token           | Optional. A token that represents the identity of the acting party. In ZITADEL this the impersonator.                                                                               |
| actor\_token\_type     | An identifier that indicates the type of the token in the actor\_token parameter. Required when actor\_token is provided                                                            |
| requested\_token\_type | Optional. An identifier that indicates the type of the token requested. Defaults to access token if not provided.                                                                   |
| scope                  | [Scopes](https://zitadel.com/docs/apis/openidoauth/scopes) you would like to request from ZITADEL for the requested token. Scopes are space delimited, e.g. `openid email profile`. |
| audience               | Optional. Must be a subset of the combined audiences from both subject and actor tokens.                                                                                            |
| resource               | Currently not supported                                                                                                                                                             |

Depending on your authorization method you will have to provide additional parameters or headers:

**client\_secret\_basic**

Send your `client_id` and `client_secret` as Basic Auth Header. Check [Client Secret Basic Auth Method](https://zitadel.com/docs/apis/openidoauth/authn-methods#client-secret-basic) on how to build it correctly.

**client\_secret\_post**

Send your `client_id` and `client_secret` as parameters in the body:

| Parameter      | Description                       |
| -------------- | --------------------------------- |
| client\_id     | client\_id of the application     |
| client\_secret | client\_secret of the application |

**none (PKCE)**

Send your `client_id` as parameter in the body. No authentication is required.

**private\_key\_jwt**

Send a `client_assertion` as JWT for us to validate the signature against the registered public key.

| Parameter               | Description                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| client\_assertion       | JWT built and signed according to [Using JWTs for Client Authentication](https://zitadel.com/docs/apis/openidoauth/authn-methods#jwt-with-private-key) |
| client\_assertion\_type | Must be `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`                                                                                       |

#### Successful token exchange response

| Property            | Description                                                                          |
| ------------------- | ------------------------------------------------------------------------------------ |
| access\_token       | An `access_token` as opaque token or JWT for the subject user                        |
| token\_type         | Type of the `access_token`. Value can be `Bearer` or `N_A`                           |
| issued\_token\_type | [Token type](#token-types) of the returned token, matches the `requested_token_type` |
| refresh\_token      | A refresh token if the `offline_access` scope was requested                          |
| id\_token           | An ID Token of the subject user, only with `openid` scope                            |
| expires\_in         | Number of second until the expiration of the `access_token`                          |
| scope               | Scopes of the `access_token`. These might differ from the provided `scope` parameter |

#### Token types

The following table provides a matrix of supported token type parameter and responses for Token Exchange.

| Identifier                                       | subject\_token                                               | actor\_token  | requested\_token\_type |
| ------------------------------------------------ | ------------------------------------------------------------ | ------------- | ---------------------- |
| `urn:ietf:params:oauth:token-type:access_token`  | JWT or Opaque                                                | JWT or Opaque | Opaque only            |
| `urn:ietf:params:oauth:token-type:refresh_token` | Not allowed                                                  | Not allowed   | Not allowed            |
| `urn:ietf:params:oauth:token-type:id_token`      | Allowed                                                      | Allowed       | Allowed                |
| `urn:ietf:params:oauth:token-type:jwt`           | JWT signed by client, only in combination with `actor_token` | Not allowed   | Access Token as JWT    |
| `urn:zitadel:params:oauth:token-type:user_id`    | user ID as string, only in combination with `actor_token`    | Not allowed   | Not allowed            |

### Error response

| error\_type              | Possible reason                                                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| invalid\_request         | The request is missing a required parameter, includes an unsupported parameter value (other than grant type), repeats a parameter, includes multiple credentials, utilizes more than one mechanism for authenticating the client, or is otherwise malformed. |
| invalid\_scope           | The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner.                                                                                                                                                      |
| unauthorized\_client     | The authenticated client is not authorized to use this authorization grant type.                                                                                                                                                                             |
| unsupported\_grant\_type | The authorization grant type is not supported by the authorization server.                                                                                                                                                                                   |
| server\_error            | The authorization server encountered an unexpected condition that prevented it from fulfilling the request.                                                                                                                                                  |
| invalid\_grant           | The provided authorization grant (e.g., authorization code, resource owner credentials) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.                |
| invalid\_client          | Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method).                                                                                                                                |

## introspection\_endpoint

`${CUSTOM_DOMAIN}/oauth/v2/introspect`

This endpoint enables clients to validate an `acccess_token`, either opaque or JWT. Unlike client side JWT validation,
this endpoint will check if the token is not revoked (by client or logout).

| Parameter | Description     |
| --------- | --------------- |
| token     | An access token |

Depending on your authorization method you will have to provide additional parameters or headers:

**client\_secret\_basic**

Send your `client_id` and `client_secret` as Basic Auth Header. Check [Client Secret Basic Auth Method](https://zitadel.com/docs/apis/openidoauth/authn-methods#client-secret-basic) on how to build it correctly.

```bash
curl --request POST \
  --url ${CUSTOM_DOMAIN}/oauth/v2/introspect \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --header 'Authorization: Basic {your_basic_auth_header}' \
  --data token=VjVxyCZmRmWYqd3_F5db9Pb9mHR5fqzhn...
```

**private\_key\_jwt**

Send a `client_assertion` as JWT for us to validate the signature against the registered public key.

| Parameter               | Description                                                                                                                                           |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| client\_assertion       | JWT built and signed according to [Using JWTs for Client Authentication](https://zitadel.com/docs/apis/openidoauth/authn-methods#client-secret-basic) |
| client\_assertion\_type | must be `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`                                                                                      |

```bash
curl --request POST \
  --url ${CUSTOM_DOMAIN}/oauth/v2/introspect \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer \
  --data client_assertion=eyJhbGciOiJSUzI1Ni... \
  --data token=VjVxyCZmRmWYqd3_F5db9Pb9mHR5fqzhn...
```

### Successful introspection response

Upon successful authorization of the client a response with the boolean `active` is returned, indicating if the provided token
is active and the requesting client is part of the token audience.

If `active` is **true**, further information will be provided:

| Property    | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| aud         | The audience of the token                                             |
| client\_id  | The client\_id of the application the token was issued to             |
| exp         | Time the token expires (as unix time)                                 |
| iat         | Time of the token was issued at (as unix time)                        |
| iss         | Issuer of the token                                                   |
| jti         | Unique id of the token                                                |
| nbf         | Time the token must not be used before (as unix time)                 |
| scope       | Space delimited list of scopes granted to the token                   |
| token\_type | Type of the inspected token. Value is always `Bearer`                 |
| username    | ZITADEL's login name of the user. Consist of `username@primarydomain` |

Additionally and depending on the granted scopes, information about the authorized user is provided.
Check the [Claims](https://zitadel.com/docs/apis/openidoauth/claims) page if a specific claims might be returned and for detailed description.

### Error response

If the authorization fails, an HTTP 401 with `invalid_client` will be returned.

## userinfo\_endpoint

`${CUSTOM_DOMAIN}/oidc/v1/userinfo`

This endpoint will return information about the authorized user.

Send the `access_token` of the **user** (not the client) as Bearer Token in the `authorization` header:

```bash
curl --request GET \
  --url ${CUSTOM_DOMAIN}/oidc/v1/userinfo
  --header 'Authorization: Bearer dsfdsjk29fm2as...'
```

### Successful userinfo response

If the `access_token` is valid, the information about the user depending on the granted scopes is returned.
Check the [Claims](https://zitadel.com/docs/apis/openidoauth/claims) page if a specific claims might be returned and for detailed description.

### Error response

If the token is invalid or expired, an HTTP 401 will be returned.

## revocation\_endpoint

`${CUSTOM_DOMAIN}/oauth/v2/revoke`

This endpoint enables clients to revoke an `access_token` or `refresh_token` they have been granted.

> **Note**
>
> If you revoke an `access_token` only the specific token will be revoked. When revoking a `refresh_token`,
> the corresponding `access_token` will be revoked as well.

| Parameter | Description                      |
| --------- | -------------------------------- |
| token     | An access token or refresh token |

Depending on your authorization method you will have to provide additional parameters or headers:

**client\_secret\_basic**

Send your `client_id` and `client_secret` as Basic Auth Header. Check [Client Secret Basic Auth Method](https://zitadel.com/docs/apis/openidoauth/authn-methods#client-secret-basic) on how to construct a request correctly.

**client\_secret\_post**

Send your `client_id` and `client_secret` as parameters in the body:

| Parameter      | Description                       |
| -------------- | --------------------------------- |
| client\_id     | client\_id of the application     |
| client\_secret | client\_secret of the application |

**none (PKCE)**

Send your `client_id` as parameters in the body:

| Parameter  | Description                   |
| ---------- | ----------------------------- |
| client\_id | client\_id of the application |

**private\_key\_jwt**

Send a `client_assertion` as JWT for ZITADEL to verify the signature against the registered public key.

| Parameter               | Description                                                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| client\_assertion       | JWT created and signed according to [Using JWTs for Client Authentication](https://zitadel.com/docs/apis/openidoauth/authn-methods#client-secret-basic) |
| client\_assertion\_type | must be `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`                                                                                        |

```bash
curl --request POST \
  --url ${CUSTOM_DOMAIN}/oauth/v2/revoke \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer \
  --data client_assertion=eyJhbGciOiJSUzI1Ni... \
  --data token=VjVxyCZmRmWYqd3_F5db9Pb9mHR5fqzhn...
```

## end\_session\_endpoint

`${CUSTOM_DOMAIN}/oidc/v1/end_session`

The endpoint has to be opened in the user agent (browser) to terminate the user sessions.

No parameters are needed apart from the user agent cookie, but you can provide the following to customize the behavior:

| Parameter                   | Description                                                                                                                                                                                                                            |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id\_token\_hint             | the id\_token that was previously issued to the client                                                                                                                                                                                 |
| client\_id                  | client\_id of the application                                                                                                                                                                                                          |
| post\_logout\_redirect\_uri | Callback uri of the logout where the user (agent) will be redirected to. Must match exactly one of the preregistered in Console.                                                                                                       |
| state                       | Opaque value used to maintain state between the request and the callback                                                                                                                                                               |
| logout\_hint                | A valid login name of a user. Will be used to select the user to logout. Only supported when using the login UI V2.                                                                                                                    |
| ui\_locales                 | Spaces delimited list of preferred locales for the login UI, e.g. `de-CH de en`. If none is provided or matches the possible locales provided by the login UI, the `accept-language` header of the browser will be taken into account. |

The `post_logout_redirect_uri` will be checked against the previously registered uris of the client provided by the `azp` claim of the `id_token_hint` or the `client_id` parameter.
If both parameters are provided, they must be equal.

If neither an `id_token_hint` nor a `client_id` parameter is provided, the `post_logout_redirect_uri` will be ignored.

## jwks\_uri

`${CUSTOM_DOMAIN}/oauth/v2/keys`

The endpoint returns a JSON Web Key Set (JWKS) containing the public keys that can be used to locally validate JWTs you received from ZITADEL.
The alternative would be to validate tokens with the [introspection endpoint](#introspectionendpoint).

### Key rotation

Keys are automatically rotated on a regular basis or on demand, meaning keys can change in irregular intervals.
ZITADEL ensures that a proper `kid` is set with each key.

> **Keys rotate without prior notice**
>
> Be aware that these keys can be rotated without any prior notice.

### Caching

You can optimize performance of your clients by caching the response from the keys endpoint.
We recommend to regularly update the cached response, since the [keys can be rotated without prior notice](#key-rotation).
You could also combine caching with a risk-based on-demand refresh when a critical operation is executed.

Without caching you will call this endpoint on each request.
This might result in being rate limited for a large number of requests that come from the same backend.

## registration\_endpoint

`${CUSTOM_DOMAIN}/oauth/v2/register`

The registration\_endpoint implements [OAuth 2.0 Dynamic Client Registration (RFC 7591)](https://datatracker.ietf.org/doc/html/rfc7591).
It lets clients register themselves as OIDC applications at runtime, which is required for example by [Model Context Protocol (MCP)](https://zitadel.com/docs/guides/integrate/dynamic-client-registration) clients.

> **Warning**
>
> The endpoint is disabled by default. It is only served and advertised as `registration_endpoint` in the [discovery document](#openid-connect-10-discovery)
> when it is [enabled](https://zitadel.com/docs/guides/integrate/dynamic-client-registration#enable-dynamic-client-registration) in the instance's security settings.
> By default it additionally requires an access token whose user holds the `project.app.register_dynamic` permission.

A successful registration returns `HTTP 201` with the `client_id` (and, for confidential clients, the `client_secret`) that can immediately be used for the authorization code flow.

```bash
curl --request POST \
  --url ${CUSTOM_DOMAIN}/oauth/v2/register \
  --header 'Content-Type: application/json' \
  --data '{
    "client_name": "My MCP Client",
    "redirect_uris": ["https://client.example.com/callback"],
    "grant_types": ["authorization_code", "refresh_token"],
    "response_types": ["code"],
    "token_endpoint_auth_method": "none"
  }'
```

A successful registration also returns a `registration_access_token` and a `registration_client_uri`
(`${CUSTOM_DOMAIN}/oauth/v2/register/{client_id}`). They let the client read, update and delete its own registration
through [OAuth 2.0 Dynamic Client Registration Management (RFC 7592)](https://datatracker.ietf.org/doc/html/rfc7592),
served whenever dynamic client registration is enabled in the instance's security settings.

See the [Dynamic Client Registration guide](https://zitadel.com/docs/guides/integrate/dynamic-client-registration) for the supported metadata, the available registration modes, managing a registration and the current limitations.

## OAuth 2.0 metadata

**ZITADEL** does not yet provide a OAuth 2.0 Metadata endpoint but instead provides a [OpenID Connect Discovery Endpoint](https://openid.net/specs/openid-connect-discovery-1_0.html).
