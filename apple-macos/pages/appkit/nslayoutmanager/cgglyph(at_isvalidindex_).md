> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/cgglyph(at:isvalidindex:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/cgglyph(at:isvalidindex:))

# cgGlyph(at:isValidIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the glyph at the specified index along with information about whether the glyph index is valid.

## Declaration

```swift
func cgGlyph(at glyphIndex: Int, isValidIndex: UnsafeMutablePointer<ObjCBool>?) -> CGGlyph
```

## Parameters

- `glyphIndex`: The index of the glyph that you want.
- `isValidIndex`: An optional Boolean variable. On return, the variable is set to [true](https://developer.apple.com/documentation/swift/true) if the glyph index is valid or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="return-value"></a>

## Return Value

The glyph at the specified index or [kCGFontIndexInvalid](https://developer.apple.com/documentation/coregraphics/kcgfontindexinvalid) if the index is out of range.

<a id="Discussion"></a>

## Discussion

If noncontiguous layout is disabled, calling this method generates all glyphs up to and including the one at `glyphIndex`.

## See Also

### Accessing glyphs

- [getGlyphs(in:glyphs:properties:characterIndexes:bidiLevels:)](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [cgGlyph(at:)](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [setGlyphs(\_:properties:characterIndexes:font:forGlyphRange:)](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyph(at:)](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacter(at:)](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex(\_:)](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyph(at:)](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSLayoutManager.GlyphProperty](glyphproperty.md): Glyph properties.

# CGGlyphAtIndex:isValidIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the glyph at the specified index along with information about whether the glyph index is valid.

## Declaration

```objectivec
- (CGGlyph) CGGlyphAtIndex:(NSUInteger) glyphIndex isValidIndex:(BOOL *) isValidIndex;
```

## Parameters

- `glyphIndex`: The index of the glyph that you want.
- `isValidIndex`: An optional Boolean variable. On return, the variable is set to [true](https://developer.apple.com/documentation/swift/true) if the glyph index is valid or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="return-value"></a>

## Return Value

The glyph at the specified index or [kCGFontIndexInvalid](https://developer.apple.com/documentation/coregraphics/kcgfontindexinvalid) if the index is out of range.

<a id="Discussion"></a>

## Discussion

If noncontiguous layout is disabled, calling this method generates all glyphs up to and including the one at `glyphIndex`.

## See Also

### Accessing glyphs

- [getGlyphsInRange:glyphs:properties:characterIndexes:bidiLevels:](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [CGGlyphAtIndex:](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [setGlyphs:properties:characterIndexes:font:forGlyphRange:](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyphAtIndex:](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacterAtIndex:](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex:](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyphAtIndex:](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSGlyphProperty](glyphproperty.md): Glyph properties.
