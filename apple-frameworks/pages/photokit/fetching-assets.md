> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photokit/fetching-assets](https://developer.apple.com/documentation/photokit/fetching-assets)

# Fetching Assets (Swift)

**Framework:** Photos  
**Kind:** Article

Retrieve asset metadata or request full asset content.

<a id="overview"></a>

## Overview

You fetch assets to begin working with them. Use the class methods listed in Fetching Assets to retrieve one or more [PHAsset](../photos/phasset.md) instances representing the assets you want to display or edit. For example, to fetch all the assets in an asset collection (such as an album or moment), use the [fetchAssets(in:options:)](../photos/phasset/fetchassets%28in_options_%29.md) method. Each fetch method takes a [PHFetchOptions](../photos/phfetchoptions.md) parameter that you use to specify the assets to retrieve and how to sort them.

> **Important**

>  Accessing or modifying the Photos library requires explicit authorization from the user. The first time you call one of the methods listed in Fetching Assets, Photos automatically prompts the user for authorization. Alternatively, you can use the [PHPhotoLibrary](../photos/phphotolibrary.md) [requestAuthorization(\_:)](../photos/phphotolibrary/requestauthorization%28__%29.md) method to prompt the user at a time of your choosing. For more information, see `Requesting Authorization to Access Photos`.

## See Also

### Fetching Assets

- [fetchAssets(in:options:)](../photos/phasset/fetchassets%28in_options_%29.md): Retrieves assets from the specified asset collection.
- [fetchAssets(with:options:)](../photos/phasset/fetchassets%28with_options_%29.md): Retrieves assets with the specified media type.
- [fetchAssets(withLocalIdentifiers:options:)](../photos/phasset/fetchassets%28withlocalidentifiers_options_%29.md): Retrieves assets with the specified local-device-specific unique identifiers.
- [fetchKeyAssets(in:options:)](../photos/phasset/fetchkeyassets%28in_options_%29.md): Retrieves assets marked as key assets in the specified asset collection.
- [fetchAssets(with:)](../photos/phasset/fetchassets%28with_%29.md): Retrieves all assets matching the specified options.
- [fetchAssets(withBurstIdentifier:options:)](../photos/phasset/fetchassets%28withburstidentifier_options_%29.md): Retrieves assets with the specified burst photo sequence identifier.
- [fetchAssets(withALAssetURLs:options:)](../photos/phasset/fetchassets%28withalasseturls_options_%29.md): Deprecated. Retrieves assets using URLs provided by the Assets Library framework.

# Fetching Assets (Objective-C)

**Framework:** Photos  
**Kind:** Article

Retrieve asset metadata or request full asset content.

<a id="overview"></a>

## Overview

You fetch assets to begin working with them. Use the class methods listed in Fetching Assets to retrieve one or more [PHAsset](../photos/phasset.md) instances representing the assets you want to display or edit. For example, to fetch all the assets in an asset collection (such as an album or moment), use the [fetchAssetsInAssetCollection:options:](../photos/phasset/fetchassets%28in_options_%29.md) method. Each fetch method takes a [PHFetchOptions](../photos/phfetchoptions.md) parameter that you use to specify the assets to retrieve and how to sort them.

> **Important**

>  Accessing or modifying the Photos library requires explicit authorization from the user. The first time you call one of the methods listed in Fetching Assets, Photos automatically prompts the user for authorization. Alternatively, you can use the [PHPhotoLibrary](../photos/phphotolibrary.md) [requestAuthorization:](../photos/phphotolibrary/requestauthorization%28__%29.md) method to prompt the user at a time of your choosing. For more information, see `Requesting Authorization to Access Photos`.

## See Also

### Fetching Assets

- [fetchAssetsInAssetCollection:options:](../photos/phasset/fetchassets%28in_options_%29.md): Retrieves assets from the specified asset collection.
- [fetchAssetsWithMediaType:options:](../photos/phasset/fetchassets%28with_options_%29.md): Retrieves assets with the specified media type.
- [fetchAssetsWithLocalIdentifiers:options:](../photos/phasset/fetchassets%28withlocalidentifiers_options_%29.md): Retrieves assets with the specified local-device-specific unique identifiers.
- [fetchKeyAssetsInAssetCollection:options:](../photos/phasset/fetchkeyassets%28in_options_%29.md): Retrieves assets marked as key assets in the specified asset collection.
- [fetchAssetsWithOptions:](../photos/phasset/fetchassets%28with_%29.md): Retrieves all assets matching the specified options.
- [fetchAssetsWithBurstIdentifier:options:](../photos/phasset/fetchassets%28withburstidentifier_options_%29.md): Retrieves assets with the specified burst photo sequence identifier.
- [fetchAssetsWithALAssetURLs:options:](../photos/phasset/fetchassets%28withalasseturls_options_%29.md): Deprecated. Retrieves assets using URLs provided by the Assets Library framework.
