> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolvariablevaluemode](https://developer.apple.com/documentation/uikit/uiimage/symbolvariablevaluemode)

# UIImage.SymbolVariableValueMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
enum SymbolVariableValueMode
```

## Topics

### Enumeration Cases

- [UIImage.SymbolVariableValueMode.automatic](symbolvariablevaluemode/automatic.md): Automatically selects an appropriate variable value mode for the symbol.
- [UIImage.SymbolVariableValueMode.color](symbolvariablevaluemode/color.md): The “color” variable value mode. Sets the opacity of each variable layer to either on or off depending on how its threshold compared to the current value.
- [UIImage.SymbolVariableValueMode.draw](symbolvariablevaluemode/draw.md): The “draw” variable value mode. Changes the drawn length of each variable layer to either based on how its range relates to the current value.

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

# UIImageSymbolVariableValueMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
enum UIImageSymbolVariableValueMode : NSInteger;
```

## Topics

### Enumeration Cases

- [UIImageSymbolVariableValueModeAutomatic](symbolvariablevaluemode/automatic.md): Automatically selects an appropriate variable value mode for the symbol.
- [UIImageSymbolVariableValueModeColor](symbolvariablevaluemode/color.md): The “color” variable value mode. Sets the opacity of each variable layer to either on or off depending on how its threshold compared to the current value.
- [UIImageSymbolVariableValueModeDraw](symbolvariablevaluemode/draw.md): The “draw” variable value mode. Changes the drawn length of each variable layer to either based on how its range relates to the current value.

## See Also

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
