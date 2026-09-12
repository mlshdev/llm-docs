> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/ensurelocalavailability(of:requirelatestversions:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/ensurelocalavailability(of:requirelatestversions:))

# ensureLocalAvailability(of:requireLatestVersions:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Ensures the specified asset packs are available locally, performing a batch download if necessary.

## Declaration

```swift
func ensureLocalAvailability(of assetPacks: Set<AssetPack>, requireLatestVersions shouldUpdate: Bool = false) async throws
```

## Parameters

- `assetPacks`: The asset packs the local availability of which to ensure.
- `shouldUpdate`: Whether to require that the respective latest versions be available locally. When `true` is passed to this parameter, the method will wait for the updates (if there indeed are any available) to be downloaded before returning. When `false` is passed, the method won’t check for updates and won’t attempt to download any.

## Mentioned In

- [Reducing download and storage demands with localized asset packs](../reducing-download-and-storage-demands-with-localized-asset-packs.md)

<a id="discussion"></a>

## Discussion

This method checks whether the asset packs are currently downloaded. If any aren’t, then the system schedules them to be downloaded and waits for all of the downloads to finish. The framework guarantees that the requested asset packs are available locally after this method returns without throwing. If the method throws, then the asset packs *aren’t* all guaranteed to be available locally, though some might be; inspect the thrown error for more details. You can optionally monitor download progress by awaiting status updates from [statusUpdates](statusupdates.md) or [statusUpdates(forAssetPackWithID:)](statusupdates%28forassetpackwithid_%29.md) in a separate task.

> **Throws**

> When the system can’t ensure one or more asset packs’ local availability. When the thrown error is an instance of [AssetPackManager.LocalAvailabilityError](localavailabilityerror.md), it provides information about asset packs for which the system successfully ensured local availability and those for which the system couldn’t ensure local availability, with an underlying error for each failure.

## See Also

### Managing asset packs

- [checkForUpdates()](checkforupdates%28%29.md): Gets the latest asset-pack information from the server, updates outdated asset packs, and removes obsolete asset packs.
- [ensureLocalAvailability(of:requireLatestVersion:)](ensurelocalavailability%28of_requirelatestversion_%29.md): Ensures that an asset pack is available locally, performing a download if necessary.
- [assetPackIsAvailableLocally(withID:)](assetpackisavailablelocally%28withid_%29.md): Checks whether an asset pack is available locally.
- [status(relativeTo:)](status%28relativeto_%29.md): Checks the current status relative to a particular asset pack.
- [localStatus(ofAssetPackWithID:)](localstatus%28ofassetpackwithid_%29.md): Checks an asset pack’s local status.
- [AssetPack.Status](../assetpack/status.md): The status of an asset pack.
- [remove(assetPackWithID:)](remove%28assetpackwithid_%29.md): Removes the specified asset pack from the device.
- [status(ofAssetPackWithID:)](status%28ofassetpackwithid_%29.md): Deprecated. Checks an asset pack’s status.
- [ensureLocalAvailability(of:)](ensurelocalavailability%28of_%29.md): Deprecated. Ensures that the specified asset pack is available locally, performing a download if necessary.
