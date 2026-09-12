> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontextsetinterpolationquality](https://developer.apple.com/documentation/coregraphics/cgcontextsetinterpolationquality)

# CGContextSetInterpolationQuality

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the level of interpolation quality for a graphics context.

## Declaration

```objectivec
extern void CGContextSetInterpolationQuality(CGContextRef c, CGInterpolationQuality quality);
```

## Parameters

- `c`: The graphics context to modify.
- `quality`: A constant that specifies the required level of interpolation quality. For possible values, see [CGInterpolationQuality](cginterpolationquality.md).

<a id="Discussion"></a>

## Discussion

Interpolation quality is merely a hint to the context—not all contexts support all interpolation quality levels.

## See Also

### Drawing Images and PDF Content

- [CGContextDrawTiledImage](cgcontextdrawtiledimage.md): Repeatedly draws an image, scaled to the provided rectangle, to fill the current clip region.
- [CGContextDrawImage](cgcontextdrawimage.md): Draws an image into a graphics context.
- [CGContextDrawPDFPage](cgcontext/drawpdfpage%28__%29.md): Draws the content of a PDF page into the current graphics context.
- [CGContextGetInterpolationQuality](cgcontext/interpolationquality.md): Returns the current level of interpolation quality for a graphics context.
- [CGInterpolationQuality](cginterpolationquality.md): Levels of interpolation quality for rendering an image.
