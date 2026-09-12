> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncdropfirstsequence/dropfirst(_:)](https://developer.apple.com/documentation/swift/asyncdropfirstsequence/dropfirst(_:))

# dropFirst(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.

## Declaration

```swift
func dropFirst(_ count: Int = 1) -> AsyncDropFirstSequence<Base>
```

<a id="discussion"></a>

## Discussion

When you call `dropFirst(_:)` on an asynchronous sequence that is already an `AsyncDropFirstSequence`, the returned sequence simply adds the new drop count to the current drop count.
