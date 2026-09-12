> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticsigninapi/update-this-token-for-all-associated-users](https://developer.apple.com/documentation/automaticsigninapi/update-this-token-for-all-associated-users)

# Update Sign-In Token

**Interface language:** Data

**Framework:** Automatic Sign-In API  
**Kind:** Web Service Endpoint  
**Availability:** Automatic Sign-In API 1.0+

Updates a specific sign-in token to a new value.

## URL

```http
POST https://api.storekit.itunes.apple.com/account/v1/autoSignIn/update
```

## Sandbox URL

```http
POST https://api.storekit-sandbox.itunes.apple.com/account/v1/autoSignIn/update
```

## HTTP Body

Content type: `application/json`

Type: `UpdateAutoSignInTokenRequest`

The request body that contains the old sign-in token and the new sign-in token.

## Response Codes

- `204` No Content: The request succeeded.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](../appstoreserverapi/generating-json-web-tokens-for-api-requests.md).
- `404` Not Found: Token not found.

## Mentioned In

- [Signing people in to their media accounts automatically](../videosubscriberaccount/signing-people-in-to-media-apps-automatically.md)

<a id="overview"></a>

## Overview

Use this endpoint to update a specific [VSUserAccountManager.AutoSignInToken](../videosubscriberaccount/vsuseraccountmanager/autosignintoken-swift.struct.md) to a new [value](../videosubscriberaccount/vsautosignintoken/value.md).

## See Also

### Token updates

- [UpdateAutoSignInTokenRequest](updateautosignintokenrequest.md): The request body that contains the old sign-in token and the new sign-in token.
