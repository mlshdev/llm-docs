> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/accessibilityattributes/adjustedpitchattribute](https://developer.apple.com/documentation/foundation/attributescopes/accessibilityattributes/adjustedpitchattribute)

# AttributeScopes.AccessibilityAttributes.AdjustedPitchAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attribute to adjust the pitch the spoken speech.

## Declaration

```swift
@frozen enum AdjustedPitchAttribute
```

<a id="overview"></a>

## Overview

Values between `-1` and `0` result in a lower pitch while values between `0` and `1` result in a higher pitch.

For example, you may want to lower the pitch when an object is deleted, or raise the pitch if an object is inserted.

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
