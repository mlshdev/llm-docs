> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/checkforupdates()](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/checkforupdates())

# checkForUpdates()

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Gets the latest asset-pack information from the server, updates outdated asset packs, and removes obsolete asset packs.

## Declaration

```swift
@discardableResult func checkForUpdates() async throws -> (updatingIDs: Set<String>, removedIDs: Set<String>)
```

<a id="return-value"></a>

## Return Value

A 2-tuple with the set of IDs of asset packs that are being updated and the set of IDs of asset packs that were removed as a result of the check for updates. Neither updates nor removals that weren’t triggered by the check for updates are taken into account.

<a id="discussion"></a>

## Discussion

This method waits for any downloads that it schedules to be registered with the download manager, but it doesn’t wait for those downloads to begin or to finish. If you want to monitor download progress, then you should await status updates on [statusUpdates](statusupdates.md) or [statusUpdates(forAssetPackWithID:)](statusupdates%28forassetpackwithid_%29.md).

## See Also

### Managing asset packs

- [ensureLocalAvailability(of:requireLatestVersion:)](ensurelocalavailability%28of_requirelatestversion_%29.md): Ensures that an asset pack is available locally, performing a download if necessary.
- [ensureLocalAvailability(of:requireLatestVersions:)](ensurelocalavailability%28of_requirelatestversions_%29.md): Ensures the specified asset packs are available locally, performing a batch download if necessary.
- [assetPackIsAvailableLocally(withID:)](assetpackisavailablelocally%28withid_%29.md): Checks whether an asset pack is available locally.
- [status(relativeTo:)](status%28relativeto_%29.md): Checks the current status relative to a particular asset pack.
- [localStatus(ofAssetPackWithID:)](localstatus%28ofassetpackwithid_%29.md): Checks an asset pack’s local status.
- [AssetPack.Status](../assetpack/status.md): The status of an asset pack.
- [remove(assetPackWithID:)](remove%28assetpackwithid_%29.md): Removes the specified asset pack from the device.
- [status(ofAssetPackWithID:)](status%28ofassetpackwithid_%29.md): Deprecated. Checks an asset pack’s status.
- [ensureLocalAvailability(of:)](ensurelocalavailability%28of_%29.md): Deprecated. Ensures that the specified asset pack is available locally, performing a download if necessary.
