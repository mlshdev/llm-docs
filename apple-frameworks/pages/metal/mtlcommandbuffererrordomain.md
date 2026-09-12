> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffererrordomain](https://developer.apple.com/documentation/metal/mtlcommandbuffererrordomain)

# MTLCommandBufferErrorDomain (Swift)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The domain for Metal command buffer errors.

## Declaration

```swift
let MTLCommandBufferErrorDomain: String
```

# MTLCommandBufferErrorDomain (Objective-C)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The domain for Metal command buffer errors.

## Declaration

```objectivec
extern NSErrorDomain const MTLCommandBufferErrorDomain;
```

## See Also

### Submitting work to a GPU

- [Setting up a command structure](setting-up-a-command-structure.md): Discover how Metal executes commands on a GPU.
- [MTLCommandQueue](mtlcommandqueue.md): An instance you use to create, submit, and schedule command buffers to a specific GPU device to run the commands within those buffers.
- [MTLCommandQueueDescriptor](mtlcommandqueuedescriptor.md): A configuration that customizes the behavior for a new command queue.
- [MTLCommandBuffer](mtlcommandbuffer.md): A container that stores a sequence of GPU commands that you encode into it.
- [MTLCommandBufferDescriptor](mtlcommandbufferdescriptor.md): A configuration that customizes the behavior for a new command buffer.
- [MTLCommandBufferError](mtlcommandbuffererror-swift.struct/code.md): Error codes that indicate why a GPU is unable to finish running a command buffer.
- [MTLCommandEncoder](mtlcommandencoder.md): An encoder that writes GPU commands into a command buffer.
