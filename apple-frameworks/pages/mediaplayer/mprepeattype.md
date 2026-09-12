> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mprepeattype](https://developer.apple.com/documentation/mediaplayer/mprepeattype)

# MPRepeatType (Swift)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS · visionOS 1.0+ · watchOS 5.0+

Indicates which items to play repeatedly.

## Declaration

```swift
enum MPRepeatType
```

## Topics

### Repeat types

- [MPRepeatType.off](mprepeattype/off.md): Nothing is repeated during playback.
- [MPRepeatType.one](mprepeattype/one.md): A single item is repeated indefinitely.
- [MPRepeatType.all](mprepeattype/all.md): The current container or playlist is repeated indefinitely.

### Initializers

- [init(rawValue:)](mprepeattype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to changes to media playback mode events

- [MPChangePlaybackRateCommand](mpchangeplaybackratecommand.md): An object that responds to requests to change the playback rate of the playing item.
- [MPChangePlaybackRateCommandEvent](mpchangeplaybackratecommandevent.md): An event requesting a change in the playback rate.
- [MPChangeLanguageOptionCommandEvent](mpchangelanguageoptioncommandevent.md): An event requesting a change in the language option.
- [MPChangeRepeatModeCommand](mpchangerepeatmodecommand.md): An object that responds to requests to change the current repeat mode used during playback.
- [MPChangeRepeatModeCommandEvent](mpchangerepeatmodecommandevent.md): An event requesting a change in the repeat mode.
- [MPChangeShuffleModeCommand](mpchangeshufflemodecommand.md): An object that responds to requests to change the current shuffle mode used during playback.
- [MPChangeShuffleModeCommandEvent](mpchangeshufflemodecommandevent.md): An event requesting a change in the shuffle mode.
- [MPShuffleType](mpshuffletype.md): Indicates which item types to shuffle.

# MPRepeatType (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS · visionOS 1.0+ · watchOS 5.0+

Indicates which items to play repeatedly.

## Declaration

```objectivec
enum MPRepeatType : NSInteger;
```

## Topics

### Repeat types

- [MPRepeatTypeOff](mprepeattype/off.md): Nothing is repeated during playback.
- [MPRepeatTypeOne](mprepeattype/one.md): A single item is repeated indefinitely.
- [MPRepeatTypeAll](mprepeattype/all.md): The current container or playlist is repeated indefinitely.

## See Also

### Responding to changes to media playback mode events

- [MPChangePlaybackRateCommand](mpchangeplaybackratecommand.md): An object that responds to requests to change the playback rate of the playing item.
- [MPChangePlaybackRateCommandEvent](mpchangeplaybackratecommandevent.md): An event requesting a change in the playback rate.
- [MPChangeLanguageOptionCommandEvent](mpchangelanguageoptioncommandevent.md): An event requesting a change in the language option.
- [MPChangeRepeatModeCommand](mpchangerepeatmodecommand.md): An object that responds to requests to change the current repeat mode used during playback.
- [MPChangeRepeatModeCommandEvent](mpchangerepeatmodecommandevent.md): An event requesting a change in the repeat mode.
- [MPChangeShuffleModeCommand](mpchangeshufflemodecommand.md): An object that responds to requests to change the current shuffle mode used during playback.
- [MPChangeShuffleModeCommandEvent](mpchangeshufflemodecommandevent.md): An event requesting a change in the shuffle mode.
- [MPShuffleType](mpshuffletype.md): Indicates which item types to shuffle.
