> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/manifest](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/manifest)

# manifest

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The manifest of asset packs that are available to download.

## Declaration

```swift
var manifest: AssetPackManifest { get async throws }
```

## Mentioned In

- [Reducing download and storage demands with localized asset packs](../reducing-download-and-storage-demands-with-localized-asset-packs.md)

## See Also

### Accessing asset packs

- [AssetPackManifest](../assetpackmanifest.md): A manifest of asset packs that are available to download.
- [allAssetPacks](allassetpacks.md): Deprecated. The asset packs that are available to download.
- [assetPack(withID:)](assetpack%28withid_%29.md): Deprecated. Returns the asset pack with the given ID.
