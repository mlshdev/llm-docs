> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/mutableequipmentstate/boundingbox](https://developer.apple.com/documentation/tabletopkit/mutableequipmentstate/boundingbox)

# boundingBox

**Framework:** TabletopKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

A 3D bounding box that encloses the equipment.

## Declaration

```swift
override var boundingBox: Rect3D { get set }
```

<a id="discussion"></a>

## Discussion

This bounding box is object oriented, so remains the same regardless of the equipment orientation.

## Default Implementations

### EquipmentState Implementations

- [boundingBox](../equipmentstate/boundingbox-130kn.md)

## See Also

### Rendering the quipment

- [pose](pose.md): The 2D position and rotation of the equipment relative to the parent equipment, or table.
