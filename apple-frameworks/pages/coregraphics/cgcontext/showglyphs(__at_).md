> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/showglyphs(_:at:)](https://developer.apple.com/documentation/coregraphics/cgcontext/showglyphs(_:at:))

# showGlyphs(\_:at:)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws a set of glyphs at a set of corresponding positions.

## Declaration

```swift
func showGlyphs(_ glyphs: [CGGlyph], at positions: [CGPoint])
```

## Parameters

- `glyphs`: An array of glyphs.
- `positions`: An array positions for the glyphs. Each item in this array specifies the position at which to draw the glyph at the corresponding index in the `glyphs` array.

<a id="Discussion"></a>

## Discussion

Points in the positions array are specified in text space, so the [textMatrix](textmatrix.md) property defines their transformation to user space.

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
- [setAllowsFontSubpixelPositioning(\_:)](setallowsfontsubpixelpositioning%28__%29.md): Sets whether or not to allow subpixel positioning for a graphics context.
- [setAllowsFontSubpixelQuantization(\_:)](setallowsfontsubpixelquantization%28__%29.md): Sets whether or not to allow subpixel quantization for a graphics context.
- [setShouldSmoothFonts(\_:)](setshouldsmoothfonts%28__%29.md): Enables or disables font smoothing in a graphics context.
- [setShouldSubpixelPositionFonts(\_:)](setshouldsubpixelpositionfonts%28__%29.md): Enables or disables subpixel positioning in a graphics context.
- [setShouldSubpixelQuantizeFonts(\_:)](setshouldsubpixelquantizefonts%28__%29.md): Enables or disables subpixel quantization in a graphics context.
- [showGlyphs(g:count:)](showglyphs%28g_count_%29.md): Deprecated. Displays an array of glyphs at the current text position.
- [showGlyphsAtPoint(x:y:glyphs:count:)](showglyphsatpoint%28x_y_glyphs_count_%29.md): Deprecated. Displays an array of glyphs at a position you specify.
