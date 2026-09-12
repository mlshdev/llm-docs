> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/texteffectstyle](https://developer.apple.com/documentation/foundation/nsattributedstring/texteffectstyle)

# NSAttributedString.TextEffectStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for the type of effect to apply to the text.

## Declaration

```swift
struct TextEffectStyle
```

<a id="overview"></a>

## Overview

Use this constant as the value for the [textEffect](key/texteffect.md) key.

## Topics

### Getting the style

- [letterpressStyle](texteffectstyle/letterpressstyle.md): A graphical text effect that gives glyphs the appearance of letterpress printing, which involves pressing the type into the paper.

### Initializers

- [init(rawValue:)](texteffectstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting text content attributes

- [NSAttributedString.Key](key.md): The attributes you apply to ranges of characters in an attributed string.
- [NSAttributedString.TextHighlightStyle](texthighlightstyle.md): Constants that specify the type of highlight to apply to text.
- [NSAttributedString.TextHighlightColorScheme](texthighlightcolorscheme.md): Constants that specify the highlight color to use with the text.
- [NSAttributedString.SpellingState](spellingstate.md): Constants for the spelling state attribute key.
- [NSUnderlineStyle](../../uikit/nsunderlinestyle.md): Constants for the underline style and strikethrough style attribute keys.
- [NSWritingDirectionFormatType](../../uikit/nswritingdirectionformattype.md): Constants for the writing direction attribute key.
