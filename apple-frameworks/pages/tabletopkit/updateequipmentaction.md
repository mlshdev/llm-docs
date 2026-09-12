> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/updateequipmentaction](https://developer.apple.com/documentation/tabletopkit/updateequipmentaction)

# UpdateEquipmentAction

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An action that updates properties of equipment on the table.

## Declaration

```swift
struct UpdateEquipmentAction<State> where State : EquipmentState
```

<a id="overview"></a>

## Overview

To create an update equipment action, use the [updateEquipment(\_:state:context:)](tabletopaction/updateequipment%28__state_context_%29-6kawf.md) or a similar static method.

## Topics

### Getting the equipment in the action

- [equipmentID](updateequipmentaction/equipmentid.md): The ID of the equipment to update.

### Getting the state of the equipment

- [newState](updateequipmentaction/newstate.md): The new state of the equipment.

### Getting the context and player identifier

- [context](updateequipmentaction/context.md): An integer value that your game uses.
- [playerID](updateequipmentaction/playerid.md): The player performing the action.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [TabletopAction](tabletopaction.md)

## See Also

### Actions

- [TabletopAction](tabletopaction.md): A protocol for objects that describe an action in a tabletop game.
- [MoveEquipmentAction](moveequipmentaction.md): An action that moves a piece of equipment on the table or changes the grouping.
- [SetTurnAction](setturnaction.md): An action that sets the current seats participating in the current turn.
- [UpdateCounterAction](updatecounteraction.md): An action that updates the game counter.
- [CreateBookmarkAction](createbookmarkaction.md): An action that takes a snapshot of the game.
- [CustomAction](customaction.md): A protocol that represents an action whose behavior is implemented outside of TabletopKit. A custom action that can be applied to a `TableState`.
