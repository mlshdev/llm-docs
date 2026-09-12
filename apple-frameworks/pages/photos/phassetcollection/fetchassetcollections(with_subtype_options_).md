> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollection/fetchassetcollections(with:subtype:options:)](https://developer.apple.com/documentation/photos/phassetcollection/fetchassetcollections(with:subtype:options:))

# fetchAssetCollections(with:subtype:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves asset collections of the specified type and subtype.

## Declaration

```swift
class func fetchAssetCollections(with type: PHAssetCollectionType, subtype: PHAssetCollectionSubtype, options: PHFetchOptions?) -> PHFetchResult<PHAssetCollection>
```

## Parameters

- `type`: A type of asset collection, such as an album or a moment. See [PHAssetCollectionType](../phassetcollectiontype.md).
- `subtype`: A subtype of asset collection. See [PHAssetCollectionSubtype](../phassetcollectionsubtype.md).
- `options`: Options that specify a filter predicate and sort order for the fetched asset collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAssetCollection](../phassetcollection.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

By default, the returned [PHFetchResult](../phfetchresult.md) object contains all asset collections with the specified type and subtype. To retrieve a more specific set of asset collections, provide a [PHFetchOptions](../phfetchoptions.md) object containing a filter predicate.

## See Also

### Fetching Asset Collections

- [fetchAssetCollections(withLocalIdentifiers:options:)](fetchassetcollections%28withlocalidentifiers_options_%29.md): Retrieves asset collections with the specified unique identifiers.
- [fetchAssetCollectionsContaining(\_:with:options:)](fetchassetcollectionscontaining%28__with_options_%29.md): Retrieves asset collections of the specified type containing the specified asset.
- [fetchAssetCollections(withALAssetGroupURLs:options:)](fetchassetcollections%28withalassetgroupurls_options_%29.md): Deprecated. Retrieves asset collections using URLs provided by the Assets Library framework.
- [fetchMoments(inMomentList:options:)](fetchmoments%28inmomentlist_options_%29.md): Deprecated. Retrieves asset collections in the specified moment list collection.
- [fetchMoments(with:)](fetchmoments%28with_%29.md): Deprecated. Retrieves asset collections corresponding to moments seen in the Photos app.

# fetchAssetCollectionsWithType:subtype:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves asset collections of the specified type and subtype.

## Declaration

```objectivec
+ (PHFetchResult<PHAssetCollection *> *) fetchAssetCollectionsWithType:(PHAssetCollectionType) type subtype:(PHAssetCollectionSubtype) subtype options:(PHFetchOptions *) options;
```

## Parameters

- `type`: A type of asset collection, such as an album or a moment. See [PHAssetCollectionType](../phassetcollectiontype.md).
- `subtype`: A subtype of asset collection. See [PHAssetCollectionSubtype](../phassetcollectionsubtype.md).
- `options`: Options that specify a filter predicate and sort order for the fetched asset collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAssetCollection](../phassetcollection.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

By default, the returned [PHFetchResult](../phfetchresult.md) object contains all asset collections with the specified type and subtype. To retrieve a more specific set of asset collections, provide a [PHFetchOptions](../phfetchoptions.md) object containing a filter predicate.

## See Also

### Fetching Asset Collections

- [fetchAssetCollectionsWithLocalIdentifiers:options:](fetchassetcollections%28withlocalidentifiers_options_%29.md): Retrieves asset collections with the specified unique identifiers.
- [fetchAssetCollectionsContainingAsset:withType:options:](fetchassetcollectionscontaining%28__with_options_%29.md): Retrieves asset collections of the specified type containing the specified asset.
- [fetchAssetCollectionsWithALAssetGroupURLs:options:](fetchassetcollections%28withalassetgroupurls_options_%29.md): Deprecated. Retrieves asset collections using URLs provided by the Assets Library framework.
- [fetchMomentsInMomentList:options:](fetchmoments%28inmomentlist_options_%29.md): Deprecated. Retrieves asset collections in the specified moment list collection.
- [fetchMomentsWithOptions:](fetchmoments%28with_%29.md): Deprecated. Retrieves asset collections corresponding to moments seen in the Photos app.
