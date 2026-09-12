> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorysecuritysession/request](https://developer.apple.com/documentation/accessorytransportextension/accessorysecuritysession/request)

# AccessorySecuritySession.Request

**Framework:** Accessory Transport Extension  
**Kind:** Class  
**Availability:** iOS 26.5+

A structure that represents an incoming security session request.

## Declaration

```swift
final class Request
```

<a id="overview"></a>

## Overview

The [AccessoryTransportSecurity](../accessorytransportsecurity.md) protocol’s [accept(sessionRequest:)](../accessorytransportsecurity/accept%28sessionrequest_%29.md) method receives requests of this type.

## Topics

### Responding to the request

- [accept(\_:)](request/accept%28__%29.md): Accepts the session request with an event handler.
- [reject(error:)](request/reject%28error_%29.md): Rejects the session request with an optional error.
- [AccessorySecuritySession.Request.Decision](request/decision.md): A structure that represents the decision to accept or reject a session request.

### Accessing the session

- [session](request/session.md): A security session object for the request.
