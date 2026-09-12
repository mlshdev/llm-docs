> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/sort(on:_:_:order:)](https://developer.apple.com/documentation/tabulardata/dataframe/sort(on:_:_:order:))

# sort(on:\_:\_:order:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Arranges the rows of a data frame according to three columns that you select by their column identifiers.

## Declaration

```swift
mutating func sort<T0, T1, T2>(on columnID0: ColumnID<T0>, _ columnID1: ColumnID<T1>, _ columnID2: ColumnID<T2>, order: Order = .ascending) where T0 : Comparable, T1 : Comparable, T2 : Comparable
```

## Parameters

- `columnID0`: The identifier of a column.
- `columnID1`: The identifier of a second column.
- `columnID2`: The identifier of a third column.
- `order`: A sorting order.

<a id="discussion"></a>

## Discussion

> **Note**

> Elements with a value of `nil` are less than all non-`nil` values.

## See Also

### Sorting a Data Frame

- [sort(on:order:)](sort%28on_order_%29-4vns7.md): Arranges the rows of a data frame according to a column that you select by its name.
- [sort(on:\_:order:)](sort%28on___order_%29-78avw.md): Arranges the rows of a data frame according to a column that you select by its name and type.
- [sort(on:\_:by:)](sort%28on___by_%29.md): Arranges the rows of a data frame according to a column that you select by its name and type, with a predicate.
- [sort(on:by:)](sort%28on_by_%29.md): Arranges the rows of a data frame according to a column that you select by its column identifier, with a predicate.
- [sort(on:order:)](sort%28on_order_%29-5ep7w.md): Arranges the rows of a data frame according to a column that you select by its column identifier.
- [sort(on:\_:order:)](sort%28on___order_%29-8wrkl.md): Arranges the rows of a data frame according to two columns that you select by their column identifiers.
