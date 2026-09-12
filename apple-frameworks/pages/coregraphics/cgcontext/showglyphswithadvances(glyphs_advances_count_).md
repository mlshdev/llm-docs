> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/showglyphswithadvances(glyphs:advances:count:)](https://developer.apple.com/documentation/coregraphics/cgcontext/showglyphswithadvances(glyphs:advances:count:))

# showGlyphsWithAdvances(glyphs:advances:count:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Draws an array of glyphs with varying offsets.

> Use [Core Text](../../coretext.md) instead.

## Declaration

```swift
func showGlyphsWithAdvances(glyphs: UnsafePointer<CGGlyph>?, advances: UnsafePointer<CGSize>?, count: Int)
```

## Parameters

- `glyphs`: An array of glyphs.
- `advances`: An array of offset values associated with each glyph in the array. Each value specifies the offset from the previous glyph’s origin to the origin of the corresponding glyph. Offsets are specified in user space.
- `count`: The number of glyphs in the specified array.

<a id="Discussion"></a>

## Discussion

This function draws an array of glyphs at the current point specified by the text matrix.

## See Also

### Related Documentation

- [showText(string:length:)](showtext%28string_length_%29.md): Deprecated. Displays a character array at the current text position, a point specified by the current text matrix.
- [showTextAtPoint(x:y:string:length:)](showtextatpoint%28x_y_string_length_%29.md): Deprecated. Displays a character string at a position you specify.

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

# CGContextShowGlyphsWithAdvances (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.9) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Draws an array of glyphs with varying offsets.

> Use [Core Text](../../coretext.md) instead.

## Declaration

```objectivec
extern void CGContextShowGlyphsWithAdvances(CGContextRef c, const CGGlyph *glyphs, const CGSize *advances, size_t count);
```

## Parameters

- `c`: The graphics context in which to display the glyphs.
- `glyphs`: An array of glyphs.
- `advances`: An array of offset values associated with each glyph in the array. Each value specifies the offset from the previous glyph’s origin to the origin of the corresponding glyph. Offsets are specified in user space.
- `count`: The number of glyphs in the specified array.

<a id="Discussion"></a>

## Discussion

This function draws an array of glyphs at the current point specified by the text matrix.

## See Also

### Related Documentation

- [CGContextShowText](showtext%28string_length_%29.md): Deprecated. Displays a character array at the current text position, a point specified by the current text matrix.
- [CGContextShowTextAtPoint](showtextatpoint%28x_y_string_length_%29.md): Deprecated. Displays a character string at a position you specify.

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
