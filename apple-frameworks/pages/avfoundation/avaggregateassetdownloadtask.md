> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avaggregateassetdownloadtask](https://developer.apple.com/documentation/avfoundation/avaggregateassetdownloadtask)

# AVAggregateAssetDownloadTask (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A task that downloads multiple media selections for an asset.

> Use assetDownloadTaskWithConfiguration: instead

## Declaration

```swift
class AVAggregateAssetDownloadTask
```

## Topics

### Accessing the asset

- [urlAsset](avaggregateassetdownloadtask/urlasset.md): Deprecated. The asset the parent task downloads.

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
- [AVAssetDownloadTask](avassetdownloadtask.md): A URL session task that downloads a remote asset to the device for offline playback.

# AVAggregateAssetDownloadTask (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A task that downloads multiple media selections for an asset.

> Use assetDownloadTaskWithConfiguration: instead

## Declaration

```objectivec
@interface AVAggregateAssetDownloadTask : NSURLSessionTask
```

## Topics

### Accessing the asset

- [URLAsset](avaggregateassetdownloadtask/urlasset.md): Deprecated. The asset the parent task downloads.

## Relationships

### Inherits From

- [NSURLSessionTask](../foundation/urlsessiontask.md)

## See Also

### Asset downloading

- [Using AVFoundation to play and persist HTTP live streams](using-avfoundation-to-play-and-persist-http-live-streams.md): Play HTTP Live Streams and persist streams on disk for offline playback using AVFoundation.
- [AVAssetDownloadURLSession](avassetdownloadurlsession.md): A URL session that creates and manages asset download tasks.
- [AVAssetDownloadTask](avassetdownloadtask.md): A URL session task that downloads a remote asset to the device for offline playback.
