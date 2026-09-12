> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/showcgglyphs(_:positions:count:font:matrix:attributes:in:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/showcgglyphs(_:positions:count:font:matrix:attributes:in:))

# showCGGlyphs(\_:positions:count:font:matrix:attributes:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+ (deprecated in 10.15)

Renders the glyphs at the specified positions, using the specified attributes.

> Use [showCGGlyphs(\_:positions:count:font:textMatrix:attributes:in:)](showcgglyphs%28__positions_count_font_textmatrix_attributes_in_%29.md) instead.

## Declaration

```swift
func showCGGlyphs(_ glyphs: UnsafePointer<CGGlyph>, positions: UnsafePointer<NSPoint>, count glyphCount: Int, font: NSFont, matrix textMatrix: AffineTransform, attributes: [NSAttributedString.Key : Any] = [:], in graphicsContext: NSGraphicsContext)
```

## Parameters

- `glyphs`: The glyphs to draw; may contain embedded `NULL` bytes.
- `positions`: The positions at which to draw the glyphs in the user space coordinate system.
- `glyphCount`: The number of glyphs.
- `font`: The font applied to the graphics state. This value can be different from the `NSFontAttributeName` value in the `attributes` argument because of various font substitutions that the system automatically executes.
- `textMatrix`: The affine transform mapping the text space coordinate system to the user space coordinate system. The `tx` and `ty` components of `textMatrix` are ignored since Quartz overrides them with the glyph positions.
- `attributes`: A dictionary of glyph attributes. See [Glyph Attributes](../glyph-attributes.md) for supported keys and values.
- `graphicsContext`: If non-`nil`, `graphicsContext` is already configured according to the text attributes arguments: `font`, `textMatrix`, and `attributes`.

<a id="Discussion"></a>

## Discussion

`NSLayoutManager` invokes this primitive method unless an override implementation of the deprecated [showPackedGlyphs:length:glyphRange:atPoint:font:color:printingAdjustment:](showpackedglyphs_length_glyphrange_atpoint_font_color_printingadjustment_.md) method exists and this method is not overridden.

## See Also

### Methods

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
- [setIntAttribute(\_:value:forGlyphAt:)](setintattribute%28__value_forglyphat_%29.md): Deprecated. Sets a custom attribute value for a given glyph.

# showCGGlyphs:positions:count:font:matrix:attributes:inContext: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+ (deprecated in 10.15)

Renders the glyphs at the specified positions, using the specified attributes.

> Use [showCGGlyphs:positions:count:font:textMatrix:attributes:inContext:](showcgglyphs%28__positions_count_font_textmatrix_attributes_in_%29.md) instead.

## Declaration

```objectivec
- (void) showCGGlyphs:(const CGGlyph *) glyphs positions:(const NSPoint *) positions count:(NSUInteger) glyphCount font:(NSFont *) font matrix:(NSAffineTransform *) textMatrix attributes:(NSDictionary<NSString *,id> *) attributes inContext:(NSGraphicsContext *) graphicsContext;
```

## Parameters

- `glyphs`: The glyphs to draw; may contain embedded `NULL` bytes.
- `positions`: The positions at which to draw the glyphs in the user space coordinate system.
- `glyphCount`: The number of glyphs.
- `font`: The font applied to the graphics state. This value can be different from the `NSFontAttributeName` value in the `attributes` argument because of various font substitutions that the system automatically executes.
- `textMatrix`: The affine transform mapping the text space coordinate system to the user space coordinate system. The `tx` and `ty` components of `textMatrix` are ignored since Quartz overrides them with the glyph positions.
- `attributes`: A dictionary of glyph attributes. See [Glyph Attributes](../glyph-attributes.md) for supported keys and values.
- `graphicsContext`: If non-`nil`, `graphicsContext` is already configured according to the text attributes arguments: `font`, `textMatrix`, and `attributes`.

<a id="Discussion"></a>

## Discussion

`NSLayoutManager` invokes this primitive method unless an override implementation of the deprecated [showPackedGlyphs:length:glyphRange:atPoint:font:color:printingAdjustment:](showpackedglyphs_length_glyphrange_atpoint_font_color_printingadjustment_.md) method exists and this method is not overridden.

## See Also

### Methods

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
- [setIntAttribute:value:forGlyphAtIndex:](setintattribute%28__value_forglyphat_%29.md): Deprecated. Sets a custom attribute value for a given glyph.
