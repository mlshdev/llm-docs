> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopaction/moveequipment(_:childof:order:pose:context:)](https://developer.apple.com/documentation/tabletopkit/tabletopaction/moveequipment(_:childof:order:pose:context:))

# moveEquipment(\_:childOf:order:pose:context:)

**Framework:** TabletopKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

## Declaration

```swift
static func moveEquipment(_ equipment: some Equipment, childOf parent: any Equipment, order: MoveEquipmentAction.Order? = nil, pose: TableVisualState.Pose2D? = nil, context: UInt64 = 0) -> Self
```

## See Also

### Moving equipment

- [moveEquipment(matching:childOf:order:pose:context:)](moveequipment%28matching_childof_order_pose_context_%29.md): Conforms when `Self` is `MoveEquipmentAction`.
