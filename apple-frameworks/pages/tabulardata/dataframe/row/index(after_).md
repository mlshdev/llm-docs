> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/row/index(after:)](https://developer.apple.com/documentation/tabulardata/dataframe/row/index(after:))

# index(after:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the column index immediately before a column index in the row.

## Declaration

```swift
func index(after i: Int) -> Int
```

## Parameters

- `i`: A valid column index to a value in the row.

## See Also

### Retrieving an Index

- [startIndex](startindex.md): The index of the initial column in the row.
- [endIndex](endindex.md): The index of the final column in the row.
- [index(before:)](index%28before_%29.md): Returns the column index immediately after a column index in the row.
