> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networklistener](https://developer.apple.com/documentation/network/networklistener)

# NetworkListener

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Listen for incoming network connections.

## Declaration

```swift
final class NetworkListener<ApplicationProtocol> where ApplicationProtocol : NetworkProtocolOptions
```

<a id="overview"></a>

## Overview

A listener receives incoming connections by binding to a local endpoint. It accepts connections based on the protocols defined in its protocol stack. Accepted connections will represent new local and remote address and port tuples.

## Topics

### Initializers

- [init(for:using:)](networklistener/init%28for_using_%29-2hkg.md): Create a listener that advertises a service with a protocol stack to use for listening.
- [init(for:using:)](networklistener/init%28for_using_%29-2vh87.md): Create a listener that advertises a service with a protocol stack and parameters to use for listening.

### Instance Properties

- [newConnectionLimit](networklistener/newconnectionlimit.md): Configure the listener’s new connection limit.
- [port](networklistener/port.md): The port that the listener is listening on.
- [service](networklistener/service.md): An optional service to advertise with the listener.

### Instance Methods

- [newConnectionLimit(\_:)](networklistener/newconnectionlimit%28__%29.md): Configure the listener’s new connection limit.
- [onServiceRegistrationUpdate(\_:)](networklistener/onserviceregistrationupdate%28__%29.md): Set a closure to be called when the listener has added or removed a registered service.
- [onStateUpdate(\_:)](networklistener/onstateupdate%28__%29.md): Set a closure to be called when the listener’s state changes.
- [run(\_:)](networklistener/run%28__%29-42k25.md): Conforms when `ApplicationProtocol` conforms to `MultiplexProtocol`. Run the listener and receive incoming multiplexed connections.
- [run(\_:)](networklistener/run%28__%29-4iov3.md): Conforms when `ApplicationProtocol` conforms to `OneToOneProtocol`. Run the listener and receive incoming connections.

### Type Aliases

- [NetworkListener.ServiceRegistrationUpdateHandler](networklistener/serviceregistrationupdatehandler.md)
- [NetworkListener.StateUpdateHandler](networklistener/stateupdatehandler.md)

### Enumerations

- [NetworkListener.ServiceRegistrationChange](networklistener/serviceregistrationchange.md)
- [NetworkListener.State](networklistener/state.md)

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
