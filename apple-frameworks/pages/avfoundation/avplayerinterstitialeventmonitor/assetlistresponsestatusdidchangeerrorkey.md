> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventmonitor/assetlistresponsestatusdidchangeerrorkey](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/assetlistresponsestatusdidchangeerrorkey)

# assetListResponseStatusDidChangeErrorKey (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A key to retrieve the error related to a change in an interstitial event’s asset list response.

## Declaration

```swift
class let assetListResponseStatusDidChangeErrorKey: String
```

<a id="Discussion"></a>

## Discussion

This key only exists in the notification’s [userInfo](../../foundation/notification/userinfo.md) dictionary when the status is [AVPlayerInterstitialEventAssetListResponseStatus.unavailable](../avplayerinterstitialeventassetlistresponsestatus/unavailable.md). Use it to retrieve an error object that provides information about the failure to read the asset list.

## See Also

### User information keys

- [assetListResponseStatusDidChangeEventKey](assetlistresponsestatusdidchangeeventkey.md): A key to retrieve the interstitial event that has an asset list response status change.
- [assetListResponseStatusDidChangeStatusKey](assetlistresponsestatusdidchangestatuskey.md): A key to retrieve the asset list response status.

# AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeErrorKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A key to retrieve the error related to a change in an interstitial event’s asset list response.

## Declaration

```objectivec
extern NSString * const AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeErrorKey;
```

<a id="Discussion"></a>

## Discussion

This key only exists in the notification’s [userInfo](../../foundation/notification/userinfo.md) dictionary when the status is [AVPlayerInterstitialEventAssetListResponseStatusUnavailable](../avplayerinterstitialeventassetlistresponsestatus/unavailable.md). Use it to retrieve an error object that provides information about the failure to read the asset list.

## See Also

### User information keys

- [AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeEventKey](assetlistresponsestatusdidchangeeventkey.md): A key to retrieve the interstitial event that has an asset list response status change.
- [AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeStatusKey](assetlistresponsestatusdidchangestatuskey.md): A key to retrieve the asset list response status.
