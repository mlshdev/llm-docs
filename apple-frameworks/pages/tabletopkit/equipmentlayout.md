> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentlayout](https://developer.apple.com/documentation/tabletopkit/equipmentlayout)

# EquipmentLayout

**Framework:** TabletopKit  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

A protocol for objects that describe the layout of equipment.

## Declaration

```swift
protocol EquipmentLayout
```

## Topics

### Laying out equipment

- [planarOverlapping(layout:animationDuration:)](equipmentlayout/planaroverlapping%28layout_animationduration_%29.md): Conforms when `Self` is `DefaultEquipmentLayout`. Use the overlapping layout to provide 2d poses for the immediate children and let TabletopKit determine their height and pitch/roll.
- [planarStacked(layout:animationDuration:)](equipmentlayout/planarstacked%28layout_animationduration_%29.md): Conforms when `Self` is `DefaultEquipmentLayout`. Use the stacked layout to provide 2d poses for the immediate children and let TabletopKit determine their height.
- [volumetric(layout:animationDuration:)](equipmentlayout/volumetric%28layout_animationduration_%29.md): Conforms when `Self` is `DefaultEquipmentLayout`. Use the volumetric layout to provide 3d poses for the immediate children directly.

## Relationships

### Conforming Types

- [DefaultEquipmentLayout](defaultequipmentlayout.md)

## See Also

### Equipment layout

- [DefaultEquipmentLayout](defaultequipmentlayout.md): An object that provides a standard configuration for equipment layout.
- [EquipmentPose2D](equipmentpose2d.md): An object that represents the position and rotation of equipment on the XZ plane.
- [EquipmentPose3D](equipmentpose3d.md): An object that represents the 3D position and orientation of equipment on the table.
