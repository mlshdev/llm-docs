> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/baseequipmentstate/init(parentid:seatcontrol:pose:entity:)](https://developer.apple.com/documentation/tabletopkit/baseequipmentstate/init(parentid:seatcontrol:pose:entity:))

# init(parentID:seatControl:pose:entity:)

**Framework:** TabletopKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

## Declaration

```swift
@MainActor @preconcurrency init(parentID: EquipmentIdentifier, seatControl: ControllingSeats = .any, pose: TableVisualState.Pose2D = .identity, entity: Entity)
```

## See Also

### Creating an equipment state

- [init(parentID:seatControl:pose:boundingBox:)](init%28parentid_seatcontrol_pose_boundingbox_%29.md): Creates a base state for equipment using a parent, location, and player interactions.
