> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstroke-swift.struct](https://developer.apple.com/documentation/pencilkit/pkstroke-swift.struct)

# PKStroke

**Framework:** PencilKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A structure that represents the paths, boundaries, and other properties of a stroke drawn on a canvas.

## Declaration

```swift
struct PKStroke
```

## Mentioned In

- [Importing Bézier path data into PencilKit](importing-external-drawing-data-into-pencilkit.md)
- [Supporting backward compatibility for ink types](supporting-backward-compatibility-for-ink-types.md)

## Topics

### Creating a stroke object

- [init(ink:path:transform:mask:)](pkstroke-swift.struct/init%28ink_path_transform_mask_%29-1imp6.md): Creates a stroke with the line properties, path, transform, and mask that you specify.
- [init(ink:path:transform:mask:)](pkstroke-swift.struct/init%28ink_path_transform_mask_%29-w7ti.md): Creates a stroke with the line properties, path, transform, and mask that you specify.
- [init(ink:path:transform:mask:randomSeed:)](pkstroke-swift.struct/init%28ink_path_transform_mask_randomseed_%29-10m5j.md): Creates a stroke with the line properties, path, transform, mask, and random seed that you specify.
- [init(ink:path:transform:mask:randomSeed:)](pkstroke-swift.struct/init%28ink_path_transform_mask_randomseed_%29-epus.md): Creates a macOS stroke with the line properties, path, transform, mask, and random seed that you specify.

### Getting the stroke properties

- [ink](pkstroke-swift.struct/ink.md): The Ink, which is a combination of a tool used to render this stroke.
- [mask](pkstroke-swift.struct/mask-8g6sx.md): The pretransform mask used to clip the rendering of the stroke.
- [mask](pkstroke-swift.struct/mask-16kkz.md): The pretransform mask used to clip the rendering of the stroke.
- [maskedPathRanges](pkstroke-swift.struct/maskedpathranges.md): The range of points in the stroke path reference that intersect the stroke’s mask.
- [path](pkstroke-swift.struct/path.md): The B-spline path that describes this stroke.
- [renderBounds](pkstroke-swift.struct/renderbounds.md): The bounds of the rendered stroke, including the width and line properties of the stroke after applying the transform.
- [transform](pkstroke-swift.struct/transform.md): The affine transform of the stroke after rendering.
- [randomSeed](pkstroke-swift.struct/randomseed.md)

### Identifying the stroke

- [id](pkstroke-swift.struct/id.md): The unique identity of the stroke.

### Manipulating strokes

- [substroke(range:)](pkstroke-swift.struct/substroke%28range_%29.md): Returns a copy of this stroke containing the control points in the given range.

### Configuring rendering

- [renderGroupID](pkstroke-swift.struct/rendergroupid.md): Strokes with certain inks (such as marker) can composite to look as if they were drawn while the previous stroke with the same ink was still wet. This UUID may be set to a single value for a run of strokes which should be rendered together in this manner.
- [renderState](pkstroke-swift.struct/renderstate-swift.property.md): Contains information about the render details (such as particle positioning) of this stroke, which can be useful when manipulating the model in certain ways. For example, this may be set on substrokes returned by `substroke(range:)`. nil uses default rendering.
- [PKStroke.RenderState](pkstroke-swift.struct/renderstate-swift.struct.md): A value that captures the render-time state of a stroke, such as grain texture position.

### Supporting backward compatibility

- [requiredContentVersion](pkstroke-swift.struct/requiredcontentversion.md): The version of PencilKit necessary to use the stroke.

### Using reference types

- [PKStrokeReference](pkstrokereference.md): A class that represents the paths, boundaries and other properties of a stroke drawn on a canvas.

### Initializers

- [init(ink:path:transform:mask:randomSeed:id:renderGroupID:renderState:)](pkstroke-swift.struct/init%28ink_path_transform_mask_randomseed_id_rendergroupid_renderstate_%29-1qvj7.md)
- [init(ink:path:transform:mask:randomSeed:id:renderGroupID:renderState:)](pkstroke-swift.struct/init%28ink_path_transform_mask_randomseed_id_rendergroupid_renderstate_%29-idqu.md)

### Default Implementations

- [Identifiable Implementations](pkstroke-swift.struct/identifiable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Markup](../paperkit/markup.md)
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
- [PKStrokePath](pkstrokepath-swift.struct.md): A structure that captures the components of a stroke and provides methods to find and interpolate points along the stroke’s path.
- [PKStrokePoint](pkstrokepoint-swift.struct.md): A structure that represents the properties of a specific point along a stroke’s path.
- [PKInk](pkink-swift.struct.md): A structure that represents an ink that specifies its type, color, and width.
