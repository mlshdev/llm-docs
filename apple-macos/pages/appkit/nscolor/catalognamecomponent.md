> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/catalognamecomponent](https://developer.apple.com/documentation/appkit/nscolor/catalognamecomponent)

# catalogNameComponent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The catalog containing the color’s name.

## Declaration

```swift
var catalogNameComponent: NSColorList.Name { get }
```

<a id="Discussion"></a>

## Discussion

Access this property only for colors in the [named](../nscolorspacename/named.md) color space. Accessing it for other color types raises an exception.

## See Also

### Related Documentation

- [init(catalogName:colorName:)](init%28catalogname_colorname_%29.md): Creates a color object using the specified asset catalog and color names.

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
- [hueComponent](huecomponent.md): The hue component value of the color.
- [saturationComponent](saturationcomponent.md): The saturation component value of the color.
- [brightnessComponent](brightnesscomponent.md): The brightness component value of the color.
- [localizedCatalogNameComponent](localizedcatalognamecomponent.md): The localized version of the catalog name containing the color.
- [colorNameComponent](colornamecomponent.md): The name of the color.
- [localizedColorNameComponent](localizedcolornamecomponent.md): The localized version of the color name.

# catalogNameComponent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The catalog containing the color’s name.

## Declaration

```objectivec
@property (copy, readonly) NSColorListName catalogNameComponent;
```

<a id="Discussion"></a>

## Discussion

Access this property only for colors in the [NSNamedColorSpace](../nscolorspacename/named.md) color space. Accessing it for other color types raises an exception.

## See Also

### Related Documentation

- [colorWithCatalogName:colorName:](init%28catalogname_colorname_%29.md): Creates a color object using the specified asset catalog and color names.

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
- [hueComponent](huecomponent.md): The hue component value of the color.
- [saturationComponent](saturationcomponent.md): The saturation component value of the color.
- [brightnessComponent](brightnesscomponent.md): The brightness component value of the color.
- [localizedCatalogNameComponent](localizedcatalognamecomponent.md): The localized version of the catalog name containing the color.
- [colorNameComponent](colornamecomponent.md): The name of the color.
- [localizedColorNameComponent](localizedcolornamecomponent.md): The localized version of the color name.
