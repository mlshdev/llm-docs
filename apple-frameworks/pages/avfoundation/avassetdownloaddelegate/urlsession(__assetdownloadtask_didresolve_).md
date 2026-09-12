> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloaddelegate/urlsession(_:assetdownloadtask:didresolve:)](https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/urlsession(_:assetdownloadtask:didresolve:))

# urlSession(\_:assetDownloadTask:didResolve:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that a download task resolved the media selection to download, including any automatic selections.

## Declaration

```swift
optional func urlSession(_ session: URLSession, assetDownloadTask: AVAssetDownloadTask, didResolve resolvedMediaSelection: AVMediaSelection)
```

## Parameters

- `session`: The session the asset download task is on.
- `assetDownloadTask`: The task that resolved the media selection.
- `resolvedMediaSelection`: The media selection the task resolved.

<a id="Discussion"></a>

## Discussion

For the best chance of playing back downloaded content without further network I/O, set this selection on the associated [AVPlayerItem](../avplayeritem.md).

## See Also

### Responding to download events

- [urlSession(\_:assetDownloadTask:didLoad:totalTimeRangesLoaded:timeRangeExpectedToLoad:)](urlsession%28__assetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_%29.md): Deprecated. Tells the delegate that a download task loaded a new time range.
- [urlSession(\_:assetDownloadTask:didFinishDownloadingTo:)](urlsession%28__assetdownloadtask_didfinishdownloadingto_%29.md): Deprecated. Tells the delegate that a download task finished downloading the requested asset.
- [urlSession(\_:assetDownloadTask:willDownloadVariants:)](urlsession%28__assetdownloadtask_willdownloadvariants_%29.md): Tells the delegate that a download task completed variant selection.
- [urlSession(\_:assetDownloadTask:willDownloadTo:)](urlsession%28__assetdownloadtask_willdownloadto_%29.md): Tells the delegate when a download task determines its download location.
- [urlSession(\_:assetDownloadTask:didReceive:)](urlsession%28__assetdownloadtask_didreceive_%29.md): Sent when a download task receives an AVMetricEvent.

# URLSession:assetDownloadTask:didResolveMediaSelection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that a download task resolved the media selection to download, including any automatic selections.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session assetDownloadTask:(AVAssetDownloadTask *) assetDownloadTask didResolveMediaSelection:(AVMediaSelection *) resolvedMediaSelection;
```

## Parameters

- `session`: The session the asset download task is on.
- `assetDownloadTask`: The task that resolved the media selection.
- `resolvedMediaSelection`: The media selection the task resolved.

<a id="Discussion"></a>

## Discussion

For the best chance of playing back downloaded content without further network I/O, set this selection on the associated [AVPlayerItem](../avplayeritem.md).

## See Also

### Responding to download events

- [URLSession:assetDownloadTask:didLoadTimeRange:totalTimeRangesLoaded:timeRangeExpectedToLoad:](urlsession%28__assetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_%29.md): Deprecated. Tells the delegate that a download task loaded a new time range.
- [URLSession:assetDownloadTask:didFinishDownloadingToURL:](urlsession%28__assetdownloadtask_didfinishdownloadingto_%29.md): Deprecated. Tells the delegate that a download task finished downloading the requested asset.
- [URLSession:assetDownloadTask:willDownloadVariants:](urlsession%28__assetdownloadtask_willdownloadvariants_%29.md): Tells the delegate that a download task completed variant selection.
- [URLSession:assetDownloadTask:willDownloadToURL:](urlsession%28__assetdownloadtask_willdownloadto_%29.md): Tells the delegate when a download task determines its download location.
- [URLSession:assetDownloadTask:didReceiveMetricEvent:](urlsession%28__assetdownloadtask_didreceive_%29.md): Sent when a download task receives an AVMetricEvent.
