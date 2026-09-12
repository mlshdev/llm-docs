> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolconfiguration-swift.class/init(palettecolors:)](https://developer.apple.com/documentation/uikit/uiimage/symbolconfiguration-swift.class/init(palettecolors:))

# init(paletteColors:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a color configuration with a color scheme from a palette of multiple colors.

## Declaration

```swift
convenience init(paletteColors: [UIColor])
```

## Parameters

- `paletteColors`: The colors to apply to the symbol.

<a id="Discussion"></a>

## Discussion

When you create an image with this configuration, the system applies each color to the corresponding layer in the symbol layer hierarchy.

If the symbol has only two nonconsecutive layers (primary and tertiary), specifying two colors applies the second color to the tertiary layer. Specifying three colors ignores the second color and applies the third color to the tertiary layer.

For this color configuration to have an effect, your symbol image must have the following:

- Its [renderingMode](../renderingmode-swift.property.md) set to [UIImage.RenderingMode.alwaysTemplate](../renderingmode-swift.enum/alwaystemplate.md) or [UIImage.RenderingMode.automatic](../renderingmode-swift.enum/automatic.md).
- Hierarchical layer annotations. If your symbol doesn’t have hierarchical layer annotations, the resulting image is a monochrome (template) symbol image.

This color configuration can’t combine with hierarchical color configurations that you create with [init(hierarchicalColor:)](init%28hierarchicalcolor_%29.md). If you attempt to combine this configuration with a hierarchical color configuration, the last configuration that you specify takes precedence, overwriting the previous color configuration.

## See Also

### Creating a color configuration

- [init(hierarchicalColor:)](init%28hierarchicalcolor_%29.md): Creates a color configuration with a color scheme that originates from one color.
- [preferringMulticolor()](preferringmulticolor%28%29.md): Creates a color configuration that specifies that the symbol image uses its multicolor variant, if one exists.
- [preferringMonochrome()](preferringmonochrome%28%29.md): Creates a color configuration that specifies that the symbol image uses its monochrome variant.

# configurationWithPaletteColors: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a color configuration with a color scheme from a palette of multiple colors.

## Declaration

```objectivec
+ (instancetype) configurationWithPaletteColors:(NSArray<UIColor *> *) paletteColors;
```

## Parameters

- `paletteColors`: The colors to apply to the symbol.

<a id="Discussion"></a>

## Discussion

When you create an image with this configuration, the system applies each color to the corresponding layer in the symbol layer hierarchy.

If the symbol has only two nonconsecutive layers (primary and tertiary), specifying two colors applies the second color to the tertiary layer. Specifying three colors ignores the second color and applies the third color to the tertiary layer.

For this color configuration to have an effect, your symbol image must have the following:

- Its [renderingMode](../renderingmode-swift.property.md) set to [UIImageRenderingModeAlwaysTemplate](../renderingmode-swift.enum/alwaystemplate.md) or [UIImageRenderingModeAutomatic](../renderingmode-swift.enum/automatic.md).
- Hierarchical layer annotations. If your symbol doesn’t have hierarchical layer annotations, the resulting image is a monochrome (template) symbol image.

This color configuration can’t combine with hierarchical color configurations that you create with [configurationWithHierarchicalColor:](init%28hierarchicalcolor_%29.md). If you attempt to combine this configuration with a hierarchical color configuration, the last configuration that you specify takes precedence, overwriting the previous color configuration.

## See Also

### Creating a color configuration

- [configurationWithHierarchicalColor:](init%28hierarchicalcolor_%29.md): Creates a color configuration with a color scheme that originates from one color.
- [configurationPreferringMulticolor](preferringmulticolor%28%29.md): Creates a color configuration that specifies that the symbol image uses its multicolor variant, if one exists.
- [configurationPreferringMonochrome](preferringmonochrome%28%29.md): Creates a color configuration that specifies that the symbol image uses its monochrome variant.
