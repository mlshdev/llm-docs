> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgrouping](https://developer.apple.com/documentation/tabulardata/rowgrouping)

# RowGrouping

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A collection of row selections that have the same value in a column.

## Declaration

```swift
struct RowGrouping<GroupingKey> where GroupingKey : Hashable
```

## Topics

### Creating a Row Grouping

- [init(frame:columnName:timeUnit:)](rowgrouping/init%28frame_columnname_timeunit_%29.md): Conforms when `GroupingKey` conforms to `Hashable`. Creates a row grouping from a column with date or time elements.
- [init(groups:groupKeysColumnName:)](rowgrouping/init%28groups_groupkeyscolumnname_%29.md): Creates a row grouping from a list of groups.

### Inspecting a Row Grouping

- [count](rowgrouping/count.md): Conforms when `GroupingKey` conforms to `Hashable`. The number of groups in the row grouping.
- [subscript(\_:)](rowgrouping/subscript%28__%29-5z2eg.md): Conforms when `GroupingKey` conforms to `Hashable`. Retrieves a group at an index.

### Transforming a Row Grouping

- [mapGroups(\_:)](rowgrouping/mapgroups%28__%29.md): Generates a row grouping that applies a transformation closure to each group in the original.

### Splitting a Row Grouping

- [randomSplit(by:seed:)](rowgrouping/randomsplit%28by_seed_%29.md): Conforms when `GroupingKey` conforms to `Hashable`. Generates two row groupings by randomly splitting the original with a proportion and a seed number.

### Aggregating a Row Grouping

- [counts(order:)](rowgrouping/counts%28order_%29.md): Generates a data frame with two columns, one that has a row for each group key and another for the number of rows in the group.
- [aggregated(on:naming:transform:)](rowgrouping/aggregated%28on_naming_transform_%29.md): Generates a data frame by aggregating each group’s contents for each column you list by name.

### Flattening a Row Grouping

- [ungrouped()](rowgrouping/ungrouped%28%29.md): Generates a data frame that contains all the rows from each group in the row grouping.

### Summarizing a Row Grouping

- [summary()](rowgrouping/summary%28%29.md): Conforms when `GroupingKey` conforms to `Hashable`. Generates a group summaries instance for the columns of the row grouping.
- [summary(of:)](rowgrouping/summary%28of_%29.md): Conforms when `GroupingKey` conforms to `Hashable`. Generates a group summaries instance for the columns you select by name.
- [GroupSummaries](groupsummaries.md): A collection of group summaries.

### Describing a Row Grouping

- [description](rowgrouping/description.md): A text representation of the row grouping.

### Subscripts

- [subscript(\_:)](rowgrouping/subscript%28__%29-2xxs8.md): Retrieves a group slice by key.

### Default Implementations

- [Collection Implementations](rowgrouping/collection-implementations.md)
- [RandomAccessCollection Implementations](rowgrouping/randomaccesscollection-implementations.md)
- [RowGroupingProtocol Implementations](rowgrouping/rowgroupingprotocol-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [RowGroupingProtocol](rowgroupingprotocol.md)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Grouping Rows

- [grouped(by:)](dataframe/grouped%28by_%29.md): Creates a grouping of rows that the method selects by choosing unique values in a column.
- [RowGroupingProtocol](rowgroupingprotocol.md): A type that represents a collection of row selections that have the same value in a column.
