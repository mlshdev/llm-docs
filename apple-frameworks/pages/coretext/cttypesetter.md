> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/cttypesetter](https://developer.apple.com/documentation/coretext/cttypesetter)

# CTTypesetter (Swift)

**Framework:** Core Text  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A typesetter which performs line layout.

## Declaration

```swift
class CTTypesetter
```

<a id="overview"></a>

## Overview

Line layout includes word wrapping, hyphenation, and line breaking in either vertical or horizontal rectangles. A typesetter object takes as input an attributed string and produces a line of typeset glyphs (composed into glyph runs) in a [CTLine](ctline.md) object. The typesetter performs character-to-glyph encoding, glyph ordering, and positional operations, such as kerning, tracking, and baseline adjustments. If multiline layout is needed, it is performed by a [CTFramesetter](ctframesetter.md) object, which calls into the typesetter to generate the typeset lines to fill the frame.

A [CTFramesetter](ctframesetter.md) encapsulates a typesetter and provides a reference to it as a convenience, but a caller may also choose to create a freestanding typesetter.

## Topics

### Creating a Typesetter

- [CTTypesetterCreateWithAttributedString(\_:)](cttypesettercreatewithattributedstring%28__%29.md): Creates an immutable typesetter object using an attributed string.
- [CTTypesetterCreateWithAttributedStringAndOptions(\_:\_:)](cttypesettercreatewithattributedstringandoptions%28____%29.md): Creates an immutable typesetter object using an attributed string and a dictionary of options.

### Creating Lines

- [CTTypesetterCreateLine(\_:\_:)](cttypesettercreateline%28____%29.md): Creates an immutable line from the typesetter.
- [CTTypesetterCreateLineWithOffset(\_:\_:\_:)](cttypesettercreatelinewithoffset%28______%29.md): Creates an immutable line from the typesetter at a specified line offset.

### Breaking Lines

- [CTTypesetterSuggestLineBreak(\_:\_:\_:)](cttypesettersuggestlinebreak%28______%29.md): Suggests a contextual line breakpoint based on the width provided.
- [CTTypesetterSuggestLineBreakWithOffset(\_:\_:\_:\_:)](cttypesettersuggestlinebreakwithoffset%28________%29.md): Suggests a contextual line breakpoint based on the width provided and the specified offset.
- [CTTypesetterSuggestClusterBreak(\_:\_:\_:)](cttypesettersuggestclusterbreak%28______%29.md): Suggests a cluster line breakpoint based on the width provided.
- [CTTypesetterSuggestClusterBreakWithOffset(\_:\_:\_:\_:)](cttypesettersuggestclusterbreakwithoffset%28________%29.md): Suggests a cluster line breakpoint based on the specified width and line offset.

### Getting the Type Identifier

- [CTTypesetterGetTypeID()](cttypesettergettypeid%28%29.md): Returns the Core Foundation type identifier of the typesetter object.

### Constants

- [Typesetter Options](typesetter-options.md): Control aspects of the typesetter’s text processing.

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
- [CTRun](ctrun.md): A glyph run.
- [CTRunDelegate](ctrundelegate.md): A run delegate.
- [CTTextTab](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.

# CTTypesetterRef (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A typesetter which performs line layout.

## Declaration

```objectivec
typedef const struct __CTTypesetter * CTTypesetterRef;
```

<a id="overview"></a>

## Overview

Line layout includes word wrapping, hyphenation, and line breaking in either vertical or horizontal rectangles. A typesetter object takes as input an attributed string and produces a line of typeset glyphs (composed into glyph runs) in a [CTLineRef](ctline.md) object. The typesetter performs character-to-glyph encoding, glyph ordering, and positional operations, such as kerning, tracking, and baseline adjustments. If multiline layout is needed, it is performed by a [CTFramesetterRef](ctframesetter.md) object, which calls into the typesetter to generate the typeset lines to fill the frame.

A [CTFramesetterRef](ctframesetter.md) encapsulates a typesetter and provides a reference to it as a convenience, but a caller may also choose to create a freestanding typesetter.

## Topics

### Creating a Typesetter

- [CTTypesetterCreateWithAttributedString](cttypesettercreatewithattributedstring%28__%29.md): Creates an immutable typesetter object using an attributed string.
- [CTTypesetterCreateWithAttributedStringAndOptions](cttypesettercreatewithattributedstringandoptions%28____%29.md): Creates an immutable typesetter object using an attributed string and a dictionary of options.

### Creating Lines

- [CTTypesetterCreateLine](cttypesettercreateline%28____%29.md): Creates an immutable line from the typesetter.
- [CTTypesetterCreateLineWithOffset](cttypesettercreatelinewithoffset%28______%29.md): Creates an immutable line from the typesetter at a specified line offset.

### Breaking Lines

- [CTTypesetterSuggestLineBreak](cttypesettersuggestlinebreak%28______%29.md): Suggests a contextual line breakpoint based on the width provided.
- [CTTypesetterSuggestLineBreakWithOffset](cttypesettersuggestlinebreakwithoffset%28________%29.md): Suggests a contextual line breakpoint based on the width provided and the specified offset.
- [CTTypesetterSuggestClusterBreak](cttypesettersuggestclusterbreak%28______%29.md): Suggests a cluster line breakpoint based on the width provided.
- [CTTypesetterSuggestClusterBreakWithOffset](cttypesettersuggestclusterbreakwithoffset%28________%29.md): Suggests a cluster line breakpoint based on the specified width and line offset.

### Getting the Type Identifier

- [CTTypesetterGetTypeID](cttypesettergettypeid%28%29.md): Returns the Core Foundation type identifier of the typesetter object.

### Constants

- [Typesetter Options](typesetter-options.md): Control aspects of the typesetter’s text processing.

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
- [CTRunRef](ctrun.md): A glyph run.
- [CTRunDelegateRef](ctrundelegate.md): A run delegate.
- [CTTextTabRef](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
