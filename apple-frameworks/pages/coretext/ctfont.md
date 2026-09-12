> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfont](https://developer.apple.com/documentation/coretext/ctfont)

# CTFont (Swift)

**Framework:** Core Text  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A font object.

## Declaration

```swift
class CTFont
```

<a id="overview"></a>

## Overview

The `CTFont` opaque type represents a Core Text font object.

Font objects represent fonts to an application, providing access to characteristics of the font, such as point size, transform matrix, and other attributes. Fonts provide assistance in laying out glyphs relative to one another and are used to establish the current font when drawing in a graphics context.

## Topics

### Creating Fonts

- [CTFontCreateWithName(\_:\_:\_:)](ctfontcreatewithname%28______%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithNameAndOptions(\_:\_:\_:\_:)](ctfontcreatewithnameandoptions%28________%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithFontDescriptor(\_:\_:\_:)](ctfontcreatewithfontdescriptor%28______%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateWithFontDescriptorAndOptions(\_:\_:\_:\_:)](ctfontcreatewithfontdescriptorandoptions%28________%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateUIFontForLanguage(\_:\_:\_:)](ctfontcreateuifontforlanguage%28______%29.md): Returns the special user-interface font for the given language and user-interface type.
- [CTFontCreateCopyWithAttributes(\_:\_:\_:\_:)](ctfontcreatecopywithattributes%28________%29.md): Returns a new font with additional attributes based on the original font.
- [CTFontCreateCopyWithSymbolicTraits(\_:\_:\_:\_:\_:)](ctfontcreatecopywithsymbolictraits%28__________%29.md): Returns a new font in the same font family as the original with the specified symbolic traits.
- [CTFontCreateCopyWithFamily(\_:\_:\_:\_:)](ctfontcreatecopywithfamily%28________%29.md): Returns a new font in the specified family based on the traits of the original font.
- [CTFontCreateForString(\_:\_:\_:)](ctfontcreateforstring%28______%29.md): Returns a font reference that most accurately maps the string range based on the current font.
- [CTFontCreateForStringWithLanguage(\_:\_:\_:\_:)](ctfontcreateforstringwithlanguage%28________%29.md): Returns a font reference that most accurately maps the string range based on the current font and language.

### Getting Font Data

- [CTFontCopyFontDescriptor(\_:)](ctfontcopyfontdescriptor%28__%29.md): Returns the normalized font descriptor for the given font reference.
- [CTFontCopyAttribute(\_:\_:)](ctfontcopyattribute%28____%29.md): Returns the value associated with an arbitrary attribute of the given font.
- [CTFontGetSize(\_:)](ctfontgetsize%28__%29.md): Returns the point size of the given font.
- [CTFontGetMatrix(\_:)](ctfontgetmatrix%28__%29.md): Returns the transformation matrix of the given font.
- [CTFontGetSymbolicTraits(\_:)](ctfontgetsymbolictraits%28__%29.md): Returns the symbolic traits of the given font.
- [CTFontCopyTraits(\_:)](ctfontcopytraits%28__%29.md): Returns the traits dictionary of the given font.
- [CTFontCopyDefaultCascadeListForLanguages(\_:\_:)](ctfontcopydefaultcascadelistforlanguages%28____%29.md): Retrieves an ordered list of font substitution preferences.

### Getting Font Names

- [CTFontCopyPostScriptName(\_:)](ctfontcopypostscriptname%28__%29.md): Returns the PostScript name of the given font.
- [CTFontCopyFamilyName(\_:)](ctfontcopyfamilyname%28__%29.md): Returns the family name of the given font.
- [CTFontCopyFullName(\_:)](ctfontcopyfullname%28__%29.md): Returns the full name of the given font.
- [CTFontCopyDisplayName(\_:)](ctfontcopydisplayname%28__%29.md): Returns the display name of the given font.
- [CTFontCopyName(\_:\_:)](ctfontcopyname%28____%29.md): Returns a reference to the requested name of the given font.
- [CTFontCopyLocalizedName(\_:\_:\_:)](ctfontcopylocalizedname%28______%29.md): Returns a reference to a localized name for the given font.

### Working With Encoding

- [CTFontCopyCharacterSet(\_:)](ctfontcopycharacterset%28__%29.md): Returns the Unicode character set of the font.
- [CTFontGetStringEncoding(\_:)](ctfontgetstringencoding%28__%29.md): Returns the best string encoding for legacy format support.
- [CTFontCopySupportedLanguages(\_:)](ctfontcopysupportedlanguages%28__%29.md): Returns an array of languages supported by the font.

### Getting Font Metrics

- [CTFontGetAscent(\_:)](ctfontgetascent%28__%29.md): Returns the scaled font-ascent metric of the given font.
- [CTFontGetDescent(\_:)](ctfontgetdescent%28__%29.md): Returns the scaled font-descent metric of the given font.
- [CTFontGetLeading(\_:)](ctfontgetleading%28__%29.md): Returns the scaled font-leading metric of the given font.
- [CTFontGetUnitsPerEm(\_:)](ctfontgetunitsperem%28__%29.md): Returns the units-per-em metric of the given font.
- [CTFontGetGlyphCount(\_:)](ctfontgetglyphcount%28__%29.md): Returns the number of glyphs of the given font.
- [CTFontGetBoundingBox(\_:)](ctfontgetboundingbox%28__%29.md): Returns the scaled bounding box of the given font.
- [CTFontGetUnderlinePosition(\_:)](ctfontgetunderlineposition%28__%29.md): Returns the scaled underline position of the given font.
- [CTFontGetUnderlineThickness(\_:)](ctfontgetunderlinethickness%28__%29.md): Returns the scaled underline-thickness metric of the given font.
- [CTFontGetSlantAngle(\_:)](ctfontgetslantangle%28__%29.md): Returns the slant angle of the given font.
- [CTFontGetCapHeight(\_:)](ctfontgetcapheight%28__%29.md): Returns the cap-height metric of the given font.
- [CTFontGetXHeight(\_:)](ctfontgetxheight%28__%29.md): Returns the x-height metric of the given font.

### Getting Glyph Data

- [CTFontCreatePathForGlyph(\_:\_:\_:)](ctfontcreatepathforglyph%28______%29.md): Creates a path for the specified glyph.
- [CTFontGetGlyphWithName(\_:\_:)](ctfontgetglyphwithname%28____%29.md): Returns the glyph for the specified name.
- [CTFontGetBoundingRectsForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetboundingrectsforglyphs%28__________%29.md): Calculates the bounding rects for an array of glyphs and returns the overall bounding rectangle for the glyph run.
- [CTFontGetAdvancesForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetadvancesforglyphs%28__________%29.md): Calculates the advances for an array of glyphs and returns the summed advance.
- [CTFontGetOpticalBoundsForGlyphs(\_:\_:\_:\_:\_:)](ctfontgetopticalboundsforglyphs%28__________%29.md): Calculates the optical bounds for an array of glyphs and returns the overall optical bounds for the run.
- [CTFontGetVerticalTranslationsForGlyphs(\_:\_:\_:\_:)](ctfontgetverticaltranslationsforglyphs%28________%29.md): Calculates the offset from the default (horizontal) origin to the vertical origin for an array of glyphs.

### Working With Font Variations

- [CTFontCopyVariationAxes(\_:)](ctfontcopyvariationaxes%28__%29.md): Returns an array of variation axes.
- [CTFontCopyVariation(\_:)](ctfontcopyvariation%28__%29.md): Returns a variation dictionary from the font reference.

### Getting Font Features

- [CTFontCopyFeatures(\_:)](ctfontcopyfeatures%28__%29.md): Returns an array of font features.
- [CTFontCopyFeatureSettings(\_:)](ctfontcopyfeaturesettings%28__%29.md): Returns an array of font feature-setting tuples.

### Working with Glyphs

- [CTFontGetGlyphsForCharacters(\_:\_:\_:\_:)](ctfontgetglyphsforcharacters%28________%29.md): Performs basic character-to-glyph mapping.
- [CTFontDrawGlyphs(\_:\_:\_:\_:\_:)](ctfontdrawglyphs%28__________%29.md): Renders the given glyphs of a font at the specified positions in the supplied graphics context.
- [CTFontGetLigatureCaretPositions(\_:\_:\_:\_:)](ctfontgetligaturecaretpositions%28________%29.md): Returns caret positions within a glyph.

### Converting Fonts

- [CTFontCopyGraphicsFont(\_:\_:)](ctfontcopygraphicsfont%28____%29.md): Returns a Core Graphics font reference and attributes.
- [CTFontCreateWithGraphicsFont(\_:\_:\_:\_:)](ctfontcreatewithgraphicsfont%28________%29.md): Creates a new font reference from an existing Core Graphics font reference.
- [CTFontGetPlatformFont(\_:\_:)](ctfontgetplatformfont%28____%29.md): Deprecated. Returns an ATS font reference and attributes.
- [CTFontCreateWithPlatformFont(\_:\_:\_:\_:)](ctfontcreatewithplatformfont%28________%29.md): Deprecated. Creates a new font reference from an ATS font reference.
- [CTFontCreateWithQuickdrawInstance(\_:\_:\_:\_:)](ctfontcreatewithquickdrawinstance%28________%29.md): Deprecated. Returns a font reference for the given QuickDraw instance.

### Getting Font Table Data

- [CTFontCopyAvailableTables(\_:\_:)](ctfontcopyavailabletables%28____%29.md): Returns an array of font table tags.
- [CTFontCopyTable(\_:\_:\_:)](ctfontcopytable%28______%29.md): Returns a reference to the font table data.

### Getting the Type Identifier

- [CTFontGetTypeID()](ctfontgettypeid%28%29.md): Returns the type identifier for Core Text font references.

### Global Variables

- [Name Specifier Constants](name-specifier-constants.md): Name specifier constants provide access to the different names associated with a font.
- [Font Variation Axis Dictionary Keys](font-variation-axis-dictionary-keys.md): These constants provide keys to font variation axis dictionary values.
- [Font Feature Constants](font-feature-constants.md): These constants provide keys to font feature dictionary values.

### Enumerations

- [CTFontUIFontType](ctfontuifonttype.md): Constants that represent the specific user-interface purpose to specify for font creation.
- [CTFontTableTag](ctfonttabletag.md): Font table tags provide access to font table data.
- [CTFontTableOptions](ctfonttableoptions.md): Constants that describe font table options.
- [CTFontOptions](ctfontoptions.md): Options for font creation and descriptor matching.

### Initializers

- [init(\_:size:)](ctfont/init%28__size_%29-3do9m.md)
- [init(\_:size:)](ctfont/init%28__size_%29-6lcja.md)
- [init(\_:size:)](ctfont/init%28__size_%29-8bj7b.md)
- [init(\_:size:language:)](ctfont/init%28__size_language_%29.md)
- [init(\_:transform:)](ctfont/init%28__transform_%29-3sscp.md)
- [init(\_:transform:)](ctfont/init%28__transform_%29-a23v.md)
- [init(font:string:range:)](ctfont/init%28font_string_range_%29.md)
- [init(font:string:range:language:)](ctfont/init%28font_string_range_language_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Opaque Types

- [CTFontCollection](ctfontcollection.md): A font collection.
- [CTFontDescriptor](ctfontdescriptor.md): A font descriptor.
- [CTFrame](ctframe.md): A frame.
- [CTFramesetter](ctframesetter.md): Generate text frames.
- [CTGlyphInfo](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTLine](ctline.md): A line of text.
- [CTParagraphStyle](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRun](ctrun.md): A glyph run.
- [CTRunDelegate](ctrundelegate.md): A run delegate.
- [CTTextTab](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetter](cttypesetter.md): A typesetter which performs line layout.

# CTFontRef (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A font object.

## Declaration

```objectivec
typedef const struct __CTFont * CTFontRef;
```

<a id="overview"></a>

## Overview

The `CTFont` opaque type represents a Core Text font object.

Font objects represent fonts to an application, providing access to characteristics of the font, such as point size, transform matrix, and other attributes. Fonts provide assistance in laying out glyphs relative to one another and are used to establish the current font when drawing in a graphics context.

## Topics

### Creating Fonts

- [CTFontCreateWithName](ctfontcreatewithname%28______%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithNameAndOptions](ctfontcreatewithnameandoptions%28________%29.md): Returns a new font reference for the given name.
- [CTFontCreateWithFontDescriptor](ctfontcreatewithfontdescriptor%28______%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateWithFontDescriptorAndOptions](ctfontcreatewithfontdescriptorandoptions%28________%29.md): Returns a new font reference that best matches the given font descriptor.
- [CTFontCreateUIFontForLanguage](ctfontcreateuifontforlanguage%28______%29.md): Returns the special user-interface font for the given language and user-interface type.
- [CTFontCreateCopyWithAttributes](ctfontcreatecopywithattributes%28________%29.md): Returns a new font with additional attributes based on the original font.
- [CTFontCreateCopyWithSymbolicTraits](ctfontcreatecopywithsymbolictraits%28__________%29.md): Returns a new font in the same font family as the original with the specified symbolic traits.
- [CTFontCreateCopyWithFamily](ctfontcreatecopywithfamily%28________%29.md): Returns a new font in the specified family based on the traits of the original font.
- [CTFontCreateForString](ctfontcreateforstring%28______%29.md): Returns a font reference that most accurately maps the string range based on the current font.
- [CTFontCreateForStringWithLanguage](ctfontcreateforstringwithlanguage%28________%29.md): Returns a font reference that most accurately maps the string range based on the current font and language.

### Getting Font Data

- [CTFontCopyFontDescriptor](ctfontcopyfontdescriptor%28__%29.md): Returns the normalized font descriptor for the given font reference.
- [CTFontCopyAttribute](ctfontcopyattribute%28____%29.md): Returns the value associated with an arbitrary attribute of the given font.
- [CTFontGetSize](ctfontgetsize%28__%29.md): Returns the point size of the given font.
- [CTFontGetMatrix](ctfontgetmatrix%28__%29.md): Returns the transformation matrix of the given font.
- [CTFontGetSymbolicTraits](ctfontgetsymbolictraits%28__%29.md): Returns the symbolic traits of the given font.
- [CTFontCopyTraits](ctfontcopytraits%28__%29.md): Returns the traits dictionary of the given font.
- [CTFontCopyDefaultCascadeListForLanguages](ctfontcopydefaultcascadelistforlanguages%28____%29.md): Retrieves an ordered list of font substitution preferences.

### Getting Font Names

- [CTFontCopyPostScriptName](ctfontcopypostscriptname%28__%29.md): Returns the PostScript name of the given font.
- [CTFontCopyFamilyName](ctfontcopyfamilyname%28__%29.md): Returns the family name of the given font.
- [CTFontCopyFullName](ctfontcopyfullname%28__%29.md): Returns the full name of the given font.
- [CTFontCopyDisplayName](ctfontcopydisplayname%28__%29.md): Returns the display name of the given font.
- [CTFontCopyName](ctfontcopyname%28____%29.md): Returns a reference to the requested name of the given font.
- [CTFontCopyLocalizedName](ctfontcopylocalizedname%28______%29.md): Returns a reference to a localized name for the given font.

### Working With Encoding

- [CTFontCopyCharacterSet](ctfontcopycharacterset%28__%29.md): Returns the Unicode character set of the font.
- [CTFontGetStringEncoding](ctfontgetstringencoding%28__%29.md): Returns the best string encoding for legacy format support.
- [CTFontCopySupportedLanguages](ctfontcopysupportedlanguages%28__%29.md): Returns an array of languages supported by the font.

### Getting Font Metrics

- [CTFontGetAscent](ctfontgetascent%28__%29.md): Returns the scaled font-ascent metric of the given font.
- [CTFontGetDescent](ctfontgetdescent%28__%29.md): Returns the scaled font-descent metric of the given font.
- [CTFontGetLeading](ctfontgetleading%28__%29.md): Returns the scaled font-leading metric of the given font.
- [CTFontGetUnitsPerEm](ctfontgetunitsperem%28__%29.md): Returns the units-per-em metric of the given font.
- [CTFontGetGlyphCount](ctfontgetglyphcount%28__%29.md): Returns the number of glyphs of the given font.
- [CTFontGetBoundingBox](ctfontgetboundingbox%28__%29.md): Returns the scaled bounding box of the given font.
- [CTFontGetUnderlinePosition](ctfontgetunderlineposition%28__%29.md): Returns the scaled underline position of the given font.
- [CTFontGetUnderlineThickness](ctfontgetunderlinethickness%28__%29.md): Returns the scaled underline-thickness metric of the given font.
- [CTFontGetSlantAngle](ctfontgetslantangle%28__%29.md): Returns the slant angle of the given font.
- [CTFontGetCapHeight](ctfontgetcapheight%28__%29.md): Returns the cap-height metric of the given font.
- [CTFontGetXHeight](ctfontgetxheight%28__%29.md): Returns the x-height metric of the given font.

### Getting Glyph Data

- [CTFontCreatePathForGlyph](ctfontcreatepathforglyph%28______%29.md): Creates a path for the specified glyph.
- [CTFontGetGlyphWithName](ctfontgetglyphwithname%28____%29.md): Returns the glyph for the specified name.
- [CTFontGetBoundingRectsForGlyphs](ctfontgetboundingrectsforglyphs%28__________%29.md): Calculates the bounding rects for an array of glyphs and returns the overall bounding rectangle for the glyph run.
- [CTFontGetAdvancesForGlyphs](ctfontgetadvancesforglyphs%28__________%29.md): Calculates the advances for an array of glyphs and returns the summed advance.
- [CTFontGetOpticalBoundsForGlyphs](ctfontgetopticalboundsforglyphs%28__________%29.md): Calculates the optical bounds for an array of glyphs and returns the overall optical bounds for the run.
- [CTFontGetVerticalTranslationsForGlyphs](ctfontgetverticaltranslationsforglyphs%28________%29.md): Calculates the offset from the default (horizontal) origin to the vertical origin for an array of glyphs.

### Working With Font Variations

- [CTFontCopyVariationAxes](ctfontcopyvariationaxes%28__%29.md): Returns an array of variation axes.
- [CTFontCopyVariation](ctfontcopyvariation%28__%29.md): Returns a variation dictionary from the font reference.

### Getting Font Features

- [CTFontCopyFeatures](ctfontcopyfeatures%28__%29.md): Returns an array of font features.
- [CTFontCopyFeatureSettings](ctfontcopyfeaturesettings%28__%29.md): Returns an array of font feature-setting tuples.

### Working with Glyphs

- [CTFontGetGlyphsForCharacters](ctfontgetglyphsforcharacters%28________%29.md): Performs basic character-to-glyph mapping.
- [CTFontDrawGlyphs](ctfontdrawglyphs%28__________%29.md): Renders the given glyphs of a font at the specified positions in the supplied graphics context.
- [CTFontGetLigatureCaretPositions](ctfontgetligaturecaretpositions%28________%29.md): Returns caret positions within a glyph.

### Converting Fonts

- [CTFontCopyGraphicsFont](ctfontcopygraphicsfont%28____%29.md): Returns a Core Graphics font reference and attributes.
- [CTFontCreateWithGraphicsFont](ctfontcreatewithgraphicsfont%28________%29.md): Creates a new font reference from an existing Core Graphics font reference.
- [CTFontGetPlatformFont](ctfontgetplatformfont%28____%29.md): Deprecated. Returns an ATS font reference and attributes.
- [CTFontCreateWithPlatformFont](ctfontcreatewithplatformfont%28________%29.md): Deprecated. Creates a new font reference from an ATS font reference.
- [CTFontCreateWithQuickdrawInstance](ctfontcreatewithquickdrawinstance%28________%29.md): Deprecated. Returns a font reference for the given QuickDraw instance.

### Getting Font Table Data

- [CTFontCopyAvailableTables](ctfontcopyavailabletables%28____%29.md): Returns an array of font table tags.
- [CTFontCopyTable](ctfontcopytable%28______%29.md): Returns a reference to the font table data.

### Getting the Type Identifier

- [CTFontGetTypeID](ctfontgettypeid%28%29.md): Returns the type identifier for Core Text font references.

### Global Variables

- [Name Specifier Constants](name-specifier-constants.md): Name specifier constants provide access to the different names associated with a font.
- [Font Variation Axis Dictionary Keys](font-variation-axis-dictionary-keys.md): These constants provide keys to font variation axis dictionary values.
- [Font Feature Constants](font-feature-constants.md): These constants provide keys to font feature dictionary values.

### Enumerations

- [CTFontUIFontType](ctfontuifonttype.md): Constants that represent the specific user-interface purpose to specify for font creation.
- [CTFontTableTag](ctfonttabletag.md): Font table tags provide access to font table data.
- [CTFontTableOptions](ctfonttableoptions.md): Constants that describe font table options.
- [CTFontOptions](ctfontoptions.md): Options for font creation and descriptor matching.

## See Also

### Opaque Types

- [CTFontCollectionRef](ctfontcollection.md): A font collection.
- [CTFontDescriptorRef](ctfontdescriptor.md): A font descriptor.
- [CTFrameRef](ctframe.md): A frame.
- [CTFramesetterRef](ctframesetter.md): Generate text frames.
- [CTGlyphInfoRef](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTLineRef](ctline.md): A line of text.
- [CTParagraphStyleRef](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRunRef](ctrun.md): A glyph run.
- [CTRunDelegateRef](ctrundelegate.md): A run delegate.
- [CTTextTabRef](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetterRef](cttypesetter.md): A typesetter which performs line layout.
