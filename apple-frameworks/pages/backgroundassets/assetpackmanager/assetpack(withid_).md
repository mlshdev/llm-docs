> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/assetpack(withid:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/assetpack(withid:))

# assetPack(withID:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · tvOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

Returns the asset pack with the given ID.

> Call assetPack(withID:) on the manager’s manifest property’s value.

## Declaration

```swift
func assetPack(withID id: String) async throws -> AssetPack
```

## Parameters

- `id`: The asset pack’s ID.

<a id="return-value"></a>

## Return Value

The asset pack.

## Mentioned In

- [Downloading Apple-hosted asset packs](../downloading-apple-hosted-asset-packs.md)

<a id="discussion"></a>

## Discussion

This method may attempt to get the latest asset-pack information from the server if the system hasn’t cached that information locally. To force the system to get the latest information from the server unconditionally, call [checkForUpdates()](checkforupdates%28%29.md).

> **Throws**

> [ManagedBackgroundAssetsError.assetPackNotFound(withID:)](../managedbackgroundassetserror/assetpacknotfound%28withid_%29.md) when no asset pack with the given ID is found.

## See Also

### Accessing asset packs

- [manifest](manifest.md): The manifest of asset packs that are available to download.
- [AssetPackManifest](../assetpackmanifest.md): A manifest of asset packs that are available to download.
- [allAssetPacks](allassetpacks.md): Deprecated. The asset packs that are available to download.
