> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepathreference](https://developer.apple.com/documentation/pencilkit/pkstrokepathreference)

# PKStrokePathReference (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A class that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.

## Declaration

```swift
class PKStrokePathReference
```

## Topics

### Creating a new stroke path

- [init(controlPoints:creationDate:)](pkstrokepathreference/init%28controlpoints_creationdate_%29.md): Creates a stroke path with the cubic B-spline control points and a date that you specify.

### Getting the stroke path properties

- [count](pkstrokepathreference/count.md): The number of control points in this stroke path.
- [creationDate](pkstrokepathreference/creationdate.md): The time at which this stroke path starts.

### Accessing and interpolating points

- [enumerateInterpolatedPoints(in:strideByDistance:using:)](pkstrokepathreference/enumerateinterpolatedpoints%28in_stridebydistance_using_%29.md): Deprecated. Executes a given block using each point in a range with a distance step.
- [enumerateInterpolatedPoints(in:strideByParametricStep:using:)](pkstrokepathreference/enumerateinterpolatedpoints%28in_stridebyparametricstep_using_%29.md): Deprecated. Executes a given block using each point in a range with a parametric step.
- [enumerateInterpolatedPoints(in:strideByTime:using:)](pkstrokepathreference/enumerateinterpolatedpoints%28in_stridebytime_using_%29.md): Deprecated. Executes a given block using each point in a range with a time step.
- [interpolatedLocation(at:)](pkstrokepathreference/interpolatedlocation%28at_%29.md): Returns the on-curve point for the floating point parametric value.
- [interpolatedPoint(at:)](pkstrokepathreference/interpolatedpoint%28at_%29.md): Returns the on-curve point for the provided floating point parameter.
- [parametricValue(\_:offsetByDistance:)](pkstrokepathreference/parametricvalue%28__offsetbydistance_%29.md): Returns a parametric value on the B-spline that’s a specified distance from the given parametric value.
- [parametricValue(\_:offsetByTime:)](pkstrokepathreference/parametricvalue%28__offsetbytime_%29.md): Returns a parametric value on the B-spline that’s a specified time from the given parametric value.
- [point(at:)](pkstrokepathreference/point%28at_%29.md): Returns the B-spline control point at an index point that you provide.
- [subscript(\_:)](pkstrokepathreference/subscript%28__%29.md): Returns the B-spline control point the location index that you provide.

### Initializers

- [init(bezierPath:creationDate:pointProvider:)](pkstrokepathreference/init%28bezierpath_creationdate_pointprovider_%29.md): Creates a stroke path recreating the specified Bézier path as a cubic uniform B-Spline.
- [init(controlPoints:creationDate:strokePathID:)](pkstrokepathreference/init%28controlpoints_creationdate_strokepathid_%29.md): Creates a stroke path with the specified control points and a unique identifier.

### Instance Properties

- [bezierRepresentation](pkstrokepathreference/bezierrepresentation.md): A Bézier path representation of the path’s curve, computed in linear time.
- [strokePathID](pkstrokepathreference/strokepathid.md): The unique identity of the stroke path.

### Instance Methods

- [subpath(with:)](pkstrokepathreference/subpath%28with_%29.md): Returns a copy of the path containing the control points in the specified parametric range.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# PKStrokePath (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A class that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.

## Declaration

```objectivec
@interface PKStrokePath : NSObject
```

## Topics

### Creating a new stroke path

- [initWithControlPoints:creationDate:](pkstrokepathreference/init%28controlpoints_creationdate_%29.md): Creates a stroke path with the cubic B-spline control points and a date that you specify.

### Getting the stroke path properties

- [count](pkstrokepathreference/count.md): The number of control points in this stroke path.
- [creationDate](pkstrokepathreference/creationdate.md): The time at which this stroke path starts.

### Accessing and interpolating points

- [enumerateInterpolatedPointsInRange:strideByDistance:usingBlock:](pkstrokepathreference/enumerateinterpolatedpoints%28in_stridebydistance_using_%29.md): Deprecated. Executes a given block using each point in a range with a distance step.
- [enumerateInterpolatedPointsInRange:strideByParametricStep:usingBlock:](pkstrokepathreference/enumerateinterpolatedpoints%28in_stridebyparametricstep_using_%29.md): Deprecated. Executes a given block using each point in a range with a parametric step.
- [enumerateInterpolatedPointsInRange:strideByTime:usingBlock:](pkstrokepathreference/enumerateinterpolatedpoints%28in_stridebytime_using_%29.md): Deprecated. Executes a given block using each point in a range with a time step.
- [interpolatedLocationAt:](pkstrokepathreference/interpolatedlocation%28at_%29.md): Returns the on-curve point for the floating point parametric value.
- [interpolatedPointAt:](pkstrokepathreference/interpolatedpoint%28at_%29.md): Returns the on-curve point for the provided floating point parameter.
- [parametricValue:offsetByDistance:](pkstrokepathreference/parametricvalue%28__offsetbydistance_%29.md): Returns a parametric value on the B-spline that’s a specified distance from the given parametric value.
- [parametricValue:offsetByTime:](pkstrokepathreference/parametricvalue%28__offsetbytime_%29.md): Returns a parametric value on the B-spline that’s a specified time from the given parametric value.
- [pointAtIndex:](pkstrokepathreference/point%28at_%29.md): Returns the B-spline control point at an index point that you provide.
- [objectAtIndexedSubscript:](pkstrokepathreference/subscript%28__%29.md): Returns the B-spline control point the location index that you provide.

### Instance Properties

- [bezierRepresentation](pkstrokepathreference/bezierrepresentation.md): A Bézier path representation of the path’s curve, computed in linear time.
- [strokePathID](pkstrokepathreference/strokepathid.md): The unique identity of the stroke path.

### Instance Methods

- [initWithBezierPath:creationDate:pointProvider:](pkstrokepathreference/init%28bezierpath_creationdate_pointprovider_%29.md): Creates a stroke path recreating the specified Bézier path as a cubic uniform B-Spline.
- [initWithControlPoints:creationDate:strokePathID:](pkstrokepathreference/init%28controlpoints_creationdate_strokepathid_%29.md): Creates a stroke path with the specified control points and a unique identifier.
- [subpathWithRange:](pkstrokepathreference/subpath%28with_%29.md): Returns a copy of the path containing the control points in the specified parametric range.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Canvas

- [Drawing with PencilKit](drawing-with-pencilkit.md): Add expressive, low-latency drawing to your app using PencilKit.
- [Customizing Scribble with Interactions](customizing-scribble-with-interactions.md): Enable writing on a non-text-input view by adding interactions.
- [Inspecting, Modifying, and Constructing PencilKit Drawings](inspecting-modifying-and-constructing-pencilkit-drawings.md): Score users’ ability to match PencilKit drawings generated from text, by accessing the strokes and points inside PencilKit drawings.
- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md): Convert existing Bézier-based stroke data into PencilKit drawing strokes.
- [Controlling stroke rendering for animation and editing](controlling-stroke-rendering-for-animation-and-editing.md): Slice, animate, and blend PencilKit strokes in code, while keeping grain texture and wet ink intact.
- [PKCanvasView](pkcanvasview.md): A view that captures Apple Pencil input and displays the rendered results in an iOS app.
- [PKDrawing](pkdrawingreference.md): A data structure that contains the drawing information captured by a canvas view.
- [PKStroke](pkstrokereference.md): A class that represents the paths, boundaries and other properties of a stroke drawn on a canvas.
- [PKStrokePoint](pkstrokepointreference.md): A class that represents the properties of a specific point along a stroke’s path.
- [PKInk](pkinkreference.md): Provides a description of the creation and rendering of marks on a canvas.
- [PKStrokeRenderState](pkstrokerenderstatereference.md): An object that captures the render-time state of a stroke, such as grain texture position.
- [PKConvertedBezierPoint](pkconvertedbezierpointreference.md): An object that provides information about a B-spline control point converted from a Bézier path.
- [PKFloatRange](pkfloatrange.md): A utility class that represents range components of a stroke.
- [PKInkTypeReed](pkinktypereed.md)
