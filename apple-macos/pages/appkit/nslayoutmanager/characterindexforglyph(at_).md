> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/characterindexforglyph(at:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/characterindexforglyph(at:))

# characterIndexForGlyph(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the index in the text storage for the first character of the specified glyph.

## Declaration

```swift
func characterIndexForGlyph(at glyphIndex: Int) -> Int
```

## Parameters

- `glyphIndex`: The index of the glyph for which to return the associated character.

<a id="return-value"></a>

## Return Value

The index of the first character associated with the glyph at the specified index.

<a id="Discussion"></a>

## Discussion

If noncontiguous layout is not enabled, this method causes generation of all glyphs up to and including `glyphIndex`. This method accepts an index beyond the last glyph, returning an index extrapolated from the last actual glyph index.

In many cases it’s better to use the range-mapping methods, [characterRange(forGlyphRange:actualGlyphRange:)](characterrange%28forglyphrange_actualglyphrange_%29.md) and [glyphRange(forCharacterRange:actualCharacterRange:)](glyphrange%28forcharacterrange_actualcharacterrange_%29.md), which provide more comprehensive information.

## See Also

### Accessing glyphs

- [getGlyphs(in:glyphs:properties:characterIndexes:bidiLevels:)](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [cgGlyph(at:)](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [cgGlyph(at:isValidIndex:)](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs(\_:properties:characterIndexes:font:forGlyphRange:)](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [glyphIndexForCharacter(at:)](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex(\_:)](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyph(at:)](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSLayoutManager.GlyphProperty](glyphproperty.md): Glyph properties.

# characterIndexForGlyphAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the index in the text storage for the first character of the specified glyph.

## Declaration

```objectivec
- (NSUInteger) characterIndexForGlyphAtIndex:(NSUInteger) glyphIndex;
```

## Parameters

- `glyphIndex`: The index of the glyph for which to return the associated character.

<a id="return-value"></a>

## Return Value

The index of the first character associated with the glyph at the specified index.

<a id="Discussion"></a>

## Discussion

If noncontiguous layout is not enabled, this method causes generation of all glyphs up to and including `glyphIndex`. This method accepts an index beyond the last glyph, returning an index extrapolated from the last actual glyph index.

In many cases it’s better to use the range-mapping methods, [characterRangeForGlyphRange:actualGlyphRange:](characterrange%28forglyphrange_actualglyphrange_%29.md) and [glyphRangeForCharacterRange:actualCharacterRange:](glyphrange%28forcharacterrange_actualcharacterrange_%29.md), which provide more comprehensive information.

## See Also

### Accessing glyphs

- [getGlyphsInRange:glyphs:properties:characterIndexes:bidiLevels:](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [CGGlyphAtIndex:](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [CGGlyphAtIndex:isValidIndex:](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs:properties:characterIndexes:font:forGlyphRange:](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [glyphIndexForCharacterAtIndex:](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex:](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyphAtIndex:](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSGlyphProperty](glyphproperty.md): Glyph properties.
