> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/loadstatus/completed](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/loadstatus/completed)

# NSBitmapImageRep.LoadStatus.completed (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Enough data has been provided to successfully decompress the image (regardless of the complete: flag).

## Declaration

```swift
case completed
```

## See Also

### Constants

- [NSBitmapImageRep.LoadStatus.unknownType](unknowntype.md): Not enough data to determine image format. You should continue to provide more data.
- [NSBitmapImageRep.LoadStatus.readingHeader](readingheader.md): The image format is known, but not enough data has been read to determine the size, depth, etc., of the image. You should continue to provide more data.
- [NSBitmapImageRep.LoadStatus.willNeedAllData](willneedalldata.md): Incremental loading cannot be supported.
- [NSBitmapImageRep.LoadStatus.invalidData](invaliddata.md): An error occurred during image decompression. The image contains the portions of the data that have already been successfully decompressed, if any
- [NSBitmapImageRep.LoadStatus.unexpectedEOF](unexpectedeof.md): Not enough data was available to fully decompress the image.

# NSImageRepLoadStatusCompleted (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Enough data has been provided to successfully decompress the image (regardless of the complete: flag).

## Declaration

```objectivec
NSImageRepLoadStatusCompleted
```

## See Also

### Constants

- [NSImageRepLoadStatusUnknownType](unknowntype.md): Not enough data to determine image format. You should continue to provide more data.
- [NSImageRepLoadStatusReadingHeader](readingheader.md): The image format is known, but not enough data has been read to determine the size, depth, etc., of the image. You should continue to provide more data.
- [NSImageRepLoadStatusWillNeedAllData](willneedalldata.md): Incremental loading cannot be supported.
- [NSImageRepLoadStatusInvalidData](invaliddata.md): An error occurred during image decompression. The image contains the portions of the data that have already been successfully decompressed, if any
- [NSImageRepLoadStatusUnexpectedEOF](unexpectedeof.md): Not enough data was available to fully decompress the image.
