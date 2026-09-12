> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/substring/utf16view/droplast(_:)](https://developer.apple.com/documentation/swift/substring/utf16view/droplast(_:))

# dropLast(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a subsequence containing all but the specified number of final elements.

## Declaration

```swift
func dropLast(_ k: Int) -> Self.SubSequence
```

## Parameters

- `k`: The number of elements to drop off the end of the collection. `k` must be greater than or equal to zero.

<a id="return-value"></a>

## Return Value

A subsequence that leaves off `k` elements from the end.

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

> O(1) if the collection conforms to `RandomAccessCollection`; otherwise, O(*k*), where *k* is the number of elements to drop.
