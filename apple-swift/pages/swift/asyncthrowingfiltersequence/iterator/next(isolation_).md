> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/asyncthrowingfiltersequence/iterator/next(isolation:)

# next(isolation:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Produces the next element in the filter sequence.

## Declaration

```swift
mutating func next(isolation actor: isolated (any Actor)?) async throws -> Base.Element?
```

<a id="discussion"></a>

## Discussion

This iterator calls `next(isolation:)` on its base iterator; if this call returns `nil`, `next(isolation:)` returns nil. Otherwise, `next()` evaluates the result with the `predicate` closure. If the closure returns `true`, `next(isolation:)` returns the received element; otherwise it awaits the next element from the base iterator. If calling the closure throws an error, the sequence ends and `next(isolation:)` rethrows the error.
