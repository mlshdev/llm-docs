> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingstream/continuation/bufferingpolicy/bufferingnewest(_:)](https://developer.apple.com/documentation/swift/asyncthrowingstream/continuation/bufferingpolicy/bufferingnewest(_:))

# AsyncThrowingStream.Continuation.BufferingPolicy.bufferingNewest(\_:)

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

When the buffer is full, discard the oldest element in the buffer.

## Declaration

```swift
case bufferingNewest(Int)
```

<a id="discussion"></a>

## Discussion

This strategy enforces keeping at most the specified number of newest values.

> **Note**

> If the specified number is zero or negative, no elements are buffered. In that case, an iterator receives an element only if it is already awaiting a value when the continuation yields.

## See Also

### Buffering Policies

- [AsyncThrowingStream.Continuation.BufferingPolicy.unbounded](unbounded.md): Continue to add to the buffer, without imposing a limit on the number of buffered elements.
- [AsyncThrowingStream.Continuation.BufferingPolicy.bufferingOldest(\_:)](bufferingoldest%28__%29.md): When the buffer is full, discard the newly received element.
