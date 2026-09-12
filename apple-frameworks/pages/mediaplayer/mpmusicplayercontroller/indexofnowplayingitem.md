> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/indexofnowplayingitem](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/indexofnowplayingitem)

# indexOfNowPlayingItem (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The index of the now playing item in the current playback queue.

## Declaration

```swift
var indexOfNowPlayingItem: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is `NSNotFound` if the index isn’t valid, for example, if the playback queue is empty.

## See Also

### Managing playback mode and state

- [nowPlayingItem](nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [playbackState](playbackstate.md): The current playback state of the music player.
- [repeatMode](repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](../mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicRepeatMode](../mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](../mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).

# indexOfNowPlayingItem (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The index of the now playing item in the current playback queue.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger indexOfNowPlayingItem;
```

<a id="Discussion"></a>

## Discussion

This property’s value is `NSNotFound` if the index isn’t valid, for example, if the playback queue is empty.

## See Also

### Managing playback mode and state

- [nowPlayingItem](nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [playbackState](playbackstate.md): The current playback state of the music player.
- [repeatMode](repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](../mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicRepeatMode](../mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](../mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).
