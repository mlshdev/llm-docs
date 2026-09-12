> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloaddelegate/urlsession(_:aggregateassetdownloadtask:didcompletefor:)](https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/urlsession(_:aggregateassetdownloadtask:didcompletefor:))

# urlSession(\_:aggregateAssetDownloadTask:didCompleteFor:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the delegate that a child task finished downloading a media selection.

> Use the NSURLSessionDownloadDelegate method instead, URLSession:task:didCompleteWithError:

## Declaration

```swift
optional func urlSession(_ session: URLSession, aggregateAssetDownloadTask: AVAggregateAssetDownloadTask, didCompleteFor mediaSelection: AVMediaSelection)
```

## Parameters

- `session`: The session the asset download task is on.
- `aggregateAssetDownloadTask`: The download task that finished downloading the media selection.
- `mediaSelection`: The downloaded media selection.

## See Also

### Responding to aggregate download events

- [urlSession(\_:aggregateAssetDownloadTask:willDownloadTo:)](urlsession%28__aggregateassetdownloadtask_willdownloadto_%29.md): Deprecated. Tells the delegate the final location of the asset when the download completes.
- [urlSession(\_:aggregateAssetDownloadTask:didLoad:totalTimeRangesLoaded:timeRangeExpectedToLoad:for:)](urlsession%28__aggregateassetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_for_%29.md): Deprecated. Tells the delegate that the aggregate download task loaded a new time range.

# URLSession:aggregateAssetDownloadTask:didCompleteForMediaSelection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the delegate that a child task finished downloading a media selection.

> Use the NSURLSessionDownloadDelegate method instead, URLSession:task:didCompleteWithError:

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session aggregateAssetDownloadTask:(AVAggregateAssetDownloadTask *) aggregateAssetDownloadTask didCompleteForMediaSelection:(AVMediaSelection *) mediaSelection;
```

## Parameters

- `session`: The session the asset download task is on.
- `aggregateAssetDownloadTask`: The download task that finished downloading the media selection.
- `mediaSelection`: The downloaded media selection.

## See Also

### Responding to aggregate download events

- [URLSession:aggregateAssetDownloadTask:willDownloadToURL:](urlsession%28__aggregateassetdownloadtask_willdownloadto_%29.md): Deprecated. Tells the delegate the final location of the asset when the download completes.
- [URLSession:aggregateAssetDownloadTask:didLoadTimeRange:totalTimeRangesLoaded:timeRangeExpectedToLoad:forMediaSelection:](urlsession%28__aggregateassetdownloadtask_didload_totaltimerangesloaded_timerangeexpectedtoload_for_%29.md): Deprecated. Tells the delegate that the aggregate download task loaded a new time range.
