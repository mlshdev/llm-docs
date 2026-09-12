> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicetyperevision](https://developer.apple.com/documentation/matter/mtrdevicetyperevision)

# MTRDeviceTypeRevision (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
class MTRDeviceTypeRevision
```

## Topics

### Initializers

- [init(deviceTypeID:revision:)](mtrdevicetyperevision/init%28devicetypeid_revision_%29.md)
- [init(deviceTypeStruct:)](mtrdevicetyperevision/init%28devicetypestruct_%29.md): Initializes the receiver based on the values in the specified struct.

### Instance Properties

- [deviceTypeID](mtrdevicetyperevision/devicetypeid.md)
- [deviceTypeRevision](mtrdevicetyperevision/devicetyperevision.md)
- [typeInformation](mtrdevicetyperevision/typeinformation.md): Returns the MTRDeviceType corresponding to deviceTypeID, or nil if deviceTypeID does not represent a known device type.

### Default Implementations

- [MTRDeviceTypeRevision Implementations](mtrdevicetyperevision/mtrdevicetyperevision-implementations.md)

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
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MTRDeviceTypeRevision (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
@interface MTRDeviceTypeRevision : NSObject
```

## Topics

### Initializers

- [initWithDeviceTypeID:revision:](mtrdevicetyperevision/init%28devicetypeid_revision_%29.md)

### Instance Properties

- [deviceTypeID](mtrdevicetyperevision/devicetypeid.md)
- [deviceTypeRevision](mtrdevicetyperevision/devicetyperevision.md)
- [typeInformation](mtrdevicetyperevision/typeinformation.md): Returns the MTRDeviceType corresponding to deviceTypeID, or nil if deviceTypeID does not represent a known device type.

### Instance Methods

- [initWithDeviceTypeStruct:](mtrdevicetyperevision/init%28devicetypestruct_%29.md): Initializes the receiver based on the values in the specified struct.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
