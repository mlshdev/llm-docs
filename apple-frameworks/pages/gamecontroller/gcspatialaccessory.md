> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcspatialaccessory](https://developer.apple.com/documentation/gamecontroller/gcspatialaccessory)

# GCSpatialAccessory (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** visionOS 27.0+

## Declaration

```swift
class GCSpatialAccessory
```

## Topics

### Structures

- [GCSpatialAccessory.DidConnectMessage](gcspatialaccessory/didconnectmessage.md): A message that posts after a spatial accessory connects to the device.
- [GCSpatialAccessory.DidDisconnectMessage](gcspatialaccessory/diddisconnectmessage.md): A message that posts after a spatial accessory disconnects from the device.

### Instance Properties

- [haptics](gcspatialaccessory/haptics.md): Gets the haptics for the device, if supported.
- [input](gcspatialaccessory/input.md): Gets the input profile for the device.

### Instance Methods

- [conforms(to:)](gcspatialaccessory/conforms%28to_%29.md): Tests the conformance of the receiver to the provided device type.

### Type Properties

- [spatialAccessories](gcspatialaccessory/spatialaccessories.md): Get the collection of spatial accessories currently connected to the system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GCDevice](gcdevice.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# GCSpatialAccessory (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** visionOS 27.0+

## Declaration

```objectivec
@interface GCSpatialAccessory : NSObject
```

## Topics

### Instance Properties

- [haptics](gcspatialaccessory/haptics.md): Gets the haptics for the device, if supported.
- [input](gcspatialaccessory/input.md): Gets the input profile for the device.

### Instance Methods

- [conformsToDeviceType:](gcspatialaccessory/conforms%28to_%29.md): Tests the conformance of the receiver to the provided device type.

### Type Properties

- [spatialAccessories](gcspatialaccessory/spatialaccessories.md): Get the collection of spatial accessories currently connected to the system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [GCDevice](gcdevice.md)
