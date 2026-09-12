> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/blendmode(_:)](https://developer.apple.com/documentation/swiftui/view/blendmode(_:))

# blendMode(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the blend mode for compositing this view with overlapping views.

## Declaration

```swift
nonisolated func blendMode(_ blendMode: BlendMode) -> some View

```

## Parameters

- `blendMode`: The [BlendMode](../blendmode.md) for compositing this view.

<a id="return-value"></a>

## Return Value

A view that applies `blendMode` to this view.

<a id="discussion"></a>

## Discussion

Use `blendMode(_:)` to combine overlapping views and use a different visual effect to produce the result. The [BlendMode](../blendmode.md) enumeration defines many possible effects.

In the example below, the two overlapping rectangles have a [BlendMode.colorBurn](../blendmode/colorburn.md) effect applied, which effectively removes the non-overlapping portion of the second image:

```swift
HStack {
    Color.yellow.frame(width: 50, height: 50, alignment: .center)

    Color.red.frame(width: 50, height: 50, alignment: .center)
        .rotationEffect(.degrees(45))
        .padding(-20)
        .blendMode(.colorBurn)
}
```

![Two overlapping rectangles showing the effect of the blend mode view](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-blendMode@2x.png)

## See Also

### Compositing views

- [compositingGroup()](compositinggroup%28%29.md): Wraps this view in a compositing group.
- [drawingGroup(opaque:colorMode:)](drawinggroup%28opaque_colormode_%29.md): Composites this view’s contents into an offscreen image before final display.
- [BlendMode](../blendmode.md): Modes for compositing a view with overlapping content.
- [ColorRenderingMode](../colorrenderingmode.md): The set of possible working color spaces for color-compositing operations.
- [CompositorContent](../compositorcontent.md)
- [CompositorContentBuilder](../compositorcontentbuilder.md): A result builder for composing a collection of [CompositorContent](../compositorcontent.md) elements.
- [AnyCompositorContent](../anycompositorcontent.md): Type erased compositor content.
