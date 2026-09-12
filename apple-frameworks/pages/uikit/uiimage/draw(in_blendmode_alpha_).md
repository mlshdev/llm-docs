> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/draw(in:blendmode:alpha:)](https://developer.apple.com/documentation/uikit/uiimage/draw(in:blendmode:alpha:))

# draw(in:blendMode:alpha:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws the entire image in the specified rectangle using the specified compositing options.

## Declaration

```swift
func draw(in rect: CGRect, blendMode: CGBlendMode, alpha: CGFloat)
```

## Parameters

- `rect`: The rectangle (in the coordinate system of the graphics context) in which to draw the image.
- `blendMode`: The blend mode to use when compositing the image.
- `alpha`: The desired opacity of the image, specified as a value between 0.0 and 1.0. A value of 0.0 renders the image totally transparent while 1.0 renders it fully opaque. Values larger than 1.0 are interpreted as 1.0.

<a id="Discussion"></a>

## Discussion

This method scales the image as needed to make it fit in the specified rectangle. This method draws the image in the current graphics context, respecting the image’s orientation setting. In the default coordinate system, images are situated down and to the right of the origin of the specified rectangle. This method respects any transforms applied to the current graphics context, however.

## See Also

### Drawing images

- [draw(at:)](draw%28at_%29.md): Draws the image at the specified point in the current context.
- [draw(at:blendMode:alpha:)](draw%28at_blendmode_alpha_%29.md): Draws the entire image at the specified point using the custom compositing options.
- [draw(in:)](draw%28in_%29.md): Draws the entire image in the specified rectangle, scaling it as necessary to fit.
- [drawAsPattern(in:)](drawaspattern%28in_%29.md): Draws a tiled Quartz pattern using the receiver’s contents as the tile pattern.

# drawInRect:blendMode:alpha: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws the entire image in the specified rectangle using the specified compositing options.

## Declaration

```objectivec
- (void) drawInRect:(CGRect) rect blendMode:(CGBlendMode) blendMode alpha:(CGFloat) alpha;
```

## Parameters

- `rect`: The rectangle (in the coordinate system of the graphics context) in which to draw the image.
- `blendMode`: The blend mode to use when compositing the image.
- `alpha`: The desired opacity of the image, specified as a value between 0.0 and 1.0. A value of 0.0 renders the image totally transparent while 1.0 renders it fully opaque. Values larger than 1.0 are interpreted as 1.0.

<a id="Discussion"></a>

## Discussion

This method scales the image as needed to make it fit in the specified rectangle. This method draws the image in the current graphics context, respecting the image’s orientation setting. In the default coordinate system, images are situated down and to the right of the origin of the specified rectangle. This method respects any transforms applied to the current graphics context, however.

## See Also

### Drawing images

- [drawAtPoint:](draw%28at_%29.md): Draws the image at the specified point in the current context.
- [drawAtPoint:blendMode:alpha:](draw%28at_blendmode_alpha_%29.md): Draws the entire image at the specified point using the custom compositing options.
- [drawInRect:](draw%28in_%29.md): Draws the entire image in the specified rectangle, scaling it as necessary to fit.
- [drawAsPatternInRect:](drawaspattern%28in_%29.md): Draws a tiled Quartz pattern using the receiver’s contents as the tile pattern.
