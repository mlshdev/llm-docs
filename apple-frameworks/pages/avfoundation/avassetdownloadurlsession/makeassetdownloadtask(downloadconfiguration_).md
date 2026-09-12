> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadurlsession/makeassetdownloadtask(downloadconfiguration:)](https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession/makeassetdownloadtask(downloadconfiguration:))

# makeAssetDownloadTask(downloadConfiguration:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a download task that uses the specified configuration.

## Declaration

```swift
func makeAssetDownloadTask(downloadConfiguration: AVAssetDownloadConfiguration) -> AVAssetDownloadTask
```

## Parameters

- `downloadConfiguration`: The configuration that the task uses.

<a id="return-value"></a>

## Return Value

A new download task.

<a id="Discussion"></a>

## Discussion

This method raises an exception if you call it on an invalidated session.

## See Also

### Creating download tasks

- [AVAssetDownloadConfiguration](../avassetdownloadconfiguration.md): An object that provides the configuration for a download task.
- [makeAssetDownloadTask(asset:assetTitle:assetArtworkData:options:)](makeassetdownloadtask%28asset_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset.
- [aggregateAssetDownloadTask(with:mediaSelections:assetTitle:assetArtworkData:options:)](aggregateassetdownloadtask%28with_mediaselections_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset and media selections.
- [makeAssetDownloadTask(asset:destinationURL:options:)](makeassetdownloadtask%28asset_destinationurl_options_%29.md): Deprecated. Creates a download task to download the asset to the indicated location.

# assetDownloadTaskWithConfiguration: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a download task that uses the specified configuration.

## Declaration

```objectivec
- (AVAssetDownloadTask *) assetDownloadTaskWithConfiguration:(AVAssetDownloadConfiguration *) downloadConfiguration;
```

## Parameters

- `downloadConfiguration`: The configuration that the task uses.

<a id="return-value"></a>

## Return Value

A new download task.

<a id="Discussion"></a>

## Discussion

This method raises an exception if you call it on an invalidated session.

## See Also

### Creating download tasks

- [AVAssetDownloadConfiguration](../avassetdownloadconfiguration.md): An object that provides the configuration for a download task.
- [assetDownloadTaskWithURLAsset:assetTitle:assetArtworkData:options:](makeassetdownloadtask%28asset_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset.
- [aggregateAssetDownloadTaskWithURLAsset:mediaSelections:assetTitle:assetArtworkData:options:](aggregateassetdownloadtask%28with_mediaselections_assettitle_assetartworkdata_options_%29.md): Deprecated. Creates a download task to download the asset and media selections.
- [assetDownloadTaskWithURLAsset:destinationURL:options:](makeassetdownloadtask%28asset_destinationurl_options_%29.md): Deprecated. Creates a download task to download the asset to the indicated location.
