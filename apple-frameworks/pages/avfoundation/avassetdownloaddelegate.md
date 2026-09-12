> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloaddelegate](https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate)

# AVAssetDownloadDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

A protocol that defines the methods to implement to respond to asset-download events.

## Declaration

```swift
protocol AVAssetDownloadDelegate : URLSessionTaskDelegate
```

## Topics

### Responding to download events

- [urlSession(\_:assetDownloadTask:didResolve:)](avassetdownloaddelegate/urlsession%28__assetdownloadtask_didresolve_%29.md): Tells the delegate that a download task resolved the media selection to download, including any automatic selections.
- [urlSession(\_:assetDownloadTask:didLoad:totalTimeRangesLoaded:timeRangeExpectedToLoad:)](avassetdownloaddelegate/urlsession%28__assetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_%29.md): Deprecated. Tells the delegate that a download task loaded a new time range.
- [urlSession(\_:assetDownloadTask:didFinishDownloadingTo:)](avassetdownloaddelegate/urlsession%28__assetdownloadtask_didfinishdownloadingto_%29.md): Deprecated. Tells the delegate that a download task finished downloading the requested asset.
- [urlSession(\_:assetDownloadTask:willDownloadVariants:)](avassetdownloaddelegate/urlsession%28__assetdownloadtask_willdownloadvariants_%29.md): Tells the delegate that a download task completed variant selection.
- [urlSession(\_:assetDownloadTask:willDownloadTo:)](avassetdownloaddelegate/urlsession%28__assetdownloadtask_willdownloadto_%29.md): Tells the delegate when a download task determines its download location.
- [urlSession(\_:assetDownloadTask:didReceive:)](avassetdownloaddelegate/urlsession%28__assetdownloadtask_didreceive_%29.md): Sent when a download task receives an AVMetricEvent.

### Responding to aggregate download events

- [urlSession(\_:aggregateAssetDownloadTask:willDownloadTo:)](avassetdownloaddelegate/urlsession%28__aggregateassetdownloadtask_willdownloadto_%29.md): Deprecated. Tells the delegate the final location of the asset when the download completes.
- [urlSession(\_:aggregateAssetDownloadTask:didLoad:totalTimeRangesLoaded:timeRangeExpectedToLoad:for:)](avassetdownloaddelegate/urlsession%28__aggregateassetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_for_%29.md): Deprecated. Tells the delegate that the aggregate download task loaded a new time range.
- [urlSession(\_:aggregateAssetDownloadTask:didCompleteFor:)](avassetdownloaddelegate/urlsession%28__aggregateassetdownloadtask_didcompletefor_%29.md): Deprecated. Tells the delegate that a child task finished downloading a media selection.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [URLSessionDelegate](../foundation/urlsessiondelegate.md)
- [URLSessionTaskDelegate](../foundation/urlsessiontaskdelegate.md)

## See Also

### Creating a download session

- [init(configuration:assetDownloadDelegate:delegateQueue:)](avassetdownloadurlsession/init%28configuration_assetdownloaddelegate_delegatequeue_%29.md): Creates a URL session to download assets.

# AVAssetDownloadDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

A protocol that defines the methods to implement to respond to asset-download events.

## Declaration

```objectivec
@protocol AVAssetDownloadDelegate <NSURLSessionTaskDelegate>
```

## Topics

### Responding to download events

- [URLSession:assetDownloadTask:didResolveMediaSelection:](avassetdownloaddelegate/urlsession%28__assetdownloadtask_didresolve_%29.md): Tells the delegate that a download task resolved the media selection to download, including any automatic selections.
- [URLSession:assetDownloadTask:didLoadTimeRange:totalTimeRangesLoaded:timeRangeExpectedToLoad:](avassetdownloaddelegate/urlsession%28__assetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_%29.md): Deprecated. Tells the delegate that a download task loaded a new time range.
- [URLSession:assetDownloadTask:didFinishDownloadingToURL:](avassetdownloaddelegate/urlsession%28__assetdownloadtask_didfinishdownloadingto_%29.md): Deprecated. Tells the delegate that a download task finished downloading the requested asset.
- [URLSession:assetDownloadTask:willDownloadVariants:](avassetdownloaddelegate/urlsession%28__assetdownloadtask_willdownloadvariants_%29.md): Tells the delegate that a download task completed variant selection.
- [URLSession:assetDownloadTask:willDownloadToURL:](avassetdownloaddelegate/urlsession%28__assetdownloadtask_willdownloadto_%29.md): Tells the delegate when a download task determines its download location.
- [URLSession:assetDownloadTask:didReceiveMetricEvent:](avassetdownloaddelegate/urlsession%28__assetdownloadtask_didreceive_%29.md): Sent when a download task receives an AVMetricEvent.

### Responding to aggregate download events

- [URLSession:aggregateAssetDownloadTask:willDownloadToURL:](avassetdownloaddelegate/urlsession%28__aggregateassetdownloadtask_willdownloadto_%29.md): Deprecated. Tells the delegate the final location of the asset when the download completes.
- [URLSession:aggregateAssetDownloadTask:didLoadTimeRange:totalTimeRangesLoaded:timeRangeExpectedToLoad:forMediaSelection:](avassetdownloaddelegate/urlsession%28__aggregateassetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_for_%29.md): Deprecated. Tells the delegate that the aggregate download task loaded a new time range.
- [URLSession:aggregateAssetDownloadTask:didCompleteForMediaSelection:](avassetdownloaddelegate/urlsession%28__aggregateassetdownloadtask_didcompletefor_%29.md): Deprecated. Tells the delegate that a child task finished downloading a media selection.

## Relationships

### Inherits From

- [NSURLSessionTaskDelegate](../foundation/urlsessiontaskdelegate.md)

## See Also

### Creating a download session

- [sessionWithConfiguration:assetDownloadDelegate:delegateQueue:](avassetdownloadurlsession/init%28configuration_assetdownloaddelegate_delegatequeue_%29.md): Creates a URL session to download assets.
