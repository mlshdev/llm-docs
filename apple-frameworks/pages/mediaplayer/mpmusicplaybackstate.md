> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplaybackstate](https://developer.apple.com/documentation/mediaplayer/mpmusicplaybackstate)

# MPMusicPlaybackState (Swift)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The music player playback state modes.

## Declaration

```swift
enum MPMusicPlaybackState
```

<a id="overview"></a>

## Overview

You determine a music player’s state by checking the [playbackState](mpmusicplayercontroller/playbackstate.md) property. Depending on the property’s value, you can update your application’s user interface or take other appropriate action.

## Topics

### Constants

- [MPMusicPlaybackState.stopped](mpmusicplaybackstate/stopped.md): The music player is stopped.
- [MPMusicPlaybackState.playing](mpmusicplaybackstate/playing.md): The music player is playing.
- [MPMusicPlaybackState.paused](mpmusicplaybackstate/paused.md): The music player is paused.
- [MPMusicPlaybackState.interrupted](mpmusicplaybackstate/interrupted.md): The music player has been interrupted, such as by an incoming phone call.
- [MPMusicPlaybackState.seekingForward](mpmusicplaybackstate/seekingforward.md): The music player is seeking forward.
- [MPMusicPlaybackState.seekingBackward](mpmusicplaybackstate/seekingbackward.md): The music player is seeking backward.

### Initializers

- [init(rawValue:)](mpmusicplaybackstate/init%28rawvalue_%29.md)

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
- [MPMusicRepeatMode](mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](mpmusicplayercontroller/volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).

# MPMusicPlaybackState (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The music player playback state modes.

## Declaration

```objectivec
enum MPMusicPlaybackState : NSInteger;
```

<a id="overview"></a>

## Overview

You determine a music player’s state by checking the [playbackState](mpmusicplayercontroller/playbackstate.md) property. Depending on the property’s value, you can update your application’s user interface or take other appropriate action.

## Topics

### Constants

- [MPMusicPlaybackStateStopped](mpmusicplaybackstate/stopped.md): The music player is stopped.
- [MPMusicPlaybackStatePlaying](mpmusicplaybackstate/playing.md): The music player is playing.
- [MPMusicPlaybackStatePaused](mpmusicplaybackstate/paused.md): The music player is paused.
- [MPMusicPlaybackStateInterrupted](mpmusicplaybackstate/interrupted.md): The music player has been interrupted, such as by an incoming phone call.
- [MPMusicPlaybackStateSeekingForward](mpmusicplaybackstate/seekingforward.md): The music player is seeking forward.
- [MPMusicPlaybackStateSeekingBackward](mpmusicplaybackstate/seekingbackward.md): The music player is seeking backward.

## See Also

### Managing playback mode and state

- [nowPlayingItem](mpmusicplayercontroller/nowplayingitem.md): The currently-playing media item, or the media item in a queue that you designated to begin playback with.
- [indexOfNowPlayingItem](mpmusicplayercontroller/indexofnowplayingitem.md): The index of the now playing item in the current playback queue.
- [playbackState](mpmusicplayercontroller/playbackstate.md): The current playback state of the music player.
- [repeatMode](mpmusicplayercontroller/repeatmode.md): The current repeat mode of the music player.
- [shuffleMode](mpmusicplayercontroller/shufflemode.md): The current shuffle mode of the music player.
- [MPMusicRepeatMode](mpmusicrepeatmode.md): The repeat modes for the media player.
- [MPMusicShuffleMode](mpmusicshufflemode.md): The shuffle modes for the media player.
- [volume](mpmusicplayercontroller/volume.md): Deprecated. The audio playback volume for the music player, in the range from `0.0` (silent) through `1.0` (maximum volume).
