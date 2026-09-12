> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/playbackstate](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/playbackstate)

# playbackState (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The current playback state of the music player.

## Declaration

```swift
var playbackState: MPMusicPlaybackState { get }
```

<a id="Discussion"></a>

## Discussion

If you configure a music player as a system music player, the playback state matches the playback state of the built-in Music app. This is true whether the Music app is using the device Music library or a home shared library. Note, however, that when the Music app is using a home shared library, the music player’s [nowPlayingItem](nowplayingitem.md) property is `nil`.

For the available playback states, see [MPMusicPlaybackState](../mpmusicplaybackstate.md).

## See Also

### Managing playback mode and state

- [nowPlayingItem](nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [indexOfNowPlayingItem](indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [repeatMode](repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](../mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicRepeatMode](../mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](../mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).

# playbackState (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The current playback state of the music player.

## Declaration

```objectivec
@property (nonatomic, readonly) MPMusicPlaybackState playbackState;
```

<a id="Discussion"></a>

## Discussion

If you configure a music player as a system music player, the playback state matches the playback state of the built-in Music app. This is true whether the Music app is using the device Music library or a home shared library. Note, however, that when the Music app is using a home shared library, the music player’s [nowPlayingItem](nowplayingitem.md) property is `nil`.

For the available playback states, see [MPMusicPlaybackState](../mpmusicplaybackstate.md).

## See Also

### Managing playback mode and state

- [nowPlayingItem](nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [indexOfNowPlayingItem](indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [repeatMode](repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](../mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicRepeatMode](../mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](../mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).
