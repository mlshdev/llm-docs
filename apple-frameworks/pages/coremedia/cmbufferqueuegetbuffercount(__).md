> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuegetbuffercount(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuegetbuffercount(_:))

# CMBufferQueueGetBufferCount(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Gets the number of buffers in the queue.

## Declaration

```swift
func CMBufferQueueGetBufferCount(_ queue: CMBufferQueue) -> CMItemCount
```

## Parameters

- `queue`: `CMBufferQueue` being interrogated.

<a id="return-value"></a>

## Return Value

Returns the number of buffers in the `CMBufferQueue`.

## See Also

### Inspecting a Queue

- [CMBufferQueueIsEmpty(\_:)](cmbufferqueueisempty%28__%29.md): Returns a Boolean value that indicates whether a buffer queue is empty.
- [CMBufferQueueGetTotalSize(\_:)](cmbufferqueuegettotalsize%28__%29.md): Gets the total size of all sample buffers of a buffer queue.
- [CMBufferQueueGetHead(\_:)](cmbufferqueuegethead%28__%29.md): Deprecated. Retrieves the next buffer from a queue, but doesn’t remove it.
- [CMBufferQueueContainsEndOfData(\_:)](cmbufferqueuecontainsendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.
- [CMBufferQueueIsAtEndOfData(\_:)](cmbufferqueueisatendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.

# CMBufferQueueGetBufferCount (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Gets the number of buffers in the queue.

## Declaration

```objectivec
extern CMItemCount CMBufferQueueGetBufferCount(CMBufferQueueRef queue);
```

## Parameters

- `queue`: `CMBufferQueue` being interrogated.

<a id="return-value"></a>

## Return Value

Returns the number of buffers in the `CMBufferQueue`.

## See Also

### Inspecting a Queue

- [CMBufferQueueIsEmpty](cmbufferqueueisempty%28__%29.md): Returns a Boolean value that indicates whether a buffer queue is empty.
- [CMBufferQueueGetTotalSize](cmbufferqueuegettotalsize%28__%29.md): Gets the total size of all sample buffers of a buffer queue.
- [CMBufferQueueGetHead](cmbufferqueuegethead%28__%29.md): Deprecated. Retrieves the next buffer from a queue, but doesn’t remove it.
- [CMBufferQueueContainsEndOfData](cmbufferqueuecontainsendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.
- [CMBufferQueueIsAtEndOfData](cmbufferqueueisatendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.
