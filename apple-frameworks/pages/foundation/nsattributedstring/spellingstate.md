> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/spellingstate](https://developer.apple.com/documentation/foundation/nsattributedstring/spellingstate)

# NSAttributedString.SpellingState

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Constants for the spelling state attribute key.

## Declaration

```swift
enum SpellingState
```

<a id="overview"></a>

## Overview

Use these constants as the values for the [spellingState](key/spellingstate.md) key.

## Topics

### Getting the spelling states

- [NSAttributedString.SpellingState.grammar](spellingstate/grammar.md): Flag for grammar issues.
- [NSAttributedString.SpellingState.spelling](spellingstate/spelling.md): Flag for spelling issues.

### Initializers

- [init(rawValue:)](spellingstate/init%28rawvalue_%29.md)

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

- [NSAttributedString.Key](key.md): The attributes you apply to ranges of characters in an attributed string.
- [NSAttributedString.TextHighlightStyle](texthighlightstyle.md): Constants that specify the type of highlight to apply to text.
- [NSAttributedString.TextHighlightColorScheme](texthighlightcolorscheme.md): Constants that specify the highlight color to use with the text.
- [NSAttributedString.TextEffectStyle](texteffectstyle.md): Constants for the type of effect to apply to the text.
- [NSUnderlineStyle](../../uikit/nsunderlinestyle.md): Constants for the underline style and strikethrough style attribute keys.
- [NSWritingDirectionFormatType](../../uikit/nswritingdirectionformattype.md): Constants for the writing direction attribute key.
