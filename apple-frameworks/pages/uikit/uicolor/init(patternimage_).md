> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/init(patternimage:)](https://developer.apple.com/documentation/uikit/uicolor/init(patternimage:))

# init(patternImage:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a color object using the specified image object.

## Declaration

```swift
init(patternImage image: UIImage)
```

## Parameters

- `image`: The image to use when creating the pattern color.

<a id="return-value"></a>

## Return Value

The pattern color.

<a id="Discussion"></a>

## Discussion

You can use pattern colors to set the fill or stroke color just as you’d a solid color. During drawing, the image in the pattern color is tiled as necessary to cover the given area.

By default, the phase of the returned color is 0, which causes the top-left corner of the image to be aligned with the drawing origin. To change the phase, make the color the current color and then use the [setPatternPhase(\_:)](../../coregraphics/cgcontext/setpatternphase%28__%29.md) function to change the phase.

# initWithPatternImage: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a color object using the specified image object.

## Declaration

```objectivec
- (UIColor *) initWithPatternImage:(UIImage *) image;
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

### Related Documentation

- [colorWithPatternImage:](colorwithpatternimage_.md): Creates a color object using the specified image.

### Creating a pattern-based color

- [colorWithPatternImage:](colorwithpatternimage_.md): Creates a color object using the specified image.
