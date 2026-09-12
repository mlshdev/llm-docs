> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice/difference(from:by:)](https://developer.apple.com/documentation/swift/slice/difference(from:by:))

# difference(from:by:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the difference needed to produce this collection’s ordered elements from the given collection, using the given predicate as an equivalence test.

## Declaration

```swift
func difference<C>(from other: C, by areEquivalent: (C.Element, Self.Element) -> Bool) -> CollectionDifference<Self.Element> where C : BidirectionalCollection, Self.Element == C.Element
```

## Parameters

- `other`: The base state.
- `areEquivalent`: A closure that returns a Boolean value indicating whether two elements are equivalent.

<a id="return-value"></a>

## Return Value

The difference needed to produce the receiver’s state from the parameter’s state.

<a id="discussion"></a>

## Discussion

This function does not infer element moves. If you need to infer moves, call the `inferringMoves()` method on the resulting difference.

> **Complexity**

> Worst case performance is O(*n* \* *m*), where *n* is the count of this collection and *m* is `other.count`. You can expect faster execution when the collections share many common elements.
