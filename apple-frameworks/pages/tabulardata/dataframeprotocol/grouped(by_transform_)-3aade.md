> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/grouped(by:transform:)-3aade](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/grouped(by:transform:)-3aade)

# grouped(by:transform:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a grouping of rows that the method selects by choosing unique values the transform closure creates with elements of a column you select by column identifier.

## Declaration

```swift
func grouped<InputKey, GroupingKey>(by columnID: ColumnID<InputKey>, transform: (InputKey?) -> GroupingKey?) -> RowGrouping<GroupingKey> where GroupingKey : Hashable
```

## Parameters

- `columnID`: A column identifier.
- `transform`: A closure that transforms a column’s elements into a hashable type.

<a id="return-value"></a>

## Return Value

A collection of groups.

<a id="discussion"></a>

## Discussion

Create groupings that group rows by:

- Telephone area codes
- The first letter of a person’s last name
- A date’s year or quarter
- Number ranges

## See Also

### Creating a Row Grouping by a Column

- [grouped(by:)](grouped%28by_%29-77mq2.md): Creates a grouping of rows that the method selects by choosing unique values in a column.
- [grouped(by:timeUnit:)](grouped%28by_timeunit_%29-7s782.md): Creates a grouping of rows that the method selects by choosing unique units of time in a date column you select by name.
- [grouped(by:timeUnit:)](grouped%28by_timeunit_%29-78cy.md): Creates a grouping of rows that the method selects by choosing unique units of time in a date column you select by column identifier.
- [grouped(by:transform:)](grouped%28by_transform_%29-3cr4p.md): Creates a grouping of rows that the method selects by choosing unique values the transform closure creates with elements of a column you select by name.
