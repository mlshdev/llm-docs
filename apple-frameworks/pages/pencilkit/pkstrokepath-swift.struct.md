> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepath-swift.struct](https://developer.apple.com/documentation/pencilkit/pkstrokepath-swift.struct)

# PKStrokePath

**Framework:** PencilKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A structure that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.

## Declaration

```swift
struct PKStrokePath
```

## Mentioned In

- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md)

## Topics

### Creating a new stroke path

- [init()](pkstrokepath-swift.struct/init%28%29.md): Creates an empty stroke path.
- [init(controlPoints:creationDate:)](pkstrokepath-swift.struct/init%28controlpoints_creationdate_%29.md): Creates a stroke path with the cubic B-spline control points and a date that you specify.
- [init(controlPoints:creationDate:id:)](pkstrokepath-swift.struct/init%28controlpoints_creationdate_id_%29.md): Creates a stroke path with the specified cubic B-spline control points and a unique identifier.
- [init(bezierPath:creationDate:pointProvider:)](pkstrokepath-swift.struct/init%28bezierpath_creationdate_pointprovider_%29.md): Creates a stroke path recreating the specified Bézier path as a cubic uniform B-Spline.
- [PKStrokePath.ConvertedBezierPoint](pkstrokepath-swift.struct/convertedbezierpoint.md): Information about a B-spline control point converted from a Bézier path.

### Identifying the path

- [id](pkstrokepath-swift.struct/id.md): The unique identity of the stroke path.

### Converting to and from Bézier paths

- [bezierRepresentation](pkstrokepath-swift.struct/bezierrepresentation.md): A Bézier path representation of the path’s curve, computed in linear time.

### Getting the stroke path properties

- [creationDate](pkstrokepath-swift.struct/creationdate.md): The creation date and time of this stroke path.

### Accessing and interpolating points

- [interpolatedPoints(in:by:)](pkstrokepath-swift.struct/interpolatedpoints%28in_by_%29.md): Returns the slice on-curve points using the floating point range and stride that you specify.
- [interpolatedLocation(at:)](pkstrokepath-swift.struct/interpolatedlocation%28at_%29.md): Returns the on-curve point for the floating point parametric value.
- [interpolatedPoint(at:)](pkstrokepath-swift.struct/interpolatedpoint%28at_%29.md): Returns the on-curve point for the provided floating point parameter.
- [parametricValue(\_:offsetBy:)](pkstrokepath-swift.struct/parametricvalue%28__offsetby_%29.md)

### Supporting types

- [PKStrokePath.InterpolatedSlice](pkstrokepath-swift.struct/interpolatedslice.md): A struct representing an interpolated slice of stroke points with a specific stride across a range of this stroke data.

### Supporting protocol requirements

- [Protocol implementations](pkstrokepath-protocol-implementations.md): Access the stroke path’s implementations of protocol methods.

### Using reference types

- [PKStrokePathReference](pkstrokepathreference.md): A class that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.

### Subscripts

- [subscript(\_:)](pkstrokepath-swift.struct/subscript%28__%29.md): Access the stroke point at the provided index.

### Default Implementations

- [Identifiable Implementations](pkstrokepath-swift.struct/identifiable-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Canvas

- [Drawing with PencilKit](drawing-with-pencilkit.md): Add expressive, low-latency drawing to your app using PencilKit.
- [Customizing Scribble with Interactions](customizing-scribble-with-interactions.md): Enable writing on a non-text-input view by adding interactions.
- [Inspecting, Modifying, and Constructing PencilKit Drawings](inspecting-modifying-and-constructing-pencilkit-drawings.md): Score users’ ability to match PencilKit drawings generated from text, by accessing the strokes and points inside PencilKit drawings.
- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md): Convert existing Bézier-based stroke data into PencilKit drawing strokes.
- [Controlling stroke rendering for animation and editing](controlling-stroke-rendering-for-animation-and-editing.md): Slice, animate, and blend PencilKit strokes in code, while keeping grain texture and wet ink intact.
- [PKCanvasView](pkcanvasview.md): A view that captures Apple Pencil input and displays the rendered results in an iOS app.
- [PKDrawing](pkdrawing-swift.struct.md): A structure representing the drawing information captured by a canvas view.
- [PKStroke](pkstroke-swift.struct.md): A structure that represents the paths, boundaries, and other properties of a stroke drawn on a canvas.
- [PKStrokePoint](pkstrokepoint-swift.struct.md): A structure that represents the properties of a specific point along a stroke’s path.
- [PKInk](pkink-swift.struct.md): A structure that represents an ink that specifies its type, color, and width.
