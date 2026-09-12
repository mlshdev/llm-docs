> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollection/fetchassetcollections(withalassetgroupurls:options:)](https://developer.apple.com/documentation/photos/phassetcollection/fetchassetcollections(withalassetgroupurls:options:))

# fetchAssetCollections(withALAssetGroupURLs:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 13.0) · tvOS 10.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves asset collections using URLs provided by the Assets Library framework.

> Will be removed in a future release

## Declaration

```swift
class func fetchAssetCollections(withALAssetGroupURLs assetGroupURLs: [URL], options: PHFetchOptions?) -> PHFetchResult<PHAssetCollection>
```

## Parameters

- `assetGroupURLs`: An array of [NSURL](../../foundation/nsurl.md) objects, each an asset group URL that was previously retrieved from an [ALAssetsGroup](https://developer.apple.com/documentation/assetslibrary/alassetsgroup) object.
- `options`: Options that specify a filter predicate and sort order for the fetched asset collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAssetCollection](../phassetcollection.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

The Assets Library framework is deprecated in iOS 8.0 and later, replaced by the Photos framework. Use this method if your app has previously stored URLs from [ALAssetsGroup](https://developer.apple.com/documentation/assetslibrary/alassetsgroup) objects and you need to retrieve the corresponding Photos framework objects.

## See Also

### Fetching Asset Collections

- [fetchAssetCollections(withLocalIdentifiers:options:)](fetchassetcollections%28withlocalidentifiers_options_%29.md): Retrieves asset collections with the specified unique identifiers.
- [fetchAssetCollections(with:subtype:options:)](fetchassetcollections%28with_subtype_options_%29.md): Retrieves asset collections of the specified type and subtype.
- [fetchAssetCollectionsContaining(\_:with:options:)](fetchassetcollectionscontaining%28__with_options_%29.md): Retrieves asset collections of the specified type containing the specified asset.
- [fetchMoments(inMomentList:options:)](fetchmoments%28inmomentlist_options_%29.md): Deprecated. Retrieves asset collections in the specified moment list collection.
- [fetchMoments(with:)](fetchmoments%28with_%29.md): Deprecated. Retrieves asset collections corresponding to moments seen in the Photos app.

# fetchAssetCollectionsWithALAssetGroupURLs:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.15+ (deprecated in 13.0) · tvOS 10.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves asset collections using URLs provided by the Assets Library framework.

> Will be removed in a future release

## Declaration

```objectivec
+ (PHFetchResult<PHAssetCollection *> *) fetchAssetCollectionsWithALAssetGroupURLs:(NSArray<NSURL *> *) assetGroupURLs options:(PHFetchOptions *) options;
```

## Parameters

- `assetGroupURLs`: An array of [NSURL](../../foundation/nsurl.md) objects, each an asset group URL that was previously retrieved from an [ALAssetsGroup](https://developer.apple.com/documentation/assetslibrary/alassetsgroup) object.
- `options`: Options that specify a filter predicate and sort order for the fetched asset collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAssetCollection](../phassetcollection.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

The Assets Library framework is deprecated in iOS 8.0 and later, replaced by the Photos framework. Use this method if your app has previously stored URLs from [ALAssetsGroup](https://developer.apple.com/documentation/assetslibrary/alassetsgroup) objects and you need to retrieve the corresponding Photos framework objects.

## See Also

### Fetching Asset Collections

- [fetchAssetCollectionsWithLocalIdentifiers:options:](fetchassetcollections%28withlocalidentifiers_options_%29.md): Retrieves asset collections with the specified unique identifiers.
- [fetchAssetCollectionsWithType:subtype:options:](fetchassetcollections%28with_subtype_options_%29.md): Retrieves asset collections of the specified type and subtype.
- [fetchAssetCollectionsContainingAsset:withType:options:](fetchassetcollectionscontaining%28__with_options_%29.md): Retrieves asset collections of the specified type containing the specified asset.
- [fetchMomentsInMomentList:options:](fetchmoments%28inmomentlist_options_%29.md): Deprecated. Retrieves asset collections in the specified moment list collection.
- [fetchMomentsWithOptions:](fetchmoments%28with_%29.md): Deprecated. Retrieves asset collections corresponding to moments seen in the Photos app.
