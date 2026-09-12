> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedstructure/sections](https://developer.apple.com/documentation/roomplan/capturedstructure/sections)

# sections

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

One or more room types that the framework identifies in the structure.

## Declaration

```swift
var sections: [CapturedStructure.Section] { get }
```

## See Also

### Inspecting structure details

- [identifier](identifier.md): A unique alphanumeric value that the framework assigns the structure.
- [rooms](rooms.md): An array of all the captured rooms in the structure.
- [floors](floors.md): An array of all the floors in the structure.
- [CapturedStructure.Surface](surface.md): The type a captured structure assigns to surfaces.
- [doors](doors.md): An array of all the doors in the structure.
- [objects](objects.md): An array of all the objects in the structure.
- [CapturedStructure.Object](object.md): The type a captured structure assigns to objects.
- [openings](openings.md): An array of all the openings in the structure.
- [walls](walls.md): An array of all the walls in the structure.
- [windows](windows.md): An array of all the windows in the structure.
- [CapturedStructure.Section](section.md): The type a captured structure assigns to distinct room areas.
- [version](version.md): A version number for the captured structure.
