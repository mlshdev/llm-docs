> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/setglyphs(_:properties:characterindexes:font:forglyphrange:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/setglyphs(_:properties:characterindexes:font:forglyphrange:))

# setGlyphs(\_:properties:characterIndexes:font:forGlyphRange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Stores the initial glyphs and glyph properties for a character range.

## Declaration

```swift
func setGlyphs(_ glyphs: UnsafePointer<CGGlyph>, properties props: UnsafePointer<NSLayoutManager.GlyphProperty>, characterIndexes charIndexes: UnsafePointer<Int>, font aFont: UIFont, forGlyphRange glyphRange: NSRange)
```

## Parameters

- `glyphs`: A pointer to the layout manager’s glyph cache.
- `props`: A pointer to a buffer containing glyph properties for the glyphs in the cache.
- `charIndexes`: A pointer to the starting index for the characters in the text storage for which glyphs are generated.
- `aFont`: A font to override the font attributes in the text storage for the specified character range.
- `glyphRange`: The range of glyphs in the glyph cache to set.

<a id="Discussion"></a>

## Discussion

This method is invoked by text system during the glyph generation process. The only place apps are allowed to call this method directly is from an implementation of the `NSLayoutManagerDelegate` protocol method [layoutManager(\_:shouldGenerateGlyphs:properties:characterIndexes:font:forGlyphRange:)](../nslayoutmanagerdelegate/layoutmanager%28__shouldgenerateglyphs_properties_characterindexes_font_forglyphrange_%29.md).

Each array has `glyphRange.length` items. The specified `charIndexes` must be contiguous (no skipped indexes), enabling multiple items to have a same character index (as when one character index generates multiple glyph IDs). Due to font substitution, `aFont` passed into this method might not match the font in the attributes dictionary. Calling this method for a character range that has previously calculated layout information invalidates the layout and display.

## See Also

### Accessing glyphs

- [getGlyphs(in:glyphs:properties:characterIndexes:bidiLevels:)](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [cgGlyph(at:)](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [cgGlyph(at:isValidIndex:)](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [characterIndexForGlyph(at:)](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacter(at:)](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex(\_:)](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyph(at:)](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSLayoutManager.GlyphProperty](glyphproperty.md): Glyph properties.

# setGlyphs:properties:characterIndexes:font:forGlyphRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Stores the initial glyphs and glyph properties for a character range.

## Declaration

```objectivec
- (void) setGlyphs:(const CGGlyph *) glyphs properties:(const NSGlyphProperty *) props characterIndexes:(const NSUInteger *) charIndexes font:(UIFont *) aFont forGlyphRange:(NSRange) glyphRange;
```

## Parameters

- `glyphs`: A pointer to the layout manager’s glyph cache.
- `props`: A pointer to a buffer containing glyph properties for the glyphs in the cache.
- `charIndexes`: A pointer to the starting index for the characters in the text storage for which glyphs are generated.
- `aFont`: A font to override the font attributes in the text storage for the specified character range.
- `glyphRange`: The range of glyphs in the glyph cache to set.

<a id="Discussion"></a>

## Discussion

This method is invoked by text system during the glyph generation process. The only place apps are allowed to call this method directly is from an implementation of the `NSLayoutManagerDelegate` protocol method [layoutManager:shouldGenerateGlyphs:properties:characterIndexes:font:forGlyphRange:](../nslayoutmanagerdelegate/layoutmanager%28__shouldgenerateglyphs_properties_characterindexes_font_forglyphrange_%29.md).

Each array has `glyphRange.length` items. The specified `charIndexes` must be contiguous (no skipped indexes), enabling multiple items to have a same character index (as when one character index generates multiple glyph IDs). Due to font substitution, `aFont` passed into this method might not match the font in the attributes dictionary. Calling this method for a character range that has previously calculated layout information invalidates the layout and display.

## See Also

### Accessing glyphs

- [getGlyphsInRange:glyphs:properties:characterIndexes:bidiLevels:](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [CGGlyphAtIndex:](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [CGGlyphAtIndex:isValidIndex:](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [characterIndexForGlyphAtIndex:](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacterAtIndex:](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex:](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyphAtIndex:](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSGlyphProperty](glyphproperty.md): Glyph properties.
