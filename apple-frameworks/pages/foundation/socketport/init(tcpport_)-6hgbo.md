> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/socketport/init(tcpport:)-6hgbo](https://developer.apple.com/documentation/foundation/socketport/init(tcpport:)-6hgbo)

# init(tcpPort:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`, listening on a specified port number.

## Declaration

```swift
convenience init?(tcpPort port: UInt16)
```

## Parameters

- `port`: The port number for the newly created socket port to listen on. If `port` is 0, the system will assign a port number.

<a id="return-value"></a>

## Return Value

An initialized local TCP/IP socket of type `SOCK_STREAM`, listening on port `port`.

<a id="Discussion"></a>

## Discussion

This method creates an IPv4 port, not an IPv6 port.

## See Also

### Creating Instances

- [init()](init%28%29.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`.
- [init(protocolFamily:socketType:protocol:address:)](init%28protocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a local socket with the provided arguments.
- [init(protocolFamily:socketType:protocol:socket:)](init%28protocolfamily_sockettype_protocol_socket_%29.md): Initializes the receiver with a previously created local socket.
- [init(remoteWithTCPPort:host:)](init%28remotewithtcpport_host_%29.md): Initializes the receiver as a TCP/IP socket of type `SOCK_STREAM` that can connect to a remote host on a specified port.
- [init(remoteWithProtocolFamily:socketType:protocol:address:)](init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.

# initWithTCPPort: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`, listening on a specified port number.

## Declaration

```objectivec
- (instancetype) initWithTCPPort:(unsigned short) port;
```

## Parameters

- `port`: The port number for the newly created socket port to listen on. If `port` is 0, the system will assign a port number.

<a id="return-value"></a>

## Return Value

An initialized local TCP/IP socket of type `SOCK_STREAM`, listening on port `port`.

<a id="Discussion"></a>

## Discussion

This method creates an IPv4 port, not an IPv6 port.

## See Also

### Creating Instances

- [init](init%28%29.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`.
- [initWithProtocolFamily:socketType:protocol:address:](init%28protocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a local socket with the provided arguments.
- [initWithProtocolFamily:socketType:protocol:socket:](init%28protocolfamily_sockettype_protocol_socket_%29.md): Initializes the receiver with a previously created local socket.
- [initRemoteWithTCPPort:host:](init%28remotewithtcpport_host_%29.md): Initializes the receiver as a TCP/IP socket of type `SOCK_STREAM` that can connect to a remote host on a specified port.
- [initRemoteWithProtocolFamily:socketType:protocol:address:](init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.
