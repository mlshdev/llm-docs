> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/getglyphs(in:glyphs:properties:characterindexes:bidilevels:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/getglyphs(in:glyphs:properties:characterindexes:bidilevels:))

# getGlyphs(in:glyphs:properties:characterIndexes:bidiLevels:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Fills a passed-in buffer with a sequence of glyphs.

## Declaration

```swift
func getGlyphs(in glyphRange: NSRange, glyphs glyphBuffer: UnsafeMutablePointer<CGGlyph>?, properties props: UnsafeMutablePointer<NSLayoutManager.GlyphProperty>?, characterIndexes charIndexBuffer: UnsafeMutablePointer<Int>?, bidiLevels bidiLevelBuffer: UnsafeMutablePointer<UInt8>?) -> Int
```

## Parameters

- `glyphRange`: The range of glyphs to fill in.
- `glyphBuffer`: On output, the sequence of glyphs in the given glyph range.
- `props`: If not `NULL`, on output, the glyph properties corresponding to the filled-in glyphs.
- `charIndexBuffer`: If not `NULL`, on output, the indexes of the original characters corresponding to the given glyph range. Note that a glyph at index 1 is not necessarily mapped to the character at index 1, since a glyph may be for a ligature or accent.
- `bidiLevelBuffer`: If not `NULL`, on output, the direction of each glyph for bidirectional text. The values range from 0 to 61 as defined by Unicode Standard Annex #9. An even value means the glyph goes left-to-right, and an odd value means the glyph goes right-to-left.

<a id="return-value"></a>

## Return Value

The number of glyphs returned in `glyphBuffer`.

<a id="Discussion"></a>

## Discussion

Each pointer passed in should either be `NULL` or else point to sufficient memory to hold `glyphRange.length` elements.

## See Also

### Accessing glyphs

- [cgGlyph(at:)](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [cgGlyph(at:isValidIndex:)](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs(\_:properties:characterIndexes:font:forGlyphRange:)](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyph(at:)](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacter(at:)](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex(\_:)](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyph(at:)](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSLayoutManager.GlyphProperty](glyphproperty.md): Glyph properties.

# getGlyphsInRange:glyphs:properties:characterIndexes:bidiLevels: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Fills a passed-in buffer with a sequence of glyphs.

## Declaration

```objectivec
- (NSUInteger) getGlyphsInRange:(NSRange) glyphRange glyphs:(CGGlyph *) glyphBuffer properties:(NSGlyphProperty *) props characterIndexes:(NSUInteger *) charIndexBuffer bidiLevels:(unsigned char *) bidiLevelBuffer;
```

## Parameters

- `glyphRange`: The range of glyphs to fill in.
- `glyphBuffer`: On output, the sequence of glyphs in the given glyph range.
- `props`: If not `NULL`, on output, the glyph properties corresponding to the filled-in glyphs.
- `charIndexBuffer`: If not `NULL`, on output, the indexes of the original characters corresponding to the given glyph range. Note that a glyph at index 1 is not necessarily mapped to the character at index 1, since a glyph may be for a ligature or accent.
- `bidiLevelBuffer`: If not `NULL`, on output, the direction of each glyph for bidirectional text. The values range from 0 to 61 as defined by Unicode Standard Annex #9. An even value means the glyph goes left-to-right, and an odd value means the glyph goes right-to-left.

<a id="return-value"></a>

## Return Value

The number of glyphs returned in `glyphBuffer`.

<a id="Discussion"></a>

## Discussion

Each pointer passed in should either be `NULL` or else point to sufficient memory to hold `glyphRange.length` elements.

## See Also

### Accessing glyphs

- [CGGlyphAtIndex:](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [CGGlyphAtIndex:isValidIndex:](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs:properties:characterIndexes:font:forGlyphRange:](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyphAtIndex:](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacterAtIndex:](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex:](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyphAtIndex:](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSGlyphProperty](glyphproperty.md): Glyph properties.
