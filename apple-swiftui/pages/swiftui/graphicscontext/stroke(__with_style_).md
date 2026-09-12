> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/stroke(_:with:style:)](https://developer.apple.com/documentation/swiftui/graphicscontext/stroke(_:with:style:))

# stroke(\_:with:style:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Draws a path into the context with a specified stroke style.

## Declaration

```swift
func stroke(_ path: Path, with shading: GraphicsContext.Shading, style: StrokeStyle)
```

## Parameters

- `path`: The path to outline.
- `shading`: The color or pattern to use when outlining the `path`.
- `style`: A style that indicates how to outline the path.

<a id="discussion"></a>

## Discussion

If you only need to control the style’s [lineWidth](../strokestyle/linewidth.md) property, use [stroke(\_:with:lineWidth:)](stroke%28__with_linewidth_%29.md) instead.

## See Also

### Drawing a path

- [stroke(\_:with:lineWidth:)](stroke%28__with_linewidth_%29.md): Draws a path into the context with a specified line width.
- [fill(\_:with:style:)](fill%28__with_style_%29.md): Draws a path into the context and fills the outlined region.
- [GraphicsContext.Shading](shading.md): A color or pattern that you can use to outline or fill a path.
- [GraphicsContext.GradientOptions](gradientoptions.md): Options that affect the rendering of color gradients.
