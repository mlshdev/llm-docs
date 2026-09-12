> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontstylisticclass](https://developer.apple.com/documentation/coretext/ctfontstylisticclass)

# CTFontStylisticClass (Swift)

**Framework:** Core Text  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The stylistic class values of the font.

## Declaration

```swift
struct CTFontStylisticClass
```

<a id="overview"></a>

## Overview

`CTFontStylisticClass` identifies certain stylistic qualities of the font. These values correspond closely to the font class values in the OpenType OS/2 table. The class values are bundled in the upper four bits of the [CTFontSymbolicTraits](ctfontsymbolictraits.md) and can be obtained via [classMaskTrait](ctfontsymbolictraits/classmasktrait.md).

## Topics

### Initializers

- [init(rawValue:)](ctfontstylisticclass/init%28rawvalue_%29.md): Creates a stylistic class structure with the specified raw value.

### Stylistic Classes

- [classOldStyleSerifs](ctfontstylisticclass/classoldstyleserifs.md): A font style based on the Latin printing style of the 15th to 17th century.
- [classTransitionalSerifs](ctfontstylisticclass/classtransitionalserifs.md): A font style based on the Latin printing style of the 18th to 19th century.
- [classModernSerifs](ctfontstylisticclass/classmodernserifs.md): A font style based on the Latin printing style of the 20th century.
- [classClarendonSerifs](ctfontstylisticclass/classclarendonserifs.md): A font style variation of the Oldstyle Serifs and the Transitional Serifs.
- [classSlabSerifs](ctfontstylisticclass/classslabserifs.md): A font style characterized by serifs with a square transition between the strokes and the serifs (no brackets).
- [classFreeformSerifs](ctfontstylisticclass/classfreeformserifs.md): A font style that includes serifs but expresses a design freedom that doesn’t generally fit within the other serif design classifications.
- [classSansSerif](ctfontstylisticclass/classsansserif.md): A font style that includes most basic letter forms (excluding Scripts and Ornamentals) that do not have serifs on the strokes.
- [classOrnamentals](ctfontstylisticclass/classornamentals.md): A font style that includes highly decorated or stylized character shapes such as those typically used in headlines.
- [classScripts](ctfontstylisticclass/classscripts.md): A font style among those typefaces designed to simulate handwriting.
- [classSymbolic](ctfontstylisticclass/classsymbolic.md): A generally design-independent font style.

### Deprecated Constants

- [oldStyleSerifsClass](ctfontstylisticclass/oldstyleserifsclass.md): Deprecated. The font’s style is based on the Latin printing style of the 15th to 17th century.
- [transitionalSerifsClass](ctfontstylisticclass/transitionalserifsclass.md): Deprecated. The font’s style is based on the Latin printing style of the 18th to 19th century.
- [modernSerifsClass](ctfontstylisticclass/modernserifsclass.md): Deprecated. The font’s style is based on the Latin printing style of the 20th century.
- [clarendonSerifsClass](ctfontstylisticclass/clarendonserifsclass.md): Deprecated. The font’s style is a variation of the Oldstyle Serifs and the Transitional Serifs.
- [slabSerifsClass](ctfontstylisticclass/slabserifsclass.md): Deprecated. The font’s style is characterized by serifs with a square transition between the strokes and the serifs (no brackets).
- [freeformSerifsClass](ctfontstylisticclass/freeformserifsclass.md): Deprecated. The font’s style includes serifs but expresses a design freedom that doesn’t generally fit within the other serif design classifications.
- [sansSerifClass](ctfontstylisticclass/sansserifclass.md): Deprecated. The font’s style includes most basic letter forms (excluding Scripts and Ornamentals) that do not have serifs on the strokes.
- [ornamentalsClass](ctfontstylisticclass/ornamentalsclass.md): Deprecated. The font’s style includes highly decorated or stylized character shapes such as those typically used in headlines.
- [scriptsClass](ctfontstylisticclass/scriptsclass.md): Deprecated. The font’s style is among those typefaces designed to simulate handwriting.
- [symbolicClass](ctfontstylisticclass/symbolicclass.md): Deprecated. The font’s style is generally design independent.

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
- [CTFontSymbolicTraits](ctfontsymbolictraits.md): The symbolic representation of stylistic font attributes.

# CTFontStylisticClass (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The stylistic class values of the font.

## Declaration

```objectivec
enum CTFontStylisticClass : uint32_t;
```

<a id="overview"></a>

## Overview

`CTFontStylisticClass` identifies certain stylistic qualities of the font. These values correspond closely to the font class values in the OpenType OS/2 table. The class values are bundled in the upper four bits of the [CTFontSymbolicTraits](ctfontsymbolictraits.md) and can be obtained via [kCTFontClassMaskTrait](ctfontsymbolictraits/classmasktrait.md).

## Topics

### Stylistic Classes

- [kCTFontClassUnknown](ctfontstylisticclass/kctfontclassunknown.md): The font has no design classification.
- [kCTFontClassOldStyleSerifs](ctfontstylisticclass/classoldstyleserifs.md): A font style based on the Latin printing style of the 15th to 17th century.
- [kCTFontClassTransitionalSerifs](ctfontstylisticclass/classtransitionalserifs.md): A font style based on the Latin printing style of the 18th to 19th century.
- [kCTFontClassModernSerifs](ctfontstylisticclass/classmodernserifs.md): A font style based on the Latin printing style of the 20th century.
- [kCTFontClassClarendonSerifs](ctfontstylisticclass/classclarendonserifs.md): A font style variation of the Oldstyle Serifs and the Transitional Serifs.
- [kCTFontClassSlabSerifs](ctfontstylisticclass/classslabserifs.md): A font style characterized by serifs with a square transition between the strokes and the serifs (no brackets).
- [kCTFontClassFreeformSerifs](ctfontstylisticclass/classfreeformserifs.md): A font style that includes serifs but expresses a design freedom that doesn’t generally fit within the other serif design classifications.
- [kCTFontClassSansSerif](ctfontstylisticclass/classsansserif.md): A font style that includes most basic letter forms (excluding Scripts and Ornamentals) that do not have serifs on the strokes.
- [kCTFontClassOrnamentals](ctfontstylisticclass/classornamentals.md): A font style that includes highly decorated or stylized character shapes such as those typically used in headlines.
- [kCTFontClassScripts](ctfontstylisticclass/classscripts.md): A font style among those typefaces designed to simulate handwriting.
- [kCTFontClassSymbolic](ctfontstylisticclass/classsymbolic.md): A generally design-independent font style.

### Deprecated Constants

- [kCTFontUnknownClass](ctfontstylisticclass/kctfontunknownclass.md): Deprecated. The font has no design classification.
- [kCTFontOldStyleSerifsClass](ctfontstylisticclass/oldstyleserifsclass.md): Deprecated. The font’s style is based on the Latin printing style of the 15th to 17th century.
- [kCTFontTransitionalSerifsClass](ctfontstylisticclass/transitionalserifsclass.md): Deprecated. The font’s style is based on the Latin printing style of the 18th to 19th century.
- [kCTFontModernSerifsClass](ctfontstylisticclass/modernserifsclass.md): Deprecated. The font’s style is based on the Latin printing style of the 20th century.
- [kCTFontClarendonSerifsClass](ctfontstylisticclass/clarendonserifsclass.md): Deprecated. The font’s style is a variation of the Oldstyle Serifs and the Transitional Serifs.
- [kCTFontSlabSerifsClass](ctfontstylisticclass/slabserifsclass.md): Deprecated. The font’s style is characterized by serifs with a square transition between the strokes and the serifs (no brackets).
- [kCTFontFreeformSerifsClass](ctfontstylisticclass/freeformserifsclass.md): Deprecated. The font’s style includes serifs but expresses a design freedom that doesn’t generally fit within the other serif design classifications.
- [kCTFontSansSerifClass](ctfontstylisticclass/sansserifclass.md): Deprecated. The font’s style includes most basic letter forms (excluding Scripts and Ornamentals) that do not have serifs on the strokes.
- [kCTFontOrnamentalsClass](ctfontstylisticclass/ornamentalsclass.md): Deprecated. The font’s style includes highly decorated or stylized character shapes such as those typically used in headlines.
- [kCTFontScriptsClass](ctfontstylisticclass/scriptsclass.md): Deprecated. The font’s style is among those typefaces designed to simulate handwriting.
- [kCTFontSymbolicClass](ctfontstylisticclass/symbolicclass.md): Deprecated. The font’s style is generally design independent.

## See Also

### Accessing Font Traits

- [Font Traits](font-traits.md): The keys for accessing font traits from a font descriptor.
- [Font Class Mask Shift Constants](font-class-mask-shift-constants.md): These constants represent the font class mask shift.
- [CTFontSymbolicTraits](ctfontsymbolictraits.md): The symbolic representation of stylistic font attributes.
