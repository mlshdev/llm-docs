> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/socketport/protocol](https://developer.apple.com/documentation/foundation/socketport/protocol)

# protocol (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The protocol that the receiver uses for communication.

## Declaration

```swift
var `protocol`: Int32 { get }
```

## See Also

### Getting Information

- [address](address.md): The receiver’s socket address structure stored inside an [NSData](../nsdata.md) object.
- [protocolFamily](protocolfamily.md): The protocol family that the receiver uses for communication.
- [socket](socket.md): The receiver’s native socket identifier on the platform.
- [socketType](sockettype.md): The receiver’s socket type.

# protocol (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The protocol that the receiver uses for communication.

## Declaration

```objectivec
@property (readonly) int protocol;
```

## See Also

### Getting Information

- [address](address.md): The receiver’s socket address structure stored inside an [NSData](../nsdata.md) object.
- [protocolFamily](protocolfamily.md): The protocol family that the receiver uses for communication.
- [socket](socket.md): The receiver’s native socket identifier on the platform.
- [socketType](sockettype.md): The receiver’s socket type.
