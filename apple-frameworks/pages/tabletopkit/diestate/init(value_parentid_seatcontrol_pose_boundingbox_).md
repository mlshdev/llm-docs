> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/diestate/init(value:parentid:seatcontrol:pose:boundingbox:)](https://developer.apple.com/documentation/tabletopkit/diestate/init(value:parentid:seatcontrol:pose:boundingbox:))

# init(value:parentID:seatControl:pose:boundingBox:)

**Framework:** TabletopKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates the state of a die using the specified current value, location, and player interactions.

## Declaration

```swift
init(value: Int, parentID: EquipmentIdentifier, seatControl: ControllingSeats = .any, pose: TableVisualState.Pose2D = .identity, boundingBox: Rect3D)
```

## See Also

### Creating a die state

- [init(value:parentID:seatControl:pose:entity:)](init%28value_parentid_seatcontrol_pose_entity_%29.md): Creates a die state with the given die value, parent, controlling seats, pose, and associated entity providing the bounding box.
