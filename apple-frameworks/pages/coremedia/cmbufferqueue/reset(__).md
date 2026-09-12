> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueue/reset(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueue/reset(_:))

# reset(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Resets a buffer with a callback block.

## Declaration

```swift
func reset(_ body: (CMBuffer) throws -> ()) throws
```

## Parameters

- `body`:

## See Also

### Managing a Queue

- [enqueue(\_:)](enqueue%28__%29.md): Enqueues a buffer to the queue.
- [dequeue()](dequeue%28%29.md): Dequeues a buffer from the queue.
- [dequeueIfDataReady()](dequeueifdataready%28%29.md): Dequeues a buffer from the queue, if it’s ready.
- [markEndOfData()](markendofdata%28%29.md): Marks a buffer as being at the end of its data.
- [reset()](reset%28%29.md): Empties the queue and resets its end-of-data state.
