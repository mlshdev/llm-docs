> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgroupingprotocol/ungrouped()](https://developer.apple.com/documentation/tabulardata/rowgroupingprotocol/ungrouped())

# ungrouped()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame that contains all the rows from each group in the row grouping.

## Declaration

```swift
func ungrouped() -> DataFrame
```

<a id="discussion"></a>

## Discussion

A row grouping can only use this method if all its groups have the same column names and types.

> **Important**

> The method discards a column with the same name as the row grouping itself.
