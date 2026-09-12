> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/combinecolumns(_:_:into:transform:)-48ypf](https://developer.apple.com/documentation/tabulardata/dataframe/combinecolumns(_:_:into:transform:)-48ypf)

# combineColumns(\_:\_:into:transform:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Merges two columns that you select by name into a new column.

## Declaration

```swift
mutating func combineColumns<E1, E2, R>(_ columnName1: String, _ columnName2: String, into newColumnName: String, transform: (E1?, E2?) throws -> R?) rethrows
```

## Parameters

- `columnName1`: The name of a column.
- `columnName2`: The name of another column.
- `newColumnName`: The name of the new column that replaces the two columns.
- `transform`: A closure that combines the corresponding elements of the two columns into one element.

## See Also

### Merging Columns

- [combineColumns(\_:\_:into:transform:)](combinecolumns%28____into_transform_%29-85gix.md): Merges two columns that you select by column identifier into a new column.
- [combineColumns(\_:\_:\_:into:transform:)](combinecolumns%28______into_transform_%29-4vyjn.md): Merges three columns that you select by name into a new column.
- [combineColumns(\_:\_:\_:into:transform:)](combinecolumns%28______into_transform_%29-48g26.md): Merges three columns that you select by column identifier into a new column.
