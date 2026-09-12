> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/texthighlightstyle](https://developer.apple.com/documentation/foundation/nsattributedstring/texthighlightstyle)

# NSAttributedString.TextHighlightStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Constants that specify the type of highlight to apply to text.

## Declaration

```swift
struct TextHighlightStyle
```

<a id="overview"></a>

## Overview

Use an [NSAttributedString.TextHighlightStyle](texthighlightstyle.md) structure as the value of the [textHighlightStyle](key/texthighlightstyle.md) attribute. That attribute applies a highlight to the text to emphasize it. The highlight contributes a background color and a contrasting foreground color to the text.

## Topics

### Getting the highlight styles

- [default](texthighlightstyle/default.md): The default highlight style to apply to text.

### Creating a highlight style

- [init(\_:)](texthighlightstyle/init%28__%29.md)
- [init(rawValue:)](texthighlightstyle/init%28rawvalue_%29.md)

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
- [NSAttributedString.TextHighlightColorScheme](texthighlightcolorscheme.md): Constants that specify the highlight color to use with the text.
- [NSAttributedString.TextEffectStyle](texteffectstyle.md): Constants for the type of effect to apply to the text.
- [NSAttributedString.SpellingState](spellingstate.md): Constants for the spelling state attribute key.
- [NSUnderlineStyle](../../uikit/nsunderlinestyle.md): Constants for the underline style and strikethrough style attribute keys.
- [NSWritingDirectionFormatType](../../uikit/nswritingdirectionformattype.md): Constants for the writing direction attribute key.
