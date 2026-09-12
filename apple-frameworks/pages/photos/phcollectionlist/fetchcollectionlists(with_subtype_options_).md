> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlist/fetchcollectionlists(with:subtype:options:)](https://developer.apple.com/documentation/photos/phcollectionlist/fetchcollectionlists(with:subtype:options:))

# fetchCollectionLists(with:subtype:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves collection lists of the specified type.

## Declaration

```swift
class func fetchCollectionLists(with collectionListType: PHCollectionListType, subtype: PHCollectionListSubtype, options: PHFetchOptions?) -> PHFetchResult<PHCollectionList>
```

## Parameters

- `collectionListType`: A type of collection list. See [PHCollectionListType](../phcollectionlisttype.md).
- `subtype`: A subtype of collection list. See [PHCollectionListSubtype](../phcollectionlistsubtype.md).
- `options`: Options that specify a filter predicate and sort order for the fetched collection lists, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHCollectionList](../phcollectionlist.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

By default, the returned [PHFetchResult](../phfetchresult.md) object contains all collection lists with the specified type and subtype. To retrieve a more specific set of collection lists, provide a [PHFetchOptions](../phfetchoptions.md) object containing a filter predicate.

## See Also

### Fetching Collection Lists

- [fetchCollectionListsContaining(\_:options:)](fetchcollectionlistscontaining%28__options_%29.md): Retrieves collection lists that contain the specified collection.
- [fetchCollectionLists(withLocalIdentifiers:options:)](fetchcollectionlists%28withlocalidentifiers_options_%29.md): Retrieves collection lists with the specified local-device-specific unique identifiers.
- [fetchMomentLists(with:containingMoment:options:)](fetchmomentlists%28with_containingmoment_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type containing the specified moment.
- [fetchMomentLists(with:options:)](fetchmomentlists%28with_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type.

# fetchCollectionListsWithType:subtype:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves collection lists of the specified type.

## Declaration

```objectivec
+ (PHFetchResult<PHCollectionList *> *) fetchCollectionListsWithType:(PHCollectionListType) collectionListType subtype:(PHCollectionListSubtype) subtype options:(PHFetchOptions *) options;
```

## Parameters

- `collectionListType`: A type of collection list. See [PHCollectionListType](../phcollectionlisttype.md).
- `subtype`: A subtype of collection list. See [PHCollectionListSubtype](../phcollectionlistsubtype.md).
- `options`: Options that specify a filter predicate and sort order for the fetched collection lists, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHCollectionList](../phcollectionlist.md) objects, or an empty fetch result if no objects match the request.

<a id="Discussion"></a>

## Discussion

By default, the returned [PHFetchResult](../phfetchresult.md) object contains all collection lists with the specified type and subtype. To retrieve a more specific set of collection lists, provide a [PHFetchOptions](../phfetchoptions.md) object containing a filter predicate.

## See Also

### Fetching Collection Lists

- [fetchCollectionListsContainingCollection:options:](fetchcollectionlistscontaining%28__options_%29.md): Retrieves collection lists that contain the specified collection.
- [fetchCollectionListsWithLocalIdentifiers:options:](fetchcollectionlists%28withlocalidentifiers_options_%29.md): Retrieves collection lists with the specified local-device-specific unique identifiers.
- [fetchMomentListsWithSubtype:containingMoment:options:](fetchmomentlists%28with_containingmoment_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type containing the specified moment.
- [fetchMomentListsWithSubtype:options:](fetchmomentlists%28with_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type.
