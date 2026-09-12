> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/index(_:offsetby:)](https://developer.apple.com/documentation/swift/string/index(_:offsetby:))

# index(\_:offsetBy:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an index that is the specified distance from the given index.

## Declaration

```swift
func index(_ i: String.Index, offsetBy distance: Int) -> String.Index
```

## Parameters

- `i`: A valid index of the collection.
- `distance`: The distance to offset `i`.

<a id="return-value"></a>

## Return Value

An index offset by `distance` from the index `i`. If `distance` is positive, this is the same value as the result of `distance` calls to `index(after:)`. If `distance` is negative, this is the same value as the result of `abs(distance)` calls to `index(before:)`.

<a id="discussion"></a>

## Discussion

The following example obtains an index advanced four positions from a string’s starting index and then prints the character at that position.

```swift
let s = "Swift"
let i = s.index(s.startIndex, offsetBy: 4)
print(s[i])
// Prints "t"
```

The value passed as `distance` must not offset `i` beyond the bounds of the collection.

> **Complexity**

> O(*n*), where *n* is the absolute value of `distance`.

## See Also

### Manipulating Indices

- [startIndex](startindex.md): The position of the first character in a nonempty string.
- [endIndex](endindex.md): A string’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
- [formIndex(after:)](formindex%28after_%29.md): Replaces the given index with its successor.
- [index(before:)](index%28before_%29.md): Returns the position immediately before the given index.
- [formIndex(before:)](formindex%28before_%29.md): Replaces the given index with its predecessor.
- [index(\_:offsetBy:limitedBy:)](index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [formIndex(\_:offsetBy:)](formindex%28__offsetby_%29.md): Offsets the given index by the specified distance.
- [formIndex(\_:offsetBy:limitedBy:)](formindex%28__offsetby_limitedby_%29.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
- [distance(from:to:)](distance%28from_to_%29.md): Returns the distance between two indices.
- [indices](indices-swift.property.md): Conforms when `Indices` is `DefaultIndices<Self>`. The indices that are valid for subscripting the collection, in ascending order.
