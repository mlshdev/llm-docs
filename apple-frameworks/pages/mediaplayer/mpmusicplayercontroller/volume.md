> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/volume](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/volume)

# volume (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0)

The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).

> To provide UI for adjusting system playback volume, use the [MPVolumeView](../mpvolumeview.md) class, which provides media playback controls that iOS users expect and whose appearance you can customize.

## Declaration

```swift
var volume: Float { get set }
```

## See Also

### Managing playback mode and state

- [nowPlayingItem](nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [indexOfNowPlayingItem](indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [playbackState](playbackstate.md): The current playback state of the music player.
- [repeatMode](repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](../mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicRepeatMode](../mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](../mpmusicshufflemode.md): The shuffle modes for the media player.

# volume (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).

> To provide UI for adjusting system playback volume, use the [MPVolumeView](../mpvolumeview.md) class, which provides media playback controls that iOS users expect and whose appearance you can customize.

## Declaration

```objectivec
@property (nonatomic) float volume;
```

## See Also

### Managing playback mode and state

- [nowPlayingItem](nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [indexOfNowPlayingItem](indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [playbackState](playbackstate.md): The current playback state of the music player.
- [repeatMode](repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](../mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicRepeatMode](../mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](../mpmusicshufflemode.md): The shuffle modes for the media player.
