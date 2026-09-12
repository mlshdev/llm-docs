> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliopriority](https://developer.apple.com/documentation/metal/mtliopriority)

# MTLIOPriority (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Designates the priority for a new input/output command queue.

## Declaration

```swift
enum MTLIOPriority
```

<a id="overview"></a>

## Overview

Set a new input/output command queue’s priority that you create with an [MTLIOCommandQueueDescriptor](mtliocommandqueuedescriptor.md) instance by setting its [priority](mtliocommandqueuedescriptor/priority.md) property. Create a queue that minimizes an asset’s loading latency by setting a descriptor’s priority to [MTLIOPriority.high](mtliopriority/high.md).

## Topics

### I/O command queue priorities

- [MTLIOPriority.normal](mtliopriority/normal.md): Designates the normal priority for a new input/output command queue.
- [MTLIOPriority.low](mtliopriority/low.md): Designates the low priority for a new input/output command queue.
- [MTLIOPriority.high](mtliopriority/high.md): Sets a new input/output command queue’s priority to a high priority.

### Initializers

- [init(rawValue:)](mtliopriority/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### I/O command queues

- [MTLIOCommandQueue](mtliocommandqueue.md): A command queue that schedules input/output commands for reading files in the file system, and writing to GPU resources and memory.
- [MTLIOCommandQueueDescriptor](mtliocommandqueuedescriptor.md): A configuration template you use to create a new input/output command queue.
- [MTLIOCommandQueueType](mtliocommandqueuetype.md): Designates the queue type for a new input/output command queue.
- [MTLIOScratchBufferAllocator](mtlioscratchbufferallocator.md): A protocol your app implements to provide scratch memory to an input/output command queue.
- [MTLIOScratchBuffer](mtlioscratchbuffer.md): A protocol your app implements that wraps a Metal buffer instance to serve as scratch memory for an input/output command queue.

# MTLIOPriority (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Designates the priority for a new input/output command queue.

## Declaration

```objectivec
enum MTLIOPriority : NSInteger;
```

<a id="overview"></a>

## Overview

Set a new input/output command queue’s priority that you create with an [MTLIOCommandQueueDescriptor](mtliocommandqueuedescriptor.md) instance by setting its [priority](mtliocommandqueuedescriptor/priority.md) property. Create a queue that minimizes an asset’s loading latency by setting a descriptor’s priority to [MTLIOPriorityHigh](mtliopriority/high.md).

## Topics

### I/O command queue priorities

- [MTLIOPriorityNormal](mtliopriority/normal.md): Designates the normal priority for a new input/output command queue.
- [MTLIOPriorityLow](mtliopriority/low.md): Designates the low priority for a new input/output command queue.
- [MTLIOPriorityHigh](mtliopriority/high.md): Sets a new input/output command queue’s priority to a high priority.

## See Also

### I/O command queues

- [MTLIOCommandQueue](mtliocommandqueue.md): A command queue that schedules input/output commands for reading files in the file system, and writing to GPU resources and memory.
- [MTLIOCommandQueueDescriptor](mtliocommandqueuedescriptor.md): A configuration template you use to create a new input/output command queue.
- [MTLIOCommandQueueType](mtliocommandqueuetype.md): Designates the queue type for a new input/output command queue.
- [MTLIOScratchBufferAllocator](mtlioscratchbufferallocator.md): A protocol your app implements to provide scratch memory to an input/output command queue.
- [MTLIOScratchBuffer](mtlioscratchbuffer.md): A protocol your app implements that wraps a Metal buffer instance to serve as scratch memory for an input/output command queue.
