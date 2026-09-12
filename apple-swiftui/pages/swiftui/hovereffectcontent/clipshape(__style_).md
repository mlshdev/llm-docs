> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hovereffectcontent/clipshape(_:style:)](https://developer.apple.com/documentation/swiftui/hovereffectcontent/clipshape(_:style:))

# clipShape(\_:style:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Sets a clipping shape for the view.

## Declaration

```swift
func clipShape<S>(_ shape: S, style: FillStyle = FillStyle()) -> some HoverEffectContent where S : Shape

```

## Parameters

- `shape`: The clipping shape to use for the view. The `shape` fills the view’s frame, while maintaining its aspect ratio.
- `style`: The fill style to use when rasterizing `shape`.

<a id="return-value"></a>

## Return Value

An effect that sets the clip shape of a view.

<a id="discussion"></a>

## Discussion

Use `clipShape(_:style:)` to clip the view’s rendered output to the provided shape. By applying a clipping shape, you preserve the parts of the view covered by the shape, while eliminating other parts of the view. The clipping shape itself isn’t visible.
