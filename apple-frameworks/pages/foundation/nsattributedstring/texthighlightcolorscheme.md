> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/texthighlightcolorscheme](https://developer.apple.com/documentation/foundation/nsattributedstring/texthighlightcolorscheme)

# NSAttributedString.TextHighlightColorScheme

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Constants that specify the highlight color to use with the text.

## Declaration

```swift
struct TextHighlightColorScheme
```

<a id="overview"></a>

## Overview

Use an [NSAttributedString.TextHighlightColorScheme](texthighlightcolorscheme.md) structure as the value of the [textHighlightColorScheme](key/texthighlightcolorscheme.md) attribute. That attribute specifies which color to use when drawing the highlight on the text. This attribute specifies only the color option. To display the highlight itself, add the [textHighlightStyle](key/texthighlightstyle.md) attribute to the text.

## Topics

### Getting the color schemes

- [default](texthighlightcolorscheme/default.md): The default system highlight color.
- [blue](texthighlightcolorscheme/blue.md): A blue highlight color.
- [mint](texthighlightcolorscheme/mint.md): A mint green highlight color.
- [orange](texthighlightcolorscheme/orange.md): An orange highlight color.
- [pink](texthighlightcolorscheme/pink.md): A pink highlight color.
- [purple](texthighlightcolorscheme/purple.md): A purple highlight color.

### Creating a color scheme

- [init(\_:)](texthighlightcolorscheme/init%28__%29.md)
- [init(rawValue:)](texthighlightcolorscheme/init%28rawvalue_%29.md)

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
- [NSAttributedString.TextEffectStyle](texteffectstyle.md): Constants for the type of effect to apply to the text.
- [NSAttributedString.SpellingState](spellingstate.md): Constants for the spelling state attribute key.
- [NSUnderlineStyle](../../uikit/nsunderlinestyle.md): Constants for the underline style and strikethrough style attribute keys.
- [NSWritingDirectionFormatType](../../uikit/nswritingdirectionformattype.md): Constants for the writing direction attribute key.
