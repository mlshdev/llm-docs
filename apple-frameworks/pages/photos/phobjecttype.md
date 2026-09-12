> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phobjecttype](https://developer.apple.com/documentation/photos/phobjecttype)

# PHObjectType (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Identifies the type of objects in a change request.

## Declaration

```swift
enum PHObjectType
```

## Topics

### Constants

- [PHObjectType.asset](phobjecttype/asset.md): A type that represents an asset.
- [PHObjectType.assetCollection](phobjecttype/assetcollection.md): A type that represents a collection of assets.
- [PHObjectType.collectionList](phobjecttype/collectionlist.md): A type that represents a collection list.

### Initializers

- [init(rawValue:)](phobjecttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Object Type

- [objectType](phpersistentobjectchangedetails/objecttype.md): The model type the change represents.

# PHObjectType (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Identifies the type of objects in a change request.

## Declaration

```objectivec
enum PHObjectType : NSInteger;
```

## Topics

### Constants

- [PHObjectTypeAsset](phobjecttype/asset.md): A type that represents an asset.
- [PHObjectTypeAssetCollection](phobjecttype/assetcollection.md): A type that represents a collection of assets.
- [PHObjectTypeCollectionList](phobjecttype/collectionlist.md): A type that represents a collection list.

## See Also

### Getting the Object Type

- [objectType](phpersistentobjectchangedetails/objecttype.md): The model type the change represents.
