> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont](https://developer.apple.com/documentation/appkit/nsfont)

# NSFont (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The representation of a font in an app.

## Declaration

```swift
class NSFont
```

<a id="overview"></a>

## Overview

[NSFont](nsfont.md) objects represent fonts to an app, providing access to characteristics of the font and assistance in laying out glyphs relative to one another. Font objects are also used to establish the current font for drawing text directly into a graphics context, using the [set()](nsfont/set%28%29.md) method.

You don’t create [NSFont](nsfont.md) objects using the `alloc` and `init` methods. Instead, you use either [init(descriptor:size:)](nsfont/init%28descriptor_size_%29.md) or [init(name:size:)](nsfont/init%28name_size_%29.md) to look up an available font and alter its size or matrix to your needs. These methods check for an existing font object with the specified characteristics, returning it if there is one. Otherwise, they look up the font data requested and create the appropriate object. [NSFont](nsfont.md) also defines a number of methods for getting standard system fonts, such as [systemFont(ofSize:)](nsfont/systemfont%28ofsize_%29.md), [userFont(ofSize:)](nsfont/userfont%28ofsize_%29.md), and [messageFont(ofSize:)](nsfont/messagefont%28ofsize_%29.md). To request the default size for these standard fonts, pass a negative number or `0` as the font size. For more information on system fonts, see Human Interface Guidelines \> [Typography](https://developer.apple.com/design/human-interface-guidelines/typography).

## Topics

### Creating Arbitrary Fonts

- [init(name:size:)](nsfont/init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [init(descriptor:size:)](nsfont/init%28descriptor_size_%29.md): Returns a font object for the specified font descriptor and font size.
- [init(descriptor:textTransform:)](nsfont/init%28descriptor_texttransform_%29.md): Returns a font object for the specified font descriptor and text transform.
- [init(name:matrix:)](nsfont/init%28name_matrix_%29.md): Returns a font object for the specified font name and matrix.

### Creating User Fonts

- [userFont(ofSize:)](nsfont/userfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), in the specified size.
- [userFixedPitchFont(ofSize:)](nsfont/userfixedpitchfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), when that font should be fixed-pitch, in the specified size.

### Creating System Fonts

- [preferredFont(forTextStyle:options:)](nsfont/preferredfont%28fortextstyle_options_%29.md): Returns the font associated with the text style.
- [systemFont(ofSize:)](nsfont/systemfont%28ofsize_%29.md): Returns the standard system font with the specified size.
- [systemFont(ofSize:weight:)](nsfont/systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFont(ofSize:)](nsfont/boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFont(ofSize:weight:)](nsfont/monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [monospacedDigitSystemFont(ofSize:weight:)](nsfont/monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns a version of the standard system font that contains monospaced digit glyphs.
- [systemFontSize](nsfont/systemfontsize.md): Returns the size of the standard system font.
- [smallSystemFontSize](nsfont/smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFont.Weight](nsfont/weight.md): System-defined font-weight values.
- [NSFont.TextStyle](nsfont/textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSFont.TextStyleOptionKey](nsfont/textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.

### Creating UI Element Fonts

- [labelFont(ofSize:)](nsfont/labelfont%28ofsize_%29.md): Returns the font used for standard interface labels in the specified size.
- [messageFont(ofSize:)](nsfont/messagefont%28ofsize_%29.md): Returns the font used for standard interface items, such as button labels, menu items, and so on, in the specified size.
- [menuBarFont(ofSize:)](nsfont/menubarfont%28ofsize_%29.md): Returns the font used for menu bar items, in the specified size.
- [menuFont(ofSize:)](nsfont/menufont%28ofsize_%29.md): Returns the font used for menu items, in the specified size.
- [controlContentFont(ofSize:)](nsfont/controlcontentfont%28ofsize_%29.md): Returns the font used for the content of controls in the specified size.
- [titleBarFont(ofSize:)](nsfont/titlebarfont%28ofsize_%29.md): Returns the font used for window title bars, in the specified size.
- [paletteFont(ofSize:)](nsfont/palettefont%28ofsize_%29.md): Returns the font used for palette window title bars, in the specified size.
- [toolTipsFont(ofSize:)](nsfont/tooltipsfont%28ofsize_%29.md): Returns the font used for tool tips labels, in the specified size.
- [labelFontSize](nsfont/labelfontsize.md): Returns the size of the standard label font.
- [systemFontSize(for:)](nsfont/systemfontsize%28for_%29.md): Returns the font size used for the specified control size.

### Using a Font to Draw

- [set()](nsfont/set%28%29.md): Sets this font as the font for the current graphics context.
- [set(in:)](nsfont/set%28in_%29.md): Sets this font as the font for the specified graphics context.

### Getting Font Metrics and Information

- [pointSize](nsfont/pointsize.md): The point size of the font.
- [coveredCharacterSet](nsfont/coveredcharacterset.md): The character set containing all of the nominal characters that the font can render.
- [fontDescriptor](nsfont/fontdescriptor.md): The font descriptor object for the font.
- [isFixedPitch](nsfont/isfixedpitch.md): A Boolean value indicating whether all glyphs in the font have the same advancement.
- [mostCompatibleStringEncoding](nsfont/mostcompatiblestringencoding.md): The string encoding that works best with the font.
- [Advanced Font Metrics](advanced-font-metrics.md): Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.

### Getting Information About Glyphs

- [numberOfGlyphs](nsfont/numberofglyphs.md): The number of glyphs in the font.
- [NSGlyph](nsglyph.md): The type used to specify glyphs.
- [NSControlGlyph](nscontrolglyph.md): The reserved code for a control glyph.
- [NSNullGlyph](nsnullglyph.md): The reserved code for a null glyph.

### Getting Font Names

- [displayName](nsfont/displayname.md): The name of the font, including family and face names, to use when displaying the font information to the user.
- [familyName](nsfont/familyname.md): The family name of the font—for example, “Times” or “Helvetica.”
- [fontName](nsfont/fontname.md): The full name of the font, as used in PostScript language code—for example, “Times-Roman” or “Helvetica-Oblique.”

### Setting User Fonts

- [setUser(\_:)](nsfont/setuser%28__%29.md): Sets the font used by default for documents and other text under the user’s control to the specified font.
- [setUserFixedPitch(\_:)](nsfont/setuserfixedpitch%28__%29.md): Sets the font used by default for documents and other text under the user’s control, when that font should be fixed-pitch, to the specified font.

### Vertical Fonts

- [isVertical](nsfont/isvertical.md): A Boolean value indicating whether the font is a vertical font.
- [vertical](nsfont/vertical-6ym79.md): A vertical version of the font.

### Responding to Font-Related Notifications

- [antialiasThresholdChangedNotification](nsfont/antialiasthresholdchangednotification.md): Posted after the threshold for antialiasing changes.
- [fontSetChangedNotification](nsfont/fontsetchangednotification.md): Posted after the currently-set font changes.

### Deprecated

- [Deprecated Symbols](nsfont-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Type Aliases

- [NSFont.Width](nsfont/width.md)

### Instance Properties

- [printer](nsfont/printer.md): The scalable PostScript font corresponding to current font.
- [renderingMode](nsfont/renderingmode.md): The rendering mode of the font.
- [screen](nsfont/screen.md): The bitmapped screen font for the current font.

### Instance Methods

- [advancement(forGlyph:)](nsfont/advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [boundingRect(forGlyph:)](nsfont/boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getAdvancements(\_:forGlyphs:count:)](nsfont/getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements(\_:forPackedGlyphs:length:)](nsfont/getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [getBoundingRects(\_:forGlyphs:count:)](nsfont/getboundingrects%28__forglyphs_count_%29.md): Deprecated. Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
- [glyph(withName:)](nsfont/glyph%28withname_%29.md): Returns the named encoded glyph, or –1 if the receiver contains no such glyph.
- [screenFont(with:)](nsfont/screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.
- [withSize(\_:)](nsfont/withsize%28__%29.md)

### Type Methods

- [systemFont(ofSize:weight:width:)](nsfont/systemfont%28ofsize_weight_width_%29.md)

### Structures

- [NSFont.FontSetChangedMessage](nsfont/fontsetchangedmessage.md)

### Initializers

- [init(coder:)](nsfont/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Font Data

- [NSFontDescriptor](nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontDescriptor.SymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontAssetRequest](nsfontassetrequest.md)
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.

# NSFont (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The representation of a font in an app.

## Declaration

```objectivec
@interface NSFont : NSObject
```

<a id="overview"></a>

## Overview

[NSFont](nsfont.md) objects represent fonts to an app, providing access to characteristics of the font and assistance in laying out glyphs relative to one another. Font objects are also used to establish the current font for drawing text directly into a graphics context, using the [set](nsfont/set%28%29.md) method.

You don’t create [NSFont](nsfont.md) objects using the `alloc` and `init` methods. Instead, you use either [fontWithDescriptor:size:](nsfont/init%28descriptor_size_%29.md) or [fontWithName:size:](nsfont/init%28name_size_%29.md) to look up an available font and alter its size or matrix to your needs. These methods check for an existing font object with the specified characteristics, returning it if there is one. Otherwise, they look up the font data requested and create the appropriate object. [NSFont](nsfont.md) also defines a number of methods for getting standard system fonts, such as [systemFontOfSize:](nsfont/systemfont%28ofsize_%29.md), [userFontOfSize:](nsfont/userfont%28ofsize_%29.md), and [messageFontOfSize:](nsfont/messagefont%28ofsize_%29.md). To request the default size for these standard fonts, pass a negative number or `0` as the font size. For more information on system fonts, see Human Interface Guidelines \> [Typography](https://developer.apple.com/design/human-interface-guidelines/typography).

## Topics

### Creating Arbitrary Fonts

- [fontWithName:size:](nsfont/init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [fontWithDescriptor:size:](nsfont/init%28descriptor_size_%29.md): Returns a font object for the specified font descriptor and font size.
- [fontWithDescriptor:textTransform:](nsfont/init%28descriptor_texttransform_%29.md): Returns a font object for the specified font descriptor and text transform.
- [fontWithName:matrix:](nsfont/init%28name_matrix_%29.md): Returns a font object for the specified font name and matrix.

### Creating User Fonts

- [userFontOfSize:](nsfont/userfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), in the specified size.
- [userFixedPitchFontOfSize:](nsfont/userfixedpitchfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), when that font should be fixed-pitch, in the specified size.

### Creating System Fonts

- [preferredFontForTextStyle:options:](nsfont/preferredfont%28fortextstyle_options_%29.md): Returns the font associated with the text style.
- [systemFontOfSize:](nsfont/systemfont%28ofsize_%29.md): Returns the standard system font with the specified size.
- [systemFontOfSize:weight:](nsfont/systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFontOfSize:](nsfont/boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFontOfSize:weight:](nsfont/monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [monospacedDigitSystemFontOfSize:weight:](nsfont/monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns a version of the standard system font that contains monospaced digit glyphs.
- [systemFontSize](nsfont/systemfontsize.md): Returns the size of the standard system font.
- [smallSystemFontSize](nsfont/smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFontWeight](nsfont/weight.md): System-defined font-weight values.
- [NSFontTextStyle](nsfont/textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSFontTextStyleOptionKey](nsfont/textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.

### Creating UI Element Fonts

- [labelFontOfSize:](nsfont/labelfont%28ofsize_%29.md): Returns the font used for standard interface labels in the specified size.
- [messageFontOfSize:](nsfont/messagefont%28ofsize_%29.md): Returns the font used for standard interface items, such as button labels, menu items, and so on, in the specified size.
- [menuBarFontOfSize:](nsfont/menubarfont%28ofsize_%29.md): Returns the font used for menu bar items, in the specified size.
- [menuFontOfSize:](nsfont/menufont%28ofsize_%29.md): Returns the font used for menu items, in the specified size.
- [controlContentFontOfSize:](nsfont/controlcontentfont%28ofsize_%29.md): Returns the font used for the content of controls in the specified size.
- [titleBarFontOfSize:](nsfont/titlebarfont%28ofsize_%29.md): Returns the font used for window title bars, in the specified size.
- [paletteFontOfSize:](nsfont/palettefont%28ofsize_%29.md): Returns the font used for palette window title bars, in the specified size.
- [toolTipsFontOfSize:](nsfont/tooltipsfont%28ofsize_%29.md): Returns the font used for tool tips labels, in the specified size.
- [labelFontSize](nsfont/labelfontsize.md): Returns the size of the standard label font.
- [systemFontSizeForControlSize:](nsfont/systemfontsize%28for_%29.md): Returns the font size used for the specified control size.

### Using a Font to Draw

- [set](nsfont/set%28%29.md): Sets this font as the font for the current graphics context.
- [setInContext:](nsfont/set%28in_%29.md): Sets this font as the font for the specified graphics context.

### Getting Font Metrics and Information

- [pointSize](nsfont/pointsize.md): The point size of the font.
- [coveredCharacterSet](nsfont/coveredcharacterset.md): The character set containing all of the nominal characters that the font can render.
- [fontDescriptor](nsfont/fontdescriptor.md): The font descriptor object for the font.
- [fixedPitch](nsfont/isfixedpitch.md): A Boolean value indicating whether all glyphs in the font have the same advancement.
- [mostCompatibleStringEncoding](nsfont/mostcompatiblestringencoding.md): The string encoding that works best with the font.
- [Advanced Font Metrics](advanced-font-metrics.md): Retrieve details about ascender and descender heights, glyph bounding rectangles, glyph advancements, and more.

### Getting Information About Glyphs

- [numberOfGlyphs](nsfont/numberofglyphs.md): The number of glyphs in the font.
- [NSGlyph](nsglyph.md): The type used to specify glyphs.
- [NSControlGlyph](nscontrolglyph.md): The reserved code for a control glyph.
- [NSNullGlyph](nsnullglyph.md): The reserved code for a null glyph.

### Getting Font Names

- [displayName](nsfont/displayname.md): The name of the font, including family and face names, to use when displaying the font information to the user.
- [familyName](nsfont/familyname.md): The family name of the font—for example, “Times” or “Helvetica.”
- [fontName](nsfont/fontname.md): The full name of the font, as used in PostScript language code—for example, “Times-Roman” or “Helvetica-Oblique.”

### Setting User Fonts

- [setUserFont:](nsfont/setuser%28__%29.md): Sets the font used by default for documents and other text under the user’s control to the specified font.
- [setUserFixedPitchFont:](nsfont/setuserfixedpitch%28__%29.md): Sets the font used by default for documents and other text under the user’s control, when that font should be fixed-pitch, to the specified font.

### Vertical Fonts

- [vertical](nsfont/isvertical.md): A Boolean value indicating whether the font is a vertical font.
- [verticalFont](nsfont/vertical-6ym79.md): A vertical version of the font.

### Responding to Font-Related Notifications

- [NSAntialiasThresholdChangedNotification](nsfont/antialiasthresholdchangednotification.md): Posted after the threshold for antialiasing changes.
- [NSFontSetChangedNotification](nsfont/fontsetchangednotification.md): Posted after the currently-set font changes.

### Deprecated

- [Deprecated Symbols](nsfont-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Type Aliases

- [NSFontWidth](nsfont/width.md)

### Instance Properties

- [printerFont](nsfont/printer.md): The scalable PostScript font corresponding to current font.
- [renderingMode](nsfont/renderingmode.md): The rendering mode of the font.
- [screenFont](nsfont/screen.md): The bitmapped screen font for the current font.

### Instance Methods

- [advancementForGlyph:](nsfont/advancement%28forglyph_%29.md): Deprecated. Returns the nominal spacing for the given glyph—the distance the current point moves after showing the glyph—accounting for the receiver’s size.
- [boundingRectForGlyph:](nsfont/boundingrect%28forglyph_%29.md): Deprecated. Returns the bounding rectangle for the specified glyph, scaled to the receiver’s size.
- [getAdvancements:forGlyphs:count:](nsfont/getadvancements%28__forglyphs_count_%29.md): Deprecated. Returns an array of the advancements for the specified glyphs rendered by the receiver.
- [getAdvancements:forPackedGlyphs:length:](nsfont/getadvancements%28__forpackedglyphs_length_%29.md): Deprecated. Returns an array of the advancements for the specified packed glyphs and rendered by the receiver.
- [getBoundingRects:forGlyphs:count:](nsfont/getboundingrects%28__forglyphs_count_%29.md): Deprecated. Returns an array of the bounding rectangles for the specified glyphs rendered by the receiver.
- [glyphWithName:](nsfont/glyph%28withname_%29.md): Returns the named encoded glyph, or –1 if the receiver contains no such glyph.
- [screenFontWithRenderingMode:](nsfont/screenfont%28with_%29.md): Returns a bitmapped screen font, when sent to a font object representing a scalable PostScript font, with the specified rendering mode, matching the receiver in typeface and matrix (or size), or `nil` if such a font can’t be found.
- [fontWithSize:](nsfont/withsize%28__%29.md)

### Type Methods

- [systemFontOfSize:weight:width:](nsfont/systemfont%28ofsize_weight_width_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Font Data

- [NSFontDescriptor](nsfontdescriptor.md): A dictionary of attributes that describe a font.
- [NSFontTraitMask](nsfonttraitmask.md): Constants for isolating specific traits of a font.
- [NSFontFamilyClass](nsfontfamilyclass.md): Constants that classify certain stylistic qualities of the font.
- [NSFontDescriptorSymbolicTraits](nsfontdescriptor/symbolictraits-swift.struct.md): A symbolic description of the stylistic aspects of a font.
- [NSFontAssetRequest](nsfontassetrequest.md)
- [NSFontSymbolicTraits](nsfontsymbolictraits.md): A symbolic description of stylistic aspects of a font.
