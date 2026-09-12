> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpclistener/incomingsessionrequest/accept(incomingmessagehandler:cancellationhandler:)-9oa3z](https://developer.apple.com/documentation/xpc/xpclistener/incomingsessionrequest/accept(incomingmessagehandler:cancellationhandler:)-9oa3z)

# accept(incomingMessageHandler:cancellationHandler:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Accepts an incoming session request from a client using closures to handle received messages or cancellation, and returns the inactive session.

## Declaration

```swift
@preconcurrency func accept(incomingMessageHandler: @escaping @Sendable (XPCReceivedMessage) -> (any Encodable)?, cancellationHandler: (@Sendable (XPCRichError) -> Void)? = nil) -> XPCListener.IncomingSessionRequest.Decision
```

## Parameters

- `incomingMessageHandler`: A closure that receives incoming messages from a client.
- `cancellationHandler`: An optional closure that the system invokes when it cancels the session.

<a id="return-value"></a>

## Return Value

A decision that indicates whether the listener accepts or rejects the incoming session.

## See Also

### Responding to client sessions requests

- [accept(\_:)](accept%28__%29-73k8w.md): Accepts an incoming session request from a client, delegating incoming encodable messages to a separate object.
- [accept(\_:)](accept%28__%29-35eh9.md): Accepts an incoming session request from a client, delegating incoming received messages to a separate object.
- [accept(\_:)](accept%28__%29-tkrp.md): Accepts an incoming session request from a client, delegating incoming dictionary messages to a separate object.
- [accept(incomingMessageHandler:cancellationHandler:)](accept%28incomingmessagehandler_cancellationhandler_%29-56fch.md): Accepts an incoming session request from a client using closures to handle encodable messages or cancellation, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](accept%28incomingmessagehandler_cancellationhandler_%29-8rodk.md): Accepts an incoming session request from a client using closures to handle dictionary messages or cancellation, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](accept%28incomingmessagehandler_cancellationhandler_%29-50tzb.md): Accepts an incoming session request from a client using a closure to handle encodable messages, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](accept%28incomingmessagehandler_cancellationhandler_%29-6oelg.md): Accepts an incoming session request from a client using a closure to handle received messages, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](accept%28incomingmessagehandler_cancellationhandler_%29-48c3k.md): Accepts an incoming session request from a client using a closure to handle dictionary messages, and returns the inactive session.
- [reject(reason:)](reject%28reason_%29.md): Rejects an incoming client session request.
- [XPCListener.IncomingSessionRequest.Decision](decision.md): An opaque type that indicates whether a listener accepts or rejects an incoming session request.
