> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsimplequeue/dequeue()](https://developer.apple.com/documentation/coremedia/cmsimplequeue/dequeue())

# dequeue()

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Dequeues an element from the queue.

## Declaration

```swift
func dequeue() -> UnsafeRawPointer?
```

<a id="return-value"></a>

## Return Value

A pointer to a dequeued element.

## See Also

### Managing Queues

- [enqueue(\_:)](enqueue%28__%29.md): Enqueues an element in the queue.
- [reset()](reset%28%29.md): Resets the queue.
