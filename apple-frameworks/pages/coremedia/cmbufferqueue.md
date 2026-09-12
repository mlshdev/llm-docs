> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueue](https://developer.apple.com/documentation/coremedia/cmbufferqueue)

# CMBufferQueue (Swift)

**Framework:** Core Media  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A reference to a buffer queue instance.

## Declaration

```swift
class CMBufferQueue
```

<a id="overview"></a>

## Overview

A `CMBufferQueue` is a queue of timed buffers backed by a Core Foundation object.

## Topics

### Managing a Queue

- [enqueue(\_:)](cmbufferqueue/enqueue%28__%29.md): Enqueues a buffer to the queue.
- [dequeue()](cmbufferqueue/dequeue%28%29.md): Dequeues a buffer from the queue.
- [dequeueIfDataReady()](cmbufferqueue/dequeueifdataready%28%29.md): Dequeues a buffer from the queue, if it’s ready.
- [markEndOfData()](cmbufferqueue/markendofdata%28%29.md): Marks a buffer as being at the end of its data.
- [reset()](cmbufferqueue/reset%28%29.md): Empties the queue and resets its end-of-data state.
- [reset(\_:)](cmbufferqueue/reset%28__%29.md): Resets a buffer with a callback block.

### Managing Triggers

- [installTrigger(condition:\_:)](cmbufferqueue/installtrigger%28condition___%29.md): Installs a trigger on the queue.
- [removeTrigger(\_:)](cmbufferqueue/removetrigger%28__%29.md): Removes a trigger from the queue.
- [testTrigger(\_:)](cmbufferqueue/testtrigger%28__%29.md): Tests a trigger condition.
- [CMBufferQueue.TriggerToken](cmbufferqueue/triggertoken.md): A type alias for a trigger token.
- [CMBufferQueue.TriggerCondition](cmbufferqueue/triggercondition.md): An enumeration of trigger conditions.

### Inspecting Duration and Timing

- [duration](cmbufferqueue/duration.md): The sum of all durations of buffers in the queue.
- [totalSize](cmbufferqueue/totalsize.md): The total size of all buffers in the queue.
- [firstDecodeTimeStamp](cmbufferqueue/firstdecodetimestamp.md): The decode timestamp of the first buffer in the queue.
- [firstPresentationTimeStamp](cmbufferqueue/firstpresentationtimestamp.md): The presentation timestamp of the first buffer in the queue.
- [endPresentationTimeStamp](cmbufferqueue/endpresentationtimestamp.md): The greatest end presentation timestamp.
- [minDecodeTimeStamp](cmbufferqueue/mindecodetimestamp.md): The earliest decode timestamp.
- [minPresentationTimeStamp](cmbufferqueue/minpresentationtimestamp.md): The earliest presentation timestamp.
- [maxPresentationTimeStamp](cmbufferqueue/maxpresentationtimestamp.md): The greatest presentation timestamp.

### Inspecting a Queue

- [isEmpty](cmbufferqueue/isempty.md): A Boolean value that indicates whether the queue contains buffers.
- [bufferCount](cmbufferqueue/buffercount.md): The count of buffers in the queue.
- [head](cmbufferqueue/head.md): The element at the head of the queue.
- [containsEndOfData](cmbufferqueue/containsendofdata.md): A Boolean value that indicates whether the buffer has its end-of-data state set.
- [isAtEndOfData](cmbufferqueue/isatendofdata.md): A Boolean value that indicates whether that queue is at the end of its data.

### Validating a Queue

- [setValidationHandler(\_:)](cmbufferqueue/setvalidationhandler%28__%29.md): Sets validation handler for the queue to call before enqueuing buffers.

### Accessing Buffers

- [buffers](cmbufferqueue/buffers-swift.property.md): The buffers that the queue contains.

### Accessing the Type Identifier

- [typeID](cmbufferqueue/typeid.md): The type identifier for this object.

### Data Types

- [CMBufferQueue.Buffers](cmbufferqueue/buffers-swift.struct.md): A sequence of `CMBuffer`s.
- [CMBufferQueue.Handlers](cmbufferqueue/handlers.md)
- [CMBufferQueue.Error](cmbufferqueue/error.md)

### Initializers

- [init(referencing:)](cmbufferqueue/init%28referencing_%29.md)

### Type Aliases

- [CMBufferQueue.T](cmbufferqueue/t.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

# CMBufferQueueRef (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A reference to a buffer queue instance.

## Declaration

```objectivec
typedef struct opaqueCMBufferQueue * CMBufferQueueRef;
```

<a id="overview"></a>

## Overview

A `CMBufferQueue` is a queue of timed buffers backed by a Core Foundation object.
