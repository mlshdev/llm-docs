> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpchangeshufflemodecommand](https://developer.apple.com/documentation/mediaplayer/mpchangeshufflemodecommand)

# MPChangeShuffleModeCommand (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 5.0+

An object that responds to requests to change the current shuffle mode used during playback.

## Declaration

```swift
class MPChangeShuffleModeCommand
```

## Topics

### Retrieving the current shuffle mode

- [currentShuffleType](mpchangeshufflemodecommand/currentshuffletype.md): The current shuffle mode for a media item.

## Relationships

### Inherits From

- [MPRemoteCommand](mpremotecommand.md)

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
- [MPChangeShuffleModeCommandEvent](mpchangeshufflemodecommandevent.md): An event requesting a change in the shuffle mode.
- [MPRepeatType](mprepeattype.md): Indicates which items to play repeatedly.
- [MPShuffleType](mpshuffletype.md): Indicates which item types to shuffle.

# MPChangeShuffleModeCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 5.0+

An object that responds to requests to change the current shuffle mode used during playback.

## Declaration

```objectivec
@interface MPChangeShuffleModeCommand : MPRemoteCommand
```

## Topics

### Retrieving the current shuffle mode

- [currentShuffleType](mpchangeshufflemodecommand/currentshuffletype.md): The current shuffle mode for a media item.

## Relationships

### Inherits From

- [MPRemoteCommand](mpremotecommand.md)

## See Also

### Responding to changes to media playback mode events

- [MPChangePlaybackRateCommand](mpchangeplaybackratecommand.md): An object that responds to requests to change the playback rate of the playing item.
- [MPChangePlaybackRateCommandEvent](mpchangeplaybackratecommandevent.md): An event requesting a change in the playback rate.
- [MPChangeLanguageOptionCommandEvent](mpchangelanguageoptioncommandevent.md): An event requesting a change in the language option.
- [MPChangeRepeatModeCommand](mpchangerepeatmodecommand.md): An object that responds to requests to change the current repeat mode used during playback.
- [MPChangeRepeatModeCommandEvent](mpchangerepeatmodecommandevent.md): An event requesting a change in the repeat mode.
- [MPChangeShuffleModeCommandEvent](mpchangeshufflemodecommandevent.md): An event requesting a change in the shuffle mode.
- [MPRepeatType](mprepeattype.md): Indicates which items to play repeatedly.
- [MPShuffleType](mpshuffletype.md): Indicates which item types to shuffle.
