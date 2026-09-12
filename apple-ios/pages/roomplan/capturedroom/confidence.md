> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/confidence](https://developer.apple.com/documentation/roomplan/capturedroom/confidence)

# CapturedRoom.Confidence

**Framework:** RoomPlan  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Levels of certainty in the classification of a particular detail in a scan.

## Declaration

```swift
enum Confidence
```

<a id="overview"></a>

## Overview

The framework chooses a level of certainty in its assessment of particular room features, such as:

- The [confidence](surface/confidence.md) in a [category](surface/category-swift.property.md) that the captured room assigns its surfaces, such as [doors](doors.md), [openings](openings.md), [walls](walls.md), [windows](windows.md).
- The [confidence](object/confidence.md) in a [category](object/category-swift.property.md) that the captured room assigns its [objects](objects.md).

## Topics

### Assessing a confidence value

- [CapturedRoom.Confidence.high](confidence/high.md): A confidence value that represents a high level of certainty.
- [CapturedRoom.Confidence.medium](confidence/medium.md): A confidence value that represents a medium level of certainty.
- [CapturedRoom.Confidence.low](confidence/low.md): A confidence value that represents a low level of certainty.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting room details

- [identifier](identifier.md): A unique alphanumeric value that the framework assigns the room.
- [story](story.md): The story, floor number, or level on which the captured room resides within a larger structure.
- [floors](floors.md): An array of floors that the framework identifies during a scan.
- [CapturedRoom.Surface](surface.md): A 2D area in a room that the framework identifies as a surface.
- [doors](doors.md): An array of doors that the framework identifies during a scan.
- [objects](objects.md): An array of objects that the framework identifies during a scan.
- [CapturedRoom.Object](object.md): A 3D area in a room that the framework identifies as an object.
- [openings](openings.md): An array of openings that the framework identifies during a scan.
- [walls](walls.md): An array of walls that the framework identifies during a scan.
- [windows](windows.md): An array of windows that the framework identifies during a scan.
- [sections](sections.md): One or more room types that the framework observes in the room.
- [CapturedRoom.Section](section.md): An object that identifies a particular area in a captured room in relation to common types of room areas in a building.
- [version](version.md): A version number for the captured room.
