> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/fill(_:with:style:)](https://developer.apple.com/documentation/swiftui/graphicscontext/fill(_:with:style:))

# fill(\_:with:style:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Draws a path into the context and fills the outlined region.

## Declaration

```swift
func fill(_ path: Path, with shading: GraphicsContext.Shading, style: FillStyle = FillStyle())
```

## Parameters

- `path`: The outline of the region to fill.
- `shading`: The color or pattern to use when filling the region bounded by `path`.
- `style`: A style that indicates how to rasterize the path.

<a id="discussion"></a>

## Discussion

The current drawing state of the context defines the full drawing operation. For example, the current transformation and clip shapes, and any styles applied to the result, affect the final result.

## See Also

### Drawing a path

- [stroke(\_:with:lineWidth:)](stroke%28__with_linewidth_%29.md): Draws a path into the context with a specified line width.
- [stroke(\_:with:style:)](stroke%28__with_style_%29.md): Draws a path into the context with a specified stroke style.
- [GraphicsContext.Shading](shading.md): A color or pattern that you can use to outline or fill a path.
- [GraphicsContext.GradientOptions](gradientoptions.md): Options that affect the rendering of color gradients.
