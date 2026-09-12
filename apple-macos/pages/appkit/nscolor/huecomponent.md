> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/huecomponent](https://developer.apple.com/documentation/appkit/nscolor/huecomponent)

# hueComponent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The hue component value of the color.

## Declaration

```swift
var hueComponent: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

Access this property only for colors in the [calibratedRGB](../nscolorspacename/calibratedrgb.md) or [deviceRGB](../nscolorspacename/devicergb.md) color spaces. RGB values are converted to HSB values as needed. Accessing it for other color types raises an exception.

## See Also

### Related Documentation

- [getHue(\_:saturation:brightness:alpha:)](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.

### Retrieving individual components

- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.
- [whiteComponent](whitecomponent.md): The white component value of the color.
- [redComponent](redcomponent.md): The red component value of the color.
- [greenComponent](greencomponent.md): The green component value of the color.
- [blueComponent](bluecomponent.md): The blue component value of the color.
- [cyanComponent](cyancomponent.md): The cyan component value of the color.
- [magentaComponent](magentacomponent.md): The magenta component value of the color.
- [yellowComponent](yellowcomponent.md): The yellow component value of the color.
- [blackComponent](blackcomponent.md): The black component value of the color.
- [saturationComponent](saturationcomponent.md): The saturation component value of the color.
- [brightnessComponent](brightnesscomponent.md): The brightness component value of the color.
- [catalogNameComponent](catalognamecomponent.md): The catalog containing the color’s name.
- [localizedCatalogNameComponent](localizedcatalognamecomponent.md): The localized version of the catalog name containing the color.
- [colorNameComponent](colornamecomponent.md): The name of the color.
- [localizedColorNameComponent](localizedcolornamecomponent.md): The localized version of the color name.

# hueComponent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The hue component value of the color.

## Declaration

```objectivec
@property (readonly) CGFloat hueComponent;
```

<a id="Discussion"></a>

## Discussion

Access this property only for colors in the [NSCalibratedRGBColorSpace](../nscolorspacename/calibratedrgb.md) or [NSDeviceRGBColorSpace](../nscolorspacename/devicergb.md) color spaces. RGB values are converted to HSB values as needed. Accessing it for other color types raises an exception.

## See Also

### Related Documentation

- [getHue:saturation:brightness:alpha:](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.

### Retrieving individual components

- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.
- [whiteComponent](whitecomponent.md): The white component value of the color.
- [redComponent](redcomponent.md): The red component value of the color.
- [greenComponent](greencomponent.md): The green component value of the color.
- [blueComponent](bluecomponent.md): The blue component value of the color.
- [cyanComponent](cyancomponent.md): The cyan component value of the color.
- [magentaComponent](magentacomponent.md): The magenta component value of the color.
- [yellowComponent](yellowcomponent.md): The yellow component value of the color.
- [blackComponent](blackcomponent.md): The black component value of the color.
- [saturationComponent](saturationcomponent.md): The saturation component value of the color.
- [brightnessComponent](brightnesscomponent.md): The brightness component value of the color.
- [catalogNameComponent](catalognamecomponent.md): The catalog containing the color’s name.
- [localizedCatalogNameComponent](localizedcatalognamecomponent.md): The localized version of the catalog name containing the color.
- [colorNameComponent](colornamecomponent.md): The name of the color.
- [localizedColorNameComponent](localizedcolornamecomponent.md): The localized version of the color name.
