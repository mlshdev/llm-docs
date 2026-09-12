> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/index(_:offsetby:)](https://developer.apple.com/documentation/swift/array/index(_:offsetby:))

# index(\_:offsetBy:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an index that is the specified distance from the given index.

## Declaration

```swift
func index(_ i: Int, offsetBy distance: Int) -> Int
```

## Parameters

- `i`: A valid index of the array.
- `distance`: The distance to offset `i`.

<a id="return-value"></a>

## Return Value

An index offset by `distance` from the index `i`. If `distance` is positive, this is the same value as the result of `distance` calls to `index(after:)`. If `distance` is negative, this is the same value as the result of `abs(distance)` calls to `index(before:)`.

<a id="discussion"></a>

## Discussion

The following example obtains an index advanced four positions from an array’s starting index and then prints the element at that position.

```swift
let numbers = [10, 20, 30, 40, 50]
let i = numbers.index(numbers.startIndex, offsetBy: 4)
print(numbers[i])
// Prints "50"
```

The value passed as `distance` must not offset `i` beyond the bounds of the collection.

## See Also

### Manipulating Indices

- [startIndex](startindex.md): The position of the first element in a nonempty array.
- [endIndex](endindex.md): The array’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
- [formIndex(after:)](formindex%28after_%29.md): Replaces the given index with its successor.
- [index(before:)](index%28before_%29.md): Returns the position immediately before the given index.
- [formIndex(before:)](formindex%28before_%29.md): Replaces the given index with its predecessor.
- [formIndex(\_:offsetBy:)](formindex%28__offsetby_%29.md): Offsets the given index by the specified distance.
- [index(\_:offsetBy:limitedBy:)](index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [formIndex(\_:offsetBy:limitedBy:)](formindex%28__offsetby_limitedby_%29.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
- [distance(from:to:)](distance%28from_to_%29.md): Returns the distance between two indices.
