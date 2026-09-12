> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueueisempty(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueueisempty(_:))

# CMBufferQueueIsEmpty(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a buffer queue is empty.

## Declaration

```swift
func CMBufferQueueIsEmpty(_ queue: CMBufferQueue) -> Bool
```

## Parameters

- `queue`: The `CMBufferQueue` being interrogated.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether the `CMBufferQueue` is empty. If queue is `NULL`, true is returned.

## See Also

### Inspecting a Queue

- [CMBufferQueueGetBufferCount(\_:)](cmbufferqueuegetbuffercount%28__%29.md): Gets the number of buffers in the queue.
- [CMBufferQueueGetTotalSize(\_:)](cmbufferqueuegettotalsize%28__%29.md): Gets the total size of all sample buffers of a buffer queue.
- [CMBufferQueueGetHead(\_:)](cmbufferqueuegethead%28__%29.md): Deprecated. Retrieves the next buffer from a queue, but doesn’t remove it.
- [CMBufferQueueContainsEndOfData(\_:)](cmbufferqueuecontainsendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.
- [CMBufferQueueIsAtEndOfData(\_:)](cmbufferqueueisatendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.

# CMBufferQueueIsEmpty (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a buffer queue is empty.

## Declaration

```objectivec
extern Boolean CMBufferQueueIsEmpty(CMBufferQueueRef queue);
```

## Parameters

- `queue`: The `CMBufferQueue` being interrogated.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether the `CMBufferQueue` is empty. If queue is `NULL`, true is returned.

## See Also

### Inspecting a Queue

- [CMBufferQueueGetBufferCount](cmbufferqueuegetbuffercount%28__%29.md): Gets the number of buffers in the queue.
- [CMBufferQueueGetTotalSize](cmbufferqueuegettotalsize%28__%29.md): Gets the total size of all sample buffers of a buffer queue.
- [CMBufferQueueGetHead](cmbufferqueuegethead%28__%29.md): Deprecated. Retrieves the next buffer from a queue, but doesn’t remove it.
- [CMBufferQueueContainsEndOfData](cmbufferqueuecontainsendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.
- [CMBufferQueueIsAtEndOfData](cmbufferqueueisatendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.
