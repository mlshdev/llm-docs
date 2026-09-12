> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliofilehandle](https://developer.apple.com/documentation/metal/mtliofilehandle)

# MTLIOFileHandle (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Represents a raw or compressed file, such as a resource asset file in your app’s bundle.

## Declaration

```swift
protocol MTLIOFileHandle : NSObjectProtocol, Sendable
```

## Topics

### Naming a file handle

- [label](mtliofilehandle/label.md): An optional name for the file that the handle represents.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### I/O command buffers

- [MTLIOCommandBuffer](mtliocommandbuffer.md): A command buffer that contains input/output commands that work with files in the file systems and Metal resources.
- [MTLIOCommandBufferHandler](mtliocommandbufferhandler.md): A convenience type that defines the signature of an input/output command buffer’s completion handler.
- [MTLIOStatus](mtliostatus.md): Represents the state of an input/output command buffer.
- [MTLIOError.Code](mtlioerror-swift.struct/code.md): The error codes for creating an input/output file handle.
- [MTLIOErrorDomain](mtlioerrordomain.md): The domain for input/output command queue errors.

# MTLIOFileHandle (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Represents a raw or compressed file, such as a resource asset file in your app’s bundle.

## Declaration

```objectivec
@protocol MTLIOFileHandle <NSObject>
```

## Topics

### Naming a file handle

- [label](mtliofilehandle/label.md): An optional name for the file that the handle represents.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### I/O command buffers

- [MTLIOCommandBuffer](mtliocommandbuffer.md): A command buffer that contains input/output commands that work with files in the file systems and Metal resources.
- [MTLIOCommandBufferHandler](mtliocommandbufferhandler.md): A convenience type that defines the signature of an input/output command buffer’s completion handler.
- [MTLIOStatus](mtliostatus.md): Represents the state of an input/output command buffer.
- [MTLIOError](mtlioerror-swift.struct/code.md): The error codes for creating an input/output file handle.
- [MTLIOErrorDomain](mtlioerrordomain.md): The domain for input/output command queue errors.
