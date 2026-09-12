> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadconfiguration/optimizesauxiliarycontentconfigurations](https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration/optimizesauxiliarycontentconfigurations)

# optimizesAuxiliaryContentConfigurations (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether the task optimizes auxiliary content selection.

## Declaration

```swift
var optimizesAuxiliaryContentConfigurations: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, a download task optimizes its selection of auxiliary content based on its primary download content. For example, if the primary content configuration represents stereo renditions, and auxiliary content configuration represents multichannel audio renditions, the task choses the auxiliary multichannel variant to avoid downloading duplicate video renditions.

## See Also

### Accessing configuration details

- [artworkData](artworkdata.md): A data value that represents the asset’s artwork.
- [primaryContentConfiguration](primarycontentconfiguration.md): The configuration for the primary content that the task downloads.
- [auxiliaryContentConfigurations](auxiliarycontentconfigurations.md): The configuration for the auxiliary content that the task downloads.
- [AVAssetDownloadContentConfiguration](../avassetdownloadcontentconfiguration.md): A configuration object that contains variant qualifiers and media options.
- [downloadsInterstitialAssets](downloadsinterstitialassets.md): Download interstitial assets as listed in the index file. False by default.
- [setInterstitialMediaSelectionCriteria(\_:forMediaCharacteristic:)](setinterstitialmediaselectioncriteria%28__formediacharacteristic_%29.md): Sets media selection on interstitials for this asset

# optimizesAuxiliaryContentConfigurations (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether the task optimizes auxiliary content selection.

## Declaration

```objectivec
@property (nonatomic) BOOL optimizesAuxiliaryContentConfigurations;
```

<a id="Discussion"></a>

## Discussion

By default, a download task optimizes its selection of auxiliary content based on its primary download content. For example, if the primary content configuration represents stereo renditions, and auxiliary content configuration represents multichannel audio renditions, the task choses the auxiliary multichannel variant to avoid downloading duplicate video renditions.

## See Also

### Accessing configuration details

- [artworkData](artworkdata.md): A data value that represents the asset’s artwork.
- [primaryContentConfiguration](primarycontentconfiguration.md): The configuration for the primary content that the task downloads.
- [auxiliaryContentConfigurations](auxiliarycontentconfigurations.md): The configuration for the auxiliary content that the task downloads.
- [AVAssetDownloadContentConfiguration](../avassetdownloadcontentconfiguration.md): A configuration object that contains variant qualifiers and media options.
- [downloadsInterstitialAssets](downloadsinterstitialassets.md): Download interstitial assets as listed in the index file. False by default.
- [setInterstitialMediaSelectionCriteria:forMediaCharacteristic:](setinterstitialmediaselectioncriteria%28__formediacharacteristic_%29.md): Sets media selection on interstitials for this asset
