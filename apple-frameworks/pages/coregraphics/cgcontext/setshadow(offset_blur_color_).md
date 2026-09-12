> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setshadow(offset:blur:color:)](https://developer.apple.com/documentation/coregraphics/cgcontext/setshadow(offset:blur:color:))

# setShadow(offset:blur:color:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Enables shadowing with color a graphics context.

## Declaration

```swift
func setShadow(offset: CGSize, blur: CGFloat, color: CGColor?)
```

## Parameters

- `offset`: Specifies a translation in base-space.
- `blur`: A non-negative number specifying the amount of blur.
- `color`: Specifies the color of the shadow, which may contain a non-opaque alpha value. If `NULL`, then shadowing is disabled.

## See Also

### Setting Fill, Stroke, and Shadow Colors

- [setFillColor(\_:)](setfillcolor%28__%29-8lhn8.md): Sets the current fill color in a graphics context, using a CGColor.
- [setFillColor(\_:)](setfillcolor%28__%29-756dy.md): Sets the current fill color.
- [setFillColor(cyan:magenta:yellow:black:alpha:)](setfillcolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current fill color to a value in the DeviceCMYK color space.
- [setFillColor(gray:alpha:)](setfillcolor%28gray_alpha_%29.md): Sets the current fill color to a value in the DeviceGray color space.
- [setFillColor(red:green:blue:alpha:)](setfillcolor%28red_green_blue_alpha_%29.md): Sets the current fill color to a value in the DeviceRGB color space.
- [setFillColorSpace(\_:)](setfillcolorspace%28__%29.md): Sets the fill color space in a graphics context.
- [setShadow(offset:blur:)](setshadow%28offset_blur_%29.md): Enables shadowing in a graphics context.
- [setStrokeColor(\_:)](setstrokecolor%28__%29-1sskg.md): Sets the current stroke color in a context, using a CGColor.
- [setStrokeColor(\_:)](setstrokecolor%28__%29-4pd8p.md): Sets the current stroke color.
- [setStrokeColor(cyan:magenta:yellow:black:alpha:)](setstrokecolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current stroke color to a value in the DeviceCMYK color space.
- [setStrokeColor(gray:alpha:)](setstrokecolor%28gray_alpha_%29.md): Sets the current stroke color to a value in the DeviceGray color space.
- [setStrokeColor(red:green:blue:alpha:)](setstrokecolor%28red_green_blue_alpha_%29.md): Sets the current stroke color to a value in the DeviceRGB color space.
- [setStrokeColorSpace(\_:)](setstrokecolorspace%28__%29.md): Sets the stroke color space in a graphics context.
- [setStrokePattern(\_:colorComponents:)](setstrokepattern%28__colorcomponents_%29.md): Sets the stroke pattern in the specified graphics context.
- [setAlpha(\_:)](setalpha%28__%29.md): Sets the opacity level for objects drawn in a graphics context.

# CGContextSetShadowWithColor (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Enables shadowing with color a graphics context.

## Declaration

```objectivec
extern void CGContextSetShadowWithColor(CGContextRef c, CGSize offset, CGFloat blur, CGColorRef color);
```

## Parameters

- `c`: The graphics context to modify.
- `offset`: Specifies a translation in base-space.
- `blur`: A non-negative number specifying the amount of blur.
- `color`: Specifies the color of the shadow, which may contain a non-opaque alpha value. If `NULL`, then shadowing is disabled.

## See Also

### Setting Fill, Stroke, and Shadow Colors

- [CGContextSetFillColorWithColor](setfillcolor%28__%29-8lhn8.md): Sets the current fill color in a graphics context, using a CGColor.
- [CGContextSetFillColor](setfillcolor%28__%29-756dy.md): Sets the current fill color.
- [CGContextSetCMYKFillColor](setfillcolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current fill color to a value in the DeviceCMYK color space.
- [CGContextSetGrayFillColor](setfillcolor%28gray_alpha_%29.md): Sets the current fill color to a value in the DeviceGray color space.
- [CGContextSetRGBFillColor](setfillcolor%28red_green_blue_alpha_%29.md): Sets the current fill color to a value in the DeviceRGB color space.
- [CGContextSetFillColorSpace](setfillcolorspace%28__%29.md): Sets the fill color space in a graphics context.
- [CGContextSetShadow](setshadow%28offset_blur_%29.md): Enables shadowing in a graphics context.
- [CGContextSetStrokeColorWithColor](setstrokecolor%28__%29-1sskg.md): Sets the current stroke color in a context, using a CGColor.
- [CGContextSetStrokeColor](setstrokecolor%28__%29-4pd8p.md): Sets the current stroke color.
- [CGContextSetCMYKStrokeColor](setstrokecolor%28cyan_magenta_yellow_black_alpha_%29.md): Sets the current stroke color to a value in the DeviceCMYK color space.
- [CGContextSetGrayStrokeColor](setstrokecolor%28gray_alpha_%29.md): Sets the current stroke color to a value in the DeviceGray color space.
- [CGContextSetRGBStrokeColor](setstrokecolor%28red_green_blue_alpha_%29.md): Sets the current stroke color to a value in the DeviceRGB color space.
- [CGContextSetStrokeColorSpace](setstrokecolorspace%28__%29.md): Sets the stroke color space in a graphics context.
- [CGContextSetStrokePattern](setstrokepattern%28__colorcomponents_%29.md): Sets the stroke pattern in the specified graphics context.
- [CGContextSetAlpha](setalpha%28__%29.md): Sets the opacity level for objects drawn in a graphics context.
