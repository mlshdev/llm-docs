> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandevent](https://developer.apple.com/documentation/mediaplayer/mpremotecommandevent)

# MPRemoteCommandEvent (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

A description of a command sent by an external media player.

## Declaration

```swift
class MPRemoteCommandEvent
```

## Topics

### Retrieving command information

- [command](mpremotecommandevent/command.md): The command that sent the event.
- [timestamp](mpremotecommandevent/timestamp.md): The time the event occurred.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPChangeLanguageOptionCommandEvent](mpchangelanguageoptioncommandevent.md)
- [MPChangePlaybackPositionCommandEvent](mpchangeplaybackpositioncommandevent.md)
- [MPChangePlaybackRateCommandEvent](mpchangeplaybackratecommandevent.md)
- [MPChangeRepeatModeCommandEvent](mpchangerepeatmodecommandevent.md)
- [MPChangeShuffleModeCommandEvent](mpchangeshufflemodecommandevent.md)
- [MPFeedbackCommandEvent](mpfeedbackcommandevent.md)
- [MPRatingCommandEvent](mpratingcommandevent.md)
- [MPSeekCommandEvent](mpseekcommandevent.md)
- [MPSkipIntervalCommandEvent](mpskipintervalcommandevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting up the remote event handler

- [Becoming a now playable app](becoming-a-now-playable-app.md): Ensure your app is eligible to become the Now Playing app by adopting best practices for providing Now Playing info and registering for remote command center actions.
- [MPRemoteCommandCenter](mpremotecommandcenter.md): An object that responds to remote control events sent by external accessories and system controls.
- [MPRemoteCommand](mpremotecommand.md): An object that responds to remote command events.

# MPRemoteCommandEvent (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

A description of a command sent by an external media player.

## Declaration

```objectivec
@interface MPRemoteCommandEvent : NSObject
```

## Topics

### Retrieving command information

- [command](mpremotecommandevent/command.md): The command that sent the event.
- [timestamp](mpremotecommandevent/timestamp.md): The time the event occurred.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPChangeLanguageOptionCommandEvent](mpchangelanguageoptioncommandevent.md)
- [MPChangePlaybackPositionCommandEvent](mpchangeplaybackpositioncommandevent.md)
- [MPChangePlaybackRateCommandEvent](mpchangeplaybackratecommandevent.md)
- [MPChangeRepeatModeCommandEvent](mpchangerepeatmodecommandevent.md)
- [MPChangeShuffleModeCommandEvent](mpchangeshufflemodecommandevent.md)
- [MPFeedbackCommandEvent](mpfeedbackcommandevent.md)
- [MPRatingCommandEvent](mpratingcommandevent.md)
- [MPSeekCommandEvent](mpseekcommandevent.md)
- [MPSkipIntervalCommandEvent](mpskipintervalcommandevent.md)

## See Also

### Setting up the remote event handler

- [Becoming a now playable app](becoming-a-now-playable-app.md): Ensure your app is eligible to become the Now Playing app by adopting best practices for providing Now Playing info and registering for remote command center actions.
- [MPRemoteCommandCenter](mpremotecommandcenter.md): An object that responds to remote control events sent by external accessories and system controls.
- [MPRemoteCommand](mpremotecommand.md): An object that responds to remote command events.
