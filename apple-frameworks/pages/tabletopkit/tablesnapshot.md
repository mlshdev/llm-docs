> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablesnapshot](https://developer.apple.com/documentation/tabletopkit/tablesnapshot)

# TableSnapshot

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A snapshot of the current state of the table.

## Declaration

```swift
struct TableSnapshot
```

## Topics

### Getting the table entity

- [tableEntity](tablesnapshot/tableentity.md)

### Getting information on seats

- [turn](tablesnapshot/turn.md)
- [seats](tablesnapshot/seats.md)
- [seatIDs](tablesnapshot/seatids.md)
- [seat(of:for:)](tablesnapshot/seat%28of_for_%29.md)
- [seat(of:matching:)](tablesnapshot/seat%28of_matching_%29.md)
- [seats(of:)](tablesnapshot/seats%28of_%29.md)
- [state(for:)](tablesnapshot/state%28for_%29.md)
- [state(matching:)](tablesnapshot/state%28matching_%29-ear2.md)
- [entity(forSeat:)](tablesnapshot/entity%28forseat_%29.md)
- [entity(matching:)](tablesnapshot/entity%28matching_%29-7ps7s.md)

### Getting cursors

- [cursors](tablesnapshot/cursors.md)
- [cursor(matching:)](tablesnapshot/cursor%28matching_%29.md)
- [cursor(controlling:)](tablesnapshot/cursor%28controlling_%29.md): Returns the cursor corresponding to an interaction controlling the given equipment ID, or `nil` if no such cursors could be found.
- [cursors(forPlayer:)](tablesnapshot/cursors%28forplayer_%29.md): Deprecated.
- [cursors(hovering:)](tablesnapshot/cursors%28hovering_%29.md)
- [cursors(controlling:)](tablesnapshot/cursors%28controlling_%29.md): Finds and returns all the cursors corresponding to an interactions controlling any of the given equipment IDs. Duplicate equipment IDs are ignored.
- [cursors(for:)](tablesnapshot/cursors%28for_%29.md): Finds and returns all the cursors corresponding to an interactions owned by the given player.
- [cursors(matching:)](tablesnapshot/cursors%28matching_%29.md): Finds and returns all the cursors corresponding to a given interaction.

### Getting information on equipment

- [equipment(of:)](tablesnapshot/equipment%28of_%29.md)
- [equipment(of:childrenOf:)](tablesnapshot/equipment%28of_childrenof_%29-4z4s1.md)
- [equipment(of:childrenOf:)](tablesnapshot/equipment%28of_childrenof_%29-5w137.md)
- [equipment(of:matching:)](tablesnapshot/equipment%28of_matching_%29-7ai0c.md)
- [equipment(of:matching:)](tablesnapshot/equipment%28of_matching_%29-8qve2.md)
- [equipmentIDs()](tablesnapshot/equipmentids%28%29.md)
- [equipmentIDs(childrenOf:)](tablesnapshot/equipmentids%28childrenof_%29-432sk.md)
- [equipmentIDs(childrenOf:)](tablesnapshot/equipmentids%28childrenof_%29-f1sp.md)
- [state(matching:)](tablesnapshot/state%28matching_%29-u35k.md)
- [entity(matching:)](tablesnapshot/entity%28matching_%29-vb9w.md)
- [entity(forEquipment:)](tablesnapshot/entity%28forequipment_%29.md)

### Getting score counters

- [counters](tablesnapshot/counters.md)
- [counter(matching:)](tablesnapshot/counter%28matching_%29.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Interactions

- [Simulating dice rolls as a component for your game](simulating-dice-rolls-as-a-component-for-your-game.md): Create a physically realistic dice game by adding interactive rolling and scoring.
- [TabletopInteraction](tabletopinteraction.md): A protocol for objects that manage the entire flow of players interacting with equipment.
- [TossableRepresentation](tossablerepresentation.md): An object that represents geometric shapes that the player can throw during gameplay, such as dice.
- [TableVisualState](tablevisualstate.md): A structure that represents the appearance of an object on the table.
- [TableCursor](tablecursor.md): A cursor conveys information about one equipment that is currently being controlled by an interaction.
- [TableCursorIdentifier](tablecursoridentifier.md): A unique identifier for cursors.
