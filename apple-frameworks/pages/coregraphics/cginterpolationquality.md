> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cginterpolationquality](https://developer.apple.com/documentation/coregraphics/cginterpolationquality)

# CGInterpolationQuality (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Levels of interpolation quality for rendering an image.

## Declaration

```swift
enum CGInterpolationQuality
```

<a id="overview"></a>

## Overview

You use the function [CGContextSetInterpolationQuality](cgcontextsetinterpolationquality.md) to set the interpolation quality in a graphics context.

## Topics

### Constants

- [CGInterpolationQuality.default](cginterpolationquality/default.md): The default level of quality.
- [CGInterpolationQuality.none](cginterpolationquality/none.md): No interpolation.
- [CGInterpolationQuality.low](cginterpolationquality/low.md): A low level of interpolation quality. This setting may speed up image rendering.
- [CGInterpolationQuality.medium](cginterpolationquality/medium.md): A medium level of interpolation quality. This setting is slower than the low setting but faster than the high setting.
- [CGInterpolationQuality.high](cginterpolationquality/high.md): A high level of interpolation quality. This setting may slow down image rendering.

### Initializers

- [init(rawValue:)](cginterpolationquality/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drawing Images and PDF Content

- [draw(\_:in:byTiling:)](cgcontext/draw%28__in_bytiling_%29.md): Draws an image in the specified area.
- [drawPDFPage(\_:)](cgcontext/drawpdfpage%28__%29.md): Draws the content of a PDF page into the current graphics context.
- [interpolationQuality](cgcontext/interpolationquality.md): Returns the current level of interpolation quality for a graphics context.

# CGInterpolationQuality (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Levels of interpolation quality for rendering an image.

## Declaration

```objectivec
enum CGInterpolationQuality : int32_t;
```

<a id="overview"></a>

## Overview

You use the function [CGContextSetInterpolationQuality](cgcontextsetinterpolationquality.md) to set the interpolation quality in a graphics context.

## Topics

### Constants

- [kCGInterpolationDefault](cginterpolationquality/default.md): The default level of quality.
- [kCGInterpolationNone](cginterpolationquality/none.md): No interpolation.
- [kCGInterpolationLow](cginterpolationquality/low.md): A low level of interpolation quality. This setting may speed up image rendering.
- [kCGInterpolationMedium](cginterpolationquality/medium.md): A medium level of interpolation quality. This setting is slower than the low setting but faster than the high setting.
- [kCGInterpolationHigh](cginterpolationquality/high.md): A high level of interpolation quality. This setting may slow down image rendering.

## See Also

### Drawing Images and PDF Content

- [CGContextDrawTiledImage](cgcontextdrawtiledimage.md): Repeatedly draws an image, scaled to the provided rectangle, to fill the current clip region.
- [CGContextDrawImage](cgcontextdrawimage.md): Draws an image into a graphics context.
- [CGContextDrawPDFPage](cgcontext/drawpdfpage%28__%29.md): Draws the content of a PDF page into the current graphics context.
- [CGContextGetInterpolationQuality](cgcontext/interpolationquality.md): Returns the current level of interpolation quality for a graphics context.
- [CGContextSetInterpolationQuality](cgcontextsetinterpolationquality.md): Sets the level of interpolation quality for a graphics context.
