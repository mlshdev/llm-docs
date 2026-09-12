> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorrenderingintent/relativecolorimetric](https://developer.apple.com/documentation/coregraphics/cgcolorrenderingintent/relativecolorimetric)

# CGColorRenderingIntent.relativeColorimetric (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
case relativeColorimetric
```

<a id="Discussion"></a>

## Discussion

Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device. This can produce a clipping effect, where two different color values in the gamut of the graphics context are mapped to the same color value in the output device’s gamut. The relative colorimetric shifts all colors (including those within the gamut) to account for the difference between the white point of the graphics context and the white point of the output device.

## See Also

### Constants

- [CGColorRenderingIntent.defaultIntent](defaultintent.md): The default rendering intent for the graphics context.
- [CGColorRenderingIntent.absoluteColorimetric](absolutecolorimetric.md)
- [CGColorRenderingIntent.perceptual](perceptual.md): Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device. Perceptual intent is good for photographs and other complex, detailed images.
- [CGColorRenderingIntent.saturation](saturation.md)

# kCGRenderingIntentRelativeColorimetric (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
kCGRenderingIntentRelativeColorimetric
```

<a id="Discussion"></a>

## Discussion

Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device. This can produce a clipping effect, where two different color values in the gamut of the graphics context are mapped to the same color value in the output device’s gamut. The relative colorimetric shifts all colors (including those within the gamut) to account for the difference between the white point of the graphics context and the white point of the output device.

## See Also

### Constants

- [kCGRenderingIntentDefault](defaultintent.md): The default rendering intent for the graphics context.
- [kCGRenderingIntentAbsoluteColorimetric](absolutecolorimetric.md)
- [kCGRenderingIntentPerceptual](perceptual.md): Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device. Perceptual intent is good for photographs and other complex, detailed images.
- [kCGRenderingIntentSaturation](saturation.md)
