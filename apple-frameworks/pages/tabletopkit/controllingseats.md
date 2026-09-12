> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/controllingseats](https://developer.apple.com/documentation/tabletopkit/controllingseats)

# ControllingSeats

**Framework:** TabletopKit  
**Kind:** Enumeration  
**Availability:** visionOS 2.0+

The seats that can manipulate or interact with the equipment.

## Declaration

```swift
enum ControllingSeats
```

## Topics

### Seats

- [ControllingSeats.any](controllingseats/any.md): Lets players in all seats interact with the equipment.
- [ControllingSeats.restricted(\_:)](controllingseats/restricted%28__%29.md): Lets players in specific seats interact with the equipment.
- [ControllingSeats.restrictedCurrent(\_:)](controllingseats/restrictedcurrent%28__%29.md): Lets players in specific seats interact with the equipment if they are currently in turn.
- [ControllingSeats.inherited](controllingseats/inherited.md): The value is inherited from the parent. The table implicit value is considered to be `.any`.
- [ControllingSeats.current](controllingseats/current.md): Lets only seats currently in turn interact with the equipment.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
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
- [RawValueState](rawvaluestate.md): A state for equipment that contains a game-specific value.
