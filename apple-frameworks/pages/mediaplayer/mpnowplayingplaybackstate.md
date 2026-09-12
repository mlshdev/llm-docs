> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayingplaybackstate](https://developer.apple.com/documentation/mediaplayer/mpnowplayingplaybackstate)

# MPNowPlayingPlaybackState (Swift)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

The playback state of the app.

## Declaration

```swift
enum MPNowPlayingPlaybackState
```

## Topics

### Playback states

- [MPNowPlayingPlaybackState.unknown](mpnowplayingplaybackstate/unknown.md): The current state of the app is unknown.
- [MPNowPlayingPlaybackState.playing](mpnowplayingplaybackstate/playing.md): The app is currently playing a media item.
- [MPNowPlayingPlaybackState.paused](mpnowplayingplaybackstate/paused.md): The app is currently paused.
- [MPNowPlayingPlaybackState.stopped](mpnowplayingplaybackstate/stopped.md): The app has stopped playing.
- [MPNowPlayingPlaybackState.interrupted](mpnowplayingplaybackstate/interrupted.md): The app has been interrupted during playback.

### Initializers

- [init(rawValue:)](mpnowplayingplaybackstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting the playback state in macOS

- [playbackState](mpnowplayinginfocenter/playbackstate.md): The current playback state of the app.

# MPNowPlayingPlaybackState (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

The playback state of the app.

## Declaration

```objectivec
enum MPNowPlayingPlaybackState : NSUInteger;
```

## Topics

### Playback states

- [MPNowPlayingPlaybackStateUnknown](mpnowplayingplaybackstate/unknown.md): The current state of the app is unknown.
- [MPNowPlayingPlaybackStatePlaying](mpnowplayingplaybackstate/playing.md): The app is currently playing a media item.
- [MPNowPlayingPlaybackStatePaused](mpnowplayingplaybackstate/paused.md): The app is currently paused.
- [MPNowPlayingPlaybackStateStopped](mpnowplayingplaybackstate/stopped.md): The app has stopped playing.
- [MPNowPlayingPlaybackStateInterrupted](mpnowplayingplaybackstate/interrupted.md): The app has been interrupted during playback.

## See Also

### Setting the playback state in macOS

- [playbackState](mpnowplayinginfocenter/playbackstate.md): The current playback state of the app.
