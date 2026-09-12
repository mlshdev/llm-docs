> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlist/fetchmomentlists(with:containingmoment:options:)](https://developer.apple.com/documentation/photos/phcollectionlist/fetchmomentlists(with:containingmoment:options:))

# fetchMomentLists(with:containingMoment:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves collection lists of the specified moment list type containing the specified moment.

> Will be removed in a future release

## Declaration

```swift
class func fetchMomentLists(with momentListSubtype: PHCollectionListSubtype, containingMoment moment: PHAssetCollection, options: PHFetchOptions?) -> PHFetchResult<PHCollectionList>
```

## Parameters

- `momentListSubtype`: The type of moment list, either [PHCollectionListSubtype.momentListCluster](../phcollectionlistsubtype/momentlistcluster.md) or [PHCollectionListSubtype.momentListYear](../phcollectionlistsubtype/momentlistyear.md). See [PHCollectionListSubtype](../phcollectionlistsubtype.md).
- `moment`: An asset collection whose type is [PHAssetCollectionType.moment](../phassetcollectiontype/moment.md).
- `options`: Options that specify a filter predicate and sort order for the fetched collection lists, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHCollectionList](../phcollectionlist.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

The Photos app automatically creates moments to group assets by time and location, and also creates moment lists to group related moments. Moment lists have two subtypes: a moment cluster groups a few related moments, and a moment year groups all moments in a calendar year.

## See Also

### Fetching Collection Lists

- [fetchCollectionListsContaining(\_:options:)](fetchcollectionlistscontaining%28__options_%29.md): Retrieves collection lists that contain the specified collection.
- [fetchCollectionLists(withLocalIdentifiers:options:)](fetchcollectionlists%28withlocalidentifiers_options_%29.md): Retrieves collection lists with the specified local-device-specific unique identifiers.
- [fetchCollectionLists(with:subtype:options:)](fetchcollectionlists%28with_subtype_options_%29.md): Retrieves collection lists of the specified type.
- [fetchMomentLists(with:options:)](fetchmomentlists%28with_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type.

# fetchMomentListsWithSubtype:containingMoment:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves collection lists of the specified moment list type containing the specified moment.

> Will be removed in a future release

## Declaration

```objectivec
+ (PHFetchResult<PHCollectionList *> *) fetchMomentListsWithSubtype:(PHCollectionListSubtype) momentListSubtype containingMoment:(PHAssetCollection *) moment options:(PHFetchOptions *) options;
```

## Parameters

- `momentListSubtype`: The type of moment list, either [PHCollectionListSubtypeMomentListCluster](../phcollectionlistsubtype/momentlistcluster.md) or [PHCollectionListSubtypeMomentListYear](../phcollectionlistsubtype/momentlistyear.md). See [PHCollectionListSubtype](../phcollectionlistsubtype.md).
- `moment`: An asset collection whose type is [PHAssetCollectionTypeMoment](../phassetcollectiontype/moment.md).
- `options`: Options that specify a filter predicate and sort order for the fetched collection lists, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHCollectionList](../phcollectionlist.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

The Photos app automatically creates moments to group assets by time and location, and also creates moment lists to group related moments. Moment lists have two subtypes: a moment cluster groups a few related moments, and a moment year groups all moments in a calendar year.

## See Also

### Fetching Collection Lists

- [fetchCollectionListsContainingCollection:options:](fetchcollectionlistscontaining%28__options_%29.md): Retrieves collection lists that contain the specified collection.
- [fetchCollectionListsWithLocalIdentifiers:options:](fetchcollectionlists%28withlocalidentifiers_options_%29.md): Retrieves collection lists with the specified local-device-specific unique identifiers.
- [fetchCollectionListsWithType:subtype:options:](fetchcollectionlists%28with_subtype_options_%29.md): Retrieves collection lists of the specified type.
- [fetchMomentListsWithSubtype:options:](fetchmomentlists%28with_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type.
