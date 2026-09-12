> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueueisatendofdata(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueueisatendofdata(_:))

# CMBufferQueueIsAtEndOfData(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.

## Declaration

```swift
func CMBufferQueueIsAtEndOfData(_ queue: CMBufferQueue) -> Bool
```

## Parameters

- `queue`: The `CMBufferQueue` being interrogated.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether the `CMBufferQueue` has been marked with EndOfData, and is now empty.If queue is `NULL`, true is returned (a NULL queue is considered to be empty, and permanently at EndOfData).

## See Also

### Inspecting a Queue

- [CMBufferQueueIsEmpty(\_:)](cmbufferqueueisempty%28__%29.md): Returns a Boolean value that indicates whether a buffer queue is empty.
- [CMBufferQueueGetBufferCount(\_:)](cmbufferqueuegetbuffercount%28__%29.md): Gets the number of buffers in the queue.
- [CMBufferQueueGetTotalSize(\_:)](cmbufferqueuegettotalsize%28__%29.md): Gets the total size of all sample buffers of a buffer queue.
- [CMBufferQueueGetHead(\_:)](cmbufferqueuegethead%28__%29.md): Deprecated. Retrieves the next buffer from a queue, but doesn’t remove it.
- [CMBufferQueueContainsEndOfData(\_:)](cmbufferqueuecontainsendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.

# CMBufferQueueIsAtEndOfData (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.

## Declaration

```objectivec
extern Boolean CMBufferQueueIsAtEndOfData(CMBufferQueueRef queue);
```

## Parameters

- `queue`: The `CMBufferQueue` being interrogated.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether the `CMBufferQueue` has been marked with EndOfData, and is now empty.If queue is `NULL`, true is returned (a NULL queue is considered to be empty, and permanently at EndOfData).

## See Also

### Inspecting a Queue

- [CMBufferQueueIsEmpty](cmbufferqueueisempty%28__%29.md): Returns a Boolean value that indicates whether a buffer queue is empty.
- [CMBufferQueueGetBufferCount](cmbufferqueuegetbuffercount%28__%29.md): Gets the number of buffers in the queue.
- [CMBufferQueueGetTotalSize](cmbufferqueuegettotalsize%28__%29.md): Gets the total size of all sample buffers of a buffer queue.
- [CMBufferQueueGetHead](cmbufferqueuegethead%28__%29.md): Deprecated. Retrieves the next buffer from a queue, but doesn’t remove it.
- [CMBufferQueueContainsEndOfData](cmbufferqueuecontainsendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.
