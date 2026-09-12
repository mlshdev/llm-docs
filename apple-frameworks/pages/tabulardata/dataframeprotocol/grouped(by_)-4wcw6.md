> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/grouped(by:)-4wcw6](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/grouped(by:)-4wcw6)

# grouped(by:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a grouping from multiple columns you select by name.

## Declaration

```swift
func grouped(by columnNames: String...) -> some RowGroupingProtocol

```

## Parameters

- `columnNames`: A comma-separated, or variadic, list of column names.

## See Also

### Creating a Row Grouping by Multiple Columns

- [grouped(by:)](grouped%28by_%29-6m6to.md): Creates a grouping from multiple columns that you select by column identifier.
- [grouped(by:\_:)](grouped%28by___%29.md): Creates a grouping from two columns of different types.
- [grouped(by:\_:\_:)](grouped%28by_____%29.md): Creates a grouping from three columns of different types.
