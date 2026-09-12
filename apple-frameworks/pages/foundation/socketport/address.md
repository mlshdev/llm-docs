> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/socketport/address](https://developer.apple.com/documentation/foundation/socketport/address)

# address (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The receiver’s socket address structure stored inside an [NSData](../nsdata.md) object.

## Declaration

```swift
var address: Data { get }
```

## See Also

### Related Documentation

- [init(remoteWithProtocolFamily:socketType:protocol:address:)](init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.
- [init(protocolFamily:socketType:protocol:address:)](init%28protocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a local socket with the provided arguments.

### Getting Information

- [protocol](protocol.md): The protocol that the receiver uses for communication.
- [protocolFamily](protocolfamily.md): The protocol family that the receiver uses for communication.
- [socket](socket.md): The receiver’s native socket identifier on the platform.
- [socketType](sockettype.md): The receiver’s socket type.

# address (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The receiver’s socket address structure stored inside an [NSData](../nsdata.md) object.

## Declaration

```objectivec
@property (copy, readonly) NSData * address;
```

## See Also

### Related Documentation

- [initRemoteWithProtocolFamily:socketType:protocol:address:](init%28remotewithprotocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a remote socket with the provided arguments.
- [initWithProtocolFamily:socketType:protocol:address:](init%28protocolfamily_sockettype_protocol_address_%29.md): Initializes the receiver as a local socket with the provided arguments.

### Getting Information

- [protocol](protocol.md): The protocol that the receiver uses for communication.
- [protocolFamily](protocolfamily.md): The protocol family that the receiver uses for communication.
- [socket](socket.md): The receiver’s native socket identifier on the platform.
- [socketType](sockettype.md): The receiver’s socket type.
