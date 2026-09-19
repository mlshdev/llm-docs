> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/request/accept(_:)

# accept(\_:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.2+

Accepts the session request and provides an event handler.

## Declaration

```swift
final func accept<Handler>(_ sessionRequestHandler: () -> Handler) -> AccessoryTransportSession.Request.Decision where Handler : AccessoryTransportSession.EventHandler
```

## Parameters

- `sessionRequestHandler`: A closure that produces an [AccessoryTransportSession.EventHandler](../eventhandler.md) to handle session events.

## See Also

### Accepting and rejecting session requests

- [reject(error:)](reject%28error_%29.md): Rejects the session request.
- [AccessoryTransportSession.Request.Decision](decision.md): An opaque type returned from the incoming session handler of an event listener.
