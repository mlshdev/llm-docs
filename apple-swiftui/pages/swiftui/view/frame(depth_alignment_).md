> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/frame(depth:alignment:)](https://developer.apple.com/documentation/swiftui/view/frame(depth:alignment:))

# frame(depth:alignment:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Positions this view within an invisible frame with the specified depth.

## Declaration

```swift
@export(implementation) nonisolated func frame(depth: CGFloat?, alignment: DepthAlignment = .center) -> some View

```

## Parameters

- `depth`: A fixed depth for the resulting view. If `depth` is `nil`, the resulting view assumes this view’s sizing behavior.
- `alignment`: The alignment of this view inside the resulting view. `alignment` applies if this view is smaller than the size given by the resulting frame.

<a id="return-value"></a>

## Return Value

A view with a fixed dimension of `depth` if non-`nil`.

<a id="discussion"></a>

## Discussion

Use this method to specify a fixed size for a view’s depth. If you don’t specify a dimension, the resulting view assumes this view’s sizing behavior in depth.

## See Also

### Influencing a view’s size

- [frame(width:height:alignment:)](frame%28width_height_alignment_%29.md): Positions this view within an invisible frame with the specified size.
- [frame(minWidth:idealWidth:maxWidth:minHeight:idealHeight:maxHeight:alignment:)](frame%28minwidth_idealwidth_maxwidth_minheight_idealheight_maxheight_alignment_%29.md): Positions this view within an invisible frame having the specified size constraints.
- [frame(minDepth:idealDepth:maxDepth:alignment:)](frame%28mindepth_idealdepth_maxdepth_alignment_%29.md): Positions this view within an invisible frame having the specified depth constraints.
- [containerRelativeFrame(\_:alignment:)](containerrelativeframe%28__alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:alignment:\_:)](containerrelativeframe%28__alignment___%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [containerRelativeFrame(\_:count:span:spacing:alignment:)](containerrelativeframe%28__count_span_spacing_alignment_%29.md): Positions this view within an invisible frame with a size relative to the nearest container.
- [fixedSize()](fixedsize%28%29.md): Fixes this view at its ideal size.
- [fixedSize(horizontal:vertical:)](fixedsize%28horizontal_vertical_%29.md): Fixes this view at its ideal size in the specified dimensions.
- [layoutPriority(\_:)](layoutpriority%28__%29.md): Sets the priority by which a parent layout should apportion space to this child.
