> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepath-swift.struct/init(controlpoints:creationdate:)](https://developer.apple.com/documentation/pencilkit/pkstrokepath-swift.struct/init(controlpoints:creationdate:))

# init(controlPoints:creationDate:)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a stroke path with the cubic B-spline control points and a date that you specify.

## Declaration

```swift
init<T>(controlPoints: T, creationDate: Date) where T : Sequence, T.Element == PKStrokePoint
```

## Parameters

- `controlPoints`: An array of control points for a cubic B-spline.
- `creationDate`: The creation time of this path. The `timeOffset` of points in this stroke path is relative to this date.

## See Also

### Creating a new stroke path

- [init()](init%28%29.md): Creates an empty stroke path.
- [init(controlPoints:creationDate:id:)](init%28controlpoints_creationdate_id_%29.md): Creates a stroke path with the specified cubic B-spline control points and a unique identifier.
- [init(bezierPath:creationDate:pointProvider:)](init%28bezierpath_creationdate_pointprovider_%29.md): Creates a stroke path recreating the specified Bézier path as a cubic uniform B-Spline.
- [PKStrokePath.ConvertedBezierPoint](convertedbezierpoint.md): Information about a B-spline control point converted from a Bézier path.
