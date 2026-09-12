> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_send_message_with_reply(_:_:_:_:)](https://developer.apple.com/documentation/xpc/xpc_connection_send_message_with_reply(_:_:_:_:))

# xpc_connection_send_message_with_reply(\_:\_:\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sends a message over the connection to the destination service and associates a handler to invoke when the remote service sends a reply message.

## Declaration

```swift
func xpc_connection_send_message_with_reply(_ connection: xpc_connection_t, _ message: xpc_object_t, _ replyq: dispatch_queue_t?, _ handler: @escaping @Sendable (xpc_object_t) -> Void)
```

## Parameters

- `connection`: The connection over which the message shall be sent.
- `message`: The message to send. This must be a dictionary object.
- `replyq`: The GCD queue to which the reply handler will be submitted. This may be a concurrent queue.
- `handler`: The handler block to invoke when a reply to the message is received from the connection. If the remote service exits prematurely before the reply was received, the [XPC_ERROR_CONNECTION_INTERRUPTED](xpc_error_connection_interrupted-swift.var.md) error will be returned. If the connection went invalid before the message could be sent, the [XPC_ERROR_CONNECTION_INVALID](xpc_error_connection_invalid-swift.var.md) error will be returned.

<a id="Discussion"></a>

## Discussion

If the given GCD queue is a concurrent queue, XPC cannot guarantee that there will not be multiple reply handlers being invoked concurrently. XPC does not guarantee any ordering for the invocation of reply handers. So if multiple messages are waiting for replies and the connection goes invalid, there is no guarantee that the reply handlers will be invoked in FIFO order. Similarly, XPC does not guarantee that reply handlers will not run concurrently with the connection’s event handler in the case that the reply queue and the connection’s target queue are the same concurrent queue.

## See Also

### Messages

- [xpc_connection_send_message(\_:\_:)](xpc_connection_send_message%28____%29.md): Sends a message over the connection to the destination service.
- [xpc_connection_send_barrier(\_:\_:)](xpc_connection_send_barrier%28____%29.md): Issues a barrier against the connection’s message-send activity.
- [xpc_connection_send_message_with_reply_sync(\_:\_:)](xpc_connection_send_message_with_reply_sync%28____%29.md): Sends a message over the connection and blocks the caller until it receives a reply.
- [xpc_main(\_:)](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.

# xpc_connection_send_message_with_reply (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sends a message over the connection to the destination service and associates a handler to invoke when the remote service sends a reply message.

## Declaration

```objectivec
extern void xpc_connection_send_message_with_reply(xpc_connection_t connection, xpc_object_t message, dispatch_queue_t replyq, xpc_handler_t handler);
```

## Parameters

- `connection`: The connection over which the message shall be sent.
- `message`: The message to send. This must be a dictionary object.
- `replyq`: The GCD queue to which the reply handler will be submitted. This may be a concurrent queue.
- `handler`: The handler block to invoke when a reply to the message is received from the connection. If the remote service exits prematurely before the reply was received, the [XPC_ERROR_CONNECTION_INTERRUPTED](xpc_error_connection_interrupted-swift.var.md) error will be returned. If the connection went invalid before the message could be sent, the [XPC_ERROR_CONNECTION_INVALID](xpc_error_connection_invalid-swift.var.md) error will be returned.

<a id="Discussion"></a>

## Discussion

If the given GCD queue is a concurrent queue, XPC cannot guarantee that there will not be multiple reply handlers being invoked concurrently. XPC does not guarantee any ordering for the invocation of reply handers. So if multiple messages are waiting for replies and the connection goes invalid, there is no guarantee that the reply handlers will be invoked in FIFO order. Similarly, XPC does not guarantee that reply handlers will not run concurrently with the connection’s event handler in the case that the reply queue and the connection’s target queue are the same concurrent queue.

## See Also

### Messages

- [xpc_connection_send_message](xpc_connection_send_message%28____%29.md): Sends a message over the connection to the destination service.
- [xpc_connection_send_barrier](xpc_connection_send_barrier%28____%29.md): Issues a barrier against the connection’s message-send activity.
- [xpc_connection_send_message_with_reply_sync](xpc_connection_send_message_with_reply_sync%28____%29.md): Sends a message over the connection and blocks the caller until it receives a reply.
- [xpc_main](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.
