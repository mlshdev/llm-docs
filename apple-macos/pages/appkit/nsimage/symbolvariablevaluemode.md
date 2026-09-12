> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/symbolvariablevaluemode](https://developer.apple.com/documentation/appkit/nsimage/symbolvariablevaluemode)

# NSImage.SymbolVariableValueMode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 26.0+

## Declaration

```swift
enum SymbolVariableValueMode
```

## Topics

### Enumeration Cases

- [NSImage.SymbolVariableValueMode.automatic](symbolvariablevaluemode/automatic.md): Automatically selects an appropriate variable value mode for the symbol.
- [NSImage.SymbolVariableValueMode.color](symbolvariablevaluemode/color.md): The “color” variable value mode. Sets the opacity of each variable layer to either on or off depending on how its threshold compared to the current value.
- [NSImage.SymbolVariableValueMode.draw](symbolvariablevaluemode/draw.md): The “draw” variable value mode. Changes the drawn length of each variable layer to either based on how its range relates to the current value.

### Initializers

- [init(rawValue:)](symbolvariablevaluemode/init%28rawvalue_%29.md)

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
- [NSImage.SymbolColorRenderingMode](symbolcolorrenderingmode.md)

# NSImageSymbolVariableValueMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 26.0+

## Declaration

```objectivec
enum NSImageSymbolVariableValueMode : NSInteger;
```

## Topics

### Enumeration Cases

- [NSImageSymbolVariableValueModeAutomatic](symbolvariablevaluemode/automatic.md): Automatically selects an appropriate variable value mode for the symbol.
- [NSImageSymbolVariableValueModeColor](symbolvariablevaluemode/color.md): The “color” variable value mode. Sets the opacity of each variable layer to either on or off depending on how its threshold compared to the current value.
- [NSImageSymbolVariableValueModeDraw](symbolvariablevaluemode/draw.md): The “draw” variable value mode. Changes the drawn length of each variable layer to either based on how its range relates to the current value.

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
- [NSImageSymbolColorRenderingMode](symbolcolorrenderingmode.md)
