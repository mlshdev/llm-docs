> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/sframereadingerror/unsupportedarchive(_:)](https://developer.apple.com/documentation/tabulardata/sframereadingerror/unsupportedarchive(_:))

# SFrameReadingError.unsupportedArchive(\_:)

**Framework:** TabularData  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An error that indicates the scalable data frame contains an archive version or layout the framework doesn’t support.

## Declaration

```swift
case unsupportedArchive(String)
```

<a id="discussion"></a>

## Discussion

The associated value contains a description of the error.

## See Also

### Getting Error Information

- [SFrameReadingError.badArchive(\_:)](badarchive%28__%29.md): An error that indicates the scalable data frame directory’s archive file is corrupt.
- [SFrameReadingError.badEncoding(\_:)](badencoding%28__%29.md): An error that indicates the scalable data frame contains bad data encoding.
- [SFrameReadingError.missingArchive](missingarchive.md): An error that indicates the scalable data frame directory is missing an archive file.
- [SFrameReadingError.missingColumn(\_:)](missingcolumn%28__%29.md): An error that indicates the scalable data frame is missing one of the requested columns.
- [SFrameReadingError.unsupportedLayout(\_:)](unsupportedlayout%28__%29.md): An error that indicates the scalable data frame contains an unsupported data layout.
- [SFrameReadingError.unsupportedType(\_:)](unsupportedtype%28__%29.md): An error that indicates the scalable data frame contains an unknown or unsupported data type.
