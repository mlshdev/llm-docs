> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/getwhite(_:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/getwhite(_:alpha:))

# getWhite(\_:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the grayscale and alpha values of the color.

## Declaration

```swift
func getWhite(_ white: UnsafeMutablePointer<CGFloat>?, alpha: UnsafeMutablePointer<CGFloat>?)
```

## Parameters

- `white`: Upon return, contains the grayscale value of the color object.
- `alpha`: Upon return, contains the opacity value of the color object.

<a id="Discussion"></a>

## Discussion

If `NULL` is passed in as an argument, the method doesn’t set that value. This method works only with objects representing colors in the [calibratedWhite](../nscolorspacename/calibratedwhite.md), [NSCalibratedBlackColorSpace](../nscalibratedblackcolorspace.md), [NSDeviceBlackColorSpace](../nsdeviceblackcolorspace.md), or [deviceWhite](../nscolorspacename/devicewhite.md) color space. Sending it to other objects raises an exception.

## See Also

### Related Documentation

- [NSColor](../nscolor.md): An object that stores color data and sometimes opacity (alpha value).

### Retrieving component values from color objects

- [getCyan(\_:magenta:yellow:black:alpha:)](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getHue(\_:saturation:brightness:alpha:)](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getRed(\_:green:blue:alpha:)](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [numberOfComponents](numberofcomponents.md): The number of components in the color.
- [getComponents(\_:)](getcomponents%28__%29.md): Returns the components of the color as an array.

# getWhite:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the grayscale and alpha values of the color.

## Declaration

```objectivec
- (void) getWhite:(CGFloat *) white alpha:(CGFloat *) alpha;
```

## Parameters

- `white`: Upon return, contains the grayscale value of the color object.
- `alpha`: Upon return, contains the opacity value of the color object.

<a id="Discussion"></a>

## Discussion

If `NULL` is passed in as an argument, the method doesn’t set that value. This method works only with objects representing colors in the [NSCalibratedWhiteColorSpace](../nscolorspacename/calibratedwhite.md), [NSCalibratedBlackColorSpace](../nscalibratedblackcolorspace.md), [NSDeviceBlackColorSpace](../nsdeviceblackcolorspace.md), or [NSDeviceWhiteColorSpace](../nscolorspacename/devicewhite.md) color space. Sending it to other objects raises an exception.

## See Also

### Related Documentation

- [NSColor](../nscolor.md): An object that stores color data and sometimes opacity (alpha value).

### Retrieving component values from color objects

- [getCyan:magenta:yellow:black:alpha:](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getHue:saturation:brightness:alpha:](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getRed:green:blue:alpha:](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [numberOfComponents](numberofcomponents.md): The number of components in the color.
- [getComponents:](getcomponents%28__%29.md): Returns the components of the color as an array.
