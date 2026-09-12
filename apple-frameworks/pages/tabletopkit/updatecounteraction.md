> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/updatecounteraction](https://developer.apple.com/documentation/tabletopkit/updatecounteraction)

# UpdateCounterAction

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An action that updates the game counter.

## Declaration

```swift
struct UpdateCounterAction
```

<a id="overview"></a>

## Overview

To create an update counter action, use the [updateCounter(\_:context:)](tabletopaction/updatecounter%28__context_%29.md) or the [updateCounter(matching:value:context:)](tabletopaction/updatecounter%28matching_value_context_%29.md) static method.

## Topics

### Getting counter information

- [counterID](updatecounteraction/counterid.md): The ID of the counter to update.
- [newValue](updatecounteraction/newvalue.md): The new value to set for the counter.

### Getting game-specific information

- [context](updatecounteraction/context.md): An integer value that your game uses.

### Getting the player identifier

- [playerID](updatecounteraction/playerid.md): The ID of the player who is updating the counter.

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
- [SetTurnAction](setturnaction.md): An action that sets the current seats participating in the current turn.
- [CreateBookmarkAction](createbookmarkaction.md): An action that takes a snapshot of the game.
- [CustomAction](customaction.md): A protocol that represents an action whose behavior is implemented outside of TabletopKit. A custom action that can be applied to a `TableState`.
