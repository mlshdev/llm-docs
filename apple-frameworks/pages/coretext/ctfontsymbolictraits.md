> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontsymbolictraits](https://developer.apple.com/documentation/coretext/ctfontsymbolictraits)

# CTFontSymbolicTraits (Swift)

**Framework:** Core Text  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The symbolic representation of stylistic font attributes.

## Declaration

```swift
struct CTFontSymbolicTraits
```

<a id="overview"></a>

## Overview

`CTFontSymbolicTraits` symbolically describes stylistic aspects of a font. The upper 16 bits are used to describe appearance of the font, whereas the lower 16 bits are for typeface information. The font appearance information represented by the upper 16 bits can be used for stylistic font matching.

## Topics

### Initializers

- [init(rawValue:)](ctfontsymbolictraits/init%28rawvalue_%29.md): Creates a symbolic traits structure with the specified raw value.

### Symbolic Traits

- [traitItalic](ctfontsymbolictraits/traititalic.md): The font typestyle is italic.
- [traitBold](ctfontsymbolictraits/traitbold.md): The font typestyle is boldface.
- [traitExpanded](ctfontsymbolictraits/traitexpanded.md): The font typestyle is expanded.
- [traitCondensed](ctfontsymbolictraits/traitcondensed.md): The font typestyle is condensed.
- [traitMonoSpace](ctfontsymbolictraits/traitmonospace.md): The font uses fixed-pitch glyphs if available.
- [traitVertical](ctfontsymbolictraits/traitvertical.md): The font uses vertical glyph variants and metrics.
- [traitUIOptimized](ctfontsymbolictraits/traituioptimized.md): The font synthesizes appropriate attributes for user interface rendering, such as control titles, if necessary.
- [traitColorGlyphs](ctfontsymbolictraits/traitcolorglyphs.md): The font contains color glyphs.
- [traitComposite](ctfontsymbolictraits/traitcomposite.md): The font is in Composite Font Reference format.
- [traitClassMask](ctfontsymbolictraits/traitclassmask.md): Mask for the font class.

### Deprecated Constants

- [italicTrait](ctfontsymbolictraits/italictrait.md): Deprecated. The font typestyle is italic.
- [boldTrait](ctfontsymbolictraits/boldtrait.md): Deprecated. The font typestyle is boldface.
- [expandedTrait](ctfontsymbolictraits/expandedtrait.md): Deprecated. The font typestyle is expanded.
- [condensedTrait](ctfontsymbolictraits/condensedtrait.md): Deprecated. The font typestyle is condensed.
- [monoSpaceTrait](ctfontsymbolictraits/monospacetrait.md): Deprecated. The font uses fixed-pitch glyphs if available.
- [verticalTrait](ctfontsymbolictraits/verticaltrait.md): Deprecated. The font uses vertical glyph variants and metrics.
- [uiOptimizedTrait](ctfontsymbolictraits/uioptimizedtrait.md): Deprecated. The font synthesizes appropriate attributes for user interface rendering, such as control titles, if necessary.
- [colorGlyphsTrait](ctfontsymbolictraits/colorglyphstrait.md): Deprecated. The font contains color glyphs.
- [compositeTrait](ctfontsymbolictraits/compositetrait.md): Deprecated. The font is in Composite Font Reference format.
- [classMaskTrait](ctfontsymbolictraits/classmasktrait.md): Deprecated. Mask for the font class.

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

### Accessing Font Traits

- [Font Traits](font-traits.md): The keys for accessing font traits from a font descriptor.
- [Font Class Mask Shift Constants](font-class-mask-shift-constants.md): These constants represent the font class mask shift.
- [CTFontStylisticClass](ctfontstylisticclass.md): The stylistic class values of the font.

# CTFontSymbolicTraits (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The symbolic representation of stylistic font attributes.

## Declaration

```objectivec
enum CTFontSymbolicTraits : uint32_t;
```

<a id="overview"></a>

## Overview

`CTFontSymbolicTraits` symbolically describes stylistic aspects of a font. The upper 16 bits are used to describe appearance of the font, whereas the lower 16 bits are for typeface information. The font appearance information represented by the upper 16 bits can be used for stylistic font matching.

## Topics

### Symbolic Traits

- [kCTFontTraitItalic](ctfontsymbolictraits/traititalic.md): The font typestyle is italic.
- [kCTFontTraitBold](ctfontsymbolictraits/traitbold.md): The font typestyle is boldface.
- [kCTFontTraitExpanded](ctfontsymbolictraits/traitexpanded.md): The font typestyle is expanded.
- [kCTFontTraitCondensed](ctfontsymbolictraits/traitcondensed.md): The font typestyle is condensed.
- [kCTFontTraitMonoSpace](ctfontsymbolictraits/traitmonospace.md): The font uses fixed-pitch glyphs if available.
- [kCTFontTraitVertical](ctfontsymbolictraits/traitvertical.md): The font uses vertical glyph variants and metrics.
- [kCTFontTraitUIOptimized](ctfontsymbolictraits/traituioptimized.md): The font synthesizes appropriate attributes for user interface rendering, such as control titles, if necessary.
- [kCTFontTraitColorGlyphs](ctfontsymbolictraits/traitcolorglyphs.md): The font contains color glyphs.
- [kCTFontTraitComposite](ctfontsymbolictraits/traitcomposite.md): The font is in Composite Font Reference format.
- [kCTFontTraitClassMask](ctfontsymbolictraits/traitclassmask.md): Mask for the font class.

### Deprecated Constants

- [kCTFontItalicTrait](ctfontsymbolictraits/italictrait.md): Deprecated. The font typestyle is italic.
- [kCTFontBoldTrait](ctfontsymbolictraits/boldtrait.md): Deprecated. The font typestyle is boldface.
- [kCTFontExpandedTrait](ctfontsymbolictraits/expandedtrait.md): Deprecated. The font typestyle is expanded.
- [kCTFontCondensedTrait](ctfontsymbolictraits/condensedtrait.md): Deprecated. The font typestyle is condensed.
- [kCTFontMonoSpaceTrait](ctfontsymbolictraits/monospacetrait.md): Deprecated. The font uses fixed-pitch glyphs if available.
- [kCTFontVerticalTrait](ctfontsymbolictraits/verticaltrait.md): Deprecated. The font uses vertical glyph variants and metrics.
- [kCTFontUIOptimizedTrait](ctfontsymbolictraits/uioptimizedtrait.md): Deprecated. The font synthesizes appropriate attributes for user interface rendering, such as control titles, if necessary.
- [kCTFontColorGlyphsTrait](ctfontsymbolictraits/colorglyphstrait.md): Deprecated. The font contains color glyphs.
- [kCTFontCompositeTrait](ctfontsymbolictraits/compositetrait.md): Deprecated. The font is in Composite Font Reference format.
- [kCTFontClassMaskTrait](ctfontsymbolictraits/classmasktrait.md): Deprecated. Mask for the font class.

## See Also

### Accessing Font Traits

- [Font Traits](font-traits.md): The keys for accessing font traits from a font descriptor.
- [Font Class Mask Shift Constants](font-class-mask-shift-constants.md): These constants represent the font class mask shift.
- [CTFontStylisticClass](ctfontstylisticclass.md): The stylistic class values of the font.
