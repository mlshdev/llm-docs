> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/loadstatus](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/loadstatus)

# NSBitmapImageRep.LoadStatus (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that identify the loading status of the image.

## Declaration

```swift
enum LoadStatus
```

<a id="overview"></a>

## Overview

These status values are returned by [incrementalLoad(from:complete:)](incrementalload%28from_complete_%29.md).

## Topics

### Constants

- [NSBitmapImageRep.LoadStatus.unknownType](loadstatus/unknowntype.md): Not enough data to determine image format. You should continue to provide more data.
- [NSBitmapImageRep.LoadStatus.readingHeader](loadstatus/readingheader.md): The image format is known, but not enough data has been read to determine the size, depth, etc., of the image. You should continue to provide more data.
- [NSBitmapImageRep.LoadStatus.willNeedAllData](loadstatus/willneedalldata.md): Incremental loading cannot be supported.
- [NSBitmapImageRep.LoadStatus.invalidData](loadstatus/invaliddata.md): An error occurred during image decompression. The image contains the portions of the data that have already been successfully decompressed, if any
- [NSBitmapImageRep.LoadStatus.unexpectedEOF](loadstatus/unexpectedeof.md): Not enough data was available to fully decompress the image.
- [NSBitmapImageRep.LoadStatus.completed](loadstatus/completed.md): Enough data has been provided to successfully decompress the image (regardless of the complete: flag).

### Initializers

- [init(rawValue:)](loadstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loading Images Incrementally

- [incrementalLoad(from:complete:)](incrementalload%28from_complete_%29.md): Loads the current image data into an incrementally-loaded image representation and returns the current status of the image.

# NSImageRepLoadStatus (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that identify the loading status of the image.

## Declaration

```objectivec
enum NSImageRepLoadStatus : NSInteger;
```

<a id="overview"></a>

## Overview

These status values are returned by [incrementalLoadFromData:complete:](incrementalload%28from_complete_%29.md).

## Topics

### Constants

- [NSImageRepLoadStatusUnknownType](loadstatus/unknowntype.md): Not enough data to determine image format. You should continue to provide more data.
- [NSImageRepLoadStatusReadingHeader](loadstatus/readingheader.md): The image format is known, but not enough data has been read to determine the size, depth, etc., of the image. You should continue to provide more data.
- [NSImageRepLoadStatusWillNeedAllData](loadstatus/willneedalldata.md): Incremental loading cannot be supported.
- [NSImageRepLoadStatusInvalidData](loadstatus/invaliddata.md): An error occurred during image decompression. The image contains the portions of the data that have already been successfully decompressed, if any
- [NSImageRepLoadStatusUnexpectedEOF](loadstatus/unexpectedeof.md): Not enough data was available to fully decompress the image.
- [NSImageRepLoadStatusCompleted](loadstatus/completed.md): Enough data has been provided to successfully decompress the image (regardless of the complete: flag).

## See Also

### Loading Images Incrementally

- [incrementalLoadFromData:complete:](incrementalload%28from_complete_%29.md): Loads the current image data into an incrementally-loaded image representation and returns the current status of the image.
