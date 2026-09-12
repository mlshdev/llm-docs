> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandqueuedescriptor](https://developer.apple.com/documentation/metal/mtlcommandqueuedescriptor)

# MTLCommandQueueDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A configuration that customizes the behavior for a new command queue.

## Declaration

```swift
class MTLCommandQueueDescriptor
```

## Topics

### Instance Properties

- [logState](mtlcommandqueuedescriptor/logstate.md): The shader logging configuration that the command queue uses.
- [maxCommandBufferCount](mtlcommandqueuedescriptor/maxcommandbuffercount.md): An integer that sets the maximum number of uncompleted command buffers the queue can allow.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Submitting work to a GPU with Metal

- [Setting up a command structure](setting-up-a-command-structure.md): Discover how Metal executes commands on a GPU.
- [MTLCommandQueue](mtlcommandqueue.md): An instance you use to create, submit, and schedule command buffers to a specific GPU device to run the commands within those buffers.
- [MTLCommandBuffer](mtlcommandbuffer.md): A container that stores a sequence of GPU commands that you encode into it.
- [MTLCommandBufferDescriptor](mtlcommandbufferdescriptor.md): A configuration that customizes the behavior for a new command buffer.
- [MTLCommandBufferError](mtlcommandbuffererror-swift.struct.md): The command buffer error codes that indicate why the GPU doesn’t finish executing a command buffer.
- [MTLCommandEncoder](mtlcommandencoder.md): An encoder that writes GPU commands into a command buffer.

# MTLCommandQueueDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A configuration that customizes the behavior for a new command queue.

## Declaration

```objectivec
@interface MTLCommandQueueDescriptor : NSObject
```

## Topics

### Instance Properties

- [logState](mtlcommandqueuedescriptor/logstate.md): The shader logging configuration that the command queue uses.
- [maxCommandBufferCount](mtlcommandqueuedescriptor/maxcommandbuffercount.md): An integer that sets the maximum number of uncompleted command buffers the queue can allow.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Submitting work to a GPU

- [Setting up a command structure](setting-up-a-command-structure.md): Discover how Metal executes commands on a GPU.
- [MTLCommandQueue](mtlcommandqueue.md): An instance you use to create, submit, and schedule command buffers to a specific GPU device to run the commands within those buffers.
- [MTLCommandBuffer](mtlcommandbuffer.md): A container that stores a sequence of GPU commands that you encode into it.
- [MTLCommandBufferDescriptor](mtlcommandbufferdescriptor.md): A configuration that customizes the behavior for a new command buffer.
- [MTLCommandBufferErrorDomain](mtlcommandbuffererrordomain.md): The domain for Metal command buffer errors.
- [MTLCommandBufferError](mtlcommandbuffererror-swift.struct/code.md): Error codes that indicate why a GPU is unable to finish running a command buffer.
- [MTLCommandEncoder](mtlcommandencoder.md): An encoder that writes GPU commands into a command buffer.
