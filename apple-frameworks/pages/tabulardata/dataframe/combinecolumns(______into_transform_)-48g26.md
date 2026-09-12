> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/combinecolumns(_:_:_:into:transform:)-48g26](https://developer.apple.com/documentation/tabulardata/dataframe/combinecolumns(_:_:_:into:transform:)-48g26)

# combineColumns(\_:\_:\_:into:transform:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Merges three columns that you select by column identifier into a new column.

## Declaration

```swift
mutating func combineColumns<E1, E2, E3, R>(_ columnID1: ColumnID<E1>, _ columnID2: ColumnID<E2>, _ columnID3: ColumnID<E3>, into newColumnName: String, transform: (E1?, E2?, E3?) throws -> R?) rethrows
```

## Parameters

- `columnID1`: The identifier of a column.
- `columnID2`: The identifier of a second column.
- `columnID3`: The identifier of a third column.
- `newColumnName`: The name of the new column that replaces the three columns.
- `transform`: A closure that combines the corresponding elements of the three columns into one element.

## See Also

### Merging Columns

- [combineColumns(\_:\_:into:transform:)](combinecolumns%28____into_transform_%29-48ypf.md): Merges two columns that you select by name into a new column.
- [combineColumns(\_:\_:into:transform:)](combinecolumns%28____into_transform_%29-85gix.md): Merges two columns that you select by column identifier into a new column.
- [combineColumns(\_:\_:\_:into:transform:)](combinecolumns%28______into_transform_%29-4vyjn.md): Merges three columns that you select by name into a new column.
