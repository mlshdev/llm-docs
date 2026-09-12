> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(named:bundle:)](https://developer.apple.com/documentation/appkit/nscolor/init(named:bundle:))

# init(named:bundle:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.13+

Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the specified bundle.

## Declaration

```swift
init?(named name: NSColor.Name, bundle: Bundle?)
```

## Parameters

- `name`: The name of the color to find.
- `bundle`: The app bundle.

## See Also

### Loading color objects from asset catalogs

- [init(named:)](init%28named_%29.md): Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the app’s main bundle.
- [init(catalogName:colorName:)](init%28catalogname_colorname_%29.md): Creates a color object using the specified asset catalog and color names.
- [NSColor.Name](name.md): The name of a color.

# colorNamed:bundle: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.13+

Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the specified bundle.

## Declaration

```objectivec
+ (NSColor *) colorNamed:(NSColorName) name bundle:(NSBundle *) bundle;
```

## Parameters

- `name`: The name of the color to find.
- `bundle`: The app bundle.

## See Also

### Loading color objects from asset catalogs

- [colorNamed:](init%28named_%29.md): Creates a color object from the provided name, which corresponds to a color in the default asset catalog of the app’s main bundle.
- [colorWithCatalogName:colorName:](init%28catalogname_colorname_%29.md): Creates a color object using the specified asset catalog and color names.
- [NSColorName](name.md): The name of a color.
