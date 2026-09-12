> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentstate/boundingbox](https://developer.apple.com/documentation/tabletopkit/equipmentstate/boundingbox)

# boundingBox

**Framework:** TabletopKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

A 3D bounding box that encloses the equipment.

## Declaration

```swift
var boundingBox: Rect3D { get }
```

<a id="discussion"></a>

## Discussion

This bounding box is object oriented, so remains the same regardless of the equipment orientation.

## Default Implementations

### EquipmentState Implementations

- [boundingBox](boundingbox-130kn.md)

## See Also

### Rendering the equipment

- [pose](pose.md): The 2D position and rotation of the equipment relative to the parent equipment, or table.
