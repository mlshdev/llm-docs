> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/symbolscale](https://developer.apple.com/documentation/appkit/nsimage/symbolscale)

# NSImage.SymbolScale (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

Constants that specify which scale variant of a symbol image to use.

## Declaration

```swift
enum SymbolScale
```

<a id="overview"></a>

## Overview

Specify a different scale variant for a symbol to change the emphasis of the symbol relative to its adjacent text. The default symbol scale is [NSImage.SymbolScale.medium](symbolscale/medium.md).

## Topics

### Constants

- [NSImage.SymbolScale.small](symbolscale/small.md): The symbol uses the small scale variant.
- [NSImage.SymbolScale.medium](symbolscale/medium.md): The symbol uses the default medium scale variant.
- [NSImage.SymbolScale.large](symbolscale/large.md): The symbol uses the large scale variant.

### Initializers

- [init(rawValue:)](symbolscale/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Symbol Configuration

- [init(pointSize:weight:)](symbolconfiguration-swift.class/init%28pointsize_weight_%29.md): Creates a symbol configuration with the specified point size and font weight.
- [init(pointSize:weight:scale:)](symbolconfiguration-swift.class/init%28pointsize_weight_scale_%29.md): Creates a symbol configuration with the specified point size, font weight, and symbol scale.
- [init(textStyle:)](symbolconfiguration-swift.class/init%28textstyle_%29.md): Creates a symbol configuration with the specified text style.
- [init(textStyle:scale:)](symbolconfiguration-swift.class/init%28textstyle_scale_%29.md): Creates a symbol configuration with the specified text style and symbol scale.
- [init(scale:)](symbolconfiguration-swift.class/init%28scale_%29.md): Creates a symbol configuration using the scale you specify.
- [init(colorRenderingMode:)](symbolconfiguration-swift.class/init%28colorrenderingmode_%29.md): Create a configuration with a specific color rendering mode.
- [init(variableValueMode:)](symbolconfiguration-swift.class/init%28variablevaluemode_%29.md): Create a configuration with a specified variable value mode.
- [NSFont.TextStyle](../nsfont/textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSImage.SymbolColorRenderingMode](symbolcolorrenderingmode.md)
- [NSImage.SymbolVariableValueMode](symbolvariablevaluemode.md)

# NSImageSymbolScale (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

Constants that specify which scale variant of a symbol image to use.

## Declaration

```objectivec
enum NSImageSymbolScale : NSInteger;
```

<a id="overview"></a>

## Overview

Specify a different scale variant for a symbol to change the emphasis of the symbol relative to its adjacent text. The default symbol scale is [NSImageSymbolScaleMedium](symbolscale/medium.md).

## Topics

### Constants

- [NSImageSymbolScaleSmall](symbolscale/small.md): The symbol uses the small scale variant.
- [NSImageSymbolScaleMedium](symbolscale/medium.md): The symbol uses the default medium scale variant.
- [NSImageSymbolScaleLarge](symbolscale/large.md): The symbol uses the large scale variant.

## See Also

### Creating a Symbol Configuration

- [configurationWithPointSize:weight:](symbolconfiguration-swift.class/init%28pointsize_weight_%29.md): Creates a symbol configuration with the specified point size and font weight.
- [configurationWithPointSize:weight:scale:](symbolconfiguration-swift.class/init%28pointsize_weight_scale_%29.md): Creates a symbol configuration with the specified point size, font weight, and symbol scale.
- [configurationWithTextStyle:](symbolconfiguration-swift.class/init%28textstyle_%29.md): Creates a symbol configuration with the specified text style.
- [configurationWithTextStyle:scale:](symbolconfiguration-swift.class/init%28textstyle_scale_%29.md): Creates a symbol configuration with the specified text style and symbol scale.
- [configurationWithScale:](symbolconfiguration-swift.class/init%28scale_%29.md): Creates a symbol configuration using the scale you specify.
- [configurationWithColorRenderingMode:](symbolconfiguration-swift.class/init%28colorrenderingmode_%29.md): Create a configuration with a specific color rendering mode.
- [configurationWithVariableValueMode:](symbolconfiguration-swift.class/init%28variablevaluemode_%29.md): Create a configuration with a specified variable value mode.
- [NSFontTextStyle](../nsfont/textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSImageSymbolColorRenderingMode](symbolcolorrenderingmode.md)
- [NSImageSymbolVariableValueMode](symbolvariablevaluemode.md)
