> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tabletopaction/moveequipment(matching:childof:order:pose:context:)

# moveEquipment(matching:childOf:order:pose:context:)

**Framework:** TabletopKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

## Declaration

```swift
static func moveEquipment(matching equipmentID: EquipmentIdentifier, childOf parentID: EquipmentIdentifier, order: MoveEquipmentAction.Order? = nil, pose: TableVisualState.Pose2D? = nil, context: UInt64 = 0) -> Self
```

## See Also

### Moving equipment

- [moveEquipment(\_:childOf:order:pose:context:)](moveequipment%28__childof_order_pose_context_%29.md): Conforms when `Self` is `MoveEquipmentAction`.
