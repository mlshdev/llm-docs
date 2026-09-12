> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopaction](https://developer.apple.com/documentation/tabletopkit/tabletopaction)

# TabletopAction

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A protocol for objects that describe an action in a tabletop game.

## Declaration

```swift
protocol TabletopAction
```

## Topics

### Getting the player

- [playerID](tabletopaction/playerid.md): The player performing the action.

### Getting game-specific information

- [context](tabletopaction/context.md): An integer value that your game uses.

### Moving equipment

- [moveEquipment(\_:childOf:order:pose:context:)](tabletopaction/moveequipment%28__childof_order_pose_context_%29.md): Conforms when `Self` is `MoveEquipmentAction`.
- [moveEquipment(matching:childOf:order:pose:context:)](tabletopaction/moveequipment%28matching_childof_order_pose_context_%29.md): Conforms when `Self` is `MoveEquipmentAction`.

### Changing equipment state properties

- [updateEquipment(\_:faceUp:seatControl:pose:boundingBox:context:)](tabletopaction/updateequipment%28__faceup_seatcontrol_pose_boundingbox_context_%29.md): Conforms when `Self` is `UpdateEquipmentAction<CardState>`.
- [updateEquipment(\_:rawValue:seatControl:pose:boundingBox:context:)](tabletopaction/updateequipment%28__rawvalue_seatcontrol_pose_boundingbox_context_%29.md): Conforms when `Self` is `UpdateEquipmentAction<RawValueState>`.
- [updateEquipment(\_:seatControl:pose:boundingBox:context:)](tabletopaction/updateequipment%28__seatcontrol_pose_boundingbox_context_%29.md): Conforms when `Self` is `UpdateEquipmentAction<BaseEquipmentState>`.
- [updateEquipment(\_:state:context:)](tabletopaction/updateequipment%28__state_context_%29-6kawf.md): Conforms when `Self` is `UpdateEquipmentAction<CardState>`.
- [updateEquipment(\_:state:context:)](tabletopaction/updateequipment%28__state_context_%29-88v3m.md): Conforms when `Self` is `UpdateEquipmentAction<DieState>`.
- [updateEquipment(\_:state:context:)](tabletopaction/updateequipment%28__state_context_%29-8tmnn.md): Conforms when `Self` is `UpdateEquipmentAction<RawValueState>`.
- [updateEquipment(\_:state:context:)](tabletopaction/updateequipment%28__state_context_%29-j62v.md): Conforms when `Self` is `UpdateEquipmentAction<BaseEquipmentState>`.
- [updateEquipment(\_:value:seatControl:pose:boundingBox:context:)](tabletopaction/updateequipment%28__value_seatcontrol_pose_boundingbox_context_%29.md): Conforms when `Self` is `UpdateEquipmentAction<DieState>`.

### Taking turns

- [setTurn(forSeat:context:)](tabletopaction/setturn%28forseat_context_%29.md): Conforms when `Self` is `SetTurnAction`.
- [setTurn(forSeats:context:)](tabletopaction/setturn%28forseats_context_%29-3msxi.md): Conforms when `Self` is `SetTurnAction`.
- [setTurn(forSeats:context:)](tabletopaction/setturn%28forseats_context_%29-4sgng.md): Conforms when `Self` is `SetTurnAction`.
- [setTurn(matching:context:)](tabletopaction/setturn%28matching_context_%29-6mq07.md): Conforms when `Self` is `SetTurnAction`.
- [setTurn(matching:context:)](tabletopaction/setturn%28matching_context_%29-88ymv.md): Conforms when `Self` is `SetTurnAction`.

### Keeping score

- [updateCounter(\_:context:)](tabletopaction/updatecounter%28__context_%29.md): Conforms when `Self` is `UpdateCounterAction`.
- [updateCounter(matching:value:context:)](tabletopaction/updatecounter%28matching_value_context_%29.md): Conforms when `Self` is `UpdateCounterAction`.

### Creating bookmarks

- [createBookmark(\_:context:)](tabletopaction/createbookmark%28__context_%29.md): Conforms when `Self` is `CreateBookmarkAction`.
- [createBookmark(id:context:)](tabletopaction/createbookmark%28id_context_%29.md): Conforms when `Self` is `CreateBookmarkAction`.

### Adding actions

- [customAction(\_:context:)](tabletopaction/customaction%28__context_%29.md): Conforms when `Self` is `AnyCustomAction`.

## Relationships

### Conforming Types

- [CreateBookmarkAction](createbookmarkaction.md)
- [MoveEquipmentAction](moveequipmentaction.md)
- [SetTurnAction](setturnaction.md)
- [UpdateCounterAction](updatecounteraction.md)
- [UpdateEquipmentAction](updateequipmentaction.md)

## See Also

### Actions

- [MoveEquipmentAction](moveequipmentaction.md): An action that moves a piece of equipment on the table or changes the grouping.
- [UpdateEquipmentAction](updateequipmentaction.md): An action that updates properties of equipment on the table.
- [SetTurnAction](setturnaction.md): An action that sets the current seats participating in the current turn.
- [UpdateCounterAction](updatecounteraction.md): An action that updates the game counter.
- [CreateBookmarkAction](createbookmarkaction.md): An action that takes a snapshot of the game.
- [CustomAction](customaction.md): A protocol that represents an action whose behavior is implemented outside of TabletopKit. A custom action that can be applied to a `TableState`.
