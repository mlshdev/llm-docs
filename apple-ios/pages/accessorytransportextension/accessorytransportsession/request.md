> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransportsession/request](https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/request)

# AccessoryTransportSession.Request

**Framework:** Accessory Transport Extension  
**Kind:** Class  
**Availability:** iOS 26.2+

An incoming session request that your extension accepts or rejects.

## Declaration

```swift
final class Request
```

## Topics

### Accepting and rejecting session requests

- [accept(\_:)](request/accept%28__%29.md): Accepts the session request and provides an event handler.
- [reject(error:)](request/reject%28error_%29.md): Rejects the session request.
- [AccessoryTransportSession.Request.Decision](request/decision.md): An opaque type returned from the incoming session handler of an event listener.

### Inspecting request properties

- [session](request/session.md): The session to which the request belongs.
