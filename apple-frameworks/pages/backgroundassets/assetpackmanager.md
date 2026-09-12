> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager](https://developer.apple.com/documentation/backgroundassets/assetpackmanager)

# AssetPackManager

**Framework:** Background Assets  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An actor that manages asset packs.

## Declaration

```swift
actor AssetPackManager
```

## Mentioned In

- [Reducing download and storage demands with localized asset packs](reducing-download-and-storage-demands-with-localized-asset-packs.md)

<a id="overview"></a>

## Overview

The first time that your code refers to the shared manager, Background Assets considers that your app is opting into automatic system management of your asset packs.

> **Important**

> When using the asset-pack manager, make sure that you also adopt the corresponding managed extension protocol, [ManagedDownloaderExtension](manageddownloaderextension.md) (for self-hosted asset packs) or `StoreDownloaderExtension` from StoreKit (for Apple-hosted asset packs). Not doing so is a programmer error.

## Topics

### Getting the shared manager

- [shared](assetpackmanager/shared.md): The shared manager.

### Tracking downloads

- [statusUpdates](assetpackmanager/statusupdates.md): An asynchronous sequence of download-status updates for all asset packs.
- [statusUpdates(forAssetPackWithID:)](assetpackmanager/statusupdates%28forassetpackwithid_%29.md): Returns an asynchronous sequence of download-status updates for the asset pack with the specified ID.
- [AssetPackManager.DownloadStatusUpdate](assetpackmanager/downloadstatusupdate.md): Statuses of an asset-pack download.

### Accessing asset packs

- [manifest](assetpackmanager/manifest.md): The manifest of asset packs that are available to download.
- [AssetPackManifest](assetpackmanifest.md): A manifest of asset packs that are available to download.
- [allAssetPacks](assetpackmanager/allassetpacks.md): Deprecated. The asset packs that are available to download.
- [assetPack(withID:)](assetpackmanager/assetpack%28withid_%29.md): Deprecated. Returns the asset pack with the given ID.

### Accessing asset contents

- [contents(at:searchingInAssetPackWithID:options:)](assetpackmanager/contents%28at_searchinginassetpackwithid_options_%29.md): Returns the contents of an asset file at the specified relative path.
- [contents(at:asLocalizedFor:options:)](assetpackmanager/contents%28at_aslocalizedfor_options_%29.md): Returns the contents of a localized asset file at the specified relative path.
- [descriptor(for:searchingInAssetPackWithID:)](assetpackmanager/descriptor%28for_searchinginassetpackwithid_%29.md): Opens and returns a file descriptor for an asset file at the specified relative path.
- [descriptor(for:asLocalizedFor:)](assetpackmanager/descriptor%28for_aslocalizedfor_%29.md): Opens and returns a file descriptor for a localized asset file at the specified relative path.
- [url(for:)](assetpackmanager/url%28for_%29.md): Returns a URL for the specified relative path.
- [url(for:asLocalizedFor:)](assetpackmanager/url%28for_aslocalizedfor_%29.md): Returns a URL for the specified relative path.

### Managing asset packs

- [checkForUpdates()](assetpackmanager/checkforupdates%28%29.md): Gets the latest asset-pack information from the server, updates outdated asset packs, and removes obsolete asset packs.
- [ensureLocalAvailability(of:requireLatestVersion:)](assetpackmanager/ensurelocalavailability%28of_requirelatestversion_%29.md): Ensures that an asset pack is available locally, performing a download if necessary.
- [ensureLocalAvailability(of:requireLatestVersions:)](assetpackmanager/ensurelocalavailability%28of_requirelatestversions_%29.md): Ensures the specified asset packs are available locally, performing a batch download if necessary.
- [assetPackIsAvailableLocally(withID:)](assetpackmanager/assetpackisavailablelocally%28withid_%29.md): Checks whether an asset pack is available locally.
- [status(relativeTo:)](assetpackmanager/status%28relativeto_%29.md): Checks the current status relative to a particular asset pack.
- [localStatus(ofAssetPackWithID:)](assetpackmanager/localstatus%28ofassetpackwithid_%29.md): Checks an asset pack’s local status.
- [AssetPack.Status](assetpack/status.md): The status of an asset pack.
- [remove(assetPackWithID:)](assetpackmanager/remove%28assetpackwithid_%29.md): Removes the specified asset pack from the device.
- [status(ofAssetPackWithID:)](assetpackmanager/status%28ofassetpackwithid_%29.md): Deprecated. Checks an asset pack’s status.
- [ensureLocalAvailability(of:)](assetpackmanager/ensurelocalavailability%28of_%29.md): Deprecated. Ensures that the specified asset pack is available locally, performing a download if necessary.

### Inspecting language support

- [locallyAvailableLanguages](assetpackmanager/locallyavailablelanguages.md): The languages used by asset packs that are localized and are available locally.
- [resolvedLanguage](assetpackmanager/resolvedlanguage.md): The language that best matches current preferences and for which the system automatically makes localized asset packs available locally.
- [reconcilePreferredLanguages()](assetpackmanager/reconcilepreferredlanguages%28%29.md): Reconciles the set of locally available asset packs with the current preferred languages.

### Handling errors

- [AssetPackManager.LocalAvailabilityError](assetpackmanager/localavailabilityerror.md): An error that provides information about local asset pack availability, distinguishing between successes and failures.

## Relationships

### Conforms To

- [Actor](https://developer.apple.com/documentation/swift/actor)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managed asset packs

- [AssetPack](assetpack.md): An archive of assets that the system downloads together.
- [AssetPackManifest](assetpackmanifest.md): A manifest of asset packs that are available to download.
- [ManagedDownloaderExtension](manageddownloaderextension.md): An app extension that uses the system implementation to schedule asset-pack downloads automatically.
- [BAAppGroupID](../bundleresources/information-property-list/baappgroupid.md): The app group identifier that you share between your app and the extension that uses asset packs.
- [BAHasManagedAssetPacks](../bundleresources/information-property-list/bahasmanagedassetpacks.md): A Boolean value that indicates whether you let the system automatically manage your asset packs.
