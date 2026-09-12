> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/sframereadingerror](https://developer.apple.com/documentation/tabulardata/sframereadingerror)

# SFrameReadingError

**Framework:** TabularData  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An error when reading a Turi Create scalable data frame.

## Declaration

```swift
enum SFrameReadingError
```

## Topics

### Getting Error Information

- [SFrameReadingError.badArchive(\_:)](sframereadingerror/badarchive%28__%29.md): An error that indicates the scalable data frame directory’s archive file is corrupt.
- [SFrameReadingError.badEncoding(\_:)](sframereadingerror/badencoding%28__%29.md): An error that indicates the scalable data frame contains bad data encoding.
- [SFrameReadingError.missingArchive](sframereadingerror/missingarchive.md): An error that indicates the scalable data frame directory is missing an archive file.
- [SFrameReadingError.missingColumn(\_:)](sframereadingerror/missingcolumn%28__%29.md): An error that indicates the scalable data frame is missing one of the requested columns.
- [SFrameReadingError.unsupportedArchive(\_:)](sframereadingerror/unsupportedarchive%28__%29.md): An error that indicates the scalable data frame contains an archive version or layout the framework doesn’t support.
- [SFrameReadingError.unsupportedLayout(\_:)](sframereadingerror/unsupportedlayout%28__%29.md): An error that indicates the scalable data frame contains an unsupported data layout.
- [SFrameReadingError.unsupportedType(\_:)](sframereadingerror/unsupportedtype%28__%29.md): An error that indicates the scalable data frame contains an unknown or unsupported data type.

### Default Implementations

- [CustomStringConvertible Implementations](sframereadingerror/customstringconvertible-implementations.md)
- [LocalizedError Implementations](sframereadingerror/localizederror-implementations.md)

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
- [CSVReadingError](csvreadingerror.md): A CSV reading error.
- [CSVWritingError](csvwritingerror.md): A CSV writing error.
- [ColumnDecodingError](columndecodingerror.md): A column decoding error.
- [ColumnEncodingError](columnencodingerror.md): A column encoding error.
