> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columndecodingerror](https://developer.apple.com/documentation/tabulardata/columndecodingerror)

# ColumnDecodingError

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A column decoding error.

## Declaration

```swift
struct ColumnDecodingError
```

<a id="overview"></a>

## Overview

This error wraps a decoding error and includes the column name and row index where the decoding error occurs.

## Topics

### Creating a Decoding Error

- [init(columnName:rowIndex:decodingError:)](columndecodingerror/init%28columnname_rowindex_decodingerror_%29.md): Creates a column decoding error.

### Getting Error Information

- [columnName](columndecodingerror/columnname.md): The name of the column with the error.
- [debugDescription](columndecodingerror/debugdescription.md): A text representation of the column decoding error suitable for debugging.
- [decodingError](columndecodingerror/decodingerror.md): The underlying decoding error.
- [rowIndex](columndecodingerror/rowindex.md): The index of the column’s element with the error.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [JSONReadingError](jsonreadingerror.md): A JSON reading error.
- [CSVReadingError](csvreadingerror.md): A CSV reading error.
- [CSVWritingError](csvwritingerror.md): A CSV writing error.
- [ColumnEncodingError](columnencodingerror.md): A column encoding error.
- [SFrameReadingError](sframereadingerror.md): An error when reading a Turi Create scalable data frame.
