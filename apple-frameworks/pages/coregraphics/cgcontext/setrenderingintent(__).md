> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setrenderingintent(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/setrenderingintent(_:))

# setRenderingIntent(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the rendering intent in the current graphics state.

## Declaration

```swift
func setRenderingIntent(_ intent: CGColorRenderingIntent)
```

## Parameters

- `intent`: A rendering intent constant—[CGColorRenderingIntent.defaultIntent](../cgcolorrenderingintent/defaultintent.md), [CGColorRenderingIntent.absoluteColorimetric](../cgcolorrenderingintent/absolutecolorimetric.md), [CGColorRenderingIntent.relativeColorimetric](../cgcolorrenderingintent/relativecolorimetric.md), [CGColorRenderingIntent.perceptual](../cgcolorrenderingintent/perceptual.md), or [CGColorRenderingIntent.saturation](../cgcolorrenderingintent/saturation.md). For a discussion of these constants, see [CGColorSpace](../cgcolorspace.md).

<a id="Discussion"></a>

## Discussion

The rendering intent specifies how to handle colors that are not located within the gamut of the destination color space of a graphics context. If you do not explicitly set the rendering intent, Core Graphics uses perceptual rendering intent when drawing sampled images and relative colorimetric rendering intent for all other drawing.

## See Also

### Managing a Graphics Context

- [flush()](flush%28%29.md): Forces all pending drawing operations in a window context to be rendered immediately to the destination device.
- [synchronize()](synchronize%28%29.md): Marks a window context for update.
- [setBlendMode(\_:)](setblendmode%28__%29.md): Sets how sample values are composited by a graphics context.
- [CGBlendMode](../cgblendmode.md): Compositing operations for images.

# CGContextSetRenderingIntent (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the rendering intent in the current graphics state.

## Declaration

```objectivec
extern void CGContextSetRenderingIntent(CGContextRef c, CGColorRenderingIntent intent);
```

## Parameters

- `c`: The graphics context to modify.
- `intent`: A rendering intent constant—[kCGRenderingIntentDefault](../cgcolorrenderingintent/defaultintent.md), [kCGRenderingIntentAbsoluteColorimetric](../cgcolorrenderingintent/absolutecolorimetric.md), [kCGRenderingIntentRelativeColorimetric](../cgcolorrenderingintent/relativecolorimetric.md), [kCGRenderingIntentPerceptual](../cgcolorrenderingintent/perceptual.md), or [kCGRenderingIntentSaturation](../cgcolorrenderingintent/saturation.md). For a discussion of these constants, see [CGColorSpaceRef](../cgcolorspace.md).

<a id="Discussion"></a>

## Discussion

The rendering intent specifies how to handle colors that are not located within the gamut of the destination color space of a graphics context. If you do not explicitly set the rendering intent, Core Graphics uses perceptual rendering intent when drawing sampled images and relative colorimetric rendering intent for all other drawing.

## See Also

### Managing a Graphics Context

- [CGContextFlush](flush%28%29.md): Forces all pending drawing operations in a window context to be rendered immediately to the destination device.
- [CGContextSynchronize](synchronize%28%29.md): Marks a window context for update.
- [CGContextSetBlendMode](setblendmode%28__%29.md): Sets how sample values are composited by a graphics context.
- [CGBlendMode](../cgblendmode.md): Compositing operations for images.
