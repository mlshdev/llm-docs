> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager-deprecated-symbols](https://developer.apple.com/documentation/uikit/nslayoutmanager-deprecated-symbols)

# Deprecated symbols (Swift)

**Framework:** UIKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Methods

- [showCGGlyphs(\_:positions:count:font:matrix:attributes:in:)](nslayoutmanager/showcgglyphs%28__positions_count_font_matrix_attributes_in_%29.md): Deprecated. Renders the glyphs at the specified positions, using the specified attributes.
- [invalidateGlyphs(onLayoutInvalidationForGlyphRange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/invalidateglyphs%28onlayoutinvalidationforglyphrange:%29): Deprecated. Specifies explicitly when portions of the glyph stream depend on layout.
- [invalidateLayout(forCharacterRange:isSoft:actualCharacterRange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/invalidatelayout%28forcharacterrange:issoft:actualcharacterrange:%29): Deprecated. Invalidates the layout information for the glyphs mapped to the given range of characters.
- [textStorage(\_:edited:range:changeInLength:invalidatedRange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/textstorage%28_:edited:range:changeinlength:invalidatedrange:%29): Deprecated. Invalidates glyph and layout information for a portion of the text in the given text storage object.
- [insertGlyph(\_:atGlyphIndex:characterIndex:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/insertglyph%28_:atglyphindex:characterindex:%29): Deprecated. Inserts a single glyph into the glyph stream at the given index and maps it to the character at the given character index.
- [insertGlyphs(\_:length:forStartingGlyphAt:characterIndex:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/insertglyphs%28_:length:forstartingglyphat:characterindex:%29): Deprecated. Inserts the given glyphs into the glyph cache at the given index and maps them to characters beginning at the given character index.
- [glyph(at:)](nslayoutmanager/glyph%28at_%29.md): Deprecated. Returns the glyph at the specified index.
- [glyph(at:isValidIndex:)](nslayoutmanager/glyph%28at_isvalidindex_%29.md): Deprecated. Returns the glyph at a specified index, and optionally returns a flag indicating whether the requested index is valid.
- [replaceGlyph(at:withGlyph:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/replaceglyph%28at:withglyph:%29): Deprecated. Replaces the glyph at the given index with a new glyph.
- [getGlyphs(\_:range:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/getglyphs%28_:range:%29): Deprecated. Fills the passed-in buffer with a sequence of glyphs.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/getglyphs%28in:glyphs:characterindexes:glyphinscriptions:elasticbits:%29): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/getglyphs%28in:glyphs:characterindexes:glyphinscriptions:elasticbits:bidilevels:%29): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [deleteGlyphs(in:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/deleteglyphs%28in:%29): Deprecated. Deletes the glyphs in the given range from the receiver’s glyph store.
- [setCharacterIndex(\_:forGlyphAt:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/setcharacterindex%28_:forglyphat:%29): Deprecated. Sets the index of the character corresponding to the glyph at the given glyph index.
- [intAttribute(\_:forGlyphAt:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/intattribute%28_:forglyphat:%29): Deprecated. Returns the value of the attribute identified by the given attribute tag for the glyph at the given index.
- [setIntAttribute(\_:value:forGlyphAt:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/setintattribute%28_:value:forglyphat:%29): Deprecated. Sets a custom attribute value for a given glyph.
- [setLocations(\_:startingGlyphIndexes:count:forGlyphRange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/setlocations%28_:startingglyphindexes:count:forglyphrange:%29): Deprecated. Sets locations for many glyph ranges at once.
- [rectArray(forCharacterRange:withinSelectedCharacterRange:in:rectCount:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/rectarray%28forcharacterrange:withinselectedcharacterrange:in:rectcount:%29): Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given character range.
- [rectArray(forGlyphRange:withinSelectedGlyphRange:in:rectCount:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/rectarray%28forglyphrange:withinselectedglyphrange:in:rectcount:%29): Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given glyph range.
- [substituteFont(for:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/substitutefont%28for:%29): Deprecated. Replaces the specified font with a suitable screen font if one is available.

### Properties

- [hyphenationFactor](nslayoutmanager/hyphenationfactor.md): Deprecated. The threshold controlling when hyphenation is done.
- [attributedString](nslayoutmanager-attributedstring.md): The text storage object from which the `NSGlyphGenerator` object procures characters for glyph generation.
- [layoutOptions](nslayoutmanager-layoutoptions.md): The layout manager’s current layout options.
- [usesScreenFonts](https://developer.apple.com/documentation/appkit/nslayoutmanager/usesscreenfonts): Deprecated. A Boolean that controls using screen fonts to calculate layout and display text.

### Types

- [Glyph Attributes](https://developer.apple.com/documentation/appkit/glyph-attributes): Attributes that are used only inside the glyph generation machinery, but must also be shared between components.

# Deprecated symbols (Objective-C)

**Framework:** UIKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Methods

- [showCGGlyphs:positions:count:font:matrix:attributes:inContext:](nslayoutmanager/showcgglyphs%28__positions_count_font_matrix_attributes_in_%29.md): Deprecated. Renders the glyphs at the specified positions, using the specified attributes.
- [invalidateGlyphsOnLayoutInvalidationForGlyphRange:](https://developer.apple.com/documentation/appkit/nslayoutmanager/invalidateglyphs%28onlayoutinvalidationforglyphrange:%29): Deprecated. Specifies explicitly when portions of the glyph stream depend on layout.
- [invalidateLayoutForCharacterRange:isSoft:actualCharacterRange:](https://developer.apple.com/documentation/appkit/nslayoutmanager/invalidatelayout%28forcharacterrange:issoft:actualcharacterrange:%29): Deprecated. Invalidates the layout information for the glyphs mapped to the given range of characters.
- [textStorage:edited:range:changeInLength:invalidatedRange:](https://developer.apple.com/documentation/appkit/nslayoutmanager/textstorage%28_:edited:range:changeinlength:invalidatedrange:%29): Deprecated. Invalidates glyph and layout information for a portion of the text in the given text storage object.
- [insertGlyph:atGlyphIndex:characterIndex:](https://developer.apple.com/documentation/appkit/nslayoutmanager/insertglyph%28_:atglyphindex:characterindex:%29): Deprecated. Inserts a single glyph into the glyph stream at the given index and maps it to the character at the given character index.
- [insertGlyphs:length:forStartingGlyphAtIndex:characterIndex:](https://developer.apple.com/documentation/appkit/nslayoutmanager/insertglyphs%28_:length:forstartingglyphat:characterindex:%29): Deprecated. Inserts the given glyphs into the glyph cache at the given index and maps them to characters beginning at the given character index.
- [glyphAtIndex:](nslayoutmanager/glyph%28at_%29.md): Deprecated. Returns the glyph at the specified index.
- [glyphAtIndex:isValidIndex:](nslayoutmanager/glyph%28at_isvalidindex_%29.md): Deprecated. Returns the glyph at a specified index, and optionally returns a flag indicating whether the requested index is valid.
- [replaceGlyphAtIndex:withGlyph:](https://developer.apple.com/documentation/appkit/nslayoutmanager/replaceglyph%28at:withglyph:%29): Deprecated. Replaces the glyph at the given index with a new glyph.
- [getGlyphs:range:](https://developer.apple.com/documentation/appkit/nslayoutmanager/getglyphs%28_:range:%29): Deprecated. Fills the passed-in buffer with a sequence of glyphs.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:](https://developer.apple.com/documentation/appkit/nslayoutmanager/getglyphs%28in:glyphs:characterindexes:glyphinscriptions:elasticbits:%29): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:](https://developer.apple.com/documentation/appkit/nslayoutmanager/getglyphs%28in:glyphs:characterindexes:glyphinscriptions:elasticbits:bidilevels:%29): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [deleteGlyphsInRange:](https://developer.apple.com/documentation/appkit/nslayoutmanager/deleteglyphs%28in:%29): Deprecated. Deletes the glyphs in the given range from the receiver’s glyph store.
- [setCharacterIndex:forGlyphAtIndex:](https://developer.apple.com/documentation/appkit/nslayoutmanager/setcharacterindex%28_:forglyphat:%29): Deprecated. Sets the index of the character corresponding to the glyph at the given glyph index.
- [intAttribute:forGlyphAtIndex:](https://developer.apple.com/documentation/appkit/nslayoutmanager/intattribute%28_:forglyphat:%29): Deprecated. Returns the value of the attribute identified by the given attribute tag for the glyph at the given index.
- [setIntAttribute:value:forGlyphAtIndex:](https://developer.apple.com/documentation/appkit/nslayoutmanager/setintattribute%28_:value:forglyphat:%29): Deprecated. Sets a custom attribute value for a given glyph.
- [setLocations:startingGlyphIndexes:count:forGlyphRange:](https://developer.apple.com/documentation/appkit/nslayoutmanager/setlocations%28_:startingglyphindexes:count:forglyphrange:%29): Deprecated. Sets locations for many glyph ranges at once.
- [rectArrayForCharacterRange:withinSelectedCharacterRange:inTextContainer:rectCount:](https://developer.apple.com/documentation/appkit/nslayoutmanager/rectarray%28forcharacterrange:withinselectedcharacterrange:in:rectcount:%29): Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given character range.
- [rectArrayForGlyphRange:withinSelectedGlyphRange:inTextContainer:rectCount:](https://developer.apple.com/documentation/appkit/nslayoutmanager/rectarray%28forglyphrange:withinselectedglyphrange:in:rectcount:%29): Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given glyph range.
- [substituteFontForFont:](https://developer.apple.com/documentation/appkit/nslayoutmanager/substitutefont%28for:%29): Deprecated. Replaces the specified font with a suitable screen font if one is available.
- [showPackedGlyphs:length:glyphRange:atPoint:font:color:printingAdjustment:](https://developer.apple.com/documentation/appkit/nslayoutmanager/showpackedglyphs:length:glyphrange:atpoint:font:color:printingadjustment:): Deprecated. Draws a range of glyphs.

### Properties

- [hyphenationFactor](nslayoutmanager/hyphenationfactor.md): Deprecated. The threshold controlling when hyphenation is done.
- [attributedString](nslayoutmanager-attributedstring.md): The text storage object from which the `NSGlyphGenerator` object procures characters for glyph generation.
- [layoutOptions](nslayoutmanager-layoutoptions.md): The layout manager’s current layout options.
- [usesScreenFonts](https://developer.apple.com/documentation/appkit/nslayoutmanager/usesscreenfonts): Deprecated. A Boolean that controls using screen fonts to calculate layout and display text.

### Types

- [Glyph Attributes](https://developer.apple.com/documentation/appkit/glyph-attributes): Attributes that are used only inside the glyph generation machinery, but must also be shared between components.
- [NSGlyphInscription](https://developer.apple.com/documentation/appkit/nsglyphinscription): Deprecated. Constants that specify how a glyph is laid out relative to the previous glyph.
