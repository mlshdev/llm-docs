> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager-deprecated-symbols](https://developer.apple.com/documentation/appkit/nslayoutmanager-deprecated-symbols)

# Deprecated Symbols (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Methods

- [showCGGlyphs(\_:positions:count:font:matrix:attributes:in:)](nslayoutmanager/showcgglyphs%28__positions_count_font_matrix_attributes_in_%29.md): Deprecated. Renders the glyphs at the specified positions, using the specified attributes.
- [invalidateGlyphs(onLayoutInvalidationForGlyphRange:)](nslayoutmanager/invalidateglyphs%28onlayoutinvalidationforglyphrange_%29.md): Deprecated. Specifies explicitly when portions of the glyph stream depend on layout.
- [invalidateLayout(forCharacterRange:isSoft:actualCharacterRange:)](nslayoutmanager/invalidatelayout%28forcharacterrange_issoft_actualcharacterrange_%29.md): Deprecated. Invalidates the layout information for the glyphs mapped to the given range of characters.
- [textStorage(\_:edited:range:changeInLength:invalidatedRange:)](nslayoutmanager/textstorage%28__edited_range_changeinlength_invalidatedrange_%29.md): Deprecated. Invalidates glyph and layout information for a portion of the text in the given text storage object.
- [insertGlyph(\_:atGlyphIndex:characterIndex:)](nslayoutmanager/insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Inserts a single glyph into the glyph stream at the given index and maps it to the character at the given character index.
- [insertGlyphs(\_:length:forStartingGlyphAt:characterIndex:)](nslayoutmanager/insertglyphs%28__length_forstartingglyphat_characterindex_%29.md): Deprecated. Inserts the given glyphs into the glyph cache at the given index and maps them to characters beginning at the given character index.
- [glyph(at:)](nslayoutmanager/glyph%28at_%29.md): Deprecated. Returns the glyph at the specified index.
- [glyph(at:isValidIndex:)](nslayoutmanager/glyph%28at_isvalidindex_%29.md): Deprecated. Returns the glyph at a specified index, and optionally returns a flag indicating whether the requested index is valid.
- [replaceGlyph(at:withGlyph:)](nslayoutmanager/replaceglyph%28at_withglyph_%29.md): Deprecated. Replaces the glyph at the given index with a new glyph.
- [getGlyphs(\_:range:)](nslayoutmanager/getglyphs%28__range_%29.md): Deprecated. Fills the passed-in buffer with a sequence of glyphs.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:)](nslayoutmanager/getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_%29.md): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:)](nslayoutmanager/getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [deleteGlyphs(in:)](nslayoutmanager/deleteglyphs%28in_%29.md): Deprecated. Deletes the glyphs in the given range from the receiver’s glyph store.
- [setCharacterIndex(\_:forGlyphAt:)](nslayoutmanager/setcharacterindex%28__forglyphat_%29.md): Deprecated. Sets the index of the character corresponding to the glyph at the given glyph index.
- [intAttribute(\_:forGlyphAt:)](nslayoutmanager/intattribute%28__forglyphat_%29.md): Deprecated. Returns the value of the attribute identified by the given attribute tag for the glyph at the given index.
- [setIntAttribute(\_:value:forGlyphAt:)](nslayoutmanager/setintattribute%28__value_forglyphat_%29.md): Deprecated. Sets a custom attribute value for a given glyph.
- [setLocations(\_:startingGlyphIndexes:count:forGlyphRange:)](nslayoutmanager/setlocations%28__startingglyphindexes_count_forglyphrange_%29.md): Deprecated. Sets locations for many glyph ranges at once.
- [rectArray(forCharacterRange:withinSelectedCharacterRange:in:rectCount:)](nslayoutmanager/rectarray%28forcharacterrange_withinselectedcharacterrange_in_rectcount_%29.md): Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given character range.
- [rectArray(forGlyphRange:withinSelectedGlyphRange:in:rectCount:)](nslayoutmanager/rectarray%28forglyphrange_withinselectedglyphrange_in_rectcount_%29.md): Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given glyph range.
- [substituteFont(for:)](nslayoutmanager/substitutefont%28for_%29.md): Deprecated. Replaces the specified font with a suitable screen font if one is available.

### Properties

- [hyphenationFactor](nslayoutmanager/hyphenationfactor.md): Deprecated. The threshold controlling when hyphenation is done.
- [usesScreenFonts](nslayoutmanager/usesscreenfonts.md): Deprecated. A Boolean that controls using screen fonts to calculate layout and display text.

# Deprecated Symbols (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Methods

- [showCGGlyphs:positions:count:font:matrix:attributes:inContext:](nslayoutmanager/showcgglyphs%28__positions_count_font_matrix_attributes_in_%29.md): Deprecated. Renders the glyphs at the specified positions, using the specified attributes.
- [invalidateGlyphsOnLayoutInvalidationForGlyphRange:](nslayoutmanager/invalidateglyphs%28onlayoutinvalidationforglyphrange_%29.md): Deprecated. Specifies explicitly when portions of the glyph stream depend on layout.
- [invalidateLayoutForCharacterRange:isSoft:actualCharacterRange:](nslayoutmanager/invalidatelayout%28forcharacterrange_issoft_actualcharacterrange_%29.md): Deprecated. Invalidates the layout information for the glyphs mapped to the given range of characters.
- [textStorage:edited:range:changeInLength:invalidatedRange:](nslayoutmanager/textstorage%28__edited_range_changeinlength_invalidatedrange_%29.md): Deprecated. Invalidates glyph and layout information for a portion of the text in the given text storage object.
- [insertGlyph:atGlyphIndex:characterIndex:](nslayoutmanager/insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Inserts a single glyph into the glyph stream at the given index and maps it to the character at the given character index.
- [insertGlyphs:length:forStartingGlyphAtIndex:characterIndex:](nslayoutmanager/insertglyphs%28__length_forstartingglyphat_characterindex_%29.md): Deprecated. Inserts the given glyphs into the glyph cache at the given index and maps them to characters beginning at the given character index.
- [glyphAtIndex:](nslayoutmanager/glyph%28at_%29.md): Deprecated. Returns the glyph at the specified index.
- [glyphAtIndex:isValidIndex:](nslayoutmanager/glyph%28at_isvalidindex_%29.md): Deprecated. Returns the glyph at a specified index, and optionally returns a flag indicating whether the requested index is valid.
- [replaceGlyphAtIndex:withGlyph:](nslayoutmanager/replaceglyph%28at_withglyph_%29.md): Deprecated. Replaces the glyph at the given index with a new glyph.
- [getGlyphs:range:](nslayoutmanager/getglyphs%28__range_%29.md): Deprecated. Fills the passed-in buffer with a sequence of glyphs.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:](nslayoutmanager/getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_%29.md): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:](nslayoutmanager/getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [deleteGlyphsInRange:](nslayoutmanager/deleteglyphs%28in_%29.md): Deprecated. Deletes the glyphs in the given range from the receiver’s glyph store.
- [setCharacterIndex:forGlyphAtIndex:](nslayoutmanager/setcharacterindex%28__forglyphat_%29.md): Deprecated. Sets the index of the character corresponding to the glyph at the given glyph index.
- [intAttribute:forGlyphAtIndex:](nslayoutmanager/intattribute%28__forglyphat_%29.md): Deprecated. Returns the value of the attribute identified by the given attribute tag for the glyph at the given index.
- [setIntAttribute:value:forGlyphAtIndex:](nslayoutmanager/setintattribute%28__value_forglyphat_%29.md): Deprecated. Sets a custom attribute value for a given glyph.
- [setLocations:startingGlyphIndexes:count:forGlyphRange:](nslayoutmanager/setlocations%28__startingglyphindexes_count_forglyphrange_%29.md): Deprecated. Sets locations for many glyph ranges at once.
- [rectArrayForCharacterRange:withinSelectedCharacterRange:inTextContainer:rectCount:](nslayoutmanager/rectarray%28forcharacterrange_withinselectedcharacterrange_in_rectcount_%29.md): Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given character range.
- [rectArrayForGlyphRange:withinSelectedGlyphRange:inTextContainer:rectCount:](nslayoutmanager/rectarray%28forglyphrange_withinselectedglyphrange_in_rectcount_%29.md): Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given glyph range.
- [substituteFontForFont:](nslayoutmanager/substitutefont%28for_%29.md): Deprecated. Replaces the specified font with a suitable screen font if one is available.
- [showPackedGlyphs:length:glyphRange:atPoint:font:color:printingAdjustment:](nslayoutmanager/showpackedglyphs_length_glyphrange_atpoint_font_color_printingadjustment_.md): Deprecated. Draws a range of glyphs.

### Properties

- [hyphenationFactor](nslayoutmanager/hyphenationfactor.md): Deprecated. The threshold controlling when hyphenation is done.
- [usesScreenFonts](nslayoutmanager/usesscreenfonts.md): Deprecated. A Boolean that controls using screen fonts to calculate layout and display text.

### Types

- [NSGlyphInscription](nsglyphinscription.md): Deprecated. Constants that specify how a glyph is laid out relative to the previous glyph.
