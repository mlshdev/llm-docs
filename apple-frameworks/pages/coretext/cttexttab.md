> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/cttexttab](https://developer.apple.com/documentation/coretext/cttexttab)

# CTTextTab (Swift)

**Framework:** Core Text  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A tab in a paragraph style, storing an alignment type and location.

## Declaration

```swift
class CTTextTab
```

<a id="overview"></a>

## Overview

Core Text supports five alignment types: [CTTextAlignment.left](cttextalignment/left.md), [CTTextAlignment.center](cttextalignment/center.md), [CTTextAlignment.right](cttextalignment/right.md), [CTTextAlignment.justified](cttextalignment/justified.md) and [CTTextAlignment.natural](cttextalignment/natural.md). These alignment types are absolute, not based on the line sweep direction of text.

For example, tabbed text is always positioned to the left of a right-aligned tab, whether the line sweep direction is left to right or right to left. A tab’s location, on the other hand, is relative to the back margin. A tab set at 1.5 inches, for example, is at 1.5 inches from the right in right-to-left text.

## Topics

### Creating Text Tabs

- [CTTextTabCreate(\_:\_:\_:)](cttexttabcreate%28______%29.md): Creates and initializes a new text tab object.
- [kCTTabColumnTerminatorsAttributeName](kcttabcolumnterminatorsattributename.md): Specifies the terminating character for a tab column.

### Getting Text Tab Data

- [CTTextTabGetAlignment(\_:)](cttexttabgetalignment%28__%29.md): Returns the text alignment of the tab.
- [CTTextTabGetLocation(\_:)](cttexttabgetlocation%28__%29.md): Returns the tab’s ruler location.
- [CTTextTabGetOptions(\_:)](cttexttabgetoptions%28__%29.md): Returns the dictionary of attributes associated with the tab.

### Getting the Type Identifier

- [CTTextTabGetTypeID()](cttexttabgettypeid%28%29.md): Returns the Core Foundation type identifier of the text tab object.

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
- [CTTypesetter](cttypesetter.md): A typesetter which performs line layout.

# CTTextTabRef (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A tab in a paragraph style, storing an alignment type and location.

## Declaration

```objectivec
typedef const struct __CTTextTab * CTTextTabRef;
```

<a id="overview"></a>

## Overview

Core Text supports five alignment types: [kCTTextAlignmentLeft](cttextalignment/left.md), [kCTTextAlignmentCenter](cttextalignment/center.md), [kCTTextAlignmentRight](cttextalignment/right.md), [kCTTextAlignmentJustified](cttextalignment/justified.md) and [kCTTextAlignmentNatural](cttextalignment/natural.md). These alignment types are absolute, not based on the line sweep direction of text.

For example, tabbed text is always positioned to the left of a right-aligned tab, whether the line sweep direction is left to right or right to left. A tab’s location, on the other hand, is relative to the back margin. A tab set at 1.5 inches, for example, is at 1.5 inches from the right in right-to-left text.

## Topics

### Creating Text Tabs

- [CTTextTabCreate](cttexttabcreate%28______%29.md): Creates and initializes a new text tab object.
- [kCTTabColumnTerminatorsAttributeName](kcttabcolumnterminatorsattributename.md): Specifies the terminating character for a tab column.

### Getting Text Tab Data

- [CTTextTabGetAlignment](cttexttabgetalignment%28__%29.md): Returns the text alignment of the tab.
- [CTTextTabGetLocation](cttexttabgetlocation%28__%29.md): Returns the tab’s ruler location.
- [CTTextTabGetOptions](cttexttabgetoptions%28__%29.md): Returns the dictionary of attributes associated with the tab.

### Getting the Type Identifier

- [CTTextTabGetTypeID](cttexttabgettypeid%28%29.md): Returns the Core Foundation type identifier of the text tab object.

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
- [CTTypesetterRef](cttypesetter.md): A typesetter which performs line layout.
