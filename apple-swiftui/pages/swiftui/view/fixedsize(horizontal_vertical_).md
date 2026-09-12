> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/fixedsize(horizontal:vertical:)](https://developer.apple.com/documentation/swiftui/view/fixedsize(horizontal:vertical:))

# fixedSize(horizontal:vertical:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Fixes this view at its ideal size in the specified dimensions.

## Declaration

```swift
nonisolated func fixedSize(horizontal: Bool, vertical: Bool) -> some View

```

## Parameters

- `horizontal`: A Boolean value that indicates whether to fix the width of the view.
- `vertical`: A Boolean value that indicates whether to fix the height of the view.

<a id="return-value"></a>

## Return Value

A view that fixes this view at its ideal size in the dimensions specified by `horizontal` and `vertical`.

<a id="discussion"></a>

## Discussion

This function behaves like [fixedSize()](fixedsize%28%29.md), except with `fixedSize(horizontal:vertical:)` the fixing of the axes can be optionally specified in one or both dimensions. For example, if you horizontally fix a text view before wrapping it in the frame view, you’re telling the text view to maintain its ideal *width*. The view calculates this to be the space needed to represent the entire string.

```swift
Text("A single line of text, too long to fit in a box.")
    .fixedSize(horizontal: true, vertical: false)
    .frame(width: 200, height: 200)
    .border(Color.gray)
```

This can result in the view exceeding the parent’s bounds, which may or may not be the effect you want.

![A screenshot showing a text view exceeding the bounds of its](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-fixedSize-3@2x.png)

## See Also

### Influencing a view’s size

- [frame(width:height:alignment:)](frame%28width_height_alignment_%29.md): Positions this view within an invisible frame with the specified size.
- [frame(depth:alignment:)](frame%28depth_alignment_%29.md): Positions this view within an invisible frame with the specified depth.
- [frame(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:alignment:)](frame%28minwidth_idealwidth_maxwidth_minheight_idealheight_maxheight_alignment_%29.md): Positions this view within an invisible frame having the specified size constraints.
- [frame(minDepth:idealDepth:maxDepth:alignment:)](frame%28mindepth_idealdepth_maxdepth_alignment_%29.md): Positions this view within an invisible frame having the specified depth constraints.
- [containerRelativeFrame(\_:alignment:)](containerrelativeframe%28__alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:alignment:\_:)](containerrelativeframe%28__alignment___%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:count:span:spacing:alignment:)](containerrelativeframe%28__count_span_spacing_alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [fixedSize()](fixedsize%28%29.md): Fixes this view at its ideal size.
- [layoutPriority(\_:)](layoutpriority%28__%29.md): Sets the priority by which a parent layout should apportion space to this child.
