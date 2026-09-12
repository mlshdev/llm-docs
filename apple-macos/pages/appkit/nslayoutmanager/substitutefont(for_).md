> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/substitutefont(for:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/substitutefont(for:))

# substituteFont(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Replaces the specified font with a suitable screen font if one is available.

## Declaration

```swift
func substituteFont(for originalFont: NSFont) -> NSFont
```

## Parameters

- `originalFont`: The font to replace.

<a id="return-value"></a>

## Return Value

A screen font suitable for use in place of `originalFont`, or simply `originalFont` if a screen font can’t be used or isn’t available.

<a id="Discussion"></a>

## Discussion

A screen font can be substituted if the receiver is set to use screen fonts and if no `NSTextView` associated with the receiver is scaled or rotated.

## See Also

### Methods

- [showCGGlyphs(\_:positions:count:font:matrix:attributes:in:)](showcgglyphs%28__positions_count_font_matrix_attributes_in_%29.md): Deprecated. Renders the glyphs at the specified positions, using the specified attributes.
- [invalidateGlyphs(onLayoutInvalidationForGlyphRange:)](invalidateglyphs%28onlayoutinvalidationforglyphrange_%29.md): Deprecated. Specifies explicitly when portions of the glyph stream depend on layout.
- [invalidateLayout(forCharacterRange:isSoft:actualCharacterRange:)](invalidatelayout%28forcharacterrange_issoft_actualcharacterrange_%29.md): Deprecated. Invalidates the layout information for the glyphs mapped to the given range of characters.
- [textStorage(\_:edited:range:changeInLength:invalidatedRange:)](textstorage%28__edited_range_changeinlength_invalidatedrange_%29.md): Deprecated. Invalidates glyph and layout information for a portion of the text in the given text storage object.
- [insertGlyph(\_:atGlyphIndex:characterIndex:)](insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Inserts a single glyph into the glyph stream at the given index and maps it to the character at the given character index.
- [insertGlyphs(\_:length:forStartingGlyphAt:characterIndex:)](insertglyphs%28__length_forstartingglyphat_characterindex_%29.md): Deprecated. Inserts the given glyphs into the glyph cache at the given index and maps them to characters beginning at the given character index.
- [glyph(at:)](glyph%28at_%29.md): Deprecated. Returns the glyph at the specified index.
- [glyph(at:isValidIndex:)](glyph%28at_isvalidindex_%29.md): Deprecated. Returns the glyph at a specified index, and optionally returns a flag indicating whether the requested index is valid.
- [replaceGlyph(at:withGlyph:)](replaceglyph%28at_withglyph_%29.md): Deprecated. Replaces the glyph at the given index with a new glyph.
- [getGlyphs(\_:range:)](getglyphs%28__range_%29.md): Deprecated. Fills the passed-in buffer with a sequence of glyphs.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:)](getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_%29.md): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:)](getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [deleteGlyphs(in:)](deleteglyphs%28in_%29.md): Deprecated. Deletes the glyphs in the given range from the receiver’s glyph store.
- [setCharacterIndex(\_:forGlyphAt:)](setcharacterindex%28__forglyphat_%29.md): Deprecated. Sets the index of the character corresponding to the glyph at the given glyph index.
- [intAttribute(\_:forGlyphAt:)](intattribute%28__forglyphat_%29.md): Deprecated. Returns the value of the attribute identified by the given attribute tag for the glyph at the given index.

# substituteFontForFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Replaces the specified font with a suitable screen font if one is available.

## Declaration

```objectivec
- (NSFont *) substituteFontForFont:(NSFont *) originalFont;
```

## Parameters

- `originalFont`: The font to replace.

<a id="return-value"></a>

## Return Value

A screen font suitable for use in place of `originalFont`, or simply `originalFont` if a screen font can’t be used or isn’t available.

<a id="Discussion"></a>

## Discussion

A screen font can be substituted if the receiver is set to use screen fonts and if no `NSTextView` associated with the receiver is scaled or rotated.

## See Also

### Methods

- [showCGGlyphs:positions:count:font:matrix:attributes:inContext:](showcgglyphs%28__positions_count_font_matrix_attributes_in_%29.md): Deprecated. Renders the glyphs at the specified positions, using the specified attributes.
- [invalidateGlyphsOnLayoutInvalidationForGlyphRange:](invalidateglyphs%28onlayoutinvalidationforglyphrange_%29.md): Deprecated. Specifies explicitly when portions of the glyph stream depend on layout.
- [invalidateLayoutForCharacterRange:isSoft:actualCharacterRange:](invalidatelayout%28forcharacterrange_issoft_actualcharacterrange_%29.md): Deprecated. Invalidates the layout information for the glyphs mapped to the given range of characters.
- [textStorage:edited:range:changeInLength:invalidatedRange:](textstorage%28__edited_range_changeinlength_invalidatedrange_%29.md): Deprecated. Invalidates glyph and layout information for a portion of the text in the given text storage object.
- [insertGlyph:atGlyphIndex:characterIndex:](insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Inserts a single glyph into the glyph stream at the given index and maps it to the character at the given character index.
- [insertGlyphs:length:forStartingGlyphAtIndex:characterIndex:](insertglyphs%28__length_forstartingglyphat_characterindex_%29.md): Deprecated. Inserts the given glyphs into the glyph cache at the given index and maps them to characters beginning at the given character index.
- [glyphAtIndex:](glyph%28at_%29.md): Deprecated. Returns the glyph at the specified index.
- [glyphAtIndex:isValidIndex:](glyph%28at_isvalidindex_%29.md): Deprecated. Returns the glyph at a specified index, and optionally returns a flag indicating whether the requested index is valid.
- [replaceGlyphAtIndex:withGlyph:](replaceglyph%28at_withglyph_%29.md): Deprecated. Replaces the glyph at the given index with a new glyph.
- [getGlyphs:range:](getglyphs%28__range_%29.md): Deprecated. Fills the passed-in buffer with a sequence of glyphs.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:](getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_%29.md): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:](getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [deleteGlyphsInRange:](deleteglyphs%28in_%29.md): Deprecated. Deletes the glyphs in the given range from the receiver’s glyph store.
- [setCharacterIndex:forGlyphAtIndex:](setcharacterindex%28__forglyphat_%29.md): Deprecated. Sets the index of the character corresponding to the glyph at the given glyph index.
- [intAttribute:forGlyphAtIndex:](intattribute%28__forglyphat_%29.md): Deprecated. Returns the value of the attribute identified by the given attribute tag for the glyph at the given index.
