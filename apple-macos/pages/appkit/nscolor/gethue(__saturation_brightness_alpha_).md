> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/gethue(_:saturation:brightness:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/gethue(_:saturation:brightness:alpha:))

# getHue(\_:saturation:brightness:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the color object’s HSB component and opacity values in the respective arguments.

## Declaration

```swift
func getHue(_ hue: UnsafeMutablePointer<CGFloat>?, saturation: UnsafeMutablePointer<CGFloat>?, brightness: UnsafeMutablePointer<CGFloat>?, alpha: UnsafeMutablePointer<CGFloat>?)
```

## Parameters

- `hue`: Upon return, contains the hue component of the color object.
- `saturation`: Upon return, contains the saturation component of the color object.
- `brightness`: Upon return, contains the brightness component of the color object.
- `alpha`: Upon return, contains the opacity value of the color object.

<a id="Discussion"></a>

## Discussion

If `NULL` is passed in as an argument, the method doesn’t set that value. This method works only with objects representing colors in the [calibratedRGB](../nscolorspacename/calibratedrgb.md) or [deviceRGB](../nscolorspacename/devicergb.md) color space. Sending it to other objects raises an exception.

## See Also

### Related Documentation

- [brightnessComponent](brightnesscomponent.md): The brightness component value of the color.
- [hueComponent](huecomponent.md): The hue component value of the color.
- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.
- [saturationComponent](saturationcomponent.md): The saturation component value of the color.

### Retrieving component values from color objects

- [getCyan(\_:magenta:yellow:black:alpha:)](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getRed(\_:green:blue:alpha:)](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [getWhite(\_:alpha:)](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.
- [numberOfComponents](numberofcomponents.md): The number of components in the color.
- [getComponents(\_:)](getcomponents%28__%29.md): Returns the components of the color as an array.

# getHue:saturation:brightness:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the color object’s HSB component and opacity values in the respective arguments.

## Declaration

```objectivec
- (void) getHue:(CGFloat *) hue saturation:(CGFloat *) saturation brightness:(CGFloat *) brightness alpha:(CGFloat *) alpha;
```

## Parameters

- `hue`: Upon return, contains the hue component of the color object.
- `saturation`: Upon return, contains the saturation component of the color object.
- `brightness`: Upon return, contains the brightness component of the color object.
- `alpha`: Upon return, contains the opacity value of the color object.

<a id="Discussion"></a>

## Discussion

If `NULL` is passed in as an argument, the method doesn’t set that value. This method works only with objects representing colors in the [NSCalibratedRGBColorSpace](../nscolorspacename/calibratedrgb.md) or [NSDeviceRGBColorSpace](../nscolorspacename/devicergb.md) color space. Sending it to other objects raises an exception.

## See Also

### Related Documentation

- [brightnessComponent](brightnesscomponent.md): The brightness component value of the color.
- [hueComponent](huecomponent.md): The hue component value of the color.
- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.
- [saturationComponent](saturationcomponent.md): The saturation component value of the color.

### Retrieving component values from color objects

- [getCyan:magenta:yellow:black:alpha:](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getRed:green:blue:alpha:](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [getWhite:alpha:](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.
- [numberOfComponents](numberofcomponents.md): The number of components in the color.
- [getComponents:](getcomponents%28__%29.md): Returns the components of the color as an array.
