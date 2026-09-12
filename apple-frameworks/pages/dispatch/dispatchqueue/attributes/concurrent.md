> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/attributes/concurrent](https://developer.apple.com/documentation/dispatch/dispatchqueue/attributes/concurrent)

# concurrent

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The queue schedules tasks concurrently.

## Declaration

```swift
static let concurrent: DispatchQueue.Attributes
```

<a id="Discussion"></a>

## Discussion

If this attribute is not present, the queue schedules tasks serially in first-in, first-out (FIFO) order.

## See Also

### Attributes

- [initiallyInactive](initiallyinactive.md): The newly created queue is inactive.
