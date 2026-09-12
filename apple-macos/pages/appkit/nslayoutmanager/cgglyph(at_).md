> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/cgglyph(at:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/cgglyph(at:))

# cgGlyph(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the glyph at the specified index.

## Declaration

```swift
func cgGlyph(at glyphIndex: Int) -> CGGlyph
```

## Parameters

- `glyphIndex`: The index of the glyph that you want. If the index is out of range, this method raises an exception with the error [rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception).

<a id="return-value"></a>

## Return Value

The glyph at the specified index.

<a id="Discussion"></a>

## Discussion

Calling this method generates all of the glyphs (as needed) up to and including the glyph at the specified index.

## See Also

### Accessing glyphs

- [getGlyphs(in:glyphs:properties:characterIndexes:bidiLevels:)](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [cgGlyph(at:isValidIndex:)](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs(\_:properties:characterIndexes:font:forGlyphRange:)](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyph(at:)](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacter(at:)](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex(\_:)](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyph(at:)](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSLayoutManager.GlyphProperty](glyphproperty.md): Glyph properties.

# CGGlyphAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the glyph at the specified index.

## Declaration

```objectivec
- (CGGlyph) CGGlyphAtIndex:(NSUInteger) glyphIndex;
```

## Parameters

- `glyphIndex`: The index of the glyph that you want. If the index is out of range, this method raises an exception with the error [NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception).

<a id="return-value"></a>

## Return Value

The glyph at the specified index.

<a id="Discussion"></a>

## Discussion

Calling this method generates all of the glyphs (as needed) up to and including the glyph at the specified index.

## See Also

### Accessing glyphs

- [getGlyphsInRange:glyphs:properties:characterIndexes:bidiLevels:](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [CGGlyphAtIndex:isValidIndex:](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs:properties:characterIndexes:font:forGlyphRange:](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyphAtIndex:](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacterAtIndex:](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex:](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyphAtIndex:](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSGlyphProperty](glyphproperty.md): Glyph properties.
