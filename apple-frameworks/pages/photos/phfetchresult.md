> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresult](https://developer.apple.com/documentation/photos/phfetchresult)

# PHFetchResult (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An ordered list of assets or collections returned from a Photos fetch method.

## Declaration

```swift
class PHFetchResult<ObjectType> where ObjectType : AnyObject
```

## Mentioned In

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md)

<a id="overview"></a>

## Overview

When you use class methods on the [PHAsset](phasset.md), [PHCollection](phcollection.md), [PHAssetCollection](phassetcollection.md), and [PHCollectionList](phcollectionlist.md) classes to retrieve objects, Photos provides the resulting objects in a fetch result. You access the contents of a fetch result with the same methods and conventions used by the [NSArray](../foundation/nsarray.md) class. Unlike an [NSArray](../foundation/nsarray.md) object, however, a [PHFetchResult](phfetchresult.md) object dynamically loads its contents from the Photos library as needed, providing optimal performance even when handling a large number of results.

A fetch result provides thread-safe access to its contents. After a fetch, the fetch result’s [count](phfetchresult/count.md) value is constant, and all objects in the fetch result keep the same [localIdentifier](phobject/localidentifier.md) value. (To get updated content for a fetch, register a change observer with the shared [PHPhotoLibrary](phphotolibrary.md) object.)

A fetch result caches its contents, keeping a batch of objects around the most recently accessed index. Because objects outside of the batch are no longer cached, accessing these objects results in refetching those objects. This process can result in changes to values previously read from those objects.

## Topics

### Querying a Fetch Result

- [contains(\_:)](phfetchresult/contains%28__%29.md): Returns whether the specified object is present in the fetch result.
- [count](phfetchresult/count.md): The number of objects in the fetch result.
- [countOfAssets(with:)](phfetchresult/countofassets%28with_%29.md): Returns the number of assets in the fetch result of a specified type.
- [firstObject](phfetchresult/firstobject.md): The first object in the fetch result.
- [lastObject](phfetchresult/lastobject.md): The last object in the fetch result.
- [object(at:)](phfetchresult/object%28at_%29.md): Returns the object located at the specified index.
- [subscript(\_:)](phfetchresult/subscript%28__%29.md): Returns the object located at the specified index.
- [objects(at:)](phfetchresult/objects%28at_%29.md): Returns an array containing the objects in the fetch result at the indexes in the specified index set.

### Finding Objects in a Fetch Result

- [index(of:)](phfetchresult/index%28of_%29.md): Returns the lowest index whose corresponding object in the fetch result is equal to the specified object.
- [index(of:in:)](phfetchresult/index%28of_in_%29.md): Returns the lowest index within the specified range whose corresponding object in the fetch result is equal to the specified object.

### Performing Operations with Objects in a Fetch Result

- [enumerateObjects(at:options:using:)](phfetchresult/enumerateobjects%28at_options_using_%29.md): Executes the specified block using the objects in the fetch result at the specified indexes.
- [enumerateObjects(\_:)](phfetchresult/enumerateobjects%28__%29.md): Executes the specified block using each object in the fetch result, starting with the first object and continuing in order to the last object.
- [enumerateObjects(options:using:)](phfetchresult/enumerateobjects%28options_using_%29.md): Executes the specified block using each object in the fetch result.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Asset retrieval

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md): Get assets, asset collections, and collection lists matching a specified query.
- [PHAsset](phasset.md): A representation of an image, video, or Live Photo in the Photos library.
- [PHAssetCollection](phassetcollection.md): A representation of a Photos asset grouping, such as Moments, a user-created album, or a Smart Album.
- [PHCollection](phcollection.md): The abstract superclass for Photos asset collections and collection lists.
- [PHCollectionList](phcollectionlist.md): A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.
- [PHObject](phobject.md): The abstract superclass for Photos model objects, including assets and collections.
- [PHFetchOptions](phfetchoptions.md): A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.

