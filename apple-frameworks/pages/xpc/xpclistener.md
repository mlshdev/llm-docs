> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpclistener](https://developer.apple.com/documentation/xpc/xpclistener)

# XPCListener

**Framework:** XPC  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A type that performs tasks for clients across process boundaries.

## Declaration

```swift
class XPCListener
```

## Mentioned In

- [Creating XPC services](creating-xpc-services.md)

<a id="overview"></a>

## Overview

To implement an XPC service, create a listener and respond to incoming session requests.

## Topics

### Creating a listener

- [init(service:targetQueue:options:incomingSessionHandler:)](xpclistener/init%28service_targetqueue_options_incomingsessionhandler_%29.md): Creates the server side of an XPC service using the specified service name.
- [XPCListener.InitializationOptions](xpclistener/initializationoptions.md): Options that control the listener’s configuration, such as if it’s inactive at creation.
- [XPCListener.IncomingSessionRequest](xpclistener/incomingsessionrequest.md): A session request from a client that you accept or reject.

### Managing the life cycle

- [activate()](xpclistener/activate%28%29.md): Activates an inactive listener.
- [cancel()](xpclistener/cancel%28%29.md): Cancels a listener.

### Handling incoming messages

- [XPCPeerHandler](xpcpeerhandler.md): A type that handles incoming messages from a client and session cancellation.

### Initializers

- [init(service:targetQueue:options:requirement:incomingSessionHandler:)](xpclistener/init%28service_targetqueue_options_requirement_incomingsessionhandler_%29.md): Creates a listener with the service defined by the provided name, and requires that the session peer has the specified requirement.
- [init(targetQueue:options:incomingSessionHandler:)](xpclistener/init%28targetqueue_options_incomingsessionhandler_%29.md): Creates an anonymous listener

### Instance Properties

- [endpoint](xpclistener/endpoint.md): Creates an endpoint from the listener.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interprocess communication

- [Creating XPC services](creating-xpc-services.md): Configure a listener, establish a client session, and exchange messages between processes.
- [XPCSession](xpcsession.md): A type that sends messages to a server process.
- [XPCReceivedMessage](xpcreceivedmessage.md): A type that represents a message sent between a session and a listener.
- [xpc_listener_t](xpc_listener_t.md): A C type that performs tasks for clients across process boundaries.
- [xpc_session_t](xpc_session_t-10if0.md): A C type that sends messages to a server process.
