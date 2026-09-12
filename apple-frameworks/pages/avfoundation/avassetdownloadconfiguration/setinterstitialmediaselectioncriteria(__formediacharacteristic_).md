> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadconfiguration/setinterstitialmediaselectioncriteria(_:formediacharacteristic:)](https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration/setinterstitialmediaselectioncriteria(_:formediacharacteristic:))

# setInterstitialMediaSelectionCriteria(\_:forMediaCharacteristic:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Sets media selection on interstitials for this asset

## Declaration

```swift
func setInterstitialMediaSelectionCriteria(_ criteria: [AVPlayerMediaSelectionCriteria], forMediaCharacteristic mediaCharacteristic: AVMediaCharacteristic)
```

## Parameters

- `criteria`: The array of selection criteria to set
- `mediaCharacteristic`: The AVMediaCharacteristic to which the criteria will be applied

<a id="discussion"></a>

## Discussion

Typically, interstitial assets have not been discovered when the main download is initiated. This method allows the user to specify AVMediaSelectionCriteria for all interstitials that are discovered. Each AVPlayerMediaSelectionCriteria in the array of criteria specfies a set of criteria for a variant to download.

## See Also

### Accessing configuration details

- [artworkData](artworkdata.md): A data value that represents the asset’s artwork.
- [primaryContentConfiguration](primarycontentconfiguration.md): The configuration for the primary content that the task downloads.
- [auxiliaryContentConfigurations](auxiliarycontentconfigurations.md): The configuration for the auxiliary content that the task downloads.
- [AVAssetDownloadContentConfiguration](../avassetdownloadcontentconfiguration.md): A configuration object that contains variant qualifiers and media options.
- [optimizesAuxiliaryContentConfigurations](optimizesauxiliarycontentconfigurations.md): A Boolean value that indicates whether the task optimizes auxiliary content selection.
- [downloadsInterstitialAssets](downloadsinterstitialassets.md): Download interstitial assets as listed in the index file. False by default.

# setInterstitialMediaSelectionCriteria:forMediaCharacteristic: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Sets media selection on interstitials for this asset

## Declaration

```objectivec
- (void) setInterstitialMediaSelectionCriteria:(NSArray<AVPlayerMediaSelectionCriteria *> *) criteria forMediaCharacteristic:(AVMediaCharacteristic) mediaCharacteristic;
```

## Parameters

- `criteria`: The array of selection criteria to set
- `mediaCharacteristic`: The AVMediaCharacteristic to which the criteria will be applied

<a id="discussion"></a>

## Discussion

Typically, interstitial assets have not been discovered when the main download is initiated. This method allows the user to specify AVMediaSelectionCriteria for all interstitials that are discovered. Each AVPlayerMediaSelectionCriteria in the array of criteria specfies a set of criteria for a variant to download.

## See Also

### Accessing configuration details

- [artworkData](artworkdata.md): A data value that represents the asset’s artwork.
- [primaryContentConfiguration](primarycontentconfiguration.md): The configuration for the primary content that the task downloads.
- [auxiliaryContentConfigurations](auxiliarycontentconfigurations.md): The configuration for the auxiliary content that the task downloads.
- [AVAssetDownloadContentConfiguration](../avassetdownloadcontentconfiguration.md): A configuration object that contains variant qualifiers and media options.
- [optimizesAuxiliaryContentConfigurations](optimizesauxiliarycontentconfigurations.md): A Boolean value that indicates whether the task optimizes auxiliary content selection.
- [downloadsInterstitialAssets](downloadsinterstitialassets.md): Download interstitial assets as listed in the index file. False by default.
