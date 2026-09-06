> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/apis/actions/complement-token.mdx](https://zitadel.com/docs/apis/actions/complement-token)

This flow is executed during the creation of tokens and token introspection.

The flow is represented by the following Ids in the API: `2`

## Pre Userinfo creation (id\_token / userinfo / introspection endpoint)

This trigger is called before userinfo are set in the id\_token or userinfo and introspection endpoint response.

The trigger is represented by the following Ids in the API: `4`

### Parameters of Pre Userinfo creation

- `ctx`
  The first parameter contains the following fields:
  - `v1`
    - `claims` [*Claims*](https://zitadel.com/docs/apis/actions/objects#claims)
    - `getUser()` [*User*](https://zitadel.com/docs/apis/actions/objects#user)
    - `user`
      - `getMetadata()` [*metadataResult*](https://zitadel.com/docs/apis/actions/objects#metadata-result)
      - `grants` [*UserGrantList*](https://zitadel.com/docs/apis/actions/objects#user-grant-list)
    - `org`
      - `getMetadata()` [*metadataResult*](https://zitadel.com/docs/apis/actions/objects#metadata-result)
    - `application`
      - `getClientId()` *string*
        The client id of the application the token was requested for
    - `actor` [*token actor*](https://zitadel.com/docs/apis/actions/objects#token-actor)
      The party which obtained the token on behalf of the user, `null` unless the token was obtained through token exchange or impersonation
- `api`
  The second parameter contains the following fields:
  - `v1`
    - `userinfo`
      This function is deprecated, please use `api.v1.claims`
      - `setClaim(string, Any)`
        Sets any value if the key is not already present. If it's already present there is a message added to `urn:zitadel:iam:action:${action.name}:log`
        Note that keys with prefix `urn:zitadel:iam` will be ignored.
    - `claims`
      - `setClaim(string, Any)`
        Sets any value if the key is not already present. If it's already present there is a message added to `urn:zitadel:iam:action:${action.name}:log`
        Note that keys with prefix `urn:zitadel:iam` will be ignored.
    - `user`
      - `setMetadata(string, Any)`
        Key of the metadata and any value

## Pre access token creation

This trigger is called before the claims are set in the access token and the token type is `jwt`.

The trigger is represented by the following Ids in the API: `5`

### Parameters of Pre access token creation

- `ctx`
  The first parameter contains the following fields:
  - `v1`
    - `claims` [*Claims*](https://zitadel.com/docs/apis/actions/objects#claims)
    - `getUser()` [*User*](https://zitadel.com/docs/apis/actions/objects#user)
    - `user`
      - `getMetadata()` [*metadataResult*](https://zitadel.com/docs/apis/actions/objects#metadata-result)
      - `grants` [*UserGrantList*](https://zitadel.com/docs/apis/actions/objects#user-grant-list)
    - `org`
      - `getMetadata()` [*metadataResult*](https://zitadel.com/docs/apis/actions/objects#metadata-result)
    - `application`
      - `getClientId()` *string*
        The client id of the application the token was requested for
    - `actor` [*token actor*](https://zitadel.com/docs/apis/actions/objects#token-actor)
      The party which obtained the token on behalf of the user, `null` unless the token was obtained through token exchange or impersonation
- `api`
  The second parameter contains the following fields:
  - `v1`
    - `claims`
      - `setClaim(string, Any)`
        Sets any value if the key is not already present. If it's already present there is a message added to `urn:zitadel:iam:action:${action.name}:log`
        Note that keys with prefix `urn:zitadel:iam` will be ignored.
      - `appendLogIntoClaims(string)`
        Appends the entry into the claim `urn:zitadel:action:{action.name}:log` the value of the claim is an Array of *string*
    - `user`
      - `setMetadata(string, Any)`
        Key of the metadata and any value
