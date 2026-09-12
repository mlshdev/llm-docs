> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorysecuritysession/request/decision](https://developer.apple.com/documentation/accessorytransportextension/accessorysecuritysession/request/decision)

# AccessorySecuritySession.Request.Decision

**Framework:** Accessory Transport Extension  
**Kind:** Structure  
**Availability:** iOS 26.5+

A structure that represents the decision to accept or reject a session request.

## Declaration

```swift
struct Decision
```

<a id="overview"></a>

## Overview

The [accept(\_:)](accept%28__%29.md) and [reject(error:)](reject%28error_%29.md) methods return this type.

## See Also

### Responding to the request

- [accept(\_:)](accept%28__%29.md): Accepts the session request with an event handler.
- [reject(error:)](reject%28error_%29.md): Rejects the session request with an optional error.
