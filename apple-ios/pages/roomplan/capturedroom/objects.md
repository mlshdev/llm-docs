> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/objects](https://developer.apple.com/documentation/roomplan/capturedroom/objects)

# objects

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An array of objects that the framework identifies during a scan.

## Declaration

```swift
var objects: [CapturedRoom.Object] { get }
```

## See Also

### Inspecting room details

- [identifier](identifier.md): A unique alphanumeric value that the framework assigns the room.
- [story](story.md): The story, floor number, or level on which the captured room resides within a larger structure.
- [floors](floors.md): An array of floors that the framework identifies during a scan.
- [CapturedRoom.Surface](surface.md): A 2D area in a room that the framework identifies as a surface.
- [doors](doors.md): An array of doors that the framework identifies during a scan.
- [CapturedRoom.Object](object.md): A 3D area in a room that the framework identifies as an object.
- [openings](openings.md): An array of openings that the framework identifies during a scan.
- [walls](walls.md): An array of walls that the framework identifies during a scan.
- [windows](windows.md): An array of windows that the framework identifies during a scan.
- [sections](sections.md): One or more room types that the framework observes in the room.
- [CapturedRoom.Section](section.md): An object that identifies a particular area in a captured room in relation to common types of room areas in a building.
- [CapturedRoom.Confidence](confidence.md): Levels of certainty in the classification of a particular detail in a scan.
- [version](version.md): A version number for the captured room.
