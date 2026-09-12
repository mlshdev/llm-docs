> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolconfiguration-swift.class](https://developer.apple.com/documentation/uikit/uiimage/symbolconfiguration-swift.class)

# UIImage.SymbolConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.

## Declaration

```swift
class SymbolConfiguration
```

## Mentioned In

- [Configuring and displaying symbol images in your UI](../configuring-and-displaying-symbol-images-in-your-ui.md)

<a id="overview"></a>

## Overview

Symbol image configuration objects include details such as the point size, scale, text style, weight, and font to apply to your symbol image. The system uses these details to determine which variant of the image to use and how to scale or style the image.

[UIImage.SymbolConfiguration](symbolconfiguration-swift.class.md) objects are immutable after you create them. If you use the [applying(\_:)](configuration-swift.class/applying%28__%29.md) method on the object, the new image attributes replace any previous attributes you supplied. After creating a symbol configuration object, assign it to the [preferredSymbolConfiguration](../uiimageview/preferredsymbolconfiguration.md) property of the [UIImageView](../uiimageview.md) object you use to display the image. If you draw the image directly, use the [withConfiguration(\_:)](withconfiguration%28__%29.md) method to create a new image that contains the new attributes.

## Topics

### Creating a symbol configuration

- [init(pointSize:)](symbolconfiguration-swift.class/init%28pointsize_%29.md): Creates a configuration object with the specified point-size information.
- [init(pointSize:weight:)](symbolconfiguration-swift.class/init%28pointsize_weight_%29.md): Creates a configuration object with the specified point-size and weight information.
- [init(pointSize:weight:scale:)](symbolconfiguration-swift.class/init%28pointsize_weight_scale_%29.md): Creates a configuration object with the specified point-size, weight, and scale information.
- [init(scale:)](symbolconfiguration-swift.class/init%28scale_%29.md): Creates a configuration object with the specified scale information.
- [init(textStyle:)](symbolconfiguration-swift.class/init%28textstyle_%29.md): Creates a configuration object with the specified font text style information.
- [init(textStyle:scale:)](symbolconfiguration-swift.class/init%28textstyle_scale_%29.md): Creates a configuration object with the specified font text style and scale information.
- [init(weight:)](symbolconfiguration-swift.class/init%28weight_%29.md): Creates a configuration object with the specified weight information.
- [init(font:)](symbolconfiguration-swift.class/init%28font_%29.md): Creates a configuration object with the specified font information.
- [init(font:scale:)](symbolconfiguration-swift.class/init%28font_scale_%29.md): Creates a configuration object with the specified font and scale information.
- [UIImage.SymbolScale](symbolscale.md): Constants that indicate which scale variant of a symbol image to use.
- [UIImage.SymbolWeight](symbolweight.md): Constants that indicate which weight variant of a symbol image to use.
- [UIImage.SymbolColorRenderingMode](symbolcolorrenderingmode.md)
- [UIImage.SymbolVariableValueMode](symbolvariablevaluemode.md)

### Creating a color configuration

- [init(hierarchicalColor:)](symbolconfiguration-swift.class/init%28hierarchicalcolor_%29.md): Creates a color configuration with a color scheme that originates from one color.
- [init(paletteColors:)](symbolconfiguration-swift.class/init%28palettecolors_%29.md): Creates a color configuration with a color scheme from a palette of multiple colors.
- [preferringMulticolor()](symbolconfiguration-swift.class/preferringmulticolor%28%29.md): Creates a color configuration that specifies that the symbol image uses its multicolor variant, if one exists.
- [preferringMonochrome()](symbolconfiguration-swift.class/preferringmonochrome%28%29.md): Creates a color configuration that specifies that the symbol image uses its monochrome variant.

### Getting an unspecified configuration

- [unspecified](symbolconfiguration-swift.class/unspecified.md): A symbol configuration object that contains unspecified values for all attributes.

### Removing configuration attributes

- [configurationWithoutPointSizeAndWeight()](symbolconfiguration-swift.class/configurationwithoutpointsizeandweight%28%29.md): Returns a copy of the current symbol configuration object without point-size and weight information.
- [configurationWithoutScale()](symbolconfiguration-swift.class/configurationwithoutscale%28%29.md): Returns a copy of the current symbol configuration object without scale information.
- [configurationWithoutTextStyle()](symbolconfiguration-swift.class/configurationwithouttextstyle%28%29.md): Returns a copy of the current symbol configuration object without font text style information.
- [configurationWithoutWeight()](symbolconfiguration-swift.class/configurationwithoutweight%28%29.md): Returns a copy of the current symbol configuration object without weight information.

### Comparing symbol image configurations

- [isEqual(to:)](symbolconfiguration-swift.class/isequal%28to_%29.md): Returns a Boolean value that indicates whether the configuration objects are equivalent.

### Initializers

- [init(colorRenderingMode:)](symbolconfiguration-swift.class/init%28colorrenderingmode_%29.md): Initializes a symbol configuration with a preferred color rendering mode.
- [init(variableValueMode:)](symbolconfiguration-swift.class/init%28variablevaluemode_%29.md): Initializes a symbol configuration with a preferred variable value mode.

## Relationships

### Inherits From

- [UIImage.Configuration](configuration-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Representations

- [UIImage](../uiimage.md): An object that manages image data in your app.
- [UIImage.Configuration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.

# UIImageSymbolConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.

## Declaration

```objectivec
@interface UIImageSymbolConfiguration : UIImageConfiguration
```

## Mentioned In

- [Configuring and displaying symbol images in your UI](../configuring-and-displaying-symbol-images-in-your-ui.md)

<a id="overview"></a>

## Overview

Symbol image configuration objects include details such as the point size, scale, text style, weight, and font to apply to your symbol image. The system uses these details to determine which variant of the image to use and how to scale or style the image.

[UIImageSymbolConfiguration](symbolconfiguration-swift.class.md) objects are immutable after you create them. If you use the [configurationByApplyingConfiguration:](configuration-swift.class/applying%28__%29.md) method on the object, the new image attributes replace any previous attributes you supplied. After creating a symbol configuration object, assign it to the [preferredSymbolConfiguration](../uiimageview/preferredsymbolconfiguration.md) property of the [UIImageView](../uiimageview.md) object you use to display the image. If you draw the image directly, use the [imageWithConfiguration:](withconfiguration%28__%29.md) method to create a new image that contains the new attributes.

## Topics

### Creating a symbol configuration

- [configurationWithPointSize:](symbolconfiguration-swift.class/init%28pointsize_%29.md): Creates a configuration object with the specified point-size information.
- [configurationWithPointSize:weight:](symbolconfiguration-swift.class/init%28pointsize_weight_%29.md): Creates a configuration object with the specified point-size and weight information.
- [configurationWithPointSize:weight:scale:](symbolconfiguration-swift.class/init%28pointsize_weight_scale_%29.md): Creates a configuration object with the specified point-size, weight, and scale information.
- [configurationWithScale:](symbolconfiguration-swift.class/init%28scale_%29.md): Creates a configuration object with the specified scale information.
- [configurationWithTextStyle:](symbolconfiguration-swift.class/init%28textstyle_%29.md): Creates a configuration object with the specified font text style information.
- [configurationWithTextStyle:scale:](symbolconfiguration-swift.class/init%28textstyle_scale_%29.md): Creates a configuration object with the specified font text style and scale information.
- [configurationWithWeight:](symbolconfiguration-swift.class/init%28weight_%29.md): Creates a configuration object with the specified weight information.
- [configurationWithFont:](symbolconfiguration-swift.class/init%28font_%29.md): Creates a configuration object with the specified font information.
- [configurationWithFont:scale:](symbolconfiguration-swift.class/init%28font_scale_%29.md): Creates a configuration object with the specified font and scale information.
- [UIImageSymbolScale](symbolscale.md): Constants that indicate which scale variant of a symbol image to use.
- [UIImageSymbolWeight](symbolweight.md): Constants that indicate which weight variant of a symbol image to use.
- [UIImageSymbolColorRenderingMode](symbolcolorrenderingmode.md)
- [UIImageSymbolVariableValueMode](symbolvariablevaluemode.md)

### Creating a color configuration

- [configurationWithHierarchicalColor:](symbolconfiguration-swift.class/init%28hierarchicalcolor_%29.md): Creates a color configuration with a color scheme that originates from one color.
- [configurationWithPaletteColors:](symbolconfiguration-swift.class/init%28palettecolors_%29.md): Creates a color configuration with a color scheme from a palette of multiple colors.
- [configurationPreferringMulticolor](symbolconfiguration-swift.class/preferringmulticolor%28%29.md): Creates a color configuration that specifies that the symbol image uses its multicolor variant, if one exists.
- [configurationPreferringMonochrome](symbolconfiguration-swift.class/preferringmonochrome%28%29.md): Creates a color configuration that specifies that the symbol image uses its monochrome variant.

### Getting an unspecified configuration

- [unspecifiedConfiguration](symbolconfiguration-swift.class/unspecified.md): A symbol configuration object that contains unspecified values for all attributes.

### Removing configuration attributes

- [configurationWithoutPointSizeAndWeight](symbolconfiguration-swift.class/configurationwithoutpointsizeandweight%28%29.md): Returns a copy of the current symbol configuration object without point-size and weight information.
- [configurationWithoutScale](symbolconfiguration-swift.class/configurationwithoutscale%28%29.md): Returns a copy of the current symbol configuration object without scale information.
- [configurationWithoutTextStyle](symbolconfiguration-swift.class/configurationwithouttextstyle%28%29.md): Returns a copy of the current symbol configuration object without font text style information.
- [configurationWithoutWeight](symbolconfiguration-swift.class/configurationwithoutweight%28%29.md): Returns a copy of the current symbol configuration object without weight information.

### Comparing symbol image configurations

- [isEqualToConfiguration:](symbolconfiguration-swift.class/isequal%28to_%29.md): Returns a Boolean value that indicates whether the configuration objects are equivalent.

### Type Methods

- [configurationWithColorRenderingMode:](symbolconfiguration-swift.class/init%28colorrenderingmode_%29.md): Initializes a symbol configuration with a preferred color rendering mode.
- [configurationWithVariableValueMode:](symbolconfiguration-swift.class/init%28variablevaluemode_%29.md): Initializes a symbol configuration with a preferred variable value mode.

## Relationships

### Inherits From

- [UIImageConfiguration](configuration-swift.class.md)

## See Also

### Representations

- [UIImage](../uiimage.md): An object that manages image data in your app.
- [UIImageConfiguration](configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.
