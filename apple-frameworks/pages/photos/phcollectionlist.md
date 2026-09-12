> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlist](https://developer.apple.com/documentation/photos/phcollectionlist)

# PHCollectionList (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.

## Declaration

```swift
class PHCollectionList
```

## Mentioned In

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md)
- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md)

<a id="overview"></a>

## Overview

In the Photos framework, collection objects (including asset collections) do not directly reference their member objects, and there are no other objects that directly reference collection objects. To retrieve the members of a collection list, fetch them with a [PHCollection](phcollection.md) class method such as [fetchCollections(in:options:)](phcollection/fetchcollections%28in_options_%29.md). To find objects at the root of the collection list hierarchy (such as album folders with no parent folders), use the [fetchTopLevelUserCollections(with:)](phcollection/fetchtoplevelusercollections%28with_%29.md) method.

> **Important**

>  Accessing or modifying the Photos library requires explicit authorization from the user. The first time you call one of the methods listed in the Fetching Collection Lists group, Photos automatically prompts the user for authorization. (Alternatively, you can use the [PHPhotoLibrary](phphotolibrary.md) [requestAuthorization(\_:)](phphotolibrary/requestauthorization%28__%29.md) method to prompt the user at a time of your choosing.)
>
> Your app’s `Info.plist` file must provide a value for the [NSPhotoLibraryUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW17) key that explains to the user why your app is requesting Photos access. Apps linked on or after iOS 10.0 will crash if this key is not present.

Like assets and asset collections, collection lists are immutable. To create, rename, or delete collection lists, or to add, remove, or rearrange members in a collection list, create a [PHCollectionListChangeRequest](phcollectionlistchangerequest.md) object within a photo library change block. For details on using change requests and change blocks to update the photo library, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Fetching Collection Lists

- [fetchCollectionListsContaining(\_:options:)](phcollectionlist/fetchcollectionlistscontaining%28__options_%29.md): Retrieves collection lists that contain the specified collection.
- [fetchCollectionLists(withLocalIdentifiers:options:)](phcollectionlist/fetchcollectionlists%28withlocalidentifiers_options_%29.md): Retrieves collection lists with the specified local-device-specific unique identifiers.
- [fetchCollectionLists(with:subtype:options:)](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md): Retrieves collection lists of the specified type.
- [fetchMomentLists(with:containingMoment:options:)](phcollectionlist/fetchmomentlists%28with_containingmoment_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type containing the specified moment.
- [fetchMomentLists(with:options:)](phcollectionlist/fetchmomentlists%28with_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type.

### Reading Collection List Metadata

- [collectionListType](phcollectionlist/collectionlisttype.md): The type of asset collection group that the collection list represents.
- [PHCollectionListType](phcollectionlisttype.md): Major distinctions between kinds of collection list, used by the [collectionListType](phcollectionlist/collectionlisttype.md) property and [fetchCollectionLists(with:subtype:options:)](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md) method.
- [collectionListSubtype](phcollectionlist/collectionlistsubtype.md): The type of asset collection grouping the collection list represents.
- [PHCollectionListSubtype](phcollectionlistsubtype.md): Major distinctions between kinds of collection list, used by the [collectionListSubtype](phcollectionlist/collectionlistsubtype.md) property and [fetchCollectionLists(with:subtype:options:)](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md), [fetchMomentLists(with:containingMoment:options:)](phcollectionlist/fetchmomentlists%28with_containingmoment_options_%29.md), and [fetchMomentLists(with:options:)](phcollectionlist/fetchmomentlists%28with_options_%29.md) methods.
- [startDate](phcollectionlist/startdate.md): The earliest creation date among all assets in the collection list.
- [endDate](phcollectionlist/enddate.md): The latest creation date among all assets in the collection list.
- [localizedLocationNames](phcollectionlist/localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).

### Creating Temporary Collection Lists

- [transientCollectionList(with:title:)](phcollectionlist/transientcollectionlist%28with_title_%29.md): Creates a temporary collection list that contains the specified asset collections.
- [transientCollectionList(withCollectionsFetchResult:title:)](phcollectionlist/transientcollectionlist%28withcollectionsfetchresult_title_%29.md): Creates a temporary collection list containing the asset collections in the specified fetch result.

## Relationships

### Inherits From

- [PHCollection](phcollection.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Asset retrieval

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md): Get assets, asset collections, and collection lists matching a specified query.
- [PHAsset](phasset.md): A representation of an image, video, or Live Photo in the Photos library.
- [PHAssetCollection](phassetcollection.md): A representation of a Photos asset grouping, such as Moments, a user-created album, or a Smart Album.
- [PHCollection](phcollection.md): The abstract superclass for Photos asset collections and collection lists.
- [PHObject](phobject.md): The abstract superclass for Photos model objects, including assets and collections.
- [PHFetchResult](phfetchresult.md): An ordered list of assets or collections returned from a Photos fetch method.
- [PHFetchOptions](phfetchoptions.md): A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.

# PHCollectionList (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.

## Declaration

```objectivec
@interface PHCollectionList : PHCollection
```

## Mentioned In

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md)
- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md)

