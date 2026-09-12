> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/setintattribute(_:value:forglyphat:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/setintattribute(_:value:forglyphat:))

# setIntAttribute(\_:value:forGlyphAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Sets a custom attribute value for a given glyph.

> Use -setGlyphs:properties:characterIndexes:font:forGlyphRange instead

## Declaration

```swift
func setIntAttribute(_ attributeTag: Int, value val: Int, forGlyphAt glyphIndex: Int)
```

## Parameters

- `attributeTag`: The custom attribute.
- `val`: The new attribute value.
- `glyphIndex`: Index of the glyph whose attribute is set.

<a id="Discussion"></a>

## Discussion

Custom attributes are glyph attributes such as `NSGlyphInscription` or attributes defined by subclasses. Nonnegative tags are reserved by Apple; you can define your own attributes with negative tags and set values using this method.

This method is part of the `NSGlyphStorage` protocol, for use by the glyph generator to set attributes. It is not usually necessary for anyone but the glyph generator (and perhaps the typesetter) to call it. It is provided as a public method so subclasses can extend it to accept other glyph attributes. To add new glyph attributes to the text system you must do two things. First, you need to arrange for the glyph generator or typesetter to generate and interpret it. Second, you need to subclass `NSLayoutManager` to provide someplace to store the new attribute, overriding this method and [intAttribute(\_:forGlyphAt:)](intattribute%28__forglyphat_%29.md) to recognize the new attribute tags and respond to them, while passing any other attributes to the superclass implementation. The `NSLayoutManager` implementation understands the glyph attributes which it is prepared to store, as enumerated in [Glyph Attributes](../glyph-attributes.md).

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

# setIntAttribute:value:forGlyphAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Sets a custom attribute value for a given glyph.

> Use -setGlyphs:properties:characterIndexes:font:forGlyphRange instead

## Declaration

```objectivec
- (void) setIntAttribute:(NSInteger) attributeTag value:(NSInteger) val forGlyphAtIndex:(NSUInteger) glyphIndex;
```

## Parameters

- `attributeTag`: The custom attribute.
- `val`: The new attribute value.
- `glyphIndex`: Index of the glyph whose attribute is set.

<a id="Discussion"></a>

## Discussion

Custom attributes are glyph attributes such as `NSGlyphInscription` or attributes defined by subclasses. Nonnegative tags are reserved by Apple; you can define your own attributes with negative tags and set values using this method.

This method is part of the `NSGlyphStorage` protocol, for use by the glyph generator to set attributes. It is not usually necessary for anyone but the glyph generator (and perhaps the typesetter) to call it. It is provided as a public method so subclasses can extend it to accept other glyph attributes. To add new glyph attributes to the text system you must do two things. First, you need to arrange for the glyph generator or typesetter to generate and interpret it. Second, you need to subclass `NSLayoutManager` to provide someplace to store the new attribute, overriding this method and [intAttribute:forGlyphAtIndex:](intattribute%28__forglyphat_%29.md) to recognize the new attribute tags and respond to them, while passing any other attributes to the superclass implementation. The `NSLayoutManager` implementation understands the glyph attributes which it is prepared to store, as enumerated in [Glyph Attributes](../glyph-attributes.md).

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
