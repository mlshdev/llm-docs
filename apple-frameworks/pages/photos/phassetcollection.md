> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollection](https://developer.apple.com/documentation/photos/phassetcollection)

# PHAssetCollection (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A representation of a Photos asset grouping, such as Moments, a user-created album, or a Smart Album.

## Declaration

```swift
class PHAssetCollection
```

## Mentioned In

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md)
- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md)

<a id="overview"></a>

## Overview

In the Photos framework, collection objects (including asset collections) do not directly reference their member objects, and there are no other objects that directly reference collection objects. To retrieve the members of an asset collection, fetch them with a [PHAsset](phasset.md) class method such as [fetchAssets(in:options:)](phasset/fetchassets%28in_options_%29.md). To find asset collections, use one of the methods listed in the Fetching Asset Collections group below.

> **Important**

>  Accessing or modifying the Photos library requires explicit authorization from the user. The first time you call one of the methods listed in the Fetching Asset Collections group, Photos automatically prompts the user for authorization. (Alternatively, you can use the [PHPhotoLibrary](phphotolibrary.md)  [requestAuthorization(\_:)](phphotolibrary/requestauthorization%28__%29.md) method to prompt the user at a time of your choosing.)
>
> Your app’s `Info.plist` file must provide a value for the [NSPhotoLibraryUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW17) key that explains to the user why your app is requesting Photos access. Apps linked on or after iOS 10.0 will crash if this key is not present.

Like assets and collection lists, asset collections are immutable. To create, rename, or delete asset collections, or to add, remove, or rearrange members in an asset collection, create a [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md) object within a photo library change block. For details on using change requests and change blocks to update the photo library, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Fetching Asset Collections

- [fetchAssetCollections(withLocalIdentifiers:options:)](phassetcollection/fetchassetcollections%28withlocalidentifiers_options_%29.md): Retrieves asset collections with the specified unique identifiers.
- [fetchAssetCollections(with:subtype:options:)](phassetcollection/fetchassetcollections%28with_subtype_options_%29.md): Retrieves asset collections of the specified type and subtype.
- [fetchAssetCollectionsContaining(\_:with:options:)](phassetcollection/fetchassetcollectionscontaining%28__with_options_%29.md): Retrieves asset collections of the specified type containing the specified asset.
- [fetchAssetCollections(withALAssetGroupURLs:options:)](phassetcollection/fetchassetcollections%28withalassetgroupurls_options_%29.md): Deprecated. Retrieves asset collections using URLs provided by the Assets Library framework.
- [fetchMoments(inMomentList:options:)](phassetcollection/fetchmoments%28inmomentlist_options_%29.md): Deprecated. Retrieves asset collections in the specified moment list collection.
- [fetchMoments(with:)](phassetcollection/fetchmoments%28with_%29.md): Deprecated. Retrieves asset collections corresponding to moments seen in the Photos app.

### Reading Asset Collection Metadata

- [assetCollectionType](phassetcollection/assetcollectiontype.md): The type of the asset collection, such as an album or a moment.
- [PHAssetCollectionType](phassetcollectiontype.md): Major distinctions between kinds of asset collections, used by the [assetCollectionType](phassetcollection/assetcollectiontype.md) property and the [fetchAssetCollectionsContaining(\_:with:options:)](phassetcollection/fetchassetcollectionscontaining%28__with_options_%29.md) and [fetchAssetCollections(with:subtype:options:)](phassetcollection/fetchassetcollections%28with_subtype_options_%29.md) methods.
- [assetCollectionSubtype](phassetcollection/assetcollectionsubtype.md): The subtype of the asset collection.
- [PHAssetCollectionSubtype](phassetcollectionsubtype.md): Minor distinctions between kinds of asset collections, used by the [assetCollectionSubtype](phassetcollection/assetcollectionsubtype.md) property and the [fetchAssetCollections(with:subtype:options:)](phassetcollection/fetchassetcollections%28with_subtype_options_%29.md) method.
- [estimatedAssetCount](phassetcollection/estimatedassetcount.md): The estimated number of assets in the asset collection.
- [startDate](phassetcollection/startdate.md): The earliest creation date among all assets in the asset collection.
- [endDate](phassetcollection/enddate.md): The latest creation date among all assets in the asset collection.
- [approximateLocation](phassetcollection/approximatelocation.md): A location representing those of all assets in the collection.
- [localizedLocationNames](phassetcollection/localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).

### Creating Temporary Asset Collections

- [transientAssetCollection(with:title:)](phassetcollection/transientassetcollection%28with_title_%29.md): Creates a temporary asset collection containing the specified assets.
- [transientAssetCollection(withAssetFetchResult:title:)](phassetcollection/transientassetcollection%28withassetfetchresult_title_%29.md): Creates a temporary asset collection containing the assets from the specified fetch result.

## Relationships

### Inherits From

- [PHCollection](phcollection.md)

### Inherited By

- [PHProject](phproject.md)

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
- [PHCollection](phcollection.md): The abstract superclass for Photos asset collections and collection lists.
- [PHCollectionList](phcollectionlist.md): A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.
- [PHObject](phobject.md): The abstract superclass for Photos model objects, including assets and collections.
- [PHFetchResult](phfetchresult.md): An ordered list of assets or collections returned from a Photos fetch method.
- [PHFetchOptions](phfetchoptions.md): A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.

