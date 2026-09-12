> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollection/fetchmoments(with:)](https://developer.apple.com/documentation/photos/phassetcollection/fetchmoments(with:))

# fetchMoments(with:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves asset collections corresponding to moments seen in the Photos app.

> Will be removed in a future release

## Declaration

```swift
class func fetchMoments(with options: PHFetchOptions?) -> PHFetchResult<PHAssetCollection>
```

## Parameters

- `options`: Options that specify a filter predicate and sort order for the fetched asset collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAssetCollection](../phassetcollection.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

The Photos app automatically creates moments to group assets by time and location.

## See Also

### Fetching Asset Collections

- [fetchAssetCollections(withLocalIdentifiers:options:)](fetchassetcollections%28withlocalidentifiers_options_%29.md): Retrieves asset collections with the specified unique identifiers.
- [fetchAssetCollections(with:subtype:options:)](fetchassetcollections%28with_subtype_options_%29.md): Retrieves asset collections of the specified type and subtype.
- [fetchAssetCollectionsContaining(\_:with:options:)](fetchassetcollectionscontaining%28__with_options_%29.md): Retrieves asset collections of the specified type containing the specified asset.
- [fetchAssetCollections(withALAssetGroupURLs:options:)](fetchassetcollections%28withalassetgroupurls_options_%29.md): Deprecated. Retrieves asset collections using URLs provided by the Assets Library framework.
- [fetchMoments(inMomentList:options:)](fetchmoments%28inmomentlist_options_%29.md): Deprecated. Retrieves asset collections in the specified moment list collection.

# fetchMomentsWithOptions: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves asset collections corresponding to moments seen in the Photos app.

> Will be removed in a future release

## Declaration

```objectivec
+ (PHFetchResult<PHAssetCollection *> *) fetchMomentsWithOptions:(PHFetchOptions *) options;
```

## Parameters

- `options`: Options that specify a filter predicate and sort order for the fetched asset collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAssetCollection](../phassetcollection.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

The Photos app automatically creates moments to group assets by time and location.

## See Also

### Fetching Asset Collections

- [fetchAssetCollectionsWithLocalIdentifiers:options:](fetchassetcollections%28withlocalidentifiers_options_%29.md): Retrieves asset collections with the specified unique identifiers.
- [fetchAssetCollectionsWithType:subtype:options:](fetchassetcollections%28with_subtype_options_%29.md): Retrieves asset collections of the specified type and subtype.
- [fetchAssetCollectionsContainingAsset:withType:options:](fetchassetcollectionscontaining%28__with_options_%29.md): Retrieves asset collections of the specified type containing the specified asset.
- [fetchAssetCollectionsWithALAssetGroupURLs:options:](fetchassetcollections%28withalassetgroupurls_options_%29.md): Deprecated. Retrieves asset collections using URLs provided by the Assets Library framework.
- [fetchMomentsInMomentList:options:](fetchmoments%28inmomentlist_options_%29.md): Deprecated. Retrieves asset collections in the specified moment list collection.
