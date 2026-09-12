> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/manipulationcomponent/inputdevice](https://developer.apple.com/documentation/realitykit/manipulationcomponent/inputdevice)

# ManipulationComponent.InputDevice

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

Describes an input device like a hand or a trackpad.

## Declaration

```swift
struct InputDevice
```

## Topics

### Instance Properties

- [chirality](inputdevice/chirality-swift.property.md): The hand chirality (left or right) of this input device, or `nil` if this input device has no hand chirality.
- [kind](inputdevice/kind-swift.property.md): The kind of this input device.
- [pose](inputdevice/pose.md): The pose of this input device, or `nil` if this input device has no pose.

### Enumerations

- [ManipulationComponent.InputDevice.Chirality](inputdevice/chirality-swift.enum.md): Describes hand chirality (left or right) of an input device.
- [ManipulationComponent.InputDevice.Kind](inputdevice/kind-swift.enum.md): Describes the kind of an input device.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
