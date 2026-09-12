> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexset/indexrange(in:)-539lz](https://developer.apple.com/documentation/foundation/indexset/indexrange(in:)-539lz)

# indexRange(in:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Return a `Range<IndexSet.Index>` which can be used to subscript the index set.

## Declaration

```swift
func indexRange(in range: Range<IndexSet.Element>) -> Range<IndexSet.Index>
```

## Parameters

- `range`: The range of integers to include.

<a id="Discussion"></a>

## Discussion

The resulting range is the range of the intersection of the integers in `range` with the index set. The resulting range will be `isEmpty` if the intersection is empty.

## See Also

### Manipulating Indexes

- [startIndex](startindex.md): The beginning index in the set.
- [endIndex](endindex.md): The ending index in the set.
- [index(after:)](index%28after_%29.md): Returns the index that follows the given index in the set.
- [index(before:)](index%28before_%29.md): Returns the index that precedes the given index in the set.
- [formIndex(after:)](formindex%28after_%29.md): Modifies the given index to refer to the item after the one it currently refers to.
- [formIndex(before:)](formindex%28before_%29.md): Modifies the given index to refer to the item before the one it currently refers to.
