> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asynccompactmapsequence/iterator/next()](https://developer.apple.com/documentation/swift/asynccompactmapsequence/iterator/next())

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Produces the next element in the compact map sequence.

## Declaration

```swift
mutating func next() async rethrows -> ElementOfResult?
```

<a id="discussion"></a>

## Discussion

This iterator calls `next()` on its base iterator; if this call returns `nil`, `next()` returns `nil`. Otherwise, `next()` calls the transforming closure on the received element, returning it if the transform returns a non-`nil` value. If the transform returns `nil`, this method continues to wait for further elements until it gets one that transforms to a non-`nil` value.
