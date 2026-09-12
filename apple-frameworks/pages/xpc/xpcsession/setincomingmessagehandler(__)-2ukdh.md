> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcsession/setincomingmessagehandler(_:)-2ukdh](https://developer.apple.com/documentation/xpc/xpcsession/setincomingmessagehandler(_:)-2ukdh)

# setIncomingMessageHandler(\_:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Sets a closure to receive incoming decodable messages for a session.

## Declaration

```swift
@preconcurrency func setIncomingMessageHandler<Message>(_ incomingMessageHandler: @escaping @Sendable (Message) -> (any Encodable)?) where Message : Decodable
```

## Parameters

- `incomingMessageHandler`: A closure that the session invokes when it receives messages. The closure has a parameter that contains the message from the client, and optionally returns an encodable reply message to returns to the client. If the closure returns [nil](../../objectivec/nil-227m0.md), you can use [send(message:)](send%28message_%29.md) to reply asynchronously after the closure completes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Only call this method on an inactive session.

## See Also

### Managing the life cycle

- [activate()](activate%28%29.md): Activates a session so you can send messages.
- [setIncomingMessageHandler(\_:)](setincomingmessagehandler%28__%29-5lu26.md): Sets a closure to receive incoming received messages for a session.
- [setIncomingMessageHandler(\_:)](setincomingmessagehandler%28__%29-75ou9.md): Sets a closure to receive incoming dictionary messages for a session.
- [cancel(reason:)](cancel%28reason_%29.md): Cancels a session, discarding any unsent messages.
- [setCancellationHandler(\_:)](setcancellationhandler%28__%29.md): Sets a closure the session calls when it’s canceled.
