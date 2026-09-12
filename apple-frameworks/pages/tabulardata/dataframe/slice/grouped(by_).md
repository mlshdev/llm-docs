> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/slice/grouped(by:)](https://developer.apple.com/documentation/tabulardata/dataframe/slice/grouped(by:))

# grouped(by:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a grouping of rows that the method selects by choosing unique values in a column.

## Declaration

```swift
func grouped(by columnName: String) -> any RowGroupingProtocol
```

## Parameters

- `columnName`: The name of a column.

## See Also

### Grouping Rows

- [RowGrouping](../../rowgrouping.md): A collection of row selections that have the same value in a column.
- [RowGroupingProtocol](../../rowgroupingprotocol.md): A type that represents a collection of row selections that have the same value in a column.
