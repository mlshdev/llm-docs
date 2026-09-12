> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/background(ignoressafeareaedges:)](https://developer.apple.com/documentation/swiftui/view/background(ignoressafeareaedges:))

# background(ignoresSafeAreaEdges:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets the view’s background to the default background style.

## Declaration

```swift
nonisolated func background(ignoresSafeAreaEdges edges: Edge.Set = .all) -> some View

```

## Parameters

- `edges`: The set of edges for which to ignore safe area insets when adding the background. The default value is [all](../edge/set/all.md). Specify an empty set to respect safe area insets on all edges.

<a id="return-value"></a>

## Return Value

A view with the [background](../shapestyle/background.md) shape style drawn behind it.

<a id="discussion"></a>

## Discussion

This modifier behaves like [background(\_:ignoresSafeAreaEdges:)](background%28__ignoressafeareaedges_%29.md), except that it always uses the [background](../shapestyle/background.md) shape style. For example, you can add a background to a [Label](../label.md):

```swift
ZStack {
    Color.teal
    Label("Flag", systemImage: "flag.fill")
        .padding()
        .background()
}
```

Without the background modifier, the teal color behind the label shows through the label. With the modifier, the label’s text and icon appear backed by a region filled with a color that’s appropriate for light or dark appearance:

![A screenshot of a flag icon and the word flag inside a rectangle; the](https://developer.apple.com/images/com.apple.SwiftUI/View-background-7@2x.png)

If you want to specify a [View](../view.md) or a stack of views as the background, use [background(alignment:content:)](background%28alignment_content_%29.md) instead. To specify a [Shape](../shape.md) or [InsettableShape](../insettableshape.md), use [background(\_:in:fillStyle:)](background%28__in_fillstyle_%29.md). To configure the background of a presentation, like a sheet, use [presentationBackground(\_:)](presentationbackground%28__%29.md).

## See Also

### Layering views

- [Adding a background to your view](../adding-a-background-to-your-view.md): Compose a background behind your view and extend it beyond the safe area insets.
- [ZStack](../zstack.md): A view that overlays its subviews, aligning them in both axes.
- [zIndex(\_:)](zindex%28__%29.md): Controls the display order of overlapping views.
- [background(alignment:content:)](background%28alignment_content_%29.md): Layers the views that you specify behind this view.
- [background(\_:ignoresSafeAreaEdges:)](background%28__ignoressafeareaedges_%29.md): Sets the view’s background to a style.
- [background(\_:in:fillStyle:)](background%28__in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with a style.
- [background(in:fillStyle:)](background%28in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with the default background style.
- [overlay(alignment:content:)](overlay%28alignment_content_%29.md): Layers the views that you specify in front of this view.
- [overlay(\_:ignoresSafeAreaEdges:)](overlay%28__ignoressafeareaedges_%29.md): Layers the specified style in front of this view.
- [overlay(\_:in:fillStyle:)](overlay%28__in_fillstyle_%29.md): Layers a shape that you specify in front of this view.
- [backgroundMaterial](../environmentvalues/backgroundmaterial.md): The material underneath the current view.
- [containerBackground(\_:for:)](containerbackground%28__for_%29.md): Sets the container background of the enclosing container using a view.
- [containerBackground(for:alignment:content:)](containerbackground%28for_alignment_content_%29.md): Sets the container background of the enclosing container using a view.
- [ContainerBackgroundPlacement](../containerbackgroundplacement.md): The placement of a container background.
