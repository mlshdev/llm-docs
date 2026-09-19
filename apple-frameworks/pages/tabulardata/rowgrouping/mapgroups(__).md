> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/rowgrouping/mapgroups(_:)

# mapGroups(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a row grouping that applies a transformation closure to each group in the original.

## Declaration

```swift
func mapGroups(_ transform: (DataFrame.Slice) throws -> DataFrame) rethrows -> RowGrouping<GroupingKey>
```

## Parameters

- `transform`: A closure that generates a data frame from a data frame slice that represents a group.
