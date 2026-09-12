> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacevolumecontrollable-5ystg](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacevolumecontrollable-5ystg)

# AVPlaybackUserInterfaceVolumeControllable

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Provides volume and audio muting control for media content.

## Declaration

```objectivec
@protocol AVPlaybackUserInterfaceVolumeControllable <NSObject>
```

## Topics

### Instance Properties

- [hasAudio](avplaybackuserinterfacevolumecontrollable-5ystg/hasaudio.md): Indicates whether the media contains audio tracks and can produce sound output. Returns NO for video-only content, silent content, or when audio tracks are unavailable. Must be key-value observable.
- [muted](avplaybackuserinterfacevolumecontrollable-5ystg/muted.md): Controls whether audio output is temporarily silenced. When YES, audio is muted regardless of the volume level setting. Must be key-value observable.
- [volume](avplaybackuserinterfacevolumecontrollable-5ystg/volume.md): The audio output volume as a normalized value between 0.0 and 1.0. Must be key-value observable.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-7ti30.md)
