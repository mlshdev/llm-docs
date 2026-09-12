> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgrouping/summary(of:)](https://developer.apple.com/documentation/tabulardata/rowgrouping/summary(of:))

# summary(of:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a group summaries instance for the columns you select by name.

## Declaration

```swift
func summary(of columnNames: [String]) -> any GroupSummaries
```

## Parameters

- `columnNames`: An array of column names.

## See Also

### Summarizing a Row Grouping

- [summary()](summary%28%29.md): Conforms when `GroupingKey` conforms to `Hashable`. Generates a group summaries instance for the columns of the row grouping.
- [GroupSummaries](../groupsummaries.md): A collection of group summaries.
