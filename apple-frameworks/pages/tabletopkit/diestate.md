> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/diestate](https://developer.apple.com/documentation/tabletopkit/diestate)

# DieState

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A state for dice that contains the current value.

## Declaration

```swift
struct DieState
```

## Topics

### Creating a die state

- [init(value:parentID:seatControl:pose:boundingBox:)](diestate/init%28value_parentid_seatcontrol_pose_boundingbox_%29.md): Creates the state of a die using the specified current value, location, and player interactions.
- [init(value:parentID:seatControl:pose:entity:)](diestate/init%28value_parentid_seatcontrol_pose_entity_%29.md): Creates a die state with the given die value, parent, controlling seats, pose, and associated entity providing the bounding box.

### Getting the die data

- [value](diestate/value.md): The numerical value that appears on the top face of the die.

### Getting the parent equipment

- [parentID](diestate/parentid.md): The identifier for the parent equipment that holds or contains this equipment.

### Rendering the equipment

- [boundingBox](diestate/boundingbox.md): A 3D bounding box that encloses the die.
- [pose](diestate/pose.md): The 2D position and rotation of the equipment relative to the equipment parent, or table.

### Controlling the equipment

- [lockedBy](diestate/lockedby.md): The identifier for the player who exclusively controls the equipment.
- [seatControl](diestate/seatcontrol.md): The seats that can manipulate or interact with the equipment.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [EquipmentState](equipmentstate.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [MutableEquipmentState](mutableequipmentstate.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Equipment

- [Implementing playing card overlap and physical characteristics](implementing-playing-card-overlap-and-physical-characteristics.md): Add interactive card game behavior for a pile of playing cards with physically realistic stacking and overlapping.
- [Equipment](equipment.md): A protocol for equipment that players directly interact with in a game.
- [EquipmentCollection](equipmentcollection.md): A collection of equipment whose state can be inspected and modified.
- [EntityEquipment](entityequipment.md): A protocol for equipment in a game that you render using RealityKit.
- [EquipmentIdentifier](equipmentidentifier.md): A unique identifier for equipment.
- [EquipmentState](equipmentstate.md): A protocol for the equipment data that TabletopKit syncs between players.
- [EquipmentStateCollection](equipmentstatecollection.md): A collection of equipment states that can be inspected and modified.
- [BaseEquipmentState](baseequipmentstate.md): A state for equipment that contains no equipment-specific data.
- [CustomEquipmentState](customequipmentstate.md): A specialized protocol for the equipment state that allows to accommodate custom data that TabletopKit syncs between players.
- [MutableEquipmentState](mutableequipmentstate.md): A protocol for equipment data that TabletopKit syncs between players, and that can be mutated.
- [CardState](cardstate.md): A state for cards that contains face up and down information.
- [RawValueState](rawvaluestate.md): A state for equipment that contains a game-specific value.
- [ControllingSeats](controllingseats.md): The seats that can manipulate or interact with the equipment.
