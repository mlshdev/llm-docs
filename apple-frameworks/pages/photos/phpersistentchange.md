> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phpersistentchange](https://developer.apple.com/documentation/photos/phpersistentchange)

# PHPersistentChange (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a change in the Photos library, and allows for requesting local identifiers that identify the changes for a library object.

## Declaration

```swift
class PHPersistentChange
```

## Topics

### Getting the Change Token

- [changeToken](phpersistentchange/changetoken.md): An opaque object that represents the state of Photos library.
- [PHPersistentChangeToken](phpersistentchangetoken.md): An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.

### Getting the Change History

- [changeDetails(for:)](phpersistentchange/changedetails%28for_%29.md): Returns the change history that contains the local identifiers for object inserts, updates, and deletes.
- [PHPersistentObjectChangeDetails](phpersistentobjectchangedetails.md): An object that represents the local identifiers that change between requests using a change token.

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

# PHPersistentChange (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a change in the Photos library, and allows for requesting local identifiers that identify the changes for a library object.

## Declaration

```objectivec
@interface PHPersistentChange : NSObject
```

## Topics

### Getting the Change Token

- [changeToken](phpersistentchange/changetoken.md): An opaque object that represents the state of Photos library.
- [PHPersistentChangeToken](phpersistentchangetoken.md): An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.

### Getting the Change History

- [changeDetailsForObjectType:error:](phpersistentchange/changedetails%28for_%29.md): Returns the change history that contains the local identifiers for object inserts, updates, and deletes.
- [PHPersistentObjectChangeDetails](phpersistentobjectchangedetails.md): An object that represents the local identifiers that change between requests using a change token.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Performing Operations with Objects in a Fetch Request

- [enumerateChangesWithBlock:](https://developer.apple.com/documentation/photos/phpersistentchangefetchresult/enumeratechangeswithblock:): Executes the block you specify by using the objects in the fetch result.
