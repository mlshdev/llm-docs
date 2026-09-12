> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/traitkey](https://developer.apple.com/documentation/uikit/uifontdescriptor/traitkey)

# UIFontDescriptor.TraitKey (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 4.0+

Keys for retrieving the font descriptor’s trait information.

## Declaration

```swift
struct TraitKey
```

<a id="overview"></a>

## Overview

Use these keys to fetch values from the dictionary associated with the [traits](attributename/traits.md) key.

## Topics

### Font traits

- [slant](traitkey/slant.md): The relative slant angle of the font.
- [symbolic](traitkey/symbolic.md): The symbolic font traits.
- [weight](traitkey/weight.md): The numerical value that corresponds to a font face.
- [width](traitkey/width.md): The inter-glyph spacing of the font.

### Initializer

- [init(rawValue:)](traitkey/init%28rawvalue_%29.md): Creates a font trait key with the specified raw value.

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
- [UIFontDescriptor.SystemDesign](systemdesign.md): Constants that describe the system-defined typeface designs.
- [UIFontDescriptor.SymbolicTraits](symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
- [UIFontDescriptor.Class](class.md): Constants that classify certain stylistic qualities of the font.
- [UIFontDescriptor.AttributeName](attributename.md): Constants that describe font attributes.
- [UIFontDescriptor.FeatureKey](featurekey.md): Keys for retrieving feature settings.
- [UIFont.Weight](../uifont/weight.md): Constants that represent standard typeface styles.
- [UIFont.Width](../uifont/width.md)

# UIFontDescriptorTraitKey (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 4.0+

Keys for retrieving the font descriptor’s trait information.

## Declaration

```objectivec
typedef NSString * UIFontDescriptorTraitKey;
```

<a id="overview"></a>

## Overview

Use these keys to fetch values from the dictionary associated with the [UIFontDescriptorTraitsAttribute](attributename/traits.md) key.

## Topics

### Font traits

- [UIFontSlantTrait](traitkey/slant.md): The relative slant angle of the font.
- [UIFontSymbolicTrait](traitkey/symbolic.md): The symbolic font traits.
- [UIFontWeightTrait](traitkey/weight.md): The numerical value that corresponds to a font face.
- [UIFontWidthTrait](traitkey/width.md): The inter-glyph spacing of the font.

## See Also

### Constants

- [UIFontTextStyle](../uifont/textstyle.md): Constants that describe the preferred styles for fonts.
- [UIFontDescriptorSystemDesign](systemdesign.md): Constants that describe the system-defined typeface designs.
- [UIFontDescriptorSymbolicTraits](symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
- [UIFontDescriptorClass](class.md): Constants that classify certain stylistic qualities of the font.
- [UIFontDescriptorAttributeName](attributename.md): Constants that describe font attributes.
- [UIFontDescriptorFeatureKey](featurekey.md): Keys for retrieving feature settings.
- [UIFontWeight](../uifont/weight.md): Constants that represent standard typeface styles.
- [UIFontWidth](../uifont/width.md)
