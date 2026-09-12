> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadconfiguration/primarycontentconfiguration](https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration/primarycontentconfiguration)

# primaryContentConfiguration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

The configuration for the primary content that the task downloads.

## Declaration

```swift
var primaryContentConfiguration: AVAssetDownloadContentConfiguration { get }
```

## See Also

### Accessing configuration details

- [artworkData](artworkdata.md): A data value that represents the asset’s artwork.
- [auxiliaryContentConfigurations](auxiliarycontentconfigurations.md): The configuration for the auxiliary content that the task downloads.
- [AVAssetDownloadContentConfiguration](../avassetdownloadcontentconfiguration.md): A configuration object that contains variant qualifiers and media options.
- [optimizesAuxiliaryContentConfigurations](optimizesauxiliarycontentconfigurations.md): A Boolean value that indicates whether the task optimizes auxiliary content selection.
- [downloadsInterstitialAssets](downloadsinterstitialassets.md): Download interstitial assets as listed in the index file. False by default.
- [setInterstitialMediaSelectionCriteria(\_:forMediaCharacteristic:)](setinterstitialmediaselectioncriteria%28__formediacharacteristic_%29.md): Sets media selection on interstitials for this asset

# primaryContentConfiguration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

The configuration for the primary content that the task downloads.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAssetDownloadContentConfiguration * primaryContentConfiguration;
```

## See Also

### Accessing configuration details

- [artworkData](artworkdata.md): A data value that represents the asset’s artwork.
- [auxiliaryContentConfigurations](auxiliarycontentconfigurations.md): The configuration for the auxiliary content that the task downloads.
- [AVAssetDownloadContentConfiguration](../avassetdownloadcontentconfiguration.md): A configuration object that contains variant qualifiers and media options.
- [optimizesAuxiliaryContentConfigurations](optimizesauxiliarycontentconfigurations.md): A Boolean value that indicates whether the task optimizes auxiliary content selection.
- [downloadsInterstitialAssets](downloadsinterstitialassets.md): Download interstitial assets as listed in the index file. False by default.
- [setInterstitialMediaSelectionCriteria:forMediaCharacteristic:](setinterstitialmediaselectioncriteria%28__formediacharacteristic_%29.md): Sets media selection on interstitials for this asset
