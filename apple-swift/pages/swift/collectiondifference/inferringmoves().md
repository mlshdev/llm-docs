> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collectiondifference/inferringmoves()](https://developer.apple.com/documentation/swift/collectiondifference/inferringmoves())

# inferringMoves()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new collection difference with associations between individual elements that have been removed and inserted only once.

## Declaration

```swift
func inferringMoves() -> CollectionDifference<ChangeElement>
```

<a id="return-value"></a>

## Return Value

A collection difference with all possible moves inferred.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(*n*) where *n* is the number of collection differences.
