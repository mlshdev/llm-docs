> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/draw(at:)](https://developer.apple.com/documentation/uikit/uiimage/draw(at:))

# draw(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws the image at the specified point in the current context.

## Declaration

```swift
func draw(at point: CGPoint)
```

## Parameters

- `point`: The point at which to draw the top-left corner of the image.

<a id="Discussion"></a>

## Discussion

This method draws the entire image in the current graphics context, respecting the image’s orientation setting. In the default coordinate system, images are situated down and to the right of the specified point. This method respects any transforms applied to the current graphics context, however.

This method draws the image at full opacity using the [CGBlendMode.normal](../../coregraphics/cgblendmode/normal.md) blend mode.

## See Also

### Drawing images

- [draw(at:blendMode:alpha:)](draw%28at_blendmode_alpha_%29.md): Draws the entire image at the specified point using the custom compositing options.
- [draw(in:)](draw%28in_%29.md): Draws the entire image in the specified rectangle, scaling it as necessary to fit.
- [draw(in:blendMode:alpha:)](draw%28in_blendmode_alpha_%29.md): Draws the entire image in the specified rectangle using the specified compositing options.
- [drawAsPattern(in:)](drawaspattern%28in_%29.md): Draws a tiled Quartz pattern using the receiver’s contents as the tile pattern.

# drawAtPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws the image at the specified point in the current context.

## Declaration

```objectivec
- (void) drawAtPoint:(CGPoint) point;
```

## Parameters

- `point`: The point at which to draw the top-left corner of the image.

<a id="Discussion"></a>

## Discussion

This method draws the entire image in the current graphics context, respecting the image’s orientation setting. In the default coordinate system, images are situated down and to the right of the specified point. This method respects any transforms applied to the current graphics context, however.

This method draws the image at full opacity using the [kCGBlendModeNormal](../../coregraphics/cgblendmode/normal.md) blend mode.

## See Also

### Drawing images

- [drawAtPoint:blendMode:alpha:](draw%28at_blendmode_alpha_%29.md): Draws the entire image at the specified point using the custom compositing options.
- [drawInRect:](draw%28in_%29.md): Draws the entire image in the specified rectangle, scaling it as necessary to fit.
- [drawInRect:blendMode:alpha:](draw%28in_blendmode_alpha_%29.md): Draws the entire image in the specified rectangle using the specified compositing options.
- [drawAsPatternInRect:](drawaspattern%28in_%29.md): Draws a tiled Quartz pattern using the receiver’s contents as the tile pattern.
