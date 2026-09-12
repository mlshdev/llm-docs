> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricdownloadsummaryevent/variants](https://developer.apple.com/documentation/avfoundation/avmetricdownloadsummaryevent/variants)

# variants (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the variants that were downloaded.

## Declaration

```swift
var variants: [AVAssetVariant] { get }
```

## See Also

### Inspecting the download summary

- [downloadDuration](downloadduration.md): Returns the total duration of the download in seconds.
- [bytesDownloadedCount](bytesdownloadedcount.md): Returns the total number of bytes downloaded by the download task.
- [mediaResourceRequestCount](mediaresourcerequestcount.md): Returns the total number of media requests performed by the download task. This includes playlist requests, media segment requests, and content key requests.
- [recoverableErrorCount](recoverableerrorcount.md): Returns the total count of recoverable errors encountered during the download. If no errors were encountered, returns 0.
- [errorEvent](errorevent.md): Returns the error event if any. If no value is available, returns nil.

# variants (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the variants that were downloaded.

## Declaration

```objectivec
@property (readonly) NSArray<AVAssetVariant *> * variants;
```

## See Also

### Inspecting the download summary

- [downloadDuration](downloadduration.md): Returns the total duration of the download in seconds.
- [bytesDownloadedCount](bytesdownloadedcount.md): Returns the total number of bytes downloaded by the download task.
- [mediaResourceRequestCount](mediaresourcerequestcount.md): Returns the total number of media requests performed by the download task. This includes playlist requests, media segment requests, and content key requests.
- [recoverableErrorCount](recoverableerrorcount.md): Returns the total count of recoverable errors encountered during the download. If no errors were encountered, returns 0.
- [errorEvent](errorevent.md): Returns the error event if any. If no value is available, returns nil.
