> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/clip(to:style:options:)](https://developer.apple.com/documentation/swiftui/graphicscontext/clip(to:style:options:))

# clip(to:style:options:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds a path to the context’s array of clip shapes.

## Declaration

```swift
mutating func clip(to path: Path, style: FillStyle = FillStyle(), options: GraphicsContext.ClipOptions = ClipOptions())
```

## Parameters

- `path`: A [Path](../path.md) that defines the shape of the clipping mask.
- `style`: A [FillStyle](../fillstyle.md) that defines how to rasterize the shape.
- `options`: Clip options that tell SwiftUI how to interpret the `path` as a clip shape. For example, you can invert the clip shape by setting the [inverse](clipoptions/inverse.md) option.

<a id="discussion"></a>

## Discussion

Call this method to add a shape to the array of clip shapes that the context uses to define a clipping mask. Shapes that you add affect only subsequent drawing operations.

## See Also

### Masking

- [clipToLayer(opacity:options:content:)](cliptolayer%28opacity_options_content_%29.md): Adds a clip shape that you define in a new layer to the context’s array of clip shapes.
- [clipBoundingRect](clipboundingrect.md): The bounding rectangle of the intersection of all current clip shapes in the current user space.
- [GraphicsContext.ClipOptions](clipoptions.md): Options that affect the use of clip shapes.
