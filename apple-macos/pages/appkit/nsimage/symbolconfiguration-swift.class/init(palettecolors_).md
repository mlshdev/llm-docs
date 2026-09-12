> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/symbolconfiguration-swift.class/init(palettecolors:)](https://developer.apple.com/documentation/appkit/nsimage/symbolconfiguration-swift.class/init(palettecolors:))

# init(paletteColors:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a color configuration by specifying a palette of colors.

## Declaration

```swift
convenience init(paletteColors: [NSColor])
```

## Parameters

- `paletteColors`: The colors to apply to the symbol.

<a id="return-value"></a>

## Return Value

A new configuration object that prefers its palette variant.

<a id="Discussion"></a>

## Discussion

The system applies the colors sequentially per layer — the first color for the first layer, and the second color for the second layer. This is independent of the hierarchy level of the layer.

When you combine this with another configuration to create a palette, the last configuration overrides any existing color configuration.

If the symbol doesn’t have a palette variant, this color configuration doesn’t have an effect, so the symbol uses the monochrome (templated) symbol.

## See Also

### Creating a Color Configuration

- [init(hierarchicalColor:)](init%28hierarchicalcolor_%29.md): Creates a hierarchical color configuration using the color you specify.
- [preferringMulticolor()](preferringmulticolor%28%29.md): Creates a configuration that specifies that the symbol should prefer its multicolor variant if one exists.

# configurationWithPaletteColors: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Creates a color configuration by specifying a palette of colors.

## Declaration

```objectivec
+ (instancetype) configurationWithPaletteColors:(NSArray<NSColor *> *) paletteColors;
```

## Parameters

- `paletteColors`: The colors to apply to the symbol.

<a id="return-value"></a>

## Return Value

A new configuration object that prefers its palette variant.

<a id="Discussion"></a>

## Discussion

The system applies the colors sequentially per layer — the first color for the first layer, and the second color for the second layer. This is independent of the hierarchy level of the layer.

When you combine this with another configuration to create a palette, the last configuration overrides any existing color configuration.

If the symbol doesn’t have a palette variant, this color configuration doesn’t have an effect, so the symbol uses the monochrome (templated) symbol.

## See Also

### Creating a Color Configuration

- [configurationWithHierarchicalColor:](init%28hierarchicalcolor_%29.md): Creates a hierarchical color configuration using the color you specify.
- [configurationPreferringMulticolor](preferringmulticolor%28%29.md): Creates a configuration that specifies that the symbol should prefer its multicolor variant if one exists.
