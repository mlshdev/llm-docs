> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/systemmusicplayer](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/systemmusicplayer)

# systemMusicPlayer (Swift)

**Framework:** Media Player  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns the system music player, which controls the Music app’s state.

## Declaration

```swift
class var systemMusicPlayer: any MPMusicPlayerController & MPSystemMusicPlayerController { get }
```

<a id="return-value"></a>

## Return Value

The system music player.

<a id="Discussion"></a>

## Discussion

The System music player employs the Music app on your behalf. On instantiation, it takes on the current Music app state and controls that state as your app runs. Specifically, the shared state includes the following:

- Repeat mode (see [MPMusicRepeatMode](../mpmusicrepeatmode.md))
- Shuffle mode (see [MPMusicShuffleMode](../mpmusicshufflemode.md))
- Now-playing item (see [nowPlayingItem](nowplayingitem.md))
- Playback state (see [playbackState](playbackstate.md))

Other aspects of the Music app’s state aren’t shared. Music that’s playing continues to play when your app moves to the background.

## See Also

### Getting a music player

- [applicationMusicPlayer](applicationmusicplayer.md): Returns the application music player.
- [applicationQueuePlayer](applicationqueueplayer.md): Returns the application queue music player.

# systemMusicPlayer (Objective-C)

**Framework:** Media Player  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns the system music player, which controls the Music app’s state.

## Declaration

```objectivec
@property (class, nonatomic, readonly) MPMusicPlayerController<MPSystemMusicPlayerController> * systemMusicPlayer;
```

<a id="return-value"></a>

## Return Value

The system music player.

<a id="Discussion"></a>

## Discussion

The System music player employs the Music app on your behalf. On instantiation, it takes on the current Music app state and controls that state as your app runs. Specifically, the shared state includes the following:

- Repeat mode (see [MPMusicRepeatMode](../mpmusicrepeatmode.md))
- Shuffle mode (see [MPMusicShuffleMode](../mpmusicshufflemode.md))
- Now-playing item (see [nowPlayingItem](nowplayingitem.md))
- Playback state (see [playbackState](playbackstate.md))

Other aspects of the Music app’s state aren’t shared. Music that’s playing continues to play when your app moves to the background.

## See Also

### Getting a music player

- [applicationMusicPlayer](applicationmusicplayer.md): Returns the application music player.
- [applicationQueuePlayer](applicationqueueplayer.md): Returns the application queue music player.
