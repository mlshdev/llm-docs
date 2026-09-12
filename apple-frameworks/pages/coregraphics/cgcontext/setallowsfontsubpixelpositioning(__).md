> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/setallowsfontsubpixelpositioning(_:)](https://developer.apple.com/documentation/coregraphics/cgcontext/setallowsfontsubpixelpositioning(_:))

# setAllowsFontSubpixelPositioning(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets whether or not to allow subpixel positioning for a graphics context.

## Declaration

```swift
func setAllowsFontSubpixelPositioning(_ allowsFontSubpixelPositioning: Bool)
```

## Parameters

- `allowsFontSubpixelPositioning`: A Boolean value that specifies whether subpixel positioning of glyphs is allowed in the specified context.

<a id="Discussion"></a>

## Discussion

Sub-pixel positioning is used by the graphics context if it is allowed, enabled, and if the font itself is antialiased when drawn. For information on how to enable subpixel positioning, see the [setShouldSubpixelPositionFonts(\_:)](setshouldsubpixelpositionfonts%28__%29.md) function.

This parameter is not part of the graphics state.

## See Also

### Drawing Text

- [textMatrix](textmatrix.md): Returns the current text matrix.
- [textPosition](textposition.md)
- [selectFont(name:size:textEncoding:)](selectfont%28name_size_textencoding_%29.md): Deprecated. Sets the font and font size in a graphics context.
- [setCharacterSpacing(\_:)](setcharacterspacing%28__%29.md): Sets the current character spacing.
- [setFont(\_:)](setfont%28__%29.md): Sets the platform font in a graphics context.
- [setFontSize(\_:)](setfontsize%28__%29.md): Sets the current font size.
- [setTextDrawingMode(\_:)](settextdrawingmode%28__%29.md): Sets the current text drawing mode.
- [setAllowsFontSmoothing(\_:)](setallowsfontsmoothing%28__%29.md): Sets whether or not to allow font smoothing for a graphics context.
- [setAllowsFontSubpixelQuantization(\_:)](setallowsfontsubpixelquantization%28__%29.md): Sets whether or not to allow subpixel quantization for a graphics context.
- [setShouldSmoothFonts(\_:)](setshouldsmoothfonts%28__%29.md): Enables or disables font smoothing in a graphics context.
- [setShouldSubpixelPositionFonts(\_:)](setshouldsubpixelpositionfonts%28__%29.md): Enables or disables subpixel positioning in a graphics context.
- [setShouldSubpixelQuantizeFonts(\_:)](setshouldsubpixelquantizefonts%28__%29.md): Enables or disables subpixel quantization in a graphics context.
- [showGlyphs(g:count:)](showglyphs%28g_count_%29.md): Deprecated. Displays an array of glyphs at the current text position.
- [showGlyphs(\_:at:)](showglyphs%28__at_%29.md): Draws a set of glyphs at a set of corresponding positions.
- [showGlyphsAtPoint(x:y:glyphs:count:)](showglyphsatpoint%28x_y_glyphs_count_%29.md): Deprecated. Displays an array of glyphs at a position you specify.

# CGContextSetAllowsFontSubpixelPositioning (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets whether or not to allow subpixel positioning for a graphics context.

## Declaration

```objectivec
extern void CGContextSetAllowsFontSubpixelPositioning(CGContextRef c, bool allowsFontSubpixelPositioning);
```

## Parameters

- `c`: A graphics context.
- `allowsFontSubpixelPositioning`: A Boolean value that specifies whether subpixel positioning of glyphs is allowed in the specified context.

<a id="Discussion"></a>

## Discussion

Sub-pixel positioning is used by the graphics context if it is allowed, enabled, and if the font itself is antialiased when drawn. For information on how to enable subpixel positioning, see the [CGContextSetShouldSubpixelPositionFonts](setshouldsubpixelpositionfonts%28__%29.md) function.

This parameter is not part of the graphics state.

## See Also

### Drawing Text

- [CGContextGetTextMatrix](textmatrix.md): Returns the current text matrix.
- [CGContextSetTextMatrix](../cgcontextsettextmatrix.md): Sets the current text matrix.
- [CGContextSetTextPosition](../cgcontextsettextposition.md): Sets the location at which text is drawn.
- [CGContextGetTextPosition](../cgcontextgettextposition.md)
- [CGContextSelectFont](selectfont%28name_size_textencoding_%29.md): Deprecated. Sets the font and font size in a graphics context.
- [CGContextSetCharacterSpacing](setcharacterspacing%28__%29.md): Sets the current character spacing.
- [CGContextSetFont](setfont%28__%29.md): Sets the platform font in a graphics context.
- [CGContextSetFontSize](setfontsize%28__%29.md): Sets the current font size.
- [CGContextSetTextDrawingMode](settextdrawingmode%28__%29.md): Sets the current text drawing mode.
- [CGContextSetAllowsFontSmoothing](setallowsfontsmoothing%28__%29.md): Sets whether or not to allow font smoothing for a graphics context.
- [CGContextSetAllowsFontSubpixelQuantization](setallowsfontsubpixelquantization%28__%29.md): Sets whether or not to allow subpixel quantization for a graphics context.
- [CGContextSetShouldSmoothFonts](setshouldsmoothfonts%28__%29.md): Enables or disables font smoothing in a graphics context.
- [CGContextSetShouldSubpixelPositionFonts](setshouldsubpixelpositionfonts%28__%29.md): Enables or disables subpixel positioning in a graphics context.
- [CGContextSetShouldSubpixelQuantizeFonts](setshouldsubpixelquantizefonts%28__%29.md): Enables or disables subpixel quantization in a graphics context.
- [CGContextShowGlyphs](showglyphs%28g_count_%29.md): Deprecated. Displays an array of glyphs at the current text position.
