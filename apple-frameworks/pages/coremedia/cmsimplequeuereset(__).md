> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsimplequeuereset(_:)](https://developer.apple.com/documentation/coremedia/cmsimplequeuereset(_:))

# CMSimpleQueueReset(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Resets the queue.

## Declaration

```swift
func CMSimpleQueueReset(_ queue: CMSimpleQueue) -> OSStatus
```

## Parameters

- `queue`: The queue to reset. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

Returns `noErr` if the call succeeds.

<a id="Discussion"></a>

## Discussion

This function resets the queue to an empty state. `CMSimpleQueueReset` isn’t synchronized in any way, so the client must hold off the reader thread and writer thread during this operation.

## See Also

### Managing Queues

- [CMSimpleQueueEnqueue(\_:element:)](cmsimplequeueenqueue%28__element_%29.md): Enqueues an element in the queue.
- [CMSimpleQueueDequeue(\_:)](cmsimplequeuedequeue%28__%29.md): Dequeues an element from the queue.

# CMSimpleQueueReset (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Resets the queue.

## Declaration

```objectivec
extern OSStatus CMSimpleQueueReset(CMSimpleQueueRef queue);
```

## Parameters

- `queue`: The queue to reset. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

Returns `noErr` if the call succeeds.

<a id="Discussion"></a>

## Discussion

This function resets the queue to an empty state. `CMSimpleQueueReset` isn’t synchronized in any way, so the client must hold off the reader thread and writer thread during this operation.

## See Also

### Managing Queues

- [CMSimpleQueueEnqueue](cmsimplequeueenqueue%28__element_%29.md): Enqueues an element in the queue.
- [CMSimpleQueueDequeue](cmsimplequeuedequeue%28__%29.md): Dequeues an element from the queue.
