> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/baseequipmentstate/init(parentid:seatcontrol:pose:boundingbox:)

# init(parentID:seatControl:pose:boundingBox:)

**Framework:** TabletopKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates a base state for equipment using a parent, location, and player interactions.

## Declaration

```swift
init(parentID: EquipmentIdentifier, seatControl: ControllingSeats = .any, pose: TableVisualState.Pose2D = .identity, boundingBox: Rect3D = .init())
```

## See Also

### Creating an equipment state

- [init(parentID:seatControl:pose:entity:)](init%28parentid_seatcontrol_pose_entity_%29.md)
