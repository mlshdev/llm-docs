> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolconfiguration-swift.class/init(hierarchicalcolor:)](https://developer.apple.com/documentation/uikit/uiimage/symbolconfiguration-swift.class/init(hierarchicalcolor:))

# init(hierarchicalColor:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a color configuration with a color scheme that originates from one color.

## Declaration

```swift
convenience init(hierarchicalColor: UIColor)
```

## Parameters

- `hierarchicalColor`: The colors to apply to the symbol.

<a id="Discussion"></a>

## Discussion

When you create an image with this configuration, the system generates a color scheme according to the color you specify, creating secondary and tertiary colors by reducing the intensity of the base color. Typically, the system generates the secondary and tertiary colors by reducing the opacity of the primary color, but it may perform additional color adjustments.

The system renders all layers in your symbol with the primary, secondary, and tertiary colors according to the symbol layer hierarchy.

For this color configuration to have an effect, your symbol image must have the following:

- Its [renderingMode](../renderingmode-swift.property.md) set to [UIImage.RenderingMode.alwaysTemplate](../renderingmode-swift.enum/alwaystemplate.md) or [UIImage.RenderingMode.automatic](../renderingmode-swift.enum/automatic.md).
- Hierarchical layer annotations. If your symbol doesn’t have hierarchical layer annotations, the resulting image is a monochrome (template) symbol image.

This color configuration can’t combine with palette color configurations that you create with [init(paletteColors:)](init%28palettecolors_%29.md). If you attempt to combine this configuration with a palette color configuration, the last configuration that you specify takes precedence, overwriting the previous color configuration.

## See Also

### Creating a color configuration

- [init(paletteColors:)](init%28palettecolors_%29.md): Creates a color configuration with a color scheme from a palette of multiple colors.
- [preferringMulticolor()](preferringmulticolor%28%29.md): Creates a color configuration that specifies that the symbol image uses its multicolor variant, if one exists.
- [preferringMonochrome()](preferringmonochrome%28%29.md): Creates a color configuration that specifies that the symbol image uses its monochrome variant.

# configurationWithHierarchicalColor: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a color configuration with a color scheme that originates from one color.

## Declaration

```objectivec
+ (instancetype) configurationWithHierarchicalColor:(UIColor *) hierarchicalColor;
```

## Parameters

- `hierarchicalColor`: The colors to apply to the symbol.

<a id="Discussion"></a>

## Discussion

When you create an image with this configuration, the system generates a color scheme according to the color you specify, creating secondary and tertiary colors by reducing the intensity of the base color. Typically, the system generates the secondary and tertiary colors by reducing the opacity of the primary color, but it may perform additional color adjustments.

The system renders all layers in your symbol with the primary, secondary, and tertiary colors according to the symbol layer hierarchy.

For this color configuration to have an effect, your symbol image must have the following:

- Its [renderingMode](../renderingmode-swift.property.md) set to [UIImageRenderingModeAlwaysTemplate](../renderingmode-swift.enum/alwaystemplate.md) or [UIImageRenderingModeAutomatic](../renderingmode-swift.enum/automatic.md).
- Hierarchical layer annotations. If your symbol doesn’t have hierarchical layer annotations, the resulting image is a monochrome (template) symbol image.

This color configuration can’t combine with palette color configurations that you create with [configurationWithPaletteColors:](init%28palettecolors_%29.md). If you attempt to combine this configuration with a palette color configuration, the last configuration that you specify takes precedence, overwriting the previous color configuration.

## See Also

### Creating a color configuration

- [configurationWithPaletteColors:](init%28palettecolors_%29.md): Creates a color configuration with a color scheme from a palette of multiple colors.
- [configurationPreferringMulticolor](preferringmulticolor%28%29.md): Creates a color configuration that specifies that the symbol image uses its multicolor variant, if one exists.
- [configurationPreferringMonochrome](preferringmonochrome%28%29.md): Creates a color configuration that specifies that the symbol image uses its monochrome variant.
