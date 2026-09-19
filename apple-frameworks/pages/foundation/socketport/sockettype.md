> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/socketport/sockettype

# socketType (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The receiver’s socket type.

## Declaration

```swift
var socketType: Int32 { get }
```

## See Also

### Getting Information

- [address](address.md): The receiver’s socket address structure stored inside an [NSData](../nsdata.md) object.
- [protocol](protocol.md): The protocol that the receiver uses for communication.
- [protocolFamily](protocolfamily.md): The protocol family that the receiver uses for communication.
- [socket](socket.md): The receiver’s native socket identifier on the platform.

# socketType (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The receiver’s socket type.

## Declaration

```objectivec
@property (readonly) int socketType;
```

## See Also

### Getting Information

- [address](address.md): The receiver’s socket address structure stored inside an [NSData](../nsdata.md) object.
- [protocol](protocol.md): The protocol that the receiver uses for communication.
- [protocolFamily](protocolfamily.md): The protocol family that the receiver uses for communication.
- [socket](socket.md): The receiver’s native socket identifier on the platform.
