> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlist/fetchcollectionlists(withlocalidentifiers:options:)](https://developer.apple.com/documentation/photos/phcollectionlist/fetchcollectionlists(withlocalidentifiers:options:))

# fetchCollectionLists(withLocalIdentifiers:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves collection lists with the specified local-device-specific unique identifiers.

## Declaration

```swift
class func fetchCollectionLists(withLocalIdentifiers identifiers: [String], options: PHFetchOptions?) -> PHFetchResult<PHCollectionList>
```

## Parameters

- `identifiers`: An array of `NSString` objects, each the [localIdentifier](../phobject/localidentifier.md) string of a collection list.
- `options`: Options that specify a filter predicate and sort order for the fetched collection lists, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHCollectionList](../phcollectionlist.md) objects, or an empty fetch result if no objects match the request.

## See Also

### Fetching Collection Lists

- [fetchCollectionListsContaining(\_:options:)](fetchcollectionlistscontaining%28__options_%29.md): Retrieves collection lists that contain the specified collection.
- [fetchCollectionLists(with:subtype:options:)](fetchcollectionlists%28with_subtype_options_%29.md): Retrieves collection lists of the specified type.
- [fetchMomentLists(with:containingMoment:options:)](fetchmomentlists%28with_containingmoment_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type containing the specified moment.
- [fetchMomentLists(with:options:)](fetchmomentlists%28with_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type.

# fetchCollectionListsWithLocalIdentifiers:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Retrieves collection lists with the specified local-device-specific unique identifiers.

## Declaration

```objectivec
+ (PHFetchResult<PHCollectionList *> *) fetchCollectionListsWithLocalIdentifiers:(NSArray<NSString *> *) identifiers options:(PHFetchOptions *) options;
```

## Parameters

- `identifiers`: An array of `NSString` objects, each the [localIdentifier](../phobject/localidentifier.md) string of a collection list.
- `options`: Options that specify a filter predicate and sort order for the fetched collection lists, or `nil` to use default options. For details, see [PHFetchOptions](../phfetchoptions.md).

<a id="return-value"></a>

## Return Value

A fetch result that contains the requested [PHCollectionList](../phcollectionlist.md) objects, or an empty fetch result if no objects match the request.

## See Also

### Fetching Collection Lists

- [fetchCollectionListsContainingCollection:options:](fetchcollectionlistscontaining%28__options_%29.md): Retrieves collection lists that contain the specified collection.
- [fetchCollectionListsWithType:subtype:options:](fetchcollectionlists%28with_subtype_options_%29.md): Retrieves collection lists of the specified type.
- [fetchMomentListsWithSubtype:containingMoment:options:](fetchmomentlists%28with_containingmoment_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type containing the specified moment.
- [fetchMomentListsWithSubtype:options:](fetchmomentlists%28with_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type.
