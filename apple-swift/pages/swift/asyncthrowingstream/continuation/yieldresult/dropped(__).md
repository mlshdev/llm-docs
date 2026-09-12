> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingstream/continuation/yieldresult/dropped(_:)](https://developer.apple.com/documentation/swift/asyncthrowingstream/continuation/yieldresult/dropped(_:))

# AsyncThrowingStream.Continuation.YieldResult.dropped(\_:)

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The stream didn’t enqueue the element because the buffer was full.

## Declaration

```swift
case dropped(Element)
```

<a id="discussion"></a>

## Discussion

The associated element for this case is the element that the stream dropped.

## See Also

### Yield Results

- [AsyncThrowingStream.Continuation.YieldResult.enqueued(remaining:)](enqueued%28remaining_%29.md): The stream successfully enqueued the element.
- [AsyncThrowingStream.Continuation.YieldResult.terminated](terminated.md): The stream didn’t enqueue the element because the stream was in a terminal state.
