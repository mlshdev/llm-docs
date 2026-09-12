> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asynccompactmapsequence/iterator/next(isolation:)](https://developer.apple.com/documentation/swift/asynccompactmapsequence/iterator/next(isolation:))

# next(isolation:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Produces the next element in the compact map sequence.

## Declaration

```swift
mutating func next(isolation actor: isolated (any Actor)?) async throws(AsyncCompactMapSequence<Base, ElementOfResult>.Failure) -> ElementOfResult?
```

<a id="discussion"></a>

## Discussion

This iterator calls `next()` on its base iterator; if this call returns `nil`, `next()` returns `nil`. Otherwise, `next()` calls the transforming closure on the received element, returning it if the transform returns a non-`nil` value. If the transform returns `nil`, this method continues to wait for further elements until it gets one that transforms to a non-`nil` value.
