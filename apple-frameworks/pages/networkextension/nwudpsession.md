> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsession](https://developer.apple.com/documentation/networkextension/nwudpsession)

# NWUDPSession (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An object to manage a UDP session to a network endpoint.

> Use the [nw_connection_t](../network/nw_connection_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```swift
class NWUDPSession
```

<a id="overview"></a>

## Overview

Since UDP does not include a handshake with the remote endpoint as part of its protocol, it is up to the client of the UDP session to provide feedback on the viability of the current endpoint. If a session is opened to a hostname, the system will resolve that hostname into potentially several IP addresses. Once the session state is `NWUDPSessionStateReady`, the client should try to write and read datagrams. If there is no response from the remote endpoint, the client can try the next address that was resolved using `tryNextResolvedEndpoint`.

## Topics

### Monitoring the session state

- [state](nwudpsession/state.md): Deprecated. The current state of the UDP session.
- [NWUDPSessionState](nwudpsessionstate.md): Deprecated.
- [isViable](nwudpsession/isviable.md): Deprecated. The viability of a UDP session represents whether or not data can be transferred.

### Selecting remote endpoints

- [resolvedEndpoint](nwudpsession/resolvedendpoint.md): Deprecated. The currently targeted remote endpoint.
- [tryNextResolvedEndpoint()](nwudpsession/trynextresolvedendpoint%28%29.md): Deprecated. Mark the current value of resolvedEndpoint as unusable, and try to switch to the next available endpoint.

### Transferring data

- [setReadHandler(\_:maxDatagrams:)](nwudpsession/setreadhandler%28__maxdatagrams_%29.md): Deprecated. Set a read handler for datagrams.
- [writeDatagram(\_:completionHandler:)](nwudpsession/writedatagram%28__completionhandler_%29.md): Deprecated. Write a single datagram.
- [writeMultipleDatagrams(\_:completionHandler:)](nwudpsession/writemultipledatagrams%28__completionhandler_%29.md): Deprecated. Write multiple datagrams.
- [maximumDatagramLength](nwudpsession/maximumdatagramlength.md): Deprecated. The maximum size of a datagram to be written currently.

### Canceling the session

- [cancel()](nwudpsession/cancel%28%29.md): Deprecated. Cancel the session.

### Responding to network changes

- [hasBetterPath](nwudpsession/hasbetterpath.md): Deprecated. If a session has a better path, new session would use a different interface.
- [init(upgradeFor:)](nwudpsession/init%28upgradefor_%29.md): Deprecated. This convenience initializer can be used to create a new session based on the original session’s endpoint and parameters.

### Getting session properties

- [endpoint](nwudpsession/endpoint.md): Deprecated. The destination endpoint with which this session was created.
- [currentPath](nwudpsession/currentpath.md): Deprecated. The current evaluated path for the session’s [resolvedEndpoint](nwudpsession/resolvedendpoint.md) property.

### Initializers

- [init(upgradeForSession:)](nwudpsession/init%28upgradeforsession_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# NWUDPSession (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An object to manage a UDP session to a network endpoint.

> Use the [nw_connection_t](../network/nw_connection_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```objectivec
@interface NWUDPSession : NSObject
```

<a id="overview"></a>

## Overview

Since UDP does not include a handshake with the remote endpoint as part of its protocol, it is up to the client of the UDP session to provide feedback on the viability of the current endpoint. If a session is opened to a hostname, the system will resolve that hostname into potentially several IP addresses. Once the session state is `NWUDPSessionStateReady`, the client should try to write and read datagrams. If there is no response from the remote endpoint, the client can try the next address that was resolved using `tryNextResolvedEndpoint`.

## Topics

### Monitoring the session state

- [state](nwudpsession/state.md): Deprecated. The current state of the UDP session.
- [NWUDPSessionState](nwudpsessionstate.md): Deprecated.
- [viable](nwudpsession/isviable.md): Deprecated. The viability of a UDP session represents whether or not data can be transferred.

### Selecting remote endpoints

- [resolvedEndpoint](nwudpsession/resolvedendpoint.md): Deprecated. The currently targeted remote endpoint.
- [tryNextResolvedEndpoint](nwudpsession/trynextresolvedendpoint%28%29.md): Deprecated. Mark the current value of resolvedEndpoint as unusable, and try to switch to the next available endpoint.

### Transferring data

- [setReadHandler:maxDatagrams:](nwudpsession/setreadhandler%28__maxdatagrams_%29.md): Deprecated. Set a read handler for datagrams.
- [writeDatagram:completionHandler:](nwudpsession/writedatagram%28__completionhandler_%29.md): Deprecated. Write a single datagram.
- [writeMultipleDatagrams:completionHandler:](nwudpsession/writemultipledatagrams%28__completionhandler_%29.md): Deprecated. Write multiple datagrams.
- [maximumDatagramLength](nwudpsession/maximumdatagramlength.md): Deprecated. The maximum size of a datagram to be written currently.

### Canceling the session

- [cancel](nwudpsession/cancel%28%29.md): Deprecated. Cancel the session.

### Responding to network changes

- [hasBetterPath](nwudpsession/hasbetterpath.md): Deprecated. If a session has a better path, new session would use a different interface.
- [initWithUpgradeForSession:](nwudpsession/init%28upgradefor_%29.md): Deprecated. This convenience initializer can be used to create a new session based on the original session’s endpoint and parameters.

### Getting session properties

- [endpoint](nwudpsession/endpoint.md): Deprecated. The destination endpoint with which this session was created.
- [currentPath](nwudpsession/currentpath.md): Deprecated. The current evaluated path for the session’s [resolvedEndpoint](nwudpsession/resolvedendpoint.md) property.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
