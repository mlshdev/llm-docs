> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/discontiguousslice/droplast(_:)

# dropLast(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a subsequence containing all but the specified number of final elements.

## Declaration

```swift
func dropLast(_ k: Int = 1) -> Self.SubSequence
```

## Parameters

- `k`: The number of elements to drop off the end of the collection. `k` must be greater than or equal to zero.

<a id="return-value"></a>

## Return Value

A subsequence that leaves off the specified number of elements at the end.

<a id="discussion"></a>

## Discussion

If the number of elements to drop exceeds the number of elements in the collection, the result is an empty subsequence.

```swift
let numbers = [1, 2, 3, 4, 5]
print(numbers.dropLast(2))
// Prints "[1, 2, 3]"
print(numbers.dropLast(10))
// Prints "[]"
```

> **Complexity**

> O(1) if the collection conforms to `RandomAccessCollection`; otherwise, O(*n*), where *n* is the length of the collection.
