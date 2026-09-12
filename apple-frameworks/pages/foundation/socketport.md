> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/socketport](https://developer.apple.com/documentation/foundation/socketport)

# SocketPort (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.0+

A port that represents a BSD socket.

## Declaration

```swift
class SocketPort
```

<a id="overview"></a>

## Overview

A [SocketPort](socketport.md) object can be used as an endpoint for distributed object connections. Companion classes, [NSMachPort](nsmachport.md) and [MessagePort](messageport.md), allow for local (on the same machine) communication only. The [SocketPort](socketport.md) class allows for both local and remote communication, but may be more expensive than the others for the local case.

> **Note**

>  The [SocketPort](socketport.md) class conforms to the [NSCoding](nscoding.md) protocol, but only supports coding by an [NSPortCoder](nsportcoder.md). [Port](port.md) and its other subclasses do not support archiving.

## Topics

### Creating Instances

- [init()](socketport/init%28%29.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`.
- [init(tcpPort:)](socketport/init%28tcpport_%29-6hgbo.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`, listening on a specified port number.
- [init(protocolFamily:socketType:protocol:address:)](socketport/init%28protocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a local socket with the provided arguments.
- [init(protocolFamily:socketType:protocol:socket:)](socketport/init%28protocolfamily_sockettype_protocol_socket_%29.md): Initializes the receiver with a previously created local socket.
- [init(remoteWithTCPPort:host:)](socketport/init%28remotewithtcpport_host_%29.md): Initializes the receiver as a TCP/IP socket of type `SOCK_STREAM` that can connect to a remote host on a specified port.
- [init(remoteWithProtocolFamily:socketType:protocol:address:)](socketport/init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.

### Getting Information

- [address](socketport/address.md): The receiver’s socket address structure stored inside an [NSData](nsdata.md) object.
- [protocol](socketport/protocol.md): The protocol that the receiver uses for communication.
- [protocolFamily](socketport/protocolfamily.md): The protocol family that the receiver uses for communication.
- [socket](socketport/socket.md): The receiver’s native socket identifier on the platform.
- [socketType](socketport/sockettype.md): The receiver’s socket type.

### Initializers

- [init(TCPPort:)](socketport/init%28tcpport_%29-17uiq.md)

## Relationships

### Inherits From

- [Port](port.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sockets

- [Host](host.md): Deprecated. A representation of an individual host on the network.
- [Port](port.md): An abstract class that represents a communication channel.

# NSSocketPort (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.0+

A port that represents a BSD socket.

## Declaration

```objectivec
@interface NSSocketPort : NSPort
```

<a id="overview"></a>

## Overview

A [NSSocketPort](socketport.md) object can be used as an endpoint for distributed object connections. Companion classes, [NSMachPort](nsmachport.md) and [NSMessagePort](messageport.md), allow for local (on the same machine) communication only. The [NSSocketPort](socketport.md) class allows for both local and remote communication, but may be more expensive than the others for the local case.

> **Note**

>  The [NSSocketPort](socketport.md) class conforms to the [NSCoding](nscoding.md) protocol, but only supports coding by an [NSPortCoder](nsportcoder.md). [NSPort](port.md) and its other subclasses do not support archiving.

## Topics

### Creating Instances

- [init](socketport/init%28%29.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`.
- [initWithTCPPort:](socketport/init%28tcpport_%29-6hgbo.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`, listening on a specified port number.
- [initWithProtocolFamily:socketType:protocol:address:](socketport/init%28protocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a local socket with the provided arguments.
- [initWithProtocolFamily:socketType:protocol:socket:](socketport/init%28protocolfamily_sockettype_protocol_socket_%29.md): Initializes the receiver with a previously created local socket.
- [initRemoteWithTCPPort:host:](socketport/init%28remotewithtcpport_host_%29.md): Initializes the receiver as a TCP/IP socket of type `SOCK_STREAM` that can connect to a remote host on a specified port.
- [initRemoteWithProtocolFamily:socketType:protocol:address:](socketport/init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.

### Getting Information

- [address](socketport/address.md): The receiver’s socket address structure stored inside an [NSData](nsdata.md) object.
- [protocol](socketport/protocol.md): The protocol that the receiver uses for communication.
- [protocolFamily](socketport/protocolfamily.md): The protocol family that the receiver uses for communication.
- [socket](socketport/socket.md): The receiver’s native socket identifier on the platform.
- [socketType](socketport/sockettype.md): The receiver’s socket type.

## Relationships

### Inherits From

- [NSPort](port.md)

## See Also

### Sockets

- [NSHost](host.md): Deprecated. A representation of an individual host on the network.
- [NSPort](port.md): An abstract class that represents a communication channel.
