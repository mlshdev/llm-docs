> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setstrokecolor(_:)-1sskg](https://developer.apple.com/documentation/coregraphics/cgcontext/setstrokecolor(_:)-1sskg)

# setStrokeColor(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the current stroke color in a context, using a CGColor.

## Declaration

```swift
func setStrokeColor(_ color: CGColor)
```

## Parameters

- `color`: The new stroke color.

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
- [setStrokeColor(\_:)](setstrokecolor%28__%29-4pd8p.md): Sets the current stroke color.
- [setStrokeColor(cyan:magenta:yellow:black:alpha:)](setstrokecolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current stroke color to a value in the DeviceCMYK color space.
- [setStrokeColor(gray:alpha:)](setstrokecolor%28gray_alpha_%29.md): Sets the current stroke color to a value in the DeviceGray color space.
- [setStrokeColor(red:green:blue:alpha:)](setstrokecolor%28red_green_blue_alpha_%29.md): Sets the current stroke color to a value in the DeviceRGB color space.
- [setStrokeColorSpace(\_:)](setstrokecolorspace%28__%29.md): Sets the stroke color space in a graphics context.
- [setStrokePattern(\_:colorComponents:)](setstrokepattern%28__colorcomponents_%29.md): Sets the stroke pattern in the specified graphics context.
- [setAlpha(\_:)](setalpha%28__%29.md): Sets the opacity level for objects drawn in a graphics context.

# CGContextSetStrokeColorWithColor (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the current stroke color in a context, using a CGColor.

## Declaration

```objectivec
extern void CGContextSetStrokeColorWithColor(CGContextRef c, CGColorRef color);
```

## Parameters

- `c`: The graphics context to modify.
- `color`: The new stroke color.

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
- [CGContextSetStrokeColor](setstrokecolor%28__%29-4pd8p.md): Sets the current stroke color.
- [CGContextSetCMYKStrokeColor](setstrokecolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current stroke color to a value in the DeviceCMYK color space.
- [CGContextSetGrayStrokeColor](setstrokecolor%28gray_alpha_%29.md): Sets the current stroke color to a value in the DeviceGray color space.
- [CGContextSetRGBStrokeColor](setstrokecolor%28red_green_blue_alpha_%29.md): Sets the current stroke color to a value in the DeviceRGB color space.
- [CGContextSetStrokeColorSpace](setstrokecolorspace%28__%29.md): Sets the stroke color space in a graphics context.
- [CGContextSetStrokePattern](setstrokepattern%28__colorcomponents_%29.md): Sets the stroke pattern in the specified graphics context.
- [CGContextSetAlpha](setalpha%28__%29.md): Sets the opacity level for objects drawn in a graphics context.
