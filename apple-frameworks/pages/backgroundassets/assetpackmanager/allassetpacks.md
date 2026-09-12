> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/allassetpacks](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/allassetpacks)

# allAssetPacks

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · tvOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

The asset packs that are available to download.

> Use the manager’s manifest property’s value’s assetPacks property.

## Declaration

```swift
var allAssetPacks: Set<AssetPack> { get async throws }
```

<a id="discussion"></a>

## Discussion

Accessing this property may cause an attempt to get the latest asset-pack information from the server.

## See Also

### Accessing asset packs

- [manifest](manifest.md): The manifest of asset packs that are available to download.
- [AssetPackManifest](../assetpackmanifest.md): A manifest of asset packs that are available to download.
- [assetPack(withID:)](assetpack%28withid_%29.md): Deprecated. Returns the asset pack with the given ID.
