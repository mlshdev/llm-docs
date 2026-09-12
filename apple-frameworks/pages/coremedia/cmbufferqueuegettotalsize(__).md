> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuegettotalsize(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuegettotalsize(_:))

# CMBufferQueueGetTotalSize(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Gets the total size of all sample buffers of a buffer queue.

## Declaration

```swift
func CMBufferQueueGetTotalSize(_ queue: CMBufferQueue) -> Int
```

<a id="Discussion"></a>

## Discussion

The total size of the `CMBufferQueue` is the sum of all the individual buffer sizes, as reported by the `getTotalSize` callback (provided to [CMBufferQueueCreate(allocator:capacity:callbacks:queueOut:)](cmbufferqueuecreate%28allocator_capacity_callbacks_queueout_%29.md)).

This function returns 0 if there are no buffers in the queue.

## See Also

### Inspecting a Queue

- [CMBufferQueueIsEmpty(\_:)](cmbufferqueueisempty%28__%29.md): Returns a Boolean value that indicates whether a buffer queue is empty.
- [CMBufferQueueGetBufferCount(\_:)](cmbufferqueuegetbuffercount%28__%29.md): Gets the number of buffers in the queue.
- [CMBufferQueueGetHead(\_:)](cmbufferqueuegethead%28__%29.md): Deprecated. Retrieves the next buffer from a queue, but doesn’t remove it.
- [CMBufferQueueContainsEndOfData(\_:)](cmbufferqueuecontainsendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.
- [CMBufferQueueIsAtEndOfData(\_:)](cmbufferqueueisatendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.

# CMBufferQueueGetTotalSize (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Gets the total size of all sample buffers of a buffer queue.

## Declaration

```objectivec
extern size_t CMBufferQueueGetTotalSize(CMBufferQueueRef queue);
```

<a id="Discussion"></a>

## Discussion

The total size of the `CMBufferQueue` is the sum of all the individual buffer sizes, as reported by the `getTotalSize` callback (provided to [CMBufferQueueCreate](cmbufferqueuecreate%28allocator_capacity_callbacks_queueout_%29.md)).

This function returns 0 if there are no buffers in the queue.

## See Also

### Inspecting a Queue

- [CMBufferQueueIsEmpty](cmbufferqueueisempty%28__%29.md): Returns a Boolean value that indicates whether a buffer queue is empty.
- [CMBufferQueueGetBufferCount](cmbufferqueuegetbuffercount%28__%29.md): Gets the number of buffers in the queue.
- [CMBufferQueueGetHead](cmbufferqueuegethead%28__%29.md): Deprecated. Retrieves the next buffer from a queue, but doesn’t remove it.
- [CMBufferQueueContainsEndOfData](cmbufferqueuecontainsendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.
- [CMBufferQueueIsAtEndOfData](cmbufferqueueisatendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.
