> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/accessibilityattributes/ipanotationattribute](https://developer.apple.com/documentation/foundation/attributescopes/accessibilityattributes/ipanotationattribute)

# AttributeScopes.AccessibilityAttributes.IPANotationAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attribute to define the International Phonetic Alphabet representation for speech.

## Declaration

```swift
@frozen enum IPANotationAttribute
```

<a id="overview"></a>

## Overview

The IPA representation defines pronunciation of words that have the same spelling but different sounds.

For example, consider the different pronunciations of the word “live” in the following two sentences:

- “Anne wants to live on Main Street.”
- “Maria wants to go to the live concert.”

In the first sentence, “live” rhymes with “give.”  Its IPA representation would be “lɪv”. In the second sentence, it rhymes with “hive”. Its IPA representation would be “laɪv”.

> **Note**

> This attribute is not used on macOS

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
