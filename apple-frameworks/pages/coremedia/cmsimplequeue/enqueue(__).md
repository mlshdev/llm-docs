> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsimplequeue/enqueue(_:)](https://developer.apple.com/documentation/coremedia/cmsimplequeue/enqueue(_:))

# enqueue(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Enqueues an element in the queue.

## Declaration

```swift
func enqueue(_ element: UnsafeRawPointer) throws
```

## Parameters

- `element`: The element to enqueue.

## See Also

### Managing Queues

- [dequeue()](dequeue%28%29.md): Dequeues an element from the queue.
- [reset()](reset%28%29.md): Resets the queue.
