> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpclistener/incomingsessionrequest](https://developer.apple.com/documentation/xpc/xpclistener/incomingsessionrequest)

# XPCListener.IncomingSessionRequest

**Framework:** XPC  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A session request from a client that you accept or reject.

## Declaration

```swift
class IncomingSessionRequest
```

## Mentioned In

- [Creating XPC services](../creating-xpc-services.md)

<a id="overview"></a>

## Overview

When a client initiates a connection to a listener, the system passes the incoming session request to the listener. In response, the listener calls one of the `accept` methods to complete the connection with the client, or it rejects the request.

## Topics

### Responding to client sessions requests

- [accept(\_:)](incomingsessionrequest/accept%28__%29-73k8w.md): Accepts an incoming session request from a client, delegating incoming encodable messages to a separate object.
- [accept(\_:)](incomingsessionrequest/accept%28__%29-35eh9.md): Accepts an incoming session request from a client, delegating incoming received messages to a separate object.
- [accept(\_:)](incomingsessionrequest/accept%28__%29-tkrp.md): Accepts an incoming session request from a client, delegating incoming dictionary messages to a separate object.
- [accept(incomingMessageHandler:cancellationHandler:)](incomingsessionrequest/accept%28incomingmessagehandler_cancellationhandler_%29-56fch.md): Accepts an incoming session request from a client using closures to handle encodable messages or cancellation, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](incomingsessionrequest/accept%28incomingmessagehandler_cancellationhandler_%29-9oa3z.md): Accepts an incoming session request from a client using closures to handle received messages or cancellation, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](incomingsessionrequest/accept%28incomingmessagehandler_cancellationhandler_%29-8rodk.md): Accepts an incoming session request from a client using closures to handle dictionary messages or cancellation, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](incomingsessionrequest/accept%28incomingmessagehandler_cancellationhandler_%29-50tzb.md): Accepts an incoming session request from a client using a closure to handle encodable messages, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](incomingsessionrequest/accept%28incomingmessagehandler_cancellationhandler_%29-6oelg.md): Accepts an incoming session request from a client using a closure to handle received messages, and returns the inactive session.
- [accept(incomingMessageHandler:cancellationHandler:)](incomingsessionrequest/accept%28incomingmessagehandler_cancellationhandler_%29-48c3k.md): Accepts an incoming session request from a client using a closure to handle dictionary messages, and returns the inactive session.
- [reject(reason:)](incomingsessionrequest/reject%28reason_%29.md): Rejects an incoming client session request.
- [XPCListener.IncomingSessionRequest.Decision](incomingsessionrequest/decision.md): An opaque type that indicates whether a listener accepts or rejects an incoming session request.

## See Also

### Creating a listener

- [init(service:targetQueue:options:incomingSessionHandler:)](init%28service_targetqueue_options_incomingsessionhandler_%29.md): Creates the server side of an XPC service using the specified service name.
- [XPCListener.InitializationOptions](initializationoptions.md): Options that control the listener’s configuration, such as if it’s inactive at creation.
