> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phasset/fetchassets(withalasseturls:options:)](https://developer.apple.com/documentation/photos/phasset/fetchassets(withalasseturls:options:))

# fetchAssets(withALAssetURLs:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 8.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves assets using URLs provided by the Assets Library framework.

> Will be removed in a future release

## Declaration

```swift
class func fetchAssets(withALAssetURLs assetURLs: [URL], options: PHFetchOptions?) -> PHFetchResult<PHAsset>
```

## Parameters

- `assetURLs`: An array of [NSURL](../../foundation/nsurl.md) objects, each an asset URL previously retrieved from an [ALAsset](https://developer.apple.com/documentation/assetslibrary/alasset) object.
- `options`: Options that specify a filter predicate and sort order for the fetched assets, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAsset](../phasset.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

The Assets Library framework is deprecated in iOS 8.0 and later, replaced by the Photos framework. Use this method if your app has previously stored URLs from [ALAsset](https://developer.apple.com/documentation/assetslibrary/alasset) objects and you need to retrieve the corresponding Photos framework objects.

## See Also

### Fetching Assets

- [Fetching Assets](../../photokit/fetching-assets.md): Retrieve asset metadata or request full asset content.
- [fetchAssets(in:options:)](fetchassets%28in_options_%29.md): Retrieves assets from the specified asset collection.
- [fetchAssets(with:options:)](fetchassets%28with_options_%29.md): Retrieves assets with the specified media type.
- [fetchAssets(withLocalIdentifiers:options:)](fetchassets%28withlocalidentifiers_options_%29.md): Retrieves assets with the specified local-device-specific unique identifiers.
- [fetchKeyAssets(in:options:)](fetchkeyassets%28in_options_%29.md): Retrieves assets marked as key assets in the specified asset collection.
- [fetchAssets(with:)](fetchassets%28with_%29.md): Retrieves all assets matching the specified options.
- [fetchAssets(withBurstIdentifier:options:)](fetchassets%28withburstidentifier_options_%29.md): Retrieves assets with the specified burst photo sequence identifier.

# fetchAssetsWithALAssetURLs:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves assets using URLs provided by the Assets Library framework.

> Will be removed in a future release

## Declaration

```objectivec
+ (PHFetchResult<PHAsset *> *) fetchAssetsWithALAssetURLs:(NSArray<NSURL *> *) assetURLs options:(PHFetchOptions *) options;
```

## Parameters

- `assetURLs`: An array of [NSURL](../../foundation/nsurl.md) objects, each an asset URL previously retrieved from an [ALAsset](https://developer.apple.com/documentation/assetslibrary/alasset) object.
- `options`: Options that specify a filter predicate and sort order for the fetched assets, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAsset](../phasset.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

The Assets Library framework is deprecated in iOS 8.0 and later, replaced by the Photos framework. Use this method if your app has previously stored URLs from [ALAsset](https://developer.apple.com/documentation/assetslibrary/alasset) objects and you need to retrieve the corresponding Photos framework objects.

## See Also

### Fetching Assets

- [Fetching Assets](../../photokit/fetching-assets.md): Retrieve asset metadata or request full asset content.
- [fetchAssetsInAssetCollection:options:](fetchassets%28in_options_%29.md): Retrieves assets from the specified asset collection.
- [fetchAssetsWithMediaType:options:](fetchassets%28with_options_%29.md): Retrieves assets with the specified media type.
- [fetchAssetsWithLocalIdentifiers:options:](fetchassets%28withlocalidentifiers_options_%29.md): Retrieves assets with the specified local-device-specific unique identifiers.
- [fetchKeyAssetsInAssetCollection:options:](fetchkeyassets%28in_options_%29.md): Retrieves assets marked as key assets in the specified asset collection.
- [fetchAssetsWithOptions:](fetchassets%28with_%29.md): Retrieves all assets matching the specified options.
- [fetchAssetsWithBurstIdentifier:options:](fetchassets%28withburstidentifier_options_%29.md): Retrieves assets with the specified burst photo sequence identifier.
