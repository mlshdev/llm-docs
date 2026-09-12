> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/foregroundstyle(_:_:_:)](https://developer.apple.com/documentation/swiftui/view/foregroundstyle(_:_:_:))

# foregroundStyle(\_:\_:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets the primary, secondary, and tertiary levels of the foreground style.

## Declaration

```swift
nonisolated func foregroundStyle<S1, S2, S3>(_ primary: S1, _ secondary: S2, _ tertiary: S3) -> some View where S1 : ShapeStyle, S2 : ShapeStyle, S3 : ShapeStyle

```

## Parameters

- `primary`: The primary color or pattern to use when filling in the foreground elements. To indicate a specific value, use [Color](../color.md) or [image(\_:sourceRect:scale:)](../shapestyle/image%28__sourcerect_scale_%29.md), or one of the gradient types, like [linearGradient(colors:startPoint:endPoint:)](../shapestyle/lineargradient%28colors_startpoint_endpoint_%29.md). To set a style that’s relative to the containing view’s style, use one of the semantic styles, like [primary](../shapestyle/primary.md).
- `secondary`: The secondary color or pattern to use when filling in the foreground elements.
- `tertiary`: The tertiary color or pattern to use when filling in the foreground elements.

<a id="return-value"></a>

## Return Value

A view that uses the given foreground styles.

<a id="discussion"></a>

## Discussion

SwiftUI uses these styles when rendering child views that don’t have an explicit rendering style, like images, text, shapes, and so on.

Symbol images within the view hierarchy use the [palette](../symbolrenderingmode/palette.md) rendering mode when you apply this modifier, if you don’t explicitly specify another mode.

## See Also

### Styling content

- [border(\_:width:)](border%28__width_%29.md): Adds a border to this view with the specified style and width.
- [foregroundStyle(\_:)](foregroundstyle%28__%29.md): Sets a view’s foreground elements to use a given style.
- [foregroundStyle(\_:\_:)](foregroundstyle%28____%29.md): Sets the primary and secondary levels of the foreground style in the child view.
- [backgroundStyle(\_:)](backgroundstyle%28__%29.md): Sets the specified style to render backgrounds within the view.
- [backgroundStyle](../environmentvalues/backgroundstyle.md): An optional style that overrides the default system background style when set.
- [ShapeStyle](../shapestyle.md): A color or pattern to use when rendering a shape.
- [AnyShapeStyle](../anyshapestyle.md): A type-erased ShapeStyle value.
- [Gradient](../gradient.md): A color gradient represented as an array of color stops, each having a parametric location value.
- [MeshGradient](../meshgradient.md): A two-dimensional gradient defined by a 2D grid of positioned colors.
- [AnyGradient](../anygradient.md): A color gradient.
- [ShadowStyle](../shadowstyle.md): A style to use when rendering shadows.
- [Glass](../glass.md): A structure that defines the configuration of the Liquid Glass material.
