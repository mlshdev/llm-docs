> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadurlsession](https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession)

# AVAssetDownloadURLSession (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

A URL session that creates and manages asset download tasks.

## Declaration

```swift
class AVAssetDownloadURLSession
```

<a id="overview"></a>

## Overview

Create an [AVAssetDownloadURLSession](avassetdownloadurlsession.md) by calling [init(configuration:assetDownloadDelegate:delegateQueue:)](avassetdownloadurlsession/init%28configuration_assetdownloaddelegate_delegatequeue_%29.md) with a background [URLSessionConfiguration](../foundation/urlsessionconfiguration.md). The background configuration supports reliable downloading while the app is in a suspended state.

> **Important**

> The standard `URLSession` initializers and task-creation methods are unavailable on this class. Use [init(configuration:assetDownloadDelegate:delegateQueue:)](avassetdownloadurlsession/init%28configuration_assetdownloaddelegate_delegatequeue_%29.md) to create a session and [makeAssetDownloadTask(downloadConfiguration:)](avassetdownloadurlsession/makeassetdownloadtask%28downloadconfiguration_%29.md) to create download tasks.

Background sessions persist across app launches. The system manages downloads out-of-process so they continue while your app is in a suspended state. If the system terminates your app while downloads are in progress, it relaunches the app and calls [application(\_:handleEventsForBackgroundURLSession:completionHandler:)](../uikit/uiapplicationdelegate/application%28__handleeventsforbackgroundurlsession_completionhandler_%29.md) with the session identifier. Recreate the [AVAssetDownloadURLSession](avassetdownloadurlsession.md) using the same background configuration identifier to reconnect to the running session and receive pending delegate callbacks. Call the provided completion handler after all callbacks finish. If a person force-quits your app, the system cancels all active downloads and doesn’t relaunch the app.

Mark the background session configuration as discretionary to let the system defer downloads until network and battery conditions are favorable. You can only start a non-discretionary download task while your app is in the foreground. Reserve non-discretionary sessions for downloads that a person explicitly starts. Use a discretionary session for opportunistic downloads that happen without a person’s direct involvement.

Assign an [AVAssetDownloadDelegate](avassetdownloaddelegate.md) to the session to receive download progress, media-selection resolution, and completion callbacks for every download task the session creates.

## Topics

### Creating a download session

- [init(configuration:assetDownloadDelegate:delegateQueue:)](avassetdownloadurlsession/init%28configuration_assetdownloaddelegate_delegatequeue_%29.md): Creates a URL session to download assets.
- [AVAssetDownloadDelegate](avassetdownloaddelegate.md): A protocol that defines the methods to implement to respond to asset-download events.

### Creating download tasks

- [makeAssetDownloadTask(downloadConfiguration:)](avassetdownloadurlsession/makeassetdownloadtask%28downloadconfiguration_%29.md): Creates a download task that uses the specified configuration.
- [AVAssetDownloadConfiguration](avassetdownloadconfiguration.md): An object that provides the configuration for a download task.
- [makeAssetDownloadTask(asset:assetTitle:assetArtworkData:options:)](avassetdownloadurlsession/makeassetdownloadtask%28asset_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset.
- [aggregateAssetDownloadTask(with:mediaSelections:assetTitle:assetArtworkData:options:)](avassetdownloadurlsession/aggregateassetdownloadtask%28with_mediaselections_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset and media selections.
- [makeAssetDownloadTask(asset:destinationURL:options:)](avassetdownloadurlsession/makeassetdownloadtask%28asset_destinationurl_options_%29.md): Deprecated. Creates a download task to download the asset to the indicated location.

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredMediaBitrateKey](avassetdownloadtaskminimumrequiredmediabitratekey.md): Deprecated. A key that indicates the minimum bit rate of the variant to download.
- [AVAssetDownloadTaskMinimumRequiredPresentationSizeKey](avassetdownloadtaskminimumrequiredpresentationsizekey.md): Deprecated. A key that indicates the minimum presentation size of the variant to download.
- [AVAssetDownloadTaskMediaSelectionKey](avassetdownloadtaskmediaselectionkey.md): Deprecated. A key that indicates which media selection to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersHDRKey](avassetdownloadtaskprefershdrkey.md): Deprecated. A key that indicates whether the task downloads HDR instead of SDR video, when available.
- [AVAssetDownloadTaskPrefersLosslessAudioKey](avassetdownloadtaskpreferslosslessaudiokey.md): Deprecated. A key that indicates whether the task downloads media selections in lossless audio format, when available.

## Relationships

### Inherits From

