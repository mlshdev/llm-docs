> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollection](https://developer.apple.com/documentation/photos/phcollection)

# PHCollection (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The abstract superclass for Photos asset collections and collection lists.

## Declaration

```swift
class PHCollection
```

<a id="overview"></a>

## Overview

You do not create or work with instances of this class directly. Instead, use one of its two concrete subclasses, [PHAssetCollection](phassetcollection.md) or [PHCollectionList](phcollectionlist.md).

- A [PHAssetCollection](phassetcollection.md) object represents a collection of photo or video assets, such as an album, moment, or Shared Photo Stream.
- A [PHCollectionList](phcollectionlist.md) object represents a collection that contains other collections, such as a a folder containing albums or the set of all moments in a calendar year.

> **Important**

>  Accessing or modifying the Photos library requires explicit authorization from the user. The first time you call one of the methods listed in the Fetching Collections group, Photos automatically prompts the user for authorization. (Alternatively, you can use the [PHPhotoLibrary](phphotolibrary.md) [requestAuthorization(\_:)](phphotolibrary/requestauthorization%28__%29.md) method to prompt the user at a time of your choosing.)
>
> Your app’s `Info.plist` file must provide a value for the [NSPhotoLibraryUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW17) key that explains to the user why your app is requesting Photos access. Apps linked on or after iOS 10.0 will crash if this key is not present.

## Topics

### Fetching Collections

- [fetchCollections(in:options:)](phcollection/fetchcollections%28in_options_%29.md): Retrieves collections from the specified collection list.
- [fetchTopLevelUserCollections(with:)](phcollection/fetchtoplevelusercollections%28with_%29.md): Retrieves collections from the root of the photo library’s hierarchy of user-created albums and folders.

### Reading Collection Metadata

- [localizedTitle](phcollection/localizedtitle.md): The localized name of the collection.

### Determining Collection Capabilities

- [canContainAssets](phcollection/cancontainassets.md): A Boolean value indicating whether the collection can contain assets.
- [canContainCollections](phcollection/cancontaincollections.md): A Boolean value indicating whether the collection can contain other collections.
- [canPerform(\_:)](phcollection/canperform%28__%29.md): Returns whether the collection supports the specified editing operation.
- [PHCollectionEditOperation](phcollectioneditoperation.md): Values identifying possible actions that a collection can support, used by the [canPerform(\_:)](phcollection/canperform%28__%29.md) method.

### Instance Properties

- [modificationDate](phcollection/modificationdate.md): The last date at which this collection was modified.

## Relationships

### Inherits From

- [PHObject](phobject.md)

### Inherited By

- [PHAssetCollection](phassetcollection.md)
- [PHCollectionList](phcollectionlist.md)

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
- [PHCollectionList](phcollectionlist.md): A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.
- [PHObject](phobject.md): The abstract superclass for Photos model objects, including assets and collections.
- [PHFetchResult](phfetchresult.md): An ordered list of assets or collections returned from a Photos fetch method.
- [PHFetchOptions](phfetchoptions.md): A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.

# PHCollection (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The abstract superclass for Photos asset collections and collection lists.

## Declaration

```objectivec
@interface PHCollection : PHObject
```

<a id="overview"></a>

## Overview

You do not create or work with instances of this class directly. Instead, use one of its two concrete subclasses, [PHAssetCollection](phassetcollection.md) or [PHCollectionList](phcollectionlist.md).

- A [PHAssetCollection](phassetcollection.md) object represents a collection of photo or video assets, such as an album, moment, or Shared Photo Stream.
- A [PHCollectionList](phcollectionlist.md) object represents a collection that contains other collections, such as a a folder containing albums or the set of all moments in a calendar year.

> **Important**

>  Accessing or modifying the Photos library requires explicit authorization from the user. The first time you call one of the methods listed in the Fetching Collections group, Photos automatically prompts the user for authorization. (Alternatively, you can use the [PHPhotoLibrary](phphotolibrary.md) [requestAuthorization:](phphotolibrary/requestauthorization%28__%29.md) method to prompt the user at a time of your choosing.)
>
> Your app’s `Info.plist` file must provide a value for the [NSPhotoLibraryUsageDescription](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW17) key that explains to the user why your app is requesting Photos access. Apps linked on or after iOS 10.0 will crash if this key is not present.

## Topics

### Fetching Collections

- [fetchCollectionsInCollectionList:options:](phcollection/fetchcollections%28in_options_%29.md): Retrieves collections from the specified collection list.
- [fetchTopLevelUserCollectionsWithOptions:](phcollection/fetchtoplevelusercollections%28with_%29.md): Retrieves collections from the root of the photo library’s hierarchy of user-created albums and folders.

### Reading Collection Metadata

- [localizedTitle](phcollection/localizedtitle.md): The localized name of the collection.

### Determining Collection Capabilities

- [canContainAssets](phcollection/cancontainassets.md): A Boolean value indicating whether the collection can contain assets.
- [canContainCollections](phcollection/cancontaincollections.md): A Boolean value indicating whether the collection can contain other collections.
- [canPerformEditOperation:](phcollection/canperform%28__%29.md): Returns whether the collection supports the specified editing operation.
- [PHCollectionEditOperation](phcollectioneditoperation.md): Values identifying possible actions that a collection can support, used by the [canPerformEditOperation:](phcollection/canperform%28__%29.md) method.

### Instance Properties

- [modificationDate](phcollection/modificationdate.md): The last date at which this collection was modified.

## Relationships

### Inherits From

- [PHObject](phobject.md)

### Inherited By

- [PHAssetCollection](phassetcollection.md)
- [PHCollectionList](phcollectionlist.md)

## See Also

### Asset retrieval

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md): Get assets, asset collections, and collection lists matching a specified query.
- [PHAsset](phasset.md): A representation of an image, video, or Live Photo in the Photos library.
- [PHAssetCollection](phassetcollection.md): A representation of a Photos asset grouping, such as Moments, a user-created album, or a Smart Album.
- [PHCollectionList](phcollectionlist.md): A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.
- [PHObject](phobject.md): The abstract superclass for Photos model objects, including assets and collections.
- [PHFetchResult](phfetchresult.md): An ordered list of assets or collections returned from a Photos fetch method.
- [PHFetchOptions](phfetchoptions.md): A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.
