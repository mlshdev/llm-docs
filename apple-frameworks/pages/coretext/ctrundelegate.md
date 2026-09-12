> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrundelegate](https://developer.apple.com/documentation/coretext/ctrundelegate)

# CTRunDelegate (Swift)

**Framework:** Core Text  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A run delegate.

## Declaration

```swift
class CTRunDelegate
```

<a id="overview"></a>

## Overview

A run delegate is assigned to a run (attribute range) to control typographic traits such glyph ascent, glyph descent, and glyph width.

The callbacks defined for `CTRunDelegate` objects are provided by the owner of a run delegate and are used to modify glyph metrics during layout. The values returned by the delegate are applied to each glyph in the run or runs corresponding to the attribute with that delegate.

## Topics

### Creating a Run Delegate

- [CTRunDelegateCreate(\_:\_:)](ctrundelegatecreate%28____%29.md): Creates an immutable instance of a run delegate.

### Getting Information About a Run Delegate

- [CTRunDelegateGetRefCon(\_:)](ctrundelegategetrefcon%28__%29.md): Returns a run delegate’s “refCon” value.
- [CTRunDelegateGetTypeID()](ctrundelegategettypeid%28%29.md): Returns the type of CTRunDelegate objects.

### Callbacks

- [CTRunDelegateGetAscentCallback](ctrundelegategetascentcallback.md): Defines a pointer to a function that determines typographic ascent of glyphs in the run.
- [CTRunDelegateGetDescentCallback](ctrundelegategetdescentcallback.md): Defines a pointer to a function that determines typographic descent of glyphs in the run.
- [CTRunDelegateGetWidthCallback](ctrundelegategetwidthcallback.md): Defines a pointer to a function that determines the typographic width of glyphs in the run.
- [CTRunDelegateDeallocateCallback](ctrundelegatedeallocatecallback.md): Defines a pointer to a function that is invoked when a CTRunDelegate object is deallocated.

### Data Types

- [CTRunDelegateCallbacks](ctrundelegatecallbacks.md): A structure holding pointers to callbacks implemented by the run delegate.

### Constants

- [Run Delegate Versions](1498177-run-delegate-versions.md): The version of the run delegate.

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
- [CTTextTab](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetter](cttypesetter.md): A typesetter which performs line layout.

# CTRunDelegateRef (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A run delegate.

## Declaration

```objectivec
typedef const struct __CTRunDelegate * CTRunDelegateRef;
```

<a id="overview"></a>

## Overview

A run delegate is assigned to a run (attribute range) to control typographic traits such glyph ascent, glyph descent, and glyph width.

The callbacks defined for `CTRunDelegate` objects are provided by the owner of a run delegate and are used to modify glyph metrics during layout. The values returned by the delegate are applied to each glyph in the run or runs corresponding to the attribute with that delegate.

## Topics

### Creating a Run Delegate

- [CTRunDelegateCreate](ctrundelegatecreate%28____%29.md): Creates an immutable instance of a run delegate.

### Getting Information About a Run Delegate

- [CTRunDelegateGetRefCon](ctrundelegategetrefcon%28__%29.md): Returns a run delegate’s “refCon” value.
- [CTRunDelegateGetTypeID](ctrundelegategettypeid%28%29.md): Returns the type of CTRunDelegate objects.

### Callbacks

- [CTRunDelegateGetAscentCallback](ctrundelegategetascentcallback.md): Defines a pointer to a function that determines typographic ascent of glyphs in the run.
- [CTRunDelegateGetDescentCallback](ctrundelegategetdescentcallback.md): Defines a pointer to a function that determines typographic descent of glyphs in the run.
- [CTRunDelegateGetWidthCallback](ctrundelegategetwidthcallback.md): Defines a pointer to a function that determines the typographic width of glyphs in the run.
- [CTRunDelegateDeallocateCallback](ctrundelegatedeallocatecallback.md): Defines a pointer to a function that is invoked when a CTRunDelegate object is deallocated.

### Data Types

- [CTRunDelegateCallbacks](ctrundelegatecallbacks.md): A structure holding pointers to callbacks implemented by the run delegate.

### Constants

- [Run Delegate Versions](1498177-run-delegate-versions.md): The version of the run delegate.

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
- [CTTextTabRef](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetterRef](cttypesetter.md): A typesetter which performs line layout.
