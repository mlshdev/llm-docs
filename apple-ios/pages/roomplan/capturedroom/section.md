> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/section](https://developer.apple.com/documentation/roomplan/capturedroom/section)

# CapturedRoom.Section

**Framework:** RoomPlan  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that identifies a particular area in a captured room in relation to common types of room areas in a building.

## Declaration

```swift
struct Section
```

<a id="overview"></a>

## Overview

When RoomPlan recognizes a captured room as one of the common kinds of room areas, such as a living room, the framework adds an instance of this structure to the room’s [sections](sections.md) array.

The section instance provides:

- A label type for the common area ([label](section/label-swift.property.md)), such as  [CapturedRoom.Section.Label.livingRoom](section/label-swift.enum/livingroom.md)
- A center point ([center](section/center.md)), that generally locates the area within the room
- A story ([story](section/story.md)), that identifies a floor number for the area in the building

In a larger room, the framework may identify multiple types of areas, for example, a kitchen and a dining room. In that case, the `sections` array contains both, [CapturedRoom.Section.Label.kitchen](section/label-swift.enum/kitchen.md) and [CapturedRoom.Section.Label.diningRoom](section/label-swift.enum/diningroom.md), and their `center` points distinguish their individual locations within the room.

## Topics

### Creating a section

- [init(from:)](section/init%28from_%29.md): Creates a section by deserializing the given decoder.

### Describing a section

- [label](section/label-swift.property.md): A textual name for the section.
- [CapturedRoom.Section.Label](section/label-swift.enum.md): Textual names for one part of a larger structure.

### Locating a section

- [story](section/story.md): The story, floor number, or level on which the section resides in a structure.
- [center](section/center.md): The center position of a section.

### Serializing a section

- [encode(to:)](section/encode%28to_%29.md): Serializes a section to the specified encoder.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
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
- [CapturedRoom.Confidence](confidence.md): Levels of certainty in the classification of a particular detail in a scan.
- [version](version.md): A version number for the captured room.
