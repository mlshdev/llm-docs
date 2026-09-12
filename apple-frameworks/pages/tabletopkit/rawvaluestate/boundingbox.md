> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/rawvaluestate/boundingbox](https://developer.apple.com/documentation/tabletopkit/rawvaluestate/boundingbox)

# boundingBox

**Framework:** TabletopKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

A 3D bounding box that encloses the equipment.

## Declaration

```swift
var boundingBox: Rect3D { get set }
```

<a id="discussion"></a>

## Discussion

This bounding box is object oriented, so remains the same regardless of the equipment orientation.

## See Also

### Rendering the equipment

- [pose](pose.md): The 2D position and rotation of the equipment relative to the equipment parent, or table.
