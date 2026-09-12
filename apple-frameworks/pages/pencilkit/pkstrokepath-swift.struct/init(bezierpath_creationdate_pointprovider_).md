> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepath-swift.struct/init(bezierpath:creationdate:pointprovider:)](https://developer.apple.com/documentation/pencilkit/pkstrokepath-swift.struct/init(bezierpath:creationdate:pointprovider:))

# init(bezierPath:creationDate:pointProvider:)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a stroke path recreating the specified Bézier path as a cubic uniform B-Spline.

## Declaration

```swift
init(bezierPath: CGPath, creationDate: Date, pointProvider: (PKStrokePath.ConvertedBezierPoint) -> PKStrokePoint)
```

## Parameters

- `bezierPath`: The Bézier path to convert to a cubic uniform B-Spline
- `creationDate`: The start time of this path.
- `pointProvider`: Closure to initialize the `PKStrokePoint`s of the path with specific values.

## Mentioned In

- [Importing Bézier path data into PencilKit](../importing-external-drawing-data-into-pencilkit.md)

<a id="discussion"></a>

## Discussion

The count of control points of the generated spline is not guaranteed to be a specific value except when the provided path is the output of `bezierRepresentation->CGPath`, where it will match the original curve.

The output B-Spline will have continuous curvature and 0 curvature at the endpoints. In cases where the B-Spline cannot fully recreate the Bézier path, it will be an approximation. For example, if the given Bézier path includes `line to` elements, these will produce straight line segments in the resulting B-Spline, but if a `line to` element is adjacent to a `curve to` element, the resulting curve may not match the original.

> **Warning**

> For a Bézier path with multiple subpaths, only the first will be converted.

## See Also

### Creating a new stroke path

- [init()](init%28%29.md): Creates an empty stroke path.
- [init(controlPoints:creationDate:)](init%28controlpoints_creationdate_%29.md): Creates a stroke path with the cubic B-spline control points and a date that you specify.
- [init(controlPoints:creationDate:id:)](init%28controlpoints_creationdate_id_%29.md): Creates a stroke path with the specified cubic B-spline control points and a unique identifier.
- [PKStrokePath.ConvertedBezierPoint](convertedbezierpoint.md): Information about a B-spline control point converted from a Bézier path.
