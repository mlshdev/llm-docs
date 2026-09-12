> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctline](https://developer.apple.com/documentation/coretext/ctline)

# CTLine (Swift)

**Framework:** Core Text  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A line of text.

## Declaration

```swift
class CTLine
```

<a id="overview"></a>

## Overview

A `CTLine` object contains an array of glyph runs. Line objects are created by the typesetter during a framesetting operation and can draw themselves directly into a graphics context.

## Topics

### Creating Lines

- [CTLineCreateWithAttributedString(\_:)](ctlinecreatewithattributedstring%28__%29.md): Creates a single immutable line object from an attributed string.
- [CTLineCreateTruncatedLine(\_:\_:\_:\_:)](ctlinecreatetruncatedline%28________%29.md): Creates a truncated line from an existing line.
- [CTLineCreateJustifiedLine(\_:\_:\_:)](ctlinecreatejustifiedline%28______%29.md): Creates a justified line from an existing line.

### Drawing the Line

- [CTLineDraw(\_:\_:)](ctlinedraw%28____%29.md): Draws a complete line.

### Getting Line Data

- [CTLineGetGlyphCount(\_:)](ctlinegetglyphcount%28__%29.md): Returns the total glyph count for the line object.
- [CTLineGetGlyphRuns(\_:)](ctlinegetglyphruns%28__%29.md): Returns the array of glyph runs that make up the line object.
- [CTLineGetStringRange(\_:)](ctlinegetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the line.
- [CTLineGetPenOffsetForFlush(\_:\_:\_:)](ctlinegetpenoffsetforflush%28______%29.md): Gets the pen offset required to draw flush text.

### Measuring Lines

- [CTLineGetImageBounds(\_:\_:)](ctlinegetimagebounds%28____%29.md): Calculates the image bounds for a line.
- [CTLineGetTypographicBounds(\_:\_:\_:\_:)](ctlinegettypographicbounds%28________%29.md): Calculates the typographic bounds of a line.
- [CTLineGetTrailingWhitespaceWidth(\_:)](ctlinegettrailingwhitespacewidth%28__%29.md): Returns the trailing whitespace width for a line.

### Getting Line Positioning

- [CTLineGetStringIndexForPosition(\_:\_:)](ctlinegetstringindexforposition%28____%29.md): Performs hit testing.
- [CTLineGetOffsetForStringIndex(\_:\_:\_:)](ctlinegetoffsetforstringindex%28______%29.md): Determines the graphical offset or offsets for a string index.
- [CTLineEnumerateCaretOffsets(\_:\_:)](ctlineenumeratecaretoffsets%28____%29.md): Enumerates caret offsets for characters in a line.

### Getting the Type Identifier

- [CTLineGetTypeID()](ctlinegettypeid%28%29.md): Returns the Core Foundation type identifier of the line object.

### Constants

- [CTLineTruncationType](ctlinetruncationtype.md): Truncation types required by the [CTLineCreateTruncatedLine(\_:\_:\_:\_:)](ctlinecreatetruncatedline%28________%29.md) function to tell the truncation engine which type of truncation is being requested.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Opaque Types

- [CTFont](ctfont.md): A font object.
- [CTFontCollection](ctfontcollection.md): A font collection.
- [CTFontDescriptor](ctfontdescriptor.md): A font descriptor.
- [CTFrame](ctframe.md): A frame.
- [CTFramesetter](ctframesetter.md): Generate text frames.
- [CTGlyphInfo](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTParagraphStyle](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRun](ctrun.md): A glyph run.
- [CTRunDelegate](ctrundelegate.md): A run delegate.
- [CTTextTab](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetter](cttypesetter.md): A typesetter which performs line layout.

# CTLineRef (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A line of text.

## Declaration

```objectivec
typedef const struct __CTLine * CTLineRef;
```

<a id="overview"></a>

## Overview

A `CTLine` object contains an array of glyph runs. Line objects are created by the typesetter during a framesetting operation and can draw themselves directly into a graphics context.

## Topics

### Creating Lines

- [CTLineCreateWithAttributedString](ctlinecreatewithattributedstring%28__%29.md): Creates a single immutable line object from an attributed string.
- [CTLineCreateTruncatedLine](ctlinecreatetruncatedline%28________%29.md): Creates a truncated line from an existing line.
- [CTLineCreateJustifiedLine](ctlinecreatejustifiedline%28______%29.md): Creates a justified line from an existing line.

### Drawing the Line

- [CTLineDraw](ctlinedraw%28____%29.md): Draws a complete line.

### Getting Line Data

- [CTLineGetGlyphCount](ctlinegetglyphcount%28__%29.md): Returns the total glyph count for the line object.
- [CTLineGetGlyphRuns](ctlinegetglyphruns%28__%29.md): Returns the array of glyph runs that make up the line object.
- [CTLineGetStringRange](ctlinegetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the line.
- [CTLineGetPenOffsetForFlush](ctlinegetpenoffsetforflush%28______%29.md): Gets the pen offset required to draw flush text.

### Measuring Lines

- [CTLineGetImageBounds](ctlinegetimagebounds%28____%29.md): Calculates the image bounds for a line.
- [CTLineGetTypographicBounds](ctlinegettypographicbounds%28________%29.md): Calculates the typographic bounds of a line.
- [CTLineGetTrailingWhitespaceWidth](ctlinegettrailingwhitespacewidth%28__%29.md): Returns the trailing whitespace width for a line.

### Getting Line Positioning

- [CTLineGetStringIndexForPosition](ctlinegetstringindexforposition%28____%29.md): Performs hit testing.
- [CTLineGetOffsetForStringIndex](ctlinegetoffsetforstringindex%28______%29.md): Determines the graphical offset or offsets for a string index.
- [CTLineEnumerateCaretOffsets](ctlineenumeratecaretoffsets%28____%29.md): Enumerates caret offsets for characters in a line.

### Getting the Type Identifier

- [CTLineGetTypeID](ctlinegettypeid%28%29.md): Returns the Core Foundation type identifier of the line object.

### Constants

- [CTLineTruncationType](ctlinetruncationtype.md): Truncation types required by the [CTLineCreateTruncatedLine](ctlinecreatetruncatedline%28________%29.md) function to tell the truncation engine which type of truncation is being requested.

## See Also

### Opaque Types

- [CTFontRef](ctfont.md): A font object.
- [CTFontCollectionRef](ctfontcollection.md): A font collection.
- [CTFontDescriptorRef](ctfontdescriptor.md): A font descriptor.
- [CTFrameRef](ctframe.md): A frame.
- [CTFramesetterRef](ctframesetter.md): Generate text frames.
- [CTGlyphInfoRef](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTParagraphStyleRef](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRunRef](ctrun.md): A glyph run.
- [CTRunDelegateRef](ctrundelegate.md): A run delegate.
- [CTTextTabRef](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetterRef](cttypesetter.md): A typesetter which performs line layout.
