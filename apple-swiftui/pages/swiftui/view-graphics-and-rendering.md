> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view-graphics-and-rendering](https://developer.apple.com/documentation/swiftui/view-graphics-and-rendering)

# Graphics and rendering modifiers

**Framework:** SwiftUI  
**Kind:** API Collection

Affect the way the system draws a view, for example by scaling or masking a view, or by applying graphical effects.

<a id="Overview"></a>

## Overview

Use these view modifiers to apply many of the rendering effects typically associated with a graphics context, like adding masks and creating composites. You can apply these effects to graphical views, like [Shapes](shapes.md), as well as any other SwiftUI view.

When you do need the flexibility of immediate mode drawing in a graphics context, use a [Canvas](canvas.md) view instead. This can be particularly helpful when you want to draw an extremely large number of dynamic shapes — for example, to create particle effects.

For more information about using these effects in your app, see [Drawing and graphics](drawing-and-graphics.md).

## Topics

### Masks and clipping

- [mask(alignment:\_:)](view/mask%28alignment___%29.md): Masks this view using the alpha channel of the given view.
- [clipped(antialiased:)](view/clipped%28antialiased_%29.md): Clips this view to its bounding rectangular frame.
- [clipShape(\_:style:)](view/clipshape%28__style_%29.md): Sets a clipping shape for this view.
- [containerShape(\_:)](view/containershape%28__%29.md): Sets the container shape to use for any container relative shape or concentric rectangle within this view.

### Scale

- [scaledToFill()](view/scaledtofill%28%29.md): Scales this view to fill its parent.
- [scaledToFill3D()](view/scaledtofill3d%28%29.md): Scales this view to fill its parent.
- [scaledToFit()](view/scaledtofit%28%29.md): Scales this view to fit its parent.
- [scaledToFit3D()](view/scaledtofit3d%28%29.md): Scales this view to fit its parent.
- [scaleEffect(\_:anchor:)](view/scaleeffect%28__anchor_%29.md): Scales this view uniformly by the specified factor, relative to an anchor point.
- [scaleEffect(x:y:anchor:)](view/scaleeffect%28x_y_anchor_%29.md): Scales this view’s rendered output by the given horizontal and vertical amounts, relative to an anchor point.
- [scaleEffect(x:y:z:anchor:)](view/scaleeffect%28x_y_z_anchor_%29.md): Scales this view by the specified horizontal, vertical, and depth factors, relative to an anchor point.
- [imageScale(\_:)](view/imagescale%28__%29.md): Scales images within the view according to one of the relative sizes available including small, medium, and large images sizes.
- [aspectRatio(\_:contentMode:)](view/aspectratio%28__contentmode_%29.md): Constrains this view’s dimensions to the specified aspect ratio.
- [aspectRatio3D(\_:contentMode:)](view/aspectratio3d%28__contentmode_%29.md): Constrains this view’s dimensions to the specified 3D aspect ratio.

### Rotation and transformation

- [rotationEffect(\_:anchor:)](view/rotationeffect%28__anchor_%29.md): Rotates a view’s rendered output in two dimensions around the specified point.
- [rotation3DEffect(\_:anchor:)](view/rotation3deffect%28__anchor_%29.md): Rotates the view’s content by the specified 3D rotation value.
- [rotation3DEffect(\_:axis:anchor:anchorZ:perspective:)](view/rotation3deffect%28__axis_anchor_anchorz_perspective_%29.md): Deprecated. Renders a view’s content as if it’s rotated in three dimensions around the specified axis.
- [rotation3DEffect(\_:axis:anchor:)](view/rotation3deffect%28__axis_anchor_%29.md): Rotates the view’s content by an angle about an axis that you specify as a tuple of elements.
- [rotation3DLayout(\_:)](view/rotation3dlayout%28__%29.md): Rotates a view with impacts to its frame in a containing layout
- [rotation3DLayout(\_:axis:)](view/rotation3dlayout%28__axis_%29.md): Rotates a view with impacts to its frame in a containing layout
- [perspectiveRotationEffect(\_:axis:anchor:anchorZ:perspective:)](view/perspectiverotationeffect%28__axis_anchor_anchorz_perspective_%29.md): Renders a view’s content as if it’s rotated in three dimensions around the specified axis.
- [projectionEffect(\_:)](view/projectioneffect%28__%29.md): Applies a projection transformation to this view’s rendered output.
- [transformEffect(\_:)](view/transformeffect%28__%29.md): Applies an affine transformation to this view’s rendered output.
- [transform3DEffect(\_:)](view/transform3deffect%28__%29.md): Applies a 3D transformation to this view’s rendered output.

### Graphical effects

- [blur(radius:opaque:)](view/blur%28radius_opaque_%29.md): Applies a Gaussian blur to this view.
- [opacity(\_:)](view/opacity%28__%29.md): Sets the transparency of this view.
- [brightness(\_:)](view/brightness%28__%29.md): Brightens this view by the specified amount.
- [contrast(\_:)](view/contrast%28__%29.md): Sets the contrast and separation between similar colors in this view.
- [colorInvert()](view/colorinvert%28%29.md): Inverts the colors in this view.
- [colorMultiply(\_:)](view/colormultiply%28__%29.md): Adds a color multiplication effect to this view.
- [saturation(\_:)](view/saturation%28__%29.md): Adjusts the color saturation of this view.
- [grayscale(\_:)](view/grayscale%28__%29.md): Adds a grayscale effect to this view.
- [hueRotation(\_:)](view/huerotation%28__%29.md): Applies a hue rotation effect to this view.
- [luminanceToAlpha()](view/luminancetoalpha%28%29.md): Adds a luminance to alpha effect to this view.
- [shadow(color:radius:x:y:)](view/shadow%28color_radius_x_y_%29.md): Adds a shadow to this view.
- [visualEffect(\_:)](view/visualeffect%28__%29.md): Applies effects to this view, while providing access to layout information through a geometry proxy.
- [visualEffect3D(\_:)](view/visualeffect3d%28__%29.md): Applies effects to this view, while providing access to layout information through a 3D geometry proxy.
- [materialActiveAppearance(\_:)](view/materialactiveappearance%28__%29.md): Sets an explicit active appearance for materials in this view.

### Shaders

- [colorEffect(\_:isEnabled:)](view/coloreffect%28__isenabled_%29.md): Returns a new view that applies `shader` to `self` as a filter effect on the color of each pixel.
- [distortionEffect(\_:maxSampleOffset:isEnabled:)](view/distortioneffect%28__maxsampleoffset_isenabled_%29.md): Returns a new view that applies `shader` to `self` as a geometric distortion effect on the location of each pixel.
- [layerEffect(\_:maxSampleOffset:isEnabled:)](view/layereffect%28__maxsampleoffset_isenabled_%29.md): Returns a new view that applies `shader` to `self` as a filter on the raster layer created from `self`.

### Composites

- [blendMode(\_:)](view/blendmode%28__%29.md): Sets the blend mode for compositing this view with overlapping views.
- [compositingGroup()](view/compositinggroup%28%29.md): Wraps this view in a compositing group.
- [drawingGroup(opaque:colorMode:)](view/drawinggroup%28opaque_colormode_%29.md): Composites this view’s contents into an offscreen image before final display.

### Animations

- [animation(\_:)](view/animation%28__%29.md): Conforms when `Self` conforms to `Equatable`. Applies the given animation to this view when this view changes.
- [animation(\_:value:)](view/animation%28__value_%29.md): Applies the given animation to this view when the specified value changes.
- [animation(\_:body:)](view/animation%28__body_%29.md): Applies the given animation to all animatable values within the `body` closure.
- [contentTransition(\_:)](view/contenttransition%28__%29.md): Modifies the view to use a given transition as its method of animating changes to the contents of its views.
- [geometryGroup()](view/geometrygroup%28%29.md): Isolates the geometry (e.g. position and size) of the view from its parent view.
- [keyframeAnimator(initialValue:repeating:content:keyframes:)](view/keyframeanimator%28initialvalue_repeating_content_keyframes_%29.md): Loops the given keyframes continuously, updating the view using the modifiers you apply in `body`.
- [keyframeAnimator(initialValue:trigger:content:keyframes:)](view/keyframeanimator%28initialvalue_trigger_content_keyframes_%29.md): Plays the given keyframes when the given trigger value changes, updating the view using the modifiers you apply in `body`.
- [matchedGeometryEffect(id:in:properties:anchor:isSource:)](view/matchedgeometryeffect%28id_in_properties_anchor_issource_%29.md): Defines a group of views with synchronized geometry using an identifier and namespace that you provide.
- [matchedTransitionSource(id:in:)](view/matchedtransitionsource%28id_in_%29.md): Identifies this view as the source of a navigation transition, such as a zoom transition.
- [matchedTransitionSource(id:in:configuration:)](view/matchedtransitionsource%28id_in_configuration_%29.md): Identifies this view as the source of a navigation transition, such as a zoom transition.
- [phaseAnimator(\_:content:animation:)](view/phaseanimator%28__content_animation_%29.md): Animates effects that you apply to a view over a sequence of phases that change continuously.
- [phaseAnimator(\_:trigger:content:animation:)](view/phaseanimator%28__trigger_content_animation_%29.md): Animates effects that you apply to a view over a sequence of phases that change based on a trigger.
- [transition(\_:)](view/transition%28__%29.md): Associates a transition with the view.
- [transaction(\_:)](view/transaction%28__%29.md): Applies the given transaction mutation function to all animations used within the view.
- [transaction(value:\_:)](view/transaction%28value___%29.md): Applies the given transaction mutation function to all animations used within the view.
- [transaction(\_:body:)](view/transaction%28__body_%29.md): Applies the given transaction mutation function to all animations used within the `body` closure.

## See Also

### Drawing views

- [Style modifiers](view-style-modifiers.md): Apply built-in styles to different types of views.
- [Layout modifiers](view-layout.md): Tell a view how to arrange itself within a view hierarchy by adjusting its size, position, alignment, padding, and so on.
