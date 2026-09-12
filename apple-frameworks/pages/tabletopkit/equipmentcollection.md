> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentcollection](https://developer.apple.com/documentation/tabletopkit/equipmentcollection)

# EquipmentCollection

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A collection of equipment whose state can be inspected and modified.

## Declaration

```swift
struct EquipmentCollection
```

## Topics

### Getting collection properties

- [count](equipmentcollection/count.md): The number of equipment items in this collection.
- [ids](equipmentcollection/ids.md): The identifiers of all the equipment in this collection.
- [state](equipmentcollection/state.md): The collection of equipment states.

### Retrieving equipment identifiers

- [ids(childrenOf:)](equipmentcollection/ids%28childrenof_%29.md): Returns the identifiers of all equipment that are children of the given equipment identifier.
- [ids(descendantsOf:)](equipmentcollection/ids%28descendantsof_%29.md): Returns the identifiers of all equipment that are descendants of the given equipment identifier.
- [ids(of:)](equipmentcollection/ids%28of_%29.md): Returns the identifiers of all equipment that conform to the given type.

### Changing the parent

- [reparent(id:to:)](equipmentcollection/reparent%28id_to_%29.md): Change the parent of the equipment matching the given identifier. The given equipment becomes the last of the parent’s children.
- [reparent(ids:to:)](equipmentcollection/reparent%28ids_to_%29.md): Change the parent of the equipment matching the given identifiers. The reparented equipment is appended at the end of the parent’s children.

### Accessing the subscript

- [subscript(of:)](equipmentcollection/subscript%28of_%29.md): Returns the identifiers and corresponding states of all equipment that conform to the given type.

## See Also

### Equipment

- [Implementing playing card overlap and physical characteristics](implementing-playing-card-overlap-and-physical-characteristics.md): Add interactive card game behavior for a pile of playing cards with physically realistic stacking and overlapping.
- [Equipment](equipment.md): A protocol for equipment that players directly interact with in a game.
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
