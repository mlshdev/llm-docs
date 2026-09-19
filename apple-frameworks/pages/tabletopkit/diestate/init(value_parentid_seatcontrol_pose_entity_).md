> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/diestate/init(value:parentid:seatcontrol:pose:entity:)

# init(value:parentID:seatControl:pose:entity:)

**Framework:** TabletopKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates a die state with the given die value, parent, controlling seats, pose, and associated entity providing the bounding box.

## Declaration

```swift
@MainActor @preconcurrency init(value: Int, parentID: EquipmentIdentifier, seatControl: ControllingSeats = .any, pose: TableVisualState.Pose2D = .identity, entity: Entity)
```

## See Also

### Creating a die state

- [init(value:parentID:seatControl:pose:boundingBox:)](init%28value_parentid_seatcontrol_pose_boundingbox_%29.md): Creates the state of a die using the specified current value, location, and player interactions.
