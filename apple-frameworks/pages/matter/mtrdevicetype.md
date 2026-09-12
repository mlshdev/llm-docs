> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicetype](https://developer.apple.com/documentation/matter/mtrdevicetype)

# MTRDeviceType (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Meta-data about a device type defined in the Matter specification.

## Declaration

```swift
class MTRDeviceType
```

## Topics

### Initializers

- [init(forID:)](mtrdevicetype/init%28forid_%29.md): Returns an MTRDeviceType for the given ID, if the ID is known. Returns nil for unknown IDs.

### Instance Properties

- [id](mtrdevicetype/id.md): The identifier of the device type (32-bit unsigned integer).
- [isUtility](mtrdevicetype/isutility.md): Returns whether this is a utility device type.
- [name](mtrdevicetype/name.md): Returns the name of the device type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRDeviceType (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Meta-data about a device type defined in the Matter specification.

## Declaration

```objectivec
@interface MTRDeviceType : NSObject
```

## Topics

### Instance Properties

- [id](mtrdevicetype/id.md): The identifier of the device type (32-bit unsigned integer).
- [isUtility](mtrdevicetype/isutility.md): Returns whether this is a utility device type.
- [name](mtrdevicetype/name.md): Returns the name of the device type.

### Type Methods

- [deviceTypeForID:](mtrdevicetype/init%28forid_%29.md): Returns an MTRDeviceType for the given ID, if the ID is known. Returns nil for unknown IDs.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
