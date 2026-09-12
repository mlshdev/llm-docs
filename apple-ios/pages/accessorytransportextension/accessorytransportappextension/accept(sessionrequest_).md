> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransportappextension/accept(sessionrequest:)](https://developer.apple.com/documentation/accessorytransportextension/accessorytransportappextension/accept(sessionrequest:))

# accept(sessionRequest:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.2+

Handles a new session request for the accessory.

## Declaration

```swift
func accept(sessionRequest: AccessoryTransportSession.Request) -> AccessoryTransportSession.Request.Decision
```

## Parameters

- `sessionRequest`: An [AccessoryTransportSession.Request](../accessorytransportsession/request.md) instance you use to accept or reject the session.

<a id="discussion"></a>

## Discussion

Implement this callback and respond to its invocations by the framework.

## See Also

### Accepting session requests

- [AccessoryTransportSession.Request.Decision](../accessorytransportsession/request/decision.md): An opaque type returned from the incoming session handler of an event listener.
