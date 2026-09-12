> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/statusupdates(forassetpackwithid:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/statusupdates(forassetpackwithid:))

# statusUpdates(forAssetPackWithID:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns an asynchronous sequence of download-status updates for the asset pack with the specified ID.

## Declaration

```swift
nonisolated func statusUpdates(forAssetPackWithID assetPackID: String) -> some Sendable & AsyncSequence<AssetPackManager.DownloadStatusUpdate, Never>

```

## Parameters

- `assetPackID`: The asset pack’s ID.

<a id="return-value"></a>

## Return Value

An asynchronous sequence of download-status updates.

## Mentioned In

- [Downloading Apple-hosted asset packs](../downloading-apple-hosted-asset-packs.md)
- [Reducing download and storage demands with localized asset packs](../reducing-download-and-storage-demands-with-localized-asset-packs.md)

<a id="discussion"></a>

## Discussion

The sequence finishes after yielding [AssetPackManager.DownloadStatusUpdate.finished(\_:)](downloadstatusupdate/finished%28__%29.md) or [AssetPackManager.DownloadStatusUpdate.failed(\_:\_:)](downloadstatusupdate/failed%28____%29.md).

## See Also

### Tracking downloads

- [statusUpdates](statusupdates.md): An asynchronous sequence of download-status updates for all asset packs.
- [AssetPackManager.DownloadStatusUpdate](downloadstatusupdate.md): Statuses of an asset-pack download.
