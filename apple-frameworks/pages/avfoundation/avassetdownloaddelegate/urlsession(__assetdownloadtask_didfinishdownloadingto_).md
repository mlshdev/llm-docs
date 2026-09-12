> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloaddelegate/urlsession(_:assetdownloadtask:didfinishdownloadingto:)](https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/urlsession(_:assetdownloadtask:didfinishdownloadingto:))

# urlSession(\_:assetDownloadTask:didFinishDownloadingTo:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 10.0+ (deprecated in 27.0)

Tells the delegate that a download task finished downloading the requested asset.

> Use URLSession:assetDownloadTask:willDownloadToURL: instead

## Declaration

```swift
optional func urlSession(_ session: URLSession, assetDownloadTask: AVAssetDownloadTask, didFinishDownloadingTo location: URL)
```

## Parameters

- `session`: The session the asset download task is on.
- `assetDownloadTask`: The download task whose downloaded completed.
- `location`: The download location of the asset.

<a id="Discussion"></a>

## Discussion

Don’t move the downloaded asset from this location. Downloaded assets must remain at the system-provided URL. Instead, save a persistent reference to this URL for future use.

## See Also

### Responding to download events

- [urlSession(\_:assetDownloadTask:didResolve:)](urlsession%28__assetdownloadtask_didresolve_%29.md): Tells the delegate that a download task resolved the media selection to download, including any automatic selections.
- [urlSession(\_:assetDownloadTask:didLoad:totalTimeRangesLoaded:timeRangeExpectedToLoad:)](urlsession%28__assetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_%29.md): Deprecated. Tells the delegate that a download task loaded a new time range.
- [urlSession(\_:assetDownloadTask:willDownloadVariants:)](urlsession%28__assetdownloadtask_willdownloadvariants_%29.md): Tells the delegate that a download task completed variant selection.
- [urlSession(\_:assetDownloadTask:willDownloadTo:)](urlsession%28__assetdownloadtask_willdownloadto_%29.md): Tells the delegate when a download task determines its download location.
- [urlSession(\_:assetDownloadTask:didReceive:)](urlsession%28__assetdownloadtask_didreceive_%29.md): Sent when a download task receives an AVMetricEvent.

# URLSession:assetDownloadTask:didFinishDownloadingToURL: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 10.0+ (deprecated in 27.0)

Tells the delegate that a download task finished downloading the requested asset.

> Use URLSession:assetDownloadTask:willDownloadToURL: instead

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session assetDownloadTask:(AVAssetDownloadTask *) assetDownloadTask didFinishDownloadingToURL:(NSURL *) location;
```

## Parameters

- `session`: The session the asset download task is on.
- `assetDownloadTask`: The download task whose downloaded completed.
- `location`: The download location of the asset.

<a id="Discussion"></a>

## Discussion

Don’t move the downloaded asset from this location. Downloaded assets must remain at the system-provided URL. Instead, save a persistent reference to this URL for future use.

## See Also

### Responding to download events

- [URLSession:assetDownloadTask:didResolveMediaSelection:](urlsession%28__assetdownloadtask_didresolve_%29.md): Tells the delegate that a download task resolved the media selection to download, including any automatic selections.
- [URLSession:assetDownloadTask:didLoadTimeRange:totalTimeRangesLoaded:timeRangeExpectedToLoad:](urlsession%28__assetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_%29.md): Deprecated. Tells the delegate that a download task loaded a new time range.
- [URLSession:assetDownloadTask:willDownloadVariants:](urlsession%28__assetdownloadtask_willdownloadvariants_%29.md): Tells the delegate that a download task completed variant selection.
- [URLSession:assetDownloadTask:willDownloadToURL:](urlsession%28__assetdownloadtask_willdownloadto_%29.md): Tells the delegate when a download task determines its download location.
- [URLSession:assetDownloadTask:didReceiveMetricEvent:](urlsession%28__assetdownloadtask_didreceive_%29.md): Sent when a download task receives an AVMetricEvent.
