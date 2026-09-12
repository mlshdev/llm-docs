> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand/feedbackstatus](https://developer.apple.com/documentation/nowplaying/mediacommand/feedbackstatus)

# MediaCommand.FeedbackStatus

**Framework:** Now Playing  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The feedback status for a media item.

## Declaration

```swift
enum FeedbackStatus
```

<a id="overview"></a>

## Overview

Use this to represent whether the user has expressed positive, negative, or no preference for the current content.

## Topics

### Enumeration Cases

- [MediaCommand.FeedbackStatus.negative](feedbackstatus/negative.md): The user has expressed negative feedback for the content.
- [MediaCommand.FeedbackStatus.neutral](feedbackstatus/neutral.md): The user has not expressed a preference.
- [MediaCommand.FeedbackStatus.positive](feedbackstatus/positive.md): The user has expressed positive feedback for the content.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing feedback

- [feedback(title:shortTitle:status:\_:)](feedback%28title_shorttitle_status___%29.md): Creates a command that handles user feedback (positive, neutral, or negative) for the current content.
