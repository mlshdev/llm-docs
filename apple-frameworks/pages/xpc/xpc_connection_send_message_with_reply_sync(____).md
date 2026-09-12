> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_send_message_with_reply_sync(_:_:)](https://developer.apple.com/documentation/xpc/xpc_connection_send_message_with_reply_sync(_:_:))

# xpc_connection_send_message_with_reply_sync(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sends a message over the connection and blocks the caller until it receives a reply.

## Declaration

```swift
func xpc_connection_send_message_with_reply_sync(_ connection: xpc_connection_t, _ message: xpc_object_t) -> xpc_object_t
```

## Parameters

- `connection`: The connection for sending the message.
- `message`: The message to send. This must be a dictionary object.

<a id="return-value"></a>

## Return Value

The message that the remote service sends in reply to the original message. If the remote service exits prematurely before receiving the reply, the [XPC_ERROR_CONNECTION_INTERRUPTED](xpc_error_connection_interrupted-swift.var.md) error returns. If the connection becomes invalid before the remote service sends the message, the [XPC_ERROR_CONNECTION_INVALID](xpc_error_connection_invalid-swift.var.md) error returns.

<a id="discussion"></a>

## Discussion

You are responsible for releasing the returned object.

<a id="Discussion"></a>

## Discussion

This API supports priority inversion avoidance, so use it instead of combining [xpc_connection_send_message_with_reply(\_:\_:\_:\_:)](xpc_connection_send_message_with_reply%28________%29.md) with a semaphore.

Invoking this API from a queue that is a part of the target queue hierarchy results in deadlocks under certain conditions.

Be judicious about your use of this API. It can block indefinitely, so if you are using it to implement an API that you can call from the main thread, you might consider allowing the API to take a queue and callback block so that results arrive asynchronously, if possible.

## See Also

### Messages

- [xpc_connection_send_message(\_:\_:)](xpc_connection_send_message%28____%29.md): Sends a message over the connection to the destination service.
- [xpc_connection_send_barrier(\_:\_:)](xpc_connection_send_barrier%28____%29.md): Issues a barrier against the connection’s message-send activity.
- [xpc_connection_send_message_with_reply(\_:\_:\_:\_:)](xpc_connection_send_message_with_reply%28________%29.md): Sends a message over the connection to the destination service and associates a handler to invoke when the remote service sends a reply message.
- [xpc_main(\_:)](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.

# xpc_connection_send_message_with_reply_sync (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sends a message over the connection and blocks the caller until it receives a reply.

## Declaration

```objectivec
extern xpc_object_txpc_connection_send_message_with_reply_sync(xpc_connection_t connection, xpc_object_t message);
```

## Parameters

- `connection`: The connection for sending the message.
- `message`: The message to send. This must be a dictionary object.

<a id="return-value"></a>

## Return Value

The message that the remote service sends in reply to the original message. If the remote service exits prematurely before receiving the reply, the [XPC_ERROR_CONNECTION_INTERRUPTED](xpc_error_connection_interrupted-swift.var.md) error returns. If the connection becomes invalid before the remote service sends the message, the [XPC_ERROR_CONNECTION_INVALID](xpc_error_connection_invalid-swift.var.md) error returns.

<a id="discussion"></a>

## Discussion

You are responsible for releasing the returned object.

<a id="Discussion"></a>

## Discussion

This API supports priority inversion avoidance, so use it instead of combining [xpc_connection_send_message_with_reply](xpc_connection_send_message_with_reply%28________%29.md) with a semaphore.

Invoking this API from a queue that is a part of the target queue hierarchy results in deadlocks under certain conditions.

Be judicious about your use of this API. It can block indefinitely, so if you are using it to implement an API that you can call from the main thread, you might consider allowing the API to take a queue and callback block so that results arrive asynchronously, if possible.

## See Also

### Messages

- [xpc_connection_send_message](xpc_connection_send_message%28____%29.md): Sends a message over the connection to the destination service.
- [xpc_connection_send_barrier](xpc_connection_send_barrier%28____%29.md): Issues a barrier against the connection’s message-send activity.
- [xpc_connection_send_message_with_reply](xpc_connection_send_message_with_reply%28________%29.md): Sends a message over the connection to the destination service and associates a handler to invoke when the remote service sends a reply message.
- [xpc_main](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.
