> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandqueuedescriptor](https://developer.apple.com/documentation/metal/mtliocommandqueuedescriptor)

# MTLIOCommandQueueDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A configuration template you use to create a new input/output command queue.

## Declaration

```swift
class MTLIOCommandQueueDescriptor
```

<a id="overview"></a>

## Overview

Use this descriptor type to configure the settings of each input/output command queue that you create using [makeIOCommandQueue(descriptor:)](mtldevice/makeiocommandqueue%28descriptor_%29.md). To create additional input/output command queues, you can reuse a descriptor instance and optionally reconfigure its properties.

> **Note**

>  Changing a descriptor’s properties doesn’t affect command queues you’ve already created with the descriptor.

Create each input/output queue to meet your apps needs by setting the descriptor’s properties.

- Select a queue’s relative level of importance with the [priority](mtliocommandqueuedescriptor/priority.md) property.
- Create a queue that runs multiple input/output command buffers in parallel by setting the [type](mtliocommandqueuedescriptor/type.md) property to [MTLIOCommandQueueType.concurrent](mtliocommandqueuetype/concurrent.md).
- Decide how many individual commands a queue can run simultaneously with the [maxCommandsInFlight](mtliocommandqueuedescriptor/maxcommandsinflight.md) property.
- Choose how many command buffers a queue can have waiting to run with [maxCommandBufferCount](mtliocommandqueuedescriptor/maxcommandbuffercount.md) property.
- Take control of the queue’s scratch memory allocation by implementing [MTLIOScratchBufferAllocator](mtlioscratchbufferallocator.md) and assign an instance of it to the [scratchBufferAllocator](mtliocommandqueuedescriptor/scratchbufferallocator.md) property.

## Topics

### Configuring the input/output command queue

- [priority](mtliocommandqueuedescriptor/priority.md): Configures the priority for a new input/output command queue.
- [type](mtliocommandqueuedescriptor/type.md): Configures the queue type for a new input/output command queue.
- [maxCommandsInFlight](mtliocommandqueuedescriptor/maxcommandsinflight.md): Sets the largest number of individual commands that an input/output command queue can run at a time.
- [maxCommandBufferCount](mtliocommandqueuedescriptor/maxcommandbuffercount.md): Sets the largest number of outstanding input/output command buffers a queue can have at any point in time.

### Providing your own a scratch buffer

- [scratchBufferAllocator](mtliocommandqueuedescriptor/scratchbufferallocator.md): An optional memory allocator that you implement to manage the scratch memory that an input/output command queue requests.

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

### I/O command queues

- [MTLIOCommandQueue](mtliocommandqueue.md): A command queue that schedules input/output commands for reading files in the file system, and writing to GPU resources and memory.
- [MTLIOPriority](mtliopriority.md): Designates the priority for a new input/output command queue.
- [MTLIOCommandQueueType](mtliocommandqueuetype.md): Designates the queue type for a new input/output command queue.
- [MTLIOScratchBufferAllocator](mtlioscratchbufferallocator.md): A protocol your app implements to provide scratch memory to an input/output command queue.
- [MTLIOScratchBuffer](mtlioscratchbuffer.md): A protocol your app implements that wraps a Metal buffer instance to serve as scratch memory for an input/output command queue.

# MTLIOCommandQueueDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A configuration template you use to create a new input/output command queue.

## Declaration

```objectivec
@interface MTLIOCommandQueueDescriptor : NSObject
```

<a id="overview"></a>

## Overview

Use this descriptor type to configure the settings of each input/output command queue that you create using [newIOCommandQueueWithDescriptor:error:](mtldevice/makeiocommandqueue%28descriptor_%29.md). To create additional input/output command queues, you can reuse a descriptor instance and optionally reconfigure its properties.

> **Note**

>  Changing a descriptor’s properties doesn’t affect command queues you’ve already created with the descriptor.

Create each input/output queue to meet your apps needs by setting the descriptor’s properties.

- Select a queue’s relative level of importance with the [priority](mtliocommandqueuedescriptor/priority.md) property.
- Create a queue that runs multiple input/output command buffers in parallel by setting the [type](mtliocommandqueuedescriptor/type.md) property to [MTLIOCommandQueueTypeConcurrent](mtliocommandqueuetype/concurrent.md).
- Decide how many individual commands a queue can run simultaneously with the [maxCommandsInFlight](mtliocommandqueuedescriptor/maxcommandsinflight.md) property.
- Choose how many command buffers a queue can have waiting to run with [maxCommandBufferCount](mtliocommandqueuedescriptor/maxcommandbuffercount.md) property.
- Take control of the queue’s scratch memory allocation by implementing [MTLIOScratchBufferAllocator](mtlioscratchbufferallocator.md) and assign an instance of it to the [scratchBufferAllocator](mtliocommandqueuedescriptor/scratchbufferallocator.md) property.

## Topics

### Configuring the input/output command queue

- [priority](mtliocommandqueuedescriptor/priority.md): Configures the priority for a new input/output command queue.
- [type](mtliocommandqueuedescriptor/type.md): Configures the queue type for a new input/output command queue.
- [maxCommandsInFlight](mtliocommandqueuedescriptor/maxcommandsinflight.md): Sets the largest number of individual commands that an input/output command queue can run at a time.
- [maxCommandBufferCount](mtliocommandqueuedescriptor/maxcommandbuffercount.md): Sets the largest number of outstanding input/output command buffers a queue can have at any point in time.

### Providing your own a scratch buffer

- [scratchBufferAllocator](mtliocommandqueuedescriptor/scratchbufferallocator.md): An optional memory allocator that you implement to manage the scratch memory that an input/output command queue requests.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### I/O command queues

- [MTLIOCommandQueue](mtliocommandqueue.md): A command queue that schedules input/output commands for reading files in the file system, and writing to GPU resources and memory.
- [MTLIOPriority](mtliopriority.md): Designates the priority for a new input/output command queue.
- [MTLIOCommandQueueType](mtliocommandqueuetype.md): Designates the queue type for a new input/output command queue.
- [MTLIOScratchBufferAllocator](mtlioscratchbufferallocator.md): A protocol your app implements to provide scratch memory to an input/output command queue.
- [MTLIOScratchBuffer](mtlioscratchbuffer.md): A protocol your app implements that wraps a Metal buffer instance to serve as scratch memory for an input/output command queue.
