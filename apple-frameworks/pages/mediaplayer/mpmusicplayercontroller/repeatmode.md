> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/repeatmode](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/repeatmode)

# repeatMode (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The current repeat mode of the music player.

## Declaration

```swift
var repeatMode: MPMusicRepeatMode { get set }
```

<a id="Discussion"></a>

## Discussion

For the available repeat modes, see [MPMusicRepeatMode](../mpmusicrepeatmode.md). If not explicitly set, `repeatMode` defaults to [MPMusicRepeatMode.default](../mpmusicrepeatmode/default.md).

## See Also

### Managing playback mode and state

- [nowPlayingItem](nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [indexOfNowPlayingItem](indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [playbackState](playbackstate.md): The current playback state of the music player.
- [shuffleMode](shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](../mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicRepeatMode](../mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](../mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).

# repeatMode (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The current repeat mode of the music player.

## Declaration

```objectivec
@property (nonatomic) MPMusicRepeatMode repeatMode;
```

<a id="Discussion"></a>

## Discussion

For the available repeat modes, see [MPMusicRepeatMode](../mpmusicrepeatmode.md). If not explicitly set, `repeatMode` defaults to [MPMusicRepeatModeDefault](../mpmusicrepeatmode/default.md).

## See Also

### Managing playback mode and state

- [nowPlayingItem](nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [indexOfNowPlayingItem](indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [playbackState](playbackstate.md): The current playback state of the music player.
- [shuffleMode](shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](../mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicRepeatMode](../mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](../mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).
