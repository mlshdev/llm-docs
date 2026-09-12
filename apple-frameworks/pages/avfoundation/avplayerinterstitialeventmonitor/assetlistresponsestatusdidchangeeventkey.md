> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventmonitor/assetlistresponsestatusdidchangeeventkey](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/assetlistresponsestatusdidchangeeventkey)

# assetListResponseStatusDidChangeEventKey (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A key to retrieve the interstitial event that has an asset list response status change.

## Declaration

```swift
class let assetListResponseStatusDidChangeEventKey: String
```

<a id="Discussion"></a>

## Discussion

Use this key to retrieve the [AVPlayerInterstitialEvent](../avplayerinterstitialevent.md) object that has an updates asset list response.

## See Also

### User information keys

- [assetListResponseStatusDidChangeStatusKey](assetlistresponsestatusdidchangestatuskey.md): A key to retrieve the asset list response status.
- [assetListResponseStatusDidChangeErrorKey](assetlistresponsestatusdidchangeerrorkey.md): A key to retrieve the error related to a change in an interstitial event’s asset list response.

# AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeEventKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A key to retrieve the interstitial event that has an asset list response status change.

## Declaration

```objectivec
extern NSString * const AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeEventKey;
```

<a id="Discussion"></a>

## Discussion

Use this key to retrieve the [AVPlayerInterstitialEvent](../avplayerinterstitialevent.md) object that has an updates asset list response.

## See Also

### User information keys

- [AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeStatusKey](assetlistresponsestatusdidchangestatuskey.md): A key to retrieve the asset list response status.
- [AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeErrorKey](assetlistresponsestatusdidchangeerrorkey.md): A key to retrieve the error related to a change in an interstitial event’s asset list response.
