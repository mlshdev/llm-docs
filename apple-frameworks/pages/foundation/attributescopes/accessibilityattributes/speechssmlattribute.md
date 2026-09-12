> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/accessibilityattributes/speechssmlattribute](https://developer.apple.com/documentation/foundation/attributescopes/accessibilityattributes/speechssmlattribute)

# AttributeScopes.AccessibilityAttributes.SpeechSSMLAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An attribute for an SSML fragment describing how the annotated range should be spoken.

## Declaration

```swift
@frozen enum SpeechSSMLAttribute
```

<a id="overview"></a>

## Overview

The value is an SSML fragment string. Assistive technologies that produce speech use the fragment to determine pronunciation, language, pacing, and emphasis for the annotated range. Non-speech clients (e.g. Braille) ignore this attribute.

When present, this attribute takes precedence over the older single-purpose speech attributes (IPA notation, spell out, pitch, punctuation, language).

## Relationships

### Conforms To

- [AttributedStringKey](../../attributedstringkey.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DecodableAttributedStringKey](../../decodableattributedstringkey.md)
- [EncodableAttributedStringKey](../../encodableattributedstringkey.md)
- [MarkdownDecodableAttributedStringKey](../../markdowndecodableattributedstringkey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
