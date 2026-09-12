> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/rawvaluestate](https://developer.apple.com/documentation/tabletopkit/rawvaluestate)

# RawValueState

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A state for equipment that contains a game-specific value.

## Declaration

```swift
struct RawValueState
```

## Topics

### Creating a die state

- [init(rawValue:parentID:seatControl:pose:boundingBox:)](rawvaluestate/init%28rawvalue_parentid_seatcontrol_pose_boundingbox_%29.md): Creates a state for equipment using the specified raw value, location, and player interactions.
- [init(rawValue:parentID:seatControl:pose:entity:)](rawvaluestate/init%28rawvalue_parentid_seatcontrol_pose_entity_%29.md)

### Getting the die data

- [rawValue](rawvaluestate/rawvalue.md): The integer value for this piece of equipment.

### Getting the parent equipment

- [parentID](rawvaluestate/parentid.md): The identifier for the parent equipment that holds or contains this equipment.

### Rendering the equipment

- [boundingBox](rawvaluestate/boundingbox.md): A 3D bounding box that encloses the equipment.
- [pose](rawvaluestate/pose.md): The 2D position and rotation of the equipment relative to the equipment parent, or table.

### Controlling the equipment

- [lockedBy](rawvaluestate/lockedby.md): The identifier for the player who exclusively controls the equipment.
- [seatControl](rawvaluestate/seatcontrol.md): The seats that can manipulate or interact with the equipment.

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
- [DieState](diestate.md): A state for dice that contains the current value.
- [ControllingSeats](controllingseats.md): The seats that can manipulate or interact with the equipment.
