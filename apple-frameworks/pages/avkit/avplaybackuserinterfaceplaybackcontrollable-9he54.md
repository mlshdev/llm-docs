> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfaceplaybackcontrollable-9he54](https://developer.apple.com/documentation/avkit/avplaybackuserinterfaceplaybackcontrollable-9he54)

# AVPlaybackUserInterfacePlaybackControllable

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Provides playback control and state management for media content.

## Declaration

```swift
@MainActor protocol AVPlaybackUserInterfacePlaybackControllable : AnyObject, Observable
```

## Topics

### Instance Properties

- [containsLiveStreamingContent](avplaybackuserinterfaceplaybackcontrollable-9he54/containslivestreamingcontent.md): Indicates whether the content is a live stream.
- [error](avplaybackuserinterfaceplaybackcontrollable-9he54/error.md): Error information when the source encounters a playback failure.
- [isBuffering](avplaybackuserinterfaceplaybackcontrollable-9he54/isbuffering.md): Indicates whether the media source is currently stalled waiting for data.
- [isPlaying](avplaybackuserinterfaceplaybackcontrollable-9he54/isplaying.md): Indicates whether playback is active.
- [isReady](avplaybackuserinterfaceplaybackcontrollable-9he54/isready.md): Indicates whether the media source is ready to begin playback.
- [playbackSpeed](avplaybackuserinterfaceplaybackcontrollable-9he54/playbackspeed.md): The user’s preferred playback speed multiplier. This value is preserved across scanning operations.
- [scanSpeed](avplaybackuserinterfaceplaybackcontrollable-9he54/scanspeed.md): The speed multiplier used during scanning (fast-forward or rewind). This is a transient override active only while `state` is scanning. It does not affect `playbackSpeed`. When scanning ends, playback resumes at `playbackSpeed`.
- [state](avplaybackuserinterfaceplaybackcontrollable-9he54/state.md): The current transport state of the playback source.
- [supportedSeekCapabilities](avplaybackuserinterfaceplaybackcontrollable-9he54/supportedseekcapabilities.md): The supported timeline navigation operations.

## Relationships

### Inherits From

- [Observable](https://developer.apple.com/documentation/observation/observable)

### Inherited By

- [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md)

## See Also

### Playback

- [AVPlaybackUserInterfacePlaybackState](avplaybackuserinterfaceplaybackstate.md): Describes possible transport states of the playback source.
- [AVPlaybackUserInterfaceSeekCapabilities](avplaybackuserinterfaceseekcapabilities.md): Describes navigation capabilities of the media source.
