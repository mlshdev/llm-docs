> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/foregroundstyle(_:)](https://developer.apple.com/documentation/swiftui/view/foregroundstyle(_:))

# foregroundStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets a view’s foreground elements to use a given style.

## Declaration

```swift
nonisolated func foregroundStyle<S>(_ style: S) -> some View where S : ShapeStyle

```

## Parameters

- `style`: The color or pattern to use when filling in the foreground elements. To indicate a specific value, use [Color](../color.md) or [image(\_:sourceRect:scale:)](../shapestyle/image%28__sourcerect_scale_%29.md), or one of the gradient types, like [linearGradient(colors:startPoint:endPoint:)](../shapestyle/lineargradient%28colors_startpoint_endpoint_%29.md). To set a style that’s relative to the containing view’s style, use one of the semantic styles, like [primary](../shapestyle/primary.md).

<a id="return-value"></a>

## Return Value

A view that uses the given foreground style.

## Mentioned In

- [Configuring views](../configuring-views.md)

<a id="discussion"></a>

## Discussion

Use this method to style foreground content like text, shapes, and template images (including symbols):

```swift
HStack {
    Image(systemName: "triangle.fill")
    Text("Hello, world!")
    RoundedRectangle(cornerRadius: 5)
        .frame(width: 40, height: 20)
}
.foregroundStyle(.teal)
```

The example above creates a row of [teal](../shapestyle/teal.md) foreground elements:

![A screenshot of a teal triangle, string, and rounded](https://developer.apple.com/images/com.apple.SwiftUI/View-foregroundStyle-1@2x.png)

You can use any style that conforms to the [ShapeStyle](../shapestyle.md) protocol, like the [teal](../shapestyle/teal.md) color in the example above, or the [linearGradient(colors:startPoint:endPoint:)](../shapestyle/lineargradient%28colors_startpoint_endpoint_%29.md) gradient shown below:

```swift
Text("Gradient Text")
    .font(.largeTitle)
    .foregroundStyle(
        .linearGradient(
            colors: [.yellow, .blue],
            startPoint: .top,
            endPoint: .bottom
        )
    )
```

![A screenshot of the words Gradient Text, with letters that](https://developer.apple.com/images/com.apple.SwiftUI/View-foregroundStyle-2@2x.png)

> **Tip**

> If you want to fill a single [Shape](../shape.md) instance with a style, use the [fill(style:)](../shape/fill%28style_%29.md) shape modifier instead because it’s more efficient.

SwiftUI creates a context-dependent render for a given style. For example, a [Color](../color.md) that you load from an asset catalog can have different light and dark appearances, while some styles also vary by platform.

Hierarchical foreground styles like `ShapeStyle/secondary` don’t impose a style of their own, but instead modify other styles. In particular, they modify the primary level of the current foreground style to the degree given by the hierarchical style’s name. To find the current foreground style to modify, SwiftUI looks for the innermost containing style that you apply with the `foregroundStyle(_:)` or the [foregroundColor(\_:)](foregroundcolor%28__%29.md) modifier. If you haven’t specified a style, SwiftUI uses the default foreground style, as in the following example:

```swift
VStack(alignment: .leading) {
    Label("Primary", systemImage: "1.square.fill")
    Label("Secondary", systemImage: "2.square.fill")
        .foregroundStyle(.secondary)
}
```

![A screenshot of two labels with the text primary and secondary.](https://developer.apple.com/images/com.apple.SwiftUI/View-foregroundStyle-3@2x.png)

If you add a foreground style on the enclosing [VStack](../vstack.md), the hierarchical styling responds accordingly:

```swift
VStack(alignment: .leading) {
    Label("Primary", systemImage: "1.square.fill")
    Label("Secondary", systemImage: "2.square.fill")
        .foregroundStyle(.secondary)
}
.foregroundStyle(.blue)
```

![A screenshot of two labels with the text primary and secondary.](https://developer.apple.com/images/com.apple.SwiftUI/View-foregroundStyle-4@2x.png)

When you apply a custom style to a view, the view disables the vibrancy effect for foreground elements in that view, or in any of its child views, that it would otherwise gain from adding a background material — for example, using the [background(\_:ignoresSafeAreaEdges:)](background%28__ignoressafeareaedges_%29.md) modifier. However, hierarchical styles applied to the default foreground don’t disable vibrancy.

## See Also

### Styling content

- [border(\_:width:)](border%28__width_%29.md): Adds a border to this view with the specified style and width.
- [foregroundStyle(\_:\_:)](foregroundstyle%28____%29.md): Sets the primary and secondary levels of the foreground style in the child view.
- [foregroundStyle(\_:\_:\_:)](foregroundstyle%28______%29.md): Sets the primary, secondary, and tertiary levels of the foreground style.
- [backgroundStyle(\_:)](backgroundstyle%28__%29.md): Sets the specified style to render backgrounds within the view.
- [backgroundStyle](../environmentvalues/backgroundstyle.md): An optional style that overrides the default system background style when set.
- [ShapeStyle](../shapestyle.md): A color or pattern to use when rendering a shape.
- [AnyShapeStyle](../anyshapestyle.md): A type-erased ShapeStyle value.
- [Gradient](../gradient.md): A color gradient represented as an array of color stops, each having a parametric location value.
- [MeshGradient](../meshgradient.md): A two-dimensional gradient defined by a 2D grid of positioned colors.
- [AnyGradient](../anygradient.md): A color gradient.
- [ShadowStyle](../shadowstyle.md): A style to use when rendering shadows.
- [Glass](../glass.md): A structure that defines the configuration of the Liquid Glass material.
