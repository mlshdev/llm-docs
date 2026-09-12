> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setstrokepattern(_:colorcomponents:)](https://developer.apple.com/documentation/coregraphics/cgcontext/setstrokepattern(_:colorcomponents:))

# setStrokePattern(\_:colorComponents:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the stroke pattern in the specified graphics context.

## Declaration

```swift
func setStrokePattern(_ pattern: CGPattern, colorComponents components: UnsafePointer<CGFloat>)
```

## Parameters

- `pattern`: A pattern for stroking. In Objective-C, the object is retained; upon return, you may safely release it.
- `components`: If the specified pattern is an uncolored (or masking) pattern, pass an array of intensity values that specify the color to use when the pattern is painted. The number of array elements must equal the number of components in the base space of the stroke pattern color space, plus an additional component for the alpha value.

  If the specified pattern is a color pattern, pass an alpha value.

<a id="Discussion"></a>

## Discussion

The current stroke color space must be a pattern color space. Otherwise, the result of calling this function is undefined. If you want to set a stroke color, not a stroke pattern, use [setStrokeColor(\_:)](setstrokecolor%28__%29-1sskg.md).

## See Also

### Setting Fill, Stroke, and Shadow Colors

- [setFillColor(\_:)](setfillcolor%28__%29-8lhn8.md): Sets the current fill color in a graphics context, using a CGColor.
- [setFillColor(\_:)](setfillcolor%28__%29-756dy.md): Sets the current fill color.
- [setFillColor(cyan:magenta:yellow:black:alpha:)](setfillcolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current fill color to a value in the DeviceCMYK color space.
- [setFillColor(gray:alpha:)](setfillcolor%28gray_alpha_%29.md): Sets the current fill color to a value in the DeviceGray color space.
- [setFillColor(red:green:blue:alpha:)](setfillcolor%28red_green_blue_alpha_%29.md): Sets the current fill color to a value in the DeviceRGB color space.
- [setFillColorSpace(\_:)](setfillcolorspace%28__%29.md): Sets the fill color space in a graphics context.
- [setShadow(offset:blur:)](setshadow%28offset_blur_%29.md): Enables shadowing in a graphics context.
- [setShadow(offset:blur:color:)](setshadow%28offset_blur_color_%29.md): Enables shadowing with color a graphics context.
- [setStrokeColor(\_:)](setstrokecolor%28__%29-1sskg.md): Sets the current stroke color in a context, using a CGColor.
- [setStrokeColor(\_:)](setstrokecolor%28__%29-4pd8p.md): Sets the current stroke color.
- [setStrokeColor(cyan:magenta:yellow:black:alpha:)](setstrokecolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current stroke color to a value in the DeviceCMYK color space.
- [setStrokeColor(gray:alpha:)](setstrokecolor%28gray_alpha_%29.md): Sets the current stroke color to a value in the DeviceGray color space.
- [setStrokeColor(red:green:blue:alpha:)](setstrokecolor%28red_green_blue_alpha_%29.md): Sets the current stroke color to a value in the DeviceRGB color space.
- [setStrokeColorSpace(\_:)](setstrokecolorspace%28__%29.md): Sets the stroke color space in a graphics context.
- [setAlpha(\_:)](setalpha%28__%29.md): Sets the opacity level for objects drawn in a graphics context.

# CGContextSetStrokePattern (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the stroke pattern in the specified graphics context.

## Declaration

```objectivec
extern void CGContextSetStrokePattern(CGContextRef c, CGPatternRef pattern, const CGFloat *components);
```

## Parameters

- `c`: The graphics context to modify.
- `pattern`: A pattern for stroking. In Objective-C, the object is retained; upon return, you may safely release it.
- `components`: If the specified pattern is an uncolored (or masking) pattern, pass an array of intensity values that specify the color to use when the pattern is painted. The number of array elements must equal the number of components in the base space of the stroke pattern color space, plus an additional component for the alpha value.

  If the specified pattern is a color pattern, pass an alpha value.

<a id="Discussion"></a>

## Discussion

The current stroke color space must be a pattern color space. Otherwise, the result of calling this function is undefined. If you want to set a stroke color, not a stroke pattern, use [CGContextSetStrokeColorWithColor](setstrokecolor%28__%29-1sskg.md).

## See Also

### Setting Fill, Stroke, and Shadow Colors

- [CGContextSetFillColorWithColor](setfillcolor%28__%29-8lhn8.md): Sets the current fill color in a graphics context, using a CGColor.
- [CGContextSetFillColor](setfillcolor%28__%29-756dy.md): Sets the current fill color.
- [CGContextSetCMYKFillColor](setfillcolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current fill color to a value in the DeviceCMYK color space.
- [CGContextSetGrayFillColor](setfillcolor%28gray_alpha_%29.md): Sets the current fill color to a value in the DeviceGray color space.
- [CGContextSetRGBFillColor](setfillcolor%28red_green_blue_alpha_%29.md): Sets the current fill color to a value in the DeviceRGB color space.
- [CGContextSetFillColorSpace](setfillcolorspace%28__%29.md): Sets the fill color space in a graphics context.
- [CGContextSetShadow](setshadow%28offset_blur_%29.md): Enables shadowing in a graphics context.
- [CGContextSetShadowWithColor](setshadow%28offset_blur_color_%29.md): Enables shadowing with color a graphics context.
- [CGContextSetStrokeColorWithColor](setstrokecolor%28__%29-1sskg.md): Sets the current stroke color in a context, using a CGColor.
- [CGContextSetStrokeColor](setstrokecolor%28__%29-4pd8p.md): Sets the current stroke color.
- [CGContextSetCMYKStrokeColor](setstrokecolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current stroke color to a value in the DeviceCMYK color space.
- [CGContextSetGrayStrokeColor](setstrokecolor%28gray_alpha_%29.md): Sets the current stroke color to a value in the DeviceGray color space.
- [CGContextSetRGBStrokeColor](setstrokecolor%28red_green_blue_alpha_%29.md): Sets the current stroke color to a value in the DeviceRGB color space.
- [CGContextSetStrokeColorSpace](setstrokecolorspace%28__%29.md): Sets the stroke color space in a graphics context.
- [CGContextSetAlpha](setalpha%28__%29.md): Sets the opacity level for objects drawn in a graphics context.
