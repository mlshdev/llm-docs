> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/symbolconfiguration-swift.class/init(hierarchicalcolor:)](https://developer.apple.com/documentation/appkit/nsimage/symbolconfiguration-swift.class/init(hierarchicalcolor:))

# init(hierarchicalColor:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a hierarchical color configuration using the color you specify.

## Declaration

```swift
convenience init(hierarchicalColor: NSColor)
```

## Parameters

- `hierarchicalColor`: The primary color for the symbol.

<a id="return-value"></a>

## Return Value

A new configuration object that creates a palette from a primary color.

<a id="Discussion"></a>

## Discussion

This method creates a color scheme based on a single color. The system reduces the intensity of the base color to create the secondary and tertiary colors.

When combining this with another configuration, the last configuration overrides existing values.

If the symbol doesn’t have a palette variant, this color configuration doesn’t have an effect, so the symbol uses the monochrome (templated) symbol.

## See Also

### Creating a Color Configuration

- [init(paletteColors:)](init%28palettecolors_%29.md): Creates a color configuration by specifying a palette of colors.
- [preferringMulticolor()](preferringmulticolor%28%29.md): Creates a configuration that specifies that the symbol should prefer its multicolor variant if one exists.

# configurationWithHierarchicalColor: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Creates a hierarchical color configuration using the color you specify.

## Declaration

```objectivec
+ (instancetype) configurationWithHierarchicalColor:(NSColor *) hierarchicalColor;
```

## Parameters

- `hierarchicalColor`: The primary color for the symbol.

<a id="return-value"></a>

## Return Value

A new configuration object that creates a palette from a primary color.

<a id="Discussion"></a>

## Discussion

This method creates a color scheme based on a single color. The system reduces the intensity of the base color to create the secondary and tertiary colors.

When combining this with another configuration, the last configuration overrides existing values.

If the symbol doesn’t have a palette variant, this color configuration doesn’t have an effect, so the symbol uses the monochrome (templated) symbol.

## See Also

### Creating a Color Configuration

- [configurationWithPaletteColors:](init%28palettecolors_%29.md): Creates a color configuration by specifying a palette of colors.
- [configurationPreferringMulticolor](preferringmulticolor%28%29.md): Creates a configuration that specifies that the symbol should prefer its multicolor variant if one exists.
