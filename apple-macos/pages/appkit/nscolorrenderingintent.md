> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorrenderingintent](https://developer.apple.com/documentation/appkit/nscolorrenderingintent)

# NSColorRenderingIntent (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

Constants that specify how Cocoa should handle colors that are not located within the destination color space of a graphics context.

## Declaration

```swift
enum NSColorRenderingIntent
```

<a id="overview"></a>

## Overview

These constants are used by the property [colorRenderingIntent](nsgraphicscontext/colorrenderingintent.md).

## Topics

### Constants

- [NSColorRenderingIntent.default](nscolorrenderingintent/default.md): Use the default rendering intent for the graphics context.
- [NSColorRenderingIntent.absoluteColorimetric](nscolorrenderingintent/absolutecolorimetric.md): Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device.
- [NSColorRenderingIntent.relativeColorimetric](nscolorrenderingintent/relativecolorimetric.md): Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device.
- [NSColorRenderingIntent.perceptual](nscolorrenderingintent/perceptual.md): Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device.
- [NSColorRenderingIntent.saturation](nscolorrenderingintent/saturation.md): Preserve the relative saturation value of the colors when converting into the gamut of the output device.

### Initializers

- [init(rawValue:)](nscolorrenderingintent/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Color Rendering

- [colorRenderingIntent](nsgraphicscontext/colorrenderingintent.md): The color rendering intent in the graphics context’s graphics state.

# NSColorRenderingIntent (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

Constants that specify how Cocoa should handle colors that are not located within the destination color space of a graphics context.

## Declaration

```objectivec
enum NSColorRenderingIntent : NSInteger;
```

<a id="overview"></a>

## Overview

These constants are used by the property [colorRenderingIntent](nsgraphicscontext/colorrenderingintent.md).

## Topics

### Constants

- [NSColorRenderingIntentDefault](nscolorrenderingintent/default.md): Use the default rendering intent for the graphics context.
- [NSColorRenderingIntentAbsoluteColorimetric](nscolorrenderingintent/absolutecolorimetric.md): Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device.
- [NSColorRenderingIntentRelativeColorimetric](nscolorrenderingintent/relativecolorimetric.md): Map colors outside of the gamut of the output device to the closest possible match inside the gamut of the output device.
- [NSColorRenderingIntentPerceptual](nscolorrenderingintent/perceptual.md): Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device.
- [NSColorRenderingIntentSaturation](nscolorrenderingintent/saturation.md): Preserve the relative saturation value of the colors when converting into the gamut of the output device.

## See Also

### Managing Color Rendering

- [colorRenderingIntent](nsgraphicscontext/colorrenderingintent.md): The color rendering intent in the graphics context’s graphics state.
