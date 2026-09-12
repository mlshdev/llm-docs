> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloaddelegate/urlsession(_:assetdownloadtask:willdownloadvariants:)](https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/urlsession(_:assetdownloadtask:willdownloadvariants:))

# urlSession(\_:assetDownloadTask:willDownloadVariants:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 10.0+

Tells the delegate that a download task completed variant selection.

## Declaration

```swift
optional func urlSession(_ session: URLSession, assetDownloadTask: AVAssetDownloadTask, willDownloadVariants variants: [AVAssetVariant])
```

## Parameters

- `session`: The session the asset download task is on.
- `assetDownloadTask`: The task that finished selecting variant selection.
- `variants`: The asset variants to download.

## See Also

### Responding to download events

- [urlSession(\_:assetDownloadTask:didResolve:)](urlsession%28__assetdownloadtask_didresolve_%29.md): Tells the delegate that a download task resolved the media selection to download, including any automatic selections.
- [urlSession(\_:assetDownloadTask:didLoad:totalTimeRangesLoaded:timeRangeExpectedToLoad:)](urlsession%28__assetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_%29.md): Deprecated. Tells the delegate that a download task loaded a new time range.
- [urlSession(\_:assetDownloadTask:didFinishDownloadingTo:)](urlsession%28__assetdownloadtask_didfinishdownloadingto_%29.md): Deprecated. Tells the delegate that a download task finished downloading the requested asset.
- [urlSession(\_:assetDownloadTask:willDownloadTo:)](urlsession%28__assetdownloadtask_willdownloadto_%29.md): Tells the delegate when a download task determines its download location.
- [urlSession(\_:assetDownloadTask:didReceive:)](urlsession%28__assetdownloadtask_didreceive_%29.md): Sent when a download task receives an AVMetricEvent.

# URLSession:assetDownloadTask:willDownloadVariants: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 10.0+

Tells the delegate that a download task completed variant selection.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session assetDownloadTask:(AVAssetDownloadTask *) assetDownloadTask willDownloadVariants:(NSArray<AVAssetVariant *> *) variants;
```

## Parameters

- `session`: The session the asset download task is on.
- `assetDownloadTask`: The task that finished selecting variant selection.
- `variants`: The asset variants to download.

## See Also

### Responding to download events

- [URLSession:assetDownloadTask:didResolveMediaSelection:](urlsession%28__assetdownloadtask_didresolve_%29.md): Tells the delegate that a download task resolved the media selection to download, including any automatic selections.
- [URLSession:assetDownloadTask:didLoadTimeRange:totalTimeRangesLoaded:timeRangeExpectedToLoad:](urlsession%28__assetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_%29.md): Deprecated. Tells the delegate that a download task loaded a new time range.
- [URLSession:assetDownloadTask:didFinishDownloadingToURL:](urlsession%28__assetdownloadtask_didfinishdownloadingto_%29.md): Deprecated. Tells the delegate that a download task finished downloading the requested asset.
- [URLSession:assetDownloadTask:willDownloadToURL:](urlsession%28__assetdownloadtask_willdownloadto_%29.md): Tells the delegate when a download task determines its download location.
- [URLSession:assetDownloadTask:didReceiveMetricEvent:](urlsession%28__assetdownloadtask_didreceive_%29.md): Sent when a download task receives an AVMetricEvent.
