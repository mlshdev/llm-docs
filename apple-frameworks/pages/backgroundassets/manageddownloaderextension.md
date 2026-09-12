> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/manageddownloaderextension](https://developer.apple.com/documentation/backgroundassets/manageddownloaderextension)

# ManagedDownloaderExtension

**Framework:** Background Assets  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An app extension that uses the system implementation to schedule asset-pack downloads automatically.

## Declaration

```swift
protocol ManagedDownloaderExtension : BADownloaderExtension where Self.Configuration : ManagedDownloaderExtensionConfiguration
```

<a id="overview"></a>

## Overview

The protocol provides default implementations for all of the inherited `BADownloaderExtension` requirements.

> **Warning**

> Don’t implement any of the inherited `BADownloaderExtension` requirements aside from, optionally, [backgroundDownload(\_:didReceive:)](badownloaderextension-qwaw/backgrounddownload%28__didreceive_%29.md).

## Topics

### Downloading assets

- [shouldDownload(\_:)](manageddownloaderextension/shoulddownload%28__%29.md): Determines whether to download an asset pack.

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)
- [BADownloaderExtension](badownloaderextension-qwaw.md)

## See Also

### Managed asset packs

- [AssetPack](assetpack.md): An archive of assets that the system downloads together.
- [AssetPackManager](assetpackmanager.md): An actor that manages asset packs.
- [AssetPackManifest](assetpackmanifest.md): A manifest of asset packs that are available to download.
- [BAAppGroupID](../bundleresources/information-property-list/baappgroupid.md): The app group identifier that you share between your app and the extension that uses asset packs.
- [BAHasManagedAssetPacks](../bundleresources/information-property-list/bahasmanagedassetpacks.md): A Boolean value that indicates whether you let the system automatically manage your asset packs.
