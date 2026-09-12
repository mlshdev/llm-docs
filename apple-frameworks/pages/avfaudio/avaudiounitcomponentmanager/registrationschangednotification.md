> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponentmanager/registrationschangednotification](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponentmanager/registrationschangednotification)

# registrationsChangedNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A notification the component manager generates when it updates its list of components.

## Declaration

```swift
class let registrationsChangedNotification: NSNotification.Name
```

## See Also

### Observing registration changes

- [AVAudioUnitComponentManager.RegistrationsChangedMessage](registrationschangedmessage.md): Type-safe notification message for audio unit component registration changes.

# AVAudioUnitComponentManagerRegistrationsChangedNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A notification the component manager generates when it updates its list of components.

## Declaration

```objectivec
extern NSNotificationName const AVAudioUnitComponentManagerRegistrationsChangedNotification;
```
