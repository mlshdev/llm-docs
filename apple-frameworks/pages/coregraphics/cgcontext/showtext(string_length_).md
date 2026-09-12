> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/showtext(string:length:)](https://developer.apple.com/documentation/coregraphics/cgcontext/showtext(string:length:))

# showText(string:length:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Displays a character array at the current text position, a point specified by the current text matrix.

> Use [Core Text](../../coretext.md) instead.

## Declaration

```swift
func showText(string: UnsafePointer<CChar>, length: Int)
```

## Parameters

- `string`: An array of characters to draw.
- `length`: The length of the array specified in the `bytes` parameter.

<a id="Discussion"></a>

## Discussion

Core Graphics uses font data provided by the system to map each byte of the array through the encoding vector of the current font to obtain the glyph to display. Note that the font must have been set using [selectFont(name:size:textEncoding:)](selectfont%28name_size_textencoding_%29.md). Don’t use `CGContextShowText` in conjunction with [setFont(\_:)](setfont%28__%29.md).

## See Also

### Related Documentation

- [showGlyphsAtPoint(x:y:glyphs:count:)](showglyphsatpoint%28x_y_glyphs_count_%29.md): Deprecated. Displays an array of glyphs at a position you specify.
- [showGlyphs(g:count:)](showglyphs%28g_count_%29.md): Deprecated. Displays an array of glyphs at the current text position.
- [showGlyphsWithAdvances(glyphs:advances:count:)](showglyphswithadvances%28glyphs_advances_count_%29.md): Deprecated. Draws an array of glyphs with varying offsets.

### Drawing Text

- [textMatrix](textmatrix.md): Returns the current text matrix.
- [textPosition](textposition.md)
- [selectFont(name:size:textEncoding:)](selectfont%28name_size_textencoding_%29.md): Deprecated. Sets the font and font size in a graphics context.
- [setCharacterSpacing(\_:)](setcharacterspacing%28__%29.md): Sets the current character spacing.
- [setFont(\_:)](setfont%28__%29.md): Sets the platform font in a graphics context.
- [setFontSize(\_:)](setfontsize%28__%29.md): Sets the current font size.
- [setTextDrawingMode(\_:)](settextdrawingmode%28__%29.md): Sets the current text drawing mode.
- [setAllowsFontSmoothing(\_:)](setallowsfontsmoothing%28__%29.md): Sets whether or not to allow font smoothing for a graphics context.
- [setAllowsFontSubpixelPositioning(\_:)](setallowsfontsubpixelpositioning%28__%29.md): Sets whether or not to allow subpixel positioning for a graphics context.
- [setAllowsFontSubpixelQuantization(\_:)](setallowsfontsubpixelquantization%28__%29.md): Sets whether or not to allow subpixel quantization for a graphics context.
- [setShouldSmoothFonts(\_:)](setshouldsmoothfonts%28__%29.md): Enables or disables font smoothing in a graphics context.
- [setShouldSubpixelPositionFonts(\_:)](setshouldsubpixelpositionfonts%28__%29.md): Enables or disables subpixel positioning in a graphics context.
- [setShouldSubpixelQuantizeFonts(\_:)](setshouldsubpixelquantizefonts%28__%29.md): Enables or disables subpixel quantization in a graphics context.
- [showGlyphs(g:count:)](showglyphs%28g_count_%29.md): Deprecated. Displays an array of glyphs at the current text position.
- [showGlyphs(\_:at:)](showglyphs%28__at_%29.md): Draws a set of glyphs at a set of corresponding positions.

# CGContextShowText (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Displays a character array at the current text position, a point specified by the current text matrix.

> Use [Core Text](../../coretext.md) instead.

## Declaration

```objectivec
extern void CGContextShowText(CGContextRef c, const char *string, size_t length);
```

## Parameters

- `c`: A graphics context.
- `string`: An array of characters to draw.
- `length`: The length of the array specified in the `bytes` parameter.

<a id="Discussion"></a>

## Discussion

Core Graphics uses font data provided by the system to map each byte of the array through the encoding vector of the current font to obtain the glyph to display. Note that the font must have been set using [CGContextSelectFont](selectfont%28name_size_textencoding_%29.md). Don’t use `CGContextShowText` in conjunction with [CGContextSetFont](setfont%28__%29.md).

## See Also

### Related Documentation

- [CGContextShowGlyphsAtPoint](showglyphsatpoint%28x_y_glyphs_count_%29.md): Deprecated. Displays an array of glyphs at a position you specify.
- [CGContextShowGlyphs](showglyphs%28g_count_%29.md): Deprecated. Displays an array of glyphs at the current text position.
- [CGContextShowGlyphsWithAdvances](showglyphswithadvances%28glyphs_advances_count_%29.md): Deprecated. Draws an array of glyphs with varying offsets.

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
- [CGContextSetAllowsFontSubpixelPositioning](setallowsfontsubpixelpositioning%28__%29.md): Sets whether or not to allow subpixel positioning for a graphics context.
- [CGContextSetAllowsFontSubpixelQuantization](setallowsfontsubpixelquantization%28__%29.md): Sets whether or not to allow subpixel quantization for a graphics context.
- [CGContextSetShouldSmoothFonts](setshouldsmoothfonts%28__%29.md): Enables or disables font smoothing in a graphics context.
- [CGContextSetShouldSubpixelPositionFonts](setshouldsubpixelpositionfonts%28__%29.md): Enables or disables subpixel positioning in a graphics context.
- [CGContextSetShouldSubpixelQuantizeFonts](setshouldsubpixelquantizefonts%28__%29.md): Enables or disables subpixel quantization in a graphics context.