<a id="overview"></a>

## Overview

In the Photos framework, collection objects (including asset collections) do not directly reference their member objects, and there are no other objects that directly reference collection objects. To retrieve the members of a collection list, fetch them with a [PHCollection](phcollection.md) class method such as [fetchCollectionsInCollectionList:options:](phcollection/fetchcollections%28in_options_%29.md). To find objects at the root of the collection list hierarchy (such as album folders with no parent folders), use the [fetchTopLevelUserCollectionsWithOptions:](phcollection/fetchtoplevelusercollections%28with_%29.md) method.

> **Important**

>  Accessing or modifying the Photos library requires explicit authorization from the user. The first time you call one of the methods listed in the Fetching Collection Lists group, Photos automatically prompts the user for authorization. (Alternatively, you can use the [PHPhotoLibrary](phphotolibrary.md) [requestAuthorization:](phphotolibrary/requestauthorization%28__%29.md) method to prompt the user at a time of your choosing.)
>
> Your app’s `Info.plist` file must provide a value for the [NSPhotoLibraryUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW17) key that explains to the user why your app is requesting Photos access. Apps linked on or after iOS 10.0 will crash if this key is not present.

Like assets and asset collections, collection lists are immutable. To create, rename, or delete collection lists, or to add, remove, or rearrange members in a collection list, create a [PHCollectionListChangeRequest](phcollectionlistchangerequest.md) object within a photo library change block. For details on using change requests and change blocks to update the photo library, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Fetching Collection Lists

- [fetchCollectionListsContainingCollection:options:](phcollectionlist/fetchcollectionlistscontaining%28__options_%29.md): Retrieves collection lists that contain the specified collection.
- [fetchCollectionListsWithLocalIdentifiers:options:](phcollectionlist/fetchcollectionlists%28withlocalidentifiers_options_%29.md): Retrieves collection lists with the specified local-device-specific unique identifiers.
- [fetchCollectionListsWithType:subtype:options:](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md): Retrieves collection lists of the specified type.
- [fetchMomentListsWithSubtype:containingMoment:options:](phcollectionlist/fetchmomentlists%28with_containingmoment_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type containing the specified moment.
- [fetchMomentListsWithSubtype:options:](phcollectionlist/fetchmomentlists%28with_options_%29.md): Deprecated. Retrieves collection lists of the specified moment list type.

### Reading Collection List Metadata

- [collectionListType](phcollectionlist/collectionlisttype.md): The type of asset collection group that the collection list represents.
- [PHCollectionListType](phcollectionlisttype.md): Major distinctions between kinds of collection list, used by the [collectionListType](phcollectionlist/collectionlisttype.md) property and [fetchCollectionListsWithType:subtype:options:](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md) method.
- [collectionListSubtype](phcollectionlist/collectionlistsubtype.md): The type of asset collection grouping the collection list represents.
- [PHCollectionListSubtype](phcollectionlistsubtype.md): Major distinctions between kinds of collection list, used by the [collectionListSubtype](phcollectionlist/collectionlistsubtype.md) property and [fetchCollectionListsWithType:subtype:options:](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md), [fetchMomentListsWithSubtype:containingMoment:options:](phcollectionlist/fetchmomentlists%28with_containingmoment_options_%29.md), and [fetchMomentListsWithSubtype:options:](phcollectionlist/fetchmomentlists%28with_options_%29.md) methods.
- [startDate](phcollectionlist/startdate.md): The earliest creation date among all assets in the collection list.
- [endDate](phcollectionlist/enddate.md): The latest creation date among all assets in the collection list.
- [localizedLocationNames](phcollectionlist/localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).

### Creating Temporary Collection Lists

- [transientCollectionListWithCollections:title:](phcollectionlist/transientcollectionlist%28with_title_%29.md): Creates a temporary collection list that contains the specified asset collections.
- [transientCollectionListWithCollectionsFetchResult:title:](phcollectionlist/transientcollectionlist%28withcollectionsfetchresult_title_%29.md): Creates a temporary collection list containing the asset collections in the specified fetch result.

## Relationships

### Inherits From

- [PHCollection](phcollection.md)

## See Also

### Asset retrieval

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md): Get assets, asset collections, and collection lists matching a specified query.
- [PHAsset](phasset.md): A representation of an image, video, or Live Photo in the Photos library.
- [PHAssetCollection](phassetcollection.md): A representation of a Photos asset grouping, such as Moments, a user-created album, or a Smart Album.
- [PHCollection](phcollection.md): The abstract superclass for Photos asset collections and collection lists.
- [PHObject](phobject.md): The abstract superclass for Photos model objects, including assets and collections.
- [PHFetchResult](phfetchresult.md): An ordered list of assets or collections returned from a Photos fetch method.
- [PHFetchOptions](phfetchoptions.md): A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.
