> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/socketport/protocolfamily](https://developer.apple.com/documentation/foundation/socketport/protocolfamily)

# protocolFamily (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The protocol family that the receiver uses for communication.

## Declaration

```swift
var protocolFamily: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Possible values are defined in `<sys/socket.h>`, such as `AF_LOCAL`, `AF_INET`, and `AF_INET6`.

## See Also

### Getting Information

- [address](address.md): The receiver’s socket address structure stored inside an [NSData](../nsdata.md) object.
- [protocol](protocol.md): The protocol that the receiver uses for communication.
- [socket](socket.md): The receiver’s native socket identifier on the platform.
- [socketType](sockettype.md): The receiver’s socket type.

# protocolFamily (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The protocol family that the receiver uses for communication.

## Declaration

```objectivec
@property (readonly) int protocolFamily;
```

<a id="Discussion"></a>

## Discussion

Possible values are defined in `<sys/socket.h>`, such as `AF_LOCAL`, `AF_INET`, and `AF_INET6`.

## See Also

### Getting Information

- [address](address.md): The receiver’s socket address structure stored inside an [NSData](../nsdata.md) object.
- [protocol](protocol.md): The protocol that the receiver uses for communication.
- [socket](socket.md): The receiver’s native socket identifier on the platform.
- [socketType](sockettype.md): The receiver’s socket type.
