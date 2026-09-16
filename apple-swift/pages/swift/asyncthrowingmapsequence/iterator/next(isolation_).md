> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/asyncthrowingmapsequence/iterator/next(isolation:)

# next(isolation:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Produces the next element in the map sequence.

## Declaration

```swift
mutating func next(isolation actor: isolated (any Actor)?) async throws -> Transformed?
```

<a id="discussion"></a>

## Discussion

This iterator calls `next(isolation:)` on its base iterator; if this call returns `nil`, `next(isolation:)` returns nil. Otherwise, `next(isolation:)` returns the result of calling the transforming closure on the received element. If calling the closure throws an error, the sequence ends and `next(isolation:)` rethrows the error.
