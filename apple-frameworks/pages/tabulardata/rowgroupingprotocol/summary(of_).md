> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgroupingprotocol/summary(of:)](https://developer.apple.com/documentation/tabulardata/rowgroupingprotocol/summary(of:))

# summary(of:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a group summaries instance of the row grouping’s columns you select by name.

## Declaration

```swift
func summary(of columnNames: [String]) -> any GroupSummaries
```

## Parameters

- `columnNames`: An array of column names.

## Default Implementations

### RowGroupingProtocol Implementations

- [summary(of:)](summary%28of_%29-n5ia.md): Generates a categorical summary of the columns you select by name.

## See Also

### Summarizing a Row Grouping

- [summary()](summary%28%29.md): Generates a group summaries instance of the row grouping’s columns.
- [GroupSummaries](../groupsummaries.md): A collection of group summaries.
