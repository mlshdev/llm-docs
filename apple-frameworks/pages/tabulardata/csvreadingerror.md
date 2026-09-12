> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvreadingerror](https://developer.apple.com/documentation/tabulardata/csvreadingerror)

# CSVReadingError

**Framework:** TabularData  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A CSV reading error.

## Declaration

```swift
enum CSVReadingError
```

## Topics

### Getting Error Information

- [column](csvreadingerror/column.md): The index of the column that contains the error.
- [row](csvreadingerror/row.md): The index of the row that contains the error.
- [CSVReadingError.badEncoding(row:column:cellContents:)](csvreadingerror/badencoding%28row_column_cellcontents_%29.md): An error that indicates CSV data contains an invalid UTF-8 byte sequence.
- [CSVReadingError.failedToParse(row:column:type:cellContents:)](csvreadingerror/failedtoparse%28row_column_type_cellcontents_%29.md): An error that indicates the CSV reader can’t parse data in the file.
- [CSVReadingError.misplacedQuote(row:column:)](csvreadingerror/misplacedquote%28row_column_%29.md): An error that indicates the CSV data contains a misplaced quote.
- [CSVReadingError.missingColumn(columnName:)](csvreadingerror/missingcolumn%28columnname_%29.md): An error that indicates the CSV is missing a required column.
- [CSVReadingError.unsupportedEncoding(\_:)](csvreadingerror/unsupportedencoding%28__%29.md): An error that indicates the CSV reader doesn’t support an encoding.
- [CSVReadingError.wrongNumberOfColumns(row:columns:expected:)](csvreadingerror/wrongnumberofcolumns%28row_columns_expected_%29.md): An error that indicates the CSV data contains a row with a mismatched number of columns.

### Enumeration Cases

- [CSVReadingError.outOfBounds(requested:actual:)](csvreadingerror/outofbounds%28requested_actual_%29.md): An error that indicates that the read operation requested rows beyond the end of the CSV file.
- [CSVReadingError.unsupportedColumnType(columnIndex:columnName:type:)](csvreadingerror/unsupportedcolumntype%28columnindex_columnname_type_%29.md): An error that indicates that a column type is not one of the types supported by CSV.

### Default Implementations

- [CustomStringConvertible Implementations](csvreadingerror/customstringconvertible-implementations.md)
- [LocalizedError Implementations](csvreadingerror/localizederror-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [JSONReadingError](jsonreadingerror.md): A JSON reading error.
- [CSVWritingError](csvwritingerror.md): A CSV writing error.
- [ColumnDecodingError](columndecodingerror.md): A column decoding error.
- [ColumnEncodingError](columnencodingerror.md): A column encoding error.
- [SFrameReadingError](sframereadingerror.md): An error when reading a Turi Create scalable data frame.
