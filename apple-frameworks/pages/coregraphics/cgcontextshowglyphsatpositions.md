> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontextshowglyphsatpositions](https://developer.apple.com/documentation/coregraphics/cgcontextshowglyphsatpositions)

# CGContextShowGlyphsAtPositions

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws glyphs at the provided position.

## Declaration

```objectivec
extern void CGContextShowGlyphsAtPositions(CGContextRef c, const CGGlyph *glyphs, const CGPoint *Lpositions, size_t count);
```

## Parameters

- `c`: The graphics context in which to display the glyphs.
- `glyphs`: An array of glyphs.
- `Lpositions`: The positions for the glyphs. Each item in this array matches with the glyph at the corresponding index in the `glyphs` array. The position of each glyph is specified in text space, and, as a consequence, is transformed through the text matrix to user space.
- `count`: The number of items in the `glyphs` array.

## See Also

### Drawing Text

- [CGContextGetTextMatrix](cgcontext/textmatrix.md): Returns the current text matrix.
- [CGContextSetTextMatrix](cgcontextsettextmatrix.md): Sets the current text matrix.
- [CGContextSetTextPosition](cgcontextsettextposition.md): Sets the location at which text is drawn.
- [CGContextGetTextPosition](cgcontextgettextposition.md)
- [CGContextSelectFont](cgcontext/selectfont%28name_size_textencoding_%29.md): Deprecated. Sets the font and font size in a graphics context.
- [CGContextSetCharacterSpacing](cgcontext/setcharacterspacing%28__%29.md): Sets the current character spacing.
- [CGContextSetFont](cgcontext/setfont%28__%29.md): Sets the platform font in a graphics context.
- [CGContextSetFontSize](cgcontext/setfontsize%28__%29.md): Sets the current font size.
- [CGContextSetTextDrawingMode](cgcontext/settextdrawingmode%28__%29.md): Sets the current text drawing mode.
- [CGContextSetAllowsFontSmoothing](cgcontext/setallowsfontsmoothing%28__%29.md): Sets whether or not to allow font smoothing for a graphics context.
- [CGContextSetAllowsFontSubpixelPositioning](cgcontext/setallowsfontsubpixelpositioning%28__%29.md): Sets whether or not to allow subpixel positioning for a graphics context.
- [CGContextSetAllowsFontSubpixelQuantization](cgcontext/setallowsfontsubpixelquantization%28__%29.md): Sets whether or not to allow subpixel quantization for a graphics context.
- [CGContextSetShouldSmoothFonts](cgcontext/setshouldsmoothfonts%28__%29.md): Enables or disables font smoothing in a graphics context.
- [CGContextSetShouldSubpixelPositionFonts](cgcontext/setshouldsubpixelpositionfonts%28__%29.md): Enables or disables subpixel positioning in a graphics context.
- [CGContextSetShouldSubpixelQuantizeFonts](cgcontext/setshouldsubpixelquantizefonts%28__%29.md): Enables or disables subpixel quantization in a graphics context.
