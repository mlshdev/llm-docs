> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/moveequipmentaction/order-swift.enum](https://developer.apple.com/documentation/tabletopkit/moveequipmentaction/order-swift.enum)

# MoveEquipmentAction.Order

**Framework:** TabletopKit  
**Kind:** Enumeration  
**Availability:** visionOS 2.0+

The possible orders of equipment.

## Declaration

```swift
enum Order
```

## Topics

### Orders

- [MoveEquipmentAction.Order.first](order-swift.enum/first.md): Inserts the equipment at the beginning of the list
- [MoveEquipmentAction.Order.last](order-swift.enum/last.md): Inserts the equipment at the end of the list
- [MoveEquipmentAction.Order.before(\_:)](order-swift.enum/before%28__%29.md): Inserts the equipment before the specified equipment identifier.
- [MoveEquipmentAction.Order.after(\_:)](order-swift.enum/after%28__%29.md): Inserts the equipment after the specified equipment identifier.
- [MoveEquipmentAction.Order.atIndex(\_:)](order-swift.enum/atindex%28__%29.md): Inserts the equipment at a specific location Note: the equipment is inserted at a undefined location if the index provided is not valid

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the equipment in the action

- [equipmentID](equipmentid.md): The ID of the equipment being moved.
- [parentID](parentid.md): The equipment ID the moved equipment is being grouped under
- [playerID](playerid.md): The ID of the player who is moving the equipment.
- [order](order-swift.property.md): The order in which the equipment should be inserted.
