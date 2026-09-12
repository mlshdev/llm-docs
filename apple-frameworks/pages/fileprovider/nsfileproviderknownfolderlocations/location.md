> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderknownfolderlocations/location](https://developer.apple.com/documentation/fileprovider/nsfileproviderknownfolderlocations/location)

# NSFileProviderKnownFolderLocations.Location (Swift)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** macOS 15.0+

## Declaration

```swift
class Location
```

## Topics

### Initializers

- [init(existingItemIdentifier:)](location/init%28existingitemidentifier_%29.md): Initialize a location with the item identifier of a folder that already exists on the server.
- [init(parentItemIdentifier:filename:)](location/init%28parentitemidentifier_filename_%29.md): Initialize a location with the filename of the folder in a specified parent.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Identifying known-folder locations

- [desktopLocation](desktoplocation.md)
- [documentsLocation](documentslocation.md)

# NSFileProviderKnownFolderLocation (Objective-C)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** macOS 15.0+

## Declaration

```objectivec
@interface NSFileProviderKnownFolderLocation : NSObject
```

## Topics

### Instance Methods

- [initWithExistingItemIdentifier:](location/init%28existingitemidentifier_%29.md): Initialize a location with the item identifier of a folder that already exists on the server.
- [initWithParentItemIdentifier:filename:](location/init%28parentitemidentifier_filename_%29.md): Initialize a location with the filename of the folder in a specified parent.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Identifying known-folder locations

- [desktopLocation](desktoplocation.md)
- [documentsLocation](documentslocation.md)
