> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/ensurelocalavailability(of:requirelatestversion:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/ensurelocalavailability(of:requirelatestversion:))

# ensureLocalAvailability(of:requireLatestVersion:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+

Ensures that an asset pack is available locally, performing a download if necessary.

## Declaration

```swift
func ensureLocalAvailability(of assetPack: AssetPack, requireLatestVersion shouldUpdate: Bool = false) async throws
```

## Parameters

- `assetPack`: The asset pack the local availability of which to ensure.
- `shouldUpdate`: Whether to require that the latest version be available locally. When `true` is passed to this parameter, the method will wait for the update (if there indeed is one available) to be downloaded before returning. When `false` is passed, the method won’t check for updates and won’t attempt to download any.

## Mentioned In

- [Reducing download and storage demands with localized asset packs](../reducing-download-and-storage-demands-with-localized-asset-packs.md)

<a id="discussion"></a>

## Discussion

This method checks whether the asset pack is currently downloaded. If it isn’t, then the system schedules it to be downloaded and waits for the download to finish. If the method returns without throwing, the framework guarantees that the requested asset pack is now available locally. If the method throws, then the asset pack *isn’t* guaranteed to be available locally. You can optionally monitor download progress by awaiting status updates from [statusUpdates](statusupdates.md) or [statusUpdates(forAssetPackWithID:)](statusupdates%28forassetpackwithid_%29.md) in a separate task.

To download multiple asset packs at the same time, use [ensureLocalAvailability(of:requireLatestVersions:)](ensurelocalavailability%28of_requirelatestversions_%29.md).

> **Throws**

> When the system can’t ensure the asset pack’s local availability.

## See Also

### Managing asset packs

- [checkForUpdates()](checkforupdates%28%29.md): Gets the latest asset-pack information from the server, updates outdated asset packs, and removes obsolete asset packs.
- [ensureLocalAvailability(of:requireLatestVersions:)](ensurelocalavailability%28of_requirelatestversions_%29.md): Ensures the specified asset packs are available locally, performing a batch download if necessary.
- [assetPackIsAvailableLocally(withID:)](assetpackisavailablelocally%28withid_%29.md): Checks whether an asset pack is available locally.
- [status(relativeTo:)](status%28relativeto_%29.md): Checks the current status relative to a particular asset pack.
- [localStatus(ofAssetPackWithID:)](localstatus%28ofassetpackwithid_%29.md): Checks an asset pack’s local status.
- [AssetPack.Status](../assetpack/status.md): The status of an asset pack.
- [remove(assetPackWithID:)](remove%28assetpackwithid_%29.md): Removes the specified asset pack from the device.
- [status(ofAssetPackWithID:)](status%28ofassetpackwithid_%29.md): Deprecated. Checks an asset pack’s status.
- [ensureLocalAvailability(of:)](ensurelocalavailability%28of_%29.md): Deprecated. Ensures that the specified asset pack is available locally, performing a download if necessary.
