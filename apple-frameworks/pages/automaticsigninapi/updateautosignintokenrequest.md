> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticsigninapi/updateautosignintokenrequest](https://developer.apple.com/documentation/automaticsigninapi/updateautosignintokenrequest)

# UpdateAutoSignInTokenRequest

**Interface language:** Data

**Framework:** Automatic Sign-In API  
**Kind:** Object  
**Availability:** Automatic Sign-In API 1.0+

The request body that contains the old sign-in token and the new sign-in token.

## Declaration

```
object UpdateAutoSignInTokenRequest
```

## Properties

- `existingAutoSignInTokenValue` — `string`: The sign-in token [value](../videosubscriberaccount/vsautosignintoken/value.md) that needs to be updated.
- `newAutoSignInTokenValue` — `string`: The new sign-in token [value](../videosubscriberaccount/vsautosignintoken/value.md).

<a id="overview"></a>

## Overview

This is the request object for the [Update Sign-In Token](update-this-token-for-all-associated-users.md) endpoint.

## See Also

### Token updates

- [Update Sign-In Token](update-this-token-for-all-associated-users.md): Updates a specific sign-in token to a new value.
