> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/sofatype](https://developer.apple.com/documentation/roomplan/sofatype)

# SofaType

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Types of sofa the framework identifies in a captured room.

## Declaration

```swift
enum SofaType
```

<a id="overview"></a>

## Overview

When the framework observes a sofa in the physical environment during a scan, it chooses a type among these options that best matches the sofa’s look. The framework adds that instance of this enum to the [attributes](capturedroom/object/attributes.md) array for the object (see [objects](capturedroom/objects.md)) that represents the sofa in the captured room.

## Topics

### Choosing a sofa type

- [SofaType.rectangular](sofatype/rectangular.md): A sofa shape that resembles a rectangle.
- [SofaType.singleSeat](sofatype/singleseat.md): A sofa that resembles a loveseat.
- [SofaType.lShaped](sofatype/lshaped.md): A sofa shape that resembles the letter L.
- [SofaType.lShapedExtension](sofatype/lshapedextension.md): The short side of the L-shape sofa.
- [SofaType.unidentified](sofatype/unidentified.md): An uncategorized sofa shape.

## Relationships

### Conforms To

- [CapturedRoomAttribute](capturedroomattribute.md)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
