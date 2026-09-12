> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloaddelegate/urlsession(_:assetdownloadtask:willdownloadto:)](https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/urlsession(_:assetdownloadtask:willdownloadto:))

# urlSession(\_:assetDownloadTask:willDownloadTo:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

Tells the delegate when a download task determines its download location.

## Declaration

```swift
optional func urlSession(_ session: URLSession, assetDownloadTask: AVAssetDownloadTask, willDownloadTo location: URL)
```

## Parameters

- `session`: The session the asset download task is on.
- `assetDownloadTask`: The download task.
- `location`: The URL the task downloads the asset to.

<a id="Discussion"></a>

## Discussion

Save the returned URL to instantiate the asset in the future.

## See Also

### Responding to download events

- [urlSession(\_:assetDownloadTask:didResolve:)](urlsession%28__assetdownloadtask_didresolve_%29.md): Tells the delegate that a download task resolved the media selection to download, including any automatic selections.
- [urlSession(\_:assetDownloadTask:didLoad:totalTimeRangesLoaded:timeRangeExpectedToLoad:)](urlsession%28__assetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_%29.md): Deprecated. Tells the delegate that a download task loaded a new time range.
- [urlSession(\_:assetDownloadTask:didFinishDownloadingTo:)](urlsession%28__assetdownloadtask_didfinishdownloadingto_%29.md): Deprecated. Tells the delegate that a download task finished downloading the requested asset.
- [urlSession(\_:assetDownloadTask:willDownloadVariants:)](urlsession%28__assetdownloadtask_willdownloadvariants_%29.md): Tells the delegate that a download task completed variant selection.
- [urlSession(\_:assetDownloadTask:didReceive:)](urlsession%28__assetdownloadtask_didreceive_%29.md): Sent when a download task receives an AVMetricEvent.

# URLSession:assetDownloadTask:willDownloadToURL: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

Tells the delegate when a download task determines its download location.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session assetDownloadTask:(AVAssetDownloadTask *) assetDownloadTask willDownloadToURL:(NSURL *) location;
```

## Parameters

- `session`: The session the asset download task is on.
- `assetDownloadTask`: The download task.
- `location`: The URL the task downloads the asset to.

<a id="Discussion"></a>

## Discussion

Save the returned URL to instantiate the asset in the future.

## See Also

### Responding to download events

- [URLSession:assetDownloadTask:didResolveMediaSelection:](urlsession%28__assetdownloadtask_didresolve_%29.md): Tells the delegate that a download task resolved the media selection to download, including any automatic selections.
- [URLSession:assetDownloadTask:didLoadTimeRange:totalTimeRangesLoaded:timeRangeExpectedToLoad:](urlsession%28__assetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_%29.md): Deprecated. Tells the delegate that a download task loaded a new time range.
- [URLSession:assetDownloadTask:didFinishDownloadingToURL:](urlsession%28__assetdownloadtask_didfinishdownloadingto_%29.md): Deprecated. Tells the delegate that a download task finished downloading the requested asset.
- [URLSession:assetDownloadTask:willDownloadVariants:](urlsession%28__assetdownloadtask_willdownloadvariants_%29.md): Tells the delegate that a download task completed variant selection.
- [URLSession:assetDownloadTask:didReceiveMetricEvent:](urlsession%28__assetdownloadtask_didreceive_%29.md): Sent when a download task receives an AVMetricEvent.
