> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcsession](https://developer.apple.com/documentation/xpc/xpcsession)

# XPCSession

**Framework:** XPC  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A type that sends messages to a server process.

## Declaration

```swift
class XPCSession
```

<a id="overview"></a>

## Overview

XPC sessions are stateful connections you use to send structured messages to a separate process. Once established, a session remains active until one side of the connection cancels it, at which point the system invalidates the connection.

## Topics

### Creating a session

- [init(xpcService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28xpcservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-407h2.md): Establishes a connection to an XPC service with the name and decodable message handler you specify.
- [init(xpcService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28xpcservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-9f4u0.md): Establishes a connection to an XPC service with the name and received message handler you specify.
- [init(xpcService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28xpcservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-bel3.md): Establishes a connection to an XPC service with the name and dictionary message handler you specify.
- [init(xpcService:targetQueue:options:cancellationHandler:)](xpcsession/init%28xpcservice_targetqueue_options_cancellationhandler_%29.md): Establishes a connection to an XPC service with the name you specify.
- [init(machService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28machservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-l3rz.md): Establishes a connection to a launch agent or launch daemon with the name and decodable message handler you specify.
- [init(machService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28machservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-2xuyi.md): Establishes a connection to a launch agent or launch daemon with the name and received message handler you specify.
- [init(machService:targetQueue:options:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28machservice_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-6jz7y.md): Establishes a connection to a launch agent or launch daemon with the name and dictionary message handler you specify.
- [init(machService:targetQueue:options:cancellationHandler:)](xpcsession/init%28machservice_targetqueue_options_cancellationhandler_%29.md): Establishes a connection to a launch agent or launch daemon with the name you specify.
- [XPCSession.InitializationOptions](xpcsession/initializationoptions.md): Options that control the session’s configuration.
- [setTargetQueue(\_:)](xpcsession/settargetqueue%28__%29.md): Sets the target dispatch queue on an inactive session for processing messages.

### Managing the life cycle

- [activate()](xpcsession/activate%28%29.md): Activates a session so you can send messages.
- [setIncomingMessageHandler(\_:)](xpcsession/setincomingmessagehandler%28__%29-2ukdh.md): Sets a closure to receive incoming decodable messages for a session.
- [setIncomingMessageHandler(\_:)](xpcsession/setincomingmessagehandler%28__%29-5lu26.md): Sets a closure to receive incoming received messages for a session.
- [setIncomingMessageHandler(\_:)](xpcsession/setincomingmessagehandler%28__%29-75ou9.md): Sets a closure to receive incoming dictionary messages for a session.
- [cancel(reason:)](xpcsession/cancel%28reason_%29.md): Cancels a session, discarding any unsent messages.
- [setCancellationHandler(\_:)](xpcsession/setcancellationhandler%28__%29.md): Sets a closure the session calls when it’s canceled.

### Sending messages

- [send(\_:)](xpcsession/send%28__%29.md): Sends an encodable message over the session to the destination service.
- [send(\_:replyHandler:)](xpcsession/send%28__replyhandler_%29-3wjln.md): Sends an encodable message over the session to the destination service, using the closure you specify to handle a reply and rich error.
- [send(\_:replyHandler:)](xpcsession/send%28__replyhandler_%29-9an0u.md): Sends an encodable message over the session to the destination service, using the closure you specify to handle a reply.
- [send(message:)](xpcsession/send%28message_%29.md): Sends a dictionary message over the session to the destination service.
- [send(message:replyHandler:)](xpcsession/send%28message_replyhandler_%29.md): Sends a message asynchronously over the session to the destination service, calling a closure after receiving a reply.
- [sendSync(\_:)](xpcsession/sendsync%28__%29-8a284.md): Sends an encodable message over the session to the destination service, blocking the caller until receiving a reply message.
- [sendSync(\_:)](xpcsession/sendsync%28__%29-88u0s.md): Sends an encodable message over the session to the destination service, blocking the caller until receiving an encodable reply message.
- [sendSync(message:)](xpcsession/sendsync%28message_%29.md): Sends a dictionary message over the session to the destination service, blocking the caller until receiving a reply.

### Initializers

- [init(endpoint:targetQueue:options:cancellationHandler:)](xpcsession/init%28endpoint_targetqueue_options_cancellationhandler_%29.md): Creates a new session object representing a connection to the xpc endpoint.
- [init(endpoint:targetQueue:options:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28endpoint_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-2jmkk.md): Creates a new session object representing a connection to the xpc endpoint.
- [init(endpoint:targetQueue:options:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28endpoint_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-546jo.md): Creates a new session object representing a connection to the xpc endpoint.
- [init(endpoint:targetQueue:options:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28endpoint_targetqueue_options_incomingmessagehandler_cancellationhandler_%29-6zd1x.md): Creates a new session object representing a connection to the xpc endpoint.
- [init(machService:targetQueue:options:requirement:cancellationHandler:)](xpcsession/init%28machservice_targetqueue_options_requirement_cancellationhandler_%29.md)
- [init(machService:targetQueue:options:requirement:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28machservice_targetqueue_options_requirement_incomingmessagehandler_cancellationhandler_%29-5pk9g.md)
- [init(machService:targetQueue:options:requirement:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28machservice_targetqueue_options_requirement_incomingmessagehandler_cancellationhandler_%29-7o5oq.md)
- [init(machService:targetQueue:options:requirement:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28machservice_targetqueue_options_requirement_incomingmessagehandler_cancellationhandler_%29-84ll1.md)
- [init(xpcService:targetQueue:options:requirement:cancellationHandler:)](xpcsession/init%28xpcservice_targetqueue_options_requirement_cancellationhandler_%29.md): Creates a new session object representing a connection to the named service, and requires that the session peer has the specified requirement.
- [init(xpcService:targetQueue:options:requirement:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28xpcservice_targetqueue_options_requirement_incomingmessagehandler_cancellationhandler_%29-3p0jf.md)
- [init(xpcService:targetQueue:options:requirement:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28xpcservice_targetqueue_options_requirement_incomingmessagehandler_cancellationhandler_%29-6jxdc.md)
- [init(xpcService:targetQueue:options:requirement:incomingMessageHandler:cancellationHandler:)](xpcsession/init%28xpcservice_targetqueue_options_requirement_incomingmessagehandler_cancellationhandler_%29-osu4.md)

### Instance Methods

- [setPeerRequirement(\_:)](xpcsession/setpeerrequirement%28__%29.md): Requires that the session peer has the specified requirement

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
- [XPCListener](xpclistener.md): A type that performs tasks for clients across process boundaries.
- [XPCReceivedMessage](xpcreceivedmessage.md): A type that represents a message sent between a session and a listener.
- [xpc_listener_t](xpc_listener_t.md): A C type that performs tasks for clients across process boundaries.
- [xpc_session_t](xpc_session_t-10if0.md): A C type that sends messages to a server process.
