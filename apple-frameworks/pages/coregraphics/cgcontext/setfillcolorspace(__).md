> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setfillcolorspace(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/setfillcolorspace(_:))

# setFillColorSpace(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the fill color space in a graphics context.

## Declaration

```swift
func setFillColorSpace(_ space: CGColorSpace)
```

## Parameters

- `space`: The new fill color space. The color space is retained; upon return, you may safely release it.

<a id="Discussion"></a>

## Discussion

As a side effect of this function, Core Graphics assigns an appropriate initial value to the fill color, based on the specified color space. To change this value, call [setFillColor(\_:)](setfillcolor%28__%29-756dy.md). Note that the preferred API to use is now [setFillColor(\_:)](setfillcolor%28__%29-8lhn8.md).

## See Also

### Setting Fill, Stroke, and Shadow Colors

- [setFillColor(\_:)](setfillcolor%28__%29-8lhn8.md): Sets the current fill color in a graphics context, using a CGColor.
- [setFillColor(\_:)](setfillcolor%28__%29-756dy.md): Sets the current fill color.
- [setFillColor(cyan:magenta:yellow:black:alpha:)](setfillcolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current fill color to a value in the DeviceCMYK color space.
- [setFillColor(gray:alpha:)](setfillcolor%28gray_alpha_%29.md): Sets the current fill color to a value in the DeviceGray color space.
- [setFillColor(red:green:blue:alpha:)](setfillcolor%28red_green_blue_alpha_%29.md): Sets the current fill color to a value in the DeviceRGB color space.
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

# CGContextSetFillColorSpace (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the fill color space in a graphics context.

## Declaration

```objectivec
extern void CGContextSetFillColorSpace(CGContextRef c, CGColorSpaceRef space);
```

## Parameters

- `c`: The graphics context for which to set the fill color space.
- `space`: The new fill color space. The color space is retained; upon return, you may safely release it.

<a id="Discussion"></a>

## Discussion

As a side effect of this function, Core Graphics assigns an appropriate initial value to the fill color, based on the specified color space. To change this value, call [CGContextSetFillColor](setfillcolor%28__%29-756dy.md). Note that the preferred API to use is now [CGContextSetFillColorWithColor](setfillcolor%28__%29-8lhn8.md).

## See Also

### Setting Fill, Stroke, and Shadow Colors

- [CGContextSetFillColorWithColor](setfillcolor%28__%29-8lhn8.md): Sets the current fill color in a graphics context, using a CGColor.
- [CGContextSetFillColor](setfillcolor%28__%29-756dy.md): Sets the current fill color.
- [CGContextSetCMYKFillColor](setfillcolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current fill color to a value in the DeviceCMYK color space.
- [CGContextSetGrayFillColor](setfillcolor%28gray_alpha_%29.md): Sets the current fill color to a value in the DeviceGray color space.
- [CGContextSetRGBFillColor](setfillcolor%28red_green_blue_alpha_%29.md): Sets the current fill color to a value in the DeviceRGB color space.
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
