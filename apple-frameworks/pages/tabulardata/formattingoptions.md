> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/formattingoptions](https://developer.apple.com/documentation/tabulardata/formattingoptions)

# FormattingOptions

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A set of parameters that indicate how to present the contents of data frame or column types to a printable string.

## Declaration

```swift
struct FormattingOptions
```

## Topics

### Creating the Options Object

- [init()](formattingoptions/init%28%29.md): Creates a formatting options instance with default parameters.
- [init(locale:)](formattingoptions/init%28locale_%29.md): Creates a formatting options instance with a locale.
- [init(maximumLineWidth:maximumCellWidth:maximumRowCount:includesColumnTypes:)](formattingoptions/init%28maximumlinewidth_maximumcellwidth_maximumrowcount_includescolumntypes_%29.md): Creates a formatting options instance.

### Getting the Properties

- [dateFormatStyle](formattingoptions/dateformatstyle.md): The date format style.
- [floatingPointFormatStyle](formattingoptions/floatingpointformatstyle.md): The floating point format style.
- [includesColumnTypes](formattingoptions/includescolumntypes.md): A Boolean value that indicates whether the description includes the column types.
- [integerFormatStyle](formattingoptions/integerformatstyle.md): The integer format style.
- [locale](formattingoptions/locale.md): The locale.
- [maximumCellWidth](formattingoptions/maximumcellwidth.md): The largest number of characters a description can generate per cell.
- [maximumLineWidth](formattingoptions/maximumlinewidth.md): The largest number of characters a description can generate per line.
- [maximumRowCount](formattingoptions/maximumrowcount.md): The largest number of rows a description can generate.

### Instance Properties

- [includesRowAndColumnCounts](formattingoptions/includesrowandcolumncounts.md): A Boolean value that indicates whether the description includes the number of rows and columns.
- [includesRowIndices](formattingoptions/includesrowindices.md): A Boolean value that indicates whether the description includes the row indices.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Types

- [Order](order.md): A type that represents a sort ordering.
- [ColumnID](columnid.md): A column identifier that stores a column’s name and the type of its elements.
