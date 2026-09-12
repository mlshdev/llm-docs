> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransportsession/request/reject(error:)](https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/request/reject(error:))

# reject(error:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.2+

Rejects the session request.

## Declaration

```swift
final func reject(error: AccessoryTransportSession.Error?) -> AccessoryTransportSession.Request.Decision
```

## Parameters

- `error`: An error that indicates why the extension rejected the request.

## See Also

### Accepting and rejecting session requests

- [accept(\_:)](accept%28__%29.md): Accepts the session request and provides an event handler.
- [AccessoryTransportSession.Request.Decision](decision.md): An opaque type returned from the incoming session handler of an event listener.
