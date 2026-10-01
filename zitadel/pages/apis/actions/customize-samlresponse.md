> Pinned source for ZITADEL v4.19.4: [apps/docs/content/apis/actions/customize-samlresponse.mdx](https://github.com/zitadel/zitadel/blob/101343ad87aef7b0eea7c3522d519308e0ea9547/apps/docs/content/apis/actions/customize-samlresponse.mdx)
> Canonical documentation: https://zitadel.com/docs/apis/actions/customize-samlresponse

This flow is executed before the return of the SAML Response.

The flow is represented by the following Ids in the API: `4`

## Pre SAMLResponse creation

This trigger is called before attributes are set in the SAMLResponse.

The trigger is represented by the following Ids in the API: `6`.

### Parameters of Pre SAMLResponse creation

- `ctx`
  The first parameter contains the following fields:
  - `v1`
    - `getUser()` [*User*](https://zitadel.com/docs/apis/actions/objects#user)
    - `user`
      - `getMetadata()` [*metadataResult*](https://zitadel.com/docs/apis/actions/objects#metadata-result)
      - `grants` [*UserGrantList*](https://zitadel.com/docs/apis/actions/objects#user-grant-list)
    - `org`
      - `getMetadata()` [*metadataResult*](https://zitadel.com/docs/apis/actions/objects#metadata-result)
- `api`
  The second parameter contains the following fields:
  - `v1`
    - `attributes`
      - `setCustomAttribute(string, string, ...string)`
        Sets any value as attribute in addition to the default attributes, if the key is not already present. The parameters represent the key, nameFormat and the attributeValue(s).
    - `user`
      - `setMetadata(string, Any)`
        Key of the metadata and any value
