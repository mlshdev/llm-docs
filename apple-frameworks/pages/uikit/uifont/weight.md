> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/weight](https://developer.apple.com/documentation/uikit/uifont/weight)

# UIFont.Weight (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 4.0+

Constants that represent standard typeface styles.

## Declaration

```swift
struct Weight
```

<a id="overview"></a>

## Overview

Use system-defined constants as interchangeable values for [weight](../uifontdescriptor/traitkey/weight.md). Each constant corresponds to a different value that indicates the weight of a font. Use these constants to specify the weight parameter in [systemFont(ofSize:weight:)](systemfont%28ofsize_weight_%29.md). When providing a weight that doesn’t precisely match a font face in the family, the system locates a face that most closely matches the request.

> **Note**

>  Font [familyNames](familynames.md) don’t include all system-defined font constants.

## Topics

### Using system-defined font weights

- [ultraLight](weight/ultralight.md): The ultra-light font weight.
- [thin](weight/thin.md): The thin font weight.
- [light](weight/light.md): The light font weight.
- [regular](weight/regular.md): The regular font weight.
- [medium](weight/medium.md): The medium font weight.
- [semibold](weight/semibold.md): The semibold font weight.
- [bold](weight/bold.md): The bold font weight.
- [heavy](weight/heavy.md): The heavy font weight.
- [black](weight/black.md): The black font weight.

### Balancing the appearance of symbols and text

- [symbolWeight()](weight/symbolweight%28%29.md): Provides the corresponding symbol weight for this font weight.

### Initializers

- [init(\_:)](weight/init%28__%29.md): Creates a font weight.
- [init(rawValue:)](weight/init%28rawvalue_%29.md): Creates a font weight with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating System Fonts

- [systemFont(ofSize:)](systemfont%28ofsize_%29.md): Returns the font object for standard interface items in the specified size.
- [systemFont(ofSize:weight:)](systemfont%28ofsize_weight_%29.md): Returns the font object for standard interface items in the specified size and weight.
- [systemFont(ofSize:weight:width:)](systemfont%28ofsize_weight_width_%29.md)
- [UIFont.Width](width.md)
- [boldSystemFont(ofSize:)](boldsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in boldface type in the specified size.
- [italicSystemFont(ofSize:)](italicsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in italic type in the specified size.
- [monospacedSystemFont(ofSize:weight:)](monospacedsystemfont%28ofsize_weight_%29.md): Returns the fixed-width font for standard interface text in the specified size.
- [monospacedDigitSystemFont(ofSize:weight:)](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns the standard system font with all digits of consistent width.

# UIFontWeight (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 4.0+

Constants that represent standard typeface styles.

## Declaration

```objectivec
typedef CGFloat UIFontWeight;
```

<a id="overview"></a>

## Overview

Use system-defined constants as interchangeable values for [UIFontWeightTrait](../uifontdescriptor/traitkey/weight.md). Each constant corresponds to a different value that indicates the weight of a font. Use these constants to specify the weight parameter in [systemFontOfSize:weight:](systemfont%28ofsize_weight_%29.md). When providing a weight that doesn’t precisely match a font face in the family, the system locates a face that most closely matches the request.

> **Note**

>  Font [familyNames](familynames.md) don’t include all system-defined font constants.

## Topics

### Using system-defined font weights

- [UIFontWeightUltraLight](weight/ultralight.md): The ultra-light font weight.
- [UIFontWeightThin](weight/thin.md): The thin font weight.
- [UIFontWeightLight](weight/light.md): The light font weight.
- [UIFontWeightRegular](weight/regular.md): The regular font weight.
- [UIFontWeightMedium](weight/medium.md): The medium font weight.
- [UIFontWeightSemibold](weight/semibold.md): The semibold font weight.
- [UIFontWeightBold](weight/bold.md): The bold font weight.
- [UIFontWeightHeavy](weight/heavy.md): The heavy font weight.
- [UIFontWeightBlack](weight/black.md): The black font weight.

### Balancing the appearance of symbols and text

- [UIImageSymbolWeightForFontWeight](weight/symbolweight%28%29.md): Provides the corresponding symbol weight for this font weight.

## See Also

### Creating System Fonts

- [systemFontOfSize:](systemfont%28ofsize_%29.md): Returns the font object for standard interface items in the specified size.
- [systemFontOfSize:weight:](systemfont%28ofsize_weight_%29.md): Returns the font object for standard interface items in the specified size and weight.
- [systemFontOfSize:weight:width:](systemfont%28ofsize_weight_width_%29.md)
- [UIFontWidth](width.md)
- [boldSystemFontOfSize:](boldsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in boldface type in the specified size.
- [italicSystemFontOfSize:](italicsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in italic type in the specified size.
- [monospacedSystemFontOfSize:weight:](monospacedsystemfont%28ofsize_weight_%29.md): Returns the fixed-width font for standard interface text in the specified size.
- [monospacedDigitSystemFontOfSize:weight:](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns the standard system font with all digits of consistent width.
