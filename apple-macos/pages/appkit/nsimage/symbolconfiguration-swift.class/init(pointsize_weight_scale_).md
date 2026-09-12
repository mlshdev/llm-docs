> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/symbolconfiguration-swift.class/init(pointsize:weight:scale:)](https://developer.apple.com/documentation/appkit/nsimage/symbolconfiguration-swift.class/init(pointsize:weight:scale:))

# init(pointSize:weight:scale:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a symbol configuration with the specified point size, font weight, and symbol scale.

## Declaration

```swift
convenience init(pointSize: CGFloat, weight: NSFont.Weight, scale: NSImage.SymbolScale)
```

## See Also

### Creating a Symbol Configuration

- [init(pointSize:weight:)](init%28pointsize_weight_%29.md): Creates a symbol configuration with the specified point size and font weight.
- [init(textStyle:)](init%28textstyle_%29.md): Creates a symbol configuration with the specified text style.
- [init(textStyle:scale:)](init%28textstyle_scale_%29.md): Creates a symbol configuration with the specified text style and symbol scale.
- [init(scale:)](init%28scale_%29.md): Creates a symbol configuration using the scale you specify.
- [init(colorRenderingMode:)](init%28colorrenderingmode_%29.md): Create a configuration with a specific color rendering mode.
- [init(variableValueMode:)](init%28variablevaluemode_%29.md): Create a configuration with a specified variable value mode.
- [NSFont.TextStyle](../../nsfont/textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSImage.SymbolScale](../symbolscale.md): Constants that specify which scale variant of a symbol image to use.
- [NSImage.SymbolColorRenderingMode](../symbolcolorrenderingmode.md)
- [NSImage.SymbolVariableValueMode](../symbolvariablevaluemode.md)

# configurationWithPointSize:weight:scale: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Creates a symbol configuration with the specified point size, font weight, and symbol scale.

## Declaration

```objectivec
+ (instancetype) configurationWithPointSize:(CGFloat) pointSize weight:(NSFontWeight) weight scale:(NSImageSymbolScale) scale;
```

## See Also

### Creating a Symbol Configuration

- [configurationWithPointSize:weight:](init%28pointsize_weight_%29.md): Creates a symbol configuration with the specified point size and font weight.
- [configurationWithTextStyle:](init%28textstyle_%29.md): Creates a symbol configuration with the specified text style.
- [configurationWithTextStyle:scale:](init%28textstyle_scale_%29.md): Creates a symbol configuration with the specified text style and symbol scale.
- [configurationWithScale:](init%28scale_%29.md): Creates a symbol configuration using the scale you specify.
- [configurationWithColorRenderingMode:](init%28colorrenderingmode_%29.md): Create a configuration with a specific color rendering mode.
- [configurationWithVariableValueMode:](init%28variablevaluemode_%29.md): Create a configuration with a specified variable value mode.
- [NSFontTextStyle](../../nsfont/textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSImageSymbolScale](../symbolscale.md): Constants that specify which scale variant of a symbol image to use.
- [NSImageSymbolColorRenderingMode](../symbolcolorrenderingmode.md)
- [NSImageSymbolVariableValueMode](../symbolvariablevaluemode.md)
