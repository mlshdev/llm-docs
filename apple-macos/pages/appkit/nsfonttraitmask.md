> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfonttraitmask](https://developer.apple.com/documentation/appkit/nsfonttraitmask)

# NSFontTraitMask (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants for isolating specific traits of a font.

## Declaration

```swift
struct NSFontTraitMask
```

<a id="overview"></a>

## Overview

[NSFontManager](nsfontmanager.md) categorizes fonts according to a small set of traits. You can convert fonts by adding and removing individual traits, and you can get a font with a specific combination of traits.

These pairs of traits are mutually exclusive:

- [condensedFontMask](nsfonttraitmask/condensedfontmask.md) and  [expandedFontMask](nsfonttraitmask/expandedfontmask.md)
- [boldFontMask](nsfonttraitmask/boldfontmask.md) and  [unboldFontMask](nsfonttraitmask/unboldfontmask.md)
- [italicFontMask](nsfonttraitmask/italicfontmask.md) and  [unitalicFontMask](nsfonttraitmask/unitalicfontmask.md)

## Topics

### Trait Masks

- [boldFontMask](nsfonttraitmask/boldfontmask.md): A mask that specifies a bold font.
- [compressedFontMask](nsfonttraitmask/compressedfontmask.md): A mask that specifies a compressed font.
- [condensedFontMask](nsfonttraitmask/condensedfontmask.md): A mask that specifies a condensed font.
- [expandedFontMask](nsfonttraitmask/expandedfontmask.md): A mask that specifies an expanded font.
- [fixedPitchFontMask](nsfonttraitmask/fixedpitchfontmask.md): A mask that specifies a fixed pitch font.
- [italicFontMask](nsfonttraitmask/italicfontmask.md): A mask that specifies an italic font.
- [narrowFontMask](nsfonttraitmask/narrowfontmask.md): A mask that specifies a narrow font.
- [nonStandardCharacterSetFontMask](nsfonttraitmask/nonstandardcharactersetfontmask.md): A mask that specifies a font containing a non-standard character set.
- [posterFontMask](nsfonttraitmask/posterfontmask.md): A mask that specifies a poster-style font.
- [smallCapsFontMask](nsfonttraitmask/smallcapsfontmask.md): A mask that specifies a small-caps font.
- [unboldFontMask](nsfonttraitmask/unboldfontmask.md): A mask that specifies a font that is not bold.
- [unitalicFontMask](nsfonttraitmask/unitalicfontmask.md): A mask that specifies a font that is not italic.

### Initializers

- [init(rawValue:)](nsfonttraitmask/init%28rawvalue_%29.md)

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

### Font Data

- [NSFont](nsfont.md): The representation of a font in an app.
- [NSFontDescriptor](nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontDescriptor.SymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontAssetRequest](nsfontassetrequest.md)
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.

# NSFontTraitMask (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants for isolating specific traits of a font.

## Declaration

```objectivec
enum NSFontTraitMask : NSUInteger;
```

<a id="overview"></a>

## Overview

[NSFontManager](nsfontmanager.md) categorizes fonts according to a small set of traits. You can convert fonts by adding and removing individual traits, and you can get a font with a specific combination of traits.

These pairs of traits are mutually exclusive:

- [NSCondensedFontMask](nsfonttraitmask/condensedfontmask.md) and  [NSExpandedFontMask](nsfonttraitmask/expandedfontmask.md)
- [NSBoldFontMask](nsfonttraitmask/boldfontmask.md) and  [NSUnboldFontMask](nsfonttraitmask/unboldfontmask.md)
- [NSItalicFontMask](nsfonttraitmask/italicfontmask.md) and  [NSUnitalicFontMask](nsfonttraitmask/unitalicfontmask.md)

## Topics

### Trait Masks

- [NSBoldFontMask](nsfonttraitmask/boldfontmask.md): A mask that specifies a bold font.
- [NSCompressedFontMask](nsfonttraitmask/compressedfontmask.md): A mask that specifies a compressed font.
- [NSCondensedFontMask](nsfonttraitmask/condensedfontmask.md): A mask that specifies a condensed font.
- [NSExpandedFontMask](nsfonttraitmask/expandedfontmask.md): A mask that specifies an expanded font.
- [NSFixedPitchFontMask](nsfonttraitmask/fixedpitchfontmask.md): A mask that specifies a fixed pitch font.
- [NSItalicFontMask](nsfonttraitmask/italicfontmask.md): A mask that specifies an italic font.
- [NSNarrowFontMask](nsfonttraitmask/narrowfontmask.md): A mask that specifies a narrow font.
- [NSNonStandardCharacterSetFontMask](nsfonttraitmask/nonstandardcharactersetfontmask.md): A mask that specifies a font containing a non-standard character set.
- [NSPosterFontMask](nsfonttraitmask/posterfontmask.md): A mask that specifies a poster-style font.
- [NSSmallCapsFontMask](nsfonttraitmask/smallcapsfontmask.md): A mask that specifies a small-caps font.
- [NSUnboldFontMask](nsfonttraitmask/unboldfontmask.md): A mask that specifies a font that is not bold.
- [NSUnitalicFontMask](nsfonttraitmask/unitalicfontmask.md): A mask that specifies a font that is not italic.

## See Also

### Font Data

- [NSFont](nsfont.md): The representation of a font in an app.
- [NSFontDescriptor](nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontDescriptorSymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontAssetRequest](nsfontassetrequest.md)
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.
