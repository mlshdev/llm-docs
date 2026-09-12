> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/suffix(_:)](https://developer.apple.com/documentation/swift/array/suffix(_:))

# suffix(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a subsequence, up to the given maximum length, containing the final elements of the collection.

## Declaration

```swift
func suffix(_ maxLength: Int) -> Self.SubSequence
```

## Parameters

- `maxLength`: The maximum number of elements to return. `maxLength` must be greater than or equal to zero.

<a id="return-value"></a>

## Return Value

A subsequence terminating at the end of the collection with at most `maxLength` elements.

<a id="discussion"></a>

## Discussion

If the maximum length exceeds the number of elements in the collection, the result contains the entire collection.

```swift
let numbers = [1, 2, 3, 4, 5]
print(numbers.suffix(2))
// Prints "[4, 5]"
print(numbers.suffix(10))
// Prints "[1, 2, 3, 4, 5]"
```

> **Complexity**

> O(1) if the collection conforms to `RandomAccessCollection`; otherwise, O(*k*), where *k* is equal to `maxLength`.

## See Also

### Selecting Elements

- [prefix(\_:)](prefix%28__%29.md): Returns a subsequence, up to the specified maximum length, containing the initial elements of the collection.
- [prefix(through:)](prefix%28through_%29.md): Returns a subsequence from the start of the collection through the specified position.
- [prefix(upTo:)](prefix%28upto_%29.md): Returns a subsequence from the start of the collection up to, but not including, the specified position.
- [prefix(while:)](prefix%28while_%29.md): Returns a subsequence containing the initial elements until `predicate` returns `false` and skipping the remaining elements.
- [suffix(from:)](suffix%28from_%29.md): Returns a subsequence from the specified position to the end of the collection.
