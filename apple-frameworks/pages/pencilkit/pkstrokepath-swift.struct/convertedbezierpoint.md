> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepath-swift.struct/convertedbezierpoint](https://developer.apple.com/documentation/pencilkit/pkstrokepath-swift.struct/convertedbezierpoint)

# PKStrokePath.ConvertedBezierPoint

**Framework:** PencilKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Information about a B-spline control point converted from a Bézier path.

## Declaration

```swift
struct ConvertedBezierPoint
```

## Mentioned In

- [Importing Bézier path data into PencilKit](../importing-external-drawing-data-into-pencilkit.md)

<a id="overview"></a>

## Overview

`ConvertedBezierPoint` values are passed one at a time to the `pointProvider` closure of [init(bezierPath:creationDate:pointProvider:)](init%28bezierpath_creationdate_pointprovider_%29.md). Use the provided location, index, and segment information to initialize each `PKStrokePoint` with appropriate size, opacity, force, and other drawing properties.

## Topics

### Getting the point data

- [index](convertedbezierpoint/index.md): The index of the point along the path.
- [pointCount](convertedbezierpoint/pointcount.md): The total number of B-Spline control points in the path.
- [location](convertedbezierpoint/location.md): The location of the cubic uniform B-Spline control point.
- [bezierSegmentIndex](convertedbezierpoint/beziersegmentindex.md): The index of the Bézier segment the point originates from, not including `move to` elements.

### Using reference types

- [PKConvertedBezierPointReference](../pkconvertedbezierpointreference.md): An object that provides information about a B-spline control point converted from a Bézier path.

## See Also

### Creating a new stroke path

- [init()](init%28%29.md): Creates an empty stroke path.
- [init(controlPoints:creationDate:)](init%28controlpoints_creationdate_%29.md): Creates a stroke path with the cubic B-spline control points and a date that you specify.
- [init(controlPoints:creationDate:id:)](init%28controlpoints_creationdate_id_%29.md): Creates a stroke path with the specified cubic B-spline control points and a unique identifier.
- [init(bezierPath:creationDate:pointProvider:)](init%28bezierpath_creationdate_pointprovider_%29.md): Creates a stroke path recreating the specified Bézier path as a cubic uniform B-Spline.
