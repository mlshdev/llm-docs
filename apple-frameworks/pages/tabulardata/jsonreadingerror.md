> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/jsonreadingerror](https://developer.apple.com/documentation/tabulardata/jsonreadingerror)

# JSONReadingError

**Framework:** TabularData  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A JSON reading error.

## Declaration

```swift
enum JSONReadingError
```

## Topics

### Getting Error Information

- [JSONReadingError.failedToParse(row:column:type:contents:)](jsonreadingerror/failedtoparse%28row_column_type_contents_%29.md): An error that occurs when a JSON value fails to parse as the specified type.
- [JSONReadingError.incompatibleValues(column:)](jsonreadingerror/incompatiblevalues%28column_%29.md): An error that occurs when the JSON data contains incompatible values in a column.
- [JSONReadingError.unsupportedStructure](jsonreadingerror/unsupportedstructure.md): An error that occurs when the JSON structure is incompatible with a data frame.
- [JSONReadingError.wrongType(row:column:expectedType:value:)](jsonreadingerror/wrongtype%28row_column_expectedtype_value_%29.md): An error that occurs when the JSON data contains a value of the wrong type for a type-constrained column.

### Default Implementations

- [CustomStringConvertible Implementations](jsonreadingerror/customstringconvertible-implementations.md)
- [LocalizedError Implementations](jsonreadingerror/localizederror-implementations.md)

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

- [CSVReadingError](csvreadingerror.md): A CSV reading error.
- [CSVWritingError](csvwritingerror.md): A CSV writing error.
- [ColumnDecodingError](columndecodingerror.md): A column decoding error.
- [ColumnEncodingError](columnencodingerror.md): A column encoding error.
- [SFrameReadingError](sframereadingerror.md): An error when reading a Turi Create scalable data frame.
