> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloaddelegate/urlsession(_:aggregateassetdownloadtask:willdownloadto:)](https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/urlsession(_:aggregateassetdownloadtask:willdownloadto:))

# urlSession(\_:aggregateAssetDownloadTask:willDownloadTo:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the delegate the final location of the asset when the download completes.

> Use URLSession:assetDownloadTask:willDownloadToURL: instead

## Declaration

```swift
optional func urlSession(_ session: URLSession, aggregateAssetDownloadTask: AVAggregateAssetDownloadTask, willDownloadTo location: URL)
```

## Parameters

- `session`: The session the asset download task is on.
- `aggregateAssetDownloadTask`: The task that downloads the asset.
- `location`: The file URL to which the task downloads media.

## See Also

### Responding to aggregate download events

- [urlSession(\_:aggregateAssetDownloadTask:didLoad:totalTimeRangesLoaded:timeRangeExpectedToLoad:for:)](urlsession%28__aggregateassetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_for_%29.md): Deprecated. Tells the delegate that the aggregate download task loaded a new time range.
- [urlSession(\_:aggregateAssetDownloadTask:didCompleteFor:)](urlsession%28__aggregateassetdownloadtask_didcompletefor_%29.md): Deprecated. Tells the delegate that a child task finished downloading a media selection.

# URLSession:aggregateAssetDownloadTask:willDownloadToURL: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the delegate the final location of the asset when the download completes.

> Use URLSession:assetDownloadTask:willDownloadToURL: instead

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session aggregateAssetDownloadTask:(AVAggregateAssetDownloadTask *) aggregateAssetDownloadTask willDownloadToURL:(NSURL *) location;
```

## Parameters

- `session`: The session the asset download task is on.
- `aggregateAssetDownloadTask`: The task that downloads the asset.
- `location`: The file URL to which the task downloads media.

## See Also

### Responding to aggregate download events

- [URLSession:aggregateAssetDownloadTask:didLoadTimeRange:totalTimeRangesLoaded:timeRangeExpectedToLoad:forMediaSelection:](urlsession%28__aggregateassetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_for_%29.md): Deprecated. Tells the delegate that the aggregate download task loaded a new time range.
- [URLSession:aggregateAssetDownloadTask:didCompleteForMediaSelection:](urlsession%28__aggregateassetdownloadtask_didcompletefor_%29.md): Deprecated. Tells the delegate that a child task finished downloading a media selection.
