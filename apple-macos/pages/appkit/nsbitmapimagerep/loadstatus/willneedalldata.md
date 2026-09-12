> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/loadstatus/willneedalldata](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/loadstatus/willneedalldata)

# NSBitmapImageRep.LoadStatus.willNeedAllData (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Incremental loading cannot be supported.

## Declaration

```swift
case willNeedAllData
```

<a id="Discussion"></a>

## Discussion

Until you call [incrementalLoad(from:complete:)](../incrementalload%28from_complete_%29.md) with [true](https://developer.apple.com/documentation/swift/true), this status will be returned. You can continue to call the method but no decompression will take place. Once you do call the method with [true](https://developer.apple.com/documentation/swift/true), then the image will be decompressed and one of the final three status messages will be returned.

## See Also

### Constants

- [NSBitmapImageRep.LoadStatus.unknownType](unknowntype.md): Not enough data to determine image format. You should continue to provide more data.
- [NSBitmapImageRep.LoadStatus.readingHeader](readingheader.md): The image format is known, but not enough data has been read to determine the size, depth, etc., of the image. You should continue to provide more data.
- [NSBitmapImageRep.LoadStatus.invalidData](invaliddata.md): An error occurred during image decompression. The image contains the portions of the data that have already been successfully decompressed, if any
- [NSBitmapImageRep.LoadStatus.unexpectedEOF](unexpectedeof.md): Not enough data was available to fully decompress the image.
- [NSBitmapImageRep.LoadStatus.completed](completed.md): Enough data has been provided to successfully decompress the image (regardless of the complete: flag).

# NSImageRepLoadStatusWillNeedAllData (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Incremental loading cannot be supported.

## Declaration

```objectivec
NSImageRepLoadStatusWillNeedAllData
```

<a id="Discussion"></a>

## Discussion

Until you call [incrementalLoadFromData:complete:](../incrementalload%28from_complete_%29.md) with [true](https://developer.apple.com/documentation/swift/true), this status will be returned. You can continue to call the method but no decompression will take place. Once you do call the method with [true](https://developer.apple.com/documentation/swift/true), then the image will be decompressed and one of the final three status messages will be returned.

## See Also

### Constants

- [NSImageRepLoadStatusUnknownType](unknowntype.md): Not enough data to determine image format. You should continue to provide more data.
- [NSImageRepLoadStatusReadingHeader](readingheader.md): The image format is known, but not enough data has been read to determine the size, depth, etc., of the image. You should continue to provide more data.
- [NSImageRepLoadStatusInvalidData](invaliddata.md): An error occurred during image decompression. The image contains the portions of the data that have already been successfully decompressed, if any
- [NSImageRepLoadStatusUnexpectedEOF](unexpectedeof.md): Not enough data was available to fully decompress the image.
- [NSImageRepLoadStatusCompleted](completed.md): Enough data has been provided to successfully decompress the image (regardless of the complete: flag).
