> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/drawinggroup(opaque:colormode:)](https://developer.apple.com/documentation/swiftui/view/drawinggroup(opaque:colormode:))

# drawingGroup(opaque:colorMode:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Composites this view’s contents into an offscreen image before final display.

## Declaration

```swift
nonisolated func drawingGroup(opaque: Bool = false, colorMode: ColorRenderingMode = .nonLinear) -> some View

```

## Parameters

- `opaque`: A Boolean value that indicates whether the image is opaque. The default is `false`; if set to `true`, the alpha channel of the image must be `1`.
- `colorMode`: One of the working color space and storage formats defined in [ColorRenderingMode](../colorrenderingmode.md). The default is [ColorRenderingMode.nonLinear](../colorrenderingmode/nonlinear.md).

<a id="return-value"></a>

## Return Value

A view that composites this view’s contents into an offscreen image before display.

<a id="discussion"></a>

## Discussion

The `drawingGroup(opaque:colorMode:)` modifier flattens a subtree of views into a single view before rendering it.

In the example below, the contents of the view are composited to a single bitmap; the bitmap is then displayed in place of the view:

```swift
VStack {
    ZStack {
        Text("DrawingGroup")
            .foregroundColor(.black)
            .padding(20)
            .background(Color.red)
        Text("DrawingGroup")
            .blur(radius: 2)
    }
    .font(.largeTitle)
    .compositingGroup()
    .opacity(1.0)
}
.background(Color.white)
.drawingGroup()
```

> **Important**

> The visual result of a drawing group only includes views that SwiftUI rasterizes directly using its own drawing primitives, such as text, images, shapes, and composite views of these types. It will not include views whose contents are composited by Core Animation layers, such as more complex controls and containers, web views, media players, and most types of UIKit and AppKit views. In those cases, the output displays a placeholder image instead. Whether a particular view is rendered using SwiftUI’s own drawing primitives or composited by Core Animation may change in future releases. However, any view that is currently supported is guaranteed to remain supported.

![A screenshot showing the effects on several stacks configured as a](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-drawingGroup@2x.png)

## See Also

### Compositing views

- [blendMode(\_:)](blendmode%28__%29.md): Sets the blend mode for compositing this view with overlapping views.
- [compositingGroup()](compositinggroup%28%29.md): Wraps this view in a compositing group.
- [BlendMode](../blendmode.md): Modes for compositing a view with overlapping content.
- [ColorRenderingMode](../colorrenderingmode.md): The set of possible working color spaces for color-compositing operations.
- [CompositorContent](../compositorcontent.md)
- [CompositorContentBuilder](../compositorcontentbuilder.md): A result builder for composing a collection of [CompositorContent](../compositorcontent.md) elements.
- [AnyCompositorContent](../anycompositorcontent.md): Type erased compositor content.
