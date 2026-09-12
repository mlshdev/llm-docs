> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/projectioneffect(_:)](https://developer.apple.com/documentation/swiftui/view/projectioneffect(_:))

# projectionEffect(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Applies a projection transformation to this view’s rendered output.

## Declaration

```swift
nonisolated func projectionEffect(_ transform: ProjectionTransform) -> some View

```

## Parameters

- `transform`: A [ProjectionTransform](../projectiontransform.md) to apply to the view.

<a id="discussion"></a>

## Discussion

Use `projectionEffect(_:)` to apply a 3D transformation to the view.

The example below rotates the text 30˚ around the `z` axis, which is the axis pointing out of the screen:

```swift
// This transform represents a 30˚ rotation around the z axis.
let transform = CATransform3DMakeRotation(
    -30 * (.pi / 180), 0.0, 0.0, 1.0)

Text("Projection effects using transforms")
    .projectionEffect(.init(transform))
    .border(Color.gray)
```

![A screenshot showing text rotated 30 degrees around the axis pointing](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-View-projectionEffect@2x.png)

## See Also

### Scaling, rotating, or transforming a view

- [scaledToFill()](scaledtofill%28%29.md): Scales this view to fill its parent.
- [scaledToFit()](scaledtofit%28%29.md): Scales this view to fit its parent.
- [scaleEffect(\_:anchor:)](scaleeffect%28__anchor_%29.md): Scales this view uniformly by the specified factor, relative to an anchor point.
- [scaleEffect(x:y:anchor:)](scaleeffect%28x_y_anchor_%29.md): Scales this view’s rendered output by the given horizontal and vertical amounts, relative to an anchor point.
- [scaleEffect(x:y:z:anchor:)](scaleeffect%28x_y_z_anchor_%29.md): Scales this view by the specified horizontal, vertical, and depth factors, relative to an anchor point.
- [aspectRatio(\_:contentMode:)](aspectratio%28__contentmode_%29.md): Constrains this view’s dimensions to the specified aspect ratio.
- [rotationEffect(\_:anchor:)](rotationeffect%28__anchor_%29.md): Rotates a view’s rendered output in two dimensions around the specified point.
- [rotation3DEffect(\_:axis:anchor:anchorZ:perspective:)](rotation3deffect%28__axis_anchor_anchorz_perspective_%29.md): Deprecated. Renders a view’s content as if it’s rotated in three dimensions around the specified axis.
- [perspectiveRotationEffect(\_:axis:anchor:anchorZ:perspective:)](perspectiverotationeffect%28__axis_anchor_anchorz_perspective_%29.md): Renders a view’s content as if it’s rotated in three dimensions around the specified axis.
- [rotation3DEffect(\_:anchor:)](rotation3deffect%28__anchor_%29.md): Rotates the view’s content by the specified 3D rotation value.
- [rotation3DEffect(\_:axis:anchor:)](rotation3deffect%28__axis_anchor_%29.md): Rotates the view’s content by an angle about an axis that you specify as a tuple of elements.
- [transformEffect(\_:)](transformeffect%28__%29.md): Applies an affine transformation to this view’s rendered output.
- [transform3DEffect(\_:)](transform3deffect%28__%29.md): Applies a 3D transformation to this view’s rendered output.
- [ProjectionTransform](../projectiontransform.md)
- [ContentMode](../contentmode.md): Constants that define how a view’s content fills the available space.
