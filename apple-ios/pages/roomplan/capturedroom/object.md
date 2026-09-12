> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/object](https://developer.apple.com/documentation/roomplan/capturedroom/object)

# CapturedRoom.Object

**Framework:** RoomPlan  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A 3D area in a room that the framework identifies as an object.

## Declaration

```swift
struct Object
```

<a id="overview"></a>

## Overview

A captured room contains an array of this type for the objects ([objects](objects.md)) it identifies.

## Topics

### Creating an object

- [init(from:)](object/init%28from_%29.md): Creates an object by deserializing the specified decoder.

### Identifying an object

- [identifier](object/identifier.md): A unique alphanumeric value that the framework assigns the object.
- [parentIdentifier](object/parentidentifier.md): A unique alphanumeric value that identifies the object’s parent object or surface.
- [category](object/category-swift.property.md): A classification that the captured room assigns the object.
- [CapturedRoom.Object.Category](object/category-swift.enum.md): Classifications of an object in a captured room.
- [confidence](object/confidence.md): A level of certainty in the object’s category.

### Positioning and sizing an object

- [transform](object/transform.md): A matrix that defines the object’s position and orientation in the room.
- [dimensions](object/dimensions.md): A bounding box sized to the object’s extremities.
- [story](object/story.md): The floor number or level on which the object resides.

### Describing an object

- [attributes](object/attributes.md): A collection of details that describe a particular object in the room.
- [attribute(of:)](object/attribute%28of_%29.md): Checks an object for specific attribute types.

### Serializing an object

- [encode(to:)](object/encode%28to_%29.md): Serializes an object to the specified encoder.

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
- [openings](openings.md): An array of openings that the framework identifies during a scan.
- [walls](walls.md): An array of walls that the framework identifies during a scan.
- [windows](windows.md): An array of windows that the framework identifies during a scan.
- [sections](sections.md): One or more room types that the framework observes in the room.
- [CapturedRoom.Section](section.md): An object that identifies a particular area in a captured room in relation to common types of room areas in a building.
- [CapturedRoom.Confidence](confidence.md): Levels of certainty in the classification of a particular detail in a scan.
- [version](version.md): A version number for the captured room.
