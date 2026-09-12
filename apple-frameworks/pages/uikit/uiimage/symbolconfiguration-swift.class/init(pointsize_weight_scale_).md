> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolconfiguration-swift.class/init(pointsize:weight:scale:)](https://developer.apple.com/documentation/uikit/uiimage/symbolconfiguration-swift.class/init(pointsize:weight:scale:))

# init(pointSize:weight:scale:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a configuration object with the specified point-size, weight, and scale information.

## Declaration

```swift
convenience init(pointSize: CGFloat, weight: UIImage.SymbolWeight, scale: UIImage.SymbolScale)
```

## Parameters

- `pointSize`: The system font point size to use for the configuration.
- `weight`: The symbol image weight variant to select. Use this parameter to match the weight of the symbol image to your other content. For a list of possible values, see [UIImage.SymbolWeight](../symbolweight.md).
- `scale`: The symbol image scale variant to select. Use this parameter to make the image appear bigger or smaller than text that uses the same point size. For a list of possible values, see [UIImage.SymbolScale](../symbolscale.md).

<a id="return-value"></a>

## Return Value

A new symbol configuration object with the specified information.

## See Also

### Creating a symbol configuration

- [init(pointSize:)](init%28pointsize_%29.md): Creates a configuration object with the specified point-size information.
- [init(pointSize:weight:)](init%28pointsize_weight_%29.md): Creates a configuration object with the specified point-size and weight information.
- [init(scale:)](init%28scale_%29.md): Creates a configuration object with the specified scale information.
- [init(textStyle:)](init%28textstyle_%29.md): Creates a configuration object with the specified font text style information.
- [init(textStyle:scale:)](init%28textstyle_scale_%29.md): Creates a configuration object with the specified font text style and scale information.
- [init(weight:)](init%28weight_%29.md): Creates a configuration object with the specified weight information.
- [init(font:)](init%28font_%29.md): Creates a configuration object with the specified font information.
- [init(font:scale:)](init%28font_scale_%29.md): Creates a configuration object with the specified font and scale information.
- [UIImage.SymbolScale](../symbolscale.md): Constants that indicate which scale variant of a symbol image to use.
- [UIImage.SymbolWeight](../symbolweight.md): Constants that indicate which weight variant of a symbol image to use.
- [UIImage.SymbolColorRenderingMode](../symbolcolorrenderingmode.md)
- [UIImage.SymbolVariableValueMode](../symbolvariablevaluemode.md)

# configurationWithPointSize:weight:scale: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a configuration object with the specified point-size, weight, and scale information.

## Declaration

```objectivec
+ (instancetype) configurationWithPointSize:(CGFloat) pointSize weight:(UIImageSymbolWeight) weight scale:(UIImageSymbolScale) scale;
```

## Parameters

- `pointSize`: The system font point size to use for the configuration.
- `weight`: The symbol image weight variant to select. Use this parameter to match the weight of the symbol image to your other content. For a list of possible values, see [UIImageSymbolWeight](../symbolweight.md).
- `scale`: The symbol image scale variant to select. Use this parameter to make the image appear bigger or smaller than text that uses the same point size. For a list of possible values, see [UIImageSymbolScale](../symbolscale.md).

<a id="return-value"></a>

## Return Value

A new symbol configuration object with the specified information.

## See Also

### Creating a symbol configuration

- [configurationWithPointSize:](init%28pointsize_%29.md): Creates a configuration object with the specified point-size information.
- [configurationWithPointSize:weight:](init%28pointsize_weight_%29.md): Creates a configuration object with the specified point-size and weight information.
- [configurationWithScale:](init%28scale_%29.md): Creates a configuration object with the specified scale information.
- [configurationWithTextStyle:](init%28textstyle_%29.md): Creates a configuration object with the specified font text style information.
- [configurationWithTextStyle:scale:](init%28textstyle_scale_%29.md): Creates a configuration object with the specified font text style and scale information.
- [configurationWithWeight:](init%28weight_%29.md): Creates a configuration object with the specified weight information.
- [configurationWithFont:](init%28font_%29.md): Creates a configuration object with the specified font information.
- [configurationWithFont:scale:](init%28font_scale_%29.md): Creates a configuration object with the specified font and scale information.
- [UIImageSymbolScale](../symbolscale.md): Constants that indicate which scale variant of a symbol image to use.
- [UIImageSymbolWeight](../symbolweight.md): Constants that indicate which weight variant of a symbol image to use.
- [UIImageSymbolColorRenderingMode](../symbolcolorrenderingmode.md)
- [UIImageSymbolVariableValueMode](../symbolvariablevaluemode.md)
