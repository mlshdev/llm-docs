> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandqueuetype](https://developer.apple.com/documentation/metal/mtliocommandqueuetype)

# MTLIOCommandQueueType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Designates the queue type for a new input/output command queue.

## Declaration

```swift
enum MTLIOCommandQueueType
```

## Topics

### I/O command queue types

- [MTLIOCommandQueueType.concurrent](mtliocommandqueuetype/concurrent.md): Sets a new input/output command queue’s type to a queue that runs commands concurrently.
- [MTLIOCommandQueueType.serial](mtliocommandqueuetype/serial.md): Sets a new input/output command queue’s type to a queue that runs commands serially.

### Initializers

- [init(rawValue:)](mtliocommandqueuetype/init%28rawvalue_%29.md)

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
- [MTLIOPriority](mtliopriority.md): Designates the priority for a new input/output command queue.
- [MTLIOScratchBufferAllocator](mtlioscratchbufferallocator.md): A protocol your app implements to provide scratch memory to an input/output command queue.
- [MTLIOScratchBuffer](mtlioscratchbuffer.md): A protocol your app implements that wraps a Metal buffer instance to serve as scratch memory for an input/output command queue.

# MTLIOCommandQueueType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Designates the queue type for a new input/output command queue.

## Declaration

```objectivec
enum MTLIOCommandQueueType : NSInteger;
```

## Topics

### I/O command queue types

- [MTLIOCommandQueueTypeConcurrent](mtliocommandqueuetype/concurrent.md): Sets a new input/output command queue’s type to a queue that runs commands concurrently.
- [MTLIOCommandQueueTypeSerial](mtliocommandqueuetype/serial.md): Sets a new input/output command queue’s type to a queue that runs commands serially.

## See Also

### I/O command queues

- [MTLIOCommandQueue](mtliocommandqueue.md): A command queue that schedules input/output commands for reading files in the file system, and writing to GPU resources and memory.
- [MTLIOCommandQueueDescriptor](mtliocommandqueuedescriptor.md): A configuration template you use to create a new input/output command queue.
- [MTLIOPriority](mtliopriority.md): Designates the priority for a new input/output command queue.
- [MTLIOScratchBufferAllocator](mtlioscratchbufferallocator.md): A protocol your app implements to provide scratch memory to an input/output command queue.
- [MTLIOScratchBuffer](mtlioscratchbuffer.md): A protocol your app implements that wraps a Metal buffer instance to serve as scratch memory for an input/output command queue.