- [URLSession](../foundation/urlsession.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Asset downloading

- [Using AVFoundation to play and persist HTTP live streams](using-avfoundation-to-play-and-persist-http-live-streams.md): Play HTTP Live Streams and persist streams on disk for offline playback using AVFoundation.
- [AVAssetDownloadTask](avassetdownloadtask.md): A URL session task that downloads a remote asset to the device for offline playback.
- [AVAggregateAssetDownloadTask](avaggregateassetdownloadtask.md): Deprecated. A task that downloads multiple media selections for an asset.

# AVAssetDownloadURLSession (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

A URL session that creates and manages asset download tasks.

## Declaration

```objectivec
@interface AVAssetDownloadURLSession : NSURLSession
```

<a id="overview"></a>

## Overview

Create an [AVAssetDownloadURLSession](avassetdownloadurlsession.md) by calling [sessionWithConfiguration:assetDownloadDelegate:delegateQueue:](avassetdownloadurlsession/init%28configuration_assetdownloaddelegate_delegatequeue_%29.md) with a background [NSURLSessionConfiguration](../foundation/urlsessionconfiguration.md). The background configuration supports reliable downloading while the app is in a suspended state.

> **Important**

> The standard `URLSession` initializers and task-creation methods are unavailable on this class. Use [sessionWithConfiguration:assetDownloadDelegate:delegateQueue:](avassetdownloadurlsession/init%28configuration_assetdownloaddelegate_delegatequeue_%29.md) to create a session and [assetDownloadTaskWithConfiguration:](avassetdownloadurlsession/makeassetdownloadtask%28downloadconfiguration_%29.md) to create download tasks.

Background sessions persist across app launches. The system manages downloads out-of-process so they continue while your app is in a suspended state. If the system terminates your app while downloads are in progress, it relaunches the app and calls [application:handleEventsForBackgroundURLSession:completionHandler:](../uikit/uiapplicationdelegate/application%28__handleeventsforbackgroundurlsession_completionhandler_%29.md) with the session identifier. Recreate the [AVAssetDownloadURLSession](avassetdownloadurlsession.md) using the same background configuration identifier to reconnect to the running session and receive pending delegate callbacks. Call the provided completion handler after all callbacks finish. If a person force-quits your app, the system cancels all active downloads and doesn’t relaunch the app.

Mark the background session configuration as discretionary to let the system defer downloads until network and battery conditions are favorable. You can only start a non-discretionary download task while your app is in the foreground. Reserve non-discretionary sessions for downloads that a person explicitly starts. Use a discretionary session for opportunistic downloads that happen without a person’s direct involvement.

Assign an [AVAssetDownloadDelegate](avassetdownloaddelegate.md) to the session to receive download progress, media-selection resolution, and completion callbacks for every download task the session creates.

## Topics

### Creating a download session

- [sessionWithConfiguration:assetDownloadDelegate:delegateQueue:](avassetdownloadurlsession/init%28configuration_assetdownloaddelegate_delegatequeue_%29.md): Creates a URL session to download assets.
- [AVAssetDownloadDelegate](avassetdownloaddelegate.md): A protocol that defines the methods to implement to respond to asset-download events.

### Creating download tasks

- [assetDownloadTaskWithConfiguration:](avassetdownloadurlsession/makeassetdownloadtask%28downloadconfiguration_%29.md): Creates a download task that uses the specified configuration.
- [AVAssetDownloadConfiguration](avassetdownloadconfiguration.md): An object that provides the configuration for a download task.
- [assetDownloadTaskWithURLAsset:assetTitle:assetArtworkData:options:](avassetdownloadurlsession/makeassetdownloadtask%28asset_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset.
- [aggregateAssetDownloadTaskWithURLAsset:mediaSelections:assetTitle:assetArtworkData:options:](avassetdownloadurlsession/aggregateassetdownloadtask%28with_mediaselections_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset and media selections.
- [assetDownloadTaskWithURLAsset:destinationURL:options:](avassetdownloadurlsession/makeassetdownloadtask%28asset_destinationurl_options_%29.md): Deprecated. Creates a download task to download the asset to the indicated location.

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredMediaBitrateKey](avassetdownloadtaskminimumrequiredmediabitratekey.md): Deprecated. A key that indicates the minimum bit rate of the variant to download.
- [AVAssetDownloadTaskMinimumRequiredPresentationSizeKey](avassetdownloadtaskminimumrequiredpresentationsizekey.md): Deprecated. A key that indicates the minimum presentation size of the variant to download.
- [AVAssetDownloadTaskMediaSelectionKey](avassetdownloadtaskmediaselectionkey.md): Deprecated. A key that indicates which media selection to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersHDRKey](avassetdownloadtaskprefershdrkey.md): Deprecated. A key that indicates whether the task downloads HDR instead of SDR video, when available.
- [AVAssetDownloadTaskPrefersLosslessAudioKey](avassetdownloadtaskpreferslosslessaudiokey.md): Deprecated. A key that indicates whether the task downloads media selections in lossless audio format, when available.

## Relationships

### Inherits From

- [NSURLSession](../foundation/urlsession.md)

## See Also

### Asset downloading

- [Using AVFoundation to play and persist HTTP live streams](using-avfoundation-to-play-and-persist-http-live-streams.md): Play HTTP Live Streams and persist streams on disk for offline playback using AVFoundation.
- [AVAssetDownloadTask](avassetdownloadtask.md): A URL session task that downloads a remote asset to the device for offline playback.
- [AVAggregateAssetDownloadTask](avaggregateassetdownloadtask.md): Deprecated. A task that downloads multiple media selections for an asset.
