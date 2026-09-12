> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/sorted(on:_:_:order:)](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/sorted(on:_:_:order:))

# sorted(on:\_:\_:order:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame by copying the data frame’s rows and then sorting the rows according to three columns that you select by their column identifiers.

## Declaration

```swift
func sorted<T0, T1, T2>(on columnID0: ColumnID<T0>, _ columnID1: ColumnID<T1>, _ columnID2: ColumnID<T2>, order: Order = .ascending) -> DataFrame where T0 : Comparable, T1 : Comparable, T2 : Comparable
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

### Creating a Data Frame by Sorting Multiple Columns

- [sorted(on:\_:order:)](sorted%28on___order_%29-79los.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to two columns that you select by their column identifiers.
