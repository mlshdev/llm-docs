> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicshufflemode](https://developer.apple.com/documentation/mediaplayer/mpmusicshufflemode)

# MPMusicShuffleMode (Swift)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The shuffle modes for the media player.

## Declaration

```swift
enum MPMusicShuffleMode
```

## Topics

### Constants

- [MPMusicShuffleMode.default](mpmusicshufflemode/default.md): The user’s preferred shuffle mode.
- [MPMusicShuffleMode.off](mpmusicshufflemode/off.md): The playlist is not shuffled.
- [MPMusicShuffleMode.songs](mpmusicshufflemode/songs.md): The playlist is shuffled by song.
- [MPMusicShuffleMode.albums](mpmusicshufflemode/albums.md): The playlist is shuffled by album.

### Initializers

- [init(rawValue:)](mpmusicshufflemode/init%28rawvalue_%29.md)

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
- [MPMusicRepeatMode](mpmusicrepeatmode.md): The repeat modes for the media player.
- [volume](mpmusicplayercontroller/volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).

# MPMusicShuffleMode (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The shuffle modes for the media player.

## Declaration

```objectivec
enum MPMusicShuffleMode : NSInteger;
```

## Topics

### Constants

- [MPMusicShuffleModeDefault](mpmusicshufflemode/default.md): The user’s preferred shuffle mode.
- [MPMusicShuffleModeOff](mpmusicshufflemode/off.md): The playlist is not shuffled.
- [MPMusicShuffleModeSongs](mpmusicshufflemode/songs.md): The playlist is shuffled by song.
- [MPMusicShuffleModeAlbums](mpmusicshufflemode/albums.md): The playlist is shuffled by album.

## See Also

### Managing playback mode and state

- [nowPlayingItem](mpmusicplayercontroller/nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [indexOfNowPlayingItem](mpmusicplayercontroller/indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [playbackState](mpmusicplayercontroller/playbackstate.md): The current playback state of the music player.
- [repeatMode](mpmusicplayercontroller/repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](mpmusicplayercontroller/shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicRepeatMode](mpmusicrepeatmode.md): The repeat modes for the media player.
- [volume](mpmusicplayercontroller/volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).
