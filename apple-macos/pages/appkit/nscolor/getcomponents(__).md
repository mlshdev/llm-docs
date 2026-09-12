> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/getcomponents(_:)](https://developer.apple.com/documentation/appkit/nscolor/getcomponents(_:))

# getComponents(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the components of the color as an array.

## Declaration

```swift
func getComponents(_ components: UnsafeMutablePointer<CGFloat>)
```

## Parameters

- `components`: An array containing the components of the color object as `float` values.

<a id="Discussion"></a>

## Discussion

You can invoke this method on `NSColor` objects created from custom color spaces to get the individual floating-point components, including alpha. Raises an exception if the receiver doesn’t have floating-point components. To find out how many components are in the `components` array, use the [numberOfComponents](numberofcomponents.md) property.

## See Also

### Related Documentation

- [colorSpace](colorspace.md): The color space associated with the color.

### Retrieving component values from color objects

- [getCyan(\_:magenta:yellow:black:alpha:)](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getHue(\_:saturation:brightness:alpha:)](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getRed(\_:green:blue:alpha:)](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [getWhite(\_:alpha:)](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.
- [numberOfComponents](numberofcomponents.md): The number of components in the color.

# getComponents: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the components of the color as an array.

## Declaration

```objectivec
- (void) getComponents:(CGFloat *) components;
```

## Parameters

- `components`: An array containing the components of the color object as `float` values.

<a id="Discussion"></a>

## Discussion

You can invoke this method on `NSColor` objects created from custom color spaces to get the individual floating-point components, including alpha. Raises an exception if the receiver doesn’t have floating-point components. To find out how many components are in the `components` array, use the [numberOfComponents](numberofcomponents.md) property.

## See Also

### Related Documentation

- [colorSpace](colorspace.md): The color space associated with the color.

### Retrieving component values from color objects

- [getCyan:magenta:yellow:black:alpha:](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getHue:saturation:brightness:alpha:](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getRed:green:blue:alpha:](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [getWhite:alpha:](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.
- [numberOfComponents](numberofcomponents.md): The number of components in the color.
