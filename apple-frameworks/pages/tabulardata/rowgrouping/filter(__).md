> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgrouping/filter(_:)](https://developer.apple.com/documentation/tabulardata/rowgrouping/filter(_:))

# filter(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

Returns a row grouping containing only the groups that satisfy a predicate.

## Declaration

```swift
func filter(_ isIncluded: (DataFrame.Slice) throws -> Bool) rethrows -> RowGrouping<GroupingKey>
```

## Parameters

- `isIncluded`: A predicate closure that takes a group and returns a Boolean that indicates whether the group is included.

<a id="return-value"></a>

## Return Value

A data frame slice that contains the rows that satisfy the predicate.
