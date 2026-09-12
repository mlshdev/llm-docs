> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/nowplayingitem](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/nowplayingitem)

# nowPlayingItem (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The currently-playing media item, or the media item in a queue that you designated to begin playback with.

## Declaration

```swift
@NSCopying var nowPlayingItem: MPMediaItem? { get set }
```

<a id="Discussion"></a>

## Discussion

To specify that playback should begin at a particular media item in the playback queue, set this property to that item while the music player is in a stopped or paused state.

If no media item is playing or designated to play, this property’s value is `nil`.

If you use the system music player and the user plays an item from another library using Home Sharing, the value of this property is [nil](../../objectivec/nil-227m0.md).

## See Also

### Managing playback mode and state

- [indexOfNowPlayingItem](indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [playbackState](playbackstate.md): The current playback state of the music player.
- [repeatMode](repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](../mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicRepeatMode](../mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](../mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).

# nowPlayingItem (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The currently-playing media item, or the media item in a queue that you designated to begin playback with.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MPMediaItem * nowPlayingItem;
```

<a id="Discussion"></a>

## Discussion

To specify that playback should begin at a particular media item in the playback queue, set this property to that item while the music player is in a stopped or paused state.

If no media item is playing or designated to play, this property’s value is `nil`.

If you use the system music player and the user plays an item from another library using Home Sharing, the value of this property is [nil](../../objectivec/nil-227m0.md).

## See Also

### Managing playback mode and state

- [indexOfNowPlayingItem](indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [playbackState](playbackstate.md): The current playback state of the music player.
- [repeatMode](repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](shufflemode.md): The current shuffle mode of the music player.
- [MPMusicPlaybackState](../mpmusicplaybackstate.md): The music player playback state modes.
- [MPMusicRepeatMode](../mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](../mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).
