> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/indices-swift.property](https://developer.apple.com/documentation/swift/string/indices-swift.property)

# indices

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The indices that are valid for subscripting the collection, in ascending order.

## Declaration

```swift
var indices: DefaultIndices<Self> { get }
```

<a id="discussion"></a>

## Discussion

A collection’s `indices` property can hold a strong reference to the collection itself, causing the collection to be non-uniquely referenced. If you mutate the collection while iterating over its indices, a strong reference can cause an unexpected copy of the collection. To avoid the unexpected copy, use the `index(after:)` method starting with `startIndex` to produce indices instead.

```swift
var c = MyFancyCollection([10, 20, 30, 40, 50])
var i = c.startIndex
while i != c.endIndex {
    c[i] /= 5
    i = c.index(after: i)
}
// c == MyFancyCollection([2, 4, 6, 8, 10])
```

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
- [distance(from:to:)](distance%28from_to_%29.md): Returns the distance between two indices.
