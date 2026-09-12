> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/symbolconfiguration-swift.class](https://developer.apple.com/documentation/appkit/nsimage/symbolconfiguration-swift.class)

# NSImage.SymbolConfiguration (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that contains the specific font, style, and weight attributes to apply to a symbol image.

## Declaration

```swift
class SymbolConfiguration
```

<a id="overview"></a>

## Overview

Symbol image configuration objects include details such as the point size, scale, text style, and weight to apply to your symbol image. The system uses these details to determine which variant of the image to use and how to scale or style the image.

```swift
if let image = NSImage(systemSymbolName: "multiply.circle.fill",
                       accessibilityDescription: "A multiply symbol inside a filled circle.") {
        
    var config = NSImage.SymbolConfiguration(textStyle: .body,
                                                     scale: .large)
    config = config.applying(.init(paletteColors: [.systemTeal, .systemGray]))
    imageView.image = image.withSymbolConfiguration(config)
}
```

[NSImage.SymbolConfiguration](symbolconfiguration-swift.class.md) objects are immutable after you create them. If you use the [applying(\_:)](symbolconfiguration-swift.class/applying%28__%29.md) method on the object, the new image attributes replace any previous attributes you supplied. After creating a symbol configuration object, assign it to the [symbolConfiguration](../nsimageview/symbolconfiguration.md) property of the [NSImageView](../nsimageview.md) object you use to display the image. If you draw the image directly, use the [withSymbolConfiguration(\_:)](withsymbolconfiguration%28__%29.md) method to create a new image that contains the new attributes.

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/sf-symbols/overview/).

## Topics

### Creating a Symbol Configuration

- [init(pointSize:weight:)](symbolconfiguration-swift.class/init%28pointsize_weight_%29.md): Creates a symbol configuration with the specified point size and font weight.
- [init(pointSize:weight:scale:)](symbolconfiguration-swift.class/init%28pointsize_weight_scale_%29.md): Creates a symbol configuration with the specified point size, font weight, and symbol scale.
- [init(textStyle:)](symbolconfiguration-swift.class/init%28textstyle_%29.md): Creates a symbol configuration with the specified text style.
- [init(textStyle:scale:)](symbolconfiguration-swift.class/init%28textstyle_scale_%29.md): Creates a symbol configuration with the specified text style and symbol scale.
- [init(scale:)](symbolconfiguration-swift.class/init%28scale_%29.md): Creates a symbol configuration using the scale you specify.
- [init(colorRenderingMode:)](symbolconfiguration-swift.class/init%28colorrenderingmode_%29.md): Create a configuration with a specific color rendering mode.
- [init(variableValueMode:)](symbolconfiguration-swift.class/init%28variablevaluemode_%29.md): Create a configuration with a specified variable value mode.
- [NSFont.TextStyle](../nsfont/textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSImage.SymbolScale](symbolscale.md): Constants that specify which scale variant of a symbol image to use.
- [NSImage.SymbolColorRenderingMode](symbolcolorrenderingmode.md)
- [NSImage.SymbolVariableValueMode](symbolvariablevaluemode.md)

### Applying a Configuration

- [applying(\_:)](symbolconfiguration-swift.class/applying%28__%29.md): Creates a configuration object by applying the values from the configuration you specify.

### Creating a Color Configuration

- [init(paletteColors:)](symbolconfiguration-swift.class/init%28palettecolors_%29.md): Creates a color configuration by specifying a palette of colors.
- [init(hierarchicalColor:)](symbolconfiguration-swift.class/init%28hierarchicalcolor_%29.md): Creates a hierarchical color configuration using the color you specify.
- [preferringMulticolor()](symbolconfiguration-swift.class/preferringmulticolor%28%29.md): Creates a configuration that specifies that the symbol should prefer its multicolor variant if one exists.

### Type Methods

- [preferringHierarchical()](symbolconfiguration-swift.class/preferringhierarchical%28%29.md): Creates a configuration that specifies that the symbol should prefer its hierarchical variant, if one exists.
- [preferringMonochrome()](symbolconfiguration-swift.class/preferringmonochrome%28%29.md): Creates a configuration that specifies that the symbol should prefer its monochrome variant.

### Initializers

