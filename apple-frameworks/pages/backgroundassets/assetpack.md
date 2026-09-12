> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpack](https://developer.apple.com/documentation/backgroundassets/assetpack)

# AssetPack

**Framework:** Background Assets  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An archive of assets that the system downloads together.

## Declaration

```swift
struct AssetPack
```

## Mentioned In

- [Downloading Apple-hosted asset packs](downloading-apple-hosted-asset-packs.md)

<a id="overview"></a>

## Overview

An instance of this structure can be invalidated when the asset pack that it represents is updated on the server.

## Topics

### Identifying assets

- [id](assetpack/id.md): A unique ID for the asset pack.
- [version](assetpack/version.md): The asset pack’s version number.

### Accessing asset details

- [AssetPack.Status](assetpack/status.md): The status of an asset pack.
- [userInfo](assetpack/userinfo.md): JSON-encoded custom information that’s associated with the asset pack.

### Accessing asset language

- [language](assetpack/language.md): The language for which this asset pack is localized.
- [Locale.Language](../foundation/locale/language-swift.struct.md): A type that represents a language, as used in a locale.

### Downloading assets

- [download(for:)](assetpack/download%28for_%29.md): Creates a download object for the asset pack that you schedule using a download manager.
- [downloadSize](assetpack/downloadsize.md): The size of the download file containing the asset pack in bytes.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DecodableWithConfiguration](../foundation/decodablewithconfiguration.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managed asset packs

- [AssetPackManager](assetpackmanager.md): An actor that manages asset packs.
- [AssetPackManifest](assetpackmanifest.md): A manifest of asset packs that are available to download.
- [ManagedDownloaderExtension](manageddownloaderextension.md): An app extension that uses the system implementation to schedule asset-pack downloads automatically.
- [BAAppGroupID](../bundleresources/information-property-list/baappgroupid.md): The app group identifier that you share between your app and the extension that uses asset packs.
- [BAHasManagedAssetPacks](../bundleresources/information-property-list/bahasmanagedassetpacks.md): A Boolean value that indicates whether you let the system automatically manage your asset packs.
