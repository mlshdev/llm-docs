> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visualeffect](https://developer.apple.com/documentation/swiftui/visualeffect)

# VisualEffect

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Visual Effects change the visual appearance of a view without changing its ancestors or descendents.

## Declaration

```swift
protocol VisualEffect : Sendable, Animatable
```

<a id="overview"></a>

## Overview

Because effects do not impact layout, they are safe to use in situations where layout modification is not allowed. For example, effects may be applied as a function of position, accessed through a geometry proxy:

```swift
var body: some View {
    ContentRow()
        .visualEffect { content, geometryProxy in
            content.offset(x: geometryProxy.frame(in: .global).origin.y)
        }
}
```

You don’t conform to this protocol yourself. Instead, visual effects are created by calling modifier functions (such as `.offset(x:y:)` on other effects, as seen in the example above.

## Topics

### Adjusting Color

- [brightness(\_:)](visualeffect/brightness%28__%29.md): Brightens the view by the specified amount.
- [colorEffect(\_:isEnabled:)](visualeffect/coloreffect%28__isenabled_%29.md): Returns a new visual effect that applies `shader` to `self` as a filter effect on the color of each pixel.
- [contrast(\_:)](visualeffect/contrast%28__%29.md): Sets the contrast and separation between similar colors in the view.
- [grayscale(\_:)](visualeffect/grayscale%28__%29.md): Adds a grayscale effect to the view.
- [hueRotation(\_:)](visualeffect/huerotation%28__%29.md): Applies a hue rotation effect to the view.
- [saturation(\_:)](visualeffect/saturation%28__%29.md): Adjusts the color saturation of the view.
- [opacity(\_:)](visualeffect/opacity%28__%29.md): Sets the transparency of the view.

### Scaling

- [scaleEffect(\_:anchor:)](visualeffect/scaleeffect%28__anchor_%29.md): Scales this view uniformly by the specified factor, relative to an anchor point.
- [scaleEffect(x:y:anchor:)](visualeffect/scaleeffect%28x_y_anchor_%29.md): Scales the view’s rendered output by the given horizontal and vertical amounts, relative to an anchor point.
- [scaleEffect(x:y:z:anchor:)](visualeffect/scaleeffect%28x_y_z_anchor_%29.md): Scales this view by the specified horizontal, vertical, and depth factors, relative to an anchor point.

### Rotating

- [rotationEffect(\_:anchor:)](visualeffect/rotationeffect%28__anchor_%29.md): Rotates content in two dimensions around the specified point.
- [rotation3DEffect(\_:axis:anchor:anchorZ:perspective:)](visualeffect/rotation3deffect%28__axis_anchor_anchorz_perspective_%29.md): Deprecated. Renders content as if it’s rotated in three dimensions around the specified axis.
- [perspectiveRotationEffect(\_:axis:anchor:perspective:)](visualeffect/perspectiverotationeffect%28__axis_anchor_perspective_%29.md): Renders content as if it’s rotated in three dimensions around the specified axis.
- [rotation3DEffect(\_:anchor:)](visualeffect/rotation3deffect%28__anchor_%29.md): Rotates content by the specified 3D rotation value.
- [rotation3DEffect(\_:axis:anchor:)](visualeffect/rotation3deffect%28__axis_anchor_%29.md): Rotates content by an angle about an axis that you specify as a rotation axis value.

### Translating

- [offset(\_:)](visualeffect/offset%28__%29.md): Offsets the view by the horizontal and vertical amount specified in the offset parameter.
- [offset(x:y:)](visualeffect/offset%28x_y_%29.md): Offsets the view by the specified horizontal and vertical distances.
- [offset(z:)](visualeffect/offset%28z_%29.md): Brings a view forward in Z by the provided distance in points.

### Applying a transform

- [transform3DEffect(\_:)](visualeffect/transform3deffect%28__%29.md): Applies a 3D transformation to this view’s rendered output.
- [transformEffect(\_:)](visualeffect/transformeffect%28__%29.md): Applies an affine transformation to the view’s rendered output.

### Applying other effects

- [blur(radius:opaque:)](visualeffect/blur%28radius_opaque_%29.md): Applies a Gaussian blur to the view.
- [distortionEffect(\_:maxSampleOffset:isEnabled:)](visualeffect/distortioneffect%28__maxsampleoffset_isenabled_%29.md): Returns a new visual effect that applies `shader` to `self` as a geometric distortion effect on the location of each pixel.
- [layerEffect(\_:maxSampleOffset:isEnabled:)](visualeffect/layereffect%28__maxsampleoffset_isenabled_%29.md): Returns a new visual effect that applies `shader` to `self` as a filter on the raster layer created from `self`.

### Instance Methods

- [blendMode(\_:)](visualeffect/blendmode%28__%29.md): Sets the blend mode for compositing this view with overlapping views.

## Relationships

### Inherits From

- [Animatable](animatable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [EmptyVisualEffect](emptyvisualeffect.md)
- [ModifiedContent](modifiedcontent.md)

## See Also

### Applying effects based on geometry

- [visualEffect(\_:)](view/visualeffect%28__%29.md): Applies effects to this view, while providing access to layout information through a geometry proxy.
- [visualEffect3D(\_:)](view/visualeffect3d%28__%29.md): Applies effects to this view, while providing access to layout information through a 3D geometry proxy.
- [EmptyVisualEffect](emptyvisualeffect.md): The base visual effect that you apply additional effect to.
