> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadconfiguration/downloadsinterstitialassets](https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration/downloadsinterstitialassets)

# downloadsInterstitialAssets (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

Download interstitial assets as listed in the index file. False by default.

## Declaration

```swift
var downloadsInterstitialAssets: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Ordinarily, interstitial assets are skipped when downloading content for later playback. Setting this property to true will cause interstitial assets to be downloaded as well. Playback of the downloaded content can then match the experience of online streaming playback as closely as possible.

## See Also

### Accessing configuration details

- [artworkData](artworkdata.md): A data value that represents the asset’s artwork.
- [primaryContentConfiguration](primarycontentconfiguration.md): The configuration for the primary content that the task downloads.
- [auxiliaryContentConfigurations](auxiliarycontentconfigurations.md): The configuration for the auxiliary content that the task downloads.
- [AVAssetDownloadContentConfiguration](../avassetdownloadcontentconfiguration.md): A configuration object that contains variant qualifiers and media options.
- [optimizesAuxiliaryContentConfigurations](optimizesauxiliarycontentconfigurations.md): A Boolean value that indicates whether the task optimizes auxiliary content selection.
- [setInterstitialMediaSelectionCriteria(\_:forMediaCharacteristic:)](setinterstitialmediaselectioncriteria%28__formediacharacteristic_%29.md): Sets media selection on interstitials for this asset

# downloadsInterstitialAssets (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

Download interstitial assets as listed in the index file. False by default.

## Declaration

```objectivec
@property (nonatomic) BOOL downloadsInterstitialAssets;
```

<a id="discussion"></a>

## Discussion

Ordinarily, interstitial assets are skipped when downloading content for later playback. Setting this property to true will cause interstitial assets to be downloaded as well. Playback of the downloaded content can then match the experience of online streaming playback as closely as possible.

## See Also

### Accessing configuration details

- [artworkData](artworkdata.md): A data value that represents the asset’s artwork.
- [primaryContentConfiguration](primarycontentconfiguration.md): The configuration for the primary content that the task downloads.
- [auxiliaryContentConfigurations](auxiliarycontentconfigurations.md): The configuration for the auxiliary content that the task downloads.
- [AVAssetDownloadContentConfiguration](../avassetdownloadcontentconfiguration.md): A configuration object that contains variant qualifiers and media options.
- [optimizesAuxiliaryContentConfigurations](optimizesauxiliarycontentconfigurations.md): A Boolean value that indicates whether the task optimizes auxiliary content selection.
- [setInterstitialMediaSelectionCriteria:forMediaCharacteristic:](setinterstitialmediaselectioncriteria%28__formediacharacteristic_%29.md): Sets media selection on interstitials for this asset
