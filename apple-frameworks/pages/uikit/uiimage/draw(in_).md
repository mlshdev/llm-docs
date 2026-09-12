> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/draw(in:)](https://developer.apple.com/documentation/uikit/uiimage/draw(in:))

# draw(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws the entire image in the specified rectangle, scaling it as necessary to fit.

## Declaration

```swift
func draw(in rect: CGRect)
```

## Parameters

- `rect`: The rectangle (in the coordinate system of the graphics context) in which to draw the image.

<a id="Discussion"></a>

## Discussion

This method draws the entire image in the current graphics context, respecting the image’s orientation setting. In the default coordinate system, images are situated down and to the right of the origin of the specified rectangle. This method respects any transforms applied to the current graphics context, however.

This method draws the image at full opacity using the [CGBlendMode.normal](../../coregraphics/cgblendmode/normal.md) blend mode.

## See Also

### Drawing images

- [draw(at:)](draw%28at_%29.md): Draws the image at the specified point in the current context.
- [draw(at:blendMode:alpha:)](draw%28at_blendmode_alpha_%29.md): Draws the entire image at the specified point using the custom compositing options.
- [draw(in:blendMode:alpha:)](draw%28in_blendmode_alpha_%29.md): Draws the entire image in the specified rectangle using the specified compositing options.
- [drawAsPattern(in:)](drawaspattern%28in_%29.md): Draws a tiled Quartz pattern using the receiver’s contents as the tile pattern.

# drawInRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws the entire image in the specified rectangle, scaling it as necessary to fit.

## Declaration

```objectivec
- (void) drawInRect:(CGRect) rect;
```

## Parameters

- `rect`: The rectangle (in the coordinate system of the graphics context) in which to draw the image.

<a id="Discussion"></a>

## Discussion

This method draws the entire image in the current graphics context, respecting the image’s orientation setting. In the default coordinate system, images are situated down and to the right of the origin of the specified rectangle. This method respects any transforms applied to the current graphics context, however.

This method draws the image at full opacity using the [kCGBlendModeNormal](../../coregraphics/cgblendmode/normal.md) blend mode.

## See Also

### Drawing images

- [drawAtPoint:](draw%28at_%29.md): Draws the image at the specified point in the current context.
- [drawAtPoint:blendMode:alpha:](draw%28at_blendmode_alpha_%29.md): Draws the entire image at the specified point using the custom compositing options.
- [drawInRect:blendMode:alpha:](draw%28in_blendmode_alpha_%29.md): Draws the entire image in the specified rectangle using the specified compositing options.
- [drawAsPatternInRect:](drawaspattern%28in_%29.md): Draws a tiled Quartz pattern using the receiver’s contents as the tile pattern.
