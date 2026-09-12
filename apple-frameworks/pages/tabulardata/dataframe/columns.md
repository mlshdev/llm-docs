> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/columns](https://developer.apple.com/documentation/tabulardata/dataframe/columns)

# columns

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The entire data frame as a collection of columns.

## Declaration

```swift
var columns: [AnyColumn] { get }
```

## See Also

### Inspecting a Data Frame

- [shape](shape.md): The number of rows and columns in the data frame.
- [rows](rows-swift.property.md): The entire data frame as a collection of rows.
- [DataFrame.Rows](rows-swift.struct.md): A collection of rows in a data frame.
- [base](base.md): The underlying data frame.
- [containsColumn(\_:\_:)](containscolumn%28____%29.md): Returns a Boolean value indicating whether the data frame contains a column.
