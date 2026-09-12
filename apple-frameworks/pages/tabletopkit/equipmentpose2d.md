> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentpose2d](https://developer.apple.com/documentation/tabletopkit/equipmentpose2d)

# EquipmentPose2D

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An object that represents the position and rotation of equipment on the XZ plane.

## Declaration

```swift
struct EquipmentPose2D
```

## Topics

### Creating an equipment pose object

- [init(id:pose:)](equipmentpose2d/init%28id_pose_%29.md): Creates a position and rotation on the table for a specific piece of equipment.

### Getting equipment pose properties

- [id](equipmentpose2d/id.md): The unique identifier for the equipment.
- [pose](equipmentpose2d/pose.md): The 2D position and rotation of equipment on the table.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Equipment layout

- [EquipmentLayout](equipmentlayout.md): A protocol for objects that describe the layout of equipment.
- [DefaultEquipmentLayout](defaultequipmentlayout.md): An object that provides a standard configuration for equipment layout.
- [EquipmentPose3D](equipmentpose3d.md): An object that represents the 3D position and orientation of equipment on the table.
