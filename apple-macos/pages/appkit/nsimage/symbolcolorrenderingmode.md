> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/symbolcolorrenderingmode](https://developer.apple.com/documentation/appkit/nsimage/symbolcolorrenderingmode)

# NSImage.SymbolColorRenderingMode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 26.0+

## Declaration

```swift
enum SymbolColorRenderingMode
```

## Topics

### Enumeration Cases

- [NSImage.SymbolColorRenderingMode.automatic](symbolcolorrenderingmode/automatic.md): Automatically uses an appropriate color rendering mode for the symbol’s color layers.
- [NSImage.SymbolColorRenderingMode.flat](symbolcolorrenderingmode/flat.md): Renders the symbol’s color layers using flat colors.
- [NSImage.SymbolColorRenderingMode.gradient](symbolcolorrenderingmode/gradient.md): Renders the symbol’s color layers using gradients.

### Initializers

- [init(rawValue:)](symbolcolorrenderingmode/init%28rawvalue_%29.md)

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
- [NSImage.SymbolScale](symbolscale.md): Constants that specify which scale variant of a symbol image to use.
- [NSImage.SymbolVariableValueMode](symbolvariablevaluemode.md)

# NSImageSymbolColorRenderingMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 26.0+

## Declaration

```objectivec
enum NSImageSymbolColorRenderingMode : NSInteger;
```

## Topics

### Enumeration Cases

- [NSImageSymbolColorRenderingModeAutomatic](symbolcolorrenderingmode/automatic.md): Automatically uses an appropriate color rendering mode for the symbol’s color layers.
- [NSImageSymbolColorRenderingModeFlat](symbolcolorrenderingmode/flat.md): Renders the symbol’s color layers using flat colors.
- [NSImageSymbolColorRenderingModeGradient](symbolcolorrenderingmode/gradient.md): Renders the symbol’s color layers using gradients.

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
- [NSImageSymbolScale](symbolscale.md): Constants that specify which scale variant of a symbol image to use.
- [NSImageSymbolVariableValueMode](symbolvariablevaluemode.md)
