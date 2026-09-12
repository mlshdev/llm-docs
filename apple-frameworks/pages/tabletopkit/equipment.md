> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipment](https://developer.apple.com/documentation/tabletopkit/equipment)

# Equipment

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A protocol for equipment that players directly interact with in a game.

## Declaration

```swift
protocol Equipment : Identifiable where Self.ID == EquipmentIdentifier
```

<a id="overview"></a>

## Overview

To represent equipment in your game, such as cards, pieces, and dice, following these steps:

- Create a structure that conforms to this protocol.
- Declare the [initialState](equipment/initialstate.md) property as either [BaseEquipmentState](baseequipmentstate.md), [DieState](diestate.md), or [CardState](cardstate.md), depending on the type of data you want TabletopKit to sync between players. For more complex data, use [RawValueState](rawvaluestate.md).
- Declare the `id` property as a [EquipmentIdentifier](equipmentidentifier.md) structure.
- Implement an initializer that sets the `id` and [initialState](equipment/initialstate.md) properties.

Optionally, implement the [layoutChildren(for:visualState:)](equipment/layoutchildren%28for_visualstate_%29.md) method for equipment that represents groups, and the [restingOrientation(state:)](equipment/restingorientation%28state_%29.md) method to provide a custom resting orientation.

## Topics

### Gettting the initial state of the equipment

- [initialState](equipment/initialstate.md)
- [State](equipment/state.md)

### Displaying the equipment

- [layoutChildren(for:visualState:)](equipment/layoutchildren%28for_visualstate_%29.md): This function provides the layout of the direct children of this equipment and is called whenever the snapshot changes. Override it to provide a custom layout. The output of this function is considered to be only a function of its inputs. Reaching out to data outside what is provided might result in undefined behavior.
- [restingOrientation(state:)](equipment/restingorientation%28state_%29.md): The resting orientation of the equipment given the current State.

## Relationships

### Inherits From

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

### Inherited By

- [EntityEquipment](entityequipment.md)

## See Also

### Equipment

- [Implementing playing card overlap and physical characteristics](implementing-playing-card-overlap-and-physical-characteristics.md): Add interactive card game behavior for a pile of playing cards with physically realistic stacking and overlapping.
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
- [ControllingSeats](controllingseats.md): The seats that can manipulate or interact with the equipment.
