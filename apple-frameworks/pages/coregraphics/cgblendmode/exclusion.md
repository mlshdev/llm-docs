> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgblendmode/exclusion](https://developer.apple.com/documentation/coregraphics/cgblendmode/exclusion)

# CGBlendMode.exclusion (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Produces an effect similar to that produced by [CGBlendMode.difference](difference.md), but with lower contrast. Source image sample values that are black don’t produce a change; white inverts the background color values.

## Declaration

```swift
case exclusion
```

## See Also

### Constants

- [CGBlendMode.normal](normal.md): Paints the source image samples over the background image samples.
- [CGBlendMode.multiply](multiply.md): Multiplies the source image samples with the background image samples. This results in colors that are at least as dark as either of the two contributing sample colors.
- [CGBlendMode.screen](screen.md): Multiplies the inverse of the source image samples with the inverse of the background image samples, resulting in colors that are at least as light as either of the two contributing sample colors.
- [CGBlendMode.overlay](overlay.md)
- [CGBlendMode.darken](darken.md)
- [CGBlendMode.lighten](lighten.md)
- [CGBlendMode.colorDodge](colordodge.md): Brightens the background image samples to reflect the source image samples. Source image sample values that specify black do not produce a change.
- [CGBlendMode.colorBurn](colorburn.md): Darkens the background image samples to reflect the source image samples. Source image sample values that specify white do not produce a change.
- [CGBlendMode.softLight](softlight.md)
- [CGBlendMode.hardLight](hardlight.md)
- [CGBlendMode.difference](difference.md)
- [CGBlendMode.hue](hue.md): Uses the luminance and saturation values of the background with the hue of the source image.
- [CGBlendMode.saturation](saturation.md): Uses the luminance and hue values of the background with the saturation of the source image. Areas of the background that have no saturation (that is, pure gray areas) don’t produce a change.
- [CGBlendMode.color](color.md): Uses the luminance values of the background with the hue and saturation values of the source image. This mode preserves the gray levels in the image. You can use this mode to color monochrome images or to tint color images.
- [CGBlendMode.luminosity](luminosity.md): Uses the hue and saturation of the background with the luminance of the source image. This mode creates an effect that is inverse to the effect created by [CGBlendMode.color](color.md).

# kCGBlendModeExclusion (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Produces an effect similar to that produced by [kCGBlendModeDifference](difference.md), but with lower contrast. Source image sample values that are black don’t produce a change; white inverts the background color values.

## Declaration

```objectivec
kCGBlendModeExclusion
```

## See Also

### Constants

- [kCGBlendModeNormal](normal.md): Paints the source image samples over the background image samples.
- [kCGBlendModeMultiply](multiply.md): Multiplies the source image samples with the background image samples. This results in colors that are at least as dark as either of the two contributing sample colors.
- [kCGBlendModeScreen](screen.md): Multiplies the inverse of the source image samples with the inverse of the background image samples, resulting in colors that are at least as light as either of the two contributing sample colors.
- [kCGBlendModeOverlay](overlay.md)
- [kCGBlendModeDarken](darken.md)
- [kCGBlendModeLighten](lighten.md)
- [kCGBlendModeColorDodge](colordodge.md): Brightens the background image samples to reflect the source image samples. Source image sample values that specify black do not produce a change.
- [kCGBlendModeColorBurn](colorburn.md): Darkens the background image samples to reflect the source image samples. Source image sample values that specify white do not produce a change.
- [kCGBlendModeSoftLight](softlight.md)
- [kCGBlendModeHardLight](hardlight.md)
- [kCGBlendModeDifference](difference.md)
- [kCGBlendModeHue](hue.md): Uses the luminance and saturation values of the background with the hue of the source image.
- [kCGBlendModeSaturation](saturation.md): Uses the luminance and hue values of the background with the saturation of the source image. Areas of the background that have no saturation (that is, pure gray areas) don’t produce a change.
- [kCGBlendModeColor](color.md): Uses the luminance values of the background with the hue and saturation values of the source image. This mode preserves the gray levels in the image. You can use this mode to color monochrome images or to tint color images.
- [kCGBlendModeLuminosity](luminosity.md): Uses the hue and saturation of the background with the luminance of the source image. This mode creates an effect that is inverse to the effect created by [kCGBlendModeColor](color.md).
