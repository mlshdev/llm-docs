> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanifest/localizedassetpacks(for:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanifest/localizedassetpacks(for:))

# localizedAssetPacks(for:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the subset of asset packs in this manifest that are available to download and that best match the specified language.

## Declaration

```swift
func localizedAssetPacks(for language: Locale.Language) -> Set<AssetPack>
```

## Parameters

- `language`: The language.

<a id="return-value"></a>

## Return Value

The localized asset packs.

## Mentioned In

- [Reducing download and storage demands with localized asset packs](../reducing-download-and-storage-demands-with-localized-asset-packs.md)

<a id="discussion"></a>

## Discussion

Depending on which languages are available, the returned asset packs’ respective languages may not exactly match the specified language.

## See Also

### Getting localized asset packs

- [localizedAssetPacks](localizedassetpacks.md): The subset of asset packs in this manifest that best match the current preferred languages.
