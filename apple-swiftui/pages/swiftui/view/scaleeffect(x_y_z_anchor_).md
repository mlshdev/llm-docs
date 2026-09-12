> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/scaleeffect(x:y:z:anchor:)](https://developer.apple.com/documentation/swiftui/view/scaleeffect(x:y:z:anchor:))

# scaleEffect(x:y:z:anchor:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Scales this view by the specified horizontal, vertical, and depth factors, relative to an anchor point.

## Declaration

```swift
@export(implementation) nonisolated func scaleEffect(x: CGFloat = 1.0, y: CGFloat = 1.0, z: CGFloat = 1.0, anchor: UnitPoint3D = .center) -> some View

```

## Parameters

- `x`: The horizontal scale factor for this view.
- `y`: The vertical scale factor for this view.
- `z`: The depth scale factor for this view.
- `anchor`: The anchor point about which to scale the view. Defaults to center.

<a id="return-value"></a>

## Return Value

A view that scales this view by `x`,`y`, and `z`.

<a id="discussion"></a>

## Discussion

The original dimensions of the view are considered to be unchanged by scaling the contents. To change the dimensions of the view, use a modifier like `frame()` instead.

## See Also

### Scaling, rotating, or transforming a view

- [scaledToFill()](scaledtofill%28%29.md): Scales this view to fill its parent.
- [scaledToFit()](scaledtofit%28%29.md): Scales this view to fit its parent.
- [scaleEffect(\_:anchor:)](scaleeffect%28__anchor_%29.md): Scales this view uniformly by the specified factor, relative to an anchor point.
- [scaleEffect(x:y:anchor:)](scaleeffect%28x_y_anchor_%29.md): Scales this view’s rendered output by the given horizontal and vertical amounts, relative to an anchor point.
- [aspectRatio(\_:contentMode:)](aspectratio%28__contentmode_%29.md): Constrains this view’s dimensions to the specified aspect ratio.
- [rotationEffect(\_:anchor:)](rotationeffect%28__anchor_%29.md): Rotates a view’s rendered output in two dimensions around the specified point.
- [rotation3DEffect(\_:axis:anchor:anchorZ:perspective:)](rotation3deffect%28__axis_anchor_anchorz_perspective_%29.md): Deprecated. Renders a view’s content as if it’s rotated in three dimensions around the specified axis.
- [perspectiveRotationEffect(\_:axis:anchor:anchorZ:perspective:)](perspectiverotationeffect%28__axis_anchor_anchorz_perspective_%29.md): Renders a view’s content as if it’s rotated in three dimensions around the specified axis.
- [rotation3DEffect(\_:anchor:)](rotation3deffect%28__anchor_%29.md): Rotates the view’s content by the specified 3D rotation value.
- [rotation3DEffect(\_:axis:anchor:)](rotation3deffect%28__axis_anchor_%29.md): Rotates the view’s content by an angle about an axis that you specify as a tuple of elements.
- [transformEffect(\_:)](transformeffect%28__%29.md): Applies an affine transformation to this view’s rendered output.
- [transform3DEffect(\_:)](transform3deffect%28__%29.md): Applies a 3D transformation to this view’s rendered output.
- [projectionEffect(\_:)](projectioneffect%28__%29.md): Applies a projection transformation to this view’s rendered output.
- [ProjectionTransform](../projectiontransform.md)
- [ContentMode](../contentmode.md): Constants that define how a view’s content fills the available space.
