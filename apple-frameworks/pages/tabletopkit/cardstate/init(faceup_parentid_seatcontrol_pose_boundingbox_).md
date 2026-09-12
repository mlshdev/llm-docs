> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/cardstate/init(faceup:parentid:seatcontrol:pose:boundingbox:)](https://developer.apple.com/documentation/tabletopkit/cardstate/init(faceup:parentid:seatcontrol:pose:boundingbox:))

# init(faceUp:parentID:seatControl:pose:boundingBox:)

**Framework:** TabletopKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates the state of a card using its visibility, location, and player interactions.

## Declaration

```swift
init(faceUp: Bool, parentID: EquipmentIdentifier, seatControl: ControllingSeats = .any, pose: TableVisualState.Pose2D = .identity, boundingBox: Rect3D)
```

## See Also

### Creating a card state

- [init(faceUp:parentID:seatControl:pose:entity:)](init%28faceup_parentid_seatcontrol_pose_entity_%29.md): Creates a card state with the given faceUp value, parent, controlling seats, pose, and associated entity providing the bounding box.
- [faceDown(parentID:seatControl:pose:boundingBox:)](facedown%28parentid_seatcontrol_pose_boundingbox_%29.md)
- [faceDown(parentID:seatControl:pose:entity:)](facedown%28parentid_seatcontrol_pose_entity_%29.md)
- [faceUp(parentID:seatControl:pose:boundingBox:)](faceup%28parentid_seatcontrol_pose_boundingbox_%29.md)
- [faceUp(parentID:seatControl:pose:entity:)](faceup%28parentid_seatcontrol_pose_entity_%29.md)
