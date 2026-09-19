> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/rowgrouping/summary()

# summary()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a group summaries instance for the columns of the row grouping.

## Declaration

```swift
func summary() -> any GroupSummaries
```

## See Also

### Summarizing a Row Grouping

- [summary(of:)](summary%28of_%29.md): Conforms when `GroupingKey` conforms to `Hashable`. Generates a group summaries instance for the columns you select by name.
- [GroupSummaries](../groupsummaries.md): A collection of group summaries.
