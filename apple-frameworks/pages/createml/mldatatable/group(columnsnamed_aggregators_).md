> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/group(columnsnamed:aggregators:)](https://developer.apple.com/documentation/createml/mldatatable/group(columnsnamed:aggregators:))

# group(columnsNamed:aggregators:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new data table with the given columns and adds a new column for each of the given aggregators.

## Declaration

```swift
func group<S>(columnsNamed: String..., aggregators: S) -> MLDataTable where S : Sequence, S.Element == MLDataTable.Aggregator
```

## Parameters

- `columnsNamed`: The name of the columns to include in the new data table.
- `aggregators`: A sequence of aggregators, each of which adds a column in the new data table.

<a id="return-value"></a>

## Return Value

A new data table.

## See Also

### Aggregating rows

- [MLDataTable.Aggregator](aggregator.md): A collection of column operations you can use with a data table’s `group` method.
