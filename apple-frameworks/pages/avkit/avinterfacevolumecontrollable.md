> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinterfacevolumecontrollable](https://developer.apple.com/documentation/avkit/avinterfacevolumecontrollable)

# AVInterfaceVolumeControllable

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Protocol

Provides volume and audio muting control for media content.

## Declaration

```objectivec
@protocol AVInterfaceVolumeControllable <NSObject>
```

## Topics

### Controlling volume

- [volume](avinterfacevolumecontrollable/volume.md): The audio output level as a normalized value between 0.0 (completely silent) and 1.0 (maximum system volume). This value is independent of the muted state and represents the user’s volume preference. Must be key-value observable.
- [muted](avinterfacevolumecontrollable/muted.md): Controls whether audio output is temporarily silenced. When YES, audio is muted regardless of the volume level setting. Must be key-value observable.
- [hasAudio](avinterfacevolumecontrollable/hasaudio.md): Indicates whether the media contains audio tracks and can produce sound output. Returns NO for video-only content, silent content, or when audio tracks are unavailable. Must be key-value observable.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [AVInterfaceControllable](avinterfacecontrollable.md)
