> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/fixedsize()](https://developer.apple.com/documentation/swiftui/view/fixedsize())

# fixedSize()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Fixes this view at its ideal size.

## Declaration

```swift
@export(implementation) nonisolated func fixedSize() -> some View

```

<a id="return-value"></a>

## Return Value

A view that fixes this view at its ideal size.

<a id="discussion"></a>

## Discussion

During the layout of the view hierarchy, each view proposes a size to each child view it contains. If the child view doesn’t need a fixed size it can accept and conform to the size offered by the parent.

For example, a [Text](../text.md) view placed in an explicitly sized frame wraps and truncates its string to remain within its parent’s bounds:

```swift
Text("A single line of text, too long to fit in a box.")
    .frame(width: 200, height: 200)
    .border(Color.gray)
```

![A screenshot showing the text in a text view contained within its](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-fixedSize-1@2x.png)

The `fixedSize()` modifier can be used to create a view that maintains the *ideal size* of its children both dimensions:

```swift
Text("A single line of text, too long to fit in a box.")
    .fixedSize()
    .frame(width: 200, height: 200)
    .border(Color.gray)
```

This can result in the view exceeding the parent’s bounds, which may or may not be the effect you want.

![A screenshot showing a text view exceeding the bounds of its](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-fixedSize-2@2x.png)

You can think of `fixedSize()` as the creation of a *counter proposal* to the view size proposed to a view by its parent. The ideal size of a view, and the specific effects of `fixedSize()` depends on the particular view and how you have configured it.

To create a view that fixes the view’s size in either the horizontal or vertical dimensions, see [fixedSize(horizontal:vertical:)](fixedsize%28horizontal_vertical_%29.md).

## See Also

### Influencing a view’s size

- [frame(width:height:alignment:)](frame%28width_height_alignment_%29.md): Positions this view within an invisible frame with the specified size.
- [frame(depth:alignment:)](frame%28depth_alignment_%29.md): Positions this view within an invisible frame with the specified depth.
- [frame(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:alignment:)](frame%28minwidth_idealwidth_maxwidth_minheight_idealheight_maxheight_alignment_%29.md): Positions this view within an invisible frame having the specified size constraints.
- [frame(minDepth:idealDepth:maxDepth:alignment:)](frame%28mindepth_idealdepth_maxdepth_alignment_%29.md): Positions this view within an invisible frame having the specified depth constraints.
- [containerRelativeFrame(\_:alignment:)](containerrelativeframe%28__alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:alignment:\_:)](containerrelativeframe%28__alignment___%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:count:span:spacing:alignment:)](containerrelativeframe%28__count_span_spacing_alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [fixedSize(horizontal:vertical:)](fixedsize%28horizontal_vertical_%29.md): Fixes this view at its ideal size in the specified dimensions.
- [layoutPriority(\_:)](layoutpriority%28__%29.md): Sets the priority by which a parent layout should apportion space to this child.
