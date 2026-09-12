> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctglyphinfo](https://developer.apple.com/documentation/coretext/ctglyphinfo)

# CTGlyphInfo (Swift)

**Framework:** Core Text  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Override a font’s specified mapping from Unicode to the glyph ID.

## Declaration

```swift
class CTGlyphInfo
```

## Topics

### Getting the GlyphInfo Type

- [CTGlyphInfoGetTypeID()](ctglyphinfogettypeid%28%29.md): Returns the Core Foundation type identifier of the glyph info object

### Creating GlyphInfo Objects

- [CTGlyphInfoCreateWithGlyphName(\_:\_:\_:)](ctglyphinfocreatewithglyphname%28______%29.md): Creates an immutable glyph info object with a glyph name.
- [CTGlyphInfoCreateWithGlyph(\_:\_:\_:)](ctglyphinfocreatewithglyph%28______%29.md): Creates an immutable glyph info object with a glyph index.
- [CTGlyphInfoCreateWithCharacterIdentifier(\_:\_:\_:)](ctglyphinfocreatewithcharacteridentifier%28______%29.md): Creates an immutable glyph info object with a character identifier.

### Getting GlyphInfo Data

- [CTGlyphInfoGetGlyphName(\_:)](ctglyphinfogetglyphname%28__%29.md): Retrieves the glyph name for a glyph info object, if that object exists.
- [CTGlyphInfoGetCharacterIdentifier(\_:)](ctglyphinfogetcharacteridentifier%28__%29.md): Gets the character identifier for a glyph info object.
- [CTGlyphInfoGetCharacterCollection(\_:)](ctglyphinfogetcharactercollection%28__%29.md): Gets the character collection for a glyph info object.
- [CTGlyphInfoGetGlyph(\_:)](ctglyphinfogetglyph%28__%29.md): Retrieves the glyph for a glyph info, if that object exists.

### Constants

- [CTCharacterCollection](ctcharactercollection.md): Constants that specify character collections.

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
- [CTLine](ctline.md): A line of text.
- [CTParagraphStyle](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRun](ctrun.md): A glyph run.
- [CTRunDelegate](ctrundelegate.md): A run delegate.
- [CTTextTab](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetter](cttypesetter.md): A typesetter which performs line layout.

# CTGlyphInfoRef (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Override a font’s specified mapping from Unicode to the glyph ID.

## Declaration

```objectivec
typedef const struct __CTGlyphInfo * CTGlyphInfoRef;
```

## Topics

### Getting the GlyphInfo Type

- [CTGlyphInfoGetTypeID](ctglyphinfogettypeid%28%29.md): Returns the Core Foundation type identifier of the glyph info object

### Creating GlyphInfo Objects

- [CTGlyphInfoCreateWithGlyphName](ctglyphinfocreatewithglyphname%28______%29.md): Creates an immutable glyph info object with a glyph name.
- [CTGlyphInfoCreateWithGlyph](ctglyphinfocreatewithglyph%28______%29.md): Creates an immutable glyph info object with a glyph index.
- [CTGlyphInfoCreateWithCharacterIdentifier](ctglyphinfocreatewithcharacteridentifier%28______%29.md): Creates an immutable glyph info object with a character identifier.

### Getting GlyphInfo Data

- [CTGlyphInfoGetGlyphName](ctglyphinfogetglyphname%28__%29.md): Retrieves the glyph name for a glyph info object, if that object exists.
- [CTGlyphInfoGetCharacterIdentifier](ctglyphinfogetcharacteridentifier%28__%29.md): Gets the character identifier for a glyph info object.
- [CTGlyphInfoGetCharacterCollection](ctglyphinfogetcharactercollection%28__%29.md): Gets the character collection for a glyph info object.
- [CTGlyphInfoGetGlyph](ctglyphinfogetglyph%28__%29.md): Retrieves the glyph for a glyph info, if that object exists.

### Constants

- [CTCharacterCollection](ctcharactercollection.md): Constants that specify character collections.

## See Also

### Opaque Types

- [CTFontRef](ctfont.md): A font object.
- [CTFontCollectionRef](ctfontcollection.md): A font collection.
- [CTFontDescriptorRef](ctfontdescriptor.md): A font descriptor.
- [CTFrameRef](ctframe.md): A frame.
- [CTFramesetterRef](ctframesetter.md): Generate text frames.
- [CTLineRef](ctline.md): A line of text.
- [CTParagraphStyleRef](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRunRef](ctrun.md): A glyph run.
- [CTRunDelegateRef](ctrundelegate.md): A run delegate.
- [CTTextTabRef](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetterRef](cttypesetter.md): A typesetter which performs line layout.
