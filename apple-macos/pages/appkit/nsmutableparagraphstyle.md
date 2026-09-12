> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutableparagraphstyle](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle)

# NSMutableParagraphStyle (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

An object for changing the values of the subattributes in a paragraph style attribute.

## Declaration

```swift
class NSMutableParagraphStyle
```

<a id="overview"></a>

## Overview

The [NSMutableParagraphStyle](nsmutableparagraphstyle.md) class adds methods to its superclass, [NSParagraphStyle](nsparagraphstyle.md), for changing the values of the subattributes in a paragraph style attribute. For more information, see [NSParagraphStyle](nsparagraphstyle.md) and [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring).

> **Important**

>  Don’t mutate a paragraph style object after adding it to an attributed string. Doing so can cause your app to crash.

## Topics

### Setting style information

- [setParagraphStyle(\_:)](nsmutableparagraphstyle/setparagraphstyle%28__%29.md): Replaces the subattributes of the paragraph with those in the specified paragraph style object.
- [alignment](nsmutableparagraphstyle/alignment.md): The text alignment of the paragraph.
- [firstLineHeadIndent](nsmutableparagraphstyle/firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](nsmutableparagraphstyle/headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](nsmutableparagraphstyle/tailindent.md): The trailing indentation of the paragraph.
- [lineHeightMultiple](nsmutableparagraphstyle/lineheightmultiple.md): The line height multiple.
- [maximumLineHeight](nsmutableparagraphstyle/maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](nsmutableparagraphstyle/minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](nsmutableparagraphstyle/linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](nsmutableparagraphstyle/paragraphspacing.md): The space after the end of the paragraph.
- [paragraphSpacingBefore](nsmutableparagraphstyle/paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
- [baseWritingDirection](nsmutableparagraphstyle/basewritingdirection.md): The base writing direction for the paragraph.

### Specifying tab information

- [addTabStop(\_:)](nsmutableparagraphstyle/addtabstop%28__%29.md): Adds the specified tab stop to the paragraph.
- [removeTabStop(\_:)](nsmutableparagraphstyle/removetabstop%28__%29.md): Removes the first text tab with a location and type equal to the specified tab stop.
- [tabStops](nsmutableparagraphstyle/tabstops.md): The text tab objects that represent the paragraph’s tab stops.
- [defaultTabInterval](nsmutableparagraphstyle/defaulttabinterval.md): A number used as the document’s default tab spacing.

### Setting text blocks and lists

- [textBlocks](nsmutableparagraphstyle/textblocks.md): The text blocks that contain the paragraph.
- [textLists](nsmutableparagraphstyle/textlists.md): The text lists that contain the paragraph.

### Setting line-break information

- [lineBreakMode](nsmutableparagraphstyle/linebreakmode.md): The mode for breaking lines in the paragraph.
- [lineBreakStrategy](nsmutableparagraphstyle/linebreakstrategy.md): The strategies that the text system may use to break lines while laying out the paragraph.
- [hyphenationFactor](nsmutableparagraphstyle/hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](nsmutableparagraphstyle/usesdefaulthyphenation.md)
- [tighteningFactorForTruncation](nsmutableparagraphstyle/tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](nsmutableparagraphstyle/allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.

### Setting HTML header level

- [headerLevel](nsmutableparagraphstyle/headerlevel.md): The paragraph’s header level for HTML generation.

## Relationships

### Inherits From

- [NSParagraphStyle](nsparagraphstyle.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMutableCopying](https://developer.apple.com/documentation/foundation/nsmutablecopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Formatting and attributes

- [NSParagraphStyle](nsparagraphstyle.md): The paragraph or ruler attributes for an attributed string.
- [NSTextTab](nstexttab.md): A tab in a paragraph.
- [NSTextList](nstextlist.md): A section of text that forms a single list.

# NSMutableParagraphStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

An object for changing the values of the subattributes in a paragraph style attribute.

## Declaration

```objectivec
@interface NSMutableParagraphStyle : NSParagraphStyle
```

<a id="overview"></a>

## Overview

The [NSMutableParagraphStyle](nsmutableparagraphstyle.md) class adds methods to its superclass, [NSParagraphStyle](nsparagraphstyle.md), for changing the values of the subattributes in a paragraph style attribute. For more information, see [NSParagraphStyle](nsparagraphstyle.md) and [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring).

> **Important**

>  Don’t mutate a paragraph style object after adding it to an attributed string. Doing so can cause your app to crash.

## Topics

### Setting style information

- [setParagraphStyle:](nsmutableparagraphstyle/setparagraphstyle%28__%29.md): Replaces the subattributes of the paragraph with those in the specified paragraph style object.
- [alignment](nsmutableparagraphstyle/alignment.md): The text alignment of the paragraph.
- [firstLineHeadIndent](nsmutableparagraphstyle/firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](nsmutableparagraphstyle/headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](nsmutableparagraphstyle/tailindent.md): The trailing indentation of the paragraph.
- [lineHeightMultiple](nsmutableparagraphstyle/lineheightmultiple.md): The line height multiple.
- [maximumLineHeight](nsmutableparagraphstyle/maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](nsmutableparagraphstyle/minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](nsmutableparagraphstyle/linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](nsmutableparagraphstyle/paragraphspacing.md): The space after the end of the paragraph.
- [paragraphSpacingBefore](nsmutableparagraphstyle/paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
- [baseWritingDirection](nsmutableparagraphstyle/basewritingdirection.md): The base writing direction for the paragraph.

### Specifying tab information

- [addTabStop:](nsmutableparagraphstyle/addtabstop%28__%29.md): Adds the specified tab stop to the paragraph.
- [removeTabStop:](nsmutableparagraphstyle/removetabstop%28__%29.md): Removes the first text tab with a location and type equal to the specified tab stop.
- [tabStops](nsmutableparagraphstyle/tabstops.md): The text tab objects that represent the paragraph’s tab stops.
- [defaultTabInterval](nsmutableparagraphstyle/defaulttabinterval.md): A number used as the document’s default tab spacing.

### Setting text blocks and lists

- [textBlocks](nsmutableparagraphstyle/textblocks.md): The text blocks that contain the paragraph.
- [textLists](nsmutableparagraphstyle/textlists.md): The text lists that contain the paragraph.

### Setting line-break information

- [lineBreakMode](nsmutableparagraphstyle/linebreakmode.md): The mode for breaking lines in the paragraph.
- [lineBreakStrategy](nsmutableparagraphstyle/linebreakstrategy.md): The strategies that the text system may use to break lines while laying out the paragraph.
- [hyphenationFactor](nsmutableparagraphstyle/hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](nsmutableparagraphstyle/usesdefaulthyphenation.md)
- [tighteningFactorForTruncation](nsmutableparagraphstyle/tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](nsmutableparagraphstyle/allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.

### Setting HTML header level

- [headerLevel](nsmutableparagraphstyle/headerlevel.md): The paragraph’s header level for HTML generation.

## Relationships

### Inherits From

- [NSParagraphStyle](nsparagraphstyle.md)

## See Also

### Formatting and attributes

- [NSParagraphStyle](nsparagraphstyle.md): The paragraph or ruler attributes for an attributed string.
- [NSTextTab](nstexttab.md): A tab in a paragraph.
- [NSTextList](nstextlist.md): A section of text that forms a single list.
