> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/systemdesign](https://developer.apple.com/documentation/uikit/uifontdescriptor/systemdesign)

# UIFontDescriptor.SystemDesign (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 5.2+

Constants that describe the system-defined typeface designs.

## Declaration

```swift
struct SystemDesign
```

<a id="overview"></a>

## Overview

Use these constants to specify a system-provided typeface design, such as:

- SF Pro in iOS or SF Compact in watchOS ([default](systemdesign/default.md))
- SF Pro Rounded in iOS or SF Compact Rounded in watchOS ([rounded](systemdesign/rounded.md))
- SF Mono ([monospaced](systemdesign/monospaced.md))
- New York ([serif](systemdesign/serif.md))

## Topics

### Typeface designs

- [default](systemdesign/default.md): The default typeface for an app’s user interface.
- [rounded](systemdesign/rounded.md): The rounded variant of the default typeface.
- [monospaced](systemdesign/monospaced.md): The monospace variant of the default typeface.
- [serif](systemdesign/serif.md): The serif variant of the default typeface.

### Initializers

- [init(rawValue:)](systemdesign/init%28rawvalue_%29.md): Creates a typeface design constant with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIFont.TextStyle](../uifont/textstyle.md): Constants that describe the preferred styles for fonts.
- [UIFontDescriptor.SymbolicTraits](symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
- [UIFontDescriptor.Class](class.md): Constants that classify certain stylistic qualities of the font.
- [UIFontDescriptor.AttributeName](attributename.md): Constants that describe font attributes.
- [UIFontDescriptor.FeatureKey](featurekey.md): Keys for retrieving feature settings.
- [UIFontDescriptor.TraitKey](traitkey.md): Keys for retrieving the font descriptor’s trait information.
- [UIFont.Weight](../uifont/weight.md): Constants that represent standard typeface styles.
- [UIFont.Width](../uifont/width.md)

# UIFontDescriptorSystemDesign (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 5.2+

Constants that describe the system-defined typeface designs.

## Declaration

```objectivec
typedef NSString * UIFontDescriptorSystemDesign;
```

<a id="overview"></a>

## Overview

Use these constants to specify a system-provided typeface design, such as:

- SF Pro in iOS or SF Compact in watchOS ([UIFontDescriptorSystemDesignDefault](systemdesign/default.md))
- SF Pro Rounded in iOS or SF Compact Rounded in watchOS ([UIFontDescriptorSystemDesignRounded](systemdesign/rounded.md))
- SF Mono ([UIFontDescriptorSystemDesignMonospaced](systemdesign/monospaced.md))
- New York ([UIFontDescriptorSystemDesignSerif](systemdesign/serif.md))

## Topics

### Typeface designs

- [UIFontDescriptorSystemDesignDefault](systemdesign/default.md): The default typeface for an app’s user interface.
- [UIFontDescriptorSystemDesignRounded](systemdesign/rounded.md): The rounded variant of the default typeface.
- [UIFontDescriptorSystemDesignMonospaced](systemdesign/monospaced.md): The monospace variant of the default typeface.
- [UIFontDescriptorSystemDesignSerif](systemdesign/serif.md): The serif variant of the default typeface.

## See Also

### Constants

- [UIFontTextStyle](../uifont/textstyle.md): Constants that describe the preferred styles for fonts.
- [UIFontDescriptorSymbolicTraits](symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
- [UIFontDescriptorClass](class.md): Constants that classify certain stylistic qualities of the font.
- [UIFontDescriptorAttributeName](attributename.md): Constants that describe font attributes.
- [UIFontDescriptorFeatureKey](featurekey.md): Keys for retrieving feature settings.
- [UIFontDescriptorTraitKey](traitkey.md): Keys for retrieving the font descriptor’s trait information.
- [UIFontWeight](../uifont/weight.md): Constants that represent standard typeface styles.
- [UIFontWidth](../uifont/width.md)
