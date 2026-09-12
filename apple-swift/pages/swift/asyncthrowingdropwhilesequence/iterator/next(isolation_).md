> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingdropwhilesequence/iterator/next(isolation:)](https://developer.apple.com/documentation/swift/asyncthrowingdropwhilesequence/iterator/next(isolation:))

# next(isolation:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Produces the next element in the drop-while sequence.

## Declaration

```swift
mutating func next(isolation actor: isolated (any Actor)?) async throws -> Base.Element?
```

<a id="discussion"></a>

## Discussion

This iterator calls `next(isolation:)` on its base iterator and evaluates the result with the `predicate` closure. As long as the predicate returns `true`, this method returns `nil`. After the predicate returns `false`, for a value received from the base iterator, this method returns that value. After that, the iterator returns values received from its base iterator as-is, and never executes the predicate closure again.  If calling the closure throws an error, the sequence ends and `next(isolation:)` rethrows the error.
