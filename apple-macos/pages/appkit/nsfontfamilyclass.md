> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontfamilyclass](https://developer.apple.com/documentation/appkit/nsfontfamilyclass)

# NSFontFamilyClass (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that classify certain stylistic qualities of the font.

## Declaration

```swift
typealias NSFontFamilyClass = UInt32
```

<a id="Discussion"></a>

## Discussion

These values correspond closely to the font class values in the OpenType OS/2 table. The class values are bundled in the upper four bits of [NSFontSymbolicTraits](nsfontsymbolictraits.md) and can be accessed via [NSFontFamilyClassMask](nsfontfamilyclassmask.md). For more information about the specific meaning of each identifier, refer to the OpenType specification.

## Topics

### Constants

- [NSFontUnknownClass](nsfontunknownclass.md): A font with no design classification.
- [NSFontOldStyleSerifsClass](nsfontoldstyleserifsclass.md): A font where the style is based on the Latin printing style of the 15th to 17th century.
- [NSFontTransitionalSerifsClass](nsfonttransitionalserifsclass.md): A font where the style is based on the Latin printing style of the 18th to 19th century.
- [NSFontModernSerifsClass](nsfontmodernserifsclass.md): A font where the style is based on the Latin printing style of the 20th century.
- [NSFontClarendonSerifsClass](nsfontclarendonserifsclass.md): A font where the style is a variation of the Oldstyle Serifs and the Transitional Serifs.
- [NSFontSlabSerifsClass](nsfontslabserifsclass.md): A font where the style is characterized by serifs with a square transition between the strokes and the serifs (no brackets).
- [NSFontFreeformSerifsClass](nsfontfreeformserifsclass.md): A font where the style includes serifs, but it expresses a design freedom that does not generally fit within the other serif design classifications.
- [NSFontSansSerifClass](nsfontsansserifclass.md): A font where the style includes most basic letter forms (excluding Scripts and Ornamentals) that do not have serifs on the strokes.
- [NSFontOrnamentalsClass](nsfontornamentalsclass.md): A font where the style includes highly decorated or stylized character shapes such as those typically used in headlines.
- [NSFontScriptsClass](nsfontscriptsclass.md): A font where the style is among those typefaces designed to simulate handwriting.
- [NSFontSymbolicClass](nsfontsymbolicclass.md): A font where the style is generally design independent, making it suitable for special characters (icons, dingbats, technical symbols, and so on) that may be used equally well with any font.

## See Also

### Font Data

- [NSFont](nsfont.md): The representation of a font in an app.
- [NSFontDescriptor](nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontDescriptor.SymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontAssetRequest](nsfontassetrequest.md)
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.

# NSFontFamilyClass (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that classify certain stylistic qualities of the font.

## Declaration

```objectivec
typedef uint32_t NSFontFamilyClass;
```

<a id="Discussion"></a>

## Discussion

These values correspond closely to the font class values in the OpenType OS/2 table. The class values are bundled in the upper four bits of [NSFontSymbolicTraits](nsfontsymbolictraits.md) and can be accessed via [NSFontFamilyClassMask](nsfontfamilyclassmask.md). For more information about the specific meaning of each identifier, refer to the OpenType specification.

## Topics

### Constants

- [NSFontUnknownClass](nsfontunknownclass.md): A font with no design classification.
- [NSFontOldStyleSerifsClass](nsfontoldstyleserifsclass.md): A font where the style is based on the Latin printing style of the 15th to 17th century.
- [NSFontTransitionalSerifsClass](nsfonttransitionalserifsclass.md): A font where the style is based on the Latin printing style of the 18th to 19th century.
- [NSFontModernSerifsClass](nsfontmodernserifsclass.md): A font where the style is based on the Latin printing style of the 20th century.
- [NSFontClarendonSerifsClass](nsfontclarendonserifsclass.md): A font where the style is a variation of the Oldstyle Serifs and the Transitional Serifs.
- [NSFontSlabSerifsClass](nsfontslabserifsclass.md): A font where the style is characterized by serifs with a square transition between the strokes and the serifs (no brackets).
- [NSFontFreeformSerifsClass](nsfontfreeformserifsclass.md): A font where the style includes serifs, but it expresses a design freedom that does not generally fit within the other serif design classifications.
- [NSFontSansSerifClass](nsfontsansserifclass.md): A font where the style includes most basic letter forms (excluding Scripts and Ornamentals) that do not have serifs on the strokes.
- [NSFontOrnamentalsClass](nsfontornamentalsclass.md): A font where the style includes highly decorated or stylized character shapes such as those typically used in headlines.
- [NSFontScriptsClass](nsfontscriptsclass.md): A font where the style is among those typefaces designed to simulate handwriting.
- [NSFontSymbolicClass](nsfontsymbolicclass.md): A font where the style is generally design independent, making it suitable for special characters (icons, dingbats, technical symbols, and so on) that may be used equally well with any font.

## See Also

### Font Data

- [NSFont](nsfont.md): The representation of a font in an app.
- [NSFontDescriptor](nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontDescriptorSymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontAssetRequest](nsfontassetrequest.md)
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.