# PHFetchResult (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An ordered list of assets or collections returned from a Photos fetch method.

## Declaration

```objectivec
@interface PHFetchResult : NSObject
```

## Mentioned In

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md)

<a id="overview"></a>

## Overview

When you use class methods on the [PHAsset](phasset.md), [PHCollection](phcollection.md), [PHAssetCollection](phassetcollection.md), and [PHCollectionList](phcollectionlist.md) classes to retrieve objects, Photos provides the resulting objects in a fetch result. You access the contents of a fetch result with the same methods and conventions used by the [NSArray](../foundation/nsarray.md) class. Unlike an [NSArray](../foundation/nsarray.md) object, however, a [PHFetchResult](phfetchresult.md) object dynamically loads its contents from the Photos library as needed, providing optimal performance even when handling a large number of results.

A fetch result provides thread-safe access to its contents. After a fetch, the fetch result’s [count](phfetchresult/count.md) value is constant, and all objects in the fetch result keep the same [localIdentifier](phobject/localidentifier.md) value. (To get updated content for a fetch, register a change observer with the shared [PHPhotoLibrary](phphotolibrary.md) object.)

A fetch result caches its contents, keeping a batch of objects around the most recently accessed index. Because objects outside of the batch are no longer cached, accessing these objects results in refetching those objects. This process can result in changes to values previously read from those objects.

## Topics

### Querying a Fetch Result

- [containsObject:](phfetchresult/contains%28__%29.md): Returns whether the specified object is present in the fetch result.
- [count](phfetchresult/count.md): The number of objects in the fetch result.
- [countOfAssetsWithMediaType:](phfetchresult/countofassets%28with_%29.md): Returns the number of assets in the fetch result of a specified type.
- [firstObject](phfetchresult/firstobject.md): The first object in the fetch result.
- [lastObject](phfetchresult/lastobject.md): The last object in the fetch result.
- [objectAtIndex:](phfetchresult/object%28at_%29.md): Returns the object located at the specified index.
- [objectAtIndexedSubscript:](phfetchresult/subscript%28__%29.md): Returns the object located at the specified index.
- [objectsAtIndexes:](phfetchresult/objects%28at_%29.md): Returns an array containing the objects in the fetch result at the indexes in the specified index set.

### Finding Objects in a Fetch Result

- [indexOfObject:](phfetchresult/index%28of_%29.md): Returns the lowest index whose corresponding object in the fetch result is equal to the specified object.
- [indexOfObject:inRange:](phfetchresult/index%28of_in_%29.md): Returns the lowest index within the specified range whose corresponding object in the fetch result is equal to the specified object.

### Performing Operations with Objects in a Fetch Result

- [enumerateObjectsAtIndexes:options:usingBlock:](phfetchresult/enumerateobjects%28at_options_using_%29.md): Executes the specified block using the objects in the fetch result at the specified indexes.
- [enumerateObjectsUsingBlock:](phfetchresult/enumerateobjects%28__%29.md): Executes the specified block using each object in the fetch result, starting with the first object and continuing in order to the last object.
- [enumerateObjectsWithOptions:usingBlock:](phfetchresult/enumerateobjects%28options_using_%29.md): Executes the specified block using each object in the fetch result.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)

## See Also

### Asset retrieval

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md): Get assets, asset collections, and collection lists matching a specified query.
- [PHAsset](phasset.md): A representation of an image, video, or Live Photo in the Photos library.
- [PHAssetCollection](phassetcollection.md): A representation of a Photos asset grouping, such as Moments, a user-created album, or a Smart Album.
- [PHCollection](phcollection.md): The abstract superclass for Photos asset collections and collection lists.
- [PHCollectionList](phcollectionlist.md): A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.
- [PHObject](phobject.md): The abstract superclass for Photos model objects, including assets and collections.
- [PHFetchOptions](phfetchoptions.md): A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.
