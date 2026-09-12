> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponent/tagsdidchangemessage](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponent/tagsdidchangemessage)

# AVAudioUnitComponent.TagsDidChangeMessage

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** macOS 27.0+

Type-safe notification message for audio unit component tag changes.

## Declaration

```swift
struct TagsDidChangeMessage
```

<a id="overview"></a>

## Overview

This notification is posted when the user tags of an audio unit component are modified. The notification object is the `AVAudioUnitComponent` whose tags changed.

> **Note**

> User tags are only supported on macOS.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../../foundation/notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
