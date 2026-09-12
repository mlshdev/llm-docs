> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvreadingerror/row](https://developer.apple.com/documentation/tabulardata/csvreadingerror/row)

# row

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The index of the row that contains the error.

## Declaration

```swift
var row: Int { get }
```

## See Also

### Getting Error Information

- [column](column.md): The index of the column that contains the error.
- [CSVReadingError.badEncoding(row:column:cellContents:)](badencoding%28row_column_cellcontents_%29.md): An error that indicates CSV data contains an invalid UTF-8 byte sequence.
- [CSVReadingError.failedToParse(row:column:type:cellContents:)](failedtoparse%28row_column_type_cellcontents_%29.md): An error that indicates the CSV reader can’t parse data in the file.
- [CSVReadingError.misplacedQuote(row:column:)](misplacedquote%28row_column_%29.md): An error that indicates the CSV data contains a misplaced quote.
- [CSVReadingError.missingColumn(columnName:)](missingcolumn%28columnname_%29.md): An error that indicates the CSV is missing a required column.
- [CSVReadingError.unsupportedEncoding(\_:)](unsupportedencoding%28__%29.md): An error that indicates the CSV reader doesn’t support an encoding.
- [CSVReadingError.wrongNumberOfColumns(row:columns:expected:)](wrongnumberofcolumns%28row_columns_expected_%29.md): An error that indicates the CSV data contains a row with a mismatched number of columns.
