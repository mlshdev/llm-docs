> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsimplequeueenqueue(_:element:)](https://developer.apple.com/documentation/coremedia/cmsimplequeueenqueue(_:element:))

# CMSimpleQueueEnqueue(\_:element:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Enqueues an element in the queue.

## Declaration

```swift
func CMSimpleQueueEnqueue(_ queue: CMSimpleQueue, element: UnsafeRawPointer) -> OSStatus
```

## Parameters

- `queue`: The queue on which to enqueue the element. Must not be `NULL`.
- `element`: Element to enqueue. Must not be `NULL` (`CMSimpleQueueDequeue` returns `NULL` to indicate an empty queue).

<a id="return-value"></a>

## Return Value

Returns `noErr` if the call succeeds or `kCMSimpleQueueError_QueueIsFull` if the queue is full.

<a id="Discussion"></a>

## Discussion

If the queue is full, this operation fails.

## See Also

### Managing Queues

- [CMSimpleQueueDequeue(\_:)](cmsimplequeuedequeue%28__%29.md): Dequeues an element from the queue.
- [CMSimpleQueueReset(\_:)](cmsimplequeuereset%28__%29.md): Resets the queue.

# CMSimpleQueueEnqueue (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Enqueues an element in the queue.

## Declaration

```objectivec
extern OSStatus CMSimpleQueueEnqueue(CMSimpleQueueRef queue, const void *element);
```

## Parameters

- `queue`: The queue on which to enqueue the element. Must not be `NULL`.
- `element`: Element to enqueue. Must not be `NULL` (`CMSimpleQueueDequeue` returns `NULL` to indicate an empty queue).

<a id="return-value"></a>

## Return Value

Returns `noErr` if the call succeeds or `kCMSimpleQueueError_QueueIsFull` if the queue is full.

<a id="Discussion"></a>

## Discussion

If the queue is full, this operation fails.

## See Also

### Managing Queues

- [CMSimpleQueueDequeue](cmsimplequeuedequeue%28__%29.md): Dequeues an element from the queue.
- [CMSimpleQueueReset](cmsimplequeuereset%28__%29.md): Resets the queue.
