> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phobject](https://developer.apple.com/documentation/photos/phobject)

# PHObject (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The abstract superclass for Photos model objects, including assets and collections.

## Declaration

```swift
class PHObject
```

<a id="overview"></a>

## Overview

You do not create or use instances of this class directly. Instead, work with instances of its concrete subclasses—[PHAsset](phasset.md), [PHAssetCollection](phassetcollection.md), [PHCollectionList](phcollectionlist.md), and [PHObjectPlaceholder](phobjectplaceholder.md).

Because the [PHObject](phobject.md) class implements the [isEqual(\_:)](../objectivec/nsobjectprotocol/isequal%28__%29.md) and [hash](../objectivec/nsobjectprotocol/hash.md) methods in terms of its [localIdentifier](phobject/localidentifier.md) property, you can use techniques that depend on these methods to keep track of asset and collection objects.

## Topics

### Identifying an Object

- [localIdentifier](phobject/localidentifier.md): A unique string that persistently identifies the object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHAsset](phasset.md)
- [PHAssetResourceUploadJob](phassetresourceuploadjob.md)
- [PHCollection](phcollection.md)
- [PHObjectPlaceholder](phobjectplaceholder.md)

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
- [PHCollectionList](phcollectionlist.md): A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.
- [PHFetchResult](phfetchresult.md): An ordered list of assets or collections returned from a Photos fetch method.
- [PHFetchOptions](phfetchoptions.md): A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.

# PHObject (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The abstract superclass for Photos model objects, including assets and collections.

## Declaration

```objectivec
@interface PHObject : NSObject
```

<a id="overview"></a>

## Overview

You do not create or use instances of this class directly. Instead, work with instances of its concrete subclasses—[PHAsset](phasset.md), [PHAssetCollection](phassetcollection.md), [PHCollectionList](phcollectionlist.md), and [PHObjectPlaceholder](phobjectplaceholder.md).

Because the [PHObject](phobject.md) class implements the [isEqual:](../objectivec/nsobjectprotocol/isequal%28__%29.md) and [hash](../objectivec/nsobjectprotocol/hash.md) methods in terms of its [localIdentifier](phobject/localidentifier.md) property, you can use techniques that depend on these methods to keep track of asset and collection objects.

## Topics

### Identifying an Object

- [localIdentifier](phobject/localidentifier.md): A unique string that persistently identifies the object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHAsset](phasset.md)
- [PHAssetResourceUploadJob](phassetresourceuploadjob.md)
- [PHCollection](phcollection.md)
- [PHObjectPlaceholder](phobjectplaceholder.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Asset retrieval

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md): Get assets, asset collections, and collection lists matching a specified query.
- [PHAsset](phasset.md): A representation of an image, video, or Live Photo in the Photos library.
- [PHAssetCollection](phassetcollection.md): A representation of a Photos asset grouping, such as Moments, a user-created album, or a Smart Album.
- [PHCollection](phcollection.md): The abstract superclass for Photos asset collections and collection lists.
- [PHCollectionList](phcollectionlist.md): A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.
- [PHFetchResult](phfetchresult.md): An ordered list of assets or collections returned from a Photos fetch method.
- [PHFetchOptions](phfetchoptions.md): A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.
