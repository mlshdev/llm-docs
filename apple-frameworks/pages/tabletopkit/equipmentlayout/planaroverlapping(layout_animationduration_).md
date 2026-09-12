> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentlayout/planaroverlapping(layout:animationduration:)](https://developer.apple.com/documentation/tabletopkit/equipmentlayout/planaroverlapping(layout:animationduration:))

# planarOverlapping(layout:animationDuration:)

**Framework:** TabletopKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Use the overlapping layout to provide 2d poses for the immediate children and let TabletopKit determine their height and pitch/roll.

## Declaration

```swift
static func planarOverlapping(layout: [EquipmentPose2D], animationDuration: Double? = nil) -> Self
```

## Parameters

- `layout`: An array of id and 2d pose for each child.
- `animationDuration`: The duration of the transition between the current pose and the new pose. If zero or less than zero the new pose will be applied instantly. If not specified a default duration will be used.

<a id="discussion"></a>

## Discussion

The height of the children is calculated by going over each equipment in the layout in the provided order and moving it to the lowest possible position so that it touches either the table, the previous sibling or both. The equipment retains its position on xz but it can be pitched and or rolled to allow touching both the previous sibling and the table.

If the layout contains poses for equipment that are not immediate children, those poses will be ignored. If the pose of some immediate children is not provided, the pose in their EquipmentState is used instead.

## See Also

### Laying out equipment

- [planarStacked(layout:animationDuration:)](planarstacked%28layout_animationduration_%29.md): Conforms when `Self` is `DefaultEquipmentLayout`. Use the stacked layout to provide 2d poses for the immediate children and let TabletopKit determine their height.
- [volumetric(layout:animationDuration:)](volumetric%28layout_animationduration_%29.md): Conforms when `Self` is `DefaultEquipmentLayout`. Use the volumetric layout to provide 3d poses for the immediate children directly.
