> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopaction/updateequipment(_:rawvalue:seatcontrol:pose:boundingbox:context:)](https://developer.apple.com/documentation/tabletopkit/tabletopaction/updateequipment(_:rawvalue:seatcontrol:pose:boundingbox:context:))

# updateEquipment(\_:rawValue:seatControl:pose:boundingBox:context:)

**Framework:** TabletopKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

## Declaration

```swift
static func updateEquipment<E>(_ equipment: E, rawValue: UInt64? = nil, seatControl: ControllingSeats? = nil, pose: TableVisualState.Pose2D? = nil, boundingBox: Rect3D? = nil, context: UInt64 = 0) -> Self where E : Equipment, E.State == RawValueState
```

## See Also

### Changing equipment state properties

- [updateEquipment(\_:faceUp:seatControl:pose:boundingBox:context:)](updateequipment%28__faceup_seatcontrol_pose_boundingbox_context_%29.md): Conforms when `Self` is `UpdateEquipmentAction<CardState>`.
- [updateEquipment(\_:seatControl:pose:boundingBox:context:)](updateequipment%28__seatcontrol_pose_boundingbox_context_%29.md): Conforms when `Self` is `UpdateEquipmentAction<BaseEquipmentState>`.
- [updateEquipment(\_:state:context:)](updateequipment%28__state_context_%29-6kawf.md): Conforms when `Self` is `UpdateEquipmentAction<CardState>`.
- [updateEquipment(\_:state:context:)](updateequipment%28__state_context_%29-88v3m.md): Conforms when `Self` is `UpdateEquipmentAction<DieState>`.
- [updateEquipment(\_:state:context:)](updateequipment%28__state_context_%29-8tmnn.md): Conforms when `Self` is `UpdateEquipmentAction<RawValueState>`.
- [updateEquipment(\_:state:context:)](updateequipment%28__state_context_%29-j62v.md): Conforms when `Self` is `UpdateEquipmentAction<BaseEquipmentState>`.
- [updateEquipment(\_:value:seatControl:pose:boundingBox:context:)](updateequipment%28__value_seatcontrol_pose_boundingbox_context_%29.md): Conforms when `Self` is `UpdateEquipmentAction<DieState>`.
