> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/distance(from:to:)](https://developer.apple.com/documentation/swift/string/distance(from:to:))

# distance(from:to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the distance between two indices.

## Declaration

```swift
func distance(from start: String.Index, to end: String.Index) -> Int
```

## Parameters

- `start`: A valid index of the collection.
- `end`: Another valid index of the collection. If `end` is equal to `start`, the result is zero.

<a id="return-value"></a>

## Return Value

The distance between `start` and `end`.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(*n*), where *n* is the resulting distance.

## See Also

### Manipulating Indices

- [startIndex](startindex.md): The position of the first character in a nonempty string.
- [endIndex](endindex.md): A string’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [index(after:)](index%28after_%29.md): Returns the position immediately after the given index.
- [formIndex(after:)](formindex%28after_%29.md): Replaces the given index with its successor.
- [index(before:)](index%28before_%29.md): Returns the position immediately before the given index.
- [formIndex(before:)](formindex%28before_%29.md): Replaces the given index with its predecessor.
- [index(\_:offsetBy:)](index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [index(\_:offsetBy:limitedBy:)](index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [formIndex(\_:offsetBy:)](formindex%28__offsetby_%29.md): Offsets the given index by the specified distance.
- [formIndex(\_:offsetBy:limitedBy:)](formindex%28__offsetby_limitedby_%29.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
- [indices](indices-swift.property.md): Conforms when `Indices` is `DefaultIndices<Self>`. The indices that are valid for subscripting the collection, in ascending order.
