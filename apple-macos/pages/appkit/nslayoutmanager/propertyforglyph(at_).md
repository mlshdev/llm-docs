> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/propertyforglyph(at:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/propertyforglyph(at:))

# propertyForGlyph(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the glyph property of the glyph at the specified index.

## Declaration

```swift
func propertyForGlyph(at glyphIndex: Int) -> NSLayoutManager.GlyphProperty
```

## Parameters

- `glyphIndex`: The glyph whose glyph property is returned.

<a id="return-value"></a>

## Return Value

The glyph property associated with the specified glyph. [NSLayoutManager.GlyphProperty](glyphproperty.md) lists the values that can be returned.

<a id="Discussion"></a>

## Discussion

If noncontiguous layout is not enabled, this method causes generation of all glyphs up to and including the one at `glyphIndex`.

## See Also

### Accessing glyphs

- [getGlyphs(in:glyphs:properties:characterIndexes:bidiLevels:)](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [cgGlyph(at:)](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [cgGlyph(at:isValidIndex:)](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs(\_:properties:characterIndexes:font:forGlyphRange:)](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyph(at:)](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacter(at:)](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex(\_:)](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [NSLayoutManager.GlyphProperty](glyphproperty.md): Glyph properties.

# propertyForGlyphAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the glyph property of the glyph at the specified index.

## Declaration

```objectivec
- (NSGlyphProperty) propertyForGlyphAtIndex:(NSUInteger) glyphIndex;
```

## Parameters

- `glyphIndex`: The glyph whose glyph property is returned.

<a id="return-value"></a>

## Return Value

The glyph property associated with the specified glyph. [NSGlyphProperty](glyphproperty.md) lists the values that can be returned.

<a id="Discussion"></a>

## Discussion

If noncontiguous layout is not enabled, this method causes generation of all glyphs up to and including the one at `glyphIndex`.

## See Also

### Accessing glyphs

- [getGlyphsInRange:glyphs:properties:characterIndexes:bidiLevels:](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [CGGlyphAtIndex:](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [CGGlyphAtIndex:isValidIndex:](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs:properties:characterIndexes:font:forGlyphRange:](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyphAtIndex:](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacterAtIndex:](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex:](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [NSGlyphProperty](glyphproperty.md): Glyph properties.
