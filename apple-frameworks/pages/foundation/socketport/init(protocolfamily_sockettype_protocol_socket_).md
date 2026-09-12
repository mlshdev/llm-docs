> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/socketport/init(protocolfamily:sockettype:protocol:socket:)](https://developer.apple.com/documentation/foundation/socketport/init(protocolfamily:sockettype:protocol:socket:))

# init(protocolFamily:socketType:protocol:socket:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Initializes the receiver with a previously created local socket.

## Declaration

```swift
init?(protocolFamily family: Int32, socketType type: Int32, protocol: Int32, socket sock: SocketNativeHandle)
```

## Parameters

- `family`: The protocol family for the provided socket. Possible values are defined in `<sys/socket.h>`, such as `AF_LOCAL`, `AF_INET`, and `AF_INET6`.
- `type`: The type of the provided socket.
- `protocol`: The specific protocol the provided socket uses.
- `sock`: The previously created socket.

<a id="return-value"></a>

## Return Value

A local socket port initialized with the provided socket.

## See Also

### Creating Instances

- [init()](init%28%29.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`.
- [init(tcpPort:)](init%28tcpport_%29-6hgbo.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`, listening on a specified port number.
- [init(protocolFamily:socketType:protocol:address:)](init%28protocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a local socket with the provided arguments.
- [init(remoteWithTCPPort:host:)](init%28remotewithtcpport_host_%29.md): Initializes the receiver as a TCP/IP socket of type `SOCK_STREAM` that can connect to a remote host on a specified port.
- [init(remoteWithProtocolFamily:socketType:protocol:address:)](init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.

# initWithProtocolFamily:socketType:protocol:socket: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Initializes the receiver with a previously created local socket.

## Declaration

```objectivec
- (instancetype) initWithProtocolFamily:(int) family socketType:(int) type protocol:(int) protocol socket:(NSSocketNativeHandle) sock;
```

## Parameters

- `family`: The protocol family for the provided socket. Possible values are defined in `<sys/socket.h>`, such as `AF_LOCAL`, `AF_INET`, and `AF_INET6`.
- `type`: The type of the provided socket.
- `protocol`: The specific protocol the provided socket uses.
- `sock`: The previously created socket.

<a id="return-value"></a>

## Return Value

A local socket port initialized with the provided socket.

## See Also

### Creating Instances

- [init](init%28%29.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`.
- [initWithTCPPort:](init%28tcpport_%29-6hgbo.md): Initializes the receiver as a local TCP/IP socket of type `SOCK_STREAM`, listening on a specified port number.
- [initWithProtocolFamily:socketType:protocol:address:](init%28protocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a local socket with the provided arguments.
- [initRemoteWithTCPPort:host:](init%28remotewithtcpport_host_%29.md): Initializes the receiver as a TCP/IP socket of type `SOCK_STREAM` that can connect to a remote host on a specified port.
- [initRemoteWithProtocolFamily:socketType:protocol:address:](init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.
