> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgrouping/index(after:)](https://developer.apple.com/documentation/tabulardata/rowgrouping/index(after:))

# index(after:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the index immediately after an element index.

## Declaration

```swift
func index(after i: Int) -> Int
```

## Parameters

- `i`: A valid index to an element in the column.

## See Also

### Retrieving an Index

- [startIndex](startindex.md): Conforms when `GroupingKey` conforms to `Hashable`. The index of the initial group in the row grouping.
- [endIndex](endindex.md): Conforms when `GroupingKey` conforms to `Hashable`. The index of the final group in the row grouping.
- [index(before:)](index%28before_%29.md): Conforms when `GroupingKey` conforms to `Hashable`. Returns the index immediately before an element index.
