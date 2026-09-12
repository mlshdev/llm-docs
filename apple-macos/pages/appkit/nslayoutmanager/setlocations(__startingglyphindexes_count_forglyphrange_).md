> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/setlocations(_:startingglyphindexes:count:forglyphrange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/setlocations(_:startingglyphindexes:count:forglyphrange:))

# setLocations(\_:startingGlyphIndexes:count:forGlyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.11)

Sets locations for many glyph ranges at once.

> Use -setLocation:forStartOfGlyphRange: instead

## Declaration

```swift
func setLocations(_ locations: NSPointArray, startingGlyphIndexes glyphIndexes: UnsafeMutablePointer<Int>, count: Int, forGlyphRange glyphRange: NSRange)
```

## Parameters

- `locations`: The locations to which the first glyph in each range is set, relative to the origin of the glyph’s line fragment origin.
- `glyphIndexes`: Indexes in `glyphRange` of the glyphs whose locations are set.
- `count`: The number of glyphs whose locations are set.
- `glyphRange`: The entire glyph range containing all the glyphs whose locations are set.

<a id="Discussion"></a>

## Discussion

This method enables the typesetter to set locations for glyph ranges in bulk. All of the specified glyph indexes should lie within the specified glyph range. The first of them should be equal to `glyphRange.location`, and the remainder should increase monotonically. Each location is set as the location for the range beginning at the corresponding glyph index, and continuing until the subsequent glyph index, or until the end of the glyph range for the last location. Thus this method is equivalent to calling [setLocation(\_:forStartOfGlyphRange:)](setlocation%28__forstartofglyphrange_%29.md) for a set of ranges covering all of the glyphs in `glyphRange`.

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

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

# setLocations:startingGlyphIndexes:count:forGlyphRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.11)

Sets locations for many glyph ranges at once.

> Use -setLocation:forStartOfGlyphRange: instead

## Declaration

```objectivec
- (void) setLocations:(NSPointArray) locations startingGlyphIndexes:(NSUInteger *) glyphIndexes count:(NSUInteger) count forGlyphRange:(NSRange) glyphRange;
```

## Parameters

- `locations`: The locations to which the first glyph in each range is set, relative to the origin of the glyph’s line fragment origin.
- `glyphIndexes`: Indexes in `glyphRange` of the glyphs whose locations are set.
- `count`: The number of glyphs whose locations are set.
- `glyphRange`: The entire glyph range containing all the glyphs whose locations are set.

<a id="Discussion"></a>

## Discussion

This method enables the typesetter to set locations for glyph ranges in bulk. All of the specified glyph indexes should lie within the specified glyph range. The first of them should be equal to `glyphRange.location`, and the remainder should increase monotonically. Each location is set as the location for the range beginning at the corresponding glyph index, and continuing until the subsequent glyph index, or until the end of the glyph range for the last location. Thus this method is equivalent to calling [setLocation:forStartOfGlyphRange:](setlocation%28__forstartofglyphrange_%29.md) for a set of ranges covering all of the glyphs in `glyphRange`.

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

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
