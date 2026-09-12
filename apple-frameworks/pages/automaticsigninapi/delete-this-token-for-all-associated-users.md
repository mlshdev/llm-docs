> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticsigninapi/delete-this-token-for-all-associated-users](https://developer.apple.com/documentation/automaticsigninapi/delete-this-token-for-all-associated-users)

# Delete Sign-In Token

**Interface language:** Data

**Framework:** Automatic Sign-In API  
**Kind:** Web Service Endpoint  
**Availability:** Automatic Sign-In API 1.0+

Deletes a specific sign-in token.

## URL

```http
POST https://api.storekit.itunes.apple.com/account/v1/autoSignIn/delete
```

## Sandbox URL

```http
POST https://api.storekit-sandbox.itunes.apple.com/account/v1/autoSignIn/delete
```

## HTTP Body

Content type: `application/json`

Type: `DeleteAutoSignInTokenRequest`

The request body that contains the sign-in token to be deleted.

## Response Codes

- `204` No Content: The request succeeded.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](../appstoreserverapi/generating-json-web-tokens-for-api-requests.md).
- `404` Not Found: Token not found.

## Mentioned In

- [Signing people in to their media accounts automatically](../videosubscriberaccount/signing-people-in-to-media-apps-automatically.md)

<a id="overview"></a>

## Overview

Use this endpoint to delete a specific [value](../videosubscriberaccount/vsuseraccountmanager/autosignintoken-swift.struct/value.md).

## See Also

### Token deletion

- [DeleteAutoSignInTokenRequest](deleteautosignintokenrequest.md): The request body that contains the sign-in token to be deleted.
