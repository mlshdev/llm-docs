> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/cliptolayer(opacity:options:content:)](https://developer.apple.com/documentation/swiftui/graphicscontext/cliptolayer(opacity:options:content:))

# clipToLayer(opacity:options:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds a clip shape that you define in a new layer to the context’s array of clip shapes.

## Declaration

```swift
mutating func clipToLayer(opacity: Double = 1, options: GraphicsContext.ClipOptions = ClipOptions(), content: (inout GraphicsContext) throws -> Void) rethrows
```

## Parameters

- `opacity`: A value that SwiftUI uses to multiply the alpha channel of the rasterized layer that you define in the `content` closure. The alpha values that result define the clip shape.
- `options`: A set of options that tell SwiftUI how to interpret the clip shape. For example, you can invert the clip shape by setting the [inverse](clipoptions/inverse.md) option.
- `content`: A closure that receives as input a new [GraphicsContext](../graphicscontext.md), which represents a new transparency layer. The alpha channel of content that you draw into this context, multiplied by the `opacity` parameter, defines the clip shape.

<a id="discussion"></a>

## Discussion

Call this method to add a shape to the array of clip shapes that the context uses to define a clipping mask. Shapes that you add affect only subsequent drawing operations.

## See Also

### Masking

- [clip(to:style:options:)](clip%28to_style_options_%29.md): Adds a path to the context’s array of clip shapes.
- [clipBoundingRect](clipboundingrect.md): The bounding rectangle of the intersection of all current clip shapes in the current user space.
- [GraphicsContext.ClipOptions](clipoptions.md): Options that affect the use of clip shapes.
