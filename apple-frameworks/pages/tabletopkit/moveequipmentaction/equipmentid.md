> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/moveequipmentaction/equipmentid

# equipmentID

**Framework:** TabletopKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The ID of the equipment being moved.

## Declaration

```swift
var equipmentID: EquipmentIdentifier { get }
```

## See Also

### Getting the equipment in the action

- [parentID](parentid.md): The equipment ID the moved equipment is being grouped under
- [playerID](playerid.md): The ID of the player who is moving the equipment.
- [order](order-swift.property.md): The order in which the equipment should be inserted.
- [MoveEquipmentAction.Order](order-swift.enum.md): The possible orders of equipment.
