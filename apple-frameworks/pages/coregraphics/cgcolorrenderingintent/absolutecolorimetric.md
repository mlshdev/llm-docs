> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorrenderingintent/absolutecolorimetric](https://developer.apple.com/documentation/coregraphics/cgcolorrenderingintent/absolutecolorimetric)

# CGColorRenderingIntent.absoluteColorimetric (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
case absoluteColorimetric
```

<a id="Discussion"></a>

## Discussion

Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device. This can produce a clipping effect, where two different color values in the gamut of the graphics context are mapped to the same color value in the output device’s gamut. Unlike the relative colorimetric, absolute colorimetric does not modify colors inside the gamut of the output device.

## See Also

### Constants

- [CGColorRenderingIntent.defaultIntent](defaultintent.md): The default rendering intent for the graphics context.
- [CGColorRenderingIntent.relativeColorimetric](relativecolorimetric.md)
- [CGColorRenderingIntent.perceptual](perceptual.md): Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device. Perceptual intent is good for photographs and other complex, detailed images.
- [CGColorRenderingIntent.saturation](saturation.md)

# kCGRenderingIntentAbsoluteColorimetric (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
kCGRenderingIntentAbsoluteColorimetric
```

<a id="Discussion"></a>

## Discussion

Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device. This can produce a clipping effect, where two different color values in the gamut of the graphics context are mapped to the same color value in the output device’s gamut. Unlike the relative colorimetric, absolute colorimetric does not modify colors inside the gamut of the output device.

## See Also

### Constants

- [kCGRenderingIntentDefault](defaultintent.md): The default rendering intent for the graphics context.
- [kCGRenderingIntentRelativeColorimetric](relativecolorimetric.md)
- [kCGRenderingIntentPerceptual](perceptual.md): Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device. Perceptual intent is good for photographs and other complex, detailed images.
- [kCGRenderingIntentSaturation](saturation.md)
