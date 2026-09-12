> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/rawvaluestate/init(rawvalue:parentid:seatcontrol:pose:entity:)](https://developer.apple.com/documentation/tabletopkit/rawvaluestate/init(rawvalue:parentid:seatcontrol:pose:entity:))

# init(rawValue:parentID:seatControl:pose:entity:)

**Framework:** TabletopKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

## Declaration

```swift
@MainActor @preconcurrency init(rawValue: UInt64, parentID: EquipmentIdentifier, seatControl: ControllingSeats = .any, pose: TableVisualState.Pose2D = .identity, entity: Entity)
```

## See Also

### Creating a die state

- [init(rawValue:parentID:seatControl:pose:boundingBox:)](init%28rawvalue_parentid_seatcontrol_pose_boundingbox_%29.md): Creates a state for equipment using the specified raw value, location, and player interactions.
