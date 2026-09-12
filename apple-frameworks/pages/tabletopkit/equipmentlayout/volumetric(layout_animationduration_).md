> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentlayout/volumetric(layout:animationduration:)](https://developer.apple.com/documentation/tabletopkit/equipmentlayout/volumetric(layout:animationduration:))

# volumetric(layout:animationDuration:)

**Framework:** TabletopKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Use the volumetric layout to provide 3d poses for the immediate children directly.

## Declaration

```swift
static func volumetric(layout: [EquipmentPose3D], animationDuration: Double? = nil) -> Self
```

## Parameters

- `layout`: An array of id and 3d pose for each child.
- `animationDuration`: The duration of the transition between the current pose and the new pose. If zero or less than zero the new pose will be applied instantly. If not specified a default duration will be used. If the layout contains poses for equipment that are not immediate children, those poses will be ignored. If the pose of some immediate children is not provided, the previous pose and duration will be used if available.

## See Also

### Laying out equipment

- [planarOverlapping(layout:animationDuration:)](planaroverlapping%28layout_animationduration_%29.md): Conforms when `Self` is `DefaultEquipmentLayout`. Use the overlapping layout to provide 2d poses for the immediate children and let TabletopKit determine their height and pitch/roll.
- [planarStacked(layout:animationDuration:)](planarstacked%28layout_animationduration_%29.md): Conforms when `Self` is `DefaultEquipmentLayout`. Use the stacked layout to provide 2d poses for the immediate children and let TabletopKit determine their height.
