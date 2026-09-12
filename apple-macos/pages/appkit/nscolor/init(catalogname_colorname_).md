> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(catalogname:colorname:)](https://developer.apple.com/documentation/appkit/nscolor/init(catalogname:colorname:))

# init(catalogName:colorName:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a color object using the specified asset catalog and color names.

## Declaration

```swift
init?(catalogName listName: NSColorList.Name, colorName: NSColor.Name)
```

## Parameters

- `listName`: The name of the asset catalog in which to find the specified color; this may be a standard color catalog.
- `colorName`: The name of the color. Note that the color must be defined in the named color space to retrieve it with this method.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

This method searches the app’s main bundle for an asset catalog with the specified name. It then creates a color object based on the asset whose name matches the value in `colorName`.

## See Also

### Related Documentation

- [catalogNameComponent](catalognamecomponent.md): The catalog containing the color’s name.
- [localizedCatalogNameComponent](localizedcatalognamecomponent.md): The localized version of the catalog name containing the color.
- [colorNameComponent](colornamecomponent.md): The name of the color.

### Loading color objects from asset catalogs

- [init(named:)](init%28named_%29.md): Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the app’s main bundle.
- [init(named:bundle:)](init%28named_bundle_%29.md): Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the specified bundle.
- [NSColor.Name](name.md): The name of a color.

# colorWithCatalogName:colorName: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates a color object using the specified asset catalog and color names.

## Declaration

```objectivec
+ (NSColor *) colorWithCatalogName:(NSColorListName) listName colorName:(NSColorName) colorName;
```

## Parameters

- `listName`: The name of the asset catalog in which to find the specified color; this may be a standard color catalog.
- `colorName`: The name of the color. Note that the color must be defined in the named color space to retrieve it with this method.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

This method searches the app’s main bundle for an asset catalog with the specified name. It then creates a color object based on the asset whose name matches the value in `colorName`.

## See Also

### Related Documentation

- [catalogNameComponent](catalognamecomponent.md): The catalog containing the color’s name.
- [localizedCatalogNameComponent](localizedcatalognamecomponent.md): The localized version of the catalog name containing the color.
- [colorNameComponent](colornamecomponent.md): The name of the color.

### Loading color objects from asset catalogs

- [colorNamed:](init%28named_%29.md): Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the app’s main bundle.
- [colorNamed:bundle:](init%28named_bundle_%29.md): Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the specified bundle.
- [NSColorName](name.md): The name of a color.
