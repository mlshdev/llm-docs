> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/alphacomponent](https://developer.apple.com/documentation/appkit/nscolor/alphacomponent)

# alphaComponent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The alpha (opacity) component value of the color.

## Declaration

```swift
var alphaComponent: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is between `0.0` and `1.0`, where `0.0` represents fully transparent and `1.0` represents fully opaque. If the color has no alpha component, the value of this property is `1.0`.

## See Also

### Related Documentation

- [getRed(\_:green:blue:alpha:)](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [getHue(\_:saturation:brightness:alpha:)](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getCyan(\_:magenta:yellow:black:alpha:)](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getWhite(\_:alpha:)](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.

### Retrieving individual components

- [whiteComponent](whitecomponent.md): The white component value of the color.
- [redComponent](redcomponent.md): The red component value of the color.
- [greenComponent](greencomponent.md): The green component value of the color.
- [blueComponent](bluecomponent.md): The blue component value of the color.
- [cyanComponent](cyancomponent.md): The cyan component value of the color.
- [magentaComponent](magentacomponent.md): The magenta component value of the color.
- [yellowComponent](yellowcomponent.md): The yellow component value of the color.
- [blackComponent](blackcomponent.md): The black component value of the color.
- [hueComponent](huecomponent.md): The hue component value of the color.
- [saturationComponent](saturationcomponent.md): The saturation component value of the color.
- [brightnessComponent](brightnesscomponent.md): The brightness component value of the color.
- [catalogNameComponent](catalognamecomponent.md): The catalog containing the color’s name.
- [localizedCatalogNameComponent](localizedcatalognamecomponent.md): The localized version of the catalog name containing the color.
- [colorNameComponent](colornamecomponent.md): The name of the color.
- [localizedColorNameComponent](localizedcolornamecomponent.md): The localized version of the color name.

# alphaComponent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The alpha (opacity) component value of the color.

## Declaration

```objectivec
@property (readonly) CGFloat alphaComponent;
```

<a id="Discussion"></a>

## Discussion

The value of this property is between `0.0` and `1.0`, where `0.0` represents fully transparent and `1.0` represents fully opaque. If the color has no alpha component, the value of this property is `1.0`.

## See Also

### Related Documentation

- [getRed:green:blue:alpha:](getred%28__green_blue_alpha_%29.md): Returns the color object’s RGB component and opacity values in the respective arguments.
- [getHue:saturation:brightness:alpha:](gethue%28__saturation_brightness_alpha_%29.md): Returns the color object’s HSB component and opacity values in the respective arguments.
- [getCyan:magenta:yellow:black:alpha:](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
- [getWhite:alpha:](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.

### Retrieving individual components

- [whiteComponent](whitecomponent.md): The white component value of the color.
- [redComponent](redcomponent.md): The red component value of the color.
- [greenComponent](greencomponent.md): The green component value of the color.
- [blueComponent](bluecomponent.md): The blue component value of the color.
- [cyanComponent](cyancomponent.md): The cyan component value of the color.
- [magentaComponent](magentacomponent.md): The magenta component value of the color.
- [yellowComponent](yellowcomponent.md): The yellow component value of the color.
- [blackComponent](blackcomponent.md): The black component value of the color.
- [hueComponent](huecomponent.md): The hue component value of the color.
- [saturationComponent](saturationcomponent.md): The saturation component value of the color.
- [brightnessComponent](brightnesscomponent.md): The brightness component value of the color.
- [catalogNameComponent](catalognamecomponent.md): The catalog containing the color’s name.
- [localizedCatalogNameComponent](localizedcatalognamecomponent.md): The localized version of the catalog name containing the color.
- [colorNameComponent](colornamecomponent.md): The name of the color.
- [localizedColorNameComponent](localizedcolornamecomponent.md): The localized version of the color name.
