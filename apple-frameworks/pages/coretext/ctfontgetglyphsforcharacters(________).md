> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontgetglyphsforcharacters(_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontgetglyphsforcharacters(_:_:_:_:))

# CTFontGetGlyphsForCharacters(\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs basic character-to-glyph mapping.

## Declaration

```swift
func CTFontGetGlyphsForCharacters(_ font: CTFont, _ characters: UnsafePointer<UniChar>, _ glyphs: UnsafeMutablePointer<CGGlyph>, _ count: CFIndex) -> Bool
```

## Parameters

- `font`: The font reference.
- `characters`: An array of Unicode characters.
- `glyphs`: On output, points to an array of glyph values.
- `count`: The capacity of the character and glyph arrays.

<a id="return-value"></a>

## Return Value

`True` if the font could encode all Unicode characters; otherwise `False`.

<a id="Discussion"></a>

## Discussion

Provides basic Unicode encoding for the given font, returning by reference an array of [CGGlyph](../coregraphics/cgglyph.md) values corresponding to a given array of Unicode characters for the given font.

If a glyph could not be encoded, a value of `0` is passed back at the corresponding index in the `glyphs` array and the function returns `False`. It is the responsibility of the caller to handle the Unicode properties of the input characters.

## See Also

### Working with Glyphs

- [CTFontDrawGlyphs(\_:\_:\_:\_:\_:)](ctfontdrawglyphs%28__________%29.md): Renders the given glyphs of a font at the specified positions in the supplied graphics context.
- [CTFontGetLigatureCaretPositions(\_:\_:\_:\_:)](ctfontgetligaturecaretpositions%28________%29.md): Returns caret positions within a glyph.

# CTFontGetGlyphsForCharacters (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs basic character-to-glyph mapping.

## Declaration

```objectivec
extern bool CTFontGetGlyphsForCharacters(CTFontRef font, const UniChar characters[], CGGlyph glyphs[], CFIndex count);
```

## Parameters

- `font`: The font reference.
- `characters`: An array of Unicode characters.
- `glyphs`: On output, points to an array of glyph values.
- `count`: The capacity of the character and glyph arrays.

<a id="return-value"></a>

## Return Value

`True` if the font could encode all Unicode characters; otherwise `False`.

<a id="Discussion"></a>

## Discussion

Provides basic Unicode encoding for the given font, returning by reference an array of [CGGlyph](../coregraphics/cgglyph.md) values corresponding to a given array of Unicode characters for the given font.

If a glyph could not be encoded, a value of `0` is passed back at the corresponding index in the `glyphs` array and the function returns `False`. It is the responsibility of the caller to handle the Unicode properties of the input characters.

## See Also

### Working with Glyphs

- [CTFontDrawGlyphs](ctfontdrawglyphs%28__________%29.md): Renders the given glyphs of a font at the specified positions in the supplied graphics context.
- [CTFontGetLigatureCaretPositions](ctfontgetligaturecaretpositions%28________%29.md): Returns caret positions within a glyph.
