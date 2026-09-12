> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuegethead(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuegethead(_:))

# CMBufferQueueGetHead(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.0+ (deprecated in 11.0)

Retrieves the next buffer from a queue, but doesn’t remove it.

## Declaration

```swift
func CMBufferQueueGetHead(_ queue: CMBufferQueue) -> CMBuffer?
```

## Parameters

- `queue`: The CMBufferQueue from which to retrieve a buffer.

<a id="return-value"></a>

## Return Value

The buffer. Will be `NULL` if the queue is empty.

<a id="Discussion"></a>

## Discussion

This follows Core Foundation “Get” semantics – it does not retain the returned buffer. Note that with non-FIFO queues it’s not guaranteed that the next dequeue will return this particular buffer (if an intervening Enqueue adds a buffer that will dequeue next).

## See Also

### Inspecting a Queue

- [CMBufferQueueIsEmpty(\_:)](cmbufferqueueisempty%28__%29.md): Returns a Boolean value that indicates whether a buffer queue is empty.
- [CMBufferQueueGetBufferCount(\_:)](cmbufferqueuegetbuffercount%28__%29.md): Gets the number of buffers in the queue.
- [CMBufferQueueGetTotalSize(\_:)](cmbufferqueuegettotalsize%28__%29.md): Gets the total size of all sample buffers of a buffer queue.
- [CMBufferQueueContainsEndOfData(\_:)](cmbufferqueuecontainsendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.
- [CMBufferQueueIsAtEndOfData(\_:)](cmbufferqueueisatendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.

# CMBufferQueueGetHead (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.0+ (deprecated in 11.0)

Retrieves the next buffer from a queue, but doesn’t remove it.

## Declaration

```objectivec
extern CMBufferRefCMBufferQueueGetHead(CMBufferQueueRef queue);
```

## Parameters

- `queue`: The CMBufferQueue from which to retrieve a buffer.

<a id="return-value"></a>

## Return Value

The buffer. Will be `NULL` if the queue is empty.

<a id="Discussion"></a>

## Discussion

This follows Core Foundation “Get” semantics – it does not retain the returned buffer. Note that with non-FIFO queues it’s not guaranteed that the next dequeue will return this particular buffer (if an intervening Enqueue adds a buffer that will dequeue next).

## See Also

### Inspecting a Queue

- [CMBufferQueueIsEmpty](cmbufferqueueisempty%28__%29.md): Returns a Boolean value that indicates whether a buffer queue is empty.
- [CMBufferQueueGetBufferCount](cmbufferqueuegetbuffercount%28__%29.md): Gets the number of buffers in the queue.
- [CMBufferQueueGetTotalSize](cmbufferqueuegettotalsize%28__%29.md): Gets the total size of all sample buffers of a buffer queue.
- [CMBufferQueueContainsEndOfData](cmbufferqueuecontainsendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.
- [CMBufferQueueIsAtEndOfData](cmbufferqueueisatendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.
