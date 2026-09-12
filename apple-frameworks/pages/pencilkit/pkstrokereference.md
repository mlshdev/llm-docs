> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokereference](https://developer.apple.com/documentation/pencilkit/pkstrokereference)

# PKStrokeReference (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A class that represents the paths, boundaries and other properties of a stroke drawn on a canvas.

## Declaration

```swift
class PKStrokeReference
```

## Topics

### Creating a stroke object

- [init(ink:strokePath:transform:mask:)](pkstrokereference/init%28ink_strokepath_transform_mask_%29.md): Creates a stroke with the line properties, path, transform, and mask that you specify.
- [init(ink:strokePath:transform:mask:randomSeed:)](pkstrokereference/init%28ink_strokepath_transform_mask_randomseed_%29.md): Creates a stroke with the line properties, path, transform, mask, and random seed that you specify.

### Getting the stroke properties

- [ink](pkstrokereference/ink.md): The line properties used to render this stroke.
- [mask](pkstrokereference/mask.md): The pretransform mask used to clip the rendering of the stroke.
- [maskedPathRanges](pkstrokereference/maskedpathranges.md): The range of points in the stroke path reference that intersect the stroke’s mask.
- [path](pkstrokereference/path.md): The B-spline path that describes this stroke.
- [renderBounds](pkstrokereference/renderbounds.md): The bounds of the rendered stroke, including the width and line properties of the stroke after applying the transform.
- [transform](pkstrokereference/transform.md): The affine transform of the stroke after rendering.
- [randomSeed](pkstrokereference/randomseed.md): An unsigned 32-bit integer to use as a random seed for drawing strokes that use randomized effects.

### Supporting backward compatibility

- [requiredContentVersion](pkstrokereference/requiredcontentversion.md): The version of PencilKit necessary to use the stroke.

### Initializers

- [init(ink:strokePath:transform:mask:randomSeed:strokeID:renderGroupID:renderState:)](pkstrokereference/init%28ink_strokepath_transform_mask_randomseed_strokeid_rendergroupid_renderstate_%29.md)

### Instance Properties

- [renderGroupID](pkstrokereference/rendergroupid.md): A UUID that groups strokes for wet-ink compositing with compatible inks such as marker.
- [renderState](pkstrokereference/renderstate.md): The render details of the stroke, such as particle positioning. Uses default rendering when nil.
- [strokeID](pkstrokereference/strokeid.md): The unique identity of the stroke.

### Instance Methods

- [substroke(with:)](pkstrokereference/substroke%28with_%29.md): Returns a copy of the stroke containing the control points in the specified range.

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

# PKStroke (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A class that represents the paths, boundaries and other properties of a stroke drawn on a canvas.

## Declaration

```objectivec
@interface PKStroke : NSObject
```

## Topics

### Creating a stroke object

- [initWithInk:strokePath:transform:mask:](pkstrokereference/init%28ink_strokepath_transform_mask_%29.md): Creates a stroke with the line properties, path, transform, and mask that you specify.
- [initWithInk:strokePath:transform:mask:randomSeed:](pkstrokereference/init%28ink_strokepath_transform_mask_randomseed_%29.md): Creates a stroke with the line properties, path, transform, mask, and random seed that you specify.

### Getting the stroke properties

- [ink](pkstrokereference/ink.md): The line properties used to render this stroke.
- [mask](pkstrokereference/mask.md): The pretransform mask used to clip the rendering of the stroke.
- [maskedPathRanges](pkstrokereference/maskedpathranges.md): The range of points in the stroke path reference that intersect the stroke’s mask.
- [path](pkstrokereference/path.md): The B-spline path that describes this stroke.
- [renderBounds](pkstrokereference/renderbounds.md): The bounds of the rendered stroke, including the width and line properties of the stroke after applying the transform.
- [transform](pkstrokereference/transform.md): The affine transform of the stroke after rendering.
- [randomSeed](pkstrokereference/randomseed.md): An unsigned 32-bit integer to use as a random seed for drawing strokes that use randomized effects.

### Supporting backward compatibility

- [requiredContentVersion](pkstrokereference/requiredcontentversion.md): The version of PencilKit necessary to use the stroke.

### Instance Properties

- [renderGroupID](pkstrokereference/rendergroupid.md): A UUID that groups strokes for wet-ink compositing with compatible inks such as marker.
- [renderState](pkstrokereference/renderstate.md): The render details of the stroke, such as particle positioning. Uses default rendering when nil.
- [strokeID](pkstrokereference/strokeid.md): The unique identity of the stroke.

### Instance Methods

- [initWithInk:strokePath:transform:mask:randomSeed:strokeID:renderGroupID:renderState:](pkstrokereference/init%28ink_strokepath_transform_mask_randomseed_strokeid_rendergroupid_renderstate_%29.md)
- [substrokeWithRange:](pkstrokereference/substroke%28with_%29.md): Returns a copy of the stroke containing the control points in the specified range.

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
- [PKStrokePath](pkstrokepathreference.md): A class that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.
- [PKStrokePoint](pkstrokepointreference.md): A class that represents the properties of a specific point along a stroke’s path.
- [PKInk](pkinkreference.md): Provides a description of the creation and rendering of marks on a canvas.
- [PKStrokeRenderState](pkstrokerenderstatereference.md): An object that captures the render-time state of a stroke, such as grain texture position.
- [PKConvertedBezierPoint](pkconvertedbezierpointreference.md): An object that provides information about a B-spline control point converted from a Bézier path.
- [PKFloatRange](pkfloatrange.md): A utility class that represents range components of a stroke.
- [PKInkTypeReed](pkinktypereed.md)
