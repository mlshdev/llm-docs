> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingstream/continuation/bufferingpolicy/unbounded](https://developer.apple.com/documentation/swift/asyncthrowingstream/continuation/bufferingpolicy/unbounded)

# AsyncThrowingStream.Continuation.BufferingPolicy.unbounded

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Continue to add to the buffer, without imposing a limit on the number of buffered elements.

## Declaration

```swift
case unbounded
```

## See Also

### Buffering Policies

- [AsyncThrowingStream.Continuation.BufferingPolicy.bufferingOldest(\_:)](bufferingoldest%28__%29.md): When the buffer is full, discard the newly received element.
- [AsyncThrowingStream.Continuation.BufferingPolicy.bufferingNewest(\_:)](bufferingnewest%28__%29.md): When the buffer is full, discard the oldest element in the buffer.