- [init(coder:)](symbolconfiguration-swift.class/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Creating Symbol Images

- [withSymbolConfiguration(\_:)](withsymbolconfiguration%28__%29.md): Creates a new symbol image with the specified configuration.

# NSImageSymbolConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that contains the specific font, style, and weight attributes to apply to a symbol image.

## Declaration

```objectivec
@interface NSImageSymbolConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Symbol image configuration objects include details such as the point size, scale, text style, and weight to apply to your symbol image. The system uses these details to determine which variant of the image to use and how to scale or style the image.

```swift
if let image = NSImage(systemSymbolName: "multiply.circle.fill",
                       accessibilityDescription: "A multiply symbol inside a filled circle.") {
        
    var config = NSImage.SymbolConfiguration(textStyle: .body,
                                                     scale: .large)
    config = config.applying(.init(paletteColors: [.systemTeal, .systemGray]))
    imageView.image = image.withSymbolConfiguration(config)
}
```

[NSImageSymbolConfiguration](symbolconfiguration-swift.class.md) objects are immutable after you create them. If you use the [configurationByApplyingConfiguration:](symbolconfiguration-swift.class/applying%28__%29.md) method on the object, the new image attributes replace any previous attributes you supplied. After creating a symbol configuration object, assign it to the [symbolConfiguration](../nsimageview/symbolconfiguration.md) property of the [NSImageView](../nsimageview.md) object you use to display the image. If you draw the image directly, use the [imageWithSymbolConfiguration:](withsymbolconfiguration%28__%29.md) method to create a new image that contains the new attributes.

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/sf-symbols/overview/).

## Topics

### Creating a Symbol Configuration

- [configurationWithPointSize:weight:](symbolconfiguration-swift.class/init%28pointsize_weight_%29.md): Creates a symbol configuration with the specified point size and font weight.
- [configurationWithPointSize:weight:scale:](symbolconfiguration-swift.class/init%28pointsize_weight_scale_%29.md): Creates a symbol configuration with the specified point size, font weight, and symbol scale.
- [configurationWithTextStyle:](symbolconfiguration-swift.class/init%28textstyle_%29.md): Creates a symbol configuration with the specified text style.
- [configurationWithTextStyle:scale:](symbolconfiguration-swift.class/init%28textstyle_scale_%29.md): Creates a symbol configuration with the specified text style and symbol scale.
- [configurationWithScale:](symbolconfiguration-swift.class/init%28scale_%29.md): Creates a symbol configuration using the scale you specify.
- [configurationWithColorRenderingMode:](symbolconfiguration-swift.class/init%28colorrenderingmode_%29.md): Create a configuration with a specific color rendering mode.
- [configurationWithVariableValueMode:](symbolconfiguration-swift.class/init%28variablevaluemode_%29.md): Create a configuration with a specified variable value mode.
- [NSFontTextStyle](../nsfont/textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSImageSymbolScale](symbolscale.md): Constants that specify which scale variant of a symbol image to use.
- [NSImageSymbolColorRenderingMode](symbolcolorrenderingmode.md)
- [NSImageSymbolVariableValueMode](symbolvariablevaluemode.md)

### Applying a Configuration

- [configurationByApplyingConfiguration:](symbolconfiguration-swift.class/applying%28__%29.md): Creates a configuration object by applying the values from the configuration you specify.

### Creating a Color Configuration

- [configurationWithPaletteColors:](symbolconfiguration-swift.class/init%28palettecolors_%29.md): Creates a color configuration by specifying a palette of colors.
- [configurationWithHierarchicalColor:](symbolconfiguration-swift.class/init%28hierarchicalcolor_%29.md): Creates a hierarchical color configuration using the color you specify.
- [configurationPreferringMulticolor](symbolconfiguration-swift.class/preferringmulticolor%28%29.md): Creates a configuration that specifies that the symbol should prefer its multicolor variant if one exists.

### Type Methods

- [configurationPreferringHierarchical](symbolconfiguration-swift.class/preferringhierarchical%28%29.md): Creates a configuration that specifies that the symbol should prefer its hierarchical variant, if one exists.
- [configurationPreferringMonochrome](symbolconfiguration-swift.class/preferringmonochrome%28%29.md): Creates a configuration that specifies that the symbol should prefer its monochrome variant.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Creating Symbol Images

- [imageWithSymbolConfiguration:](withsymbolconfiguration%28__%29.md): Creates a new symbol image with the specified configuration.
