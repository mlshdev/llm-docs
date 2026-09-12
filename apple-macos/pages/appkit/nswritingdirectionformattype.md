> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingdirectionformattype](https://developer.apple.com/documentation/appkit/nswritingdirectionformattype)

# NSWritingDirectionFormatType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

Constants for the writing direction attribute key.

## Declaration

```swift
enum NSWritingDirectionFormatType
```

<a id="overview"></a>

## Overview

Use these constants as the values for the [writingDirection](https://developer.apple.com/documentation/foundation/nsattributedstring/key/writingdirection) key.

You can use the logical `OR` operator to combine these constants with [NSWritingDirection.leftToRight](nswritingdirection/lefttoright.md) or [NSWritingDirection.rightToLeft](nswritingdirection/righttoleft.md) when used with [writingDirection](https://developer.apple.com/documentation/foundation/nsattributedstring/key/writingdirection) to specify formatting controls defined by the Unicode Bidirectional Algorithm in [Unicode Standard Annex #9](http://unicode.org/reports/tr9/).

## Topics

### Constants

- [NSWritingDirectionFormatType.embedding](nswritingdirectionformattype/embedding.md): Text is embedded in text with another writing direction. For example, an English quotation in the middle of an Arabic sentence could be marked as being embedded left-to-right text.
- [NSWritingDirectionFormatType.override](nswritingdirectionformattype/override.md): Enables character types with inherent directionality to be overridden when required for special cases, such as for part numbers made of mixed English, digits, and Hebrew letters to be written from right to left.

### Initializers

- [init(rawValue:)](https://developer.apple.com/documentation/appkit/nswritingdirectionformattype/init%28rawvalue:%29)

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

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

Constants for the writing direction attribute key.

## Declaration

```objectivec
enum NSWritingDirectionFormatType : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants as the values for the [writingDirection](https://developer.apple.com/documentation/foundation/nsattributedstring/key/writingdirection) key.

You can use the logical `OR` operator to combine these constants with [NSWritingDirectionLeftToRight](nswritingdirection/lefttoright.md) or [NSWritingDirectionRightToLeft](nswritingdirection/righttoleft.md) when used with [writingDirection](https://developer.apple.com/documentation/foundation/nsattributedstring/key/writingdirection) to specify formatting controls defined by the Unicode Bidirectional Algorithm in [Unicode Standard Annex #9](http://unicode.org/reports/tr9/).

## Topics

### Constants

- [NSWritingDirectionEmbedding](nswritingdirectionformattype/embedding.md): Text is embedded in text with another writing direction. For example, an English quotation in the middle of an Arabic sentence could be marked as being embedded left-to-right text.
- [NSWritingDirectionOverride](nswritingdirectionformattype/override.md): Enables character types with inherent directionality to be overridden when required for special cases, such as for part numbers made of mixed English, digits, and Hebrew letters to be written from right to left.

## See Also

### Getting text content attributes

- [TextKit string attribute keys](textkit-string-attribute-keys.md): AppKit-specific keys you use to apply attributes to ranges of characters in an attributed string.
- [NSTextHighlightStyle](nstexthighlightstyle.md): Constants that specify the type of highlight to apply to text.
- [NSTextHighlightColorScheme](nstexthighlightcolorscheme.md): Constants that specify the highlight color to use with the text.
- [NSTextEffectStyle](nstexteffectstyle.md): Constants for the type of effect to apply to the text.
- [NSSpellingState](nsspellingstate.md): Constants for the spelling state attribute key.
- [NSUnderlineStyle](nsunderlinestyle.md): Constants for the underline style and strikethrough style attribute keys.
