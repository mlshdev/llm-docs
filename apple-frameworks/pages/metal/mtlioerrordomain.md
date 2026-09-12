> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlioerrordomain](https://developer.apple.com/documentation/metal/mtlioerrordomain)

# MTLIOErrorDomain (Swift)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The domain for input/output command queue errors.

## Declaration

```swift
let MTLIOErrorDomain: String
```

## See Also

### I/O command buffers

- [MTLIOCommandBuffer](mtliocommandbuffer.md): A command buffer that contains input/output commands that work with files in the file systems and Metal resources.
- [MTLIOFileHandle](mtliofilehandle.md): Represents a raw or compressed file, such as a resource asset file in your app’s bundle.
- [MTLIOCommandBufferHandler](mtliocommandbufferhandler.md): A convenience type that defines the signature of an input/output command buffer’s completion handler.
- [MTLIOStatus](mtliostatus.md): Represents the state of an input/output command buffer.
- [MTLIOError.Code](mtlioerror-swift.struct/code.md): The error codes for creating an input/output file handle.

# MTLIOErrorDomain (Objective-C)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The domain for input/output command queue errors.

## Declaration

```objectivec
extern NSErrorDomain const MTLIOErrorDomain;
```

## See Also

### I/O command buffers

- [MTLIOCommandBuffer](mtliocommandbuffer.md): A command buffer that contains input/output commands that work with files in the file systems and Metal resources.
- [MTLIOFileHandle](mtliofilehandle.md): Represents a raw or compressed file, such as a resource asset file in your app’s bundle.
- [MTLIOCommandBufferHandler](mtliocommandbufferhandler.md): A convenience type that defines the signature of an input/output command buffer’s completion handler.
- [MTLIOStatus](mtliostatus.md): Represents the state of an input/output command buffer.
- [MTLIOError](mtlioerror-swift.struct/code.md): The error codes for creating an input/output file handle.
