> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/frame(mindepth:idealdepth:maxdepth:alignment:)](https://developer.apple.com/documentation/swiftui/view/frame(mindepth:idealdepth:maxdepth:alignment:))

# frame(minDepth:idealDepth:maxDepth:alignment:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Positions this view within an invisible frame having the specified depth constraints.

## Declaration

```swift
@export(implementation) nonisolated func frame(minDepth: CGFloat? = nil, idealDepth: CGFloat? = nil, maxDepth: CGFloat? = nil, alignment: DepthAlignment = .center) -> some View

```

## Parameters

- `minDepth`: The minimum depth of the resulting frame.
- `idealDepth`: The ideal depth of the resulting frame.
- `maxDepth`: The maximum depth of the resulting frame.
- `alignment`: The alignment of this view inside the resulting frame. Note that most alignment values have no apparent effect when the size of the frame happens to match that of this view.

<a id="return-value"></a>

## Return Value

A view with flexible dimensions given by the call’s non-`nil` parameters.

<a id="discussion"></a>

## Discussion

Always specify at least one size characteristic when calling this method. Pass `nil` or leave out a characteristic to indicate that the frame should adopt this view’s sizing behavior, constrained by the other non-`nil` arguments.

The size proposed to this view is the size proposed to the frame, limited by any constraints specified, and with an ideal dimension specified replacing any corresponding unspecified dimensions in the proposal.

If no minimum or maximum constraint is specified in a given dimension, the frame adopts the sizing behavior of its child in that dimension. If both constraints are specified in a dimension, the frame unconditionally adopts the size proposed for it, clamped to the constraints. Otherwise, the size of the frame in either dimension is:

- If a minimum constraint is specified and the size proposed for the frame by the parent is less than the size of this view, the proposed size, clamped to that minimum.
- If a maximum constraint is specified and the size proposed for the frame by the parent is greater than the size of this view, the proposed size, clamped to that maximum.
- Otherwise, the size of this view.

## See Also

### Influencing a view’s size

- [frame(width:height:alignment:)](frame%28width_height_alignment_%29.md): Positions this view within an invisible frame with the specified size.
- [frame(depth:alignment:)](frame%28depth_alignment_%29.md): Positions this view within an invisible frame with the specified depth.
- [frame(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:alignment:)](frame%28minwidth_idealwidth_maxwidth_minheight_idealheight_maxheight_alignment_%29.md): Positions this view within an invisible frame having the specified size constraints.
- [containerRelativeFrame(\_:alignment:)](containerrelativeframe%28__alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:alignment:\_:)](containerrelativeframe%28__alignment___%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:count:span:spacing:alignment:)](containerrelativeframe%28__count_span_spacing_alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [fixedSize()](fixedsize%28%29.md): Fixes this view at its ideal size.
- [fixedSize(horizontal:vertical:)](fixedsize%28horizontal_vertical_%29.md): Fixes this view at its ideal size in the specified dimensions.
- [layoutPriority(\_:)](layoutpriority%28__%29.md): Sets the priority by which a parent layout should apportion space to this child.
