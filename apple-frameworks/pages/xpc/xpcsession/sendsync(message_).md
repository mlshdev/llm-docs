> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcsession/sendsync(message:)](https://developer.apple.com/documentation/xpc/xpcsession/sendsync(message:))

# sendSync(message:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Sends a dictionary message over the session to the destination service, blocking the caller until receiving a reply.

## Declaration

```swift
func sendSync(message: XPCDictionary) throws -> XPCDictionary
```

## Parameters

- `message`: A dictionary object that contains the message to send.

<a id="return-value"></a>

## Return Value

If successful, the response to the message; otherwise this method throws an error.

<a id="Discussion"></a>

## Discussion

This method supports priority inversion avoidance. Use this method instead of calling [send(message:replyHandler:)](send%28message_replyhandler_%29.md) and using a semaphore.

Be judicious about your use of this API. It can block indefinitely. Calling this method while the session’s target queue is blocked may lead to deadlocks in certain scenarios. For that reason, invoking this method from the session’s target queue results in a crash.

> **Tip**

>  If you provide an API that uses this method, consider allowing callers to specify a queue and callback handler to let you provide results asynchronously.

Sessions send messages serially in a first-in, first-out (FIFO) order. This method is safe to call from multiple dispatch queues. The session can’t indicate whether the message *delivery* is successful or not. While the session may successfully enqueue the message at the remote end of the connection, there’s no guarantee about when the destination dequeues the message and invokes the receiving session’s handler.

> **Important**

>  If you create an inactive session, you must activate it before sending messages. Calling this method with an inactive session crashes.

## See Also

### Sending messages

- [send(\_:)](send%28__%29.md): Sends an encodable message over the session to the destination service.
- [send(\_:replyHandler:)](send%28__replyhandler_%29-3wjln.md): Sends an encodable message over the session to the destination service, using the closure you specify to handle a reply and rich error.
- [send(\_:replyHandler:)](send%28__replyhandler_%29-9an0u.md): Sends an encodable message over the session to the destination service, using the closure you specify to handle a reply.
- [send(message:)](send%28message_%29.md): Sends a dictionary message over the session to the destination service.
- [send(message:replyHandler:)](send%28message_replyhandler_%29.md): Sends a message asynchronously over the session to the destination service, calling a closure after receiving a reply.
- [sendSync(\_:)](sendsync%28__%29-8a284.md): Sends an encodable message over the session to the destination service, blocking the caller until receiving a reply message.
- [sendSync(\_:)](sendsync%28__%29-88u0s.md): Sends an encodable message over the session to the destination service, blocking the caller until receiving an encodable reply message.
