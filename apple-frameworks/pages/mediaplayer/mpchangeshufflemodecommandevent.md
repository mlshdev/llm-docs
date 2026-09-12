> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpchangeshufflemodecommandevent](https://developer.apple.com/documentation/mediaplayer/mpchangeshufflemodecommandevent)

# MPChangeShuffleModeCommandEvent (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 5.0+

An event requesting a change in the shuffle mode.

## Declaration

```swift
class MPChangeShuffleModeCommandEvent
```

## Topics

### Changing the shuffle mode

- [shuffleType](mpchangeshufflemodecommandevent/shuffletype.md): The shuffle type used when fulfilling the event request.
- [preservesShuffleMode](mpchangeshufflemodecommandevent/preservesshufflemode.md): A Boolean value that indicates whether the shuffle mode is preserved between playback sessions.

## Relationships

### Inherits From

- [MPRemoteCommandEvent](mpremotecommandevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to changes to media playback mode events

- [MPChangePlaybackRateCommand](mpchangeplaybackratecommand.md): An object that responds to requests to change the playback rate of the playing item.
- [MPChangePlaybackRateCommandEvent](mpchangeplaybackratecommandevent.md): An event requesting a change in the playback rate.
- [MPChangeLanguageOptionCommandEvent](mpchangelanguageoptioncommandevent.md): An event requesting a change in the language option.
- [MPChangeRepeatModeCommand](mpchangerepeatmodecommand.md): An object that responds to requests to change the current repeat mode used during playback.
- [MPChangeRepeatModeCommandEvent](mpchangerepeatmodecommandevent.md): An event requesting a change in the repeat mode.
- [MPChangeShuffleModeCommand](mpchangeshufflemodecommand.md): An object that responds to requests to change the current shuffle mode used during playback.
- [MPRepeatType](mprepeattype.md): Indicates which items to play repeatedly.
- [MPShuffleType](mpshuffletype.md): Indicates which item types to shuffle.

# MPChangeShuffleModeCommandEvent (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 5.0+

An event requesting a change in the shuffle mode.

## Declaration

```objectivec
@interface MPChangeShuffleModeCommandEvent : MPRemoteCommandEvent
```

## Topics

### Changing the shuffle mode

- [shuffleType](mpchangeshufflemodecommandevent/shuffletype.md): The shuffle type used when fulfilling the event request.
- [preservesShuffleMode](mpchangeshufflemodecommandevent/preservesshufflemode.md): A Boolean value that indicates whether the shuffle mode is preserved between playback sessions.

## Relationships

### Inherits From

- [MPRemoteCommandEvent](mpremotecommandevent.md)

## See Also

### Responding to changes to media playback mode events

- [MPChangePlaybackRateCommand](mpchangeplaybackratecommand.md): An object that responds to requests to change the playback rate of the playing item.
- [MPChangePlaybackRateCommandEvent](mpchangeplaybackratecommandevent.md): An event requesting a change in the playback rate.
- [MPChangeLanguageOptionCommandEvent](mpchangelanguageoptioncommandevent.md): An event requesting a change in the language option.
- [MPChangeRepeatModeCommand](mpchangerepeatmodecommand.md): An object that responds to requests to change the current repeat mode used during playback.
- [MPChangeRepeatModeCommandEvent](mpchangerepeatmodecommandevent.md): An event requesting a change in the repeat mode.
- [MPChangeShuffleModeCommand](mpchangeshufflemodecommand.md): An object that responds to requests to change the current shuffle mode used during playback.
- [MPRepeatType](mprepeattype.md): Indicates which items to play repeatedly.
- [MPShuffleType](mpshuffletype.md): Indicates which item types to shuffle.
