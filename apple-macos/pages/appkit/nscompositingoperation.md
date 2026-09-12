> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscompositingoperation](https://developer.apple.com/documentation/appkit/nscompositingoperation)

# NSCompositingOperation (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.

## Declaration

```swift
enum NSCompositingOperation
```

<a id="overview"></a>

## Overview

The type of operation, the source image, and the destination image determine the final output.

These compositing operators are defined in and used by [compositeToPoint:fromRect:operation:](nsimage/compositetopoint_fromrect_operation_.md), [compositeToPoint:operation:](nsimage/compositetopoint_operation_.md), [compositeToPoint:fromRect:operation:fraction:](nsimage/compositetopoint_fromrect_operation_fraction_.md), [compositeToPoint:operation:fraction:](nsimage/compositetopoint_operation_fraction_.md), [draw(at:from:operation:fraction:)](nsimage/draw%28at_from_operation_fraction_%29.md), and [draw(in:from:operation:fraction:)](nsimage/draw%28in_from_operation_fraction_%29.md). They are also used by drawing methods in other classes that take a compositing operator.

The equations after each constant represent the mathematical formulas for calculating the color value of the resulting pixel. The table below lists the meaning of each placeholder value in the equations.

| Placeholder | Meaning |
| --- | --- |
| `R` | The premultiplied result color. |
| `S` | The source color. |
| `D` | The destination color. |
| `Sa` | The alpha value of the source color. |
| `Da` | The alpha value of the destination color. |

## Topics

### Operations for Compositing

- [NSCompositingOperation.clear](nscompositingoperation/clear.md): Transparency everywhere.
- [NSCompositingOperation.copy](nscompositingoperation/copy.md): The source image.
- [NSCompositingOperation.sourceOver](nscompositingoperation/sourceover.md): The source image wherever it is opaque, and the destination image elsewhere.
- [NSCompositingOperation.sourceIn](nscompositingoperation/sourcein.md): The source image wherever both images are opaque, and transparent elsewhere.
- [NSCompositingOperation.sourceOut](nscompositingoperation/sourceout.md): The source image wherever it is opaque and the destination image is transparent, and transparent elsewhere.
- [NSCompositingOperation.sourceAtop](nscompositingoperation/sourceatop.md): The source image wherever both images are opaque, the destination image wherever it is opaque but the source image is transparent, and transparent elsewhere
- [NSCompositingOperation.destinationOver](nscompositingoperation/destinationover.md): The destination image wherever it is opaque, and the source image elsewhere.
- [NSCompositingOperation.destinationIn](nscompositingoperation/destinationin.md): The destination image wherever both images are opaque, and transparent elsewhere.
- [NSCompositingOperation.destinationOut](nscompositingoperation/destinationout.md): The destination image wherever it is opaque and the source image is transparent, and transparent elsewhere.
- [NSCompositingOperation.destinationAtop](nscompositingoperation/destinationatop.md): The destination image wherever both images are opaque, the source image wherever it is opaque and the destination image is transparent, and transparent elsehwere.
- [NSCompositingOperation.xor](nscompositingoperation/xor.md): Exclusive OR of the source and destination images.
- [NSCompositingOperation.plusDarker](nscompositingoperation/plusdarker.md): The sum of the source and destination images, with color values approach 0 as a limit.
- [NSCompositingOperation.plusLighter](nscompositingoperation/pluslighter.md): The sum of the source and destination images, with color values approach 1 as a limit.
- [NSCompositingOperation.multiply](nscompositingoperation/multiply.md): The source color is multiplied by the destination color.
- [NSCompositingOperation.screen](nscompositingoperation/screen.md): Multiplies the complement of the destination and source color values, and then complements the result.
- [NSCompositingOperation.overlay](nscompositingoperation/overlay.md): Source colors overlay the destination.
- [NSCompositingOperation.darken](nscompositingoperation/darken.md): Use the darker of the source and destination colors.
- [NSCompositingOperation.lighten](nscompositingoperation/lighten.md): Use the lighter of the source and destination colors.
- [NSCompositingOperation.colorDodge](nscompositingoperation/colordodge.md): Brightens the destination to reflect the source.
- [NSCompositingOperation.colorBurn](nscompositingoperation/colorburn.md): Darkens the destination color to reflect the source.
- [NSCompositingOperation.softLight](nscompositingoperation/softlight.md): Darkens or lightens colors, with the effect of shining a diffused spotlight on the destination.
- [NSCompositingOperation.hardLight](nscompositingoperation/hardlight.md): Multiplies or screens colors, with the effect of shining a spotlight on the destination.
- [NSCompositingOperation.difference](nscompositingoperation/difference.md): Subtracts the darker value from the lighter value.
- [NSCompositingOperation.exclusion](nscompositingoperation/exclusion.md): Subtracts the darker value from the lighter value, except lower in contrast.
- [NSCompositingOperation.hue](nscompositingoperation/hue.md): Uses the hue of the source and the saturation and luminosity of the destination.
- [NSCompositingOperation.saturation](nscompositingoperation/saturation.md): Uses the saturation value of the source and the hue and luminosity of the destination.
- [NSCompositingOperation.color](nscompositingoperation/color.md): Uses the hue and saturation of the source and the luminosity of the destination.
- [NSCompositingOperation.luminosity](nscompositingoperation/luminosity.md): Uses the luminosity of the source and the hue and saturation of the destination.

### Initializers

- [init(rawValue:)](nscompositingoperation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Rendering Options

- [compositingOperation](nsgraphicscontext/compositingoperation.md): The graphics context’s global compositing operation setting.
- [imageInterpolation](nsgraphicscontext/imageinterpolation.md): A constant that specifies the graphics context’s interpolation, or image smoothing, behavior.
- [NSImageInterpolation](nsimageinterpolation.md): Constants that specify the interpolation, or image smoothing, behavior used by the image interpolation property.
- [shouldAntialias](nsgraphicscontext/shouldantialias.md): A Boolean value that indicates whether the graphics context uses antialiasing.
- [patternPhase](nsgraphicscontext/patternphase.md): The amount to offset the pattern color when filling the graphics context.

# NSCompositingOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.

## Declaration

```objectivec
enum NSCompositingOperation : NSUInteger;
```

<a id="overview"></a>

## Overview

The type of operation, the source image, and the destination image determine the final output.

These compositing operators are defined in and used by [compositeToPoint:fromRect:operation:](nsimage/compositetopoint_fromrect_operation_.md), [compositeToPoint:operation:](nsimage/compositetopoint_operation_.md), [compositeToPoint:fromRect:operation:fraction:](nsimage/compositetopoint_fromrect_operation_fraction_.md), [compositeToPoint:operation:fraction:](nsimage/compositetopoint_operation_fraction_.md), [drawAtPoint:fromRect:operation:fraction:](nsimage/draw%28at_from_operation_fraction_%29.md), and [drawInRect:fromRect:operation:fraction:](nsimage/draw%28in_from_operation_fraction_%29.md). They are also used by drawing methods in other classes that take a compositing operator.

The equations after each constant represent the mathematical formulas for calculating the color value of the resulting pixel. The table below lists the meaning of each placeholder value in the equations.

| Placeholder | Meaning |
| --- | --- |
| `R` | The premultiplied result color. |
| `S` | The source color. |
| `D` | The destination color. |
| `Sa` | The alpha value of the source color. |
| `Da` | The alpha value of the destination color. |

## Topics

### Operations for Compositing

- [NSCompositingOperationClear](nscompositingoperation/clear.md): Transparency everywhere.
- [NSCompositingOperationCopy](nscompositingoperation/copy.md): The source image.
- [NSCompositingOperationSourceOver](nscompositingoperation/sourceover.md): The source image wherever it is opaque, and the destination image elsewhere.
- [NSCompositingOperationSourceIn](nscompositingoperation/sourcein.md): The source image wherever both images are opaque, and transparent elsewhere.
- [NSCompositingOperationSourceOut](nscompositingoperation/sourceout.md): The source image wherever it is opaque and the destination image is transparent, and transparent elsewhere.
- [NSCompositingOperationSourceAtop](nscompositingoperation/sourceatop.md): The source image wherever both images are opaque, the destination image wherever it is opaque but the source image is transparent, and transparent elsewhere
- [NSCompositingOperationDestinationOver](nscompositingoperation/destinationover.md): The destination image wherever it is opaque, and the source image elsewhere.
- [NSCompositingOperationDestinationIn](nscompositingoperation/destinationin.md): The destination image wherever both images are opaque, and transparent elsewhere.
- [NSCompositingOperationDestinationOut](nscompositingoperation/destinationout.md): The destination image wherever it is opaque and the source image is transparent, and transparent elsewhere.
- [NSCompositingOperationDestinationAtop](nscompositingoperation/destinationatop.md): The destination image wherever both images are opaque, the source image wherever it is opaque and the destination image is transparent, and transparent elsehwere.
- [NSCompositingOperationXOR](nscompositingoperation/xor.md): Exclusive OR of the source and destination images.
- [NSCompositingOperationPlusDarker](nscompositingoperation/plusdarker.md): The sum of the source and destination images, with color values approach 0 as a limit.
- [NSCompositingOperationPlusLighter](nscompositingoperation/pluslighter.md): The sum of the source and destination images, with color values approach 1 as a limit.
- [NSCompositingOperationMultiply](nscompositingoperation/multiply.md): The source color is multiplied by the destination color.
- [NSCompositingOperationScreen](nscompositingoperation/screen.md): Multiplies the complement of the destination and source color values, and then complements the result.
- [NSCompositingOperationOverlay](nscompositingoperation/overlay.md): Source colors overlay the destination.
- [NSCompositingOperationDarken](nscompositingoperation/darken.md): Use the darker of the source and destination colors.
- [NSCompositingOperationLighten](nscompositingoperation/lighten.md): Use the lighter of the source and destination colors.
- [NSCompositingOperationColorDodge](nscompositingoperation/colordodge.md): Brightens the destination to reflect the source.
- [NSCompositingOperationColorBurn](nscompositingoperation/colorburn.md): Darkens the destination color to reflect the source.
- [NSCompositingOperationSoftLight](nscompositingoperation/softlight.md): Darkens or lightens colors, with the effect of shining a diffused spotlight on the destination.
- [NSCompositingOperationHardLight](nscompositingoperation/hardlight.md): Multiplies or screens colors, with the effect of shining a spotlight on the destination.
- [NSCompositingOperationDifference](nscompositingoperation/difference.md): Subtracts the darker value from the lighter value.
- [NSCompositingOperationExclusion](nscompositingoperation/exclusion.md): Subtracts the darker value from the lighter value, except lower in contrast.
- [NSCompositingOperationHue](nscompositingoperation/hue.md): Uses the hue of the source and the saturation and luminosity of the destination.
- [NSCompositingOperationSaturation](nscompositingoperation/saturation.md): Uses the saturation value of the source and the hue and luminosity of the destination.
- [NSCompositingOperationColor](nscompositingoperation/color.md): Uses the hue and saturation of the source and the luminosity of the destination.
- [NSCompositingOperationLuminosity](nscompositingoperation/luminosity.md): Uses the luminosity of the source and the hue and saturation of the destination.

### Deprecated Compositing Modes

- [NSCompositeClear](nscompositeclear.md): Deprecated. Transparent. (`R = 0`)
- [NSCompositeCopy](nscompositecopy.md): Deprecated. Source image. (`R = S`)
- [NSCompositeSourceOver](nscompositesourceover.md): Deprecated. Source image wherever source image is opaque, and destination image elsewhere. (`R = S + D*(1 - Sa)`)
- [NSCompositeSourceIn](nscompositesourcein.md): Deprecated. Source image wherever both images are opaque, and transparent elsewhere. (`R = S*Da`)
- [NSCompositeSourceOut](nscompositesourceout.md): Deprecated. Source image wherever source image is opaque but destination image is transparent, and transparent elsewhere. (`R = S*(1 - Da)`)
- [NSCompositeSourceAtop](nscompositesourceatop.md): Deprecated. Source image wherever both images are opaque, destination image wherever destination image is opaque but source image is transparent, and transparent elsewhere. (`R = S*Da + D*(1 - Sa)`)
- [NSCompositeDestinationOver](nscompositedestinationover.md): Deprecated. Destination image wherever destination image is opaque, and source image elsewhere. (`R = S*(1 - Da) + D`)
- [NSCompositeDestinationIn](nscompositedestinationin.md): Deprecated. Destination image wherever both images are opaque, and transparent elsewhere. (`R = D*Sa`)
- [NSCompositeDestinationOut](nscompositedestinationout.md): Deprecated. Destination image wherever destination image is opaque but source image is transparent, and transparent elsewhere. (`R = D*(1 - Sa)`)
- [NSCompositeDestinationAtop](nscompositedestinationatop.md): Deprecated. Destination image wherever both images are opaque, source image wherever source image is opaque but destination image is transparent, and transparent elsewhere. (`R = S*(1 - Da) + D*Sa`)
- [NSCompositeXOR](nscompositexor.md): Deprecated. Exclusive OR of source and destination images. (`R = S*(1 - Da) + D*(1 - Sa)`)
- [NSCompositePlusDarker](nscompositeplusdarker.md): Deprecated. Sum of source and destination images, with color values approaching 0 as a limit. (`R = MAX(0, (1 - D) + (1 - S))`)
- [NSCompositePlusLighter](nscompositepluslighter.md): Deprecated. Sum of source and destination images, with color values approaching 1 as a limit. (`R = MIN(1, S + D)`)
- [NSCompositeMultiply](nscompositemultiply.md): Deprecated. The source color is multiplied by the destination color.
- [NSCompositeScreen](nscompositescreen.md): Deprecated. Multiplies the complement of the destination and source color values, and then complements the result.
- [NSCompositeOverlay](nscompositeoverlay.md): Deprecated. Source colors overlay the destination.
- [NSCompositeDarken](nscompositedarken.md): Deprecated. Use the darker of the source and destination colors.
- [NSCompositeLighten](nscompositelighten.md): Deprecated. Use the lighter of the source and destination colors.
- [NSCompositeColorDodge](nscompositecolordodge.md): Deprecated. Brightens the destination to reflect the source.
- [NSCompositeColorBurn](nscompositecolorburn.md): Deprecated. Darkens the destination color to reflect the source.
- [NSCompositeSoftLight](nscompositesoftlight.md): Deprecated. Darkens or lightens colors, with the effect of shining a diffused spotlight on the destination.
- [NSCompositeHardLight](nscompositehardlight.md): Deprecated. Multiplies or screens colors, with the effect of shining a spotlight on the destination.
- [NSCompositeDifference](nscompositedifference.md): Deprecated. Subtracts the darker value from the lighter value.
- [NSCompositeExclusion](nscompositeexclusion.md): Deprecated. Subtracts the darker value from the lighter value, except lower in contrast.
- [NSCompositeHue](nscompositehue.md): Deprecated. Uses the hue of the source and the saturation and luminosity of the destination.
- [NSCompositeSaturation](nscompositesaturation.md): Deprecated. Uses the saturation value of the source and the hue and luminosity of the destination.
- [NSCompositeColor](nscompositecolor.md): Deprecated. Uses the hue and saturation of the source and the luminosity of the destination.
- [NSCompositeLuminosity](nscompositeluminosity.md): Deprecated. Uses the luminosity of the source and the hue and saturation of the destination.
- [NSCompositeHighlight](nscompositehighlight.md): Deprecated. Source image wherever source image is opaque, and destination image elsewhere.
- [NSCompositingOperationHighlight](nscompositingoperation/nscompositingoperationhighlight.md): Deprecated. The source image wherever it is opaque, and the destination image elsewhere.

## See Also

### Configuring Rendering Options

- [compositingOperation](nsgraphicscontext/compositingoperation.md): The graphics context’s global compositing operation setting.
- [imageInterpolation](nsgraphicscontext/imageinterpolation.md): A constant that specifies the graphics context’s interpolation, or image smoothing, behavior.
- [NSImageInterpolation](nsimageinterpolation.md): Constants that specify the interpolation, or image smoothing, behavior used by the image interpolation property.
- [shouldAntialias](nsgraphicscontext/shouldantialias.md): A Boolean value that indicates whether the graphics context uses antialiasing.
- [patternPhase](nsgraphicscontext/patternphase.md): The amount to offset the pattern color when filling the graphics context.
