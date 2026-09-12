> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolscale](https://developer.apple.com/documentation/uikit/uiimage/symbolscale)

# UIImage.SymbolScale (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that indicate which scale variant of a symbol image to use.

## Declaration

```swift
enum SymbolScale
```

## Mentioned In

- [Configuring and displaying symbol images in your UI](../configuring-and-displaying-symbol-images-in-your-ui.md)

<a id="overview"></a>

## Overview

The definition of a symbol image includes multiple scale and weight variants. Scale variants offer a way to define the size of the image relative to layout guides in the symbol image’s definition file. The system chooses the appropriate size variant based on the available space and configuration options.

## Topics

### Symbol image scales

- [UIImage.SymbolScale.default](symbolscale/default.md): The default scale variant that matches the system usage.
- [UIImage.SymbolScale.unspecified](symbolscale/unspecified.md): An unspecified scale.
- [UIImage.SymbolScale.small](symbolscale/small.md): The small variant of the symbol image.
- [UIImage.SymbolScale.medium](symbolscale/medium.md): The medium variant of the symbol image
- [UIImage.SymbolScale.large](symbolscale/large.md): The large variant of the symbol image.

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
- [UIImage.SymbolWeight](symbolweight.md): Constants that indicate which weight variant of a symbol image to use.
- [UIImage.SymbolColorRenderingMode](symbolcolorrenderingmode.md)
- [UIImage.SymbolVariableValueMode](symbolvariablevaluemode.md)

# UIImageSymbolScale (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that indicate which scale variant of a symbol image to use.

## Declaration

```objectivec
enum UIImageSymbolScale : NSInteger;
```

## Mentioned In

- [Configuring and displaying symbol images in your UI](../configuring-and-displaying-symbol-images-in-your-ui.md)

<a id="overview"></a>

## Overview

The definition of a symbol image includes multiple scale and weight variants. Scale variants offer a way to define the size of the image relative to layout guides in the symbol image’s definition file. The system chooses the appropriate size variant based on the available space and configuration options.

## Topics

### Symbol image scales

- [UIImageSymbolScaleDefault](symbolscale/default.md): The default scale variant that matches the system usage.
- [UIImageSymbolScaleUnspecified](symbolscale/unspecified.md): An unspecified scale.
- [UIImageSymbolScaleSmall](symbolscale/small.md): The small variant of the symbol image.
- [UIImageSymbolScaleMedium](symbolscale/medium.md): The medium variant of the symbol image
- [UIImageSymbolScaleLarge](symbolscale/large.md): The large variant of the symbol image.

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
- [UIImageSymbolWeight](symbolweight.md): Constants that indicate which weight variant of a symbol image to use.
- [UIImageSymbolColorRenderingMode](symbolcolorrenderingmode.md)
- [UIImageSymbolVariableValueMode](symbolvariablevaluemode.md)
