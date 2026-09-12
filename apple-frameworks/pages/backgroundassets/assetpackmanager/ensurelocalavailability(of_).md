> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/ensurelocalavailability(of:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/ensurelocalavailability(of:))

# ensureLocalAvailability(of:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ (deprecated in 26.4) · iPadOS 26.0+ (deprecated in 26.4) · Mac Catalyst 26.0+ (deprecated in 26.4) · macOS 26.0+ (deprecated in 26.4) · tvOS 26.0+ (deprecated in 26.4) · visionOS 26.0+ (deprecated in 26.4)

Ensures that the specified asset pack is available locally, performing a download if necessary.

## Declaration

```swift
func ensureLocalAvailability(of assetPack: AssetPack) async throws
```

## Parameters

- `assetPack`: The asset pack the local availability of which to ensure.

## Mentioned In

- [Downloading Apple-hosted asset packs](../downloading-apple-hosted-asset-packs.md)

<a id="discussion"></a>

## Discussion

This method checks whether the asset pack is currently downloaded. If it isn’t, then the system schedules it to be downloaded and waits for the download to complete. It’s guaranteed that the requested asset pack will be available locally once this method returns without throwing. If the method throws, then the asset pack *isn’t* guaranteed to be available locally. You can optionally monitor download progress by awaiting status updates from [statusUpdates](statusupdates.md) or [statusUpdates(forAssetPackWithID:)](statusupdates%28forassetpackwithid_%29.md) in a separate task.

> **Throws**

> When the asset pack can’t be downloaded.

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
- [status(ofAssetPackWithID:)](status%28ofassetpackwithid_%29.md): Deprecated. Checks an asset pack’s status.
