> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/downloadstatusupdate](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/downloadstatusupdate)

# AssetPackManager.DownloadStatusUpdate

**Framework:** Background Assets  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Statuses of an asset-pack download.

## Declaration

```swift
enum DownloadStatusUpdate
```

<a id="overview"></a>

## Overview

An asset pack is available locally only after a [AssetPackManager.DownloadStatusUpdate.finished(\_:)](downloadstatusupdate/finished%28__%29.md) status update is posted.

## Topics

### Tracking downloads

- [AssetPackManager.DownloadStatusUpdate.began(\_:)](downloadstatusupdate/began%28__%29.md): A status update that indicates that the download began or resumed after being paused.
- [AssetPackManager.DownloadStatusUpdate.downloading(\_:\_:)](downloadstatusupdate/downloading%28____%29.md): A status update that indicates that the download is in progress.
- [AssetPackManager.DownloadStatusUpdate.paused(\_:)](downloadstatusupdate/paused%28__%29.md): A status update that indicates that the download paused.
- [AssetPackManager.DownloadStatusUpdate.finished(\_:)](downloadstatusupdate/finished%28__%29.md): A status update that indicates that the download completed and that the asset pack is available locally.
- [AssetPackManager.DownloadStatusUpdate.failed(\_:\_:)](downloadstatusupdate/failed%28____%29.md): A status update that indicates that the download failed.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tracking downloads

- [statusUpdates](statusupdates.md): An asynchronous sequence of download-status updates for all asset packs.
- [statusUpdates(forAssetPackWithID:)](statusupdates%28forassetpackwithid_%29.md): Returns an asynchronous sequence of download-status updates for the asset pack with the specified ID.
