> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorrenderingintent](https://developer.apple.com/documentation/coregraphics/cgcolorrenderingintent)

# CGColorRenderingIntent (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Handling options for colors that are not located within the destination color space of a graphics context.

## Declaration

```swift
enum CGColorRenderingIntent
```

<a id="overview"></a>

## Overview

The rendering intent specifies how Quartz should handle colors that are not located within the gamut of the destination color space of a graphics context. It determines the exact method used to map colors from one color space to another. If you do not explicitly set the rendering intent by calling the function [setRenderingIntent(\_:)](cgcontext/setrenderingintent%28__%29.md), the graphics context uses the relative colorimetric rendering intent, except when drawing sampled images.

## Topics

### Constants

- [CGColorRenderingIntent.defaultIntent](cgcolorrenderingintent/defaultintent.md): The default rendering intent for the graphics context.
- [CGColorRenderingIntent.absoluteColorimetric](cgcolorrenderingintent/absolutecolorimetric.md)
- [CGColorRenderingIntent.relativeColorimetric](cgcolorrenderingintent/relativecolorimetric.md)
- [CGColorRenderingIntent.perceptual](cgcolorrenderingintent/perceptual.md): Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device. Perceptual intent is good for photographs and other complex, detailed images.
- [CGColorRenderingIntent.saturation](cgcolorrenderingintent/saturation.md)

### Initializers

- [init(rawValue:)](cgcolorrenderingintent/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CGColorRenderingIntent (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Handling options for colors that are not located within the destination color space of a graphics context.

## Declaration

```objectivec
enum CGColorRenderingIntent : int32_t;
```

<a id="overview"></a>

## Overview

The rendering intent specifies how Quartz should handle colors that are not located within the gamut of the destination color space of a graphics context. It determines the exact method used to map colors from one color space to another. If you do not explicitly set the rendering intent by calling the function [CGContextSetRenderingIntent](cgcontext/setrenderingintent%28__%29.md), the graphics context uses the relative colorimetric rendering intent, except when drawing sampled images.

## Topics

### Constants

- [kCGRenderingIntentDefault](cgcolorrenderingintent/defaultintent.md): The default rendering intent for the graphics context.
- [kCGRenderingIntentAbsoluteColorimetric](cgcolorrenderingintent/absolutecolorimetric.md)
- [kCGRenderingIntentRelativeColorimetric](cgcolorrenderingintent/relativecolorimetric.md)
- [kCGRenderingIntentPerceptual](cgcolorrenderingintent/perceptual.md): Preserve the visual relationship between colors by compressing the gamut of the graphics context to fit inside the gamut of the output device. Perceptual intent is good for photographs and other complex, detailed images.
- [kCGRenderingIntentSaturation](cgcolorrenderingintent/saturation.md)
