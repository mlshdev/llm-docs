> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/rawvaluestate/init(rawvalue:parentid:seatcontrol:pose:boundingbox:)

# init(rawValue:parentID:seatControl:pose:boundingBox:)

**Framework:** TabletopKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates a state for equipment using the specified raw value, location, and player interactions.

## Declaration

```swift
init(rawValue: UInt64, parentID: EquipmentIdentifier, seatControl: ControllingSeats = .any, pose: TableVisualState.Pose2D = .identity, boundingBox: Rect3D)
```

## See Also

### Creating a die state

- [init(rawValue:parentID:seatControl:pose:entity:)](init%28rawvalue_parentid_seatcontrol_pose_entity_%29.md)
