> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricdownloadsummaryevent/recoverableerrorcount](https://developer.apple.com/documentation/avfoundation/avmetricdownloadsummaryevent/recoverableerrorcount)

# recoverableErrorCount (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the total count of recoverable errors encountered during the download. If no errors were encountered, returns 0.

## Declaration

```swift
var recoverableErrorCount: Int { get }
```

<a id="discussion"></a>

## Discussion

Error counts may not be consistent across OS versions. Comparisons should be made within a given OS version, as error reporting is subject to change with OS updates.

## See Also

### Inspecting the download summary

- [downloadDuration](downloadduration.md): Returns the total duration of the download in seconds.
- [bytesDownloadedCount](bytesdownloadedcount.md): Returns the total number of bytes downloaded by the download task.
- [mediaResourceRequestCount](mediaresourcerequestcount.md): Returns the total number of media requests performed by the download task. This includes playlist requests, media segment requests, and content key requests.
- [variants](variants.md): Returns the variants that were downloaded.
- [errorEvent](errorevent.md): Returns the error event if any. If no value is available, returns nil.

# recoverableErrorCount (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the total count of recoverable errors encountered during the download. If no errors were encountered, returns 0.

## Declaration

```objectivec
@property (readonly) NSInteger recoverableErrorCount;
```

<a id="discussion"></a>

## Discussion

Error counts may not be consistent across OS versions. Comparisons should be made within a given OS version, as error reporting is subject to change with OS updates.

## See Also

### Inspecting the download summary

- [downloadDuration](downloadduration.md): Returns the total duration of the download in seconds.
- [bytesDownloadedCount](bytesdownloadedcount.md): Returns the total number of bytes downloaded by the download task.
- [mediaResourceRequestCount](mediaresourcerequestcount.md): Returns the total number of media requests performed by the download task. This includes playlist requests, media segment requests, and content key requests.
- [variants](variants.md): Returns the variants that were downloaded.
- [errorEvent](errorevent.md): Returns the error event if any. If no value is available, returns nil.
