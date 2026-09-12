> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/status(relativeto:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/status(relativeto:))

# status(relativeTo:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+

Checks the current status relative to a particular asset pack.

## Declaration

```swift
func status(relativeTo assetPack: AssetPack) async throws -> AssetPack.Status
```

## Parameters

- `assetPack`: The asset pack.

<a id="return-value"></a>

## Return Value

The current status relative to the asset pack.

<a id="discussion"></a>

## Discussion

This method checks whether any version of the specified asset pack is currently downloaded. If one is, then it determines the version relationship between the downloaded asset pack and the specified asset pack. If they have different version numbers, then the returned status value will contain [outOfDate](../assetpack/status/outofdate.md). The returned status value will contain [updateAvailable](../assetpack/status/updateavailable.md) only if the relevant asset pack on the server hasn’t been further updated since the initialization of the provided [AssetPack](../assetpack.md) instance.

For example, consider the following sequence of events, assuming that version 1 of the relevant asset pack is already available locally:

1. Your app calls [assetPack(withID:)](../assetpackmanifest/assetpack%28withid_%29.md) on the [AssetPackManifest](../assetpackmanifest.md) instance that [manifest](manifest.md) returns to obtain an [AssetPack](../assetpack.md) instance.
2. The asset pack is updated to version 2 on the server.
3. Your app calls this method, passing the [AssetPack](../assetpack.md) instance from step 1.

In this case, the returned status value will indicate that the downloaded asset pack is up to date. Generally, you shouldn’t need to handle this type of situation explicitly because the system automatically polls for updates periodically in the background.

This method doesn’t automatically trigger any downloads, updates, or removals.

## See Also

### Managing asset packs

- [checkForUpdates()](checkforupdates%28%29.md): Gets the latest asset-pack information from the server, updates outdated asset packs, and removes obsolete asset packs.
- [ensureLocalAvailability(of:requireLatestVersion:)](ensurelocalavailability%28of_requirelatestversion_%29.md): Ensures that an asset pack is available locally, performing a download if necessary.
- [ensureLocalAvailability(of:requireLatestVersions:)](ensurelocalavailability%28of_requirelatestversions_%29.md): Ensures the specified asset packs are available locally, performing a batch download if necessary.
- [assetPackIsAvailableLocally(withID:)](assetpackisavailablelocally%28withid_%29.md): Checks whether an asset pack is available locally.
- [localStatus(ofAssetPackWithID:)](localstatus%28ofassetpackwithid_%29.md): Checks an asset pack’s local status.
- [AssetPack.Status](../assetpack/status.md): The status of an asset pack.
- [remove(assetPackWithID:)](remove%28assetpackwithid_%29.md): Removes the specified asset pack from the device.
- [status(ofAssetPackWithID:)](status%28ofassetpackwithid_%29.md): Deprecated. Checks an asset pack’s status.
- [ensureLocalAvailability(of:)](ensurelocalavailability%28of_%29.md): Deprecated. Ensures that the specified asset pack is available locally, performing a download if necessary.
