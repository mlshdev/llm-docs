> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpshuffletype](https://developer.apple.com/documentation/mediaplayer/mpshuffletype)

# MPShuffleType (Swift)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS · visionOS 1.0+ · watchOS 5.0+

Indicates which item types to shuffle.

## Declaration

```swift
enum MPShuffleType
```

## Topics

### Shuffle types

- [MPShuffleType.off](mpshuffletype/off.md): Nothing is shuffled during playback.
- [MPShuffleType.items](mpshuffletype/items.md): Individual items are shuffled during playback.
- [MPShuffleType.collections](mpshuffletype/collections.md): Collections of items are shuffled during playback.

### Initializers

- [init(rawValue:)](mpshuffletype/init%28rawvalue_%29.md)

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
- [MPRepeatType](mprepeattype.md): Indicates which items to play repeatedly.

# MPShuffleType (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS · visionOS 1.0+ · watchOS 5.0+

Indicates which item types to shuffle.

## Declaration

```objectivec
enum MPShuffleType : NSInteger;
```

## Topics

### Shuffle types

- [MPShuffleTypeOff](mpshuffletype/off.md): Nothing is shuffled during playback.
- [MPShuffleTypeItems](mpshuffletype/items.md): Individual items are shuffled during playback.
- [MPShuffleTypeCollections](mpshuffletype/collections.md): Collections of items are shuffled during playback.

## See Also

### Responding to changes to media playback mode events

- [MPChangePlaybackRateCommand](mpchangeplaybackratecommand.md): An object that responds to requests to change the playback rate of the playing item.
- [MPChangePlaybackRateCommandEvent](mpchangeplaybackratecommandevent.md): An event requesting a change in the playback rate.
- [MPChangeLanguageOptionCommandEvent](mpchangelanguageoptioncommandevent.md): An event requesting a change in the language option.
- [MPChangeRepeatModeCommand](mpchangerepeatmodecommand.md): An object that responds to requests to change the current repeat mode used during playback.
- [MPChangeRepeatModeCommandEvent](mpchangerepeatmodecommandevent.md): An event requesting a change in the repeat mode.
- [MPChangeShuffleModeCommand](mpchangeshufflemodecommand.md): An object that responds to requests to change the current shuffle mode used during playback.
- [MPChangeShuffleModeCommandEvent](mpchangeshufflemodecommandevent.md): An event requesting a change in the shuffle mode.
- [MPRepeatType](mprepeattype.md): Indicates which items to play repeatedly.
