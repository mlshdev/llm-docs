> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/whitecomponent](https://developer.apple.com/documentation/appkit/nscolor/whitecomponent)

# whiteComponent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The white component value of the color.

## Declaration

```swift
var whiteComponent: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

Access this property only for colors in the [calibratedWhite](../nscolorspacename/calibratedwhite.md), [NSCalibratedBlackColorSpace](../nscalibratedblackcolorspace.md), [NSDeviceBlackColorSpace](../nsdeviceblackcolorspace.md), or [deviceWhite](../nscolorspacename/devicewhite.md) color spaces. Accessing it for other color types raises an exception.

## See Also

### Related Documentation

- [getWhite(\_:alpha:)](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.

### Retrieving individual components

- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.
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

# whiteComponent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The white component value of the color.

## Declaration

```objectivec
@property (readonly) CGFloat whiteComponent;
```

<a id="Discussion"></a>

## Discussion

Access this property only for colors in the [NSCalibratedWhiteColorSpace](../nscolorspacename/calibratedwhite.md), [NSCalibratedBlackColorSpace](../nscalibratedblackcolorspace.md), [NSDeviceBlackColorSpace](../nsdeviceblackcolorspace.md), or [NSDeviceWhiteColorSpace](../nscolorspacename/devicewhite.md) color spaces. Accessing it for other color types raises an exception.

## See Also

### Related Documentation

- [getWhite:alpha:](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.

### Retrieving individual components

- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.
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
