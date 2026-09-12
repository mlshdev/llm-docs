> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/getcyan(_:magenta:yellow:black:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/getcyan(_:magenta:yellow:black:alpha:))

# getCyan(\_:magenta:yellow:black:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the color object’s CMYK and opacity values.

## Declaration

```swift
func getCyan(_ cyan: UnsafeMutablePointer<CGFloat>?, magenta: UnsafeMutablePointer<CGFloat>?, yellow: UnsafeMutablePointer<CGFloat>?, black: UnsafeMutablePointer<CGFloat>?, alpha: UnsafeMutablePointer<CGFloat>?)
```

## Parameters

- `cyan`: Upon return, contains the cyan component of the color object.
- `magenta`: Upon return, contains the magenta component of the color object.
- `yellow`: Upon return, contains the yellow component of the color object.
- `black`: Upon return, contains the black component of the color object.
- `alpha`: Upon return, contains opacity value of the color object.

<a id="Discussion"></a>

## Discussion

If `NULL` is passed in as an argument, the method doesn’t set that value. This method works only with objects representing colors in the [deviceCMYK](../nscolorspacename/devicecmyk.md). Sending it to other objects raises an exception.

## See Also

### Related Documentation

- [blackComponent](blackcomponent.md): The black component value of the color.
- [cyanComponent](cyancomponent.md): The cyan component value of the color.
- [yellowComponent](yellowcomponent.md): The yellow component value of the color.
- [magentaComponent](magentacomponent.md): The magenta component value of the color.
- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.

### Retrieving component values from color objects

- [getHue(\_:saturation:brightness:alpha:)](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getRed(\_:green:blue:alpha:)](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [getWhite(\_:alpha:)](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.
- [numberOfComponents](numberofcomponents.md): The number of components in the color.
- [getComponents(\_:)](getcomponents%28__%29.md): Returns the components of the color as an array.

# getCyan:magenta:yellow:black:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the color object’s CMYK and opacity values.

## Declaration

```objectivec
- (void) getCyan:(CGFloat *) cyan magenta:(CGFloat *) magenta yellow:(CGFloat *) yellow black:(CGFloat *) black alpha:(CGFloat *) alpha;
```

## Parameters

- `cyan`: Upon return, contains the cyan component of the color object.
- `magenta`: Upon return, contains the magenta component of the color object.
- `yellow`: Upon return, contains the yellow component of the color object.
- `black`: Upon return, contains the black component of the color object.
- `alpha`: Upon return, contains opacity value of the color object.

<a id="Discussion"></a>

## Discussion

If `NULL` is passed in as an argument, the method doesn’t set that value. This method works only with objects representing colors in the [NSDeviceCMYKColorSpace](../nscolorspacename/devicecmyk.md). Sending it to other objects raises an exception.

## See Also

### Related Documentation

- [blackComponent](blackcomponent.md): The black component value of the color.
- [cyanComponent](cyancomponent.md): The cyan component value of the color.
- [yellowComponent](yellowcomponent.md): The yellow component value of the color.
- [magentaComponent](magentacomponent.md): The magenta component value of the color.
- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.

### Retrieving component values from color objects

- [getHue:saturation:brightness:alpha:](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getRed:green:blue:alpha:](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [getWhite:alpha:](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.
- [numberOfComponents](numberofcomponents.md): The number of components in the color.
- [getComponents:](getcomponents%28__%29.md): Returns the components of the color as an array.
