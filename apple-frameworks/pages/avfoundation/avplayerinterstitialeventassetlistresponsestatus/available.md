> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialeventassetlistresponsestatus/available](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventassetlistresponsestatus/available)

# AVPlayerInterstitialEventAssetListResponseStatus.available (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Indicates that a valid asset list response is available.

## Declaration

```swift
case available
```

<a id="Discussion"></a>

## Discussion

You can retrieve the value by querying the [assetListResponse](../avplayerinterstitialevent/assetlistresponse.md) property of the interstitial event.

## See Also

### Status values

- [AVPlayerInterstitialEventAssetListResponseStatus.cleared](cleared.md): Indicates that the system cleared the asset list response.
- [AVPlayerInterstitialEventAssetListResponseStatus.unavailable](unavailable.md): Indicates that the asset list response is unavailable.

# AVPlayerInterstitialEventAssetListResponseStatusAvailable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Indicates that a valid asset list response is available.

## Declaration

```objectivec
AVPlayerInterstitialEventAssetListResponseStatusAvailable
```

<a id="Discussion"></a>

## Discussion

You can retrieve the value by querying the [assetListResponse](../avplayerinterstitialevent/assetlistresponse.md) property of the interstitial event.

## See Also

### Status values

- [AVPlayerInterstitialEventAssetListResponseStatusCleared](cleared.md): Indicates that the system cleared the asset list response.
- [AVPlayerInterstitialEventAssetListResponseStatusUnavailable](unavailable.md): Indicates that the asset list response is unavailable.
