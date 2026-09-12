> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexset/index(before:)](https://developer.apple.com/documentation/foundation/indexset/index(before:))

# index(before:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the index that precedes the given index in the set.

## Declaration

```swift
func index(before i: IndexSet.Index) -> IndexSet.Index
```

## See Also

### Manipulating Indexes

- [startIndex](startindex.md): The beginning index in the set.
- [endIndex](endindex.md): The ending index in the set.
- [index(after:)](index%28after_%29.md): Returns the index that follows the given index in the set.
- [formIndex(after:)](formindex%28after_%29.md): Modifies the given index to refer to the item after the one it currently refers to.
- [formIndex(before:)](formindex%28before_%29.md): Modifies the given index to refer to the item before the one it currently refers to.
- [indexRange(in:)](indexrange%28in_%29-539lz.md): Return a `Range<IndexSet.Index>` which can be used to subscript the index set.
