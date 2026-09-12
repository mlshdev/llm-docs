> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phpersistentobjectchangedetails](https://developer.apple.com/documentation/photos/phpersistentobjectchangedetails)

# PHPersistentObjectChangeDetails (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents the local identifiers that change between requests using a change token.

## Declaration

```swift
class PHPersistentObjectChangeDetails
```

## Topics

### Getting the Object Type

- [objectType](phpersistentobjectchangedetails/objecttype.md): The model type the change represents.
- [PHObjectType](phobjecttype.md): Identifies the type of objects in a change request.

### Getting the Change Details

- [insertedLocalIdentifiers](phpersistentobjectchangedetails/insertedlocalidentifiers.md): The local identifiers the system inserts since the change token you specify.
- [updatedLocalIdentifiers](phpersistentobjectchangedetails/updatedlocalidentifiers.md): The local identifiers the system updates since the change token you specify.
- [deletedLocalIdentifiers](phpersistentobjectchangedetails/deletedlocalidentifiers.md): The local identifiers the system deletes since the change token you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Change History

- [changeDetails(for:)](phpersistentchange/changedetails%28for_%29.md): Returns the change history that contains the local identifiers for object inserts, updates, and deletes.

# PHPersistentObjectChangeDetails (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents the local identifiers that change between requests using a change token.

## Declaration

```objectivec
@interface PHPersistentObjectChangeDetails : NSObject
```

## Topics

### Getting the Object Type

- [objectType](phpersistentobjectchangedetails/objecttype.md): The model type the change represents.
- [PHObjectType](phobjecttype.md): Identifies the type of objects in a change request.

### Getting the Change Details

- [insertedLocalIdentifiers](phpersistentobjectchangedetails/insertedlocalidentifiers.md): The local identifiers the system inserts since the change token you specify.
- [updatedLocalIdentifiers](phpersistentobjectchangedetails/updatedlocalidentifiers.md): The local identifiers the system updates since the change token you specify.
- [deletedLocalIdentifiers](phpersistentobjectchangedetails/deletedlocalidentifiers.md): The local identifiers the system deletes since the change token you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Getting the Change History

- [changeDetailsForObjectType:error:](phpersistentchange/changedetails%28for_%29.md): Returns the change history that contains the local identifiers for object inserts, updates, and deletes.
