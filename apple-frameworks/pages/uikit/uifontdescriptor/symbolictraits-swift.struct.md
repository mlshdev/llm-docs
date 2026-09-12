> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/symbolictraits-swift.struct](https://developer.apple.com/documentation/uikit/uifontdescriptor/symbolictraits-swift.struct)

# UIFontDescriptor.SymbolicTraits (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Constants that describe the stylistic aspects of a font.

## Declaration

```swift
struct SymbolicTraits
```

<a id="overview"></a>

## Overview

The lower 16 bits represent the typeface, and the upper 16 bits describe appearance of the font. The font appearance information represented by the upper 16 bits of [NSFontSymbolicTraits](https://developer.apple.com/documentation/appkit/nsfontsymbolictraits) can be used for stylistic font matching. [UIFontDescriptor.Class](class.md) constants classify certain stylistic qualities of the font.

## Topics

### Font traits

- [traitItalic](symbolictraits-swift.struct/traititalic.md): The font’s style is italic.
- [traitBold](symbolictraits-swift.struct/traitbold.md): The font’s style is boldface.
- [traitExpanded](symbolictraits-swift.struct/traitexpanded.md): The font’s characters have an expanded width.
- [traitCondensed](symbolictraits-swift.struct/traitcondensed.md): The font’s characters have a condensed width.
- [traitMonoSpace](symbolictraits-swift.struct/traitmonospace.md): The font’s characters all have the same width.
- [traitVertical](symbolictraits-swift.struct/traitvertical.md): The font uses vertical glyph variants and metrics.
- [traitUIOptimized](symbolictraits-swift.struct/traituioptimized.md): The font synthesizes appropriate attributes for user interface rendering, such as in control titles, if necessary.
- [traitTightLeading](symbolictraits-swift.struct/traittightleading.md): The font uses a leading value that’s less than the default.
- [traitLooseLeading](symbolictraits-swift.struct/traitlooseleading.md): The font uses a leading value that’s greater than the default.
- [classMask](symbolictraits-swift.struct/classmask.md): The font family class mask that you use to access font descriptor values.
- [classOldStyleSerifs](symbolictraits-swift.struct/classoldstyleserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 15th to 17th centuries.
- [classTransitionalSerifs](symbolictraits-swift.struct/classtransitionalserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 18th to 19th centuries.
- [classModernSerifs](symbolictraits-swift.struct/classmodernserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 20th century.
- [classClarendonSerifs](symbolictraits-swift.struct/classclarendonserifs.md): The font’s characters include variations of old style and transitional serifs.
- [classSlabSerifs](symbolictraits-swift.struct/classslabserifs.md): The font’s characters use square transitions, without brackets, between strokes and serifs.
- [classFreeformSerifs](symbolictraits-swift.struct/classfreeformserifs.md): The font’s characters include serifs, and don’t generally fit within other serif design classifications.
- [classSansSerif](symbolictraits-swift.struct/classsansserif.md): The font’s characters don’t have serifs.
- [classOrnamentals](symbolictraits-swift.struct/classornamentals.md): The font’s characters use highly decorated or stylized character shapes.
- [classScripts](symbolictraits-swift.struct/classscripts.md): The font’s characters simulate handwriting.
- [classSymbolic](symbolictraits-swift.struct/classsymbolic.md): The font’s characters consist mainly of symbols rather than letters and numbers.

### Initializer

- [init(rawValue:)](symbolictraits-swift.struct/init%28rawvalue_%29.md): Creates a symbol traits structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Adding a custom font to your app](../adding-a-custom-font-to-your-app.md): Add a custom font to your app and use it in your app’s interface.
- [UIFont](../uifont.md): An object that provides access to the font’s characteristics.
- [UIFontDescriptor](../uifontdescriptor.md): A collection of attributes that describes a font.
- [UIFontMetrics](../uifontmetrics.md): A utility object for obtaining custom fonts that scale to support Dynamic Type.

# UIFontDescriptorSymbolicTraits (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Constants that describe the stylistic aspects of a font.

## Declaration

```objectivec
enum UIFontDescriptorSymbolicTraits : uint32_t;
```

<a id="overview"></a>

## Overview

The lower 16 bits represent the typeface, and the upper 16 bits describe appearance of the font. The font appearance information represented by the upper 16 bits of [NSFontSymbolicTraits](https://developer.apple.com/documentation/appkit/nsfontsymbolictraits) can be used for stylistic font matching. [UIFontDescriptorClass](class.md) constants classify certain stylistic qualities of the font.

## Topics

### Font traits

- [UIFontDescriptorTraitItalic](symbolictraits-swift.struct/traititalic.md): The font’s style is italic.
- [UIFontDescriptorTraitBold](symbolictraits-swift.struct/traitbold.md): The font’s style is boldface.
- [UIFontDescriptorTraitExpanded](symbolictraits-swift.struct/traitexpanded.md): The font’s characters have an expanded width.
- [UIFontDescriptorTraitCondensed](symbolictraits-swift.struct/traitcondensed.md): The font’s characters have a condensed width.
- [UIFontDescriptorTraitMonoSpace](symbolictraits-swift.struct/traitmonospace.md): The font’s characters all have the same width.
- [UIFontDescriptorTraitVertical](symbolictraits-swift.struct/traitvertical.md): The font uses vertical glyph variants and metrics.
- [UIFontDescriptorTraitUIOptimized](symbolictraits-swift.struct/traituioptimized.md): The font synthesizes appropriate attributes for user interface rendering, such as in control titles, if necessary.
- [UIFontDescriptorTraitTightLeading](symbolictraits-swift.struct/traittightleading.md): The font uses a leading value that’s less than the default.
- [UIFontDescriptorTraitLooseLeading](symbolictraits-swift.struct/traitlooseleading.md): The font uses a leading value that’s greater than the default.
- [UIFontDescriptorClassMask](symbolictraits-swift.struct/classmask.md): The font family class mask that you use to access font descriptor values.
- [UIFontDescriptorClassOldStyleSerifs](symbolictraits-swift.struct/classoldstyleserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 15th to 17th centuries.
- [UIFontDescriptorClassTransitionalSerifs](symbolictraits-swift.struct/classtransitionalserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 18th to 19th centuries.
- [UIFontDescriptorClassModernSerifs](symbolictraits-swift.struct/classmodernserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 20th century.
- [UIFontDescriptorClassClarendonSerifs](symbolictraits-swift.struct/classclarendonserifs.md): The font’s characters include variations of old style and transitional serifs.
- [UIFontDescriptorClassSlabSerifs](symbolictraits-swift.struct/classslabserifs.md): The font’s characters use square transitions, without brackets, between strokes and serifs.
- [UIFontDescriptorClassFreeformSerifs](symbolictraits-swift.struct/classfreeformserifs.md): The font’s characters include serifs, and don’t generally fit within other serif design classifications.
- [UIFontDescriptorClassSansSerif](symbolictraits-swift.struct/classsansserif.md): The font’s characters don’t have serifs.
- [UIFontDescriptorClassOrnamentals](symbolictraits-swift.struct/classornamentals.md): The font’s characters use highly decorated or stylized character shapes.
- [UIFontDescriptorClassScripts](symbolictraits-swift.struct/classscripts.md): The font’s characters simulate handwriting.
- [UIFontDescriptorClassSymbolic](symbolictraits-swift.struct/classsymbolic.md): The font’s characters consist mainly of symbols rather than letters and numbers.

### Enumeration Cases

- [UIFontDescriptorClassUnknown](../uifontdescriptorsymbolictraits/uifontdescriptorclassunknown.md): The font has no design classification.

## See Also

### Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [Adding a custom font to your app](../adding-a-custom-font-to-your-app.md): Add a custom font to your app and use it in your app’s interface.
- [UIFont](../uifont.md): An object that provides access to the font’s characteristics.
- [UIFontDescriptor](../uifontdescriptor.md): A collection of attributes that describes a font.
- [UIFontMetrics](../uifontmetrics.md): A utility object for obtaining custom fonts that scale to support Dynamic Type.
