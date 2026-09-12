> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollection/fetchassetcollections(withlocalidentifiers:options:)](https://developer.apple.com/documentation/photos/phassetcollection/fetchassetcollections(withlocalidentifiers:options:))

# fetchAssetCollections(withLocalIdentifiers:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves asset collections with the specified unique identifiers.

## Declaration

```swift
class func fetchAssetCollections(withLocalIdentifiers identifiers: [String], options: PHFetchOptions?) -> PHFetchResult<PHAssetCollection>
```

## Parameters

- `identifiers`: An array of `NSString` objects, each the [localIdentifier](../phobject/localidentifier.md) string of an asset collection.
- `options`: Options that specify a filter predicate and sort order for the fetched asset collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAssetCollection](../phassetcollection.md) objects, or an empty fetch result if no objects match the request.

## See Also

### Fetching Asset Collections

- [fetchAssetCollections(with:subtype:options:)](fetchassetcollections%28with_subtype_options_%29.md): Retrieves asset collections of the specified type and subtype.
- [fetchAssetCollectionsContaining(\_:with:options:)](fetchassetcollectionscontaining%28__with_options_%29.md): Retrieves asset collections of the specified type containing the specified asset.
- [fetchAssetCollections(withALAssetGroupURLs:options:)](fetchassetcollections%28withalassetgroupurls_options_%29.md): Deprecated. Retrieves asset collections using URLs provided by the Assets Library framework.
- [fetchMoments(inMomentList:options:)](fetchmoments%28inmomentlist_options_%29.md): Deprecated. Retrieves asset collections in the specified moment list collection.
- [fetchMoments(with:)](fetchmoments%28with_%29.md): Deprecated. Retrieves asset collections corresponding to moments seen in the Photos app.

# fetchAssetCollectionsWithLocalIdentifiers:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves asset collections with the specified unique identifiers.

## Declaration

```objectivec
+ (PHFetchResult<PHAssetCollection *> *) fetchAssetCollectionsWithLocalIdentifiers:(NSArray<NSString *> *) identifiers options:(PHFetchOptions *) options;
```

## Parameters

- `identifiers`: An array of `NSString` objects, each the [localIdentifier](../phobject/localidentifier.md) string of an asset collection.
- `options`: Options that specify a filter predicate and sort order for the fetched asset collections, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHAssetCollection](../phassetcollection.md) objects, or an empty fetch result if no objects match the request.

## See Also

### Fetching Asset Collections

- [fetchAssetCollectionsWithType:subtype:options:](fetchassetcollections%28with_subtype_options_%29.md): Retrieves asset collections of the specified type and subtype.
- [fetchAssetCollectionsContainingAsset:withType:options:](fetchassetcollectionscontaining%28__with_options_%29.md): Retrieves asset collections of the specified type containing the specified asset.
- [fetchAssetCollectionsWithALAssetGroupURLs:options:](fetchassetcollections%28withalassetgroupurls_options_%29.md): Deprecated. Retrieves asset collections using URLs provided by the Assets Library framework.
- [fetchMomentsInMomentList:options:](fetchmoments%28inmomentlist_options_%29.md): Deprecated. Retrieves asset collections in the specified moment list collection.
- [fetchMomentsWithOptions:](fetchmoments%28with_%29.md): Deprecated. Retrieves asset collections corresponding to moments seen in the Photos app.
