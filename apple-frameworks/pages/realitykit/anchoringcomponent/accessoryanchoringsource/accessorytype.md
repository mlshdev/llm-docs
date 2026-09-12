> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/accessoryanchoringsource/accessorytype](https://developer.apple.com/documentation/realitykit/anchoringcomponent/accessoryanchoringsource/accessorytype)

# AnchoringComponent.AccessoryAnchoringSource.AccessoryType

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 27.0+

Describes the type of accessory to track.

## Declaration

```swift
struct AccessoryType
```

## Topics

### Creating an accessory type

- [init(identifier:chirality:)](accessorytype/init%28identifier_chirality_%29.md): Creates a custom accessory type with a uniform type identifier and chirality.

### Accessing predefined types

- [eitherController](accessorytype/eithercontroller.md): Either left or right game controller.
- [leftController](accessorytype/leftcontroller.md): A left-handed game controller.
- [rightController](accessorytype/rightcontroller.md): A right-handed game controller.
- [stylus](accessorytype/stylus.md): A stylus device.

### Accessing chirality

- [chirality](accessorytype/chirality.md): The chirality of the accessory, if applicable.

### Instance Properties

- [identifier](accessorytype/identifier.md): The uniform type identifier for the accessory.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
