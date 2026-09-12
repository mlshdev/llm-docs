> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/loadstatus/unexpectedeof](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/loadstatus/unexpectedeof)

# NSBitmapImageRep.LoadStatus.unexpectedEOF (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Not enough data was available to fully decompress the image.

## Declaration

```swift
case unexpectedEOF
```

<a id="discussion"></a>

## Discussion

[incrementalLoad(from:complete:)](../incrementalload%28from_complete_%29.md) was called with [true](https://developer.apple.com/documentation/swift/true), but not enough data was available for decompression. The image contains the portions of the data that have already been successfully decompressed, if any.

## See Also

### Constants

- [NSBitmapImageRep.LoadStatus.unknownType](unknowntype.md): Not enough data to determine image format. You should continue to provide more data.
- [NSBitmapImageRep.LoadStatus.readingHeader](readingheader.md): The image format is known, but not enough data has been read to determine the size, depth, etc., of the image. You should continue to provide more data.
- [NSBitmapImageRep.LoadStatus.willNeedAllData](willneedalldata.md): Incremental loading cannot be supported.
- [NSBitmapImageRep.LoadStatus.invalidData](invaliddata.md): An error occurred during image decompression. The image contains the portions of the data that have already been successfully decompressed, if any
- [NSBitmapImageRep.LoadStatus.completed](completed.md): Enough data has been provided to successfully decompress the image (regardless of the complete: flag).

# NSImageRepLoadStatusUnexpectedEOF (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Not enough data was available to fully decompress the image.

## Declaration

```objectivec
NSImageRepLoadStatusUnexpectedEOF
```

<a id="discussion"></a>

## Discussion

[incrementalLoadFromData:complete:](../incrementalload%28from_complete_%29.md) was called with [true](https://developer.apple.com/documentation/swift/true), but not enough data was available for decompression. The image contains the portions of the data that have already been successfully decompressed, if any.

## See Also

### Constants

- [NSImageRepLoadStatusUnknownType](unknowntype.md): Not enough data to determine image format. You should continue to provide more data.
- [NSImageRepLoadStatusReadingHeader](readingheader.md): The image format is known, but not enough data has been read to determine the size, depth, etc., of the image. You should continue to provide more data.
- [NSImageRepLoadStatusWillNeedAllData](willneedalldata.md): Incremental loading cannot be supported.
- [NSImageRepLoadStatusInvalidData](invaliddata.md): An error occurred during image decompression. The image contains the portions of the data that have already been successfully decompressed, if any
- [NSImageRepLoadStatusCompleted](completed.md): Enough data has been provided to successfully decompress the image (regardless of the complete: flag).
