> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/chairbacktype](https://developer.apple.com/documentation/roomplan/chairbacktype)

# ChairBackType

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Types of chair back the framework identifies in a captured room.

## Declaration

```swift
enum ChairBackType
```

<a id="overview"></a>

## Overview

When the framework observes a chair in the physical environment during a scan, it chooses a type among these options that best matches the look of the chair’s back. The framework adds that instance of this enum to the [attributes](capturedroom/object/attributes.md) array for the object (see [objects](capturedroom/objects.md)) that represents the chair in the captured room.

## Topics

### Choosing a chair back type

- [ChairBackType.existing](chairbacktype/existing.md): A type of chair that has a back.
- [ChairBackType.missing](chairbacktype/missing.md): A type of chair that has no back.

## Relationships

### Conforms To

- [CapturedRoomAttribute](capturedroomattribute.md)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing chairs

- [ChairType](chairtype.md): Types of chair that the framework identifies in a captured room.
- [ChairArmType](chairarmtype.md): Types of armchair the framework identifies in a captured room.
- [ChairLegType](chairlegtype.md): Types of chair legs the framework identifies in a captured room.
