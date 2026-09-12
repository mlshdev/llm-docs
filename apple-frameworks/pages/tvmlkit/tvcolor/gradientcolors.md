> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvcolor/gradientcolors](https://developer.apple.com/documentation/tvmlkit/tvcolor/gradientcolors)

# gradientColors (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

An array of colors used to create a gradient for an element.

> Please use SwiftUI or UIKit

## Declaration

```swift
var gradientColors: [UIColor]? { get }
```

<a id="Discussion"></a>

## Discussion

This property is only available when [colorType](colortype.md) is set to [TVColorType.linearGradientTopToBottom](../tvcolortype/lineargradienttoptobottom.md) or [TVColorType.linearGradientLeftToRight](../tvcolortype/lineargradientlefttoright.md).

## See Also

### Getting Color Properties

- [color](color.md): Deprecated. A [UIColor](../../uikit/uicolor.md) object used to color an element.
- [colorType](colortype.md): Deprecated. The color type for an element.
- [TVColorType](../tvcolortype.md): Deprecated. Designates how color for an element is to be displayed.
- [gradientPoints](gradientpoints.md): Deprecated. An array of points used to determine gradient color changes.

# gradientColors (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

An array of colors used to create a gradient for an element.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<UIColor *> * gradientColors;
```

<a id="Discussion"></a>

## Discussion

This property is only available when [colorType](colortype.md) is set to [TVColorTypeLinearGradientTopToBottom](../tvcolortype/lineargradienttoptobottom.md) or [TVColorTypeLinearGradientLeftToRight](../tvcolortype/lineargradientlefttoright.md).

## See Also

### Getting Color Properties

- [color](color.md): Deprecated. A [UIColor](../../uikit/uicolor.md) object used to color an element.
- [colorType](colortype.md): Deprecated. The color type for an element.
- [TVColorType](../tvcolortype.md): Deprecated. Designates how color for an element is to be displayed.
- [gradientPoints](gradientpoints.md): Deprecated. An array of points used to determine gradient color changes.
