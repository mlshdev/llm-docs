> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctparagraphstyle](https://developer.apple.com/documentation/coretext/ctparagraphstyle)

# CTParagraphStyle (Swift)

**Framework:** Core Text  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Paragraph or ruler attributes in an attributed string.

## Declaration

```swift
class CTParagraphStyle
```

<a id="overview"></a>

## Overview

A paragraph style object represents a complex attribute value in an attributed string, storing a number of subattributes that affect paragraph layout for the characters of the string. Among these subattributes are alignment, tab stops, writing direction, line-breaking mode, and indentation settings.

## Topics

### Creating Paragraph Styles

- [CTParagraphStyleCreate(\_:\_:)](ctparagraphstylecreate%28____%29.md): Creates an immutable paragraph style.
- [CTParagraphStyleCreateCopy(\_:)](ctparagraphstylecreatecopy%28__%29.md): Creates an immutable copy of a paragraph style.

### Getting the Value of a Style Specifier

- [CTParagraphStyleGetValueForSpecifier(\_:\_:\_:\_:)](ctparagraphstylegetvalueforspecifier%28________%29.md): Obtains the current value for a single setting specifier.

### Getting the Type Identifier

- [CTParagraphStyleGetTypeID()](ctparagraphstylegettypeid%28%29.md): Returns the Core Foundation type identifier of the paragraph style object.

### Data Types

- [CTParagraphStyleSetting](ctparagraphstylesetting.md): This structure is used to alter the paragraph style.

### Constants

- [CTTextAlignment](cttextalignment.md): Constants that specify text alignment.
- [CTLineBreakMode](ctlinebreakmode.md): These constants specify what happens when a line is too long for its frame.
- [CTWritingDirection](ctwritingdirection.md): These constants specify the writing direction.
- [CTParagraphStyleSpecifier](ctparagraphstylespecifier.md): Constants used to query and modify a paragraph style object.

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
- [CTRun](ctrun.md): A glyph run.
- [CTRunDelegate](ctrundelegate.md): A run delegate.
- [CTTextTab](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetter](cttypesetter.md): A typesetter which performs line layout.

# CTParagraphStyleRef (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Paragraph or ruler attributes in an attributed string.

## Declaration

```objectivec
typedef const struct __CTParagraphStyle * CTParagraphStyleRef;
```

<a id="overview"></a>

## Overview

A paragraph style object represents a complex attribute value in an attributed string, storing a number of subattributes that affect paragraph layout for the characters of the string. Among these subattributes are alignment, tab stops, writing direction, line-breaking mode, and indentation settings.

## Topics

### Creating Paragraph Styles

- [CTParagraphStyleCreate](ctparagraphstylecreate%28____%29.md): Creates an immutable paragraph style.
- [CTParagraphStyleCreateCopy](ctparagraphstylecreatecopy%28__%29.md): Creates an immutable copy of a paragraph style.

### Getting the Value of a Style Specifier

- [CTParagraphStyleGetValueForSpecifier](ctparagraphstylegetvalueforspecifier%28________%29.md): Obtains the current value for a single setting specifier.

### Getting the Type Identifier

- [CTParagraphStyleGetTypeID](ctparagraphstylegettypeid%28%29.md): Returns the Core Foundation type identifier of the paragraph style object.

### Data Types

- [CTParagraphStyleSetting](ctparagraphstylesetting.md): This structure is used to alter the paragraph style.

### Constants

- [CTTextAlignment](cttextalignment.md): Constants that specify text alignment.
- [CTLineBreakMode](ctlinebreakmode.md): These constants specify what happens when a line is too long for its frame.
- [CTWritingDirection](ctwritingdirection.md): These constants specify the writing direction.
- [CTParagraphStyleSpecifier](ctparagraphstylespecifier.md): Constants used to query and modify a paragraph style object.

## See Also

### Opaque Types

- [CTFontRef](ctfont.md): A font object.
- [CTFontCollectionRef](ctfontcollection.md): A font collection.
- [CTFontDescriptorRef](ctfontdescriptor.md): A font descriptor.
- [CTFrameRef](ctframe.md): A frame.
- [CTFramesetterRef](ctframesetter.md): Generate text frames.
- [CTGlyphInfoRef](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTLineRef](ctline.md): A line of text.
- [CTRunRef](ctrun.md): A glyph run.
- [CTRunDelegateRef](ctrundelegate.md): A run delegate.
- [CTTextTabRef](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetterRef](cttypesetter.md): A typesetter which performs line layout.
