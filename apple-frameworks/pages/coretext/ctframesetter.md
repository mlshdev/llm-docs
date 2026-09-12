> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctframesetter](https://developer.apple.com/documentation/coretext/ctframesetter)

# CTFramesetter (Swift)

**Framework:** Core Text  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Generate text frames.

## Declaration

```swift
class CTFramesetter
```

<a id="overview"></a>

## Overview

`CTFramesetter` is an object factory for [CTFrame](ctframe.md) objects.

The framesetter takes an attributed string object and a shape descriptor object and calls into the typesetter to create line objects that fill that shape. The output is a frame object containing an array of lines. The frame can then draw itself directly into the current graphic context.

## Topics

### Creating a Framesetter

- [CTFramesetterCreateWithAttributedString(\_:)](ctframesettercreatewithattributedstring%28__%29.md): Creates an immutable framesetter object from an attributed string.
- [CTFramesetterCreateWithTypesetter(\_:)](ctframesettercreatewithtypesetter%28__%29.md): Creates a framesetter directly from a typesetter.

### Creating Frames

- [CTFramesetterCreateFrame(\_:\_:\_:\_:)](ctframesettercreateframe%28________%29.md): Creates an immutable frame using a framesetter.
- [CTFramesetterGetTypesetter(\_:)](ctframesettergettypesetter%28__%29.md): Returns the typesetter object being used by the framesetter.

### Frame Sizing

- [CTFramesetterSuggestFrameSizeWithConstraints(\_:\_:\_:\_:\_:)](ctframesettersuggestframesizewithconstraints%28__________%29.md): Determines the frame size needed for a string range.

### Getting the Type Identifier

- [CTFramesetterGetTypeID()](ctframesettergettypeid%28%29.md): Returns the Core Foundation type identifier of the framesetter object.

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
- [CTGlyphInfo](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTLine](ctline.md): A line of text.
- [CTParagraphStyle](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRun](ctrun.md): A glyph run.
- [CTRunDelegate](ctrundelegate.md): A run delegate.
- [CTTextTab](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetter](cttypesetter.md): A typesetter which performs line layout.

# CTFramesetterRef (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Generate text frames.

## Declaration

```objectivec
typedef const struct __CTFramesetter * CTFramesetterRef;
```

<a id="overview"></a>

## Overview

`CTFramesetter` is an object factory for [CTFrameRef](ctframe.md) objects.

The framesetter takes an attributed string object and a shape descriptor object and calls into the typesetter to create line objects that fill that shape. The output is a frame object containing an array of lines. The frame can then draw itself directly into the current graphic context.

## Topics

### Creating a Framesetter

- [CTFramesetterCreateWithAttributedString](ctframesettercreatewithattributedstring%28__%29.md): Creates an immutable framesetter object from an attributed string.
- [CTFramesetterCreateWithTypesetter](ctframesettercreatewithtypesetter%28__%29.md): Creates a framesetter directly from a typesetter.

### Creating Frames

- [CTFramesetterCreateFrame](ctframesettercreateframe%28________%29.md): Creates an immutable frame using a framesetter.
- [CTFramesetterGetTypesetter](ctframesettergettypesetter%28__%29.md): Returns the typesetter object being used by the framesetter.

### Frame Sizing

- [CTFramesetterSuggestFrameSizeWithConstraints](ctframesettersuggestframesizewithconstraints%28__________%29.md): Determines the frame size needed for a string range.

### Getting the Type Identifier

- [CTFramesetterGetTypeID](ctframesettergettypeid%28%29.md): Returns the Core Foundation type identifier of the framesetter object.

## See Also

### Opaque Types

- [CTFontRef](ctfont.md): A font object.
- [CTFontCollectionRef](ctfontcollection.md): A font collection.
- [CTFontDescriptorRef](ctfontdescriptor.md): A font descriptor.
- [CTFrameRef](ctframe.md): A frame.
- [CTGlyphInfoRef](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTLineRef](ctline.md): A line of text.
- [CTParagraphStyleRef](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRunRef](ctrun.md): A glyph run.
- [CTRunDelegateRef](ctrundelegate.md): A run delegate.
- [CTTextTabRef](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetterRef](cttypesetter.md): A typesetter which performs line layout.
