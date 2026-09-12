> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/accessibilityattributes/includespunctuationattribute](https://developer.apple.com/documentation/foundation/attributescopes/accessibilityattributes/includespunctuationattribute)

# AttributeScopes.AccessibilityAttributes.IncludesPunctuationAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attribute to define how punctuation should be spoken.

## Declaration

```swift
@frozen enum IncludesPunctuationAttribute
```

<a id="overview"></a>

## Overview

When `true`, all punctuation will be spoken. When `false`, no punctuation will be spoken. If this attribute is not present, the user’s settings will be used.

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
