> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadconfiguration](https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration)

# AVAssetDownloadConfiguration (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

An object that provides the configuration for a download task.

## Declaration

```swift
class AVAssetDownloadConfiguration
```

## Topics

### Creating a configuration

- [init(asset:title:)](avassetdownloadconfiguration/init%28asset_title_%29.md): Creates a download configuration for a media asset.

### Accessing configuration details

- [artworkData](avassetdownloadconfiguration/artworkdata.md): A data value that represents the asset’s artwork.
- [primaryContentConfiguration](avassetdownloadconfiguration/primarycontentconfiguration.md): The configuration for the primary content that the task downloads.
- [auxiliaryContentConfigurations](avassetdownloadconfiguration/auxiliarycontentconfigurations.md): The configuration for the auxiliary content that the task downloads.
- [AVAssetDownloadContentConfiguration](avassetdownloadcontentconfiguration.md): A configuration object that contains variant qualifiers and media options.
- [optimizesAuxiliaryContentConfigurations](avassetdownloadconfiguration/optimizesauxiliarycontentconfigurations.md): A Boolean value that indicates whether the task optimizes auxiliary content selection.
- [downloadsInterstitialAssets](avassetdownloadconfiguration/downloadsinterstitialassets.md): Download interstitial assets as listed in the index file. False by default.
- [setInterstitialMediaSelectionCriteria(\_:forMediaCharacteristic:)](avassetdownloadconfiguration/setinterstitialmediaselectioncriteria%28__formediacharacteristic_%29.md): Sets media selection on interstitials for this asset

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating download tasks

- [makeAssetDownloadTask(downloadConfiguration:)](avassetdownloadurlsession/makeassetdownloadtask%28downloadconfiguration_%29.md): Creates a download task that uses the specified configuration.
- [makeAssetDownloadTask(asset:assetTitle:assetArtworkData:options:)](avassetdownloadurlsession/makeassetdownloadtask%28asset_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset.
- [aggregateAssetDownloadTask(with:mediaSelections:assetTitle:assetArtworkData:options:)](avassetdownloadurlsession/aggregateassetdownloadtask%28with_mediaselections_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset and media selections.
- [makeAssetDownloadTask(asset:destinationURL:options:)](avassetdownloadurlsession/makeassetdownloadtask%28asset_destinationurl_options_%29.md): Deprecated. Creates a download task to download the asset to the indicated location.

# AVAssetDownloadConfiguration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 10.0+

An object that provides the configuration for a download task.

## Declaration

```objectivec
@interface AVAssetDownloadConfiguration : NSObject
```

## Topics

### Creating a configuration

- [downloadConfigurationWithAsset:title:](avassetdownloadconfiguration/init%28asset_title_%29.md): Creates a download configuration for a media asset.

### Accessing configuration details

- [artworkData](avassetdownloadconfiguration/artworkdata.md): A data value that represents the asset’s artwork.
- [primaryContentConfiguration](avassetdownloadconfiguration/primarycontentconfiguration.md): The configuration for the primary content that the task downloads.
- [auxiliaryContentConfigurations](avassetdownloadconfiguration/auxiliarycontentconfigurations.md): The configuration for the auxiliary content that the task downloads.
- [AVAssetDownloadContentConfiguration](avassetdownloadcontentconfiguration.md): A configuration object that contains variant qualifiers and media options.
- [optimizesAuxiliaryContentConfigurations](avassetdownloadconfiguration/optimizesauxiliarycontentconfigurations.md): A Boolean value that indicates whether the task optimizes auxiliary content selection.
- [downloadsInterstitialAssets](avassetdownloadconfiguration/downloadsinterstitialassets.md): Download interstitial assets as listed in the index file. False by default.
- [setInterstitialMediaSelectionCriteria:forMediaCharacteristic:](avassetdownloadconfiguration/setinterstitialmediaselectioncriteria%28__formediacharacteristic_%29.md): Sets media selection on interstitials for this asset

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Creating download tasks

- [assetDownloadTaskWithConfiguration:](avassetdownloadurlsession/makeassetdownloadtask%28downloadconfiguration_%29.md): Creates a download task that uses the specified configuration.
- [assetDownloadTaskWithURLAsset:assetTitle:assetArtworkData:options:](avassetdownloadurlsession/makeassetdownloadtask%28asset_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset.
- [aggregateAssetDownloadTaskWithURLAsset:mediaSelections:assetTitle:assetArtworkData:options:](avassetdownloadurlsession/aggregateassetdownloadtask%28with_mediaselections_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset and media selections.
- [assetDownloadTaskWithURLAsset:destinationURL:options:](avassetdownloadurlsession/makeassetdownloadtask%28asset_destinationurl_options_%29.md): Deprecated. Creates a download task to download the asset to the indicated location.
