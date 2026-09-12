> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadtask](https://developer.apple.com/documentation/avfoundation/avassetdownloadtask)

# AVAssetDownloadTask (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

A URL session task that downloads a remote asset to the device for offline playback.

## Declaration

```swift
class AVAssetDownloadTask
```

<a id="overview"></a>

## Overview

You create instances of this class by calling [makeAssetDownloadTask(downloadConfiguration:)](avassetdownloadurlsession/makeassetdownloadtask%28downloadconfiguration_%29.md) on the download session.

To play an asset while its download is in progress, reuse the [AVURLAsset](avurlasset.md) you supplied to the download configuration. The asset reads locally cached segments during concurrent playback when the streaming variant matches the downloading variant.

Adopt the [AVAssetDownloadDelegate](avassetdownloaddelegate.md) protocol to receive progress and completion callbacks. Use the inherited [progress](../foundation/urlsessiontask/progress.md) property for numeric download progress updates. The delegate method [urlSession(\_:assetDownloadTask:willDownloadTo:)](avassetdownloaddelegate/urlsession%28__assetdownloadtask_willdownloadto_%29.md) provides the local file URL where the system stores the asset.

> **Important**

> Save the local file URL the delegate provides. You need it to reconstruct the offline [AVURLAsset](avurlasset.md) on subsequent app launches.

To augment an existing download, initialize a new task with an [AVURLAsset](avurlasset.md) whose URL references the downloaded asset on disk. For example, you can add media selections that you didn’t include in the original download.

<a id="Live-Activity"></a>

### Live Activity

To control how the system schedules downloads, set the `isDiscretionary` property on the [URLSessionConfiguration](../foundation/urlsessionconfiguration.md) you pass when creating the [AVAssetDownloadURLSession](avassetdownloadurlsession.md). Non-discretionary downloads start as soon as possible. The system defers discretionary downloads until conditions like network and battery state are favorable, and runs them silently in the background.

On supported platforms, a non-discretionary download displays a Live Activity on the Lock Screen and in the Dynamic Island that shows real-time download progress. Discretionary downloads don’t display a Live Activity.

When your app has multiple active downloads, the system aggregates them into a single Live Activity that shows combined progress. For a single active download, the activity title displays the asset title.

If any downloads in the group fail, the Live Activity transitions to a failure state after all downloads finish. A person can also cancel all active and queued downloads for your app directly from the Live Activity, which causes the tasks to fail with `NSUserCancelledError` in the `NSCocoaErrorDomain` domain.

The Live Activity doesn’t reflect download tasks until you resume them. If you resume a task while your app runs in the background, the system might demote it to discretionary. The system queues downloads in the order you resume them.

Swift subclasses of this type must conform to [Sendable](https://developer.apple.com/documentation/swift/sendable).

## Topics

### Accessing task information

- [urlAsset](avassetdownloadtask/urlasset.md): The asset that this task downloads.
- [loadedTimeRanges](avassetdownloadtask/loadedtimeranges.md): Deprecated. The time ranges of the downloaded media that are ready for playback.
- [options](avassetdownloadtask/options.md): Deprecated. The configuration options for the task.
- [destinationURL](avassetdownloadtask/destinationurl.md): Deprecated. The local file URL to where the task downloads the asset.

## Relationships

### Inherits From

- [URLSessionTask](../foundation/urlsessiontask.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [ProgressReporting](../foundation/progressreporting.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Asset downloading

- [Using AVFoundation to play and persist HTTP live streams](using-avfoundation-to-play-and-persist-http-live-streams.md): Play HTTP Live Streams and persist streams on disk for offline playback using AVFoundation.
- [AVAssetDownloadURLSession](avassetdownloadurlsession.md): A URL session that creates and manages asset download tasks.
- [AVAggregateAssetDownloadTask](avaggregateassetdownloadtask.md): Deprecated. A task that downloads multiple media selections for an asset.

# AVAssetDownloadTask (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

A URL session task that downloads a remote asset to the device for offline playback.

## Declaration

```objectivec
@interface AVAssetDownloadTask : NSURLSessionTask
```

<a id="overview"></a>

## Overview

You create instances of this class by calling [assetDownloadTaskWithConfiguration:](avassetdownloadurlsession/makeassetdownloadtask%28downloadconfiguration_%29.md) on the download session.

To play an asset while its download is in progress, reuse the [AVURLAsset](avurlasset.md) you supplied to the download configuration. The asset reads locally cached segments during concurrent playback when the streaming variant matches the downloading variant.

Adopt the [AVAssetDownloadDelegate](avassetdownloaddelegate.md) protocol to receive progress and completion callbacks. Use the inherited [progress](../foundation/urlsessiontask/progress.md) property for numeric download progress updates. The delegate method [URLSession:assetDownloadTask:willDownloadToURL:](avassetdownloaddelegate/urlsession%28__assetdownloadtask_willdownloadto_%29.md) provides the local file URL where the system stores the asset.

> **Important**

> Save the local file URL the delegate provides. You need it to reconstruct the offline [AVURLAsset](avurlasset.md) on subsequent app launches.

To augment an existing download, initialize a new task with an [AVURLAsset](avurlasset.md) whose URL references the downloaded asset on disk. For example, you can add media selections that you didn’t include in the original download.

<a id="Live-Activity"></a>

### Live Activity

To control how the system schedules downloads, set the `isDiscretionary` property on the [NSURLSessionConfiguration](../foundation/urlsessionconfiguration.md) you pass when creating the [AVAssetDownloadURLSession](avassetdownloadurlsession.md). Non-discretionary downloads start as soon as possible. The system defers discretionary downloads until conditions like network and battery state are favorable, and runs them silently in the background.

On supported platforms, a non-discretionary download displays a Live Activity on the Lock Screen and in the Dynamic Island that shows real-time download progress. Discretionary downloads don’t display a Live Activity.

When your app has multiple active downloads, the system aggregates them into a single Live Activity that shows combined progress. For a single active download, the activity title displays the asset title.

If any downloads in the group fail, the Live Activity transitions to a failure state after all downloads finish. A person can also cancel all active and queued downloads for your app directly from the Live Activity, which causes the tasks to fail with `NSUserCancelledError` in the `NSCocoaErrorDomain` domain.

The Live Activity doesn’t reflect download tasks until you resume them. If you resume a task while your app runs in the background, the system might demote it to discretionary. The system queues downloads in the order you resume them.

Swift subclasses of this type must conform to [Sendable](https://developer.apple.com/documentation/swift/sendable).

## Topics

### Accessing task information

- [URLAsset](avassetdownloadtask/urlasset.md): The asset that this task downloads.
- [loadedTimeRanges](avassetdownloadtask/loadedtimeranges.md): Deprecated. The time ranges of the downloaded media that are ready for playback.
- [options](avassetdownloadtask/options.md): Deprecated. The configuration options for the task.
- [destinationURL](avassetdownloadtask/destinationurl.md): Deprecated. The local file URL to where the task downloads the asset.

## Relationships

### Inherits From

- [NSURLSessionTask](../foundation/urlsessiontask.md)

## See Also

### Asset downloading

- [Using AVFoundation to play and persist HTTP live streams](using-avfoundation-to-play-and-persist-http-live-streams.md): Play HTTP Live Streams and persist streams on disk for offline playback using AVFoundation.
- [AVAssetDownloadURLSession](avassetdownloadurlsession.md): A URL session that creates and manages asset download tasks.
- [AVAggregateAssetDownloadTask](avaggregateassetdownloadtask.md): Deprecated. A task that downloads multiple media selections for an asset.
