> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/grouped(by:)-6m6to](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/grouped(by:)-6m6to)

# grouped(by:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a grouping from multiple columns that you select by column identifier.

## Declaration

```swift
func grouped<T>(by columnIDs: ColumnID<T>...) -> some RowGroupingProtocol where T : Hashable

```

## Parameters

- `columnIDs`: A comma-separated, or variadic, list of column identifiers.

## See Also

### Creating a Row Grouping by Multiple Columns

- [grouped(by:)](grouped%28by_%29-4wcw6.md): Creates a grouping from multiple columns you select by name.
- [grouped(by:\_:)](grouped%28by___%29.md): Creates a grouping from two columns of different types.
- [grouped(by:\_:\_:)](grouped%28by_____%29.md): Creates a grouping from three columns of different types.
