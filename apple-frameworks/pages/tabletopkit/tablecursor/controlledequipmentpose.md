> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablecursor/controlledequipmentpose](https://developer.apple.com/documentation/tabletopkit/tablecursor/controlledequipmentpose)

# controlledEquipmentPose

**Framework:** TabletopKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The identifier of the equipment and the pose of the equipment in table space. NOTE: the equipment pose returned here does not include the resting orientation, similarly to the `pose` and `initialPose`in `TabletopInteraction.Value`. This is unlike the `pose` returned in `TableVisualState`, which does include resting orientation.

## Declaration

```swift
let controlledEquipmentPose: EquipmentPose3D
```

## See Also

### Getting information about the equipment in the interaction

- [hovering](hovering.md): The current destination for the equipment, if the interaction were to end now. `nil` if no destination is currently available.
