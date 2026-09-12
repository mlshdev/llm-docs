> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvwritingerror](https://developer.apple.com/documentation/tabulardata/csvwritingerror)

# CSVWritingError

**Framework:** TabularData  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A CSV writing error.

## Declaration

```swift
enum CSVWritingError
```

## Topics

### Getting Error Information

- [column](csvwritingerror/column.md): The index of the column that contains the error.
- [row](csvwritingerror/row.md): The index of the row that contains the error.
- [CSVWritingError.badEncoding(row:column:\_:)](csvwritingerror/badencoding%28row_column___%29.md): An error that indicates CSV data contains an invalid UTF-8 byte sequence.

### Default Implementations

- [CustomStringConvertible Implementations](csvwritingerror/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [JSONReadingError](jsonreadingerror.md): A JSON reading error.
- [CSVReadingError](csvreadingerror.md): A CSV reading error.
- [ColumnDecodingError](columndecodingerror.md): A column decoding error.
- [ColumnEncodingError](columnencodingerror.md): A column encoding error.
- [SFrameReadingError](sframereadingerror.md): An error when reading a Turi Create scalable data frame.
