> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/numberofcomponents](https://developer.apple.com/documentation/appkit/nscolor/numberofcomponents)

# numberOfComponents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of components in the color.

## Declaration

```swift
var numberOfComponents: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects the number of floating-point component values in the color and includes the alpha component. If the color object does not have any floating-point component values, accessing this property raises an exception.

## See Also

### Related Documentation

- [colorSpace](colorspace.md): The color space associated with the color.

### Retrieving component values from color objects

- [getCyan(\_:magenta:yellow:black:alpha:)](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getHue(\_:saturation:brightness:alpha:)](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getRed(\_:green:blue:alpha:)](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [getWhite(\_:alpha:)](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.
- [getComponents(\_:)](getcomponents%28__%29.md): Returns the components of the color as an array.

# numberOfComponents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of components in the color.

## Declaration

```objectivec
@property (readonly) NSInteger numberOfComponents;
```

<a id="Discussion"></a>

## Discussion

This property reflects the number of floating-point component values in the color and includes the alpha component. If the color object does not have any floating-point component values, accessing this property raises an exception.

## See Also

### Related Documentation

- [colorSpace](colorspace.md): The color space associated with the color.

### Retrieving component values from color objects

- [getCyan:magenta:yellow:black:alpha:](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getHue:saturation:brightness:alpha:](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getRed:green:blue:alpha:](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [getWhite:alpha:](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.
- [getComponents:](getcomponents%28__%29.md): Returns the components of the color as an array.
