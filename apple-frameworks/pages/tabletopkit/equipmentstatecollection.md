> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentstatecollection](https://developer.apple.com/documentation/tabletopkit/equipmentstatecollection)

# EquipmentStateCollection

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A collection of equipment states that can be inspected and modified.

## Declaration

```swift
struct EquipmentStateCollection
```

## Topics

### Accessing the subscript

- [subscript(id:)](equipmentstatecollection/subscript%28id_%29.md): Returns and/or modifies the state for the equipment with given identifier.
- [subscript(ids:)](equipmentstatecollection/subscript%28ids_%29.md): Returns and/or modifies the states for the equipment with given identifiers.
- [subscript(of:id:)](equipmentstatecollection/subscript%28of_id_%29.md): Returns and/or modifies the state for the equipment with given identifier and matching type.
- [subscript(of:ids:)](equipmentstatecollection/subscript%28of_ids_%29.md): Returns and/or modifies the state for the equipment with given identifier and matching type.

## See Also

### Equipment

- [Implementing playing card overlap and physical characteristics](implementing-playing-card-overlap-and-physical-characteristics.md): Add interactive card game behavior for a pile of playing cards with physically realistic stacking and overlapping.
- [Equipment](equipment.md): A protocol for equipment that players directly interact with in a game.
- [EquipmentCollection](equipmentcollection.md): A collection of equipment whose state can be inspected and modified.
- [EntityEquipment](entityequipment.md): A protocol for equipment in a game that you render using RealityKit.
- [EquipmentIdentifier](equipmentidentifier.md): A unique identifier for equipment.
- [EquipmentState](equipmentstate.md): A protocol for the equipment data that TabletopKit syncs between players.
- [BaseEquipmentState](baseequipmentstate.md): A state for equipment that contains no equipment-specific data.
- [CustomEquipmentState](customequipmentstate.md): A specialized protocol for the equipment state that allows to accommodate custom data that TabletopKit syncs between players.
- [MutableEquipmentState](mutableequipmentstate.md): A protocol for equipment data that TabletopKit syncs between players, and that can be mutated.
- [CardState](cardstate.md): A state for cards that contains face up and down information.
- [DieState](diestate.md): A state for dice that contains the current value.
- [RawValueState](rawvaluestate.md): A state for equipment that contains a game-specific value.
- [ControllingSeats](controllingseats.md): The seats that can manipulate or interact with the equipment.
