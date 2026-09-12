> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolconfiguration-swift.class/init(textstyle:scale:)](https://developer.apple.com/documentation/uikit/uiimage/symbolconfiguration-swift.class/init(textstyle:scale:))

# init(textStyle:scale:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a configuration object with the specified font text style and scale information.

## Declaration

```swift
convenience init(textStyle: UIFont.TextStyle, scale: UIImage.SymbolScale)
```

## Parameters

- `textStyle`: The system text styles that support Dynamic Type. For a list of possible values, see [UIFont.TextStyle](../../uifont/textstyle.md).
- `scale`: The symbol image scale variant to select. Use this parameter to make the image appear bigger or smaller than text that uses the same text style. For a list of possible values, see [UIImage.SymbolScale](../symbolscale.md).

<a id="return-value"></a>

## Return Value

A new symbol configuration object with the specified information.

<a id="Discussion"></a>

## Discussion

Symbol images pick up the font styling information associated with the specified text style, causing them to match any text that uses the same style. Like it does for the text, UIKit scales the image to match the current Dynamic Type setting.

## See Also

### Creating a symbol configuration

- [init(pointSize:)](init%28pointsize_%29.md): Creates a configuration object with the specified point-size information.
- [init(pointSize:weight:)](init%28pointsize_weight_%29.md): Creates a configuration object with the specified point-size and weight information.
- [init(pointSize:weight:scale:)](init%28pointsize_weight_scale_%29.md): Creates a configuration object with the specified point-size, weight, and scale information.
- [init(scale:)](init%28scale_%29.md): Creates a configuration object with the specified scale information.
- [init(textStyle:)](init%28textstyle_%29.md): Creates a configuration object with the specified font text style information.
- [init(weight:)](init%28weight_%29.md): Creates a configuration object with the specified weight information.
- [init(font:)](init%28font_%29.md): Creates a configuration object with the specified font information.
- [init(font:scale:)](init%28font_scale_%29.md): Creates a configuration object with the specified font and scale information.
- [UIImage.SymbolScale](../symbolscale.md): Constants that indicate which scale variant of a symbol image to use.
- [UIImage.SymbolWeight](../symbolweight.md): Constants that indicate which weight variant of a symbol image to use.
- [UIImage.SymbolColorRenderingMode](../symbolcolorrenderingmode.md)
- [UIImage.SymbolVariableValueMode](../symbolvariablevaluemode.md)

# configurationWithTextStyle:scale: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a configuration object with the specified font text style and scale information.

## Declaration

```objectivec
+ (instancetype) configurationWithTextStyle:(UIFontTextStyle) textStyle scale:(UIImageSymbolScale) scale;
```

## Parameters

- `textStyle`: The system text styles that support Dynamic Type. For a list of possible values, see [UIFontTextStyle](../../uifont/textstyle.md).
- `scale`: The symbol image scale variant to select. Use this parameter to make the image appear bigger or smaller than text that uses the same text style. For a list of possible values, see [UIImageSymbolScale](../symbolscale.md).

<a id="return-value"></a>

## Return Value

A new symbol configuration object with the specified information.

<a id="Discussion"></a>

## Discussion

Symbol images pick up the font styling information associated with the specified text style, causing them to match any text that uses the same style. Like it does for the text, UIKit scales the image to match the current Dynamic Type setting.

## See Also

### Creating a symbol configuration

- [configurationWithPointSize:](init%28pointsize_%29.md): Creates a configuration object with the specified point-size information.
- [configurationWithPointSize:weight:](init%28pointsize_weight_%29.md): Creates a configuration object with the specified point-size and weight information.
- [configurationWithPointSize:weight:scale:](init%28pointsize_weight_scale_%29.md): Creates a configuration object with the specified point-size, weight, and scale information.
- [configurationWithScale:](init%28scale_%29.md): Creates a configuration object with the specified scale information.
- [configurationWithTextStyle:](init%28textstyle_%29.md): Creates a configuration object with the specified font text style information.
- [configurationWithWeight:](init%28weight_%29.md): Creates a configuration object with the specified weight information.
- [configurationWithFont:](init%28font_%29.md): Creates a configuration object with the specified font information.
- [configurationWithFont:scale:](init%28font_scale_%29.md): Creates a configuration object with the specified font and scale information.
- [UIImageSymbolScale](../symbolscale.md): Constants that indicate which scale variant of a symbol image to use.
- [UIImageSymbolWeight](../symbolweight.md): Constants that indicate which weight variant of a symbol image to use.
- [UIImageSymbolColorRenderingMode](../symbolcolorrenderingmode.md)
- [UIImageSymbolVariableValueMode](../symbolvariablevaluemode.md)
