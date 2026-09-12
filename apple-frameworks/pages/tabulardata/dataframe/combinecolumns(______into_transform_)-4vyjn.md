> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/combinecolumns(_:_:_:into:transform:)-4vyjn](https://developer.apple.com/documentation/tabulardata/dataframe/combinecolumns(_:_:_:into:transform:)-4vyjn)

# combineColumns(\_:\_:\_:into:transform:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Merges three columns that you select by name into a new column.

## Declaration

```swift
mutating func combineColumns<E1, E2, E3, R>(_ columnName1: String, _ columnName2: String, _ columnName3: String, into newColumnName: String, transform: (E1?, E2?, E3?) throws -> R?) rethrows
```

## Parameters

- `columnName1`: The name of a column.
- `columnName2`: The name of a second column.
- `columnName3`: The name of a third column.
- `newColumnName`: The name of the new column that replaces the three columns.
- `transform`: A closure that combines the corresponding elements of the three columns into one element.

## See Also

### Merging Columns

- [combineColumns(\_:\_:into:transform:)](combinecolumns%28____into_transform_%29-48ypf.md): Merges two columns that you select by name into a new column.
- [combineColumns(\_:\_:into:transform:)](combinecolumns%28____into_transform_%29-85gix.md): Merges two columns that you select by column identifier into a new column.
- [combineColumns(\_:\_:\_:into:transform:)](combinecolumns%28______into_transform_%29-48g26.md): Merges three columns that you select by column identifier into a new column.
