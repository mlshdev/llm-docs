> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/frame(minwidth:idealwidth:maxwidth:minheight:idealheight:maxheight:alignment:)](https://developer.apple.com/documentation/swiftui/view/frame(minwidth:idealwidth:maxwidth:minheight:idealheight:maxheight:alignment:))

# frame(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:alignment:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Positions this view within an invisible frame having the specified size constraints.

## Declaration

```swift
nonisolated func frame(minWidth: CGFloat? = nil, idealWidth: CGFloat? = nil, maxWidth: CGFloat? = nil, minHeight: CGFloat? = nil, idealHeight: CGFloat? = nil, maxHeight: CGFloat? = nil, alignment: Alignment = .center) -> some View

```

## Parameters

- `minWidth`: The minimum width of the resulting frame.
- `idealWidth`: The ideal width of the resulting frame.
- `maxWidth`: The maximum width of the resulting frame.
- `minHeight`: The minimum height of the resulting frame.
- `idealHeight`: The ideal height of the resulting frame.
- `maxHeight`: The maximum height of the resulting frame.
- `alignment`: The alignment of this view inside the resulting frame. Note that most alignment values have no apparent effect when the size of the frame happens to match that of this view.

<a id="return-value"></a>

## Return Value

A view with flexible dimensions given by the call’s non-`nil` parameters.

## Mentioned In

- [Creating performant scrollable stacks](../creating-performant-scrollable-stacks.md)

<a id="discussion"></a>

## Discussion

Always specify at least one size characteristic when calling this method. Pass `nil` or leave out a characteristic to indicate that the frame should adopt this view’s sizing behavior, constrained by the other non-`nil` arguments.

The size proposed to this view is the size proposed to the frame, limited by any constraints specified, and with any ideal dimensions specified replacing any corresponding unspecified dimensions in the proposal.

If no minimum or maximum constraint is specified in a given dimension, the frame adopts the sizing behavior of its child in that dimension. If both constraints are specified in a dimension, the frame unconditionally adopts the size proposed for it, clamped to the constraints. Otherwise, the size of the frame in either dimension is:

- If a minimum constraint is specified and the size proposed for the frame by the parent is less than the size of this view, the proposed size, clamped to that minimum.
- If a maximum constraint is specified and the size proposed for the frame by the parent is greater than the size of this view, the proposed size, clamped to that maximum.
- Otherwise, the size of this view.

## See Also

### Influencing a view’s size

- [frame(width:height:alignment:)](frame%28width_height_alignment_%29.md): Positions this view within an invisible frame with the specified size.
- [frame(depth:alignment:)](frame%28depth_alignment_%29.md): Positions this view within an invisible frame with the specified depth.
- [frame(minDepth:idealDepth:maxDepth:alignment:)](frame%28mindepth_idealdepth_maxdepth_alignment_%29.md): Positions this view within an invisible frame having the specified depth constraints.
- [containerRelativeFrame(\_:alignment:)](containerrelativeframe%28__alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:alignment:\_:)](containerrelativeframe%28__alignment___%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:count:span:spacing:alignment:)](containerrelativeframe%28__count_span_spacing_alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [fixedSize()](fixedsize%28%29.md): Fixes this view at its ideal size.
- [fixedSize(horizontal:vertical:)](fixedsize%28horizontal_vertical_%29.md): Fixes this view at its ideal size in the specified dimensions.
- [layoutPriority(\_:)](layoutpriority%28__%29.md): Sets the priority by which a parent layout should apportion space to this child.
