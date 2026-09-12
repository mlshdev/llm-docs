> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicrepeatmode](https://developer.apple.com/documentation/mediaplayer/mpmusicrepeatmode)

# MPMusicRepeatMode (Swift)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The repeat modes for the media player.

## Declaration

```swift
enum MPMusicRepeatMode
```

## Topics

### Constants

- [MPMusicRepeatMode.default](mpmusicrepeatmode/default.md): The user’s preferred repeat mode.
- [MPMusicRepeatMode.none](mpmusicrepeatmode/none.md): The music player will not repeat the current song or playlist.
- [MPMusicRepeatMode.one](mpmusicrepeatmode/one.md): The music player will repeat the current song.
- [MPMusicRepeatMode.all](mpmusicrepeatmode/all.md): The music player will repeat the current playlist.

### Initializers

- [init(rawValue:)](mpmusicrepeatmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing playback mode and state

- [nowPlayingItem](mpmusicplayercontroller/nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [indexOfNowPlayingItem](mpmusicplayercontroller/indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [playbackState](mpmusicplayercontroller/playbackstate.md): The current playback state of the music player.
- [repeatMode](mpmusicplayercontroller/repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](mpmusicplayercontroller/shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicShuffleMode](mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](mpmusicplayercontroller/volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).

# MPMusicRepeatMode (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The repeat modes for the media player.

## Declaration

```objectivec
enum MPMusicRepeatMode : NSInteger;
```

## Topics

### Constants

- [MPMusicRepeatModeDefault](mpmusicrepeatmode/default.md): The user’s preferred repeat mode.
- [MPMusicRepeatModeNone](mpmusicrepeatmode/none.md): The music player will not repeat the current song or playlist.
- [MPMusicRepeatModeOne](mpmusicrepeatmode/one.md): The music player will repeat the current song.
- [MPMusicRepeatModeAll](mpmusicrepeatmode/all.md): The music player will repeat the current playlist.

## See Also

### Managing playback mode and state

- [nowPlayingItem](mpmusicplayercontroller/nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [indexOfNowPlayingItem](mpmusicplayercontroller/indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [playbackState](mpmusicplayercontroller/playbackstate.md): The current playback state of the music player.
- [repeatMode](mpmusicplayercontroller/repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](mpmusicplayercontroller/shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicShuffleMode](mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](mpmusicplayercontroller/volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).
