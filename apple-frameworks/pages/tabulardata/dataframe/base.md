> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/base](https://developer.apple.com/documentation/tabulardata/dataframe/base)

# base

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The underlying data frame.

## Declaration

```swift
var base: DataFrame { get }
```

<a id="discussion"></a>

## Discussion

For a [DataFrame](../dataframe.md) instance, this property is equivalent to `self`.

## See Also

### Inspecting a Data Frame

- [shape](shape.md): The number of rows and columns in the data frame.
- [columns](columns.md): The entire data frame as a collection of columns.
- [rows](rows-swift.property.md): The entire data frame as a collection of rows.
- [DataFrame.Rows](rows-swift.struct.md): A collection of rows in a data frame.
- [containsColumn(\_:\_:)](containscolumn%28____%29.md): Returns a Boolean value indicating whether the data frame contains a column.
