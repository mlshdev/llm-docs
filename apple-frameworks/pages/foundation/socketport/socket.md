> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/socketport/socket

# socket (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The receiver’s native socket identifier on the platform.

## Declaration

```swift
var socket: SocketNativeHandle { get }
```

<a id="Discussion"></a>

## Discussion

In macOS, the native socket identifier is an integer file descriptor.

## See Also

### Getting Information

- [address](address.md): The receiver’s socket address structure stored inside an [NSData](../nsdata.md) object.
- [protocol](protocol.md): The protocol that the receiver uses for communication.
- [protocolFamily](protocolfamily.md): The protocol family that the receiver uses for communication.
- [socketType](sockettype.md): The receiver’s socket type.

# socket (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The receiver’s native socket identifier on the platform.

## Declaration

```objectivec
@property (readonly) NSSocketNativeHandle socket;
```

<a id="Discussion"></a>

## Discussion

In macOS, the native socket identifier is an integer file descriptor.

## See Also

### Getting Information

- [address](address.md): The receiver’s socket address structure stored inside an [NSData](../nsdata.md) object.
- [protocol](protocol.md): The protocol that the receiver uses for communication.
- [protocolFamily](protocolfamily.md): The protocol family that the receiver uses for communication.
- [socketType](sockettype.md): The receiver’s socket type.
