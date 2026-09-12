> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlioscratchbufferallocator](https://developer.apple.com/documentation/metal/mtlioscratchbufferallocator)

# MTLIOScratchBufferAllocator (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A protocol your app implements to provide scratch memory to an input/output command queue.

## Declaration

```swift
protocol MTLIOScratchBufferAllocator : NSObjectProtocol
```

<a id="overview"></a>

## Overview

An allocator returns instances of [MTLIOScratchBuffer](mtlioscratchbuffer.md), another type your app implements.

## Topics

### Providing scratch memory to a queue

- [makeScratchBuffer(minimumSize:)](mtlioscratchbufferallocator/makescratchbuffer%28minimumsize_%29.md): Creates a scratch memory buffer for an input/output command queue.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### I/O command queues

- [MTLIOCommandQueue](mtliocommandqueue.md): A command queue that schedules input/output commands for reading files in the file system, and writing to GPU resources and memory.
- [MTLIOCommandQueueDescriptor](mtliocommandqueuedescriptor.md): A configuration template you use to create a new input/output command queue.
- [MTLIOPriority](mtliopriority.md): Designates the priority for a new input/output command queue.
- [MTLIOCommandQueueType](mtliocommandqueuetype.md): Designates the queue type for a new input/output command queue.
- [MTLIOScratchBuffer](mtlioscratchbuffer.md): A protocol your app implements that wraps a Metal buffer instance to serve as scratch memory for an input/output command queue.

# MTLIOScratchBufferAllocator (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A protocol your app implements to provide scratch memory to an input/output command queue.

## Declaration

```objectivec
@protocol MTLIOScratchBufferAllocator <NSObject>
```

<a id="overview"></a>

## Overview

An allocator returns instances of [MTLIOScratchBuffer](mtlioscratchbuffer.md), another type your app implements.

## Topics

### Providing scratch memory to a queue

- [newScratchBufferWithMinimumSize:](mtlioscratchbufferallocator/makescratchbuffer%28minimumsize_%29.md): Creates a scratch memory buffer for an input/output command queue.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### I/O command queues

- [MTLIOCommandQueue](mtliocommandqueue.md): A command queue that schedules input/output commands for reading files in the file system, and writing to GPU resources and memory.
- [MTLIOCommandQueueDescriptor](mtliocommandqueuedescriptor.md): A configuration template you use to create a new input/output command queue.
- [MTLIOPriority](mtliopriority.md): Designates the priority for a new input/output command queue.
- [MTLIOCommandQueueType](mtliocommandqueuetype.md): Designates the queue type for a new input/output command queue.
- [MTLIOScratchBuffer](mtlioscratchbuffer.md): A protocol your app implements that wraps a Metal buffer instance to serve as scratch memory for an input/output command queue.
