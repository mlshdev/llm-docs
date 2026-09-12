> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontdrawglyphs(_:_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontdrawglyphs(_:_:_:_:_:))

# CTFontDrawGlyphs(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Renders the given glyphs of a font at the specified positions in the supplied graphics context.

## Declaration

```swift
func CTFontDrawGlyphs(_ font: CTFont, _ glyphs: UnsafePointer<CGGlyph>, _ positions: UnsafePointer<CGPoint>, _ count: Int, _ context: CGContext)
```

## Parameters

- `font`: The font with glyphs to render. If the font has a size or matrix attribute, `context` is set with these values.
- `glyphs`: The glyphs to be rendered. The glyphs should be the result of proper Unicode text layout operations (such as with `CTLine`). Functions such as [CTFontGetGlyphsForCharacters(\_:\_:\_:\_:)](ctfontgetglyphsforcharacters%28________%29.md) do not perform any Unicode text layout.
- `positions`: The positions (origins) for each glyph in `glyphs`. The positions are in user space. The number of positions passed in must match the number of glyphs (in `glyphs`).
- `count`: The number of glyphs to be rendered from the `glyphs` array.
- `context`: The graphics context used to render the glyphs.

<a id="Discussion"></a>

## Discussion

This function modifies graphics state including font, text size, and text matrix if these attributes are specified in `font`. These attributes are not restored.

## See Also

### Working with Glyphs

- [CTFontGetGlyphsForCharacters(\_:\_:\_:\_:)](ctfontgetglyphsforcharacters%28________%29.md): Performs basic character-to-glyph mapping.
- [CTFontGetLigatureCaretPositions(\_:\_:\_:\_:)](ctfontgetligaturecaretpositions%28________%29.md): Returns caret positions within a glyph.

# CTFontDrawGlyphs (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Renders the given glyphs of a font at the specified positions in the supplied graphics context.

## Declaration

```objectivec
extern void CTFontDrawGlyphs(CTFontRef font, const CGGlyph glyphs[], const CGPoint positions[], size_t count, CGContextRef context);
```

## Parameters

- `font`: The font with glyphs to render. If the font has a size or matrix attribute, `context` is set with these values.
- `glyphs`: The glyphs to be rendered. The glyphs should be the result of proper Unicode text layout operations (such as with `CTLine`). Functions such as [CTFontGetGlyphsForCharacters](ctfontgetglyphsforcharacters%28________%29.md) do not perform any Unicode text layout.
- `positions`: The positions (origins) for each glyph in `glyphs`. The positions are in user space. The number of positions passed in must match the number of glyphs (in `glyphs`).
- `count`: The number of glyphs to be rendered from the `glyphs` array.
- `context`: The graphics context used to render the glyphs.

<a id="Discussion"></a>

## Discussion

This function modifies graphics state including font, text size, and text matrix if these attributes are specified in `font`. These attributes are not restored.

## See Also

### Working with Glyphs

- [CTFontGetGlyphsForCharacters](ctfontgetglyphsforcharacters%28________%29.md): Performs basic character-to-glyph mapping.
- [CTFontGetLigatureCaretPositions](ctfontgetligaturecaretpositions%28________%29.md): Returns caret positions within a glyph.
