> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/typeface-information](https://developer.apple.com/documentation/appkit/typeface-information)

# Typeface Information (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Constants for type faces such as italic or bold.

<a id="overview"></a>

## Overview

Typeface information is specified by the lower 16 bits of `NSFontSymbolicTraits` using the following constants.

## Topics

### Constants

- [NSFontItalicTrait](nsfontitalictrait.md): The font’s typestyle is italic.
- [NSFontBoldTrait](nsfontboldtrait.md): The font’s typestyle is boldface.
- [NSFontExpandedTrait](nsfontexpandedtrait.md): The font’s typestyle is expanded. Expanded and condensed traits are mutually exclusive.
- [NSFontCondensedTrait](nsfontcondensedtrait.md): The font’s typestyle is condensed. Expanded and condensed traits are mutually exclusive.
- [NSFontMonoSpaceTrait](nsfontmonospacetrait.md): The font uses fixed-pitch glyphs if available. The font may have multiple glyph advances (many CJK glyphs contain two spaces).
- [NSFontVerticalTrait](nsfontverticaltrait.md): The font uses vertical glyph variants and metrics.
- [NSFontUIOptimizedTrait](nsfontuioptimizedtrait.md): The font synthesizes appropriate attributes for user interface rendering, such as control titles, if necessary.

## See Also

### Getting the Font Attributes

- [fontAttributes](nsfontdescriptor/fontattributes.md): The receiver’s dictionary of attributes.
- [object(forKey:)](nsfontdescriptor/object%28forkey_%29.md): Returns the font attribute specified by the given key.
- [NSFontDescriptor.AttributeName](nsfontdescriptor/attributename.md): Constants for the names of font attributes.
- [NSFontDescriptor.SymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [matrix](nsfontdescriptor/matrix.md): The current transform matrix of the receiver.
- [pointSize](nsfontdescriptor/pointsize.md): The point size of the receiver.
- [postscriptName](nsfontdescriptor/postscriptname.md): The PostScript name of the receiver.
- [NSFontDescriptor.FeatureKey](nsfontdescriptor/featurekey.md): Constants to use as keys to retrieve information about a font descriptor from its feature dictionary.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontFamilyClassMask](nsfontfamilyclassmask.md): Constant you use to access `NSFontFamilyClass` values in the upper four bits of `NSFontSymbolicTraits`.
- [NSFontDescriptor.VariationKey](nsfontdescriptor/variationkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.

# Typeface Information (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Constants for type faces such as italic or bold.

<a id="overview"></a>

## Overview

Typeface information is specified by the lower 16 bits of `NSFontSymbolicTraits` using the following constants.

## Topics

### Constants

- [NSFontItalicTrait](nsfontitalictrait.md): The font’s typestyle is italic.
- [NSFontBoldTrait](nsfontboldtrait.md): The font’s typestyle is boldface.
- [NSFontExpandedTrait](nsfontexpandedtrait.md): The font’s typestyle is expanded. Expanded and condensed traits are mutually exclusive.
- [NSFontCondensedTrait](nsfontcondensedtrait.md): The font’s typestyle is condensed. Expanded and condensed traits are mutually exclusive.
- [NSFontMonoSpaceTrait](nsfontmonospacetrait.md): The font uses fixed-pitch glyphs if available. The font may have multiple glyph advances (many CJK glyphs contain two spaces).
- [NSFontVerticalTrait](nsfontverticaltrait.md): The font uses vertical glyph variants and metrics.
- [NSFontUIOptimizedTrait](nsfontuioptimizedtrait.md): The font synthesizes appropriate attributes for user interface rendering, such as control titles, if necessary.

## See Also

### Getting the Font Attributes

- [fontAttributes](nsfontdescriptor/fontattributes.md): The receiver’s dictionary of attributes.
- [objectForKey:](nsfontdescriptor/object%28forkey_%29.md): Returns the font attribute specified by the given key.
- [NSFontDescriptorAttributeName](nsfontdescriptor/attributename.md): Constants for the names of font attributes.
- [NSFontDescriptorSymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [matrix](nsfontdescriptor/matrix.md): The current transform matrix of the receiver.
- [pointSize](nsfontdescriptor/pointsize.md): The point size of the receiver.
- [postscriptName](nsfontdescriptor/postscriptname.md): The PostScript name of the receiver.
- [NSFontDescriptorFeatureKey](nsfontdescriptor/featurekey.md): Constants to use as keys to retrieve information about a font descriptor from its feature dictionary.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontFamilyClassMask](nsfontfamilyclassmask.md): Constant you use to access `NSFontFamilyClass` values in the upper four bits of `NSFontSymbolicTraits`.
- [NSFontDescriptorVariationKey](nsfontdescriptor/variationkey.md): Constants that can be used as keys to retrieve information about a font descriptor from its variation axis dictionary.
