> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/rectarray(forcharacterrange:withinselectedcharacterrange:in:rectcount:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/rectarray(forcharacterrange:withinselectedcharacterrange:in:rectcount:))

# rectArray(forCharacterRange:withinSelectedCharacterRange:in:rectCount:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given character range.

## Declaration

```swift
func rectArray(forCharacterRange charRange: NSRange, withinSelectedCharacterRange selCharRange: NSRange, in container: NSTextContainer, rectCount: UnsafeMutablePointer<Int>) -> NSRectArray?
```

## Parameters

- `charRange`: The character range for which to return rectangles.
- `selCharRange`: Selected characters within `charRange`, which can affect the size of the rectangles; it must be equal to or contain `charRange`. If the caller is interested in this more from an enclosing point of view rather than a selection point of view, pass `{NSNotFound, 0}` as the selected range.
- `container`: The text container in which the text is laid out.
- `rectCount`: The number of rectangles returned.

<a id="return-value"></a>

## Return Value

The array of rectangles enclosing the given range.

<a id="Discussion"></a>

## Discussion

These rectangles can be used to draw the text background or highlight for the given range of characters. If a selected range is given in `selCharRange`, the rectangles returned are correct for drawing the selection.  Selection rectangles are generally more complicated than enclosing rectangles and supplying a selected range is the clue this method uses to determine whether to go to the trouble of doing this special work.

This method will do the minimum amount of work required to answer the question.  The resulting array is owned by the layout manager and will be reused when this method, [rectArray(forGlyphRange:withinSelectedGlyphRange:in:rectCount:)](rectarray%28forglyphrange_withinselectedglyphrange_in_rectcount_%29.md), or [boundingRect(forGlyphRange:in:)](boundingrect%28forglyphrange_in_%29.md) is called.  One of these methods may be called indirectly. If you aren’t going to use the rectangles right away, you should copy them to another location. These rectangles are always in container coordinates.

The number of rectangles returned isn’t necessarily the number of lines enclosing the specified range. Contiguous lines can share an enclosing rectangle, and lines broken into several fragments have a separate enclosing rectangle for each fragment.

These rectangles don’t necessarily enclose glyphs that draw outside their line fragment rectangles; use [boundingRect(forGlyphRange:in:)](boundingrect%28forglyphrange_in_%29.md) to determine the area that contains all drawing performed for a range of glyphs.

Performs glyph generation and layout if needed.

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

# rectArrayForCharacterRange:withinSelectedCharacterRange:inTextContainer:rectCount: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of rectangles and, by reference, the number of such rectangles, that define the region in the given container enclosing the given character range.

## Declaration

```objectivec
- (NSRectArray) rectArrayForCharacterRange:(NSRange) charRange withinSelectedCharacterRange:(NSRange) selCharRange inTextContainer:(NSTextContainer *) container rectCount:(NSUInteger *) rectCount;
```

## Parameters

- `charRange`: The character range for which to return rectangles.
- `selCharRange`: Selected characters within `charRange`, which can affect the size of the rectangles; it must be equal to or contain `charRange`. If the caller is interested in this more from an enclosing point of view rather than a selection point of view, pass `{NSNotFound, 0}` as the selected range.
- `container`: The text container in which the text is laid out.
- `rectCount`: The number of rectangles returned.

<a id="return-value"></a>

## Return Value

The array of rectangles enclosing the given range.

<a id="Discussion"></a>

## Discussion

These rectangles can be used to draw the text background or highlight for the given range of characters. If a selected range is given in `selCharRange`, the rectangles returned are correct for drawing the selection.  Selection rectangles are generally more complicated than enclosing rectangles and supplying a selected range is the clue this method uses to determine whether to go to the trouble of doing this special work.

This method will do the minimum amount of work required to answer the question.  The resulting array is owned by the layout manager and will be reused when this method, [rectArrayForGlyphRange:withinSelectedGlyphRange:inTextContainer:rectCount:](rectarray%28forglyphrange_withinselectedglyphrange_in_rectcount_%29.md), or [boundingRectForGlyphRange:inTextContainer:](boundingrect%28forglyphrange_in_%29.md) is called.  One of these methods may be called indirectly. If you aren’t going to use the rectangles right away, you should copy them to another location. These rectangles are always in container coordinates.

The number of rectangles returned isn’t necessarily the number of lines enclosing the specified range. Contiguous lines can share an enclosing rectangle, and lines broken into several fragments have a separate enclosing rectangle for each fragment.

These rectangles don’t necessarily enclose glyphs that draw outside their line fragment rectangles; use [boundingRectForGlyphRange:inTextContainer:](boundingrect%28forglyphrange_in_%29.md) to determine the area that contains all drawing performed for a range of glyphs.

Performs glyph generation and layout if needed.

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
