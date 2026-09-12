> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkdrawingreference](https://developer.apple.com/documentation/pencilkit/pkdrawingreference)

# PKDrawingReference (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A data structure that contains the drawing information captured by a canvas view.

## Declaration

```swift
class PKDrawingReference
```

<a id="overview"></a>

## Overview

A [PKDrawingReference](pkdrawingreference.md) object stores the user-drawn content from a [PKCanvasView](pkcanvasview.md) object. You use drawing objects to store the data associated with your user’s drawings. You can save this data with the rest of your app’s content, and you can use that saved data to create a new drawing object later. You can also generate an image based on the drawn content.

## Topics

### Creating a drawing object

- [init(data:)](pkdrawingreference/init%28data_%29.md): Creates a drawing object and populates it with previously drawn content.
- [init(strokes:)](pkdrawingreference/init%28strokes_%29.md): Creates a drawing object with the strokes you supply.
- [init()](pkdrawingreference/init%28%29.md): Creates an empty drawing object.

### Getting the canvas bounds

- [bounds](pkdrawingreference/bounds.md): The smallest rectangle used to represent the content’s bounds, taking into account line widths of that content.

### Generating an image

- [image(from:scale:)](pkdrawingreference/image%28from_scale_%29.md): Returns an image object that contains the specified portion of the drawing.

### Getting the drawing data

- [strokes](pkdrawingreference/strokes.md): An array of strokes used to represent the drawing.
- [dataRepresentation()](pkdrawingreference/datarepresentation%28%29.md): Returns a representation of the rendered content as data.
- [PKAppleDrawingTypeIdentifier](pkappledrawingtypeidentifier.md): The uniform type identifier for data associated with a drawing object.

### Modifying the drawing

- [applying(\_:)](pkdrawingreference/applying%28__%29.md): Returns a new drawing object by applying the specified transform to a copy of the current object’s contents.
- [appendingStrokes(\_:)](pkdrawingreference/appendingstrokes%28__%29.md): Returns a copy of the current drawing with the strokes you provide appended.
- [appending(\_:)](pkdrawingreference/appending%28__%29.md): Returns a new drawing created by appending the current drawing with another drawing you provide.

### Supporting backward compatibility

- [requiredContentVersion](pkdrawingreference/requiredcontentversion.md): The version of PencilKit necessary to use the drawing.

### Initializers

- [init(coder:)](pkdrawingreference/init%28coder_%29.md)

### Instance Methods

- [erasingStrokePath(\_:mask:transform:)](pkdrawingreference/erasingstrokepath%28__mask_transform_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# PKDrawing (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A data structure that contains the drawing information captured by a canvas view.

## Declaration

```objectivec
@interface PKDrawing : NSObject
```

<a id="overview"></a>

## Overview

A [PKDrawing](pkdrawingreference.md) object stores the user-drawn content from a [PKCanvasView](pkcanvasview.md) object. You use drawing objects to store the data associated with your user’s drawings. You can save this data with the rest of your app’s content, and you can use that saved data to create a new drawing object later. You can also generate an image based on the drawn content.

## Topics

### Creating a drawing object

- [initWithData:error:](pkdrawingreference/init%28data_%29.md): Creates a drawing object and populates it with previously drawn content.
- [initWithStrokes:](pkdrawingreference/init%28strokes_%29.md): Creates a drawing object with the strokes you supply.
- [init](pkdrawingreference/init%28%29.md): Creates an empty drawing object.

### Getting the canvas bounds

- [bounds](pkdrawingreference/bounds.md): The smallest rectangle used to represent the content’s bounds, taking into account line widths of that content.

### Generating an image

- [imageFromRect:scale:](pkdrawingreference/image%28from_scale_%29.md): Returns an image object that contains the specified portion of the drawing.

### Getting the drawing data

- [strokes](pkdrawingreference/strokes.md): An array of strokes used to represent the drawing.
- [dataRepresentation](pkdrawingreference/datarepresentation%28%29.md): Returns a representation of the rendered content as data.
- [PKAppleDrawingTypeIdentifier](pkappledrawingtypeidentifier.md): The uniform type identifier for data associated with a drawing object.

### Modifying the drawing

- [drawingByApplyingTransform:](pkdrawingreference/applying%28__%29.md): Returns a new drawing object by applying the specified transform to a copy of the current object’s contents.
- [drawingByAppendingStrokes:](pkdrawingreference/appendingstrokes%28__%29.md): Returns a copy of the current drawing with the strokes you provide appended.
- [drawingByAppendingDrawing:](pkdrawingreference/appending%28__%29.md): Returns a new drawing created by appending the current drawing with another drawing you provide.

### Supporting backward compatibility

- [requiredContentVersion](pkdrawingreference/requiredcontentversion.md): The version of PencilKit necessary to use the drawing.

### Instance Methods

- [drawingByErasingStrokePath:mask:transform:](pkdrawingreference/erasingstrokepath%28__mask_transform_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Canvas

- [Drawing with PencilKit](drawing-with-pencilkit.md): Add expressive, low-latency drawing to your app using PencilKit.
- [Customizing Scribble with Interactions](customizing-scribble-with-interactions.md): Enable writing on a non-text-input view by adding interactions.
- [Inspecting, Modifying, and Constructing PencilKit Drawings](inspecting-modifying-and-constructing-pencilkit-drawings.md): Score users’ ability to match PencilKit drawings generated from text, by accessing the strokes and points inside PencilKit drawings.
- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md): Convert existing Bézier-based stroke data into PencilKit drawing strokes.
- [Controlling stroke rendering for animation and editing](controlling-stroke-rendering-for-animation-and-editing.md): Slice, animate, and blend PencilKit strokes in code, while keeping grain texture and wet ink intact.
- [PKCanvasView](pkcanvasview.md): A view that captures Apple Pencil input and displays the rendered results in an iOS app.
- [PKStroke](pkstrokereference.md): A class that represents the paths, boundaries and other properties of a stroke drawn on a canvas.
- [PKStrokePath](pkstrokepathreference.md): A class that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.
- [PKStrokePoint](pkstrokepointreference.md): A class that represents the properties of a specific point along a stroke’s path.
- [PKInk](pkinkreference.md): Provides a description of the creation and rendering of marks on a canvas.
- [PKStrokeRenderState](pkstrokerenderstatereference.md): An object that captures the render-time state of a stroke, such as grain texture position.
- [PKConvertedBezierPoint](pkconvertedbezierpointreference.md): An object that provides information about a B-spline control point converted from a Bézier path.
- [PKFloatRange](pkfloatrange.md): A utility class that represents range components of a stroke.
- [PKInkTypeReed](pkinktypereed.md)
