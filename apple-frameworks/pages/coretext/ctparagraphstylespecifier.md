> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctparagraphstylespecifier](https://developer.apple.com/documentation/coretext/ctparagraphstylespecifier)

# CTParagraphStyleSpecifier (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants used to query and modify a paragraph style object.

## Declaration

```swift
enum CTParagraphStyleSpecifier
```

<a id="overview"></a>

## Overview

Each specifier has a type and a default value associated with it. The type must always be observed when setting or fetching the value from the `CTParagraphStyle` object. In addition, some specifiers affect the behavior of both the framesetter and the typesetter, and others affect the behavior of only the framesetter, as noted in the constant descriptions.

## Topics

### Constants

- [CTParagraphStyleSpecifier.alignment](ctparagraphstylespecifier/alignment.md): The text alignment.
- [CTParagraphStyleSpecifier.firstLineHeadIndent](ctparagraphstylespecifier/firstlineheadindent.md): The distance, in points, from the leading margin of a frame to the beginning of the paragraph’s first line.
- [CTParagraphStyleSpecifier.headIndent](ctparagraphstylespecifier/headindent.md): The distance, in points, from the leading margin of a text container to the beginning of lines other than the first.
- [CTParagraphStyleSpecifier.tailIndent](ctparagraphstylespecifier/tailindent.md): The distance, in points, from the margin of a frame to the end of lines.
- [CTParagraphStyleSpecifier.tabStops](ctparagraphstylespecifier/tabstops.md): The text tab objects, sorted by location, that define the tab stops for the paragraph style.
- [CTParagraphStyleSpecifier.defaultTabInterval](ctparagraphstylespecifier/defaulttabinterval.md): The document-wide default tab interval.
- [CTParagraphStyleSpecifier.lineBreakMode](ctparagraphstylespecifier/linebreakmode.md): The mode that should be used to break lines when laying out the paragraph’s text.
- [CTParagraphStyleSpecifier.lineHeightMultiple](ctparagraphstylespecifier/lineheightmultiple.md): The line height multiple.
- [CTParagraphStyleSpecifier.maximumLineHeight](ctparagraphstylespecifier/maximumlineheight.md): The maximum height that any line in the frame will occupy, regardless of the font size or size of any attached graphic.
- [CTParagraphStyleSpecifier.minimumLineHeight](ctparagraphstylespecifier/minimumlineheight.md): The minimum height that any line in the frame will occupy, regardless of the font size or size of any attached graphic.
- [CTParagraphStyleSpecifier.lineSpacing](ctparagraphstylespecifier/linespacing.md): Deprecated. The space in points added between lines within the paragraph (commonly known as leading).
- [CTParagraphStyleSpecifier.paragraphSpacing](ctparagraphstylespecifier/paragraphspacing.md): The space added at the end of the paragraph to separate it from the following paragraph.
- [CTParagraphStyleSpecifier.paragraphSpacingBefore](ctparagraphstylespecifier/paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
- [CTParagraphStyleSpecifier.baseWritingDirection](ctparagraphstylespecifier/basewritingdirection.md): The base writing direction of the lines.
- [CTParagraphStyleSpecifier.maximumLineSpacing](ctparagraphstylespecifier/maximumlinespacing.md): The maximum space in points between lines within the paragraph (commonly known as leading).
- [CTParagraphStyleSpecifier.minimumLineSpacing](ctparagraphstylespecifier/minimumlinespacing.md): The minimum space in points between lines within the paragraph (commonly known as leading).
- [CTParagraphStyleSpecifier.lineSpacingAdjustment](ctparagraphstylespecifier/linespacingadjustment.md): The space in points added between lines within the paragraph (commonly known as leading).
- [CTParagraphStyleSpecifier.count](ctparagraphstylespecifier/count.md): The number of style specifiers.

### Enumeration Cases

- [CTParagraphStyleSpecifier.lineBoundsOptions](ctparagraphstylespecifier/lineboundsoptions.md): Options that control the alignment of the line edges with the leading and trailing margins.

### Initializers

- [init(rawValue:)](ctparagraphstylespecifier/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [CTTextAlignment](cttextalignment.md): Constants that specify text alignment.
- [CTLineBreakMode](ctlinebreakmode.md): These constants specify what happens when a line is too long for its frame.
- [CTWritingDirection](ctwritingdirection.md): These constants specify the writing direction.

# CTParagraphStyleSpecifier (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants used to query and modify a paragraph style object.

## Declaration

```objectivec
enum CTParagraphStyleSpecifier : uint32_t;
```

<a id="overview"></a>

## Overview

Each specifier has a type and a default value associated with it. The type must always be observed when setting or fetching the value from the `CTParagraphStyle` object. In addition, some specifiers affect the behavior of both the framesetter and the typesetter, and others affect the behavior of only the framesetter, as noted in the constant descriptions.

## Topics

### Constants

- [kCTParagraphStyleSpecifierAlignment](ctparagraphstylespecifier/alignment.md): The text alignment.
- [kCTParagraphStyleSpecifierFirstLineHeadIndent](ctparagraphstylespecifier/firstlineheadindent.md): The distance, in points, from the leading margin of a frame to the beginning of the paragraph’s first line.
- [kCTParagraphStyleSpecifierHeadIndent](ctparagraphstylespecifier/headindent.md): The distance, in points, from the leading margin of a text container to the beginning of lines other than the first.
- [kCTParagraphStyleSpecifierTailIndent](ctparagraphstylespecifier/tailindent.md): The distance, in points, from the margin of a frame to the end of lines.
- [kCTParagraphStyleSpecifierTabStops](ctparagraphstylespecifier/tabstops.md): The text tab objects, sorted by location, that define the tab stops for the paragraph style.
- [kCTParagraphStyleSpecifierDefaultTabInterval](ctparagraphstylespecifier/defaulttabinterval.md): The document-wide default tab interval.
- [kCTParagraphStyleSpecifierLineBreakMode](ctparagraphstylespecifier/linebreakmode.md): The mode that should be used to break lines when laying out the paragraph’s text.
- [kCTParagraphStyleSpecifierLineHeightMultiple](ctparagraphstylespecifier/lineheightmultiple.md): The line height multiple.
- [kCTParagraphStyleSpecifierMaximumLineHeight](ctparagraphstylespecifier/maximumlineheight.md): The maximum height that any line in the frame will occupy, regardless of the font size or size of any attached graphic.
- [kCTParagraphStyleSpecifierMinimumLineHeight](ctparagraphstylespecifier/minimumlineheight.md): The minimum height that any line in the frame will occupy, regardless of the font size or size of any attached graphic.
- [kCTParagraphStyleSpecifierLineSpacing](ctparagraphstylespecifier/linespacing.md): Deprecated. The space in points added between lines within the paragraph (commonly known as leading).
- [kCTParagraphStyleSpecifierParagraphSpacing](ctparagraphstylespecifier/paragraphspacing.md): The space added at the end of the paragraph to separate it from the following paragraph.
- [kCTParagraphStyleSpecifierParagraphSpacingBefore](ctparagraphstylespecifier/paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
- [kCTParagraphStyleSpecifierBaseWritingDirection](ctparagraphstylespecifier/basewritingdirection.md): The base writing direction of the lines.
- [kCTParagraphStyleSpecifierMaximumLineSpacing](ctparagraphstylespecifier/maximumlinespacing.md): The maximum space in points between lines within the paragraph (commonly known as leading).
- [kCTParagraphStyleSpecifierMinimumLineSpacing](ctparagraphstylespecifier/minimumlinespacing.md): The minimum space in points between lines within the paragraph (commonly known as leading).
- [kCTParagraphStyleSpecifierLineSpacingAdjustment](ctparagraphstylespecifier/linespacingadjustment.md): The space in points added between lines within the paragraph (commonly known as leading).
- [kCTParagraphStyleSpecifierCount](ctparagraphstylespecifier/count.md): The number of style specifiers.

### Enumeration Cases

- [kCTParagraphStyleSpecifierLineBoundsOptions](ctparagraphstylespecifier/lineboundsoptions.md): Options that control the alignment of the line edges with the leading and trailing margins.

## See Also

### Constants

- [CTTextAlignment](cttextalignment.md): Constants that specify text alignment.
- [CTLineBreakMode](ctlinebreakmode.md): These constants specify what happens when a line is too long for its frame.
- [CTWritingDirection](ctwritingdirection.md): These constants specify the writing direction.
