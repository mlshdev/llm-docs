> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticsigninapi/deleteautosignintokenrequest](https://developer.apple.com/documentation/automaticsigninapi/deleteautosignintokenrequest)

# DeleteAutoSignInTokenRequest

**Interface language:** Data

**Framework:** Automatic Sign-In API  
**Kind:** Object  
**Availability:** Automatic Sign-In API 1.0+

The request body that contains the sign-in token to be deleted.

## Declaration

```
object DeleteAutoSignInTokenRequest
```

## Properties

- `autoSignInTokenValue` — `string`: The token [value](../videosubscriberaccount/vsautosignintoken/value.md) that needs to be deleted.

<a id="overview"></a>

## Overview

This is the request object for the [Delete Sign-In Token](delete-this-token-for-all-associated-users.md) endpoint.

## See Also

### Token deletion

- [Delete Sign-In Token](delete-this-token-for-all-associated-users.md): Deletes a specific sign-in token.
