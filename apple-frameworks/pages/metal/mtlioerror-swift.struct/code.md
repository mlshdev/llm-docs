> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlioerror-swift.struct/code](https://developer.apple.com/documentation/metal/mtlioerror-swift.struct/code)

# MTLIOError.Code (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The error codes for creating an input/output file handle.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [MTLIOError.Code.urlInvalid](code/urlinvalid.md): An error code that represents a problem with a file URL.
- [MTLIOError.Code.internal](code/internal.md): An error code that represents a problem internal to the Metal framework.
- [MTLIOError.Code.urlInvalid](code/urlinvalid.md): An error code that represents a problem with a file URL.
- [MTLIOError.Code.internal](code/internal.md): An error code that represents a problem internal to the Metal framework.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### I/O command buffers

- [MTLIOCommandBuffer](../mtliocommandbuffer.md): A command buffer that contains input/output commands that work with files in the file systems and Metal resources.
- [MTLIOFileHandle](../mtliofilehandle.md): Represents a raw or compressed file, such as a resource asset file in your app’s bundle.
- [MTLIOCommandBufferHandler](../mtliocommandbufferhandler.md): A convenience type that defines the signature of an input/output command buffer’s completion handler.
- [MTLIOStatus](../mtliostatus.md): Represents the state of an input/output command buffer.
- [MTLIOErrorDomain](../mtlioerrordomain.md): The domain for input/output command queue errors.

# MTLIOError (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The error codes for creating an input/output file handle.

## Declaration

```objectivec
enum MTLIOError : NSInteger;
```

## Topics

### Error codes

- [MTLIOErrorURLInvalid](code/urlinvalid.md): An error code that represents a problem with a file URL.
- [MTLIOErrorInternal](code/internal.md): An error code that represents a problem internal to the Metal framework.
- [MTLIOErrorURLInvalid](code/urlinvalid.md): An error code that represents a problem with a file URL.
- [MTLIOErrorInternal](code/internal.md): An error code that represents a problem internal to the Metal framework.

## See Also

### I/O command buffers

- [MTLIOCommandBuffer](../mtliocommandbuffer.md): A command buffer that contains input/output commands that work with files in the file systems and Metal resources.
- [MTLIOFileHandle](../mtliofilehandle.md): Represents a raw or compressed file, such as a resource asset file in your app’s bundle.
- [MTLIOCommandBufferHandler](../mtliocommandbufferhandler.md): A convenience type that defines the signature of an input/output command buffer’s completion handler.
- [MTLIOStatus](../mtliostatus.md): Represents the state of an input/output command buffer.
- [MTLIOErrorDomain](../mtlioerrordomain.md): The domain for input/output command queue errors.
