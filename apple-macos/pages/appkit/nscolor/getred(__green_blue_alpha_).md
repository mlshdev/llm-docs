> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/getred(_:green:blue:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/getred(_:green:blue:alpha:))

# getRed(\_:green:blue:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the color object’s RGB component and opacity values in the respective arguments.

## Declaration

```swift
func getRed(_ red: UnsafeMutablePointer<CGFloat>?, green: UnsafeMutablePointer<CGFloat>?, blue: UnsafeMutablePointer<CGFloat>?, alpha: UnsafeMutablePointer<CGFloat>?)
```

## Parameters

- `red`: Upon return, contains the red component of the color object.
- `green`: Upon return, contains the green component of the color object.
- `blue`: Upon return, contains the blue component of the color object.
- `alpha`: Upon return, contains the opacity value of the color object.

<a id="Discussion"></a>

## Discussion

If `NULL` is passed in as an argument, the method doesn’t set that value. This method works only with objects representing colors in the [calibratedRGB](../nscolorspacename/calibratedrgb.md) or [deviceRGB](../nscolorspacename/devicergb.md) color space. Sending it to other objects raises an exception.

## See Also

### Related Documentation

- [blueComponent](bluecomponent.md): The blue component value of the color.
- [redComponent](redcomponent.md): The red component value of the color.
- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.
- [greenComponent](greencomponent.md): The green component value of the color.

### Retrieving component values from color objects

- [getCyan(\_:magenta:yellow:black:alpha:)](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getHue(\_:saturation:brightness:alpha:)](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getWhite(\_:alpha:)](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.
- [numberOfComponents](numberofcomponents.md): The number of components in the color.
- [getComponents(\_:)](getcomponents%28__%29.md): Returns the components of the color as an array.

# getRed:green:blue:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the color object’s RGB component and opacity values in the respective arguments.

## Declaration

```objectivec
- (void) getRed:(CGFloat *) red green:(CGFloat *) green blue:(CGFloat *) blue alpha:(CGFloat *) alpha;
```

## Parameters

- `red`: Upon return, contains the red component of the color object.
- `green`: Upon return, contains the green component of the color object.
- `blue`: Upon return, contains the blue component of the color object.
- `alpha`: Upon return, contains the opacity value of the color object.

<a id="Discussion"></a>

## Discussion

If `NULL` is passed in as an argument, the method doesn’t set that value. This method works only with objects representing colors in the [NSCalibratedRGBColorSpace](../nscolorspacename/calibratedrgb.md) or [NSDeviceRGBColorSpace](../nscolorspacename/devicergb.md) color space. Sending it to other objects raises an exception.

## See Also

### Related Documentation

- [blueComponent](bluecomponent.md): The blue component value of the color.
- [redComponent](redcomponent.md): The red component value of the color.
- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.
- [greenComponent](greencomponent.md): The green component value of the color.

### Retrieving component values from color objects

- [getCyan:magenta:yellow:black:alpha:](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getHue:saturation:brightness:alpha:](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getWhite:alpha:](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.
- [numberOfComponents](numberofcomponents.md): The number of components in the color.
- [getComponents:](getcomponents%28__%29.md): Returns the components of the color as an array.
