> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentpose3d](https://developer.apple.com/documentation/tabletopkit/equipmentpose3d)

# EquipmentPose3D

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An object that represents the 3D position and orientation of equipment on the table.

## Declaration

```swift
struct EquipmentPose3D
```

## Topics

### Creating an equipment pose object

- [init(id:pose:)](equipmentpose3d/init%28id_pose_%29.md): Creates a position and orientation on the table for a specific piece of equipment.

### Getting equipment pose properties

- [id](equipmentpose3d/id.md)
- [pose](equipmentpose3d/pose.md): The 3D position and orientation of equipment on the table.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Equipment layout

- [EquipmentLayout](equipmentlayout.md): A protocol for objects that describe the layout of equipment.
- [DefaultEquipmentLayout](defaultequipmentlayout.md): An object that provides a standard configuration for equipment layout.
- [EquipmentPose2D](equipmentpose2d.md): An object that represents the position and rotation of equipment on the XZ plane.
