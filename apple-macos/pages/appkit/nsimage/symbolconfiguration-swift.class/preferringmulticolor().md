> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/symbolconfiguration-swift.class/preferringmulticolor()](https://developer.apple.com/documentation/appkit/nsimage/symbolconfiguration-swift.class/preferringmulticolor())

# preferringMulticolor() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Creates a configuration that specifies that the symbol should prefer its multicolor variant if one exists.

## Declaration

```swift
class func preferringMulticolor() -> Self
```

<a id="return-value"></a>

## Return Value

A new configuration object that prefers its multicolor variant.

<a id="Discussion"></a>

## Discussion

You can combine this configuration with one of the palette-based configurations. In that case, the symbol uses the multicolor variant if one exists; otherwise the symbol uses the palette version.

If the symbol supports neither, the symbol uses the monochrome (templated) symbol.

## See Also

### Creating a Color Configuration

- [init(paletteColors:)](init%28palettecolors_%29.md): Creates a color configuration by specifying a palette of colors.
- [init(hierarchicalColor:)](init%28hierarchicalcolor_%29.md): Creates a hierarchical color configuration using the color you specify.

# configurationPreferringMulticolor (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Creates a configuration that specifies that the symbol should prefer its multicolor variant if one exists.

## Declaration

```objectivec
+ (instancetype) configurationPreferringMulticolor;
```

<a id="return-value"></a>

## Return Value

A new configuration object that prefers its multicolor variant.

<a id="Discussion"></a>

## Discussion

You can combine this configuration with one of the palette-based configurations. In that case, the symbol uses the multicolor variant if one exists; otherwise the symbol uses the palette version.

If the symbol supports neither, the symbol uses the monochrome (templated) symbol.

## See Also

### Creating a Color Configuration

- [configurationWithPaletteColors:](init%28palettecolors_%29.md): Creates a color configuration by specifying a palette of colors.
- [configurationWithHierarchicalColor:](init%28hierarchicalcolor_%29.md): Creates a hierarchical color configuration using the color you specify.
