> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/sorted(on:by:)](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/sorted(on:by:))

# sorted(on:by:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its column identifier, with a predicate.

## Declaration

```swift
func sorted<T>(on columnID: ColumnID<T>, by areInIncreasingOrder: (T, T) throws -> Bool) rethrows -> DataFrame
```

## Parameters

- `columnID`: The identifier of a column.
- `areInIncreasingOrder`: A closure that returns a Boolean that indicates whether the two elements are in increasing order.

<a id="discussion"></a>

## Discussion

> **Note**

> Elements with a value of `nil` are less than all non-`nil` values.

## See Also

### Creating a Data Frame by Sorting a Column

- [sorted(on:order:)](sorted%28on_order_%29-818u5.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its name.
- [sorted(on:\_:order:)](sorted%28on___order_%29-8d7rr.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its name and type.
- [sorted(on:\_:by:)](sorted%28on___by_%29.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its name and type, with a predicate.
- [sorted(on:order:)](sorted%28on_order_%29-5nl5c.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its column identifier.
