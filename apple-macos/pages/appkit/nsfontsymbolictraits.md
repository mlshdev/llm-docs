> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontsymbolictraits](https://developer.apple.com/documentation/appkit/nsfontsymbolictraits)

# NSFontSymbolicTraits (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A symbolic description of stylistic aspects of a font.

## Declaration

```swift
typealias NSFontSymbolicTraits = UInt32
```

<a id="Discussion"></a>

## Discussion

The upper 16 bits is used to describe appearance of the font (see [NSFontFamilyClass](nsfontfamilyclass.md)) whereas the lower 16 bits is used for typeface information (see [Typeface Information](typeface-information.md)). The font appearance information represented by the upper 16 bits can be used for stylistic font matching. The symbolic traits supersede the existing [NSFontTraitMask](nsfonttraitmask.md) type used by [NSFontManager](nsfontmanager.md). The corresponding values are kept compatible between [NSFontTraitMask](nsfonttraitmask.md) and [NSFontSymbolicTraits](nsfontsymbolictraits.md).

## See Also

### Font Data

- [NSFont](nsfont.md): The representation of a font in an app.
- [NSFontDescriptor](nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontDescriptor.SymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontAssetRequest](nsfontassetrequest.md)

# NSFontSymbolicTraits (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A symbolic description of stylistic aspects of a font.

## Declaration

```objectivec
typedef uint32_t NSFontSymbolicTraits;
```

<a id="Discussion"></a>

## Discussion

The upper 16 bits is used to describe appearance of the font (see [NSFontFamilyClass](nsfontfamilyclass.md)) whereas the lower 16 bits is used for typeface information (see [Typeface Information](typeface-information.md)). The font appearance information represented by the upper 16 bits can be used for stylistic font matching. The symbolic traits supersede the existing [NSFontTraitMask](nsfonttraitmask.md) type used by [NSFontManager](nsfontmanager.md). The corresponding values are kept compatible between [NSFontTraitMask](nsfonttraitmask.md) and [NSFontSymbolicTraits](nsfontsymbolictraits.md).

## See Also

### Font Data

- [NSFont](nsfont.md): The representation of a font in an app.
- [NSFontDescriptor](nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontDescriptorSymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontAssetRequest](nsfontassetrequest.md)
