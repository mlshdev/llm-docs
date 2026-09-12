> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnencodingerror](https://developer.apple.com/documentation/tabulardata/columnencodingerror)

# ColumnEncodingError

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A column encoding error.

## Declaration

```swift
struct ColumnEncodingError
```

<a id="overview"></a>

## Overview

An error bundles an [EncodingError](https://developer.apple.com/documentation/swift/encodingerror) with the row and column that produces the error.

## Topics

### Creating an Encoding Error

- [init(columnName:rowIndex:encodingError:)](columnencodingerror/init%28columnname_rowindex_encodingerror_%29.md): Creates a column encoding error.

### Getting Error Information

- [columnName](columnencodingerror/columnname.md): The name of the column with the error.
- [debugDescription](columnencodingerror/debugdescription.md): A text representation of the column encoding error suitable for debugging.
- [encodingError](columnencodingerror/encodingerror.md): The underlying encoding error.
- [rowIndex](columnencodingerror/rowindex.md): The index of the column’s element with the error.

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
- [ColumnDecodingError](columndecodingerror.md): A column decoding error.
- [SFrameReadingError](sframereadingerror.md): An error when reading a Turi Create scalable data frame.
