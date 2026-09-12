> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/ipodmusicplayer](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/ipodmusicplayer)

# iPodMusicPlayer (Swift)

**Framework:** Media Player  
**Kind:** Type Property  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Returns the iPod music player, which controls the iPod app’s state.

> The iPod app was renamed. Use the [systemMusicPlayer](systemmusicplayer.md) method instead.

## Declaration

```swift
class var iPodMusicPlayer: MPMusicPlayerController { get }
```

<a id="return-value"></a>

## Return Value

The iPod music player.

<a id="Discussion"></a>

## Discussion

The iPod music player employs the iPod app on your behalf. On instantiation, it takes on the current iPod app state and controls that state as your app runs. Specifically, the shared state includes the following:

- Repeat mode (see [MPMusicRepeatMode](../mpmusicrepeatmode.md))
- Shuffle mode (see [MPMusicShuffleMode](../mpmusicshufflemode.md)
- Now-playing item (see [nowPlayingItem](nowplayingitem.md))
- Playback state (see [playbackState](playbackstate.md))

Other aspects of iPod state, such as the on-the-go playlist, aren’t shared. Music that’s playing continues to play when your app moves to the background.

# iPodMusicPlayer (Objective-C)

**Framework:** Media Player  
**Kind:** Type Property  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Returns the iPod music player, which controls the iPod app’s state.

> The iPod app was renamed. Use the [systemMusicPlayer](systemmusicplayer.md) method instead.

## Declaration

```objectivec
@property (class, nonatomic, readonly) MPMusicPlayerController * iPodMusicPlayer;
```

<a id="return-value"></a>

## Return Value

The iPod music player.

<a id="Discussion"></a>

## Discussion

The iPod music player employs the iPod app on your behalf. On instantiation, it takes on the current iPod app state and controls that state as your app runs. Specifically, the shared state includes the following:

- Repeat mode (see [MPMusicRepeatMode](../mpmusicrepeatmode.md))
- Shuffle mode (see [MPMusicShuffleMode](../mpmusicshufflemode.md)
- Now-playing item (see [nowPlayingItem](nowplayingitem.md))
- Playback state (see [playbackState](playbackstate.md))

Other aspects of iPod state, such as the on-the-go playlist, aren’t shared. Music that’s playing continues to play when your app moves to the background.
