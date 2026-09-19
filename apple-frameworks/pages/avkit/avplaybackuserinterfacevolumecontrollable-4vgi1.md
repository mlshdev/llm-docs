> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfacevolumecontrollable-4vgi1

# AVPlaybackUserInterfaceVolumeControllable

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Provides volume and audio muting control for media content.

## Declaration

```swift
@MainActor protocol AVPlaybackUserInterfaceVolumeControllable : AnyObject, Observable
```

## Topics

### Instance Properties

- [hasAudio](avplaybackuserinterfacevolumecontrollable-4vgi1/hasaudio.md): Indicates whether the media contains audio tracks.
- [isMuted](avplaybackuserinterfacevolumecontrollable-4vgi1/ismuted.md): Controls whether audio output is temporarily silenced.
- [volume](avplaybackuserinterfacevolumecontrollable-4vgi1/volume.md): The audio output volume as a normalized value between 0.0 and 1.0.

## Relationships

### Inherits From

- [Observable](https://developer.apple.com/documentation/observation/observable)

### Inherited By

- [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md)
