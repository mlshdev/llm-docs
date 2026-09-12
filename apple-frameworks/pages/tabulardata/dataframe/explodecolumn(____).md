> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/explodecolumn(_:_:)](https://developer.apple.com/documentation/tabulardata/dataframe/explodecolumn(_:_:))

# explodeColumn(\_:\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Replaces each row in a collection column that you select by name, with a new row for each element in the original row’s collection.

## Declaration

```swift
mutating func explodeColumn<T>(_ name: String, _ type: T.Type) where T : Collection
```

## Parameters

- `name`: A column name.

## See Also

### Expanding a Column

- [explodeColumn(\_:)](explodecolumn%28__%29.md): Replaces each row in a collection column that you select by column identifier, with a new row for each element in the original row’s collection.
- [explodingColumn(\_:\_:)](explodingcolumn%28____%29.md): Generates a data frame by replacing each row in a collection column that you select by name, with a new row for each element in the original row’s collection.
- [explodingColumn(\_:)](explodingcolumn%28__%29.md): Generates a data frame by replacing each row in a collection column that you select by column identifier, with a new row for each element in the original row’s collection.
