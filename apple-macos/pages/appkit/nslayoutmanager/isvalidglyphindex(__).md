> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/isvalidglyphindex(_:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/isvalidglyphindex(_:))

# isValidGlyphIndex(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Indicates whether the specified index refers to a valid glyph.

## Declaration

```swift
func isValidGlyphIndex(_ glyphIndex: Int) -> Bool
```

## Parameters

- `glyphIndex`: The index of a glyph in the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified `glyphIndex` refers to a valid glyph, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing glyphs

- [getGlyphs(in:glyphs:properties:characterIndexes:bidiLevels:)](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [cgGlyph(at:)](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [cgGlyph(at:isValidIndex:)](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs(\_:properties:characterIndexes:font:forGlyphRange:)](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyph(at:)](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacter(at:)](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyph(at:)](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSLayoutManager.GlyphProperty](glyphproperty.md): Glyph properties.

# isValidGlyphIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Indicates whether the specified index refers to a valid glyph.

## Declaration

```objectivec
- (BOOL) isValidGlyphIndex:(NSUInteger) glyphIndex;
```

## Parameters

- `glyphIndex`: The index of a glyph in the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified `glyphIndex` refers to a valid glyph, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing glyphs

- [getGlyphsInRange:glyphs:properties:characterIndexes:bidiLevels:](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [CGGlyphAtIndex:](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [CGGlyphAtIndex:isValidIndex:](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs:properties:characterIndexes:font:forGlyphRange:](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyphAtIndex:](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacterAtIndex:](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyphAtIndex:](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSGlyphProperty](glyphproperty.md): Glyph properties.
