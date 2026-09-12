> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/overlay(_:in:fillstyle:)](https://developer.apple.com/documentation/swiftui/view/overlay(_:in:fillstyle:))

# overlay(\_:in:fillStyle:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Layers a shape that you specify in front of this view.

## Declaration

```swift
nonisolated func overlay<S, T>(_ style: S, in shape: T, fillStyle: FillStyle = FillStyle()) -> some View where S : ShapeStyle, T : Shape

```

## Parameters

- `style`: A [ShapeStyle](../shapestyle.md) that SwiftUI uses to fill the shape that you specify.
- `shape`: An instance of a type that conforms to [Shape](../shape.md) that SwiftUI draws in front of the view.
- `fillStyle`: The [FillStyle](../fillstyle.md) to use when drawing the shape. The default style uses the nonzero winding number rule and antialiasing.

<a id="return-value"></a>

## Return Value

A view with the specified shape drawn in front of it.

<a id="discussion"></a>

## Discussion

Use this modifier to layer a type that conforms to the [Shape](../shape.md) protocol — like a [Rectangle](../rectangle.md), [Circle](../circle.md), or [Capsule](../capsule.md) — in front of a view. Specify a [ShapeStyle](../shapestyle.md) that’s used to fill the shape. For example, you can overlay the outline of one rectangle in front of another:

```swift
Rectangle()
    .frame(width: 200, height: 100)
    .overlay(.teal, in: Rectangle().inset(by: 10).stroke(lineWidth: 5))
```

The example above uses the [inset(by:)](../insettableshape/inset%28by_%29.md) method to slightly reduce the size of the overlaid rectangle, and the [stroke(lineWidth:)](../shape/stroke%28linewidth_%29.md) method to fill only the shape’s outline. This creates an inset border:

![A screenshot of a rectangle with a teal border that’s](https://developer.apple.com/images/com.apple.SwiftUI/View-overlay-7@2x.png)

This modifier is a convenience method for layering a shape over a view. To handle the more general case of overlaying a [View](../view.md) — or a stack of views — with control over the position, use [overlay(alignment:content:)](overlay%28alignment_content_%29.md) instead. To cover a view with a [ShapeStyle](../shapestyle.md), use [overlay(\_:ignoresSafeAreaEdges:)](overlay%28__ignoressafeareaedges_%29.md).

## See Also

### Layering views

- [Adding a background to your view](../adding-a-background-to-your-view.md): Compose a background behind your view and extend it beyond the safe area insets.
- [ZStack](../zstack.md): A view that overlays its subviews, aligning them in both axes.
- [zIndex(\_:)](zindex%28__%29.md): Controls the display order of overlapping views.
- [background(alignment:content:)](background%28alignment_content_%29.md): Layers the views that you specify behind this view.
- [background(\_:ignoresSafeAreaEdges:)](background%28__ignoressafeareaedges_%29.md): Sets the view’s background to a style.
- [background(ignoresSafeAreaEdges:)](background%28ignoressafeareaedges_%29.md): Sets the view’s background to the default background style.
- [background(\_:in:fillStyle:)](background%28__in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with a style.
- [background(in:fillStyle:)](background%28in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with the default background style.
- [overlay(alignment:content:)](overlay%28alignment_content_%29.md): Layers the views that you specify in front of this view.
- [overlay(\_:ignoresSafeAreaEdges:)](overlay%28__ignoressafeareaedges_%29.md): Layers the specified style in front of this view.
- [backgroundMaterial](../environmentvalues/backgroundmaterial.md): The material underneath the current view.
- [containerBackground(\_:for:)](containerbackground%28__for_%29.md): Sets the container background of the enclosing container using a view.
- [containerBackground(for:alignment:content:)](containerbackground%28for_alignment_content_%29.md): Sets the container background of the enclosing container using a view.
- [ContainerBackgroundPlacement](../containerbackgroundplacement.md): The placement of a container background.
