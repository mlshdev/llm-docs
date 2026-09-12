> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuecontainsendofdata(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuecontainsendofdata(_:))

# CMBufferQueueContainsEndOfData(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.

## Declaration

```swift
func CMBufferQueueContainsEndOfData(_ queue: CMBufferQueue) -> Bool
```

## Parameters

- `queue`: CMBufferQueue being interrogated.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether `CMBufferQueue` has been marked with `EndOfData`.

## See Also

### Inspecting a Queue

- [CMBufferQueueIsEmpty(\_:)](cmbufferqueueisempty%28__%29.md): Returns a Boolean value that indicates whether a buffer queue is empty.
- [CMBufferQueueGetBufferCount(\_:)](cmbufferqueuegetbuffercount%28__%29.md): Gets the number of buffers in the queue.
- [CMBufferQueueGetTotalSize(\_:)](cmbufferqueuegettotalsize%28__%29.md): Gets the total size of all sample buffers of a buffer queue.
- [CMBufferQueueGetHead(\_:)](cmbufferqueuegethead%28__%29.md): Deprecated. Retrieves the next buffer from a queue, but doesn’t remove it.
- [CMBufferQueueIsAtEndOfData(\_:)](cmbufferqueueisatendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.

# CMBufferQueueContainsEndOfData (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set.

## Declaration

```objectivec
extern Boolean CMBufferQueueContainsEndOfData(CMBufferQueueRef queue);
```

## Parameters

- `queue`: CMBufferQueue being interrogated.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether `CMBufferQueue` has been marked with `EndOfData`.

## See Also

### Inspecting a Queue

- [CMBufferQueueIsEmpty](cmbufferqueueisempty%28__%29.md): Returns a Boolean value that indicates whether a buffer queue is empty.
- [CMBufferQueueGetBufferCount](cmbufferqueuegetbuffercount%28__%29.md): Gets the number of buffers in the queue.
- [CMBufferQueueGetTotalSize](cmbufferqueuegettotalsize%28__%29.md): Gets the total size of all sample buffers of a buffer queue.
- [CMBufferQueueGetHead](cmbufferqueuegethead%28__%29.md): Deprecated. Retrieves the next buffer from a queue, but doesn’t remove it.
- [CMBufferQueueIsAtEndOfData](cmbufferqueueisatendofdata%28__%29.md): Returns a Boolean value that indicates whether a buffer queue has its end-of-data marker set, and is now empty.
