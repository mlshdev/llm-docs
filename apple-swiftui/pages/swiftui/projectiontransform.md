> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/projectiontransform

# ProjectionTransform

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A 3x3 matrix that transforms points in a plane.

## Declaration

```swift
@frozen struct ProjectionTransform
```

<a id="overview"></a>

## Overview

A projection transform covers everything `CGAffineTransform` does - translation, rotation, scale, and skew - and adds perspective, which an affine transform cannot express. SwiftUI uses it to describe the geometry a view effect applies.

Return a value of this type from [effectValue(size:)](geometryeffect/effectvalue%28size_%29.md) to write a custom effect. The following effect leans a view to one side by shearing it, and animates as `amount` changes:

```swift
struct ShearEffect: GeometryEffect {
    var amount: CGFloat

    var animatableData: CGFloat {
        get { amount }
        set { amount = newValue }
    }

    func effectValue(size: CGSize) -> ProjectionTransform {
        ProjectionTransform(
            CGAffineTransform(
                a: 1, b: 0, c: amount, d: 1, tx: 0, ty: 0))
    }
}
```

Create a transform from a `CGAffineTransform` or a `CATransform3D` when you already have one, or set the nine elements directly. The elements are named for their row and column, so [m11](projectiontransform/m11.md) is the first row and first column.

## Topics

### Creating a transform

- [init()](projectiontransform/init%28%29.md)
- [init(\_:)](projectiontransform/init%28__%29.md)

### Getting transform characteristics

- [isAffine](projectiontransform/isaffine.md)
- [isIdentity](projectiontransform/isidentity.md)

### Manipulating transforms

- [invert()](projectiontransform/invert%28%29.md)
- [inverted()](projectiontransform/inverted%28%29.md)
- [concatenating(\_:)](projectiontransform/concatenating%28__%29.md)

### Accessing the transform’s coefficients

- [m11](projectiontransform/m11.md)
- [m12](projectiontransform/m12.md)
- [m13](projectiontransform/m13.md)
- [m21](projectiontransform/m21.md)
- [m22](projectiontransform/m22.md)
- [m23](projectiontransform/m23.md)
- [m31](projectiontransform/m31.md)
- [m32](projectiontransform/m32.md)
- [m33](projectiontransform/m33.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
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
- [ContentMode](contentmode.md): Constants that define how a view’s content fills the available space.
