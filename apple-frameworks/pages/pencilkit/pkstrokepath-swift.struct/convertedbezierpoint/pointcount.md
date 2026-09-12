> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepath-swift.struct/convertedbezierpoint/pointcount](https://developer.apple.com/documentation/pencilkit/pkstrokepath-swift.struct/convertedbezierpoint/pointcount)

# pointCount

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The total number of B-Spline control points in the path.

## Declaration

```swift
let pointCount: Int
```

## Mentioned In

- [Importing Bézier path data into PencilKit](../../importing-external-drawing-data-into-pencilkit.md)

## See Also

### Getting the point data

- [index](index.md): The index of the point along the path.
- [location](location.md): The location of the cubic uniform B-Spline control point.
- [bezierSegmentIndex](beziersegmentindex.md): The index of the Bézier segment the point originates from, not including `move to` elements.
