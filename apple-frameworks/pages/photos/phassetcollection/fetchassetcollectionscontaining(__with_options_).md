> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollection/fetchassetcollectionscontaining(_:with:options:)](https://developer.apple.com/documentation/photos/phassetcollection/fetchassetcollectionscontaining(_:with:options:))

# fetchAssetCollectionsContaining(\_:with:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves asset collections of the specified type containing the specified asset.

## Declaration

```swift
class func fetchAssetCollectionsContaining(_ asset: PHAsset, with type: PHAssetCollectionType, options: PHFetchOptions?) -> PHFetchResult<PHAssetCollection>
```

## Parameters

- `asset`: A Photos asset.
- `type`: An asset collection type, such as an album or a moment. See [PHAssetCollectionType](../phassetcollectiontype.md).
- `options`: Options that specify a filter predicate and sort order for the fetched asset collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAssetCollection](../phassetcollection.md) objects, or an empty fetch result if no objects match the request.

## See Also

### Fetching Asset Collections

- [fetchAssetCollections(withLocalIdentifiers:options:)](fetchassetcollections%28withlocalidentifiers_options_%29.md): Retrieves asset collections with the specified unique identifiers.
- [fetchAssetCollections(with:subtype:options:)](fetchassetcollections%28with_subtype_options_%29.md): Retrieves asset collections of the specified type and subtype.
- [fetchAssetCollections(withALAssetGroupURLs:options:)](fetchassetcollections%28withalassetgroupurls_options_%29.md): Deprecated. Retrieves asset collections using URLs provided by the Assets Library framework.
- [fetchMoments(inMomentList:options:)](fetchmoments%28inmomentlist_options_%29.md): Deprecated. Retrieves asset collections in the specified moment list collection.
- [fetchMoments(with:)](fetchmoments%28with_%29.md): Deprecated. Retrieves asset collections corresponding to moments seen in the Photos app.

# fetchAssetCollectionsContainingAsset:withType:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves asset collections of the specified type containing the specified asset.

## Declaration

```objectivec
+ (PHFetchResult<PHAssetCollection *> *) fetchAssetCollectionsContainingAsset:(PHAsset *) asset withType:(PHAssetCollectionType) type options:(PHFetchOptions *) options;
```

## Parameters

- `asset`: A Photos asset.
- `type`: An asset collection type, such as an album or a moment. See [PHAssetCollectionType](../phassetcollectiontype.md).
- `options`: Options that specify a filter predicate and sort order for the fetched asset collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAssetCollection](../phassetcollection.md) objects, or an empty fetch result if no objects match the request.

## See Also

### Fetching Asset Collections

- [fetchAssetCollectionsWithLocalIdentifiers:options:](fetchassetcollections%28withlocalidentifiers_options_%29.md): Retrieves asset collections with the specified unique identifiers.
- [fetchAssetCollectionsWithType:subtype:options:](fetchassetcollections%28with_subtype_options_%29.md): Retrieves asset collections of the specified type and subtype.
- [fetchAssetCollectionsWithALAssetGroupURLs:options:](fetchassetcollections%28withalassetgroupurls_options_%29.md): Deprecated. Retrieves asset collections using URLs provided by the Assets Library framework.
- [fetchMomentsInMomentList:options:](fetchmoments%28inmomentlist_options_%29.md): Deprecated. Retrieves asset collections in the specified moment list collection.
- [fetchMomentsWithOptions:](fetchmoments%28with_%29.md): Deprecated. Retrieves asset collections corresponding to moments seen in the Photos app.