# PHAssetCollection (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A representation of a Photos asset grouping, such as Moments, a user-created album, or a Smart Album.

## Declaration

```objectivec
@interface PHAssetCollection : PHCollection
```

## Mentioned In

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md)
- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md)

<a id="overview"></a>

## Overview

In the Photos framework, collection objects (including asset collections) do not directly reference their member objects, and there are no other objects that directly reference collection objects. To retrieve the members of an asset collection, fetch them with a [PHAsset](phasset.md) class method such as [fetchAssetsInAssetCollection:options:](phasset/fetchassets%28in_options_%29.md). To find asset collections, use one of the methods listed in the Fetching Asset Collections group below.

> **Important**

>  Accessing or modifying the Photos library requires explicit authorization from the user. The first time you call one of the methods listed in the Fetching Asset Collections group, Photos automatically prompts the user for authorization. (Alternatively, you can use the [PHPhotoLibrary](phphotolibrary.md)  [requestAuthorization:](phphotolibrary/requestauthorization%28__%29.md) method to prompt the user at a time of your choosing.)
>
> Your app’s `Info.plist` file must provide a value for the [NSPhotoLibraryUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW17) key that explains to the user why your app is requesting Photos access. Apps linked on or after iOS 10.0 will crash if this key is not present.

Like assets and collection lists, asset collections are immutable. To create, rename, or delete asset collections, or to add, remove, or rearrange members in an asset collection, create a [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md) object within a photo library change block. For details on using change requests and change blocks to update the photo library, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Fetching Asset Collections

- [fetchAssetCollectionsWithLocalIdentifiers:options:](phassetcollection/fetchassetcollections%28withlocalidentifiers_options_%29.md): Retrieves asset collections with the specified unique identifiers.
- [fetchAssetCollectionsWithType:subtype:options:](phassetcollection/fetchassetcollections%28with_subtype_options_%29.md): Retrieves asset collections of the specified type and subtype.
- [fetchAssetCollectionsContainingAsset:withType:options:](phassetcollection/fetchassetcollectionscontaining%28__with_options_%29.md): Retrieves asset collections of the specified type containing the specified asset.
- [fetchAssetCollectionsWithALAssetGroupURLs:options:](phassetcollection/fetchassetcollections%28withalassetgroupurls_options_%29.md): Deprecated. Retrieves asset collections using URLs provided by the Assets Library framework.
- [fetchMomentsInMomentList:options:](phassetcollection/fetchmoments%28inmomentlist_options_%29.md): Deprecated. Retrieves asset collections in the specified moment list collection.
- [fetchMomentsWithOptions:](phassetcollection/fetchmoments%28with_%29.md): Deprecated. Retrieves asset collections corresponding to moments seen in the Photos app.

### Reading Asset Collection Metadata

- [assetCollectionType](phassetcollection/assetcollectiontype.md): The type of the asset collection, such as an album or a moment.
- [PHAssetCollectionType](phassetcollectiontype.md): Major distinctions between kinds of asset collections, used by the [assetCollectionType](phassetcollection/assetcollectiontype.md) property and the [fetchAssetCollectionsContainingAsset:withType:options:](phassetcollection/fetchassetcollectionscontaining%28__with_options_%29.md) and [fetchAssetCollectionsWithType:subtype:options:](phassetcollection/fetchassetcollections%28with_subtype_options_%29.md) methods.
- [assetCollectionSubtype](phassetcollection/assetcollectionsubtype.md): The subtype of the asset collection.
- [PHAssetCollectionSubtype](phassetcollectionsubtype.md): Minor distinctions between kinds of asset collections, used by the [assetCollectionSubtype](phassetcollection/assetcollectionsubtype.md) property and the [fetchAssetCollectionsWithType:subtype:options:](phassetcollection/fetchassetcollections%28with_subtype_options_%29.md) method.
- [estimatedAssetCount](phassetcollection/estimatedassetcount.md): The estimated number of assets in the asset collection.
- [startDate](phassetcollection/startdate.md): The earliest creation date among all assets in the asset collection.
- [endDate](phassetcollection/enddate.md): The latest creation date among all assets in the asset collection.
- [approximateLocation](phassetcollection/approximatelocation.md): A location representing those of all assets in the collection.
- [localizedLocationNames](phassetcollection/localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).

### Creating Temporary Asset Collections

- [transientAssetCollectionWithAssets:title:](phassetcollection/transientassetcollection%28with_title_%29.md): Creates a temporary asset collection containing the specified assets.
- [transientAssetCollectionWithAssetFetchResult:title:](phassetcollection/transientassetcollection%28withassetfetchresult_title_%29.md): Creates a temporary asset collection containing the assets from the specified fetch result.

## Relationships

### Inherits From

- [PHCollection](phcollection.md)

### Inherited By

- [PHProject](phproject.md)

## See Also

### Asset retrieval

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md): Get assets, asset collections, and collection lists matching a specified query.
- [PHAsset](phasset.md): A representation of an image, video, or Live Photo in the Photos library.
- [PHCollection](phcollection.md): The abstract superclass for Photos asset collections and collection lists.
- [PHCollectionList](phcollectionlist.md): A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.
- [PHObject](phobject.md): The abstract superclass for Photos model objects, including assets and collections.
- [PHFetchResult](phfetchresult.md): An ordered list of assets or collections returned from a Photos fetch method.
- [PHFetchOptions](phfetchoptions.md): A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.
