> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloaddelegate/urlsession(_:assetdownloadtask:didreceive:)](https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/urlsession(_:assetdownloadtask:didreceive:))

# urlSession(\_:assetDownloadTask:didReceive:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Sent when a download task receives an AVMetricEvent.

## Declaration

```swift
optional func urlSession(_ session: URLSession, assetDownloadTask: AVAssetDownloadTask, didReceive metricEvent: AVMetricEvent)
```

## Parameters

- `session`: The NSURLSession corresponding to this AVAssetDownloadTask.
- `assetDownloadTask`: The asset download task.
- `metricEvent`: The metric event received.

## See Also

### Responding to download events

- [urlSession(\_:assetDownloadTask:didResolve:)](urlsession%28__assetdownloadtask_didresolve_%29.md): Tells the delegate that a download task resolved the media selection to download, including any automatic selections.
- [urlSession(\_:assetDownloadTask:didLoad:totalTimeRangesLoaded:timeRangeExpectedToLoad:)](urlsession%28__assetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_%29.md): Deprecated. Tells the delegate that a download task loaded a new time range.
- [urlSession(\_:assetDownloadTask:didFinishDownloadingTo:)](urlsession%28__assetdownloadtask_didfinishdownloadingto_%29.md): Deprecated. Tells the delegate that a download task finished downloading the requested asset.
- [urlSession(\_:assetDownloadTask:willDownloadVariants:)](urlsession%28__assetdownloadtask_willdownloadvariants_%29.md): Tells the delegate that a download task completed variant selection.
- [urlSession(\_:assetDownloadTask:willDownloadTo:)](urlsession%28__assetdownloadtask_willdownloadto_%29.md): Tells the delegate when a download task determines its download location.

# URLSession:assetDownloadTask:didReceiveMetricEvent: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Sent when a download task receives an AVMetricEvent.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session assetDownloadTask:(AVAssetDownloadTask *) assetDownloadTask didReceiveMetricEvent:(AVMetricEvent *) metricEvent;
```

## Parameters

- `session`: The NSURLSession corresponding to this AVAssetDownloadTask.
- `assetDownloadTask`: The asset download task.
- `metricEvent`: The metric event received.

## See Also

### Responding to download events

- [URLSession:assetDownloadTask:didResolveMediaSelection:](urlsession%28__assetdownloadtask_didresolve_%29.md): Tells the delegate that a download task resolved the media selection to download, including any automatic selections.
- [URLSession:assetDownloadTask:didLoadTimeRange:totalTimeRangesLoaded:timeRangeExpectedToLoad:](urlsession%28__assetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_%29.md): Deprecated. Tells the delegate that a download task loaded a new time range.
- [URLSession:assetDownloadTask:didFinishDownloadingToURL:](urlsession%28__assetdownloadtask_didfinishdownloadingto_%29.md): Deprecated. Tells the delegate that a download task finished downloading the requested asset.
- [URLSession:assetDownloadTask:willDownloadVariants:](urlsession%28__assetdownloadtask_willdownloadvariants_%29.md): Tells the delegate that a download task completed variant selection.
- [URLSession:assetDownloadTask:willDownloadToURL:](urlsession%28__assetdownloadtask_willdownloadto_%29.md): Tells the delegate when a download task determines its download location.
