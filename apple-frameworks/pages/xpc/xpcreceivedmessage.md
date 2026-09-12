> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcreceivedmessage](https://developer.apple.com/documentation/xpc/xpcreceivedmessage)

# XPCReceivedMessage

**Framework:** XPC  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A type that represents a message sent between a session and a listener.

## Declaration

```swift
struct XPCReceivedMessage
```

## Mentioned In

- [Creating XPC services](creating-xpc-services.md)

## Topics

### Accessing message content

- [decode(as:)](xpcreceivedmessage/decode%28as_%29.md): Decodes a message as the given type.
- [isSync](xpcreceivedmessage/issync.md): A Boolean value that indicates if this message is from a synchronous request.

### Replying to messages

- [expectsReply](xpcreceivedmessage/expectsreply.md): A Boolean value that indicates if the client that sent the message expects a reply.
- [reply(\_:)](xpcreceivedmessage/reply%28__%29.md): Sends a reply to the originator of the message.
- [handoffReply(to:\_:)](xpcreceivedmessage/handoffreply%28to___%29.md): Informs the system when message processing and response continues in a separate dispatch queue.

### Instance Methods

- [senderSatisfies(\_:)](xpcreceivedmessage/sendersatisfies%28__%29.md): Check whether the sender of the received message satisfies the specified requirement.

## See Also

### Interprocess communication

- [Creating XPC services](creating-xpc-services.md): Configure a listener, establish a client session, and exchange messages between processes.
- [XPCListener](xpclistener.md): A type that performs tasks for clients across process boundaries.
- [XPCSession](xpcsession.md): A type that sends messages to a server process.
- [xpc_listener_t](xpc_listener_t.md): A C type that performs tasks for clients across process boundaries.
- [xpc_session_t](xpc_session_t-10if0.md): A C type that sends messages to a server process.
