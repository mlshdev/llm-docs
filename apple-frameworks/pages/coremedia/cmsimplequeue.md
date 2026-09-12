> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsimplequeue](https://developer.apple.com/documentation/coremedia/cmsimplequeue)

# CMSimpleQueue (Swift)

**Framework:** Core Media  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A reference to an instance that provides a simple lockless queue of elements.

## Declaration

```swift
class CMSimpleQueue
```

## Topics

### Managing Queues

- [enqueue(\_:)](cmsimplequeue/enqueue%28__%29.md): Enqueues an element in the queue.
- [dequeue()](cmsimplequeue/dequeue%28%29.md): Dequeues an element from the queue.
- [reset()](cmsimplequeue/reset%28%29.md): Resets the queue.

### Inspecting Queues

- [head](cmsimplequeue/head.md): The head element in the queue.
- [capacity](cmsimplequeue/capacity.md): The number of elements that a queue can hold.
- [count](cmsimplequeue/count.md): The number of elements currently in the queue.
- [fullness](cmsimplequeue/fullness.md): The fullness of a queue as a percentage of its capacity.

### Accessing the Type Identifier

- [typeID](cmsimplequeue/typeid.md): The type identifier of sample buffer objects.

### Errors

- [CMSimpleQueue.Error](cmsimplequeue/error.md): A structure that defines errors that queue operations can produce.

### Initializers

- [init(referencing:)](cmsimplequeue/init%28referencing_%29.md)

### Type Aliases

- [CMSimpleQueue.T](cmsimplequeue/t.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

# CMSimpleQueueRef (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A reference to an instance that provides a simple lockless queue of elements.

## Declaration

```objectivec
typedef struct opaqueCMSimpleQueue * CMSimpleQueueRef;
```
