> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpackmanager/assetpackisavailablelocallywithidentifier:](https://developer.apple.com/documentation/backgroundassets/baassetpackmanager/assetpackisavailablelocallywithidentifier:)

# assetPackIsAvailableLocallyWithIdentifier:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+

Checks whether the asset pack with the specified identifier is available locally.

## Declaration

```objectivec
- (BOOL) assetPackIsAvailableLocallyWithIdentifier:(NSString *) assetPackIdentifier;
```

## Parameters

- `assetPackIdentifier`: The asset pack’s identifier.

<a id="return-value"></a>

## Return Value

Whether the asset pack is available locally.

## See Also

### Managing asset packs

- [checkForUpdatesWithCompletionHandler:](checkforupdateswithcompletionhandler_.md): Gets the latest asset-pack information from the server, updates outdated asset packs, and removes obsolete asset packs.
- [ensureLocalAvailabilityOfAssetPack:completionHandler:](ensurelocalavailabilityofassetpack_completionhandler_.md): Ensures that the specified asset pack is available locally, performing a download if necessary.
- [ensureLocalAvailabilityOfAssetPacks:completionHandler:](ensurelocalavailabilityofassetpacks_completionhandler_.md): Ensures that the specified asset packs are available locally.
- [ensureLocalAvailabilityOfAssetPack:requireLatestVersion:completionHandler:](ensurelocalavailabilityofassetpack_requirelatestversion_completionhandler_.md): Ensures that the specified asset pack is available locally, performing a download if necessary.
- [ensureLocalAvailabilityOfAssetPacks:requireLatestVersions:completionHandler:](ensurelocalavailabilityofassetpacks_requirelatestversions_completionhandler_.md): Ensures that the specified asset packs are available locally, performing a batch download if necessary.
- [getStatusRelativeToAssetPack:completionHandler:](getstatusrelativetoassetpack_completionhandler_.md): Gets the current status relative to a particular asset pack.
- [getLocalStatusOfAssetPackWithIdentifier:completionHandler:](getlocalstatusofassetpackwithidentifier_completionhandler_.md): Gets an asset pack’s local status.
- [removeAssetPackWithIdentifier:completionHandler:](removeassetpackwithidentifier_completionhandler_.md): Removes the specified asset pack from the device.
- [getStatusOfAssetPackWithIdentifier:completionHandler:](getstatusofassetpackwithidentifier_completionhandler_.md): Deprecated. Gets an asset pack’s status.
