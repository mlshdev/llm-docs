> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/transformcolumn(_:_:)-2avtt](https://developer.apple.com/documentation/tabulardata/dataframe/transformcolumn(_:_:)-2avtt)

# transformColumn(\_:\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Applies a transform closure that modifies the nonempty elements of a column you select by column identifier.

## Declaration

```swift
mutating func transformColumn<From, To>(_ id: ColumnID<From>, _ transform: (From) throws -> To?) rethrows
```

## Parameters

- `id`: The identifier of a column in the data frame.
- `transform`: A closure that transforms each  non-`nil` element in the column.

## See Also

### Transforming a Column

- [transformColumn(\_:\_:)](transformcolumn%28____%29-5s9en.md): Applies a transform closure that modifies the elements of a column you select by column identifier.
- [transformColumn(\_:\_:)](transformcolumn%28____%29-3czz0.md): Applies a transform closure that modifies the elements of a column you select by name.
- [transformColumn(\_:\_:)](transformcolumn%28____%29-6cxpn.md): Applies a transform closure that modifies the nonempty elements of a column you select by name.
