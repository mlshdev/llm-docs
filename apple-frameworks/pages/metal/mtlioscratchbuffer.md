> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlioscratchbuffer](https://developer.apple.com/documentation/metal/mtlioscratchbuffer)

# MTLIOScratchBuffer (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A protocol your app implements that wraps a Metal buffer instance to serve as scratch memory for an input/output command queue.

## Declaration

```swift
protocol MTLIOScratchBuffer : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Your app can reintegrate an [MTLIOScratchBuffer](mtlioscratchbuffer.md) instance’s underlying memory back into a memory pool by overriding your type’s [dealloc](../objectivec/nsobject-swift.class/dealloc.md) method. The system calls the method when an input/output command queue no longer needs a scratch buffer.

## Topics

### Wrapping a buffer

- [buffer](mtlioscratchbuffer/buffer.md): A Metal buffer that serves as scratch memory for an input/output command queue.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### I/O command queues

- [MTLIOCommandQueue](mtliocommandqueue.md): A command queue that schedules input/output commands for reading files in the file system, and writing to GPU resources and memory.
- [MTLIOCommandQueueDescriptor](mtliocommandqueuedescriptor.md): A configuration template you use to create a new input/output command queue.
- [MTLIOPriority](mtliopriority.md): Designates the priority for a new input/output command queue.
- [MTLIOCommandQueueType](mtliocommandqueuetype.md): Designates the queue type for a new input/output command queue.
- [MTLIOScratchBufferAllocator](mtlioscratchbufferallocator.md): A protocol your app implements to provide scratch memory to an input/output command queue.

# MTLIOScratchBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A protocol your app implements that wraps a Metal buffer instance to serve as scratch memory for an input/output command queue.

## Declaration

```objectivec
@protocol MTLIOScratchBuffer <NSObject>
```

<a id="overview"></a>

## Overview

Your app can reintegrate an [MTLIOScratchBuffer](mtlioscratchbuffer.md) instance’s underlying memory back into a memory pool by overriding your type’s [dealloc](../objectivec/nsobject-swift.class/dealloc.md) method. The system calls the method when an input/output command queue no longer needs a scratch buffer.

## Topics

### Wrapping a buffer

- [buffer](mtlioscratchbuffer/buffer.md): A Metal buffer that serves as scratch memory for an input/output command queue.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### I/O command queues

- [MTLIOCommandQueue](mtliocommandqueue.md): A command queue that schedules input/output commands for reading files in the file system, and writing to GPU resources and memory.
- [MTLIOCommandQueueDescriptor](mtliocommandqueuedescriptor.md): A configuration template you use to create a new input/output command queue.
- [MTLIOPriority](mtliopriority.md): Designates the priority for a new input/output command queue.
- [MTLIOCommandQueueType](mtliocommandqueuetype.md): Designates the queue type for a new input/output command queue.
- [MTLIOScratchBufferAllocator](mtlioscratchbufferallocator.md): A protocol your app implements to provide scratch memory to an input/output command queue.
