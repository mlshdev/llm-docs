> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentidentifier](https://developer.apple.com/documentation/tabletopkit/equipmentidentifier)

# EquipmentIdentifier

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A unique identifier for equipment.

## Declaration

```swift
struct EquipmentIdentifier
```

<a id="overview"></a>

## Overview

The equipment identifier needs to be unique across all instances of the same tabletop game.

## Topics

### Creating equipment identifiers

- [init(\_:)](equipmentidentifier/init%28__%29.md)

### Getting identifier values

- [rawValue](equipmentidentifier/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Equipment

- [Implementing playing card overlap and physical characteristics](implementing-playing-card-overlap-and-physical-characteristics.md): Add interactive card game behavior for a pile of playing cards with physically realistic stacking and overlapping.
- [Equipment](equipment.md): A protocol for equipment that players directly interact with in a game.
- [EquipmentCollection](equipmentcollection.md): A collection of equipment whose state can be inspected and modified.
- [EntityEquipment](entityequipment.md): A protocol for equipment in a game that you render using RealityKit.
- [EquipmentState](equipmentstate.md): A protocol for the equipment data that TabletopKit syncs between players.
- [EquipmentStateCollection](equipmentstatecollection.md): A collection of equipment states that can be inspected and modified.
- [BaseEquipmentState](baseequipmentstate.md): A state for equipment that contains no equipment-specific data.
- [CustomEquipmentState](customequipmentstate.md): A specialized protocol for the equipment state that allows to accommodate custom data that TabletopKit syncs between players.
- [MutableEquipmentState](mutableequipmentstate.md): A protocol for equipment data that TabletopKit syncs between players, and that can be mutated.
- [CardState](cardstate.md): A state for cards that contains face up and down information.
- [DieState](diestate.md): A state for dice that contains the current value.
- [RawValueState](rawvaluestate.md): A state for equipment that contains a game-specific value.
- [ControllingSeats](controllingseats.md): The seats that can manipulate or interact with the equipment.
