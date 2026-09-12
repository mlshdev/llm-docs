> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/sorted(on:_:order:)-79los](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/sorted(on:_:order:)-79los)

# sorted(on:\_:order:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame by copying the data frame’s rows and then sorting the rows according to two columns that you select by their column identifiers.

## Declaration

```swift
func sorted<T0, T1>(on columnID0: ColumnID<T0>, _ columnID1: ColumnID<T1>, order: Order = .ascending) -> DataFrame where T0 : Comparable, T1 : Comparable
```

## Parameters

- `columnID0`: The identifier of a column.
- `columnID1`: The identifier of another column.
- `order`: A sorting order.

<a id="discussion"></a>

## Discussion

> **Note**

> Elements with a value of `nil` are less than all non-`nil` values.

## See Also

### Creating a Data Frame by Sorting Multiple Columns

- [sorted(on:\_:\_:order:)](sorted%28on_____order_%29.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to three columns that you select by their column identifiers.
