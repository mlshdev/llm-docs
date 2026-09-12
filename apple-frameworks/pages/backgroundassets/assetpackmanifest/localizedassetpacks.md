> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanifest/localizedassetpacks](https://developer.apple.com/documentation/backgroundassets/assetpackmanifest/localizedassetpacks)

# localizedAssetPacks

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The subset of asset packs in this manifest that best match the current preferred languages.

## Declaration

```swift
var localizedAssetPacks: Set<AssetPack> { get }
```

## Mentioned In

- [Reducing download and storage demands with localized asset packs](../reducing-download-and-storage-demands-with-localized-asset-packs.md)

## See Also

### Getting localized asset packs

- [localizedAssetPacks(for:)](localizedassetpacks%28for_%29.md): Returns the subset of asset packs in this manifest that are available to download and that best match the specified language.
