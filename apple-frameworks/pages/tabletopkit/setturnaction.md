> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/setturnaction](https://developer.apple.com/documentation/tabletopkit/setturnaction)

# SetTurnAction

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An action that sets the current seats participating in the current turn.

## Declaration

```swift
struct SetTurnAction
```

<a id="overview"></a>

## Overview

To create a set turn action, use the [setTurn(forSeat:context:)](tabletopaction/setturn%28forseat_context_%29.md) or a similar static method.

## Topics

### Getting the seats involved in a turn

- [seatIDsInTurn](setturnaction/seatidsinturn.md): The IDs of the seats that are part of the current turn.

### Getting the action properties

- [context](setturnaction/context.md): An integer value that your game uses.
- [playerID](setturnaction/playerid.md): The ID of the player who is setting the turn.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TabletopAction](tabletopaction.md)

## See Also

### Actions

- [TabletopAction](tabletopaction.md): A protocol for objects that describe an action in a tabletop game.
- [MoveEquipmentAction](moveequipmentaction.md): An action that moves a piece of equipment on the table or changes the grouping.
- [UpdateEquipmentAction](updateequipmentaction.md): An action that updates properties of equipment on the table.
- [UpdateCounterAction](updatecounteraction.md): An action that updates the game counter.
- [CreateBookmarkAction](createbookmarkaction.md): An action that takes a snapshot of the game.
- [CustomAction](customaction.md): A protocol that represents an action whose behavior is implemented outside of TabletopKit. A custom action that can be applied to a `TableState`.
