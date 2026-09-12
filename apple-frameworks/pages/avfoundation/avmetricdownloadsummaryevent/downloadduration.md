> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricdownloadsummaryevent/downloadduration](https://developer.apple.com/documentation/avfoundation/avmetricdownloadsummaryevent/downloadduration)

# downloadDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the total duration of the download in seconds.

## Declaration

```swift
var downloadDuration: TimeInterval { get }
```

## See Also

### Inspecting the download summary

- [bytesDownloadedCount](bytesdownloadedcount.md): Returns the total number of bytes downloaded by the download task.
- [mediaResourceRequestCount](mediaresourcerequestcount.md): Returns the total number of media requests performed by the download task. This includes playlist requests, media segment requests, and content key requests.
- [recoverableErrorCount](recoverableerrorcount.md): Returns the total count of recoverable errors encountered during the download. If no errors were encountered, returns 0.
- [variants](variants.md): Returns the variants that were downloaded.
- [errorEvent](errorevent.md): Returns the error event if any. If no value is available, returns nil.

# downloadDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the total duration of the download in seconds.

## Declaration

```objectivec
@property (readonly) NSTimeInterval downloadDuration;
```

## See Also

### Inspecting the download summary

- [bytesDownloadedCount](bytesdownloadedcount.md): Returns the total number of bytes downloaded by the download task.
- [mediaResourceRequestCount](mediaresourcerequestcount.md): Returns the total number of media requests performed by the download task. This includes playlist requests, media segment requests, and content key requests.
- [recoverableErrorCount](recoverableerrorcount.md): Returns the total count of recoverable errors encountered during the download. If no errors were encountered, returns 0.
- [variants](variants.md): Returns the variants that were downloaded.
- [errorEvent](errorevent.md): Returns the error event if any. If no value is available, returns nil.
