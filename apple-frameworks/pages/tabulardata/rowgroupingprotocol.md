> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgroupingprotocol](https://developer.apple.com/documentation/tabulardata/rowgroupingprotocol)

# RowGroupingProtocol

**Framework:** TabularData  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that represents a collection of row selections that have the same value in a column.

## Declaration

```swift
protocol RowGroupingProtocol : CustomStringConvertible
```

## Topics

### Inspecting a Row Grouping

- [count](rowgroupingprotocol/count.md): The number of groups in the row grouping.

### Transforming a Row Grouping

- [mapGroups(\_:)](rowgroupingprotocol/mapgroups%28__%29.md): Generates a row grouping that applies a transformation closure to each group in the original.

### Splitting a Row Grouping

- [randomSplit(by:)](rowgroupingprotocol/randomsplit%28by_%29.md): Generates two row groupings by randomly splitting the original with a proportion.
- [randomSplit(by:seed:)](rowgroupingprotocol/randomsplit%28by_seed_%29.md): Generates two row groupings by randomly splitting the original by a proportion.

### Aggregating a Row Grouping

- [counts()](rowgroupingprotocol/counts%28%29.md): Generates a data frame with two columns, one that has a row for each group key and another for the number of rows in the group.
- [counts(order:)](rowgroupingprotocol/counts%28order_%29.md): Generates a data frame, that you choose how to sort, with two columns, one that has a row for each group key and another for the number or rows in the group.
- [sums(\_:\_:order:)](rowgroupingprotocol/sums%28____order_%29.md): Generates a data frame that contains the sum of each group’s rows along a column you select by name.
- [sums(\_:order:)](rowgroupingprotocol/sums%28__order_%29.md): Generates a data frame that contains the sum of each group’s rows along a column you select by column identifier.
- [means(\_:\_:order:)](rowgroupingprotocol/means%28____order_%29.md): Generates a data frame that contains the average mean of each group’s rows along a column you select by name.
- [means(\_:order:)](rowgroupingprotocol/means%28__order_%29.md): Generates a data frame that contains the average mean of each group’s rows along a column you select by column identifier.
- [minimums(\_:\_:order:)](rowgroupingprotocol/minimums%28____order_%29.md): Generates a data frame that contains the minimums of each group’s rows along a column you select by name.
- [minimums(\_:order:)](rowgroupingprotocol/minimums%28__order_%29.md): Generates a data frame that contains the minimums of each group’s rows along a column you select by column identifier.
- [maximums(\_:\_:order:)](rowgroupingprotocol/maximums%28____order_%29.md): Generates a data frame that contains the maximums of each group’s rows along a column you select by name.
- [maximums(\_:order:)](rowgroupingprotocol/maximums%28__order_%29.md): Generates a data frame that contains the maximums of each group’s rows along a column you select by column identifier.
- [aggregated(on:into:transform:)](rowgroupingprotocol/aggregated%28on_into_transform_%29.md): Generates a data frame with a column for the group identifier and a column of values from the transform.
- [aggregated(on:naming:transform:)](rowgroupingprotocol/aggregated%28on_naming_transform_%29.md): Generates a data frame by aggregating each group’s contents for each column you select by name.

### Flattening a Row Grouping

- [ungrouped()](rowgroupingprotocol/ungrouped%28%29.md): Generates a data frame that contains all the rows from each group in the row grouping.

### Summarizing a Row Grouping

- [summary()](rowgroupingprotocol/summary%28%29.md): Generates a group summaries instance of the row grouping’s columns.
- [summary(of:)](rowgroupingprotocol/summary%28of_%29.md): Generates a group summaries instance of the row grouping’s columns you select by name.
- [GroupSummaries](groupsummaries.md): A collection of group summaries.

### Instance Methods

- [filter(\_:)](rowgroupingprotocol/filter%28__%29.md): Returns a row grouping containing only the groups that satisfy a predicate.
- [quantiles(\_:\_:quantile:order:)](rowgroupingprotocol/quantiles%28____quantile_order_%29.md): Generates a data frame that contains the quantile of each group’s rows along a column you select by name.
- [quantiles(\_:quantile:order:)](rowgroupingprotocol/quantiles%28__quantile_order_%29.md): Generates a data frame that contains the quantiles of each group’s rows along a column you select by column identifier.

### Subscripts

- [subscript(\_:)](rowgroupingprotocol/subscript%28__%29.md): Retrieves a group slice by key.

## Relationships

### Inherits From

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)

### Conforming Types

- [RowGrouping](rowgrouping.md)

## See Also

### Grouping Rows

- [RowGrouping](rowgrouping.md): A collection of row selections that have the same value in a column.
- [grouped(by:)](dataframe/grouped%28by_%29.md): Creates a grouping of rows that the method selects by choosing unique values in a column.
