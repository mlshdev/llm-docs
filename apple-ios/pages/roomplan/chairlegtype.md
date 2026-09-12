> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/chairlegtype](https://developer.apple.com/documentation/roomplan/chairlegtype)

# ChairLegType

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Types of chair legs the framework identifies in a captured room.

## Declaration

```swift
enum ChairLegType
```

<a id="overview"></a>

## Overview

When the framework observes a chair in the physical environment during a scan, it chooses a type among these options that best matches the look of the chair’s legs. The framework adds that instance of this enum to the [attributes](capturedroom/object/attributes.md) array for the object (see [objects](capturedroom/objects.md)) that represents the chair in the captured room.

## Topics

### Choosing a chair leg type

- [ChairLegType.four](chairlegtype/four.md): A type of chair that has four legs.
- [ChairLegType.star](chairlegtype/star.md): A chair that rests on a bar that rises from a base, such as an office chair.
- [ChairLegType.unidentified](chairlegtype/unidentified.md): An uncategorized chair leg type.

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
- [ChairBackType](chairbacktype.md): Types of chair back the framework identifies in a captured room.
