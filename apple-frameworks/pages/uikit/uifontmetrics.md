> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontmetrics](https://developer.apple.com/documentation/uikit/uifontmetrics)

# UIFontMetrics (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A utility object for obtaining custom fonts that scale to support Dynamic Type.

## Declaration

```swift
class UIFontMetrics
```

## Mentioned In

- [Scaling fonts automatically](scaling-fonts-automatically.md)

<a id="overview"></a>

## Overview

Use a [UIFontMetrics](uifontmetrics.md) object to support scalable custom fonts in your app. You create a font metrics object that specifies the font style—for example, body or title—that you want to use in your app. You then pass your custom font to the [scaledFont(for:)](uifontmetrics/scaledfont%28for_%29.md) method (or one of the other methods of this class) to obtain a font object that is based on your custom font, has the appropriate style information, and automatically scales to match the current Dynamic Type settings.

## Topics

### Creating a Font Metrics Object

- [init(forTextStyle:)](uifontmetrics/init%28fortextstyle_%29.md): Creates a font metrics object for the specified text style.
- [default](uifontmetrics/default.md): The default font metrics object for content.
- [UIFont.TextStyle](uifont/textstyle.md): Constants that describe the preferred styles for fonts.

### Creating Scaled Fonts

- [Scaling fonts automatically](scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [scaledFont(for:)](uifontmetrics/scaledfont%28for_%29.md): Returns a version of the specified font that adopts the current font metrics.
- [scaledFont(for:compatibleWith:)](uifontmetrics/scaledfont%28for_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and supports the specified traits.
- [scaledFont(for:maximumPointSize:)](uifontmetrics/scaledfont%28for_maximumpointsize_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified maximum size.
- [scaledFont(for:maximumPointSize:compatibleWith:)](uifontmetrics/scaledfont%28for_maximumpointsize_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified traits and size.

### Scaling Layout Values

- [scaledValue(for:)](uifontmetrics/scaledvalue%28for_%29.md): Scales an arbitrary layout value based on the current Dynamic Type settings.
- [scaledValue(for:compatibleWith:)](uifontmetrics/scaledvalue%28for_compatiblewith_%29.md): Scales an arbitrary layout value based on the current Dynamic Type settings and the specified traits.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Fonts

- [Scaling fonts automatically](scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Adding a custom font to your app](adding-a-custom-font-to-your-app.md): Add a custom font to your app and use it in your app’s interface.
- [UIFont](uifont.md): An object that provides access to the font’s characteristics.
- [UIFontDescriptor](uifontdescriptor.md): A collection of attributes that describes a font.
- [UIFontDescriptor.SymbolicTraits](uifontdescriptor/symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.

# UIFontMetrics (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A utility object for obtaining custom fonts that scale to support Dynamic Type.

## Declaration

```objectivec
@interface UIFontMetrics : NSObject
```

## Mentioned In

- [Scaling fonts automatically](scaling-fonts-automatically.md)

<a id="overview"></a>

## Overview

Use a [UIFontMetrics](uifontmetrics.md) object to support scalable custom fonts in your app. You create a font metrics object that specifies the font style—for example, body or title—that you want to use in your app. You then pass your custom font to the [scaledFontForFont:](uifontmetrics/scaledfont%28for_%29.md) method (or one of the other methods of this class) to obtain a font object that is based on your custom font, has the appropriate style information, and automatically scales to match the current Dynamic Type settings.

## Topics

### Creating a Font Metrics Object

- [initForTextStyle:](uifontmetrics/init%28fortextstyle_%29.md): Creates a font metrics object for the specified text style.
- [metricsForTextStyle:](uifontmetrics/metricsfortextstyle_.md): Creates and returns a font metrics object for the specified text style.
- [defaultMetrics](uifontmetrics/default.md): The default font metrics object for content.
- [UIFontTextStyle](uifont/textstyle.md): Constants that describe the preferred styles for fonts.

### Creating Scaled Fonts

- [Scaling fonts automatically](scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [scaledFontForFont:](uifontmetrics/scaledfont%28for_%29.md): Returns a version of the specified font that adopts the current font metrics.
- [scaledFontForFont:compatibleWithTraitCollection:](uifontmetrics/scaledfont%28for_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and supports the specified traits.
- [scaledFontForFont:maximumPointSize:](uifontmetrics/scaledfont%28for_maximumpointsize_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified maximum size.
- [scaledFontForFont:maximumPointSize:compatibleWithTraitCollection:](uifontmetrics/scaledfont%28for_maximumpointsize_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified traits and size.

### Scaling Layout Values

- [scaledValueForValue:](uifontmetrics/scaledvalue%28for_%29.md): Scales an arbitrary layout value based on the current Dynamic Type settings.
- [scaledValueForValue:compatibleWithTraitCollection:](uifontmetrics/scaledvalue%28for_compatiblewith_%29.md): Scales an arbitrary layout value based on the current Dynamic Type settings and the specified traits.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Fonts

- [Scaling fonts automatically](scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Adding a custom font to your app](adding-a-custom-font-to-your-app.md): Add a custom font to your app and use it in your app’s interface.
- [UIFont](uifont.md): An object that provides access to the font’s characteristics.
- [UIFontDescriptor](uifontdescriptor.md): A collection of attributes that describes a font.
- [UIFontDescriptorSymbolicTraits](uifontdescriptor/symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
