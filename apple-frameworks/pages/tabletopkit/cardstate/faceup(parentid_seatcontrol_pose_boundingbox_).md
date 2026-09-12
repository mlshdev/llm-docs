> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/cardstate/faceup(parentid:seatcontrol:pose:boundingbox:)](https://developer.apple.com/documentation/tabletopkit/cardstate/faceup(parentid:seatcontrol:pose:boundingbox:))

# faceUp(parentID:seatControl:pose:boundingBox:)

**Framework:** TabletopKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

## Declaration

```swift
static func faceUp(parentID: EquipmentIdentifier, seatControl: ControllingSeats = .any, pose: TableVisualState.Pose2D = .identity, boundingBox: Rect3D) -> CardState
```

## See Also

### Creating a card state

- [init(faceUp:parentID:seatControl:pose:boundingBox:)](init%28faceup_parentid_seatcontrol_pose_boundingbox_%29.md): Creates the state of a card using its visibility, location, and player interactions.
- [init(faceUp:parentID:seatControl:pose:entity:)](init%28faceup_parentid_seatcontrol_pose_entity_%29.md): Creates a card state with the given faceUp value, parent, controlling seats, pose, and associated entity providing the bounding box.
- [faceDown(parentID:seatControl:pose:boundingBox:)](facedown%28parentid_seatcontrol_pose_boundingbox_%29.md)
- [faceDown(parentID:seatControl:pose:entity:)](facedown%28parentid_seatcontrol_pose_entity_%29.md)
- [faceUp(parentID:seatControl:pose:entity:)](faceup%28parentid_seatcontrol_pose_entity_%29.md)
