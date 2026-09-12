> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_listener_t](https://developer.apple.com/documentation/xpc/xpc_listener_t)

# xpc_listener_t (Swift)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A C type that performs tasks for clients across process boundaries.

## Declaration

```swift
typealias xpc_listener_t = OS_xpc_listener
```

<a id="Discussion"></a>

## Discussion

To implement an XPC service, create a listener and respond to incoming session requests.

## Topics

### Creating a listener

- [xpc_listener_incoming_session_handler_t](xpc_listener_incoming_session_handler_t.md): A block that receives an incoming peer session request from a client.

### Working with code signing

- [xpc_listener_set_peer_code_signing_requirement(\_:\_:)](xpc_listener_set_peer_code_signing_requirement%28____%29.md)

## See Also

### Interprocess communication

- [Creating XPC services](creating-xpc-services.md): Configure a listener, establish a client session, and exchange messages between processes.
- [XPCListener](xpclistener.md): A type that performs tasks for clients across process boundaries.
- [XPCSession](xpcsession.md): A type that sends messages to a server process.
- [XPCReceivedMessage](xpcreceivedmessage.md): A type that represents a message sent between a session and a listener.
- [xpc_session_t](xpc_session_t-10if0.md): A C type that sends messages to a server process.

# xpc_listener_t (Objective-C)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A C type that performs tasks for clients across process boundaries.

## Declaration

```objectivec
typedef NSObject<OS_xpc_listener> * xpc_listener_t;
```

<a id="Discussion"></a>

## Discussion

To implement an XPC service, create a listener and respond to incoming session requests.

## Topics

### Creating a listener

- [xpc_listener_create](xpc_listener_create.md): Creates the server side of an XPC service using the specified service name.
- [xpc_listener_create_flags_t](xpc_listener_create_flags_t.md): Options that control the listener’s configuration.
- [xpc_listener_incoming_session_handler_t](xpc_listener_incoming_session_handler_t.md): A block that receives an incoming peer session request from a client.
- [xpc_listener_copy_description](xpc_listener_copy_description.md): Copies the description string of a listener.

### Managing the life cycle

- [xpc_listener_activate](xpc_listener_activate.md): Activates an inactive listener.
- [xpc_listener_cancel](xpc_listener_cancel.md): Cancels a listener.
- [xpc_listener_reject_peer](xpc_listener_reject_peer.md): Rejects an incoming peer session request.

### Working with code signing

- [xpc_listener_set_peer_code_signing_requirement](xpc_listener_set_peer_code_signing_requirement%28____%29.md)

## See Also

### Interprocess communication

- [Creating XPC services](creating-xpc-services.md): Configure a listener, establish a client session, and exchange messages between processes.
- [xpc_session_t](xpc_session_t-10if0.md): A C type that sends messages to a server process.
