> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributescopes/swiftuiattributes/adaptiveimageglyphattribute

# AttributeScopes.SwiftUIAttributes.AdaptiveImageGlyphAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A key for an adaptive image glyph inside a run of attributed text.

## Declaration

```swift
@frozen enum AdaptiveImageGlyphAttribute
```

<a id="overview"></a>

## Overview

An adaptive image glyph is an inline image that flows with text and scales with the surrounding font, such as a Genmoji or a sticker that someone inserts from the keyboard. A text view draws these glyphs in place, so a string that people edit keeps them where they put them:

```
TextField("Message", text: $message)

Text(message)
```

SwiftUI sets this key as people insert glyphs, so you rarely set it yourself. Read it when you need to find the glyphs in a string, for example to strip them before you store the text somewhere that cannot represent them.

## Relationships

### Conforms To

- [AttributedStringKey](../../attributedstringkey.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DecodableAttributedStringKey](../../decodableattributedstringkey.md)
- [EncodableAttributedStringKey](../../encodableattributedstringkey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
