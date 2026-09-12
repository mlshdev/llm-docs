> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgrouping/aggregated(on:naming:transform:)](https://developer.apple.com/documentation/tabulardata/rowgrouping/aggregated(on:naming:transform:))

# aggregated(on:naming:transform:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame by aggregating each group’s contents for each column you list by name.

## Declaration

```swift
func aggregated<Element, Result>(on columnNames: [String], naming: (String) -> String, transform: (DiscontiguousColumnSlice<Element>) throws -> Result?) rethrows -> DataFrame
```

## Parameters

- `columnNames`: A comma-separated, or variadic, list of column names.
- `naming`: A closure that converts a column name to another name.
- `transform`: A closure that aggregates a group’s elements in a specific column.

<a id="discussion"></a>

## Discussion

The data frame contains two columns that:

- Identify each group
- Store the results of your aggregation transform closure

## See Also

### Aggregating a Row Grouping

- [counts(order:)](counts%28order_%29.md): Generates a data frame with two columns, one that has a row for each group key and another for the number of rows in the group.
