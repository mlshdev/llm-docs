> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueue/dequeueifdataready()](https://developer.apple.com/documentation/coremedia/cmbufferqueue/dequeueifdataready())

# dequeueIfDataReady()

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Dequeues a buffer from the queue, if it’s ready.

## Declaration

```swift
func dequeueIfDataReady() -> CMBuffer?
```

<a id="return-value"></a>

## Return Value

A buffer or `nil` if the buffer is empty or the data isn’t ready.

## See Also

### Managing a Queue

- [enqueue(\_:)](enqueue%28__%29.md): Enqueues a buffer to the queue.
- [dequeue()](dequeue%28%29.md): Dequeues a buffer from the queue.
- [markEndOfData()](markendofdata%28%29.md): Marks a buffer as being at the end of its data.
- [reset()](reset%28%29.md): Empties the queue and resets its end-of-data state.
- [reset(\_:)](reset%28__%29.md): Resets a buffer with a callback block.
