> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/backgroundmaterial](https://developer.apple.com/documentation/swiftui/environmentvalues/backgroundmaterial)

# backgroundMaterial

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The material underneath the current view.

## Declaration

```swift
var backgroundMaterial: Material? { get set }
```

<a id="discussion"></a>

## Discussion

This value is `nil` if the current background isn’t one of the standard materials. If you set a material, the standard content styles enable their vibrant rendering modes.

You set this value by calling one of the background modifiers that takes a [ShapeStyle](../shapestyle.md), like [background(\_:ignoresSafeAreaEdges:)](../view/background%28__ignoressafeareaedges_%29.md) or [background(\_:in:fillStyle:)](../view/background%28__in_fillstyle_%29.md), and passing in a [Material](../material.md). You can also set the value manually, using `nil` to disable vibrant rendering, or a [Material](../material.md) instance to enable the vibrancy style associated with the specified material.

## See Also

### Layering views

- [Adding a background to your view](../adding-a-background-to-your-view.md): Compose a background behind your view and extend it beyond the safe area insets.
- [ZStack](../zstack.md): A view that overlays its subviews, aligning them in both axes.
- [zIndex(\_:)](../view/zindex%28__%29.md): Controls the display order of overlapping views.
- [background(alignment:content:)](../view/background%28alignment_content_%29.md): Layers the views that you specify behind this view.
- [background(\_:ignoresSafeAreaEdges:)](../view/background%28__ignoressafeareaedges_%29.md): Sets the view’s background to a style.
- [background(ignoresSafeAreaEdges:)](../view/background%28ignoressafeareaedges_%29.md): Sets the view’s background to the default background style.
- [background(\_:in:fillStyle:)](../view/background%28__in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with a style.
- [background(in:fillStyle:)](../view/background%28in_fillstyle_%29.md): Sets the view’s background to an insettable shape filled with the default background style.
- [overlay(alignment:content:)](../view/overlay%28alignment_content_%29.md): Layers the views that you specify in front of this view.
- [overlay(\_:ignoresSafeAreaEdges:)](../view/overlay%28__ignoressafeareaedges_%29.md): Layers the specified style in front of this view.
- [overlay(\_:in:fillStyle:)](../view/overlay%28__in_fillstyle_%29.md): Layers a shape that you specify in front of this view.
- [containerBackground(\_:for:)](../view/containerbackground%28__for_%29.md): Sets the container background of the enclosing container using a view.
- [containerBackground(for:alignment:content:)](../view/containerbackground%28for_alignment_content_%29.md): Sets the container background of the enclosing container using a view.
- [ContainerBackgroundPlacement](../containerbackgroundplacement.md): The placement of a container background.
