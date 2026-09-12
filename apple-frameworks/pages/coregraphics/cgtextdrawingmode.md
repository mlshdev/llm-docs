> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgtextdrawingmode](https://developer.apple.com/documentation/coregraphics/cgtextdrawingmode)

# CGTextDrawingMode (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Modes for rendering text.

## Declaration

```swift
enum CGTextDrawingMode
```

<a id="overview"></a>

## Overview

You provide a text drawing mode constant to the function [setTextDrawingMode(\_:)](cgcontext/settextdrawingmode%28__%29.md) to set the current text drawing mode for a graphics context. Text drawing modes determine how Core Graphics renders individual glyphs onscreen. For example, you can set a text drawing mode to draw text filled in or outlined (stroked) or both. You can also create special effects with the text clipping drawing modes, such as clipping an image to a glyph shape.

## Topics

### Constants

- [CGTextDrawingMode.fill](cgtextdrawingmode/fill.md): Perform a fill operation on the text.
- [CGTextDrawingMode.stroke](cgtextdrawingmode/stroke.md): Perform a stroke operation on the text.
- [CGTextDrawingMode.fillStroke](cgtextdrawingmode/fillstroke.md): Perform fill, then stroke operations on the text.
- [CGTextDrawingMode.invisible](cgtextdrawingmode/invisible.md): Do not draw the text, but do update the text position.
- [CGTextDrawingMode.fillClip](cgtextdrawingmode/fillclip.md): Perform a fill operation, then intersect the text with the current clipping path.
- [CGTextDrawingMode.strokeClip](cgtextdrawingmode/strokeclip.md): Perform a stroke operation, then intersect the text with the current clipping path.
- [CGTextDrawingMode.fillStrokeClip](cgtextdrawingmode/fillstrokeclip.md): Perform fill then stroke operations, then intersect the text with the current clipping path.
- [CGTextDrawingMode.clip](cgtextdrawingmode/clip.md): Specifies to intersect the text with the current clipping path. This mode does not paint the text.

### Initializers

- [init(rawValue:)](cgtextdrawingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drawing Text

- [textMatrix](cgcontext/textmatrix.md): Returns the current text matrix.
- [textPosition](cgcontext/textposition.md)
- [selectFont(name:size:textEncoding:)](cgcontext/selectfont%28name_size_textencoding_%29.md): Deprecated. Sets the font and font size in a graphics context.
- [setCharacterSpacing(\_:)](cgcontext/setcharacterspacing%28__%29.md): Sets the current character spacing.
- [setFont(\_:)](cgcontext/setfont%28__%29.md): Sets the platform font in a graphics context.
- [setFontSize(\_:)](cgcontext/setfontsize%28__%29.md): Sets the current font size.
- [setTextDrawingMode(\_:)](cgcontext/settextdrawingmode%28__%29.md): Sets the current text drawing mode.
- [setAllowsFontSmoothing(\_:)](cgcontext/setallowsfontsmoothing%28__%29.md): Sets whether or not to allow font smoothing for a graphics context.
- [setAllowsFontSubpixelPositioning(\_:)](cgcontext/setallowsfontsubpixelpositioning%28__%29.md): Sets whether or not to allow subpixel positioning for a graphics context.
- [setAllowsFontSubpixelQuantization(\_:)](cgcontext/setallowsfontsubpixelquantization%28__%29.md): Sets whether or not to allow subpixel quantization for a graphics context.
- [setShouldSmoothFonts(\_:)](cgcontext/setshouldsmoothfonts%28__%29.md): Enables or disables font smoothing in a graphics context.
- [setShouldSubpixelPositionFonts(\_:)](cgcontext/setshouldsubpixelpositionfonts%28__%29.md): Enables or disables subpixel positioning in a graphics context.
- [setShouldSubpixelQuantizeFonts(\_:)](cgcontext/setshouldsubpixelquantizefonts%28__%29.md): Enables or disables subpixel quantization in a graphics context.
- [showGlyphs(g:count:)](cgcontext/showglyphs%28g_count_%29.md): Deprecated. Displays an array of glyphs at the current text position.
- [showGlyphs(\_:at:)](cgcontext/showglyphs%28__at_%29.md): Draws a set of glyphs at a set of corresponding positions.

# CGTextDrawingMode (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Modes for rendering text.

## Declaration

```objectivec
enum CGTextDrawingMode : int32_t;
```

<a id="overview"></a>

## Overview

You provide a text drawing mode constant to the function [CGContextSetTextDrawingMode](cgcontext/settextdrawingmode%28__%29.md) to set the current text drawing mode for a graphics context. Text drawing modes determine how Core Graphics renders individual glyphs onscreen. For example, you can set a text drawing mode to draw text filled in or outlined (stroked) or both. You can also create special effects with the text clipping drawing modes, such as clipping an image to a glyph shape.

## Topics

### Constants

- [kCGTextFill](cgtextdrawingmode/fill.md): Perform a fill operation on the text.
- [kCGTextStroke](cgtextdrawingmode/stroke.md): Perform a stroke operation on the text.
- [kCGTextFillStroke](cgtextdrawingmode/fillstroke.md): Perform fill, then stroke operations on the text.
- [kCGTextInvisible](cgtextdrawingmode/invisible.md): Do not draw the text, but do update the text position.
- [kCGTextFillClip](cgtextdrawingmode/fillclip.md): Perform a fill operation, then intersect the text with the current clipping path.
- [kCGTextStrokeClip](cgtextdrawingmode/strokeclip.md): Perform a stroke operation, then intersect the text with the current clipping path.
- [kCGTextFillStrokeClip](cgtextdrawingmode/fillstrokeclip.md): Perform fill then stroke operations, then intersect the text with the current clipping path.
- [kCGTextClip](cgtextdrawingmode/clip.md): Specifies to intersect the text with the current clipping path. This mode does not paint the text.

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
