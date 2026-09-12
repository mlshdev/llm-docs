> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/sorted(on:_:order:)-8d7rr](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/sorted(on:_:order:)-8d7rr)

# sorted(on:\_:order:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its name and type.

## Declaration

```swift
func sorted<T>(on columnName: String, _ type: T.Type, order: Order = .ascending) -> DataFrame where T : Comparable
```

## Parameters

- `columnName`: The name of a column.
- `type`: The column’s type.
- `order`: A sorting order.

<a id="discussion"></a>

## Discussion

> **Note**

> Elements with a value of `nil` are less than all non-`nil` values.

## See Also

### Creating a Data Frame by Sorting a Column

- [sorted(on:order:)](sorted%28on_order_%29-818u5.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its name.
- [sorted(on:\_:by:)](sorted%28on___by_%29.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its name and type, with a predicate.
- [sorted(on:order:)](sorted%28on_order_%29-5nl5c.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its column identifier.
- [sorted(on:by:)](sorted%28on_by_%29.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its column identifier, with a predicate.
