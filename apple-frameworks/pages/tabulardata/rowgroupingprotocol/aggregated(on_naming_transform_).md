> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgroupingprotocol/aggregated(on:naming:transform:)](https://developer.apple.com/documentation/tabulardata/rowgroupingprotocol/aggregated(on:naming:transform:))

# aggregated(on:naming:transform:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame by aggregating each group’s contents for each column you select by name.

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

## Default Implementations

### RowGroupingProtocol Implementations

- [aggregated(on:naming:transform:)](aggregated%28on_naming_transform_%29-7s4mf.md): Generates a data frame by aggregating each group’s contents for each column you select by name.

## See Also

### Aggregating a Row Grouping

- [counts()](counts%28%29.md): Generates a data frame with two columns, one that has a row for each group key and another for the number of rows in the group.
- [counts(order:)](counts%28order_%29.md): Generates a data frame, that you choose how to sort, with two columns, one that has a row for each group key and another for the number or rows in the group.
- [sums(\_:\_:order:)](sums%28____order_%29.md): Generates a data frame that contains the sum of each group’s rows along a column you select by name.
- [sums(\_:order:)](sums%28__order_%29.md): Generates a data frame that contains the sum of each group’s rows along a column you select by column identifier.
- [means(\_:\_:order:)](means%28____order_%29.md): Generates a data frame that contains the average mean of each group’s rows along a column you select by name.
- [means(\_:order:)](means%28__order_%29.md): Generates a data frame that contains the average mean of each group’s rows along a column you select by column identifier.
- [minimums(\_:\_:order:)](minimums%28____order_%29.md): Generates a data frame that contains the minimums of each group’s rows along a column you select by name.
- [minimums(\_:order:)](minimums%28__order_%29.md): Generates a data frame that contains the minimums of each group’s rows along a column you select by column identifier.
- [maximums(\_:\_:order:)](maximums%28____order_%29.md): Generates a data frame that contains the maximums of each group’s rows along a column you select by name.
- [maximums(\_:order:)](maximums%28__order_%29.md): Generates a data frame that contains the maximums of each group’s rows along a column you select by column identifier.
- [aggregated(on:into:transform:)](aggregated%28on_into_transform_%29.md): Generates a data frame with a column for the group identifier and a column of values from the transform.
