> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/storagetype](https://developer.apple.com/documentation/roomplan/storagetype)

# StorageType

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Types of storage area that the framework identifies in a captured room.

## Declaration

```swift
enum StorageType
```

<a id="overview"></a>

## Overview

When the framework observes a storage area in the physical environment, it chooses a type among these options that best matches the type of storage. The framework adds that instance of this enum to the [attributes](capturedroom/object/attributes.md) array for the object (see [objects](capturedroom/objects.md)) in the captured room that represents the storage in the captured room.

## Topics

### Choosing a storage area type

- [StorageType.cabinet](storagetype/cabinet.md): An enclosed storage area.
- [StorageType.shelf](storagetype/shelf.md): An open, wall-located storage area.

## Relationships

### Conforms To

- [CapturedRoomAttribute](capturedroomattribute.md)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
