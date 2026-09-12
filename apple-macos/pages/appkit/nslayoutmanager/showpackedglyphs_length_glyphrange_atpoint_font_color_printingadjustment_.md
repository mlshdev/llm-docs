> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/showpackedglyphs:length:glyphrange:atpoint:font:color:printingadjustment:](https://developer.apple.com/documentation/appkit/nslayoutmanager/showpackedglyphs:length:glyphrange:atpoint:font:color:printingadjustment:)

# showPackedGlyphs:length:glyphRange:atPoint:font:color:printingAdjustment:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Draws a range of glyphs.

> You should instead use [showCGGlyphs:positions:count:font:matrix:attributes:inContext:](showcgglyphs%28__positions_count_font_matrix_attributes_in_%29.md).

## Declaration

```objectivec
- (void) showPackedGlyphs:(char *) glyphs length:(NSUInteger) glyphLen glyphRange:(NSRange) glyphRange atPoint:(NSPoint) point font:(NSFont *) font color:(NSColor *) color printingAdjustment:(NSSize) printingAdjustment;
```

## Parameters

- `glyphs`: The glyphs to draw; may contain embedded `NULL` bytes.
- `glyphLen`: The number of bytes pointed at by `glyphs`; this is twice the number of glyphs contained.
- `glyphRange`: The range of glyphs to draw.
- `point`: The point at which to draw the glyphs.
- `font`: The font of the glyphs to draw.
- `color`: Color of the glyphs to draw.
- `printingAdjustment`: `NSZeroSize` when drawing to the screen, but when printing may contain values by which the nominal spacing between the characters should be adjusted.

<a id="Discussion"></a>

## Discussion

The  `glyphRange`, `point`, `font`, and `color` parameters are passed in merely for information purposes. They are already set in the graphics state. If for any reason you modify the set color or font, you must restore it before returning from this method.

You should never call this method, but you might override it.

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
