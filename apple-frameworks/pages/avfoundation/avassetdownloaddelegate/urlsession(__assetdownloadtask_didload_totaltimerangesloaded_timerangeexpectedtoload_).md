> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloaddelegate/urlsession(_:assetdownloadtask:didload:totaltimerangesloaded:timerangeexpectedtoload:)](https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/urlsession(_:assetdownloadtask:didload:totaltimerangesloaded:timerangeexpectedtoload:))

# urlSession(\_:assetDownloadTask:didLoad:totalTimeRangesLoaded:timeRangeExpectedToLoad:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the delegate that a download task loaded a new time range.

> Use NSURLSessionTask.progress instead

## Declaration

```swift
optional func urlSession(_ session: URLSession, assetDownloadTask: AVAssetDownloadTask, didLoad timeRange: CMTimeRange, totalTimeRangesLoaded loadedTimeRanges: [NSValue], timeRangeExpectedToLoad: CMTimeRange)
```

## Parameters

- `session`: The session the asset download task is on.
- `assetDownloadTask`: The download task that loaded a new time range.
- `timeRange`: A [CMTimeRange](../../coremedia/cmtimerange.md) value that indicates the time range the task loaded since the last call to this method.
- `loadedTimeRanges`: An array of [CMTimeRange](../../coremedia/cmtimerange.md) values that indicate the time ranges the task has downloaded so far.
- `timeRangeExpectedToLoad`: A [CMTimeRange](../../coremedia/cmtimerange.md) value that indicates the expected duration of the downloaded asset.

<a id="Discussion"></a>

## Discussion

Implement this method to track the download status of an asset. The following example shows how to calculate the percentage complete for the current download.

**Swift**

```swift
func urlSession(_ session: URLSession, assetDownloadTask: AVAssetDownloadTask, didLoad timeRange: CMTimeRange, totalTimeRangesLoaded loadedTimeRanges: [NSValue], timeRangeExpectedToLoad: CMTimeRange) {
    var percentageComplete = 0.0
    // Iterate over loaded time ranges
    for value in loadedTimeRanges {
        // Unpack CMTimeRange value
        let loadedTimeRange = value.timeRangeValue
        percentageComplete += loadedTimeRange.duration.seconds / timeRangeExpectedToLoad.duration.seconds
    }
    percentageComplete *= 100
    // Updated interested observers of percentage change
}
```

**Objective-C**

```objc
- (void)URLSession:(NSURLSession *)session assetDownloadTask:(AVAssetDownloadTask *)assetDownloadTask
                                            didLoadTimeRange:(CMTimeRange)timeRange
                                       totalTimeRangesLoaded:(NSArray<NSValue *> *)loadedTimeRanges
                                     timeRangeExpectedToLoad:(CMTimeRange)timeRangeExpectedToLoad {
    double percentageComplete = 0.0f;
    // Iterate over loaded time ranges
    for (NSValue *value in loadedTimeRanges) {
        // Unpack CMTimeRange value
        CMTimeRange loadedTimeRange = value.CMTimeRangeValue;
        percentageComplete +=
            CMTimeGetSeconds(loadedTimeRange.duration) / CMTimeGetSeconds(timeRangeExpectedToLoad.duration);
    }
    percentageComplete *= 100;
    // Updated interested observers of percentage change
}
```

## See Also

### Responding to download events

- [urlSession(\_:assetDownloadTask:didResolve:)](urlsession%28__assetdownloadtask_didresolve_%29.md): Tells the delegate that a download task resolved the media selection to download, including any automatic selections.
- [urlSession(\_:assetDownloadTask:didFinishDownloadingTo:)](urlsession%28__assetdownloadtask_didfinishdownloadingto_%29.md): Deprecated. Tells the delegate that a download task finished downloading the requested asset.
- [urlSession(\_:assetDownloadTask:willDownloadVariants:)](urlsession%28__assetdownloadtask_willdownloadvariants_%29.md): Tells the delegate that a download task completed variant selection.
- [urlSession(\_:assetDownloadTask:willDownloadTo:)](urlsession%28__assetdownloadtask_willdownloadto_%29.md): Tells the delegate when a download task determines its download location.
- [urlSession(\_:assetDownloadTask:didReceive:)](urlsession%28__assetdownloadtask_didreceive_%29.md): Sent when a download task receives an AVMetricEvent.

