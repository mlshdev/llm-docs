> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/grouped(by:_:)](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/grouped(by:_:))

# grouped(by:\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a grouping from two columns of different types.

## Declaration

```swift
func grouped<T0, T1>(by column0: ColumnID<T0>, _ column1: ColumnID<T1>) -> some RowGroupingProtocol where T0 : Hashable, T1 : Hashable

```

## Parameters

- `column0`: A column identifier.
- `column1`: A second column identifier.

## See Also

### Creating a Row Grouping by Multiple Columns

- [grouped(by:)](grouped%28by_%29-4wcw6.md): Creates a grouping from multiple columns you select by name.
- [grouped(by:)](grouped%28by_%29-6m6to.md): Creates a grouping from multiple columns that you select by column identifier.
- [grouped(by:\_:\_:)](grouped%28by_____%29.md): Creates a grouping from three columns of different types.
