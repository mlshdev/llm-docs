> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_send_message(_:_:)](https://developer.apple.com/documentation/xpc/xpc_connection_send_message(_:_:))

# xpc_connection_send_message(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sends a message over the connection to the destination service.

## Declaration

```swift
func xpc_connection_send_message(_ connection: xpc_connection_t, _ message: xpc_object_t)
```

## Parameters

- `connection`: The connection over which the message shall be sent.
- `message`: The message to send. This must be a dictionary object. This dictionary is logically copied by the connection, so it is safe to modify the dictionary after this call.

<a id="Discussion"></a>

## Discussion

Messages are delivered in FIFO order. This API is safe to call from multiple GCD queues. There is no indication that a message was delivered successfully. This is because even once the message has been successfully enqueued on the remote end, there are no guarantees about when the runtime will dequeue the message and invoke the other connection’s event handler block.

If this API is used to send a message that is in reply to another message, there is no guarantee of ordering between the invocations of the connection’s event handler and the reply handler for that message, even if they are targeted to the same queue.

After extensive study, we have found that clients who are interested in the state of the message on the server end are typically holding open transactions related to that message. And the only reliable way to track the lifetime of that transaction is at the protocol layer. So the server should send a reply message, which upon receiving, will cause the client to close its transaction.

## See Also

### Messages

- [xpc_connection_send_barrier(\_:\_:)](xpc_connection_send_barrier%28____%29.md): Issues a barrier against the connection’s message-send activity.
- [xpc_connection_send_message_with_reply(\_:\_:\_:\_:)](xpc_connection_send_message_with_reply%28________%29.md): Sends a message over the connection to the destination service and associates a handler to invoke when the remote service sends a reply message.
- [xpc_connection_send_message_with_reply_sync(\_:\_:)](xpc_connection_send_message_with_reply_sync%28____%29.md): Sends a message over the connection and blocks the caller until it receives a reply.
- [xpc_main(\_:)](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.

# xpc_connection_send_message (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sends a message over the connection to the destination service.

## Declaration

```objectivec
extern void xpc_connection_send_message(xpc_connection_t connection, xpc_object_t message);
```

## Parameters

- `connection`: The connection over which the message shall be sent.
- `message`: The message to send. This must be a dictionary object. This dictionary is logically copied by the connection, so it is safe to modify the dictionary after this call.

<a id="Discussion"></a>

## Discussion

Messages are delivered in FIFO order. This API is safe to call from multiple GCD queues. There is no indication that a message was delivered successfully. This is because even once the message has been successfully enqueued on the remote end, there are no guarantees about when the runtime will dequeue the message and invoke the other connection’s event handler block.

If this API is used to send a message that is in reply to another message, there is no guarantee of ordering between the invocations of the connection’s event handler and the reply handler for that message, even if they are targeted to the same queue.

After extensive study, we have found that clients who are interested in the state of the message on the server end are typically holding open transactions related to that message. And the only reliable way to track the lifetime of that transaction is at the protocol layer. So the server should send a reply message, which upon receiving, will cause the client to close its transaction.

## See Also

### Messages

- [xpc_connection_send_barrier](xpc_connection_send_barrier%28____%29.md): Issues a barrier against the connection’s message-send activity.
- [xpc_connection_send_message_with_reply](xpc_connection_send_message_with_reply%28________%29.md): Sends a message over the connection to the destination service and associates a handler to invoke when the remote service sends a reply message.
- [xpc_connection_send_message_with_reply_sync](xpc_connection_send_message_with_reply_sync%28____%29.md): Sends a message over the connection and blocks the caller until it receives a reply.
- [xpc_main](xpc_main%28__%29.md): Starts listening for incoming connections and processes them with the specified event handler.
