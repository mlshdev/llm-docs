> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/featurekey](https://developer.apple.com/documentation/uikit/uifontdescriptor/featurekey)

# UIFontDescriptor.FeatureKey (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 4.0+

Keys for retrieving feature settings.

## Declaration

```swift
struct FeatureKey
```

<a id="overview"></a>

## Overview

Use these keys when retrieving information from one of the dictionaries associated with the [featureSettings](attributename/featuresettings.md) key.

## Topics

### Keys

- [type](featurekey/type.md): A key for identifying the font feature type.
- [selector](featurekey/selector.md): A key for identifying the font feature selector.

### Initializers

- [init(\_:)](featurekey/init%28__%29.md): Creates a font feature key.
- [init(rawValue:)](featurekey/init%28rawvalue_%29.md): Creates a font feature key with the specified raw value.

### Deprecated

- [featureIdentifier](featurekey/featureidentifier.md): Deprecated. A key for identifying a font feature type.
- [typeIdentifier](featurekey/typeidentifier.md): Deprecated. A key for identifying the font feature selector.

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
- [UIFontDescriptor.TraitKey](traitkey.md): Keys for retrieving the font descriptor’s trait information.
- [UIFont.Weight](../uifont/weight.md): Constants that represent standard typeface styles.
- [UIFont.Width](../uifont/width.md)

# UIFontDescriptorFeatureKey (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 4.0+

Keys for retrieving feature settings.

## Declaration

```objectivec
typedef NSString * UIFontDescriptorFeatureKey;
```

<a id="overview"></a>

## Overview

Use these keys when retrieving information from one of the dictionaries associated with the [UIFontDescriptorFeatureSettingsAttribute](attributename/featuresettings.md) key.

## Topics

### Deprecated

- [UIFontFeatureTypeIdentifierKey](featurekey/featureidentifier.md): Deprecated. A key for identifying a font feature type.
- [UIFontFeatureSelectorIdentifierKey](featurekey/typeidentifier.md): Deprecated. A key for identifying the font feature selector.

## See Also

### Constants

- [UIFontTextStyle](../uifont/textstyle.md): Constants that describe the preferred styles for fonts.
- [UIFontDescriptorSystemDesign](systemdesign.md): Constants that describe the system-defined typeface designs.
- [UIFontDescriptorSymbolicTraits](symbolictraits-swift.struct.md): Constants that describe the stylistic aspects of a font.
- [UIFontDescriptorClass](class.md): Constants that classify certain stylistic qualities of the font.
- [UIFontDescriptorAttributeName](attributename.md): Constants that describe font attributes.
- [UIFontDescriptorTraitKey](traitkey.md): Keys for retrieving the font descriptor’s trait information.
- [UIFontWeight](../uifont/weight.md): Constants that represent standard typeface styles.
- [UIFontWidth](../uifont/width.md)
