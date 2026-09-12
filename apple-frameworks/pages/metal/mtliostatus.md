> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliostatus](https://developer.apple.com/documentation/metal/mtliostatus)

# MTLIOStatus (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Represents the state of an input/output command buffer.

## Declaration

```swift
enum MTLIOStatus
```

## Topics

### I/O command queue states

- [MTLIOStatus.pending](mtliostatus/pending.md): Indicates the GPU hasn’t finished executing the input/output command buffer.
- [MTLIOStatus.complete](mtliostatus/complete.md): Indicates the GPU has successfully finished executing the input/output command buffer.
- [MTLIOStatus.cancelled](mtliostatus/cancelled.md): Indicates the GPU has successfully abandoned the input/output command buffer.
- [MTLIOStatus.error](mtliostatus/error.md): Indicates the GPU experienced a problem with the input/output command buffer.

### Initializers

- [init(rawValue:)](mtliostatus/init%28rawvalue_%29.md)

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

- [MTLIOCommandBuffer](mtliocommandbuffer.md): A command buffer that contains input/output commands that work with files in the file systems and Metal resources.
- [MTLIOFileHandle](mtliofilehandle.md): Represents a raw or compressed file, such as a resource asset file in your app’s bundle.
- [MTLIOCommandBufferHandler](mtliocommandbufferhandler.md): A convenience type that defines the signature of an input/output command buffer’s completion handler.
- [MTLIOError.Code](mtlioerror-swift.struct/code.md): The error codes for creating an input/output file handle.
- [MTLIOErrorDomain](mtlioerrordomain.md): The domain for input/output command queue errors.

# MTLIOStatus (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Represents the state of an input/output command buffer.

## Declaration

```objectivec
enum MTLIOStatus : NSInteger;
```

## Topics

### I/O command queue states

- [MTLIOStatusPending](mtliostatus/pending.md): Indicates the GPU hasn’t finished executing the input/output command buffer.
- [MTLIOStatusComplete](mtliostatus/complete.md): Indicates the GPU has successfully finished executing the input/output command buffer.
- [MTLIOStatusCancelled](mtliostatus/cancelled.md): Indicates the GPU has successfully abandoned the input/output command buffer.
- [MTLIOStatusError](mtliostatus/error.md): Indicates the GPU experienced a problem with the input/output command buffer.

## See Also

### I/O command buffers

- [MTLIOCommandBuffer](mtliocommandbuffer.md): A command buffer that contains input/output commands that work with files in the file systems and Metal resources.
- [MTLIOFileHandle](mtliofilehandle.md): Represents a raw or compressed file, such as a resource asset file in your app’s bundle.
- [MTLIOCommandBufferHandler](mtliocommandbufferhandler.md): A convenience type that defines the signature of an input/output command buffer’s completion handler.
- [MTLIOError](mtlioerror-swift.struct/code.md): The error codes for creating an input/output file handle.
- [MTLIOErrorDomain](mtlioerrordomain.md): The domain for input/output command queue errors.
