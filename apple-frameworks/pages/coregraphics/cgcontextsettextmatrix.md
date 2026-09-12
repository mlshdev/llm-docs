> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontextsettextmatrix](https://developer.apple.com/documentation/coregraphics/cgcontextsettextmatrix)

# CGContextSetTextMatrix

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the current text matrix.

## Declaration

```objectivec
extern void CGContextSetTextMatrix(CGContextRef c, CGAffineTransform t);
```

## Parameters

- `c`: A graphics context.
- `t`: The text matrix to set.

<a id="Discussion"></a>

## Discussion

The text matrix specifies the transform from text space to user space. To produce the final text rendering matrix that is used to actually draw the text on the page, Core Graphics concatenates the text matrix with the current transformation matrix and other parameters from the graphics state.

Note that the text matrix is *not* a part of the graphics state—saving or restoring the graphics state has no effect on the text matrix. The text matrix is an attribute of the graphics context, not of the current font.

## See Also

### Drawing Text

- [CGContextGetTextMatrix](cgcontext/textmatrix.md): Returns the current text matrix.
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
- [CGContextShowGlyphs](cgcontext/showglyphs%28g_count_%29.md): Deprecated. Displays an array of glyphs at the current text position.
