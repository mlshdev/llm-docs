> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanifest](https://developer.apple.com/documentation/backgroundassets/assetpackmanifest)

# AssetPackManifest

**Framework:** Background Assets  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A manifest of asset packs that are available to download.

## Declaration

```swift
struct AssetPackManifest
```

## Mentioned In

- [Reducing download and storage demands with localized asset packs](reducing-download-and-storage-demands-with-localized-asset-packs.md)

## Topics

### Creating an asset pack manifest

- [init(contentsOf:appGroupID:)](assetpackmanifest/init%28contentsof_appgroupid_%29.md): Creates a manifest in memory given a URL to the manifest’s representation as a JSON file on disk.
- [init(from:appGroupID:)](assetpackmanifest/init%28from_appgroupid_%29.md): Creates a manifest in memory given JSON-encoded data.

### Accessing downloads

- [allDownloads(for:)](assetpackmanifest/alldownloads%28for_%29.md): Creates download objects for every applicable asset pack in this manifest, which can be scheduled with the download manager.

### Getting asset packs

- [assetPacks](assetpackmanifest/assetpacks.md): The asset packs in this manifest that are available to download.
- [assetPack(withID:)](assetpackmanifest/assetpack%28withid_%29.md): Returns the asset pack in this manifest with the given ID.

### Getting localized asset packs

- [localizedAssetPacks](assetpackmanifest/localizedassetpacks.md): The subset of asset packs in this manifest that best match the current preferred languages.
- [localizedAssetPacks(for:)](assetpackmanifest/localizedassetpacks%28for_%29.md): Returns the subset of asset packs in this manifest that are available to download and that best match the specified language.

### Inspecting asset pack localization

- [primaryLanguage](assetpackmanifest/primarylanguage.md): The app’s primary language as configured in App Store Connect.
- [availableLanguages](assetpackmanifest/availablelanguages.md): The languages for which asset packs in this manifest are localized.
- [resolvedLanguage](assetpackmanifest/resolvedlanguage.md): The language that best matches current preferences and for which a localized asset pack is available locally.

### Supporting types

- [AssetPackManifest.DecodingConfiguration](assetpackmanifest/decodingconfiguration.md): A structure that includes information for decoding an asset-pack manifest.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DecodableWithConfiguration](../foundation/decodablewithconfiguration.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managed asset packs

- [AssetPack](assetpack.md): An archive of assets that the system downloads together.
- [AssetPackManager](assetpackmanager.md): An actor that manages asset packs.
- [ManagedDownloaderExtension](manageddownloaderextension.md): An app extension that uses the system implementation to schedule asset-pack downloads automatically.
- [BAAppGroupID](../bundleresources/information-property-list/baappgroupid.md): The app group identifier that you share between your app and the extension that uses asset packs.
- [BAHasManagedAssetPacks](../bundleresources/information-property-list/bahasmanagedassetpacks.md): A Boolean value that indicates whether you let the system automatically manage your asset packs.
