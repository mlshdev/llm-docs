> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setfillcolor(cyan:magenta:yellow:black:alpha:)](https://developer.apple.com/documentation/coregraphics/cgcontext/setfillcolor(cyan:magenta:yellow:black:alpha:))

# setFillColor(cyan:magenta:yellow:black:alpha:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the current fill color to a value in the DeviceCMYK color space.

## Declaration

```swift
func setFillColor(cyan: CGFloat, magenta: CGFloat, yellow: CGFloat, black: CGFloat, alpha: CGFloat)
```

## Parameters

- `cyan`: The cyan intensity value for the color to set. The DeviceCMYK color space permits the specification of a value ranging from 0.0 (does not absorb the secondary color) to 1.0 (fully absorbs the secondary color).
- `magenta`: The magenta intensity value for the color to set. The DeviceCMYK color space permits the specification of a value ranging from 0.0 (does not absorb the secondary color) to 1.0 (fully absorbs the secondary color).
- `yellow`: The yellow intensity value for the color to set. The DeviceCMYK color space permits the specification of a value ranging from 0.0 (does not absorb the secondary color) to 1.0 (fully absorbs the secondary color).
- `black`: The black intensity value for the color to set. The DeviceCMYK color space permits the specification of a value ranging from 0.0 (does not absorb the secondary color) to 1.0 (fully absorbs the secondary color).
- `alpha`: A value that specifies the opacity level. Values can range from `0.0` (transparent) to `1.0` (opaque). Values outside this range are clipped to `0.0` or `1.0`.

<a id="Discussion"></a>

## Discussion

Core Graphics provides convenience functions for each of the device color spaces that allow you to set the fill or stroke color space and the fill or stroke color with one function call.

When you call this function, two things happen:

- Core Graphics sets the current fill color space to DeviceCMYK.
- Core Graphics sets the current fill color to the value specified by the `cyan`, `magenta`, `yellow`, `black`, and `alpha` parameters.

## See Also

### Setting Fill, Stroke, and Shadow Colors

- [setFillColor(\_:)](setfillcolor%28__%29-8lhn8.md): Sets the current fill color in a graphics context, using a CGColor.
- [setFillColor(\_:)](setfillcolor%28__%29-756dy.md): Sets the current fill color.
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
- [setStrokePattern(\_:colorComponents:)](setstrokepattern%28__colorcomponents_%29.md): Sets the stroke pattern in the specified graphics context.
- [setAlpha(\_:)](setalpha%28__%29.md): Sets the opacity level for objects drawn in a graphics context.

# CGContextSetCMYKFillColor (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the current fill color to a value in the DeviceCMYK color space.

## Declaration

```objectivec
extern void CGContextSetCMYKFillColor(CGContextRef c, CGFloat cyan, CGFloat magenta, CGFloat yellow, CGFloat black, CGFloat alpha);
```

## Parameters

- `c`: The graphics context for which to set the current fill color.
- `cyan`: The cyan intensity value for the color to set. The DeviceCMYK color space permits the specification of a value ranging from 0.0 (does not absorb the secondary color) to 1.0 (fully absorbs the secondary color).
- `magenta`: The magenta intensity value for the color to set. The DeviceCMYK color space permits the specification of a value ranging from 0.0 (does not absorb the secondary color) to 1.0 (fully absorbs the secondary color).
- `yellow`: The yellow intensity value for the color to set. The DeviceCMYK color space permits the specification of a value ranging from 0.0 (does not absorb the secondary color) to 1.0 (fully absorbs the secondary color).
- `black`: The black intensity value for the color to set. The DeviceCMYK color space permits the specification of a value ranging from 0.0 (does not absorb the secondary color) to 1.0 (fully absorbs the secondary color).
- `alpha`: A value that specifies the opacity level. Values can range from `0.0` (transparent) to `1.0` (opaque). Values outside this range are clipped to `0.0` or `1.0`.

<a id="Discussion"></a>

## Discussion

Core Graphics provides convenience functions for each of the device color spaces that allow you to set the fill or stroke color space and the fill or stroke color with one function call.

When you call this function, two things happen:

- Core Graphics sets the current fill color space to DeviceCMYK.
- Core Graphics sets the current fill color to the value specified by the `cyan`, `magenta`, `yellow`, `black`, and `alpha` parameters.

## See Also

### Setting Fill, Stroke, and Shadow Colors

- [CGContextSetFillColorWithColor](setfillcolor%28__%29-8lhn8.md): Sets the current fill color in a graphics context, using a CGColor.
- [CGContextSetFillColor](setfillcolor%28__%29-756dy.md): Sets the current fill color.
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
- [CGContextSetStrokePattern](setstrokepattern%28__colorcomponents_%29.md): Sets the stroke pattern in the specified graphics context.
- [CGContextSetAlpha](setalpha%28__%29.md): Sets the opacity level for objects drawn in a graphics context.
