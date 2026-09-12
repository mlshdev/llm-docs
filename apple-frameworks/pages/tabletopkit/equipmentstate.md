> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentstate](https://developer.apple.com/documentation/tabletopkit/equipmentstate)

# EquipmentState

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A protocol for the equipment data that TabletopKit syncs between players.

## Declaration

```swift
protocol EquipmentState : Equatable
```

## Topics

### Getting the parent equipment

- [parentID](equipmentstate/parentid.md): The identifier for the parent equipment that holds or contains this equipment.

### Rendering the equipment

- [boundingBox](equipmentstate/boundingbox.md): A 3D bounding box that encloses the equipment.
- [pose](equipmentstate/pose.md): The 2D position and rotation of the equipment relative to the parent equipment, or table.

### Controlling the equipment

- [seatControl](equipmentstate/seatcontrol.md): The seats that can manipulate or interact with this equipment.
- [lockedBy](equipmentstate/lockedby.md): Deprecated. The identifier for the player who exclusively controls the equipment.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

### Inherited By

- [CustomEquipmentState](customequipmentstate.md)
- [MutableEquipmentState](mutableequipmentstate.md)

### Conforming Types

- [BaseEquipmentState](baseequipmentstate.md)
- [CardState](cardstate.md)
- [DieState](diestate.md)
- [RawValueState](rawvaluestate.md)

## See Also

### Equipment

- [Implementing playing card overlap and physical characteristics](implementing-playing-card-overlap-and-physical-characteristics.md): Add interactive card game behavior for a pile of playing cards with physically realistic stacking and overlapping.
- [Equipment](equipment.md): A protocol for equipment that players directly interact with in a game.
- [EquipmentCollection](equipmentcollection.md): A collection of equipment whose state can be inspected and modified.
- [EntityEquipment](entityequipment.md): A protocol for equipment in a game that you render using RealityKit.
- [EquipmentIdentifier](equipmentidentifier.md): A unique identifier for equipment.
- [EquipmentStateCollection](equipmentstatecollection.md): A collection of equipment states that can be inspected and modified.
- [BaseEquipmentState](baseequipmentstate.md): A state for equipment that contains no equipment-specific data.
- [CustomEquipmentState](customequipmentstate.md): A specialized protocol for the equipment state that allows to accommodate custom data that TabletopKit syncs between players.
- [MutableEquipmentState](mutableequipmentstate.md): A protocol for equipment data that TabletopKit syncs between players, and that can be mutated.
- [CardState](cardstate.md): A state for cards that contains face up and down information.
- [DieState](diestate.md): A state for dice that contains the current value.
- [RawValueState](rawvaluestate.md): A state for equipment that contains a game-specific value.
- [ControllingSeats](controllingseats.md): The seats that can manipulate or interact with the equipment.
