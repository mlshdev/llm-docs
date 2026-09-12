> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsimplequeuedequeue(_:)](https://developer.apple.com/documentation/coremedia/cmsimplequeuedequeue(_:))

# CMSimpleQueueDequeue(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Dequeues an element from the queue.

## Declaration

```swift
func CMSimpleQueueDequeue(_ queue: CMSimpleQueue) -> UnsafeRawPointer?
```

## Parameters

- `queue`: The queue from which to dequeue an element. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

The dequeued element.  `NULL` if the queue was empty, or if there was some other error.

## See Also

### Managing Queues

- [CMSimpleQueueEnqueue(\_:element:)](cmsimplequeueenqueue%28__element_%29.md): Enqueues an element in the queue.
- [CMSimpleQueueReset(\_:)](cmsimplequeuereset%28__%29.md): Resets the queue.

# CMSimpleQueueDequeue (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Dequeues an element from the queue.

## Declaration

```objectivec
extern const void *CMSimpleQueueDequeue(CMSimpleQueueRef queue);
```

## Parameters

- `queue`: The queue from which to dequeue an element. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

The dequeued element.  `NULL` if the queue was empty, or if there was some other error.

## See Also

### Managing Queues

- [CMSimpleQueueEnqueue](cmsimplequeueenqueue%28__element_%29.md): Enqueues an element in the queue.
- [CMSimpleQueueReset](cmsimplequeuereset%28__%29.md): Resets the queue.
