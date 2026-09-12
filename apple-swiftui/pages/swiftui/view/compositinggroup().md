> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/compositinggroup()](https://developer.apple.com/documentation/swiftui/view/compositinggroup())

# compositingGroup()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Wraps this view in a compositing group.

## Declaration

```swift
nonisolated func compositingGroup() -> some View

```

<a id="return-value"></a>

## Return Value

A view that wraps this view in a compositing group.

<a id="discussion"></a>

## Discussion

A compositing group makes compositing effects in this view’s ancestor views, such as opacity and the blend mode, take effect before this view is rendered.

Use `compositingGroup()` to apply effects to a parent view before applying effects to this view.

In the example below the `compositingGroup()` modifier separates the application of effects into stages. It applies the [opacity(\_:)](opacity%28__%29.md) effect to the VStack before the `blur(radius:)` effect is applied to the views inside the enclosed [ZStack](../zstack.md). This limits the scope of the opacity change to the outermost view.

```swift
VStack {
    ZStack {
        Text("CompositingGroup")
            .foregroundColor(.black)
            .padding(20)
            .background(Color.red)
        Text("CompositingGroup")
            .blur(radius: 2)
    }
    .font(.largeTitle)
    .compositingGroup()
    .opacity(0.9)
}
```

![A view showing the effect of the compositingGroup modifier in applying](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-compositingGroup@2x.png)

## See Also

### Compositing views

- [blendMode(\_:)](blendmode%28__%29.md): Sets the blend mode for compositing this view with overlapping views.
- [drawingGroup(opaque:colorMode:)](drawinggroup%28opaque_colormode_%29.md): Composites this view’s contents into an offscreen image before final display.
- [BlendMode](../blendmode.md): Modes for compositing a view with overlapping content.
- [ColorRenderingMode](../colorrenderingmode.md): The set of possible working color spaces for color-compositing operations.
- [CompositorContent](../compositorcontent.md)
- [CompositorContentBuilder](../compositorcontentbuilder.md): A result builder for composing a collection of [CompositorContent](../compositorcontent.md) elements.
- [AnyCompositorContent](../anycompositorcontent.md): Type erased compositor content.
