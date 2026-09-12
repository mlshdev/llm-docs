> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolweight](https://developer.apple.com/documentation/uikit/uiimage/symbolweight)

# UIImage.SymbolWeight (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that indicate which weight variant of a symbol image to use.

## Declaration

```swift
enum SymbolWeight
```

<a id="overview"></a>

## Overview

The definition of a symbol image includes multiple scale and weight variants. The weight variants offer a way to progressively thicken some or all of the image’s lines. Weights do not correspond to a specific line thickness.

## Topics

### Symbol image weights

- [UIImage.SymbolWeight.unspecified](symbolweight/unspecified.md): An unspecified symbol image weight.
- [UIImage.SymbolWeight.ultraLight](symbolweight/ultralight.md): An ultralight weight.
- [UIImage.SymbolWeight.thin](symbolweight/thin.md): A thin weight
- [UIImage.SymbolWeight.light](symbolweight/light.md): A light weight.
- [UIImage.SymbolWeight.regular](symbolweight/regular.md): A regular weight.
- [UIImage.SymbolWeight.medium](symbolweight/medium.md): A medium weight.
- [UIImage.SymbolWeight.semibold](symbolweight/semibold.md): A semibold weight.
- [UIImage.SymbolWeight.bold](symbolweight/bold.md): A bold weight.
- [UIImage.SymbolWeight.heavy](symbolweight/heavy.md): A heavy weight.
- [UIImage.SymbolWeight.black](symbolweight/black.md): An ultra-heavy weight.

### Getting the font weight

- [fontWeight()](symbolweight/fontweight%28%29.md): The font weight for the specified symbol weight.

### Initializers

- [init(rawValue:)](symbolweight/init%28rawvalue_%29.md)

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
- [UIImage.SymbolColorRenderingMode](symbolcolorrenderingmode.md)
- [UIImage.SymbolVariableValueMode](symbolvariablevaluemode.md)

# UIImageSymbolWeight (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that indicate which weight variant of a symbol image to use.

## Declaration

```objectivec
enum UIImageSymbolWeight : NSInteger;
```

<a id="overview"></a>

## Overview

The definition of a symbol image includes multiple scale and weight variants. The weight variants offer a way to progressively thicken some or all of the image’s lines. Weights do not correspond to a specific line thickness.

## Topics

### Symbol image weights

- [UIImageSymbolWeightUnspecified](symbolweight/unspecified.md): An unspecified symbol image weight.
- [UIImageSymbolWeightUltraLight](symbolweight/ultralight.md): An ultralight weight.
- [UIImageSymbolWeightThin](symbolweight/thin.md): A thin weight
- [UIImageSymbolWeightLight](symbolweight/light.md): A light weight.
- [UIImageSymbolWeightRegular](symbolweight/regular.md): A regular weight.
- [UIImageSymbolWeightMedium](symbolweight/medium.md): A medium weight.
- [UIImageSymbolWeightSemibold](symbolweight/semibold.md): A semibold weight.
- [UIImageSymbolWeightBold](symbolweight/bold.md): A bold weight.
- [UIImageSymbolWeightHeavy](symbolweight/heavy.md): A heavy weight.
- [UIImageSymbolWeightBlack](symbolweight/black.md): An ultra-heavy weight.

### Getting the font weight

- [UIFontWeightForImageSymbolWeight](symbolweight/fontweight%28%29.md): The font weight for the specified symbol weight.

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
- [UIImageSymbolColorRenderingMode](symbolcolorrenderingmode.md)
- [UIImageSymbolVariableValueMode](symbolvariablevaluemode.md)
