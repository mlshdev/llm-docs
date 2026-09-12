> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/transformcolumn(_:_:)-6cxpn](https://developer.apple.com/documentation/tabulardata/dataframe/transformcolumn(_:_:)-6cxpn)

# transformColumn(\_:\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Applies a transform closure that modifies the nonempty elements of a column you select by name.

## Declaration

```swift
mutating func transformColumn<From, To>(_ name: String, _ transform: (From) throws -> To?) rethrows
```

## Parameters

- `name`: The name of a column in the data frame.
- `transform`: A closure that transforms each element in the column.

## See Also

### Transforming a Column

- [transformColumn(\_:\_:)](transformcolumn%28____%29-2avtt.md): Applies a transform closure that modifies the nonempty elements of a column you select by column identifier.
- [transformColumn(\_:\_:)](transformcolumn%28____%29-5s9en.md): Applies a transform closure that modifies the elements of a column you select by column identifier.
- [transformColumn(\_:\_:)](transformcolumn%28____%29-3czz0.md): Applies a transform closure that modifies the elements of a column you select by name.
