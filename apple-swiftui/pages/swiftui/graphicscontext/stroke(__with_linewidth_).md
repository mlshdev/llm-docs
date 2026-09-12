> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/stroke(_:with:linewidth:)](https://developer.apple.com/documentation/swiftui/graphicscontext/stroke(_:with:linewidth:))

# stroke(\_:with:lineWidth:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Draws a path into the context with a specified line width.

## Declaration

```swift
func stroke(_ path: Path, with shading: GraphicsContext.Shading, lineWidth: CGFloat = 1)
```

## Parameters

- `path`: The path to outline.
- `shading`: The color or pattern to use when outlining the `path`.
- `lineWidth`: The width of the stroke, which defaults to `1`.

<a id="discussion"></a>

## Discussion

When you call this method, all [StrokeStyle](../strokestyle.md) properties other than [lineWidth](../strokestyle/linewidth.md) take their default values. To control other style properties, use [stroke(\_:with:style:)](stroke%28__with_style_%29.md) instead.

## See Also

### Drawing a path

- [stroke(\_:with:style:)](stroke%28__with_style_%29.md): Draws a path into the context with a specified stroke style.
- [fill(\_:with:style:)](fill%28__with_style_%29.md): Draws a path into the context and fills the outlined region.
- [GraphicsContext.Shading](shading.md): A color or pattern that you can use to outline or fill a path.
- [GraphicsContext.GradientOptions](gradientoptions.md): Options that affect the rendering of color gradients.
