> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkfloatrange](https://developer.apple.com/documentation/pencilkit/pkfloatrange)

# PKFloatRange

**Interface language:** Objective-C

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A utility class that represents range components of a stroke.

## Declaration

```objectivec
@interface PKFloatRange : NSObject
```

## Topics

### Creating a new range

- [initWithLowerBound:upperBound:](pkfloatrange/initwithlowerbound_upperbound_.md): A utility class used to contain ranges returned by the PKStroke API.

### Getting the boundaries of the range

- [lowerBound](pkfloatrange/lowerbound.md): A floating point value that represents the lower bound of the range.
- [upperBound](pkfloatrange/upperbound.md): A floating point value that represents the upper bound of the range.

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
- [PKStrokePath](pkstrokepathreference.md): A class that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.
- [PKStrokePoint](pkstrokepointreference.md): A class that represents the properties of a specific point along a stroke’s path.
- [PKInk](pkinkreference.md): Provides a description of the creation and rendering of marks on a canvas.
- [PKStrokeRenderState](pkstrokerenderstatereference.md): An object that captures the render-time state of a stroke, such as grain texture position.
- [PKConvertedBezierPoint](pkconvertedbezierpointreference.md): An object that provides information about a B-spline control point converted from a Bézier path.
- [PKInkTypeReed](pkinktypereed.md)
