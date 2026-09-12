> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventassetlistresponsestatus](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventassetlistresponsestatus)

# AVPlayerInterstitialEventAssetListResponseStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Constants that describe the status of the asset list response for an interstitial event.

## Declaration

```swift
enum AVPlayerInterstitialEventAssetListResponseStatus
```

## Topics

### Status values

- [AVPlayerInterstitialEventAssetListResponseStatus.available](avplayerinterstitialeventassetlistresponsestatus/available.md): Indicates that a valid asset list response is available.
- [AVPlayerInterstitialEventAssetListResponseStatus.cleared](avplayerinterstitialeventassetlistresponsestatus/cleared.md): Indicates that the system cleared the asset list response.
- [AVPlayerInterstitialEventAssetListResponseStatus.unavailable](avplayerinterstitialeventassetlistresponsestatus/unavailable.md): Indicates that the asset list response is unavailable.

### Initializers

- [init(rawValue:)](avplayerinterstitialeventassetlistresponsestatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring the asset list response

- [assetListResponseStatusDidChangeNotification](avplayerinterstitialeventmonitor/assetlistresponsestatusdidchangenotification.md): A notification the system posts when the status of an interstitial event’s asset list response changes.

# AVPlayerInterstitialEventAssetListResponseStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Constants that describe the status of the asset list response for an interstitial event.

## Declaration

```objectivec
enum AVPlayerInterstitialEventAssetListResponseStatus : NSInteger;
```

## Topics

### Status values

- [AVPlayerInterstitialEventAssetListResponseStatusAvailable](avplayerinterstitialeventassetlistresponsestatus/available.md): Indicates that a valid asset list response is available.
- [AVPlayerInterstitialEventAssetListResponseStatusCleared](avplayerinterstitialeventassetlistresponsestatus/cleared.md): Indicates that the system cleared the asset list response.
- [AVPlayerInterstitialEventAssetListResponseStatusUnavailable](avplayerinterstitialeventassetlistresponsestatus/unavailable.md): Indicates that the asset list response is unavailable.

## See Also

### Monitoring the asset list response

- [AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeNotification](avplayerinterstitialeventmonitor/assetlistresponsestatusdidchangenotification.md): A notification the system posts when the status of an interstitial event’s asset list response changes.
