> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkink-swift.struct](https://developer.apple.com/documentation/pencilkit/pkink-swift.struct)

# PKInk

**Framework:** PencilKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A structure that represents an ink that specifies its type, color, and width.

## Declaration

```swift
struct PKInk
```

## Mentioned In

- [Supporting backward compatibility for ink types](supporting-backward-compatibility-for-ink-types.md)

## Topics

### Creating an ink object

- [init(\_:color:)](pkink-swift.struct/init%28__color_%29-2rx09.md): Creates a new ink, specifying its type and color.
- [init(\_:color:)](pkink-swift.struct/init%28__color_%29-7w46l.md): Creates a new ink, specifying its type and color.
- [PKInk.InkType](pkink-swift.struct/inktype-swift.typealias.md): A type alias referring to the ink type of an inking tool.

### Getting the ink attributes

- [color](pkink-swift.struct/color-cg6f.md): The color of this ink.
- [color](pkink-swift.struct/color-6lmjp.md): The color of this ink.
- [inkType](pkink-swift.struct/inktype-swift.property.md): The line presentation to use for this Ink.

### Supporting backward compatibility

- [requiredContentVersion](pkink-swift.struct/requiredcontentversion.md): The version of PencilKit necessary to use the ink.

### Using reference types

- [PKInkReference](pkinkreference.md): Provides a description of the creation and rendering of marks on a canvas.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
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
- [PKDrawing](pkdrawing-swift.struct.md): A structure representing the drawing information captured by a canvas view.
- [PKStroke](pkstroke-swift.struct.md): A structure that represents the paths, boundaries, and other properties of a stroke drawn on a canvas.
- [PKStrokePath](pkstrokepath-swift.struct.md): A structure that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.
- [PKStrokePoint](pkstrokepoint-swift.struct.md): A structure that represents the properties of a specific point along a stroke’s path.
