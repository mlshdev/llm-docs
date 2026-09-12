> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbufferdescriptor](https://developer.apple.com/documentation/metal/mtlcommandbufferdescriptor)

# MTLCommandBufferDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A configuration that customizes the behavior for a new command buffer.

## Declaration

```swift
class MTLCommandBufferDescriptor
```

<a id="overview"></a>

## Overview

Create a command buffer with a custom configuration by creating an [MTLCommandBufferDescriptor](mtlcommandbufferdescriptor.md) instance and passing it to an [MTLCommandQueue](mtlcommandqueue.md) instance’s [makeCommandBuffer(descriptor:)](mtlcommandqueue/makecommandbuffer%28descriptor_%29.md) method. You can configure whether the command buffer retains references to resources that its commands refer to with the [retainedReferences](mtlcommandbufferdescriptor/retainedreferences.md) property. The command buffer can save extra error information, which is useful during development, by setting its [errorOptions](mtlcommandbufferdescriptor/erroroptions.md) property to [encoderExecutionStatus](mtlcommandbuffererroroption/encoderexecutionstatus.md).

## Topics

### Configuring the command buffer

- [logState](mtlcommandbufferdescriptor/logstate.md): The shader logging configuration that the command buffer uses.
- [retainedReferences](mtlcommandbufferdescriptor/retainedreferences.md): A Boolean value that indicates whether the command buffer the descriptor creates maintains strong references to the resources it uses.
- [errorOptions](mtlcommandbufferdescriptor/erroroptions.md): The reporting configuration that indicates which information the GPU driver stores in a command buffer’s error property.
- [MTLCommandBufferErrorOption](mtlcommandbuffererroroption.md): Options for reporting errors from a command buffer.

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
- [MTLCommandQueueDescriptor](mtlcommandqueuedescriptor.md): A configuration that customizes the behavior for a new command queue.
- [MTLCommandBuffer](mtlcommandbuffer.md): A container that stores a sequence of GPU commands that you encode into it.
- [MTLCommandBufferError](mtlcommandbuffererror-swift.struct.md): The command buffer error codes that indicate why the GPU doesn’t finish executing a command buffer.
- [MTLCommandEncoder](mtlcommandencoder.md): An encoder that writes GPU commands into a command buffer.

# MTLCommandBufferDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A configuration that customizes the behavior for a new command buffer.

## Declaration

```objectivec
@interface MTLCommandBufferDescriptor : NSObject
```

<a id="overview"></a>

## Overview

Create a command buffer with a custom configuration by creating an [MTLCommandBufferDescriptor](mtlcommandbufferdescriptor.md) instance and passing it to an [MTLCommandQueue](mtlcommandqueue.md) instance’s [commandBufferWithDescriptor:](mtlcommandqueue/makecommandbuffer%28descriptor_%29.md) method. You can configure whether the command buffer retains references to resources that its commands refer to with the [retainedReferences](mtlcommandbufferdescriptor/retainedreferences.md) property. The command buffer can save extra error information, which is useful during development, by setting its [errorOptions](mtlcommandbufferdescriptor/erroroptions.md) property to [MTLCommandBufferErrorOptionEncoderExecutionStatus](mtlcommandbuffererroroption/encoderexecutionstatus.md).

## Topics

### Configuring the command buffer

- [logState](mtlcommandbufferdescriptor/logstate.md): The shader logging configuration that the command buffer uses.
- [retainedReferences](mtlcommandbufferdescriptor/retainedreferences.md): A Boolean value that indicates whether the command buffer the descriptor creates maintains strong references to the resources it uses.
- [errorOptions](mtlcommandbufferdescriptor/erroroptions.md): The reporting configuration that indicates which information the GPU driver stores in a command buffer’s error property.
- [MTLCommandBufferErrorOption](mtlcommandbuffererroroption.md): Options for reporting errors from a command buffer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Submitting work to a GPU

- [Setting up a command structure](setting-up-a-command-structure.md): Discover how Metal executes commands on a GPU.
- [MTLCommandQueue](mtlcommandqueue.md): An instance you use to create, submit, and schedule command buffers to a specific GPU device to run the commands within those buffers.
- [MTLCommandQueueDescriptor](mtlcommandqueuedescriptor.md): A configuration that customizes the behavior for a new command queue.
- [MTLCommandBuffer](mtlcommandbuffer.md): A container that stores a sequence of GPU commands that you encode into it.
- [MTLCommandBufferErrorDomain](mtlcommandbuffererrordomain.md): The domain for Metal command buffer errors.
- [MTLCommandBufferError](mtlcommandbuffererror-swift.struct/code.md): Error codes that indicate why a GPU is unable to finish running a command buffer.
- [MTLCommandEncoder](mtlcommandencoder.md): An encoder that writes GPU commands into a command buffer.
