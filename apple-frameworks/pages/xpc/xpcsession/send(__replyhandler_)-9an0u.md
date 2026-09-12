> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcsession/send(_:replyhandler:)-9an0u](https://developer.apple.com/documentation/xpc/xpcsession/send(_:replyhandler:)-9an0u)

# send(\_:replyHandler:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Sends an encodable message over the session to the destination service, using the closure you specify to handle a reply.

## Declaration

```swift
@preconcurrency func send<Message, Reply>(_ message: Message, replyHandler: @escaping @Sendable (Result<Reply, any Error>) -> Void) throws where Message : Encodable, Reply : Decodable
```

## Parameters

- `message`: An encodable object that contains the message to send.
- `replyHandler`: A closure that receives a reply, and error if one occurs, that the service sends back.

<a id="Discussion"></a>

## Discussion

Sessions send messages serially in a first-in, first-out (FIFO) order. This method is safe to call from multiple dispatch queues. The session can’t indicate whether the message *delivery* is successful or not. While the session may successfully enqueue the message at the remote end of the connection, there’s no guarantee about when the destination dequeues the message and invokes the receiving session’s handler.

If the session fails to send the message, this method throws an error that contains details about the failure.

If the system tears down the session’s connection before receiving a reply, it invokes `replyHandler` with a result containing an [XPCRichError](../xpcricherror.md) describing the failure. For example, the remote service exits prematurely before sending a reply.

> **Important**

>  If you create an inactive session, you must activate it before sending messages. Calling this method with an inactive session crashes.

## See Also

### Sending messages

- [send(\_:)](send%28__%29.md): Sends an encodable message over the session to the destination service.
- [send(\_:replyHandler:)](send%28__replyhandler_%29-3wjln.md): Sends an encodable message over the session to the destination service, using the closure you specify to handle a reply and rich error.
- [send(message:)](send%28message_%29.md): Sends a dictionary message over the session to the destination service.
- [send(message:replyHandler:)](send%28message_replyhandler_%29.md): Sends a message asynchronously over the session to the destination service, calling a closure after receiving a reply.
- [sendSync(\_:)](sendsync%28__%29-8a284.md): Sends an encodable message over the session to the destination service, blocking the caller until receiving a reply message.
- [sendSync(\_:)](sendsync%28__%29-88u0s.md): Sends an encodable message over the session to the destination service, blocking the caller until receiving an encodable reply message.
- [sendSync(message:)](sendsync%28message_%29.md): Sends a dictionary message over the session to the destination service, blocking the caller until receiving a reply.
