> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolconfiguration-swift.class/preferringmulticolor()](https://developer.apple.com/documentation/uikit/uiimage/symbolconfiguration-swift.class/preferringmulticolor())

# preferringMulticolor() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a color configuration that specifies that the symbol image uses its multicolor variant, if one exists.

## Declaration

```swift
class func preferringMulticolor() -> Self
```

<a id="return-value"></a>

## Return Value

A symbol configuration that acquires the multicolor variant of a symbol.

<a id="Discussion"></a>

## Discussion

Use this method to acquire the multicolor variant of a symbol, if one exists. This method is the primary approach to retrieving multicolor symbols.

For this color configuration to have an effect, your symbol image must have the following:

- Its [renderingMode](../renderingmode-swift.property.md) set to [UIImage.RenderingMode.alwaysTemplate](../renderingmode-swift.enum/alwaystemplate.md) or [UIImage.RenderingMode.automatic](../renderingmode-swift.enum/automatic.md).
- Multicolor annotations. If your symbol doesn’t have multicolor annotations, the resulting image is a monochrome (template) symbol image. If you combine this configuration with a hierarchical or palette color configuration using [applying(\_:)](../configuration-swift.class/applying%28__%29.md), the resulting symbol uses the multicolor variant, if one exists, and defaults to the hierarchical or palette variant otherwise.

## See Also

### Creating a color configuration

- [init(hierarchicalColor:)](init%28hierarchicalcolor_%29.md): Creates a color configuration with a color scheme that originates from one color.
- [init(paletteColors:)](init%28palettecolors_%29.md): Creates a color configuration with a color scheme from a palette of multiple colors.
- [preferringMonochrome()](preferringmonochrome%28%29.md): Creates a color configuration that specifies that the symbol image uses its monochrome variant.

# configurationPreferringMulticolor (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a color configuration that specifies that the symbol image uses its multicolor variant, if one exists.

## Declaration

```objectivec
+ (instancetype) configurationPreferringMulticolor;
```

<a id="return-value"></a>

## Return Value

A symbol configuration that acquires the multicolor variant of a symbol.

<a id="Discussion"></a>

## Discussion

Use this method to acquire the multicolor variant of a symbol, if one exists. This method is the primary approach to retrieving multicolor symbols.

For this color configuration to have an effect, your symbol image must have the following:

- Its [renderingMode](../renderingmode-swift.property.md) set to [UIImageRenderingModeAlwaysTemplate](../renderingmode-swift.enum/alwaystemplate.md) or [UIImageRenderingModeAutomatic](../renderingmode-swift.enum/automatic.md).
- Multicolor annotations. If your symbol doesn’t have multicolor annotations, the resulting image is a monochrome (template) symbol image. If you combine this configuration with a hierarchical or palette color configuration using [configurationByApplyingConfiguration:](../configuration-swift.class/applying%28__%29.md), the resulting symbol uses the multicolor variant, if one exists, and defaults to the hierarchical or palette variant otherwise.

## See Also

### Creating a color configuration

- [configurationWithHierarchicalColor:](init%28hierarchicalcolor_%29.md): Creates a color configuration with a color scheme that originates from one color.
- [configurationWithPaletteColors:](init%28palettecolors_%29.md): Creates a color configuration with a color scheme from a palette of multiple colors.
- [configurationPreferringMonochrome](preferringmonochrome%28%29.md): Creates a color configuration that specifies that the symbol image uses its monochrome variant.
