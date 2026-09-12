> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/socketport/init(remotewithtcpport:host:)](https://developer.apple.com/documentation/foundation/socketport/init(remotewithtcpport:host:))

# init(remoteWithTCPPort:host:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Initializes the receiver as a TCP/IP socket of type `SOCK_STREAM` that can connect to a remote host on a specified port.

## Declaration

```swift
convenience init?(remoteWithTCPPort port: UInt16, host hostName: String?)
```

## Parameters

- `port`: The port to connect to.
- `hostName`: The host name to connect to. `hostName` may be either a host name or an IPv4-style address.

<a id="return-value"></a>

## Return Value

A TCP/IP socket port of type `SOCK_STREAM` that can connect to the remote host `hostName` on port `port`.

<a id="Discussion"></a>

## Discussion

A connection is not opened to the remote host until data is sent.

## See Also

### Creating Instances

- [init()](init%28%29.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`.
- [init(tcpPort:)](init%28tcpport_%29-6hgbo.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`, listening on a specified port number.
- [init(protocolFamily:socketType:protocol:address:)](init%28protocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a local socket with the provided arguments.
- [init(protocolFamily:socketType:protocol:socket:)](init%28protocolfamily_sockettype_protocol_socket_%29.md): Initializes the receiver with a previously created local socket.
- [init(remoteWithProtocolFamily:socketType:protocol:address:)](init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.

# initRemoteWithTCPPort:host: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Initializes the receiver as a TCP/IP socket of type `SOCK_STREAM` that can connect to a remote host on a specified port.

## Declaration

```objectivec
- (instancetype) initRemoteWithTCPPort:(unsigned short) port host:(NSString *) hostName;
```

## Parameters

- `port`: The port to connect to.
- `hostName`: The host name to connect to. `hostName` may be either a host name or an IPv4-style address.

<a id="return-value"></a>

## Return Value

A TCP/IP socket port of type `SOCK_STREAM` that can connect to the remote host `hostName` on port `port`.

<a id="Discussion"></a>

## Discussion

A connection is not opened to the remote host until data is sent.

## See Also

### Creating Instances

- [init](init%28%29.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`.
- [initWithTCPPort:](init%28tcpport_%29-6hgbo.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`, listening on a specified port number.
- [initWithProtocolFamily:socketType:protocol:address:](init%28protocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a local socket with the provided arguments.
- [initWithProtocolFamily:socketType:protocol:socket:](init%28protocolfamily_sockettype_protocol_socket_%29.md): Initializes the receiver with a previously created local socket.
- [initRemoteWithProtocolFamily:socketType:protocol:address:](init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.
