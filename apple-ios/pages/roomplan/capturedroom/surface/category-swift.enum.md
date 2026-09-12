> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/surface/category-swift.enum](https://developer.apple.com/documentation/roomplan/capturedroom/surface/category-swift.enum)

# CapturedRoom.Surface.Category

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Classifications of a surface in a captured room.

## Declaration

```swift
enum Category
```

<a id="overview"></a>

## Overview

Each [CapturedRoom.Surface](../surface.md) instance in a captured room’s surface arrays ([doors](../doors.md), [openings](../openings.md), [walls](../walls.md), and [windows](../windows.md)) reflects a classification ([category](category-swift.property.md)) of this type.

## Topics

### Determining the surface category

- [CapturedRoom.Surface.Category.floor](category-swift.enum/floor.md): A category for a surface that represents a floor.
- [CapturedRoom.Surface.Category.door(isOpen:)](category-swift.enum/door%28isopen_%29.md): A category for a surface that represents a door.
- [CapturedRoom.Surface.Category.opening](category-swift.enum/opening.md): A category for a surface that represents an opening.
- [CapturedRoom.Surface.Category.wall](category-swift.enum/wall.md): A category for a surface that represents a wall.
- [CapturedRoom.Surface.Category.window](category-swift.enum/window.md): A category for a surface that represents a window.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying a surface

- [identifier](identifier.md): A unique alphanumeric value that the framework assigns the surface.
- [parentIdentifier](parentidentifier.md): A unique alphanumeric value that identifies a surface’s parent surface.
- [category](category-swift.property.md): A classification that the captured room assigns the surface.
- [confidence](confidence.md): A level of certainty in the surface’s category.
