> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/assetlistresponsestatusdidchangestatuskey

# assetListResponseStatusDidChangeStatusKey (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A key to retrieve the asset list response status.

## Declaration

```swift
class let assetListResponseStatusDidChangeStatusKey: String
```

<a id="Discussion"></a>

## Discussion

Use this key to retrieve the  [AVPlayerInterstitialEventAssetListResponseStatus](../avplayerinterstitialeventassetlistresponsestatus.md) value that indicates the changed asset response status.

## See Also

### User information keys

- [assetListResponseStatusDidChangeEventKey](assetlistresponsestatusdidchangeeventkey.md): A key to retrieve the interstitial event that has an asset list response status change.
- [assetListResponseStatusDidChangeErrorKey](assetlistresponsestatusdidchangeerrorkey.md): A key to retrieve the error related to a change in an interstitial event’s asset list response.

# AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeStatusKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

A key to retrieve the asset list response status.

## Declaration

```objectivec
extern NSString * const AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeStatusKey;
```

<a id="Discussion"></a>

## Discussion

Use this key to retrieve the  [AVPlayerInterstitialEventAssetListResponseStatus](../avplayerinterstitialeventassetlistresponsestatus.md) value that indicates the changed asset response status.

## See Also

### User information keys

- [AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeEventKey](assetlistresponsestatusdidchangeeventkey.md): A key to retrieve the interstitial event that has an asset list response status change.
- [AVPlayerInterstitialEventMonitorAssetListResponseStatusDidChangeErrorKey](assetlistresponsestatusdidchangeerrorkey.md): A key to retrieve the error related to a change in an interstitial event’s asset list response.
