> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablevisualstate](https://developer.apple.com/documentation/tabletopkit/tablevisualstate)

# TableVisualState

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A structure that represents the appearance of an object on the table.

## Declaration

```swift
struct TableVisualState
```

## Topics

### Representing collision states

- [contacts](tablevisualstate/contacts.md): Returns all contacts for the current update of the physics simulation.
- [contacts(of:)](tablevisualstate/contacts%28of_%29.md): Returns all contacts for the current update of the physics simulation for a specified equipment type.
- [TableVisualState.Contact](tablevisualstate/contact.md): An object that represents the contact of a collision during a simulation of tossable equipment.

### Representing 2D states

- [TableVisualState.Point2D](tablevisualstate/point2d.md): An object that represents a point on the XZ plane.
- [TableVisualState.Pose2D](tablevisualstate/pose2d.md): An object that represents a 2D position and orientation on the XZ plane.

### Representing 3D states

- [TableVisualState.OrientedRect3D](tablevisualstate/orientedrect3d.md): An object that represents the position and orientation of a 3D rectangle.
- [bounds(for:)](tablevisualstate/bounds%28for_%29.md): Returns the current pose and extents of the bounding box for the given equipment. Returns `nil` if the equipment is not part of the game.
- [bounds(forEquipment:)](tablevisualstate/bounds%28forequipment_%29.md): Deprecated.
- [bounds(matching:)](tablevisualstate/bounds%28matching_%29.md)
- [goalBounds(forEquipment:)](tablevisualstate/goalbounds%28forequipment_%29.md): Deprecated.
- [goalBounds(matching:)](tablevisualstate/goalbounds%28matching_%29.md)
- [tableBounds](tablevisualstate/tablebounds.md)

### Representing seat states

- [pose(for:)](tablevisualstate/pose%28for_%29-50h4r.md): Returns the current pose for the given equipment. Returns `nil` if the equipment is not part of the game.
- [pose(for:)](tablevisualstate/pose%28for_%29-8pm0h.md): Returns the pose for the given seat. Returns `nil` if the seat is not part of the game.
- [pose(forSeat:)](tablevisualstate/pose%28forseat_%29.md): Deprecated.
- [pose(matching:)](tablevisualstate/pose%28matching_%29-6bo29.md)
- [pose(matching:)](tablevisualstate/pose%28matching_%29-8nqm2.md): Returns the current pose for the equipment matching the given ID. Returns `nil` if the equipment is not part of the game.

### Representing the goal

- [goalBounds(for:)](tablevisualstate/goalbounds%28for_%29.md): Returns the goal pose and extents of the bounding box for the given equipment. Returns `nil` if the equipment is not part of the game.
- [goalPose(for:)](tablevisualstate/goalpose%28for_%29.md): Returns the goal pose for the given equipment. Returns `nil` if the equipment is not part of the game.
- [goalPose(matching:)](tablevisualstate/goalpose%28matching_%29.md): Returns the goal pose for the equipment matching the given ID. Returns `nil` if the equipment is not part of the game.

## See Also

### Interactions

- [Simulating dice rolls as a component for your game](simulating-dice-rolls-as-a-component-for-your-game.md): Create a physically realistic dice game by adding interactive rolling and scoring.
- [TabletopInteraction](tabletopinteraction.md): A protocol for objects that manage the entire flow of players interacting with equipment.
- [TossableRepresentation](tossablerepresentation.md): An object that represents geometric shapes that the player can throw during gameplay, such as dice.
- [TableSnapshot](tablesnapshot.md): A snapshot of the current state of the table.
- [TableCursor](tablecursor.md): A cursor conveys information about one equipment that is currently being controlled by an interaction.
- [TableCursorIdentifier](tablecursoridentifier.md): A unique identifier for cursors.
