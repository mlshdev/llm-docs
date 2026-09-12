> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollection/fetchmoments(inmomentlist:options:)](https://developer.apple.com/documentation/photos/phassetcollection/fetchmoments(inmomentlist:options:))

# fetchMoments(inMomentList:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves asset collections in the specified moment list collection.

> Will be removed in a future release

## Declaration

```swift
class func fetchMoments(inMomentList momentList: PHCollectionList, options: PHFetchOptions?) -> PHFetchResult<PHAssetCollection>
```

## Parameters

- `momentList`: A collection list whose type is [PHCollectionListType.momentList](../phcollectionlisttype/momentlist.md).
- `options`: Options that specify a filter predicate and sort order for the fetched asset collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAssetCollection](../phassetcollection.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

The Photos app automatically creates moments to group assets by time and location, and also creates moment lists to group related moments. Moment lists have two subtypes: a moment cluster groups a few related moments, and a moment year groups all moments in a calendar year.

## See Also

### Fetching Asset Collections

- [fetchAssetCollections(withLocalIdentifiers:options:)](fetchassetcollections%28withlocalidentifiers_options_%29.md): Retrieves asset collections with the specified unique identifiers.
- [fetchAssetCollections(with:subtype:options:)](fetchassetcollections%28with_subtype_options_%29.md): Retrieves asset collections of the specified type and subtype.
- [fetchAssetCollectionsContaining(\_:with:options:)](fetchassetcollectionscontaining%28__with_options_%29.md): Retrieves asset collections of the specified type containing the specified asset.
- [fetchAssetCollections(withALAssetGroupURLs:options:)](fetchassetcollections%28withalassetgroupurls_options_%29.md): Deprecated. Retrieves asset collections using URLs provided by the Assets Library framework.
- [fetchMoments(with:)](fetchmoments%28with_%29.md): Deprecated. Retrieves asset collections corresponding to moments seen in the Photos app.

# fetchMomentsInMomentList:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves asset collections in the specified moment list collection.

> Will be removed in a future release

## Declaration

```objectivec
+ (PHFetchResult<PHAssetCollection *> *) fetchMomentsInMomentList:(PHCollectionList *) momentList options:(PHFetchOptions *) options;
```

## Parameters

- `momentList`: A collection list whose type is [PHCollectionListTypeMomentList](../phcollectionlisttype/momentlist.md).
- `options`: Options that specify a filter predicate and sort order for the fetched asset collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAssetCollection](../phassetcollection.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

The Photos app automatically creates moments to group assets by time and location, and also creates moment lists to group related moments. Moment lists have two subtypes: a moment cluster groups a few related moments, and a moment year groups all moments in a calendar year.

## See Also

### Fetching Asset Collections

- [fetchAssetCollectionsWithLocalIdentifiers:options:](fetchassetcollections%28withlocalidentifiers_options_%29.md): Retrieves asset collections with the specified unique identifiers.
- [fetchAssetCollectionsWithType:subtype:options:](fetchassetcollections%28with_subtype_options_%29.md): Retrieves asset collections of the specified type and subtype.
- [fetchAssetCollectionsContainingAsset:withType:options:](fetchassetcollectionscontaining%28__with_options_%29.md): Retrieves asset collections of the specified type containing the specified asset.
- [fetchAssetCollectionsWithALAssetGroupURLs:options:](fetchassetcollections%28withalassetgroupurls_options_%29.md): Deprecated. Retrieves asset collections using URLs provided by the Assets Library framework.
- [fetchMomentsWithOptions:](fetchmoments%28with_%29.md): Deprecated. Retrieves asset collections corresponding to moments seen in the Photos app.
