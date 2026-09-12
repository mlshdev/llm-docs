> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(named:)](https://developer.apple.com/documentation/appkit/nscolor/init(named:))

# init(named:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.13+

Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the app’s main bundle.

## Declaration

```swift
init?(named name: NSColor.Name)
```

## Parameters

- `name`: The name of the color in the asset catalog.

## See Also

### Loading color objects from asset catalogs

- [init(named:bundle:)](init%28named_bundle_%29.md): Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the specified bundle.
- [init(catalogName:colorName:)](init%28catalogname_colorname_%29.md): Creates a color object using the specified asset catalog and color names.
- [NSColor.Name](name.md): The name of a color.

# colorNamed: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.13+

Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the app’s main bundle.

## Declaration

```objectivec
+ (NSColor *) colorNamed:(NSColorName) name;
```

## Parameters

- `name`: The name of the color in the asset catalog.

## See Also

### Loading color objects from asset catalogs

- [colorNamed:bundle:](init%28named_bundle_%29.md): Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the specified bundle.
- [colorWithCatalogName:colorName:](init%28catalogname_colorname_%29.md): Creates a color object using the specified asset catalog and color names.
- [NSColorName](name.md): The name of a color.
