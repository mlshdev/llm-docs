> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorrenderingintent/perceptual](https://developer.apple.com/documentation/appkit/nscolorrenderingintent/perceptual)

# NSColorRenderingIntent.perceptual (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.5+

Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device.

## Declaration

```swift
case perceptual
```

<a id="Discussion"></a>

## Discussion

Perceptual intent is good for photographs and other complex, detailed images.

## See Also

### Constants

- [NSColorRenderingIntent.default](default.md): Use the default rendering intent for the graphics context.
- [NSColorRenderingIntent.absoluteColorimetric](absolutecolorimetric.md): Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device.
- [NSColorRenderingIntent.relativeColorimetric](relativecolorimetric.md): Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device.
- [NSColorRenderingIntent.saturation](saturation.md): Preserve the relative saturation value of the colors when converting into the gamut of the output device.

# NSColorRenderingIntentPerceptual (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+

Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device.

## Declaration

```objectivec
NSColorRenderingIntentPerceptual
```

<a id="Discussion"></a>

## Discussion

Perceptual intent is good for photographs and other complex, detailed images.

## See Also

### Constants

- [NSColorRenderingIntentDefault](default.md): Use the default rendering intent for the graphics context.
- [NSColorRenderingIntentAbsoluteColorimetric](absolutecolorimetric.md): Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device.
- [NSColorRenderingIntentRelativeColorimetric](relativecolorimetric.md): Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device.
- [NSColorRenderingIntentSaturation](saturation.md): Preserve the relative saturation value of the colors when converting into the gamut of the output device.
