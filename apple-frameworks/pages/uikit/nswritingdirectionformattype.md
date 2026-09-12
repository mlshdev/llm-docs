> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nswritingdirectionformattype](https://developer.apple.com/documentation/uikit/nswritingdirectionformattype)

# NSWritingDirectionFormatType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for the writing direction attribute key.

## Declaration

```swift
enum NSWritingDirectionFormatType
```

<a id="Overview"></a>

## Overview

Use these constants as the values for the [writingDirection](../foundation/nsattributedstring/key/writingdirection.md) key in Swift or the [NSWritingDirectionAttributeName](nswritingdirectionattributename.md) key in Objective-C.

You can use the logical OR operator to combine these constants with [NSWritingDirection.leftToRight](nswritingdirection/lefttoright.md) or [NSWritingDirection.rightToLeft](nswritingdirection/righttoleft.md) when used with the [writingDirection](../foundation/nsattributedstring/key/writingdirection.md) key in Swift or the [NSWritingDirectionAttributeName](nswritingdirectionattributename.md) key in Objective-C to specify formatting controls defined by the Unicode Bidirectional Algorithm in [Unicode Standard Annex #9](http://unicode.org/reports/tr9/).

## Topics

### Constants

- [NSWritingDirectionFormatType.embedding](nswritingdirectionformattype/embedding.md): Text is embedded in text with another writing direction. For example, an English quotation in the middle of an Arabic sentence could be marked as being embedded left-to-right text.
- [NSWritingDirectionFormatType.override](nswritingdirectionformattype/override.md): Enables character types with inherent directionality to be overridden when required for special cases, such as for part numbers made of mixed English, digits, and Hebrew letters to be written from right to left.

### Initializers

- [init(rawValue:)](https://developer.apple.com/documentation/uikit/nswritingdirectionformattype/init%28rawvalue:%29)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting text content attributes

- [NSUnderlineStyle](nsunderlinestyle.md): Constants for the underline style and strikethrough style attribute keys.

# NSWritingDirectionFormatType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for the writing direction attribute key.

## Declaration

```objectivec
enum NSWritingDirectionFormatType : NSInteger;
```

<a id="Overview"></a>

## Overview

Use these constants as the values for the [writingDirection](../foundation/nsattributedstring/key/writingdirection.md) key in Swift or the [NSWritingDirectionAttributeName](nswritingdirectionattributename.md) key in Objective-C.

You can use the logical OR operator to combine these constants with [NSWritingDirectionLeftToRight](nswritingdirection/lefttoright.md) or [NSWritingDirectionRightToLeft](nswritingdirection/righttoleft.md) when used with the [writingDirection](../foundation/nsattributedstring/key/writingdirection.md) key in Swift or the [NSWritingDirectionAttributeName](nswritingdirectionattributename.md) key in Objective-C to specify formatting controls defined by the Unicode Bidirectional Algorithm in [Unicode Standard Annex #9](http://unicode.org/reports/tr9/).

## Topics

### Constants

- [NSWritingDirectionEmbedding](nswritingdirectionformattype/embedding.md): Text is embedded in text with another writing direction. For example, an English quotation in the middle of an Arabic sentence could be marked as being embedded left-to-right text.
- [NSWritingDirectionOverride](nswritingdirectionformattype/override.md): Enables character types with inherent directionality to be overridden when required for special cases, such as for part numbers made of mixed English, digits, and Hebrew letters to be written from right to left.

## See Also

### Getting text content attributes

- [TextKit string attribute keys](textkit-string-attribute-keys.md): UIKit-specific keys you use to apply attributes to ranges of characters in an attributed string.
- [NSTextHighlightStyle](nstexthighlightstyle.md): Constants that specify the type of highlight to apply to text.
- [NSTextHighlightColorScheme](nstexthighlightcolorscheme.md): Constants that specify the highlight color to use with the text.
- [NSTextEffectStyle](nstexteffectstyle.md): Constants for the type of effect to apply to the text.
- [NSUnderlineStyle](nsunderlinestyle.md): Constants for the underline style and strikethrough style attribute keys.
