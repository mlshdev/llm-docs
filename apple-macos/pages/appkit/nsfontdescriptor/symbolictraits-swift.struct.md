> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontdescriptor/symbolictraits-swift.struct](https://developer.apple.com/documentation/appkit/nsfontdescriptor/symbolictraits-swift.struct)

# NSFontDescriptor.SymbolicTraits (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

A symbolic description of the stylistic aspects of a font.

## Declaration

```swift
struct SymbolicTraits
```

## Topics

### Symbolic Traits

- [italic](symbolictraits-swift.struct/italic.md): The font’s style is italic.
- [bold](symbolictraits-swift.struct/bold.md): The font’s style is boldface.
- [expanded](symbolictraits-swift.struct/expanded.md): The font’s characters have an expanded width.
- [condensed](symbolictraits-swift.struct/condensed.md): The font’s characters have a condensed width.
- [monoSpace](symbolictraits-swift.struct/monospace.md): The font’s characters all have the same width.
- [vertical](symbolictraits-swift.struct/vertical.md): The font uses vertical glyph variants and metrics.
- [UIOptimized](symbolictraits-swift.struct/uioptimized.md): The font synthesizes appropriate attributes for user interface rendering, such as in control titles, if necessary.
- [tightLeading](symbolictraits-swift.struct/tightleading.md): The font uses a leading value that’s less than the default.
- [looseLeading](symbolictraits-swift.struct/looseleading.md): The font uses a leading value that’s greater than the default.
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

### Initializers

- [init(rawValue:)](symbolictraits-swift.struct/init%28rawvalue_%29.md)

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

### Related Documentation

- [UIFontDescriptor.SymbolicTraits](https://developer.apple.com/documentation/uikit/uifontdescriptor/symbolictraits-swift.struct): Constants that describe the stylistic aspects of a font.

### Font Data

- [NSFont](../nsfont.md): The representation of a font in an app.
- [NSFontDescriptor](../nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontTraitMask](../nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontFamilyClass](../nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontAssetRequest](../nsfontassetrequest.md)
- [NSFontSymbolicTraits](../nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.

# NSFontDescriptorSymbolicTraits (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

A symbolic description of the stylistic aspects of a font.

## Declaration

```objectivec
enum NSFontDescriptorSymbolicTraits : uint32_t;
```

## Topics

### Symbolic Traits

- [NSFontDescriptorTraitItalic](symbolictraits-swift.struct/italic.md): The font’s style is italic.
- [NSFontDescriptorTraitBold](symbolictraits-swift.struct/bold.md): The font’s style is boldface.
- [NSFontDescriptorTraitExpanded](symbolictraits-swift.struct/expanded.md): The font’s characters have an expanded width.
- [NSFontDescriptorTraitCondensed](symbolictraits-swift.struct/condensed.md): The font’s characters have a condensed width.
- [NSFontDescriptorTraitMonoSpace](symbolictraits-swift.struct/monospace.md): The font’s characters all have the same width.
- [NSFontDescriptorTraitVertical](symbolictraits-swift.struct/vertical.md): The font uses vertical glyph variants and metrics.
- [NSFontDescriptorTraitUIOptimized](symbolictraits-swift.struct/uioptimized.md): The font synthesizes appropriate attributes for user interface rendering, such as in control titles, if necessary.
- [NSFontDescriptorTraitTightLeading](symbolictraits-swift.struct/tightleading.md): The font uses a leading value that’s less than the default.
- [NSFontDescriptorTraitLooseLeading](symbolictraits-swift.struct/looseleading.md): The font uses a leading value that’s greater than the default.
- [NSFontDescriptorClassMask](symbolictraits-swift.struct/classmask.md): The font family class mask that you use to access font descriptor values.
- [NSFontDescriptorClassUnknown](../nsfontdescriptorsymbolictraits/nsfontdescriptorclassunknown.md): The font has no design classification.
- [NSFontDescriptorClassOldStyleSerifs](symbolictraits-swift.struct/classoldstyleserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 15th to 17th centuries.
- [NSFontDescriptorClassTransitionalSerifs](symbolictraits-swift.struct/classtransitionalserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 18th to 19th centuries.
- [NSFontDescriptorClassModernSerifs](symbolictraits-swift.struct/classmodernserifs.md): The font’s characters include serifs, and reflect the Latin printing style of the 20th century.
- [NSFontDescriptorClassClarendonSerifs](symbolictraits-swift.struct/classclarendonserifs.md): The font’s characters include variations of old style and transitional serifs.
- [NSFontDescriptorClassSlabSerifs](symbolictraits-swift.struct/classslabserifs.md): The font’s characters use square transitions, without brackets, between strokes and serifs.
- [NSFontDescriptorClassFreeformSerifs](symbolictraits-swift.struct/classfreeformserifs.md): The font’s characters include serifs, and don’t generally fit within other serif design classifications.
- [NSFontDescriptorClassSansSerif](symbolictraits-swift.struct/classsansserif.md): The font’s characters don’t have serifs.
- [NSFontDescriptorClassOrnamentals](symbolictraits-swift.struct/classornamentals.md): The font’s characters use highly decorated or stylized character shapes.
- [NSFontDescriptorClassScripts](symbolictraits-swift.struct/classscripts.md): The font’s characters simulate handwriting.
- [NSFontDescriptorClassSymbolic](symbolictraits-swift.struct/classsymbolic.md): The font’s characters consist mainly of symbols rather than letters and numbers.

### Enumeration Cases

- [NSFontDescriptorTraitEmphasized](../nsfontdescriptorsymbolictraits/nsfontdescriptortraitemphasized.md)

## See Also

### Related Documentation

- [UIFontDescriptorSymbolicTraits](https://developer.apple.com/documentation/uikit/uifontdescriptor/symbolictraits-swift.struct): Constants that describe the stylistic aspects of a font.

### Font Data

- [NSFont](../nsfont.md): The representation of a font in an app.
- [NSFontDescriptor](../nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontTraitMask](../nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontFamilyClass](../nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontAssetRequest](../nsfontassetrequest.md)
- [NSFontSymbolicTraits](../nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.
