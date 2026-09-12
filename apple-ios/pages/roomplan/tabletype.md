> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/tabletype](https://developer.apple.com/documentation/roomplan/tabletype)

# TableType

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Types of table the framework identifies in a captured room.

## Declaration

```swift
enum TableType
```

<a id="overview"></a>

## Overview

When the framework observes a table in the physical environment during a scan, it chooses a type among these options that best matches the table’s look. The framework adds that instance of this enum to the [attributes](capturedroom/object/attributes.md) array for the object (see [objects](capturedroom/objects.md)) that represents the table in the captured room.

## Topics

### Choosing a chair type

- [TableType.dining](tabletype/dining.md): A table top for the purpose of dining.
- [TableType.coffee](tabletype/coffee.md): A table top that resembles a coffee table.
- [TableType.unidentified](tabletype/unidentified.md): An uncategorized table top.

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

### Describing tables

- [TableShapeType](tableshapetype.md): Different table shapes that the framework identifies in a captured room.
