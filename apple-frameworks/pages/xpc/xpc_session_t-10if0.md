> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_session_t-10if0](https://developer.apple.com/documentation/xpc/xpc_session_t-10if0)

# xpc_session_t (Swift)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A C type that sends messages to a server process.

## Declaration

```swift
typealias xpc_session_t = OS_xpc_session
```

<a id="Discussion"></a>

## Discussion

XPC sessions are stateful connections you use to send structured messages to a separate process. Once established, a session remains active until one side of the connection cancels it, at which point the system invalidates the connection. Unlike lower-level `xpc_connection` functions, the system makes no attempt to reestablish a connection or relaunch the service.

## Topics

### Creating a session

- [xpc_session_t](xpc_session_t-49tiv.md): Deprecated.
- [xpc_session_create_mach_service(\_:\_:\_:\_:)](xpc_session_create_mach_service%28________%29.md): Deprecated.
- [xpc_session_create_xpc_service(\_:\_:\_:\_:)](xpc_session_create_xpc_service%28________%29.md): Deprecated.
- [xpc_session_create_flags_t](xpc_session_create_flags_t-swift.struct.md): Deprecated.
- [xpc_session_copy_description(\_:)](xpc_session_copy_description%28__%29.md): Deprecated.
- [xpc_session_set_target_queue(\_:\_:)](xpc_session_set_target_queue%28____%29.md): Deprecated.

### Managing life cycle

- [xpc_session_activate(\_:\_:)](xpc_session_activate%28____%29.md): Deprecated.
- [xpc_session_cancel(\_:)](xpc_session_cancel%28__%29.md): Deprecated.
- [xpc_session_set_cancel_handler(\_:\_:)](xpc_session_set_cancel_handler%28____%29.md): Deprecated.
- [xpc_session_set_incoming_message_handler(\_:\_:)](xpc_session_set_incoming_message_handler%28____%29.md): Deprecated. Sets a handler to receive incoming messages for a session.
- [xpc_session_incoming_message_handler_t](xpc_session_incoming_message_handler_t-elj.md): Deprecated.
- [xpc_session_cancel_handler_t](xpc_session_cancel_handler_t-65b6f.md): Deprecated.

### Sending messages

- [xpc_rich_error_t](xpc_rich_error_t.md): A type that describes an error, and whether you can retry the operation that experienced the error.
- [xpc_rich_error_can_retry(\_:)](xpc_rich_error_can_retry%28__%29.md): Returns a Boolean that indicates whether you can retry the operation that experienced an error.
- [xpc_rich_error_copy_description(\_:)](xpc_rich_error_copy_description%28__%29.md): Copies the string description of an error.
- [xpc_session_send_message(\_:\_:)](xpc_session_send_message%28____%29.md): Deprecated.
- [xpc_session_send_message_with_reply_async(\_:\_:\_:)](xpc_session_send_message_with_reply_async%28______%29.md): Deprecated.
- [xpc_session_reply_handler_t](xpc_session_reply_handler_t-2hf7c.md): Deprecated.
- [xpc_session_send_message_with_reply_sync(\_:\_:\_:)](xpc_session_send_message_with_reply_sync%28______%29.md): Deprecated.

### Working with code signing

- [xpc_session_set_peer_code_signing_requirement(\_:\_:)](xpc_session_set_peer_code_signing_requirement%28____%29.md)

## See Also

### Interprocess communication

- [Creating XPC services](creating-xpc-services.md): Configure a listener, establish a client session, and exchange messages between processes.
- [XPCListener](xpclistener.md): A type that performs tasks for clients across process boundaries.
- [XPCSession](xpcsession.md): A type that sends messages to a server process.
- [XPCReceivedMessage](xpcreceivedmessage.md): A type that represents a message sent between a session and a listener.
- [xpc_listener_t](xpc_listener_t.md): A C type that performs tasks for clients across process boundaries.

# xpc_session_t (Objective-C)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A C type that sends messages to a server process.

## Declaration

```objectivec
typedef NSObject<OS_xpc_session> * xpc_session_t;
```

<a id="Discussion"></a>

## Discussion

XPC sessions are stateful connections you use to send structured messages to a separate process. Once established, a session remains active until one side of the connection cancels it, at which point the system invalidates the connection. Unlike lower-level `xpc_connection` functions, the system makes no attempt to reestablish a connection or relaunch the service.

## Topics

### Creating a session

- [xpc_session_create_xpc_service](xpc_session_create_xpc_service.md): Establishes a connection to an XPC service with the name you specify.
- [xpc_session_create_mach_service](xpc_session_create_mach_service.md): Establishes a connection to a launch agent or launch daemon with the name you specify.
- [xpc_session_create_flags_t](xpc_session_create_flags_t-c.enum.md): Options that specify how to create inactive or privileged sessions.
- [xpc_session_set_target_queue](xpc_session_set_target_queue.md): Sets the target dispatch queue on an inactive session for processing messages.
- [xpc_session_copy_description](xpc_session_copy_description.md): Copies the description string of a session.

### Managing life cycle

- [xpc_session_activate](xpc_session_activate.md): Activates a session so you can send messages.
- [xpc_session_set_incoming_message_handler](xpc_session_set_incoming_message_handler.md): Sets a handler to receive incoming messages for a session.
- [xpc_session_incoming_message_handler_t](xpc_session_incoming_message_handler_t-3eb2a.md): A closure that receives an incoming message for a session.
- [xpc_session_cancel](xpc_session_cancel.md): Cancels a session, discarding any unsent messages.
- [xpc_session_set_cancel_handler](xpc_session_set_cancel_handler.md): Sets a handler the session calls when it’s canceled.
- [xpc_session_cancel_handler_t](xpc_session_cancel_handler_t-7y2lv.md): A block the session calls when it’s canceled.

### Sending messages

- [xpc_session_send_message](xpc_session_send_message.md): Sends a message over the session to the destination service.
- [xpc_session_send_message_with_reply_async](xpc_session_send_message_with_reply_async.md): Sends a message asynchronously over the session to the destination service, calling a handler after receiving a reply.
- [xpc_session_reply_handler_t](xpc_session_reply_handler_t-7kfe4.md): A block that receives the reply to a message a session sends.
- [xpc_session_send_message_with_reply_sync](xpc_session_send_message_with_reply_sync.md): Sends a message over the session to the destination service, blocking the caller until receiving a reply.
- [xpc_rich_error_t](xpc_rich_error_t.md): A type that describes an error, and whether you can retry the operation that experienced the error.
- [xpc_rich_error_can_retry](xpc_rich_error_can_retry%28__%29.md): Returns a Boolean that indicates whether you can retry the operation that experienced an error.
- [xpc_rich_error_copy_description](xpc_rich_error_copy_description%28__%29.md): Copies the string description of an error.

### Working with code signing

- [xpc_session_set_peer_code_signing_requirement](xpc_session_set_peer_code_signing_requirement%28____%29.md)

## See Also

### Interprocess communication

- [Creating XPC services](creating-xpc-services.md): Configure a listener, establish a client session, and exchange messages between processes.
- [xpc_listener_t](xpc_listener_t.md): A C type that performs tasks for clients across process boundaries.
