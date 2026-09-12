> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadcontentconfiguration](https://developer.apple.com/documentation/avfoundation/avassetdownloadcontentconfiguration)

# AVAssetDownloadContentConfiguration (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

A configuration object that contains variant qualifiers and media options.

## Declaration

```swift
class AVAssetDownloadContentConfiguration
```

## Topics

### Accessing configuration details

- [variantQualifiers](avassetdownloadcontentconfiguration/variantqualifiers.md): The variant qualifiers for this configuration.
- [AVAssetVariantQualifier](avassetvariantqualifier.md): An object that represents an HTTP Live Streaming asset variant.
- [mediaSelections](avassetdownloadcontentconfiguration/mediaselections.md): The media selections of an asset that a task downloads.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing configuration details

- [artworkData](avassetdownloadconfiguration/artworkdata.md): A data value that represents the asset’s artwork.
- [primaryContentConfiguration](avassetdownloadconfiguration/primarycontentconfiguration.md): The configuration for the primary content that the task downloads.
- [auxiliaryContentConfigurations](avassetdownloadconfiguration/auxiliarycontentconfigurations.md): The configuration for the auxiliary content that the task downloads.
- [optimizesAuxiliaryContentConfigurations](avassetdownloadconfiguration/optimizesauxiliarycontentconfigurations.md): A Boolean value that indicates whether the task optimizes auxiliary content selection.
- [downloadsInterstitialAssets](avassetdownloadconfiguration/downloadsinterstitialassets.md): Download interstitial assets as listed in the index file. False by default.
- [setInterstitialMediaSelectionCriteria(\_:forMediaCharacteristic:)](avassetdownloadconfiguration/setinterstitialmediaselectioncriteria%28__formediacharacteristic_%29.md): Sets media selection on interstitials for this asset

# AVAssetDownloadContentConfiguration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

A configuration object that contains variant qualifiers and media options.

## Declaration

```objectivec
@interface AVAssetDownloadContentConfiguration : NSObject
```

## Topics

### Accessing configuration details

- [variantQualifiers](avassetdownloadcontentconfiguration/variantqualifiers.md): The variant qualifiers for this configuration.
- [AVAssetVariantQualifier](avassetvariantqualifier.md): An object that represents an HTTP Live Streaming asset variant.
- [mediaSelections](avassetdownloadcontentconfiguration/mediaselections.md): The media selections of an asset that a task downloads.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Accessing configuration details

- [artworkData](avassetdownloadconfiguration/artworkdata.md): A data value that represents the asset’s artwork.
- [primaryContentConfiguration](avassetdownloadconfiguration/primarycontentconfiguration.md): The configuration for the primary content that the task downloads.
- [auxiliaryContentConfigurations](avassetdownloadconfiguration/auxiliarycontentconfigurations.md): The configuration for the auxiliary content that the task downloads.
- [optimizesAuxiliaryContentConfigurations](avassetdownloadconfiguration/optimizesauxiliarycontentconfigurations.md): A Boolean value that indicates whether the task optimizes auxiliary content selection.
- [downloadsInterstitialAssets](avassetdownloadconfiguration/downloadsinterstitialassets.md): Download interstitial assets as listed in the index file. False by default.
- [setInterstitialMediaSelectionCriteria:forMediaCharacteristic:](avassetdownloadconfiguration/setinterstitialmediaselectioncriteria%28__formediacharacteristic_%29.md): Sets media selection on interstitials for this asset
