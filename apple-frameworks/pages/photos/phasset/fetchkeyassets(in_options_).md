> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/fetchkeyassets(in:options:)](https://developer.apple.com/documentation/photos/phasset/fetchkeyassets(in:options:))

# fetchKeyAssets(in:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Retrieves assets marked as key assets in the specified asset collection.

## Declaration

```swift
class func fetchKeyAssets(in assetCollection: PHAssetCollection, options: PHFetchOptions?) -> PHFetchResult<PHAsset>?
```

## Parameters

- `assetCollection`: The asset collection from which to fetch assets.
- `options`: Options that specify a filter predicate and sort order for the fetched assets, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAsset](../phasset.md) objects, or an empty fetch result or `nil` if no objects match the request.

<a id="Discussion"></a>

## Discussion

Most asset collections contain a *key asset*, which the Photos app displays as a proxy for the collection. Different types of asset collections have different ways of specifying one or more key assets. For example, in the Camera Roll collection, the most recently captured photo or video is the key asset.

This method returns `nil` if the `assetCollection` parameter references a transient asset collection (such as one created with the [transientAssetCollection(with:title:)](../phassetcollection/transientassetcollection%28with_title_%29.md) method).

## See Also

### Fetching Assets

- [Fetching Assets](../../photokit/fetching-assets.md): Retrieve asset metadata or request full asset content.
- [fetchAssets(in:options:)](fetchassets%28in_options_%29.md): Retrieves assets from the specified asset collection.
- [fetchAssets(with:options:)](fetchassets%28with_options_%29.md): Retrieves assets with the specified media type.
- [fetchAssets(withLocalIdentifiers:options:)](fetchassets%28withlocalidentifiers_options_%29.md): Retrieves assets with the specified local-device-specific unique identifiers.
- [fetchAssets(with:)](fetchassets%28with_%29.md): Retrieves all assets matching the specified options.
- [fetchAssets(withBurstIdentifier:options:)](fetchassets%28withburstidentifier_options_%29.md): Retrieves assets with the specified burst photo sequence identifier.
- [fetchAssets(withALAssetURLs:options:)](fetchassets%28withalasseturls_options_%29.md): Deprecated. Retrieves assets using URLs provided by the Assets Library framework.

# fetchKeyAssetsInAssetCollection:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Retrieves assets marked as key assets in the specified asset collection.

## Declaration

```objectivec
+ (PHFetchResult<PHAsset *> *) fetchKeyAssetsInAssetCollection:(PHAssetCollection *) assetCollection options:(PHFetchOptions *) options;
```

## Parameters

- `assetCollection`: The asset collection from which to fetch assets.
- `options`: Options that specify a filter predicate and sort order for the fetched assets, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAsset](../phasset.md) objects, or an empty fetch result or `nil` if no objects match the request.

<a id="Discussion"></a>

## Discussion

Most asset collections contain a *key asset*, which the Photos app displays as a proxy for the collection. Different types of asset collections have different ways of specifying one or more key assets. For example, in the Camera Roll collection, the most recently captured photo or video is the key asset.

This method returns `nil` if the `assetCollection` parameter references a transient asset collection (such as one created with the [transientAssetCollectionWithAssets:title:](../phassetcollection/transientassetcollection%28with_title_%29.md) method).

## See Also

### Fetching Assets

- [Fetching Assets](../../photokit/fetching-assets.md): Retrieve asset metadata or request full asset content.
- [fetchAssetsInAssetCollection:options:](fetchassets%28in_options_%29.md): Retrieves assets from the specified asset collection.
- [fetchAssetsWithMediaType:options:](fetchassets%28with_options_%29.md): Retrieves assets with the specified media type.
- [fetchAssetsWithLocalIdentifiers:options:](fetchassets%28withlocalidentifiers_options_%29.md): Retrieves assets with the specified local-device-specific unique identifiers.
- [fetchAssetsWithOptions:](fetchassets%28with_%29.md): Retrieves all assets matching the specified options.
- [fetchAssetsWithBurstIdentifier:options:](fetchassets%28withburstidentifier_options_%29.md): Retrieves assets with the specified burst photo sequence identifier.
- [fetchAssetsWithALAssetURLs:options:](fetchassets%28withalasseturls_options_%29.md): Deprecated. Retrieves assets using URLs provided by the Assets Library framework.
