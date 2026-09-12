> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/accessibilityattributes/textualcontextattribute](https://developer.apple.com/documentation/foundation/attributescopes/accessibilityattributes/textualcontextattribute)

# AttributeScopes.AccessibilityAttributes.TextualContextAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attribute for the textual context.

## Declaration

```swift
@frozen enum TextualContextAttribute
```

<a id="overview"></a>

## Overview

Assistive technologies can use this property to choose an appropriate way to output the text. For example, when encountering a source coding context, VoiceOver could choose to speak all punctuation.

> **Note**

> This attribute is not used on macOS

## Topics

### Enumerations

- [AttributeScopes.AccessibilityAttributes.TextualContextAttribute.TextualContext](textualcontextattribute/textualcontext.md): Textual context that assistive technologies can use to improve the presentation of spoken text.

## Relationships

### Conforms To

- [AttributedStringKey](../../attributedstringkey.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DecodableAttributedStringKey](../../decodableattributedstringkey.md)
- [EncodableAttributedStringKey](../../encodableattributedstringkey.md)
- [MarkdownDecodableAttributedStringKey](../../markdowndecodableattributedstringkey.md)
- [ObjectiveCConvertibleAttributedStringKey](../../objectivecconvertibleattributedstringkey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
