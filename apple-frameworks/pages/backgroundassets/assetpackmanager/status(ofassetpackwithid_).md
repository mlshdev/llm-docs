> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/status(ofassetpackwithid:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/status(ofassetpackwithid:))

# status(ofAssetPackWithID:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ (deprecated in 26.4) · iPadOS 26.0+ (deprecated in 26.4) · Mac Catalyst 26.0+ (deprecated in 26.4) · macOS 26.0+ (deprecated in 26.4) · tvOS 26.0+ (deprecated in 26.4) · visionOS 26.0+ (deprecated in 26.4)

Checks an asset pack’s status.

> Use status(relativeTo:) instead.

## Declaration

```swift
func status(ofAssetPackWithID assetPackID: String) async throws -> AssetPack.Status
```

## Parameters

- `assetPackID`: The asset pack’s ID.

<a id="return-value"></a>

## Return Value

The asset pack’s status.

<a id="discussion"></a>

## Discussion

This method attempts to get the latest asset-pack information from the server. It doesn’t automatically trigger any downloads, updates, or removals.

> **Throws**

> [ManagedBackgroundAssetsError.assetPackNotFound(withID:)](../managedbackgroundassetserror/assetpacknotfound%28withid_%29.md) when no asset pack with the given ID is found.

## See Also

### Managing asset packs

- [checkForUpdates()](checkforupdates%28%29.md): Gets the latest asset-pack information from the server, updates outdated asset packs, and removes obsolete asset packs.
- [ensureLocalAvailability(of:requireLatestVersion:)](ensurelocalavailability%28of_requirelatestversion_%29.md): Ensures that an asset pack is available locally, performing a download if necessary.
- [ensureLocalAvailability(of:requireLatestVersions:)](ensurelocalavailability%28of_requirelatestversions_%29.md): Ensures the specified asset packs are available locally, performing a batch download if necessary.
- [assetPackIsAvailableLocally(withID:)](assetpackisavailablelocally%28withid_%29.md): Checks whether an asset pack is available locally.
- [status(relativeTo:)](status%28relativeto_%29.md): Checks the current status relative to a particular asset pack.
- [localStatus(ofAssetPackWithID:)](localstatus%28ofassetpackwithid_%29.md): Checks an asset pack’s local status.
- [AssetPack.Status](../assetpack/status.md): The status of an asset pack.
- [remove(assetPackWithID:)](remove%28assetpackwithid_%29.md): Removes the specified asset pack from the device.
- [ensureLocalAvailability(of:)](ensurelocalavailability%28of_%29.md): Deprecated. Ensures that the specified asset pack is available locally, performing a download if necessary.
