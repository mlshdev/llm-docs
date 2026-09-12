> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsparagraphstyle](https://developer.apple.com/documentation/uikit/nsparagraphstyle)

# NSParagraphStyle (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The paragraph or ruler attributes for an attributed string.

## Declaration

```swift
class NSParagraphStyle
```

<a id="overview"></a>

## Overview

An [NSParagraphStyle](nsparagraphstyle.md) object stores formatting information for a paragraph of text. The formatting information includes the amount of space between lines, indentations for lines of text, line heights, tab-stop positions, and more. Apply paragraph styles to the text of an attributed string by adding the [paragraphStyle](../foundation/nsattributedstring/key/paragraphstyle.md) attribute in Swift or the [NSParagraphStyleAttributeName](nsparagraphstyleattributename.md) attribute in Objective-C and setting its value to an instance of this class. The text-rendering system uses the paragraph style information in an attributed string to lay out and render the text.

The [NSParagraphStyle](nsparagraphstyle.md) class manages an immutable set of style information, but you can create an [NSMutableParagraphStyle](nsmutableparagraphstyle.md) when you want to modify the style information before applying it to your text.

## Topics

### Creating a paragraph style

- [default](nsparagraphstyle/default.md): The default paragraph style.

### Accessing style information

- [alignment](nsparagraphstyle/alignment.md): The text alignment of the paragraph.
- [NSTextAlignment](nstextalignment.md): Constants that specify text alignment.
- [firstLineHeadIndent](nsparagraphstyle/firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](nsparagraphstyle/headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](nsparagraphstyle/tailindent.md): The trailing indentation of the paragraph.
- [lineHeightMultiple](nsparagraphstyle/lineheightmultiple.md): The line height multiple.
- [maximumLineHeight](nsparagraphstyle/maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](nsparagraphstyle/minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](nsparagraphstyle/linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](nsparagraphstyle/paragraphspacing.md): Distance between the bottom of this paragraph and top of next.
- [paragraphSpacingBefore](nsparagraphstyle/paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.

### Accessing tab information

- [tabStops](nsparagraphstyle/tabstops.md): The text tab objects that represent the paragraph’s tab stops.
- [NSParagraphStyle.TextTabType](https://developer.apple.com/documentation/appkit/nsparagraphstyle/texttabtype): Deprecated. Constants that specify the type of tab stop.
- [defaultTabInterval](nsparagraphstyle/defaulttabinterval.md): The documentwide default tab interval.

### Getting text block and list information

- [textBlocks](nsparagraphstyle/textblocks.md): The text blocks that contain the paragraph, nested from outermost to innermost.
- [textLists](nsparagraphstyle/textlists.md): The text lists that contain the paragraph.

### Getting line-break information

- [lineBreakMode](nsparagraphstyle/linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [NSLineBreakMode](nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [lineBreakStrategy](nsparagraphstyle/linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [NSParagraphStyle.LineBreakStrategy](nsparagraphstyle/linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [hyphenationFactor](nsparagraphstyle/hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](nsparagraphstyle/usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](https://developer.apple.com/documentation/appkit/nsparagraphstyle/tighteningfactorfortruncation): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](nsparagraphstyle/allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.

### Getting the HTML header level

- [headerLevel](https://developer.apple.com/documentation/appkit/nsparagraphstyle/headerlevel): The paragraph’s header level for HTML generation.

### Determining writing direction

- [defaultWritingDirection(forLanguage:)](nsparagraphstyle/defaultwritingdirection%28forlanguage_%29.md): Returns the default writing direction for the specified language.
- [baseWritingDirection](nsparagraphstyle/basewritingdirection.md): The base writing direction for the paragraph.
- [NSWritingDirection](nswritingdirection.md): Constants that specify the writing direction.

### Initializers

- [init(coder:)](nsparagraphstyle/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableParagraphStyle](nsmutableparagraphstyle.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Formatting and attributes

- [NSMutableParagraphStyle](nsmutableparagraphstyle.md): An object for changing the values of the subattributes in a paragraph style attribute.
- [NSTextTab](nstexttab.md): A tab in a paragraph.
- [NSTextList](nstextlist.md): A section of text that forms a single list.
- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md): Create and configure tables in attributed strings and display them in a text view.

# NSParagraphStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The paragraph or ruler attributes for an attributed string.

## Declaration

```objectivec
@interface NSParagraphStyle : NSObject
```

<a id="overview"></a>

## Overview

An [NSParagraphStyle](nsparagraphstyle.md) object stores formatting information for a paragraph of text. The formatting information includes the amount of space between lines, indentations for lines of text, line heights, tab-stop positions, and more. Apply paragraph styles to the text of an attributed string by adding the [paragraphStyle](../foundation/nsattributedstring/key/paragraphstyle.md) attribute in Swift or the [NSParagraphStyleAttributeName](nsparagraphstyleattributename.md) attribute in Objective-C and setting its value to an instance of this class. The text-rendering system uses the paragraph style information in an attributed string to lay out and render the text.

The [NSParagraphStyle](nsparagraphstyle.md) class manages an immutable set of style information, but you can create an [NSMutableParagraphStyle](nsmutableparagraphstyle.md) when you want to modify the style information before applying it to your text.

## Topics

### Creating a paragraph style

- [defaultParagraphStyle](nsparagraphstyle/default.md): The default paragraph style.

### Accessing style information

- [alignment](nsparagraphstyle/alignment.md): The text alignment of the paragraph.
- [NSTextAlignment](nstextalignment.md): Constants that specify text alignment.
- [firstLineHeadIndent](nsparagraphstyle/firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](nsparagraphstyle/headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](nsparagraphstyle/tailindent.md): The trailing indentation of the paragraph.
- [lineHeightMultiple](nsparagraphstyle/lineheightmultiple.md): The line height multiple.
- [maximumLineHeight](nsparagraphstyle/maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](nsparagraphstyle/minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](nsparagraphstyle/linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](nsparagraphstyle/paragraphspacing.md): Distance between the bottom of this paragraph and top of next.
- [paragraphSpacingBefore](nsparagraphstyle/paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.

### Accessing tab information

- [tabStops](nsparagraphstyle/tabstops.md): The text tab objects that represent the paragraph’s tab stops.
- [NSTextTabType](https://developer.apple.com/documentation/appkit/nsparagraphstyle/texttabtype): Deprecated. Constants that specify the type of tab stop.
- [defaultTabInterval](nsparagraphstyle/defaulttabinterval.md): The documentwide default tab interval.

### Getting text block and list information

- [textBlocks](nsparagraphstyle/textblocks.md): The text blocks that contain the paragraph, nested from outermost to innermost.
- [textLists](nsparagraphstyle/textlists.md): The text lists that contain the paragraph.

### Getting line-break information

- [lineBreakMode](nsparagraphstyle/linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [NSLineBreakMode](nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [lineBreakStrategy](nsparagraphstyle/linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [NSLineBreakStrategy](nsparagraphstyle/linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [hyphenationFactor](nsparagraphstyle/hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](nsparagraphstyle/usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](https://developer.apple.com/documentation/appkit/nsparagraphstyle/tighteningfactorfortruncation): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](nsparagraphstyle/allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.

### Getting the HTML header level

- [headerLevel](https://developer.apple.com/documentation/appkit/nsparagraphstyle/headerlevel): The paragraph’s header level for HTML generation.

### Determining writing direction

- [defaultWritingDirectionForLanguage:](nsparagraphstyle/defaultwritingdirection%28forlanguage_%29.md): Returns the default writing direction for the specified language.
- [baseWritingDirection](nsparagraphstyle/basewritingdirection.md): The base writing direction for the paragraph.
- [NSWritingDirection](nswritingdirection.md): Constants that specify the writing direction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableParagraphStyle](nsmutableparagraphstyle.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Formatting and attributes

- [NSMutableParagraphStyle](nsmutableparagraphstyle.md): An object for changing the values of the subattributes in a paragraph style attribute.
- [NSTextTab](nstexttab.md): A tab in a paragraph.
- [NSTextList](nstextlist.md): A section of text that forms a single list.
- [Adding tables to attributed strings in UIKit](adding-tables-to-attributed-strings.md): Create and configure tables in attributed strings and display them in a text view.
