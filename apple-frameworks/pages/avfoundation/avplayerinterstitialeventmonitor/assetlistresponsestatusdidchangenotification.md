> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventmonitor/assetlistresponsestatusdidchangenotification](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/assetlistresponsestatusdidchangenotification)

# assetListResponseStatusDidChangeNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A notification the system posts when the status of an interstitial event’s asset list response changes.

## Declaration

```swift
class let assetListResponseStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Notifications of this type provide a [userInfo](../../foundation/notification/userinfo.md) dictionary that can contain values for the keys listed below.

## Topics

### User information keys

- [assetListResponseStatusDidChangeEventKey](assetlistresponsestatusdidchangeeventkey.md): A key to retrieve the interstitial event that has an asset list response status change.
- [assetListResponseStatusDidChangeStatusKey](assetlistresponsestatusdidchangestatuskey.md): A key to retrieve the asset list response status.
- [assetListResponseStatusDidChangeErrorKey](assetlistresponsestatusdidchangeerrorkey.md): A key to retrieve the error related to a change in an interstitial event’s asset list response.

## See Also

### Monitoring the asset list response

- [AVPlayerInterstitialEventAssetListResponseStatus](../avplayerinterstitialeventassetlistresponsestatus.md): Constants that describe the status of the asset list response for an interstitial event.

# AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A notification the system posts when the status of an interstitial event’s asset list response changes.

## Declaration

```objectivec
extern NSNotificationName const AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

Notifications of this type provide a [userInfo](../../foundation/notification/userinfo.md) dictionary that can contain values for the keys listed below.

## Topics

### User information keys

- [AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeEventKey](assetlistresponsestatusdidchangeeventkey.md): A key to retrieve the interstitial event that has an asset list response status change.
- [AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeStatusKey](assetlistresponsestatusdidchangestatuskey.md): A key to retrieve the asset list response status.
- [AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeErrorKey](assetlistresponsestatusdidchangeerrorkey.md): A key to retrieve the error related to a change in an interstitial event’s asset list response.

## See Also

### Monitoring the asset list response

- [AVPlayerInterstitialEventAssetListResponseStatus](../avplayerinterstitialeventassetlistresponsestatus.md): Constants that describe the status of the asset list response for an interstitial event.
