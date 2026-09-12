> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkdrawing-swift.struct](https://developer.apple.com/documentation/pencilkit/pkdrawing-swift.struct)

# PKDrawing

**Framework:** PencilKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

A structure representing the drawing information captured by a canvas view.

## Declaration

```swift
struct PKDrawing
```

## Mentioned In

- [Supporting backward compatibility for ink types](supporting-backward-compatibility-for-ink-types.md)
- [Recognizing handwriting and converting it to text](recognizing-handwriting-and-converting-to-text.md)
- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md)

<a id="overview"></a>

## Overview

A [PKDrawing](pkdrawing-swift.struct.md) object stores the user-drawn content from a [PKCanvasView](pkcanvasview.md) object. You use drawing objects to store the data associated with your user’s drawings. You can save this data with the rest of your app’s content, and you can use that saved data to create a new drawing object later. You can also generate an image based on the drawn content that you can copy to the pasteboard, save to disk, or share.

## Topics

### Creating a drawing object

- [init(strokes:)](pkdrawing-swift.struct/init%28strokes_%29.md): Creates a drawing object and populates it with a sequence of strokes the user provides.
- [init(data:)](pkdrawing-swift.struct/init%28data_%29.md): Creates a drawing object and populates it with previously drawn content.
- [init()](pkdrawing-swift.struct/init%28%29.md): Creates an empty drawing object.

### Getting the canvas bounds

- [bounds](pkdrawing-swift.struct/bounds.md): The smallest rectangle used to represent the content’s bounds, taking into account line widths of that content.

### Generating an image

- [image(from:scale:)](pkdrawing-swift.struct/image%28from_scale_%29-220d0.md): Returns an image object that contains the specified portion of the drawing.
- [image(from:scale:)](pkdrawing-swift.struct/image%28from_scale_%29-6p3zc.md): Returns an image object that contains the specified portion of the drawing.

### Getting the drawing data

- [strokes](pkdrawing-swift.struct/strokes.md): The array of strokes that make up the drawing.
- [dataRepresentation()](pkdrawing-swift.struct/datarepresentation%28%29.md): Returns a raw data representation of the rendered content.
- [PKAppleDrawingTypeIdentifier](pkappledrawingtypeidentifier.md): The uniform type identifier for data associated with a drawing object.

### Modifying the drawing

- [transform(using:)](pkdrawing-swift.struct/transform%28using_%29.md): Applies the specified transform to the contents of this drawing.
- [transformed(using:)](pkdrawing-swift.struct/transformed%28using_%29.md): Applies the specified transform and returns a new drawing.
- [append(\_:)](pkdrawing-swift.struct/append%28__%29.md): Appends the contents of the specified drawing object to an existing drawing object that you provide.
- [appending(\_:)](pkdrawing-swift.struct/appending%28__%29.md): Returns a new drawing created by appending the current drawing with another drawing you provide.

### Supporting backward compatibility

- [requiredContentVersion](pkdrawing-swift.struct/requiredcontentversion.md): The version of PencilKit necessary to use the drawing.

### Using reference types

- [PKDrawingReference](pkdrawingreference.md): A data structure that contains the drawing information captured by a canvas view.

### Instance Methods

- [draw(in:frame:from:darkUserInterfaceStyle:)](pkdrawing-swift.struct/draw%28in_frame_from_darkuserinterfacestyle_%29.md): Draws the drawing in the specified rectangle.
- [erasePath(\_:mask:transform:)](pkdrawing-swift.struct/erasepath%28__mask_transform_%29-2b2u3.md)
- [erasePath(\_:mask:transform:)](pkdrawing-swift.struct/erasepath%28__mask_transform_%29-shn.md)
- [erasingPath(\_:mask:transform:)](pkdrawing-swift.struct/erasingpath%28__mask_transform_%29-2txi7.md)
- [erasingPath(\_:mask:transform:)](pkdrawing-swift.struct/erasingpath%28__mask_transform_%29-9dpi9.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Canvas

- [Drawing with PencilKit](drawing-with-pencilkit.md): Add expressive, low-latency drawing to your app using PencilKit.
- [Customizing Scribble with Interactions](customizing-scribble-with-interactions.md): Enable writing on a non-text-input view by adding interactions.
- [Inspecting, Modifying, and Constructing PencilKit Drawings](inspecting-modifying-and-constructing-pencilkit-drawings.md): Score users’ ability to match PencilKit drawings generated from text, by accessing the strokes and points inside PencilKit drawings.
- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md): Convert existing Bézier-based stroke data into PencilKit drawing strokes.
- [Controlling stroke rendering for animation and editing](controlling-stroke-rendering-for-animation-and-editing.md): Slice, animate, and blend PencilKit strokes in code, while keeping grain texture and wet ink intact.
- [PKCanvasView](pkcanvasview.md): A view that captures Apple Pencil input and displays the rendered results in an iOS app.
- [PKStroke](pkstroke-swift.struct.md): A structure that represents the paths, boundaries, and other properties of a stroke drawn on a canvas.
- [PKStrokePath](pkstrokepath-swift.struct.md): A structure that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.
- [PKStrokePoint](pkstrokepoint-swift.struct.md): A structure that represents the properties of a specific point along a stroke’s path.
- [PKInk](pkink-swift.struct.md): A structure that represents an ink that specifies its type, color, and width.
