> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrun](https://developer.apple.com/documentation/coretext/ctrun)

# CTRun (Swift)

**Framework:** Core Text  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A glyph run.

## Declaration

```swift
class CTRun
```

<a id="overview"></a>

## Overview

A glyph run is a set of consecutive glyphs sharing the same attributes and direction.

The typesetter creates glyph runs as it produces lines from character strings, attributes, and font objects. That is, a line is constructed of one or more glyphs runs. Glyph runs can draw themselves into a graphic context, if desired, although most users have no need to interact directly with glyph runs.

## Topics

### Getting Glyph Run Data

- [CTRunGetGlyphCount(\_:)](ctrungetglyphcount%28__%29.md): Gets the glyph count for the run.
- [CTRunGetAttributes(\_:)](ctrungetattributes%28__%29.md): Returns the attribute dictionary that was used to create the glyph run.
- [CTRunGetStatus(\_:)](ctrungetstatus%28__%29.md): Returns the run’s status.
- [CTRunGetGlyphsPtr(\_:)](ctrungetglyphsptr%28__%29.md): Returns a direct pointer for the glyph array stored in the run.
- [CTRunGetGlyphs(\_:\_:\_:)](ctrungetglyphs%28______%29.md): Copies a range of glyphs into a user-provided buffer.
- [CTRunGetPositionsPtr(\_:)](ctrungetpositionsptr%28__%29.md): Returns a direct pointer for the glyph position array stored in the run.
- [CTRunGetPositions(\_:\_:\_:)](ctrungetpositions%28______%29.md): Copies a range of glyph positions into a user-provided buffer.
- [CTRunGetAdvancesPtr(\_:)](ctrungetadvancesptr%28__%29.md): Returns a direct pointer for the glyph advance array stored in the run.
- [CTRunGetAdvances(\_:\_:\_:)](ctrungetadvances%28______%29.md): Copies a range of glyph advances into a user-provided buffer.
- [CTRunGetStringIndicesPtr(\_:)](ctrungetstringindicesptr%28__%29.md): Returns a direct pointer for the string indices stored in the run.
- [CTRunGetStringIndices(\_:\_:\_:)](ctrungetstringindices%28______%29.md): Copies a range of string indices into a user-provided buffer.
- [CTRunGetStringRange(\_:)](ctrungetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the run.

### Measuring the Glyph Run

- [CTLineGetBoundsWithOptions(\_:\_:)](ctlinegetboundswithoptions%28____%29.md): Calculates the bounds for a line.
- [CTRunGetTypographicBounds(\_:\_:\_:\_:\_:)](ctrungettypographicbounds%28__________%29.md): Gets the typographic bounds of the run.
- [CTRunGetImageBounds(\_:\_:\_:)](ctrungetimagebounds%28______%29.md): Calculates the image bounds for a glyph range.
- [CTRunGetBaseAdvancesAndOrigins(\_:\_:\_:\_:)](ctrungetbaseadvancesandorigins%28________%29.md): Copies a range of base advances and origins into user-provided buffers.

### Drawing the Glyph Run

- [CTRunDraw(\_:\_:\_:)](ctrundraw%28______%29.md): Draws a complete run or part of one.
- [CTRunGetTextMatrix(\_:)](ctrungettextmatrix%28__%29.md): Returns the text matrix needed to draw this run.

### Getting the Type Identifier

- [CTRunGetTypeID()](ctrungettypeid%28%29.md): Returns the Core Foundation type identifier of the run object.

### Constants

- [CTRunStatus](ctrunstatus.md): A bitfield that represents the disposition of the run.

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
- [CTLine](ctline.md): A line of text.
- [CTParagraphStyle](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRunDelegate](ctrundelegate.md): A run delegate.
- [CTTextTab](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetter](cttypesetter.md): A typesetter which performs line layout.

# CTRunRef (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A glyph run.

## Declaration

```objectivec
typedef const struct __CTRun * CTRunRef;
```

<a id="overview"></a>

## Overview

A glyph run is a set of consecutive glyphs sharing the same attributes and direction.

The typesetter creates glyph runs as it produces lines from character strings, attributes, and font objects. That is, a line is constructed of one or more glyphs runs. Glyph runs can draw themselves into a graphic context, if desired, although most users have no need to interact directly with glyph runs.

## Topics

### Getting Glyph Run Data

- [CTRunGetGlyphCount](ctrungetglyphcount%28__%29.md): Gets the glyph count for the run.
- [CTRunGetAttributes](ctrungetattributes%28__%29.md): Returns the attribute dictionary that was used to create the glyph run.
- [CTRunGetStatus](ctrungetstatus%28__%29.md): Returns the run’s status.
- [CTRunGetGlyphsPtr](ctrungetglyphsptr%28__%29.md): Returns a direct pointer for the glyph array stored in the run.
- [CTRunGetGlyphs](ctrungetglyphs%28______%29.md): Copies a range of glyphs into a user-provided buffer.
- [CTRunGetPositionsPtr](ctrungetpositionsptr%28__%29.md): Returns a direct pointer for the glyph position array stored in the run.
- [CTRunGetPositions](ctrungetpositions%28______%29.md): Copies a range of glyph positions into a user-provided buffer.
- [CTRunGetAdvancesPtr](ctrungetadvancesptr%28__%29.md): Returns a direct pointer for the glyph advance array stored in the run.
- [CTRunGetAdvances](ctrungetadvances%28______%29.md): Copies a range of glyph advances into a user-provided buffer.
- [CTRunGetStringIndicesPtr](ctrungetstringindicesptr%28__%29.md): Returns a direct pointer for the string indices stored in the run.
- [CTRunGetStringIndices](ctrungetstringindices%28______%29.md): Copies a range of string indices into a user-provided buffer.
- [CTRunGetStringRange](ctrungetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the run.

### Measuring the Glyph Run

- [CTLineGetBoundsWithOptions](ctlinegetboundswithoptions%28____%29.md): Calculates the bounds for a line.
- [CTRunGetTypographicBounds](ctrungettypographicbounds%28__________%29.md): Gets the typographic bounds of the run.
- [CTRunGetImageBounds](ctrungetimagebounds%28______%29.md): Calculates the image bounds for a glyph range.
- [CTRunGetBaseAdvancesAndOrigins](ctrungetbaseadvancesandorigins%28________%29.md): Copies a range of base advances and origins into user-provided buffers.

### Drawing the Glyph Run

- [CTRunDraw](ctrundraw%28______%29.md): Draws a complete run or part of one.
- [CTRunGetTextMatrix](ctrungettextmatrix%28__%29.md): Returns the text matrix needed to draw this run.

### Getting the Type Identifier

- [CTRunGetTypeID](ctrungettypeid%28%29.md): Returns the Core Foundation type identifier of the run object.

### Constants

- [CTRunStatus](ctrunstatus.md): A bitfield that represents the disposition of the run.

## See Also

### Opaque Types

- [CTFontRef](ctfont.md): A font object.
- [CTFontCollectionRef](ctfontcollection.md): A font collection.
- [CTFontDescriptorRef](ctfontdescriptor.md): A font descriptor.
- [CTFrameRef](ctframe.md): A frame.
- [CTFramesetterRef](ctframesetter.md): Generate text frames.
- [CTGlyphInfoRef](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTLineRef](ctline.md): A line of text.
- [CTParagraphStyleRef](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRunDelegateRef](ctrundelegate.md): A run delegate.
- [CTTextTabRef](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetterRef](cttypesetter.md): A typesetter which performs line layout.
