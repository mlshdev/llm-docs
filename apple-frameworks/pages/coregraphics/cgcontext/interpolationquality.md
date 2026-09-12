> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/interpolationquality](https://developer.apple.com/documentation/coregraphics/cgcontext/interpolationquality)

# interpolationQuality (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the current level of interpolation quality for a graphics context.

## Declaration

```swift
var interpolationQuality: CGInterpolationQuality { get set }
```

<a id="Discussion"></a>

## Discussion

Interpolation quality is a graphics state parameter that provides a hint for the level of quality to use for image interpolation (for example, when scaling the image). Not all contexts support all interpolation quality levels.

## See Also

### Drawing Images and PDF Content

- [draw(\_:in:byTiling:)](draw%28__in_bytiling_%29.md): Draws an image in the specified area.
- [drawPDFPage(\_:)](drawpdfpage%28__%29.md): Draws the content of a PDF page into the current graphics context.
- [CGInterpolationQuality](../cginterpolationquality.md): Levels of interpolation quality for rendering an image.

# CGContextGetInterpolationQuality (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the current level of interpolation quality for a graphics context.

## Declaration

```objectivec
extern CGInterpolationQuality CGContextGetInterpolationQuality(CGContextRef c);
```

## Parameters

- `c`: The graphics context to examine.

<a id="return-value"></a>

## Return Value

The current level of interpolation quality.

<a id="Discussion"></a>

## Discussion

Interpolation quality is a graphics state parameter that provides a hint for the level of quality to use for image interpolation (for example, when scaling the image). Not all contexts support all interpolation quality levels.

## See Also

### Related Documentation

- [CGContextSetInterpolationQuality](../cgcontextsetinterpolationquality.md): Sets the level of interpolation quality for a graphics context.

### Drawing Images and PDF Content

- [CGContextDrawTiledImage](../cgcontextdrawtiledimage.md): Repeatedly draws an image, scaled to the provided rectangle, to fill the current clip region.
- [CGContextDrawImage](../cgcontextdrawimage.md): Draws an image into a graphics context.
- [CGContextDrawPDFPage](drawpdfpage%28__%29.md): Draws the content of a PDF page into the current graphics context.
- [CGContextSetInterpolationQuality](../cgcontextsetinterpolationquality.md): Sets the level of interpolation quality for a graphics context.
- [CGInterpolationQuality](../cginterpolationquality.md): Levels of interpolation quality for rendering an image.
