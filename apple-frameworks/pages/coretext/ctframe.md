> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctframe](https://developer.apple.com/documentation/coretext/ctframe)

# CTFrame (Swift)

**Framework:** Core Text  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A frame.

## Declaration

```swift
class CTFrame
```

<a id="overview"></a>

## Overview

A frame contains multiple lines of text. The frame object is the output resulting from the text-framing process performed by a [CTFramesetter](ctframesetter.md) object.

You can draw the entire text frame directly into the current graphic context. The frame object contains an array of line objects that can be retrieved for individual rendering or to get glyph information.

## Topics

### Getting Frame Data

- [CTFrameGetStringRange(\_:)](ctframegetstringrange%28__%29.md): Returns the range of characters originally requested to fill the frame.
- [CTFrameGetVisibleStringRange(\_:)](ctframegetvisiblestringrange%28__%29.md): Returns the range of characters that actually fit in the frame.
- [CTFrameGetPath(\_:)](ctframegetpath%28__%29.md): Returns the path used to create the frame.
- [CTFrameGetFrameAttributes(\_:)](ctframegetframeattributes%28__%29.md): Returns the frame attributes used to create the frame.

### Getting Lines

- [CTFrameGetLines(\_:)](ctframegetlines%28__%29.md): Returns an array of lines stored in the frame.
- [CTFrameGetLineOrigins(\_:\_:\_:)](ctframegetlineorigins%28______%29.md): Copies a range of line origins for a frame.

### Drawing the Frame

- [CTFrameDraw(\_:\_:)](ctframedraw%28____%29.md): Draws an entire frame into a context.

### Getting the Type Identifier

- [CTFrameGetTypeID()](ctframegettypeid%28%29.md): Returns the type identifier for the CTFrame opaque type.

### Data Types

- [CTFramePathFillRule](ctframepathfillrule.md): These constants specify the fill rule used by a frame

### Constants

- [CTFrameProgression](ctframeprogression.md): Constants that specify frame progression types.
- [kCTFrameProgressionAttributeName](kctframeprogressionattributename.md): Specifies progression for a frame.
- [kCTFramePathFillRuleAttributeName](kctframepathfillruleattributename.md): The key used to specify the fill rule for a frame.
- [kCTFramePathWidthAttributeName](kctframepathwidthattributename.md): The key used to specify the frame width.
- [kCTFrameClippingPathsAttributeName](kctframeclippingpathsattributename.md): Specifies array of paths to clip frame.
- [kCTFramePathClippingPathAttributeName](kctframepathclippingpathattributename.md): Specifies clipping path.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Opaque Types

- [CTFont](ctfont.md): A font object.
- [CTFontCollection](ctfontcollection.md): A font collection.
- [CTFontDescriptor](ctfontdescriptor.md): A font descriptor.
- [CTFramesetter](ctframesetter.md): Generate text frames.
- [CTGlyphInfo](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTLine](ctline.md): A line of text.
- [CTParagraphStyle](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRun](ctrun.md): A glyph run.
- [CTRunDelegate](ctrundelegate.md): A run delegate.
- [CTTextTab](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetter](cttypesetter.md): A typesetter which performs line layout.

# CTFrameRef (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A frame.

## Declaration

```objectivec
typedef const struct __CTFrame * CTFrameRef;
```

<a id="overview"></a>

## Overview

A frame contains multiple lines of text. The frame object is the output resulting from the text-framing process performed by a [CTFramesetterRef](ctframesetter.md) object.

You can draw the entire text frame directly into the current graphic context. The frame object contains an array of line objects that can be retrieved for individual rendering or to get glyph information.

## Topics

### Getting Frame Data

- [CTFrameGetStringRange](ctframegetstringrange%28__%29.md): Returns the range of characters originally requested to fill the frame.
- [CTFrameGetVisibleStringRange](ctframegetvisiblestringrange%28__%29.md): Returns the range of characters that actually fit in the frame.
- [CTFrameGetPath](ctframegetpath%28__%29.md): Returns the path used to create the frame.
- [CTFrameGetFrameAttributes](ctframegetframeattributes%28__%29.md): Returns the frame attributes used to create the frame.

### Getting Lines

- [CTFrameGetLines](ctframegetlines%28__%29.md): Returns an array of lines stored in the frame.
- [CTFrameGetLineOrigins](ctframegetlineorigins%28______%29.md): Copies a range of line origins for a frame.

### Drawing the Frame

- [CTFrameDraw](ctframedraw%28____%29.md): Draws an entire frame into a context.

### Getting the Type Identifier

- [CTFrameGetTypeID](ctframegettypeid%28%29.md): Returns the type identifier for the CTFrame opaque type.

### Data Types

- [CTFramePathFillRule](ctframepathfillrule.md): These constants specify the fill rule used by a frame

### Constants

- [CTFrameProgression](ctframeprogression.md): Constants that specify frame progression types.
- [kCTFrameProgressionAttributeName](kctframeprogressionattributename.md): Specifies progression for a frame.
- [kCTFramePathFillRuleAttributeName](kctframepathfillruleattributename.md): The key used to specify the fill rule for a frame.
- [kCTFramePathWidthAttributeName](kctframepathwidthattributename.md): The key used to specify the frame width.
- [kCTFrameClippingPathsAttributeName](kctframeclippingpathsattributename.md): Specifies array of paths to clip frame.
- [kCTFramePathClippingPathAttributeName](kctframepathclippingpathattributename.md): Specifies clipping path.

## See Also

### Opaque Types

- [CTFontRef](ctfont.md): A font object.
- [CTFontCollectionRef](ctfontcollection.md): A font collection.
- [CTFontDescriptorRef](ctfontdescriptor.md): A font descriptor.
- [CTFramesetterRef](ctframesetter.md): Generate text frames.
- [CTGlyphInfoRef](ctglyphinfo.md): Override a font’s specified mapping from Unicode to the glyph ID.
- [CTLineRef](ctline.md): A line of text.
- [CTParagraphStyleRef](ctparagraphstyle.md): Paragraph or ruler attributes in an attributed string.
- [CTRunRef](ctrun.md): A glyph run.
- [CTRunDelegateRef](ctrundelegate.md): A run delegate.
- [CTTextTabRef](cttexttab.md): A tab in a paragraph style, storing an alignment type and location.
- [CTTypesetterRef](cttypesetter.md): A typesetter which performs line layout.
