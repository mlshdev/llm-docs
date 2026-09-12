> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadurlsession/makeassetdownloadtask(asset:assettitle:assetartworkdata:options:)](https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession/makeassetdownloadtask(asset:assettitle:assetartworkdata:options:))

# makeAssetDownloadTask(asset:assetTitle:assetArtworkData:options:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a download task to download the asset.

> Use assetDownloadTaskWithConfiguration: instead

## Declaration

```swift
func makeAssetDownloadTask(asset URLAsset: AVURLAsset, assetTitle title: String, assetArtworkData artworkData: Data?, options: [String : Any]? = nil) -> AVAssetDownloadTask?
```

## Parameters

- `URLAsset`: The HTTP Live Streaming asset to download.
- `title`: A human readable title for this asset in the user’s preferred language. The system displays this value in the usage pane of the Settings app.
- `artworkData`: Optional artwork data for this asset. The system displays the image in the usage pane of the Settings app.
- `options`: Configures custom behavior on the download task. You must provide an options dictionary to download nondefault media selections for HLS assets.

<a id="return-value"></a>

## Return Value

A new download task.

<a id="Discussion"></a>

## Discussion

This method may return `nil` if you call it on an invalidated session.

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
- [aggregateAssetDownloadTask(with:mediaSelections:assetTitle:assetArtworkData:options:)](aggregateassetdownloadtask%28with_mediaselections_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset and media selections.
- [makeAssetDownloadTask(asset:destinationURL:options:)](makeassetdownloadtask%28asset_destinationurl_options_%29.md): Deprecated. Creates a download task to download the asset to the indicated location.

# assetDownloadTaskWithURLAsset:assetTitle:assetArtworkData:options: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a download task to download the asset.

> Use assetDownloadTaskWithConfiguration: instead

## Declaration

```objectivec
- (AVAssetDownloadTask *) assetDownloadTaskWithURLAsset:(AVURLAsset *) URLAsset assetTitle:(NSString *) title assetArtworkData:(NSData *) artworkData options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `URLAsset`: The HTTP Live Streaming asset to download.
- `title`: A human readable title for this asset in the user’s preferred language. The system displays this value in the usage pane of the Settings app.
- `artworkData`: Optional artwork data for this asset. The system displays the image in the usage pane of the Settings app.
- `options`: Configures custom behavior on the download task. You must provide an options dictionary to download nondefault media selections for HLS assets.

<a id="return-value"></a>

## Return Value

A new download task.

<a id="Discussion"></a>

## Discussion

This method may return `nil` if you call it on an invalidated session.

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
- [aggregateAssetDownloadTaskWithURLAsset:mediaSelections:assetTitle:assetArtworkData:options:](aggregateassetdownloadtask%28with_mediaselections_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset and media selections.
- [assetDownloadTaskWithURLAsset:destinationURL:options:](makeassetdownloadtask%28asset_destinationurl_options_%29.md): Deprecated. Creates a download task to download the asset to the indicated location.
