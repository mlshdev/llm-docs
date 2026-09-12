> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contentmode](https://developer.apple.com/documentation/swiftui/contentmode)

# ContentMode

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that define how a view’s content fills the available space.

## Declaration

```swift
@frozen enum ContentMode
```

## Mentioned In

- [Fitting images into available space](fitting-images-into-available-space.md)

## Topics

### Getting content modes

- [ContentMode.fill](contentmode/fill.md): An option that resizes the content so it occupies all available space, both vertically and horizontally.
- [ContentMode.fit](contentmode/fit.md): An option that resizes the content so it’s all within the available space, both vertically and horizontally.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Scaling, rotating, or transforming a view

- [scaledToFill()](view/scaledtofill%28%29.md): Scales this view to fill its parent.
- [scaledToFit()](view/scaledtofit%28%29.md): Scales this view to fit its parent.
- [scaleEffect(\_:anchor:)](view/scaleeffect%28__anchor_%29.md): Scales this view uniformly by the specified factor, relative to an anchor point.
- [scaleEffect(x:y:anchor:)](view/scaleeffect%28x_y_anchor_%29.md): Scales this view’s rendered output by the given horizontal and vertical amounts, relative to an anchor point.
- [scaleEffect(x:y:z:anchor:)](view/scaleeffect%28x_y_z_anchor_%29.md): Scales this view by the specified horizontal, vertical, and depth factors, relative to an anchor point.
- [aspectRatio(\_:contentMode:)](view/aspectratio%28__contentmode_%29.md): Constrains this view’s dimensions to the specified aspect ratio.
- [rotationEffect(\_:anchor:)](view/rotationeffect%28__anchor_%29.md): Rotates a view’s rendered output in two dimensions around the specified point.
- [rotation3DEffect(\_:axis:anchor:anchorZ:perspective:)](view/rotation3deffect%28__axis_anchor_anchorz_perspective_%29.md): Deprecated. Renders a view’s content as if it’s rotated in three dimensions around the specified axis.
- [perspectiveRotationEffect(\_:axis:anchor:anchorZ:perspective:)](view/perspectiverotationeffect%28__axis_anchor_anchorz_perspective_%29.md): Renders a view’s content as if it’s rotated in three dimensions around the specified axis.
- [rotation3DEffect(\_:anchor:)](view/rotation3deffect%28__anchor_%29.md): Rotates the view’s content by the specified 3D rotation value.
- [rotation3DEffect(\_:axis:anchor:)](view/rotation3deffect%28__axis_anchor_%29.md): Rotates the view’s content by an angle about an axis that you specify as a tuple of elements.
- [transformEffect(\_:)](view/transformeffect%28__%29.md): Applies an affine transformation to this view’s rendered output.
- [transform3DEffect(\_:)](view/transform3deffect%28__%29.md): Applies a 3D transformation to this view’s rendered output.
- [projectionEffect(\_:)](view/projectioneffect%28__%29.md): Applies a projection transformation to this view’s rendered output.
- [ProjectionTransform](projectiontransform.md)
