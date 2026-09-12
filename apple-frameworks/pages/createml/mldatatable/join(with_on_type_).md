> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/join(with:on:type:)](https://developer.apple.com/documentation/createml/mldatatable/join(with:on:type:))

# join(with:on:type:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a new data table by merging two data tables by the given columns.

## Declaration

```swift
func join(with: MLDataTable, on columnsNamed: String..., type: MLDataTable.JoinType = .inner) -> MLDataTable
```

## Parameters

- `with`: Another data table to merge with this data table.
- `columnsNamed`: The name of the columns to perform the `join` operation on. The method merges all rows with matching values in these columns.

  If you do not provide any column names, the method uses all the columns present in both tables.
- `type`: The type of `join` operation, which are equivalent to SQL `join` types.

<a id="return-value"></a>

## Return Value

A new data table.

## See Also

### Merging data tables

- [MLDataTable.JoinType](jointype.md): Join types available for [MLDataTable](../mldatatable.md) join operations.
