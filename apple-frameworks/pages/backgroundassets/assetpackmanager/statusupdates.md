> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/statusupdates](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/statusupdates)

# statusUpdates

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An asynchronous sequence of download-status updates for all asset packs.

## Declaration

```swift
final let statusUpdates: some Sendable & AsyncSequence<AssetPackManager.DownloadStatusUpdate, Never>
```

<a id="discussion"></a>

## Discussion

The sequence never finishes.

## See Also

### Tracking downloads

- [statusUpdates(forAssetPackWithID:)](statusupdates%28forassetpackwithid_%29.md): Returns an asynchronous sequence of download-status updates for the asset pack with the specified ID.
- [AssetPackManager.DownloadStatusUpdate](downloadstatusupdate.md): Statuses of an asset-pack download.
