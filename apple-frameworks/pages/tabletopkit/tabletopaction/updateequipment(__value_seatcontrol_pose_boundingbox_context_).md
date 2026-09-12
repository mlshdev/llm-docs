> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopaction/updateequipment(_:value:seatcontrol:pose:boundingbox:context:)](https://developer.apple.com/documentation/tabletopkit/tabletopaction/updateequipment(_:value:seatcontrol:pose:boundingbox:context:))

# updateEquipment(\_:value:seatControl:pose:boundingBox:context:)

**Framework:** TabletopKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

## Declaration

```swift
static func updateEquipment<E>(_ equipment: E, value: Int? = nil, seatControl: ControllingSeats? = nil, pose: TableVisualState.Pose2D? = nil, boundingBox: Rect3D? = nil, context: UInt64 = 0) -> Self where E : Equipment, E.State == DieState
```

## See Also

### Changing equipment state properties

- [updateEquipment(\_:faceUp:seatControl:pose:boundingBox:context:)](updateequipment%28__faceup_seatcontrol_pose_boundingbox_context_%29.md): Conforms when `Self` is `UpdateEquipmentAction<CardState>`.
- [updateEquipment(\_:rawValue:seatControl:pose:boundingBox:context:)](updateequipment%28__rawvalue_seatcontrol_pose_boundingbox_context_%29.md): Conforms when `Self` is `UpdateEquipmentAction<RawValueState>`.
- [updateEquipment(\_:seatControl:pose:boundingBox:context:)](updateequipment%28__seatcontrol_pose_boundingbox_context_%29.md): Conforms when `Self` is `UpdateEquipmentAction<BaseEquipmentState>`.
- [updateEquipment(\_:state:context:)](updateequipment%28__state_context_%29-6kawf.md): Conforms when `Self` is `UpdateEquipmentAction<CardState>`.
- [updateEquipment(\_:state:context:)](updateequipment%28__state_context_%29-88v3m.md): Conforms when `Self` is `UpdateEquipmentAction<DieState>`.
- [updateEquipment(\_:state:context:)](updateequipment%28__state_context_%29-8tmnn.md): Conforms when `Self` is `UpdateEquipmentAction<RawValueState>`.
- [updateEquipment(\_:state:context:)](updateequipment%28__state_context_%29-j62v.md): Conforms when `Self` is `UpdateEquipmentAction<BaseEquipmentState>`.
