> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/draw(at:blendmode:alpha:)](https://developer.apple.com/documentation/uikit/uiimage/draw(at:blendmode:alpha:))

# draw(at:blendMode:alpha:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws the entire image at the specified point using the custom compositing options.

## Declaration

```swift
func draw(at point: CGPoint, blendMode: CGBlendMode, alpha: CGFloat)
```

## Parameters

- `point`: The point at which to draw the top-left corner of the image.
- `blendMode`: The blend mode to use when compositing the image.
- `alpha`: The desired opacity of the image, specified as a value between 0.0 and 1.0. A value of 0.0 renders the image totally transparent while 1.0 renders it fully opaque. Values larger than 1.0 are interpreted as 1.0.

<a id="Discussion"></a>

## Discussion

This method draws the entire image in the current graphics context, respecting the image’s orientation setting. In the default coordinate system, images are situated down and to the right of the specified point. This method respects any transforms applied to the current graphics context, however.

## See Also

### Drawing images

- [draw(at:)](draw%28at_%29.md): Draws the image at the specified point in the current context.
- [draw(in:)](draw%28in_%29.md): Draws the entire image in the specified rectangle, scaling it as necessary to fit.
- [draw(in:blendMode:alpha:)](draw%28in_blendmode_alpha_%29.md): Draws the entire image in the specified rectangle using the specified compositing options.
- [drawAsPattern(in:)](drawaspattern%28in_%29.md): Draws a tiled Quartz pattern using the receiver’s contents as the tile pattern.

# drawAtPoint:blendMode:alpha: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws the entire image at the specified point using the custom compositing options.

## Declaration

```objectivec
- (void) drawAtPoint:(CGPoint) point blendMode:(CGBlendMode) blendMode alpha:(CGFloat) alpha;
```

## Parameters

- `point`: The point at which to draw the top-left corner of the image.
- `blendMode`: The blend mode to use when compositing the image.
- `alpha`: The desired opacity of the image, specified as a value between 0.0 and 1.0. A value of 0.0 renders the image totally transparent while 1.0 renders it fully opaque. Values larger than 1.0 are interpreted as 1.0.

<a id="Discussion"></a>

## Discussion

This method draws the entire image in the current graphics context, respecting the image’s orientation setting. In the default coordinate system, images are situated down and to the right of the specified point. This method respects any transforms applied to the current graphics context, however.

## See Also

### Drawing images

- [drawAtPoint:](draw%28at_%29.md): Draws the image at the specified point in the current context.
- [drawInRect:](draw%28in_%29.md): Draws the entire image in the specified rectangle, scaling it as necessary to fit.
- [drawInRect:blendMode:alpha:](draw%28in_blendmode_alpha_%29.md): Draws the entire image in the specified rectangle using the specified compositing options.
- [drawAsPatternInRect:](drawaspattern%28in_%29.md): Draws a tiled Quartz pattern using the receiver’s contents as the tile pattern.
