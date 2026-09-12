> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorrenderingintent/saturation](https://developer.apple.com/documentation/coregraphics/cgcolorrenderingintent/saturation)

# CGColorRenderingIntent.saturation (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
case saturation
```

<a id="Discussion"></a>

## Discussion

Preserve the relative saturation value of the colors when converting into the gamut of the output device. The result is an image with bright, saturated colors. Saturation intent is good for reproducing images with low detail, such as presentation charts and graphs.

## See Also

### Constants

- [CGColorRenderingIntent.defaultIntent](defaultintent.md): The default rendering intent for the graphics context.
- [CGColorRenderingIntent.absoluteColorimetric](absolutecolorimetric.md)
- [CGColorRenderingIntent.relativeColorimetric](relativecolorimetric.md)
- [CGColorRenderingIntent.perceptual](perceptual.md): Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device. Perceptual intent is good for photographs and other complex, detailed images.

# kCGRenderingIntentSaturation (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
kCGRenderingIntentSaturation
```

<a id="Discussion"></a>

## Discussion

Preserve the relative saturation value of the colors when converting into the gamut of the output device. The result is an image with bright, saturated colors. Saturation intent is good for reproducing images with low detail, such as presentation charts and graphs.

## See Also

### Constants

- [kCGRenderingIntentDefault](defaultintent.md): The default rendering intent for the graphics context.
- [kCGRenderingIntentAbsoluteColorimetric](absolutecolorimetric.md)
- [kCGRenderingIntentRelativeColorimetric](relativecolorimetric.md)
- [kCGRenderingIntentPerceptual](perceptual.md): Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device. Perceptual intent is good for photographs and other complex, detailed images.
