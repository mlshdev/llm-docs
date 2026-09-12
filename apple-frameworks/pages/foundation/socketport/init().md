> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/socketport/init()](https://developer.apple.com/documentation/foundation/socketport/init())

# init() (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`.

## Declaration

```swift
convenience init()
```

<a id="return-value"></a>

## Return Value

An initialized local TCP/IP socket port of type `SOCK_STREAM`.

<a id="Discussion"></a>

## Discussion

The port number is selected by the system.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

### Creating Instances

- [init(tcpPort:)](init%28tcpport_%29-6hgbo.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`, listening on a specified port number.
- [init(protocolFamily:socketType:protocol:address:)](init%28protocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a local socket with the provided arguments.
- [init(protocolFamily:socketType:protocol:socket:)](init%28protocolfamily_sockettype_protocol_socket_%29.md): Initializes the receiver with a previously created local socket.
- [init(remoteWithTCPPort:host:)](init%28remotewithtcpport_host_%29.md): Initializes the receiver as a TCP/IP socket of type `SOCK_STREAM` that can connect to a remote host on a specified port.
- [init(remoteWithProtocolFamily:socketType:protocol:address:)](init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.

# init (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An initialized local TCP/IP socket port of type `SOCK_STREAM`.

<a id="Discussion"></a>

## Discussion

The port number is selected by the system.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

### Creating Instances

- [initWithTCPPort:](init%28tcpport_%29-6hgbo.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`, listening on a specified port number.
- [initWithProtocolFamily:socketType:protocol:address:](init%28protocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a local socket with the provided arguments.
- [initWithProtocolFamily:socketType:protocol:socket:](init%28protocolfamily_sockettype_protocol_socket_%29.md): Initializes the receiver with a previously created local socket.
- [initRemoteWithTCPPort:host:](init%28remotewithtcpport_host_%29.md): Initializes the receiver as a TCP/IP socket of type `SOCK_STREAM` that can connect to a remote host on a specified port.
- [initRemoteWithProtocolFamily:socketType:protocol:address:](init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.
