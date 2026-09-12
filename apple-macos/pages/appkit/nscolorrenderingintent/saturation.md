> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorrenderingintent/saturation](https://developer.apple.com/documentation/appkit/nscolorrenderingintent/saturation)

# NSColorRenderingIntent.saturation (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.5+

Preserve the relative saturation value of the colors when converting into the gamut of the output device.

## Declaration

```swift
case saturation
```

<a id="Discussion"></a>

## Discussion

The result is an image with bright, saturated colors. Saturation intent is good for reproducing images with low detail, such as presentation charts and graphs.

## See Also

### Constants

- [NSColorRenderingIntent.default](default.md): Use the default rendering intent for the graphics context.
- [NSColorRenderingIntent.absoluteColorimetric](absolutecolorimetric.md): Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device.
- [NSColorRenderingIntent.relativeColorimetric](relativecolorimetric.md): Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device.
- [NSColorRenderingIntent.perceptual](perceptual.md): Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device.

# NSColorRenderingIntentSaturation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+

Preserve the relative saturation value of the colors when converting into the gamut of the output device.

## Declaration

```objectivec
NSColorRenderingIntentSaturation
```

<a id="Discussion"></a>

## Discussion

The result is an image with bright, saturated colors. Saturation intent is good for reproducing images with low detail, such as presentation charts and graphs.

## See Also

### Constants

- [NSColorRenderingIntentDefault](default.md): Use the default rendering intent for the graphics context.
- [NSColorRenderingIntentAbsoluteColorimetric](absolutecolorimetric.md): Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device.
- [NSColorRenderingIntentRelativeColorimetric](relativecolorimetric.md): Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device.
- [NSColorRenderingIntentPerceptual](perceptual.md): Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device.
