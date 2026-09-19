> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/dataframeprotocol/grouped(by:)-77mq2

# grouped(by:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a grouping of rows that the method selects by choosing unique values in a column.

## Declaration

```swift
func grouped<GroupingKey>(by columnID: ColumnID<GroupingKey>) -> RowGrouping<GroupingKey> where GroupingKey : Hashable
```

## Parameters

- `columnID`: A column identifier.

<a id="return-value"></a>

## Return Value

A collection of groups.

## See Also

### Creating a Row Grouping by a Column

- [grouped(by:timeUnit:)](grouped%28by_timeunit_%29-7s782.md): Creates a grouping of rows that the method selects by choosing unique units of time in a date column you select by name.
- [grouped(by:timeUnit:)](grouped%28by_timeunit_%29-78cy.md): Creates a grouping of rows that the method selects by choosing unique units of time in a date column you select by column identifier.
- [grouped(by:transform:)](grouped%28by_transform_%29-3cr4p.md): Creates a grouping of rows that the method selects by choosing unique values the transform closure creates with elements of a column you select by name.
- [grouped(by:transform:)](grouped%28by_transform_%29-3aade.md): Creates a grouping of rows that the method selects by choosing unique values the transform closure creates with elements of a column you select by column identifier.
