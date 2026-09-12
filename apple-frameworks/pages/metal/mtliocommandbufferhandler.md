> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbufferhandler](https://developer.apple.com/documentation/metal/mtliocommandbufferhandler)

# MTLIOCommandBufferHandler (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A convenience type that defines the signature of an input/output command buffer’s completion handler.

## Declaration

```swift
typealias MTLIOCommandBufferHandler = @Sendable (any MTLIOCommandBuffer) -> Void
```

## Parameters

- `inputOutputCommandBuffer`: The [MTLIOCommandBuffer](mtliocommandbuffer.md) instance that has finished executing is calling your completion handler.

## See Also

### I/O command buffers

- [MTLIOCommandBuffer](mtliocommandbuffer.md): A command buffer that contains input/output commands that work with files in the file systems and Metal resources.
- [MTLIOFileHandle](mtliofilehandle.md): Represents a raw or compressed file, such as a resource asset file in your app’s bundle.
- [MTLIOStatus](mtliostatus.md): Represents the state of an input/output command buffer.
- [MTLIOError.Code](mtlioerror-swift.struct/code.md): The error codes for creating an input/output file handle.
- [MTLIOErrorDomain](mtlioerrordomain.md): The domain for input/output command queue errors.

# MTLIOCommandBufferHandler (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A convenience type that defines the signature of an input/output command buffer’s completion handler.

## Declaration

```objectivec
typedef void (^)(id<MTLIOCommandBuffer>) MTLIOCommandBufferHandler;
```

## Parameters

- `inputOutputCommandBuffer`: The [MTLIOCommandBuffer](mtliocommandbuffer.md) instance that has finished executing is calling your completion handler.

## See Also

### I/O command buffers

- [MTLIOCommandBuffer](mtliocommandbuffer.md): A command buffer that contains input/output commands that work with files in the file systems and Metal resources.
- [MTLIOFileHandle](mtliofilehandle.md): Represents a raw or compressed file, such as a resource asset file in your app’s bundle.
- [MTLIOStatus](mtliostatus.md): Represents the state of an input/output command buffer.
- [MTLIOError](mtlioerror-swift.struct/code.md): The error codes for creating an input/output file handle.
- [MTLIOErrorDomain](mtlioerrordomain.md): The domain for input/output command queue errors.