# URLSession:assetDownloadTask:didLoadTimeRange:totalTimeRangesLoaded:timeRangeExpectedToLoad: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the delegate that a download task loaded a new time range.

> Use NSURLSessionTask.progress instead

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session assetDownloadTask:(AVAssetDownloadTask *) assetDownloadTask didLoadTimeRange:(CMTimeRange) timeRange totalTimeRangesLoaded:(NSArray<NSValue *> *) loadedTimeRanges timeRangeExpectedToLoad:(CMTimeRange) timeRangeExpectedToLoad;
```

## Parameters

- `session`: The session the asset download task is on.
- `assetDownloadTask`: The download task that loaded a new time range.
- `timeRange`: A [CMTimeRange](../../coremedia/cmtimerange.md) value that indicates the time range the task loaded since the last call to this method.
- `loadedTimeRanges`: An array of [CMTimeRange](../../coremedia/cmtimerange.md) values that indicate the time ranges the task has downloaded so far.
- `timeRangeExpectedToLoad`: A [CMTimeRange](../../coremedia/cmtimerange.md) value that indicates the expected duration of the downloaded asset.

<a id="Discussion"></a>

## Discussion

Implement this method to track the download status of an asset. The following example shows how to calculate the percentage complete for the current download.

**Swift**

```swift
func urlSession(_ session: URLSession, assetDownloadTask: AVAssetDownloadTask, didLoad timeRange: CMTimeRange, totalTimeRangesLoaded loadedTimeRanges: [NSValue], timeRangeExpectedToLoad: CMTimeRange) {
    var percentageComplete = 0.0
    // Iterate over loaded time ranges
    for value in loadedTimeRanges {
        // Unpack CMTimeRange value
        let loadedTimeRange = value.timeRangeValue
        percentageComplete += loadedTimeRange.duration.seconds / timeRangeExpectedToLoad.duration.seconds
    }
    percentageComplete *= 100
    // Updated interested observers of percentage change
}
```

**Objective-C**

```objc
- (void)URLSession:(NSURLSession *)session assetDownloadTask:(AVAssetDownloadTask *)assetDownloadTask
                                            didLoadTimeRange:(CMTimeRange)timeRange
                                       totalTimeRangesLoaded:(NSArray<NSValue *> *)loadedTimeRanges
                                     timeRangeExpectedToLoad:(CMTimeRange)timeRangeExpectedToLoad {
    double percentageComplete = 0.0f;
    // Iterate over loaded time ranges
    for (NSValue *value in loadedTimeRanges) {
        // Unpack CMTimeRange value
        CMTimeRange loadedTimeRange = value.CMTimeRangeValue;
        percentageComplete +=
            CMTimeGetSeconds(loadedTimeRange.duration) / CMTimeGetSeconds(timeRangeExpectedToLoad.duration);
    }
    percentageComplete *= 100;
    // Updated interested observers of percentage change
}
```

## See Also

### Responding to download events

- [URLSession:assetDownloadTask:didResolveMediaSelection:](urlsession%28__assetdownloadtask_didresolve_%29.md): Tells the delegate that a download task resolved the media selection to download, including any automatic selections.
- [URLSession:assetDownloadTask:didFinishDownloadingToURL:](urlsession%28__assetdownloadtask_didfinishdownloadingto_%29.md): Deprecated. Tells the delegate that a download task finished downloading the requested asset.
- [URLSession:assetDownloadTask:willDownloadVariants:](urlsession%28__assetdownloadtask_willdownloadvariants_%29.md): Tells the delegate that a download task completed variant selection.
- [URLSession:assetDownloadTask:willDownloadToURL:](urlsession%28__assetdownloadtask_willdownloadto_%29.md): Tells the delegate when a download task determines its download location.
- [URLSession:assetDownloadTask:didReceiveMetricEvent:](urlsession%28__assetdownloadtask_didreceive_%29.md): Sent when a download task receives an AVMetricEvent.
