> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgrouping/counts(order:)](https://developer.apple.com/documentation/tabulardata/rowgrouping/counts(order:))

# counts(order:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame with two columns, one that has a row for each group key and another for the number of rows in the group.

## Declaration

```swift
func counts(order: Order? = nil) -> DataFrame
```

## Parameters

- `order`: A sorting order the method uses to sort the data frame by its count column.

<a id="discussion"></a>

## Discussion

The name of the data frame’s column that stores the number of rows in each group is *count*.

## See Also

### Aggregating a Row Grouping

- [aggregated(on:naming:transform:)](aggregated%28on_naming_transform_%29.md): Generates a data frame by aggregating each group’s contents for each column you list by name.
