> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/chairtype](https://developer.apple.com/documentation/roomplan/chairtype)

# ChairType

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Types of chair that the framework identifies in a captured room.

## Declaration

```swift
enum ChairType
```

<a id="overview"></a>

## Overview

When the framework observes a chair in the physical environment during a scan, it chooses a type among these options that best matches the chair’s look. The framework adds that instance of this enum to the [attributes](capturedroom/object/attributes.md) array for the object (see [objects](capturedroom/objects.md)) that represents the chair in the captured room.

## Topics

### Choosing a chair type

- [ChairType.dining](chairtype/dining.md): A type of chair that accompanies a dining table.
- [ChairType.stool](chairtype/stool.md): A type of chair that resembles a stool.
- [ChairType.swivel](chairtype/swivel.md): A type of chair that swivels.
- [ChairType.unidentified](chairtype/unidentified.md): An uncategorized chair type.

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

- [ChairArmType](chairarmtype.md): Types of armchair the framework identifies in a captured room.
- [ChairLegType](chairlegtype.md): Types of chair legs the framework identifies in a captured room.
- [ChairBackType](chairbacktype.md): Types of chair back the framework identifies in a captured room.
