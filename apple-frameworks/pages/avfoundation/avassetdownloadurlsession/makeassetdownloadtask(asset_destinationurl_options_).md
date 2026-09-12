> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadurlsession/makeassetdownloadtask(asset:destinationurl:options:)](https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession/makeassetdownloadtask(asset:destinationurl:options:))

# makeAssetDownloadTask(asset:destinationURL:options:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates a download task to download the asset to the indicated location.

> Use [makeAssetDownloadTask(asset:assetTitle:assetArtworkData:options:)](makeassetdownloadtask%28asset_assettitle_assetartworkdata_options_%29.md) instead.

## Declaration

```swift
func makeAssetDownloadTask(asset URLAsset: AVURLAsset, destinationURL: URL, options: [String : Any]? = nil) -> AVAssetDownloadTask?
```

## Parameters

- `URLAsset`: The asset to download to the local device.
- `destinationURL`: The local file URL to download the asset to.
- `options`: Configures non-default behavior for the download task. To download nondefault media selections, you must indicate download options.

<a id="return-value"></a>

## Return Value

A new download task.

## Topics

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredMediaBitrateKey](../avassetdownloadtaskminimumrequiredmediabitratekey.md): Deprecated. A key that indicates the minimum bit rate of the variant to download.
- [AVAssetDownloadTaskMinimumRequiredPresentationSizeKey](../avassetdownloadtaskminimumrequiredpresentationsizekey.md): Deprecated. A key that indicates the minimum presentation size of the variant to download.
- [AVAssetDownloadTaskMediaSelectionKey](../avassetdownloadtaskmediaselectionkey.md): Deprecated. A key that indicates which media selection to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](../avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersHDRKey](../avassetdownloadtaskprefershdrkey.md): Deprecated. A key that indicates whether the task downloads HDR instead of SDR video, when available.
- [AVAssetDownloadTaskPrefersLosslessAudioKey](../avassetdownloadtaskpreferslosslessaudiokey.md): Deprecated. A key that indicates whether the task downloads media selections in lossless audio format, when available.

## See Also

### Creating download tasks

- [makeAssetDownloadTask(downloadConfiguration:)](makeassetdownloadtask%28downloadconfiguration_%29.md): Creates a download task that uses the specified configuration.
- [AVAssetDownloadConfiguration](../avassetdownloadconfiguration.md): An object that provides the configuration for a download task.
- [makeAssetDownloadTask(asset:assetTitle:assetArtworkData:options:)](makeassetdownloadtask%28asset_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset.
- [aggregateAssetDownloadTask(with:mediaSelections:assetTitle:assetArtworkData:options:)](aggregateassetdownloadtask%28with_mediaselections_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset and media selections.

# assetDownloadTaskWithURLAsset:destinationURL:options: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates a download task to download the asset to the indicated location.

> Use [assetDownloadTaskWithURLAsset:assetTitle:assetArtworkData:options:](makeassetdownloadtask%28asset_assettitle_assetartworkdata_options_%29.md) instead.

## Declaration

```objectivec
- (AVAssetDownloadTask *) assetDownloadTaskWithURLAsset:(AVURLAsset *) URLAsset destinationURL:(NSURL *) destinationURL options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `URLAsset`: The asset to download to the local device.
- `destinationURL`: The local file URL to download the asset to.
- `options`: Configures non-default behavior for the download task. To download nondefault media selections, you must indicate download options.

<a id="return-value"></a>

## Return Value

A new download task.

## Topics

### Download option keys

- [AVAssetDownloadTaskMinimumRequiredMediaBitrateKey](../avassetdownloadtaskminimumrequiredmediabitratekey.md): Deprecated. A key that indicates the minimum bit rate of the variant to download.
- [AVAssetDownloadTaskMinimumRequiredPresentationSizeKey](../avassetdownloadtaskminimumrequiredpresentationsizekey.md): Deprecated. A key that indicates the minimum presentation size of the variant to download.
- [AVAssetDownloadTaskMediaSelectionKey](../avassetdownloadtaskmediaselectionkey.md): Deprecated. A key that indicates which media selection to download.
- [AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey](../avassetdownloadtaskmediaselectionprefersmultichannelkey.md): Deprecated. A key that indicates whether the task downloads media selections with support for multichannel playback, when available.
- [AVAssetDownloadTaskPrefersHDRKey](../avassetdownloadtaskprefershdrkey.md): Deprecated. A key that indicates whether the task downloads HDR instead of SDR video, when available.
- [AVAssetDownloadTaskPrefersLosslessAudioKey](../avassetdownloadtaskpreferslosslessaudiokey.md): Deprecated. A key that indicates whether the task downloads media selections in lossless audio format, when available.

## See Also

### Creating download tasks

- [assetDownloadTaskWithConfiguration:](makeassetdownloadtask%28downloadconfiguration_%29.md): Creates a download task that uses the specified configuration.
- [AVAssetDownloadConfiguration](../avassetdownloadconfiguration.md): An object that provides the configuration for a download task.
- [assetDownloadTaskWithURLAsset:assetTitle:assetArtworkData:options:](makeassetdownloadtask%28asset_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset.
- [aggregateAssetDownloadTaskWithURLAsset:mediaSelections:assetTitle:assetArtworkData:options:](aggregateassetdownloadtask%28with_mediaselections_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset and media selections.
