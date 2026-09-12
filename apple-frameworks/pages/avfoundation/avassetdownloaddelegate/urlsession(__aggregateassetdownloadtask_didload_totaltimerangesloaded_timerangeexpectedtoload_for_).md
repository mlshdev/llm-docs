> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloaddelegate/urlsession(_:aggregateassetdownloadtask:didload:totaltimerangesloaded:timerangeexpectedtoload:for:)](https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/urlsession(_:aggregateassetdownloadtask:didload:totaltimerangesloaded:timerangeexpectedtoload:for:))

# urlSession(\_:aggregateAssetDownloadTask:didLoad:totalTimeRangesLoaded:timeRangeExpectedToLoad:for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the delegate that the aggregate download task loaded a new time range.

> Use NSURLSessionTask.progress: instead

## Declaration

```swift
optional func urlSession(_ session: URLSession, aggregateAssetDownloadTask: AVAggregateAssetDownloadTask, didLoad timeRange: CMTimeRange, totalTimeRangesLoaded loadedTimeRanges: [NSValue], timeRangeExpectedToLoad: CMTimeRange, for mediaSelection: AVMediaSelection)
```

## Parameters

- `session`: The session the asset download task is on.
- `aggregateAssetDownloadTask`: The download task that loaded a new time range.
- `timeRange`: A [CMTimeRange](../../coremedia/cmtimerange.md) value that indicates the time range the task loaded since the last call to this method.
- `loadedTimeRanges`: An array of CMTimeRange values that indicate the time ranges the task has downloaded so far.
- `timeRangeExpectedToLoad`: A CMTimeRange value that indicates the expected duration of the downloaded asset.
- `mediaSelection`: The media selection the task is downloading.

## See Also

### Responding to aggregate download events

- [urlSession(\_:aggregateAssetDownloadTask:willDownloadTo:)](urlsession%28__aggregateassetdownloadtask_willdownloadto_%29.md): Deprecated. Tells the delegate the final location of the asset when the download completes.
- [urlSession(\_:aggregateAssetDownloadTask:didCompleteFor:)](urlsession%28__aggregateassetdownloadtask_didcompletefor_%29.md): Deprecated. Tells the delegate that a child task finished downloading a media selection.

# URLSession:aggregateAssetDownloadTask:didLoadTimeRange:totalTimeRangesLoaded:timeRangeExpectedToLoad:forMediaSelection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the delegate that the aggregate download task loaded a new time range.

> Use NSURLSessionTask.progress: instead

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session aggregateAssetDownloadTask:(AVAggregateAssetDownloadTask *) aggregateAssetDownloadTask didLoadTimeRange:(CMTimeRange) timeRange totalTimeRangesLoaded:(NSArray<NSValue *> *) loadedTimeRanges timeRangeExpectedToLoad:(CMTimeRange) timeRangeExpectedToLoad forMediaSelection:(AVMediaSelection *) mediaSelection;
```

## Parameters

- `session`: The session the asset download task is on.
- `aggregateAssetDownloadTask`: The download task that loaded a new time range.
- `timeRange`: A [CMTimeRange](../../coremedia/cmtimerange.md) value that indicates the time range the task loaded since the last call to this method.
- `loadedTimeRanges`: An array of CMTimeRange values that indicate the time ranges the task has downloaded so far.
- `timeRangeExpectedToLoad`: A CMTimeRange value that indicates the expected duration of the downloaded asset.
- `mediaSelection`: The media selection the task is downloading.

## See Also

### Responding to aggregate download events

- [URLSession:aggregateAssetDownloadTask:willDownloadToURL:](urlsession%28__aggregateassetdownloadtask_willdownloadto_%29.md): Deprecated. Tells the delegate the final location of the asset when the download completes.
- [URLSession:aggregateAssetDownloadTask:didCompleteForMediaSelection:](urlsession%28__aggregateassetdownloadtask_didcompletefor_%29.md): Deprecated. Tells the delegate that a child task finished downloading a media selection.
