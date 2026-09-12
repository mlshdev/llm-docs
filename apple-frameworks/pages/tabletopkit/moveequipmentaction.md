> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/moveequipmentaction](https://developer.apple.com/documentation/tabletopkit/moveequipmentaction)

# MoveEquipmentAction

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An action that moves a piece of equipment on the table or changes the grouping.

## Declaration

```swift
struct MoveEquipmentAction
```

<a id="overview"></a>

## Overview

To create a move equipment action, use the [moveEquipment(\_:childOf:order:pose:context:)](tabletopaction/moveequipment%28__childof_order_pose_context_%29.md) or the [moveEquipment(matching:childOf:order:pose:context:)](tabletopaction/moveequipment%28matching_childof_order_pose_context_%29.md) static method.

## Topics

### Getting the equipment in the action

- [equipmentID](moveequipmentaction/equipmentid.md): The ID of the equipment being moved.
- [parentID](moveequipmentaction/parentid.md): The equipment ID the moved equipment is being grouped under
- [playerID](moveequipmentaction/playerid.md): The ID of the player who is moving the equipment.
- [order](moveequipmentaction/order-swift.property.md): The order in which the equipment should be inserted.
- [MoveEquipmentAction.Order](moveequipmentaction/order-swift.enum.md): The possible orders of equipment.

### Getting the position of the equipment

- [pose](moveequipmentaction/pose.md): The position the equipment being moved to

### Getting game-specific information

- [context](moveequipmentaction/context.md): An integer value that your game uses.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TabletopAction](tabletopaction.md)

## See Also

### Actions

- [TabletopAction](tabletopaction.md): A protocol for objects that describe an action in a tabletop game.
- [UpdateEquipmentAction](updateequipmentaction.md): An action that updates properties of equipment on the table.
- [SetTurnAction](setturnaction.md): An action that sets the current seats participating in the current turn.
- [UpdateCounterAction](updatecounteraction.md): An action that updates the game counter.
- [CreateBookmarkAction](createbookmarkaction.md): An action that takes a snapshot of the game.
- [CustomAction](customaction.md): A protocol that represents an action whose behavior is implemented outside of TabletopKit. A custom action that can be applied to a `TableState`.
