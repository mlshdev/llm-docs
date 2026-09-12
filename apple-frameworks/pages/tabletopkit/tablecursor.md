> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablecursor](https://developer.apple.com/documentation/tabletopkit/tablecursor)

# TableCursor

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A cursor conveys information about one equipment that is currently being controlled by an interaction.

## Declaration

```swift
struct TableCursor
```

## Topics

### Getting the associated interaction

- [interactionID](tablecursor/interactionid.md): The identifier of the interaction manipulating the equipment corresponding to this cursor.

### Getting the player performing the interaction

- [playerID](tablecursor/playerid.md): The player that owns the interaction.

### Getting information about the equipment in the interaction

- [controlledEquipmentPose](tablecursor/controlledequipmentpose.md): The identifier of the equipment and the pose of the equipment in table space. NOTE: the equipment pose returned here does not include the resting orientation, similarly to the `pose` and `initialPose`in `TabletopInteraction.Value`. This is unlike the `pose` returned in `TableVisualState`, which does include resting orientation.
- [hovering](tablecursor/hovering.md): The current destination for the equipment, if the interaction were to end now. `nil` if no destination is currently available.

### Getting the cursor identifier

- [id](tablecursor/id.md): The identifier of the cursor.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interactions

- [Simulating dice rolls as a component for your game](simulating-dice-rolls-as-a-component-for-your-game.md): Create a physically realistic dice game by adding interactive rolling and scoring.
- [TabletopInteraction](tabletopinteraction.md): A protocol for objects that manage the entire flow of players interacting with equipment.
- [TossableRepresentation](tossablerepresentation.md): An object that represents geometric shapes that the player can throw during gameplay, such as dice.
- [TableSnapshot](tablesnapshot.md): A snapshot of the current state of the table.
- [TableVisualState](tablevisualstate.md): A structure that represents the appearance of an object on the table.
- [TableCursorIdentifier](tablecursoridentifier.md): A unique identifier for cursors.
