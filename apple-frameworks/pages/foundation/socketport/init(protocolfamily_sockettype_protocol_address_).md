> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/socketport/init(protocolfamily:sockettype:protocol:address:)](https://developer.apple.com/documentation/foundation/socketport/init(protocolfamily:sockettype:protocol:address:))

# init(protocolFamily:socketType:protocol:address:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Initializes the receiver as a local socket with the provided arguments.

## Declaration

```swift
init?(protocolFamily family: Int32, socketType type: Int32, protocol: Int32, address: Data)
```

## Parameters

- `family`: The protocol family for the socket port. Possible values are defined in `<sys/socket.h>`, such as `AF_LOCAL`, `AF_INET`, and `AF_INET6`.
- `type`: The type of socket.
- `protocol`: The specific protocol to use from the protocol family.
- `address`: The family-specific socket address for the receiver copied into an `NSData` object.

<a id="return-value"></a>

## Return Value

A local socket port initialized with the provided arguments.

<a id="Discussion"></a>

## Discussion

The receiver must be added to a run loop before it can accept connections or receive messages. Incoming messages are passed to the receiver’s delegate method handlePortMessage:.

To create a standard TCP/IP socket, use [init(tcpPort:)](init%28tcpport_%29-6hgbo.md).

## See Also

### Creating Instances

- [init()](init%28%29.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`.
- [init(tcpPort:)](init%28tcpport_%29-6hgbo.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`, listening on a specified port number.
- [init(protocolFamily:socketType:protocol:socket:)](init%28protocolfamily_sockettype_protocol_socket_%29.md): Initializes the receiver with a previously created local socket.
- [init(remoteWithTCPPort:host:)](init%28remotewithtcpport_host_%29.md): Initializes the receiver as a TCP/IP socket of type `SOCK_STREAM` that can connect to a remote host on a specified port.
- [init(remoteWithProtocolFamily:socketType:protocol:address:)](init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.

# initWithProtocolFamily:socketType:protocol:address: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Initializes the receiver as a local socket with the provided arguments.

## Declaration

```objectivec
- (instancetype) initWithProtocolFamily:(int) family socketType:(int) type protocol:(int) protocol address:(NSData *) address;
```

## Parameters

- `family`: The protocol family for the socket port. Possible values are defined in `<sys/socket.h>`, such as `AF_LOCAL`, `AF_INET`, and `AF_INET6`.
- `type`: The type of socket.
- `protocol`: The specific protocol to use from the protocol family.
- `address`: The family-specific socket address for the receiver copied into an `NSData` object.

<a id="return-value"></a>

## Return Value

A local socket port initialized with the provided arguments.

<a id="Discussion"></a>

## Discussion

The receiver must be added to a run loop before it can accept connections or receive messages. Incoming messages are passed to the receiver’s delegate method handlePortMessage:.

To create a standard TCP/IP socket, use [initWithTCPPort:](init%28tcpport_%29-6hgbo.md).

## See Also

### Creating Instances

- [init](init%28%29.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`.
- [initWithTCPPort:](init%28tcpport_%29-6hgbo.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`, listening on a specified port number.
- [initWithProtocolFamily:socketType:protocol:socket:](init%28protocolfamily_sockettype_protocol_socket_%29.md): Initializes the receiver with a previously created local socket.
- [initRemoteWithTCPPort:host:](init%28remotewithtcpport_host_%29.md): Initializes the receiver as a TCP/IP socket of type `SOCK_STREAM` that can connect to a remote host on a specified port.
- [initRemoteWithProtocolFamily:socketType:protocol:address:](init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.
