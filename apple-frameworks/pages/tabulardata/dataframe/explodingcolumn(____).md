> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/explodingcolumn(_:_:)](https://developer.apple.com/documentation/tabulardata/dataframe/explodingcolumn(_:_:))

# explodingColumn(\_:\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame by replacing each row in a collection column that you select by name, with a new row for each element in the original row’s collection.

## Declaration

```swift
func explodingColumn<T>(_ name: String, _ type: T.Type) -> DataFrame where T : Collection
```

## Parameters

- `name`: A column name.
- `type`: The underlying type of the column.

## See Also

### Expanding a Column

- [explodeColumn(\_:\_:)](explodecolumn%28____%29.md): Replaces each row in a collection column that you select by name, with a new row for each element in the original row’s collection.
- [explodeColumn(\_:)](explodecolumn%28__%29.md): Replaces each row in a collection column that you select by column identifier, with a new row for each element in the original row’s collection.
- [explodingColumn(\_:)](explodingcolumn%28__%29.md): Generates a data frame by replacing each row in a collection column that you select by column identifier, with a new row for each element in the original row’s collection.
