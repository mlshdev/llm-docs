> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctparagraphstylespecifier/lineheightmultiple](https://developer.apple.com/documentation/coretext/ctparagraphstylespecifier/lineheightmultiple)

# CTParagraphStyleSpecifier.lineHeightMultiple (Swift)

**Framework:** Core Text  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The line height multiple.

## Declaration

```swift
case lineHeightMultiple
```

<a id="Discussion"></a>

## Discussion

The natural line height of the receiver is multiplied by this factor (if positive) before being constrained by minimum and maximum line height. Type: [CGFloat](../../corefoundation/cgfloat-swift.struct.md). Default value: `0.0`. Affects: [CTFramesetter](../ctframesetter.md).

## See Also

### Constants

- [CTParagraphStyleSpecifier.alignment](alignment.md): The text alignment.
- [CTParagraphStyleSpecifier.firstLineHeadIndent](firstlineheadindent.md): The distance, in points, from the leading margin of a frame to the beginning of the paragraph’s first line.
- [CTParagraphStyleSpecifier.headIndent](headindent.md): The distance, in points, from the leading margin of a text container to the beginning of lines other than the first.
- [CTParagraphStyleSpecifier.tailIndent](tailindent.md): The distance, in points, from the margin of a frame to the end of lines.
- [CTParagraphStyleSpecifier.tabStops](tabstops.md): The text tab objects, sorted by location, that define the tab stops for the paragraph style.
- [CTParagraphStyleSpecifier.defaultTabInterval](defaulttabinterval.md): The document-wide default tab interval.
- [CTParagraphStyleSpecifier.lineBreakMode](linebreakmode.md): The mode that should be used to break lines when laying out the paragraph’s text.
- [CTParagraphStyleSpecifier.maximumLineHeight](maximumlineheight.md): The maximum height that any line in the frame will occupy, regardless of the font size or size of any attached graphic.
- [CTParagraphStyleSpecifier.minimumLineHeight](minimumlineheight.md): The minimum height that any line in the frame will occupy, regardless of the font size or size of any attached graphic.
- [CTParagraphStyleSpecifier.lineSpacing](linespacing.md): Deprecated. The space in points added between lines within the paragraph (commonly known as leading).
- [CTParagraphStyleSpecifier.paragraphSpacing](paragraphspacing.md): The space added at the end of the paragraph to separate it from the following paragraph.
- [CTParagraphStyleSpecifier.paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
- [CTParagraphStyleSpecifier.baseWritingDirection](basewritingdirection.md): The base writing direction of the lines.
- [CTParagraphStyleSpecifier.maximumLineSpacing](maximumlinespacing.md): The maximum space in points between lines within the paragraph (commonly known as leading).
- [CTParagraphStyleSpecifier.minimumLineSpacing](minimumlinespacing.md): The minimum space in points between lines within the paragraph (commonly known as leading).

# kCTParagraphStyleSpecifierLineHeightMultiple (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The line height multiple.

## Declaration

```objectivec
kCTParagraphStyleSpecifierLineHeightMultiple
```

<a id="Discussion"></a>

## Discussion

The natural line height of the receiver is multiplied by this factor (if positive) before being constrained by minimum and maximum line height. Type: [CGFloat](../../corefoundation/cgfloat-swift.struct.md). Default value: `0.0`. Affects: [CTFramesetterRef](../ctframesetter.md).

## See Also

### Constants

- [kCTParagraphStyleSpecifierAlignment](alignment.md): The text alignment.
- [kCTParagraphStyleSpecifierFirstLineHeadIndent](firstlineheadindent.md): The distance, in points, from the leading margin of a frame to the beginning of the paragraph’s first line.
- [kCTParagraphStyleSpecifierHeadIndent](headindent.md): The distance, in points, from the leading margin of a text container to the beginning of lines other than the first.
- [kCTParagraphStyleSpecifierTailIndent](tailindent.md): The distance, in points, from the margin of a frame to the end of lines.
- [kCTParagraphStyleSpecifierTabStops](tabstops.md): The text tab objects, sorted by location, that define the tab stops for the paragraph style.
- [kCTParagraphStyleSpecifierDefaultTabInterval](defaulttabinterval.md): The document-wide default tab interval.
- [kCTParagraphStyleSpecifierLineBreakMode](linebreakmode.md): The mode that should be used to break lines when laying out the paragraph’s text.
- [kCTParagraphStyleSpecifierMaximumLineHeight](maximumlineheight.md): The maximum height that any line in the frame will occupy, regardless of the font size or size of any attached graphic.
- [kCTParagraphStyleSpecifierMinimumLineHeight](minimumlineheight.md): The minimum height that any line in the frame will occupy, regardless of the font size or size of any attached graphic.
- [kCTParagraphStyleSpecifierLineSpacing](linespacing.md): Deprecated. The space in points added between lines within the paragraph (commonly known as leading).
- [kCTParagraphStyleSpecifierParagraphSpacing](paragraphspacing.md): The space added at the end of the paragraph to separate it from the following paragraph.
- [kCTParagraphStyleSpecifierParagraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
- [kCTParagraphStyleSpecifierBaseWritingDirection](basewritingdirection.md): The base writing direction of the lines.
- [kCTParagraphStyleSpecifierMaximumLineSpacing](maximumlinespacing.md): The maximum space in points between lines within the paragraph (commonly known as leading).
- [kCTParagraphStyleSpecifierMinimumLineSpacing](minimumlinespacing.md): The minimum space in points between lines within the paragraph (commonly known as leading).
