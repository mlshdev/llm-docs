> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpchangeplaybackratecommand](https://developer.apple.com/documentation/mediaplayer/mpchangeplaybackratecommand)

# MPChangePlaybackRateCommand (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

An object that responds to requests to change the playback rate of the playing item.

## Declaration

```swift
class MPChangePlaybackRateCommand
```

<a id="overview"></a>

## Overview

Apps can change the current playback rate of a media item to one of the supported rates defined by the [supportedPlaybackRates](mpchangeplaybackratecommand/supportedplaybackrates.md) property.

## Topics

### Retrieving playback rates

- [supportedPlaybackRates](mpchangeplaybackratecommand/supportedplaybackrates.md): The supported playback rates for a media item.

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

- [MPChangePlaybackRateCommandEvent](mpchangeplaybackratecommandevent.md): An event requesting a change in the playback rate.
- [MPChangeLanguageOptionCommandEvent](mpchangelanguageoptioncommandevent.md): An event requesting a change in the language option.
- [MPChangeRepeatModeCommand](mpchangerepeatmodecommand.md): An object that responds to requests to change the current repeat mode used during playback.
- [MPChangeRepeatModeCommandEvent](mpchangerepeatmodecommandevent.md): An event requesting a change in the repeat mode.
- [MPChangeShuffleModeCommand](mpchangeshufflemodecommand.md): An object that responds to requests to change the current shuffle mode used during playback.
- [MPChangeShuffleModeCommandEvent](mpchangeshufflemodecommandevent.md): An event requesting a change in the shuffle mode.
- [MPRepeatType](mprepeattype.md): Indicates which items to play repeatedly.
- [MPShuffleType](mpshuffletype.md): Indicates which item types to shuffle.

# MPChangePlaybackRateCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

An object that responds to requests to change the playback rate of the playing item.

## Declaration

```objectivec
@interface MPChangePlaybackRateCommand : MPRemoteCommand
```

<a id="overview"></a>

## Overview

Apps can change the current playback rate of a media item to one of the supported rates defined by the [supportedPlaybackRates](mpchangeplaybackratecommand/supportedplaybackrates.md) property.

## Topics

### Retrieving playback rates

- [supportedPlaybackRates](mpchangeplaybackratecommand/supportedplaybackrates.md): The supported playback rates for a media item.

## Relationships

### Inherits From

- [MPRemoteCommand](mpremotecommand.md)

## See Also

### Responding to changes to media playback mode events

- [MPChangePlaybackRateCommandEvent](mpchangeplaybackratecommandevent.md): An event requesting a change in the playback rate.
- [MPChangeLanguageOptionCommandEvent](mpchangelanguageoptioncommandevent.md): An event requesting a change in the language option.
- [MPChangeRepeatModeCommand](mpchangerepeatmodecommand.md): An object that responds to requests to change the current repeat mode used during playback.
- [MPChangeRepeatModeCommandEvent](mpchangerepeatmodecommandevent.md): An event requesting a change in the repeat mode.
- [MPChangeShuffleModeCommand](mpchangeshufflemodecommand.md): An object that responds to requests to change the current shuffle mode used during playback.
- [MPChangeShuffleModeCommandEvent](mpchangeshufflemodecommandevent.md): An event requesting a change in the shuffle mode.
- [MPRepeatType](mprepeattype.md): Indicates which items to play repeatedly.
- [MPShuffleType](mpshuffletype.md): Indicates which item types to shuffle.
