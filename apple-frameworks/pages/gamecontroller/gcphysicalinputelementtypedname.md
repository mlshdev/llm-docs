> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputelementtypedname](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputelementtypedname)

# GCPhysicalInputElementTypedName

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS

A type-safe name for accessing elements of a physical input element collection.

## Declaration

```swift
protocol GCPhysicalInputElementTypedName : Hashable, RawRepresentable, Sendable where Self.RawValue == String
```

## Topics

### Associated type

- [PhysicalInputElement](gcphysicalinputelementtypedname/physicalinputelement.md): A placeholder for the type that adopts this protocol.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [GCAxisElementName](gcaxiselementname-swift.struct.md)
- [GCButtonElementName](gcbuttonelementname-swift.struct.md)
- [GCDirectionPadElementName](gcdirectionpadelementname-swift.struct.md)
- [GCPhysicalInputElementName](gcphysicalinputelementname-swift.struct.md)
- [GCSwitchElementName](gcswitchelementname-swift.struct.md)

## See Also

### Element names

- [GCPhysicalInputElementName](gcphysicalinputelementname-swift.struct.md): The name of a physical input element.
- [GCButtonElementName](gcbuttonelementname-swift.struct.md): The names of the button elements.
- [GCAxisElementName](gcaxiselementname-swift.struct.md): The names for the elements that provide values along an axis.
- [GCSwitchElementName](gcswitchelementname-swift.struct.md): The name for an element that represents a switch.
- [GCDirectionPadElementName](gcdirectionpadelementname-swift.struct.md): The names for directional pad elements.
- [Extended gamepad input names](extended-gamepad-input-names.md): Constants for names of extended gamepad elements.
- [DualShock controller input names](dualshock-controller-input-names.md): Constants for names of DualShock 4 elements.
- [Xbox controller input names](xbox-controller-input-names.md): Constants for names of Xbox elements.
- [Micro gamepad input names](micro-gamepad-input-names.md): Constants for names of micro gamepad elements.
- [Directional Gamepad Input Names](directional-gamepad-input-names.md): Constants for names of directional pad elements.
