> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkreference](https://developer.apple.com/documentation/pencilkit/pkinkreference)

# PKInkReference (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Provides a description of the creation and rendering of marks on a canvas.

## Declaration

```swift
class PKInkReference
```

## Topics

### Creating an ink

- [init(inkType:color:)](pkinkreference/init%28inktype_color_%29.md): Create a new ink, specifying its type, color.

### Getting the ink attributes

- [color](pkinkreference/color.md): The base color for this ink.
- [inkType](pkinkreference/inktype.md): The type of ink, such as pen or pencil, as defined in the [PKInkType](pkinktype.md) enumeration.

### Supporting backward compatibility

- [requiredContentVersion](pkinkreference/requiredcontentversion.md): The version of PencilKit necessary to use the ink.

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

# PKInk (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Provides a description of the creation and rendering of marks on a canvas.

## Declaration

```objectivec
@interface PKInk : NSObject
```

## Topics

### Creating an ink

- [initWithInkType:color:](pkinkreference/init%28inktype_color_%29.md): Create a new ink, specifying its type, color.

### Getting the ink attributes

- [color](pkinkreference/color.md): The base color for this ink.
- [inkType](pkinkreference/inktype.md): The type of ink, such as pen or pencil, as defined in the [PKInkType](pkinktype.md) enumeration.
- [PKInkType](pkinktype.md): The type that defines the shape of stroked lines.

### Supporting backward compatibility

- [requiredContentVersion](pkinkreference/requiredcontentversion.md): The version of PencilKit necessary to use the ink.

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
- [PKStrokeRenderState](pkstrokerenderstatereference.md): An object that captures the render-time state of a stroke, such as grain texture position.
- [PKConvertedBezierPoint](pkconvertedbezierpointreference.md): An object that provides information about a B-spline control point converted from a Bézier path.
- [PKFloatRange](pkfloatrange.md): A utility class that represents range components of a stroke.
- [PKInkTypeReed](pkinktypereed.md)
