> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/colorwithpatternimage:](https://developer.apple.com/documentation/uikit/uicolor/colorwithpatternimage:)

# colorWithPatternImage:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a color object using the specified image.

## Declaration

```objectivec
+ (UIColor *) colorWithPatternImage:(UIImage *) image;
```

## Parameters

- `image`: The image to use when creating the pattern color.

<a id="return-value"></a>

## Return Value

The pattern color.

<a id="Discussion"></a>

## Discussion

You can use pattern colors to set the fill or stroke color just as you’d a solid color. During drawing, the image in the pattern color is tiled as necessary to cover the given area.

By default, the phase of the returned color is 0, which causes the top-left corner of the image to be aligned with the drawing origin. To change the phase, make the color the current color and then use the [CGContextSetPatternPhase](../../coregraphics/cgcontext/setpatternphase%28__%29.md) function to change the phase.

## See Also

### Creating a pattern-based color

- [initWithPatternImage:](init%28patternimage_%29.md): Creates a color object using the specified image object.
