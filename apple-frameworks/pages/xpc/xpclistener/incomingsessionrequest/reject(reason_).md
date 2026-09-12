> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpclistener/incomingsessionrequest/reject(reason:)](https://developer.apple.com/documentation/xpc/xpclistener/incomingsessionrequest/reject(reason:))

# reject(reason:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Rejects an incoming client session request.

## Declaration

```swift
func reject(reason: String) -> XPCListener.IncomingSessionRequest.Decision
```

## Parameters

- `reason`: A description of why the listener rejected the request.

<a id="return-value"></a>

## Return Value

A decision that indicates that the request was canceled.

## See Also

### Responding to client sessions requests

- [accept(\_:)](accept%28__%29-73k8w.md): Accepts an incoming session request from a client, delegating incoming encodable messages to a separate object.
- [accept(\_:)](accept%28__%29-35eh9.md): Accepts an incoming session request from a client, delegating incoming received messages to a separate object.
- [accept(\_:)](accept%28__%29-tkrp.md): Accepts an incoming session request from a client, delegating incoming dictionary messages to a separate object.
- [accept(incomingMessageHandler:cancellationHandler:)](accept%28incomingmessagehandler_cancellationhandler_%29-56fch.md): Accepts an incoming session request from a client using closures to handle encodable messages or cancellation, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](accept%28incomingmessagehandler_cancellationhandler_%29-9oa3z.md): Accepts an incoming session request from a client using closures to handle received messages or cancellation, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](accept%28incomingmessagehandler_cancellationhandler_%29-8rodk.md): Accepts an incoming session request from a client using closures to handle dictionary messages or cancellation, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](accept%28incomingmessagehandler_cancellationhandler_%29-50tzb.md): Accepts an incoming session request from a client using a closure to handle encodable messages, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](accept%28incomingmessagehandler_cancellationhandler_%29-6oelg.md): Accepts an incoming session request from a client using a closure to handle received messages, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](accept%28incomingmessagehandler_cancellationhandler_%29-48c3k.md): Accepts an incoming session request from a client using a closure to handle dictionary messages, and returns the inactive session.
- [XPCListener.IncomingSessionRequest.Decision](decision.md): An opaque type that indicates whether a listener accepts or rejects an incoming session request.
