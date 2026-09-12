> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlist/fetchcollectionlistscontaining(_:options:)](https://developer.apple.com/documentation/photos/phcollectionlist/fetchcollectionlistscontaining(_:options:))

# fetchCollectionListsContaining(\_:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves collection lists that contain the specified collection.

## Declaration

```swift
class func fetchCollectionListsContaining(_ collection: PHCollection, options: PHFetchOptions?) -> PHFetchResult<PHCollectionList>
```

## Parameters

- `collection`: An asset collection or another collection list.
- `options`: Options that specify a filter predicate and sort order for the fetched collection lists, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHCollectionList](../phcollectionlist.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

Different kinds of collections have different containment possibilities. For example, an asset collection whose type is [PHAssetCollectionType.album](../phassetcollectiontype/album.md) may be contained in a folder, or have no containing collection list. A folder, in turn, may be contained in another folder. An asset collection whose type is [PHAssetCollectionType.moment](../phassetcollectiontype/moment.md) is always contained by two collection lists: a moment cluster and a moment year.

## See Also

### Fetching Collection Lists

- [fetchCollectionLists(withLocalIdentifiers:options:)](fetchcollectionlists%28withlocalidentifiers_options_%29.md): Retrieves collection lists with the specified local-device-specific unique identifiers.
- [fetchCollectionLists(with:subtype:options:)](fetchcollectionlists%28with_subtype_options_%29.md): Retrieves collection lists of the specified type.
- [fetchMomentLists(with:containingMoment:options:)](fetchmomentlists%28with_containingmoment_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type containing the specified moment.
- [fetchMomentLists(with:options:)](fetchmomentlists%28with_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type.

# fetchCollectionListsContainingCollection:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves collection lists that contain the specified collection.

## Declaration

```objectivec
+ (PHFetchResult<PHCollectionList *> *) fetchCollectionListsContainingCollection:(PHCollection *) collection options:(PHFetchOptions *) options;
```

## Parameters

- `collection`: An asset collection or another collection list.
- `options`: Options that specify a filter predicate and sort order for the fetched collection lists, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHCollectionList](../phcollectionlist.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

Different kinds of collections have different containment possibilities. For example, an asset collection whose type is [PHAssetCollectionTypeAlbum](../phassetcollectiontype/album.md) may be contained in a folder, or have no containing collection list. A folder, in turn, may be contained in another folder. An asset collection whose type is [PHAssetCollectionTypeMoment](../phassetcollectiontype/moment.md) is always contained by two collection lists: a moment cluster and a moment year.

## See Also

### Fetching Collection Lists

- [fetchCollectionListsWithLocalIdentifiers:options:](fetchcollectionlists%28withlocalidentifiers_options_%29.md): Retrieves collection lists with the specified local-device-specific unique identifiers.
- [fetchCollectionListsWithType:subtype:options:](fetchcollectionlists%28with_subtype_options_%29.md): Retrieves collection lists of the specified type.
- [fetchMomentListsWithSubtype:containingMoment:options:](fetchmomentlists%28with_containingmoment_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type containing the specified moment.
- [fetchMomentListsWithSubtype:options:](fetchmomentlists%28with_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type.
