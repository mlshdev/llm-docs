> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/asyncthrowingmapsequence/iterator/next()

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Produces the next element in the map sequence.

## Declaration

```swift
mutating func next() async throws -> Transformed?
```

<a id="discussion"></a>

## Discussion

This iterator calls `next()` on its base iterator; if this call returns `nil`, `next()` returns nil. Otherwise, `next()` returns the result of calling the transforming closure on the received element. If calling the closure throws an error, the sequence ends and `next()` rethrows the error.
