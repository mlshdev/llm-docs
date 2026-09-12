> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponentmanager/registrationschangedmessage](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponentmanager/registrationschangedmessage)

# AVAudioUnitComponentManager.RegistrationsChangedMessage

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Type-safe notification message for audio unit component registration changes.

## Declaration

```swift
struct RegistrationsChangedMessage
```

<a id="overview"></a>

## Overview

This notification is posted when the system’s audio component registrations have changed, such as when audio units are installed or removed. The notification object is the shared `AVAudioUnitComponentManager` instance.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../../foundation/notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing registration changes

- [registrationsChangedNotification](registrationschangednotification.md): A notification the component manager generates when it updates its list of components.
