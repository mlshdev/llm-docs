> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/accessibilityattributes/announcementpriorityattribute](https://developer.apple.com/documentation/foundation/attributescopes/accessibilityattributes/announcementpriorityattribute)

# AttributeScopes.AccessibilityAttributes.AnnouncementPriorityAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An attribute to define the urgency of the announcement.

## Declaration

```swift
@frozen enum AnnouncementPriorityAttribute
```

<a id="overview"></a>

## Overview

For example, when `low` is specified, announcements are queued and spoken when other speech utterances have completed. When `default` is specified, announcements will interrupt existing speech, but are interruptible if a new speech utterance is started. When `high` is specified, announcements will interrupt other speech and cannot be interrupted once started.

## Topics

### Enumerations

- [AttributeScopes.AccessibilityAttributes.AnnouncementPriorityAttribute.AnnouncementPriority](announcementpriorityattribute/announcementpriority.md): A priority level used by accessibility clients, such as VoiceOver, to control how announcements are queued and presented.

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
