> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/frame(width:height:alignment:)](https://developer.apple.com/documentation/swiftui/view/frame(width:height:alignment:))

# frame(width:height:alignment:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Positions this view within an invisible frame with the specified size.

## Declaration

```swift
nonisolated func frame(width: CGFloat? = nil, height: CGFloat? = nil, alignment: Alignment = .center) -> some View

```

## Parameters

- `width`: A fixed width for the resulting view. If `width` is `nil`, the resulting view assumes this view’s sizing behavior.
- `height`: A fixed height for the resulting view. If `height` is `nil`, the resulting view assumes this view’s sizing behavior.
- `alignment`: The alignment of this view inside the resulting frame. Note that most alignment values have no apparent effect when the size of the frame happens to match that of this view.

<a id="return-value"></a>

## Return Value

A view with fixed dimensions of `width` and `height`, for the parameters that are non-`nil`.

## Mentioned In

- [Building layouts with stack views](../building-layouts-with-stack-views.md)
- [Configuring views](../configuring-views.md)
- [Laying out a simple view](../laying-out-a-simple-view.md)

<a id="discussion"></a>

## Discussion

Use this method to specify a fixed size for a view’s width, height, or both. If you only specify one of the dimensions, the resulting view assumes this view’s sizing behavior in the other dimension.

For example, the following code lays out an ellipse in a fixed 200 by 100 frame. Because a shape always occupies the space offered to it by the layout system, the first ellipse is 200x100 points. The second ellipse is laid out in a frame with only a fixed height, so it occupies that height, and whatever width the layout system offers to its parent.

```swift
VStack {
    Ellipse()
        .fill(Color.purple)
        .frame(width: 200, height: 100)
    Ellipse()
        .fill(Color.blue)
        .frame(height: 100)
}
```

![A screenshot showing the effect of frame size options: a purple](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-frame-1@2x.png)

`The alignment` parameter specifies this view’s alignment within the frame.

```swift
Text("Hello world!")
    .frame(width: 200, height: 30, alignment: .topLeading)
    .border(Color.gray)
```

In the example above, the text is positioned at the top, leading corner of the frame. If the text is taller than the frame, its bounds may extend beyond the bottom of the frame’s bounds.

![A screenshot showing the effect of frame size options on a text view](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-frame-2@2x.png)

## See Also

### Influencing a view’s size

- [frame(depth:alignment:)](frame%28depth_alignment_%29.md): Positions this view within an invisible frame with the specified depth.
- [frame(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:alignment:)](frame%28minwidth_idealwidth_maxwidth_minheight_idealheight_maxheight_alignment_%29.md): Positions this view within an invisible frame having the specified size constraints.
- [frame(minDepth:idealDepth:maxDepth:alignment:)](frame%28mindepth_idealdepth_maxdepth_alignment_%29.md): Positions this view within an invisible frame having the specified depth constraints.
- [containerRelativeFrame(\_:alignment:)](containerrelativeframe%28__alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:alignment:\_:)](containerrelativeframe%28__alignment___%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:count:span:spacing:alignment:)](containerrelativeframe%28__count_span_spacing_alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [fixedSize()](fixedsize%28%29.md): Fixes this view at its ideal size.
- [fixedSize(horizontal:vertical:)](fixedsize%28horizontal_vertical_%29.md): Fixes this view at its ideal size in the specified dimensions.
- [layoutPriority(\_:)](layoutpriority%28__%29.md): Sets the priority by which a parent layout should apportion space to this child.
