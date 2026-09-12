> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpchangelanguageoptioncommandevent](https://developer.apple.com/documentation/mediaplayer/mpchangelanguageoptioncommandevent)

# MPChangeLanguageOptionCommandEvent (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

An event requesting a change in the language option.

## Declaration

```swift
class MPChangeLanguageOptionCommandEvent
```

## Topics

### Changing the language option

- [languageOption](mpchangelanguageoptioncommandevent/languageoption.md): The requested language option to change.
- [setting](mpchangelanguageoptioncommandevent/setting.md): The extent of the language setting change.
- [MPChangeLanguageOptionSetting](mpchangelanguageoptionsetting.md): The states that determine when language option changes take effect.

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
- [MPChangeRepeatModeCommand](mpchangerepeatmodecommand.md): An object that responds to requests to change the current repeat mode used during playback.
- [MPChangeRepeatModeCommandEvent](mpchangerepeatmodecommandevent.md): An event requesting a change in the repeat mode.
- [MPChangeShuffleModeCommand](mpchangeshufflemodecommand.md): An object that responds to requests to change the current shuffle mode used during playback.
- [MPChangeShuffleModeCommandEvent](mpchangeshufflemodecommandevent.md): An event requesting a change in the shuffle mode.
- [MPRepeatType](mprepeattype.md): Indicates which items to play repeatedly.
- [MPShuffleType](mpshuffletype.md): Indicates which item types to shuffle.

# MPChangeLanguageOptionCommandEvent (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

An event requesting a change in the language option.

## Declaration

```objectivec
@interface MPChangeLanguageOptionCommandEvent : MPRemoteCommandEvent
```

## Topics

### Changing the language option

- [languageOption](mpchangelanguageoptioncommandevent/languageoption.md): The requested language option to change.
- [setting](mpchangelanguageoptioncommandevent/setting.md): The extent of the language setting change.
- [MPChangeLanguageOptionSetting](mpchangelanguageoptionsetting.md): The states that determine when language option changes take effect.

## Relationships

### Inherits From

- [MPRemoteCommandEvent](mpremotecommandevent.md)

## See Also

### Responding to changes to media playback mode events

- [MPChangePlaybackRateCommand](mpchangeplaybackratecommand.md): An object that responds to requests to change the playback rate of the playing item.
- [MPChangePlaybackRateCommandEvent](mpchangeplaybackratecommandevent.md): An event requesting a change in the playback rate.
- [MPChangeRepeatModeCommand](mpchangerepeatmodecommand.md): An object that responds to requests to change the current repeat mode used during playback.
- [MPChangeRepeatModeCommandEvent](mpchangerepeatmodecommandevent.md): An event requesting a change in the repeat mode.
- [MPChangeShuffleModeCommand](mpchangeshufflemodecommand.md): An object that responds to requests to change the current shuffle mode used during playback.
- [MPChangeShuffleModeCommandEvent](mpchangeshufflemodecommandevent.md): An event requesting a change in the shuffle mode.
- [MPRepeatType](mprepeattype.md): Indicates which items to play repeatedly.
- [MPShuffleType](mpshuffletype.md): Indicates which item types to shuffle.
