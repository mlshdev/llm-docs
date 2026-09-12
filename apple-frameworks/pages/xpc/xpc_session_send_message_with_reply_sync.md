> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_session_send_message_with_reply_sync](https://developer.apple.com/documentation/xpc/xpc_session_send_message_with_reply_sync)

# xpc_session_send_message_with_reply_sync

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sends a message over the session to the destination service, blocking the caller until receiving a reply.

## Declaration

```objectivec
extern xpc_object_txpc_session_send_message_with_reply_sync(xpc_session_t session, xpc_object_t message, xpc_rich_error_t*error_out);
```

## Parameters

- `session`: The session that represents the destination service.
- `message`: A dictionary object that contains the message to send.
- `error_out`: If provided, a pointer that receives an error if a failure occurs.

<a id="return-value"></a>

## Return Value

If successful, the response to the message; otherwise [nil](../objectivec/nil-227m0.md).

<a id="Discussion"></a>

## Discussion

This method supports priority inversion avoidance. Use this method instead of calling [xpc_session_send_message_with_reply_async](xpc_session_send_message_with_reply_async.md) and using a semaphore.

Be judicious about your use of this API. It can block indefinitely. Calling this method while the session’s target queue is blocked may lead to deadlocks in certain scenarios. For that reason, invoking this method from the session’s target queue results in a crash.

> **Tip**

>  If you provide an API that uses this method, consider allowing callers to specify a queue and callback handler to let you provide results asynchronously.

Sessions send messages serially in a first-in, first-out (FIFO) order. This method is safe to call from multiple dispatch queues. The session can’t indicate whether the message *delivery* is successful or not. While the session may successfully enqueue the message at the remote end of the connection, there’s no guarantee about when the destination dequeues the message and invokes the receiving session’s handler.

> **Important**

>  If you create an inactive session, you must activate it before sending messages. Calling this method with an inactive session crashes.

## See Also

### Sending messages

- [xpc_session_send_message](xpc_session_send_message.md): Sends a message over the session to the destination service.
- [xpc_session_send_message_with_reply_async](xpc_session_send_message_with_reply_async.md): Sends a message asynchronously over the session to the destination service, calling a handler after receiving a reply.
- [xpc_session_reply_handler_t](xpc_session_reply_handler_t-7kfe4.md): A block that receives the reply to a message a session sends.
- [xpc_rich_error_t](xpc_rich_error_t.md): A type that describes an error, and whether you can retry the operation that experienced the error.
- [xpc_rich_error_can_retry](xpc_rich_error_can_retry%28__%29.md): Returns a Boolean that indicates whether you can retry the operation that experienced an error.
- [xpc_rich_error_copy_description](xpc_rich_error_copy_description%28__%29.md): Copies the string description of an error.
