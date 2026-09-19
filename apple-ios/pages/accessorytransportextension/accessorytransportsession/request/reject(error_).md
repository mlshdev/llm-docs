> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/request/reject(error:)

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
