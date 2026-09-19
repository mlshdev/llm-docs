> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkstrokepath-swift.struct/convertedbezierpoint/location

# location

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The location of the cubic uniform B-Spline control point.

## Declaration

```swift
let location: CGPoint
```

## Mentioned In

- [Importing Bézier path data into PencilKit](../../importing-external-drawing-data-into-pencilkit.md)

## See Also

### Getting the point data

- [index](index.md): The index of the point along the path.
- [pointCount](pointcount.md): The total number of B-Spline control points in the path.
- [bezierSegmentIndex](beziersegmentindex.md): The index of the Bézier segment the point originates from, not including `move to` elements.
