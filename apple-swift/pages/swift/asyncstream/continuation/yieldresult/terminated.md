> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncstream/continuation/yieldresult/terminated](https://developer.apple.com/documentation/swift/asyncstream/continuation/yieldresult/terminated)

# AsyncStream.Continuation.YieldResult.terminated

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The stream didn’t enqueue the element because the stream was in a terminal state.

## Declaration

```swift
case terminated
```

<a id="discussion"></a>

## Discussion

This indicates the stream terminated prior to calling `yield`, either because the stream finished normally or through cancellation.

## See Also

### Yield Results

- [AsyncStream.Continuation.YieldResult.enqueued(remaining:)](enqueued%28remaining_%29.md): The stream successfully enqueued the element.
- [AsyncStream.Continuation.YieldResult.dropped(\_:)](dropped%28__%29.md): The stream didn’t enqueue the element because the buffer was full.
